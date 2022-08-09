/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, Ref, useCallback, useEffect, useRef, useState } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';
import { always, any, clamp, dec, inc, pipe, prop } from 'ramda';

import './NxCombobox.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
import { useUniqueId } from '../../util/idUtil';
import useMutationObserver from '@rooks/use-mutation-observer';
import DataItem from '../../util/DataItem';
export { Props } from './types';

export const SEARCH_DEBOUNCE_TIME = 500;

function NxComboboxRender<T extends string | number = string>(
  props: Props<T>,
  externalRef: Ref<HTMLDivElement>
) {
  const {
        className: classNameProp,
        loading,
        error,
        matches,
        onSelect,
        searchText,
        onSearchTextChange,
        onSearch,
        long,
        short,
        disabled,
        emptyMessage,
        ...attrs
      } = props,

      isEmpty = !matches.length,
      [isSelected, setIsSelected] = useState(false),
      showDropdown = !!(searchText && !disabled && !isSelected),

      ref = useRef<HTMLDivElement>(null),
      mergedRef = useMergedRef(externalRef, ref),
      dropdownRef = useRef<HTMLDivElement>(null),
      filterRef = useRef<HTMLDivElement>(null),
      elFocusedOnMostRecentRender = useRef<Element | null>(null),

      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [elToFocusId, setElToFocusId] = useState(''),

      dropdownId = useUniqueId('nx-combobox-dropdown'),
      dropdownRole = error || loading || isEmpty ? 'alert' : 'listbox',

      filterClassName = classnames('nx-combobox__input', { 'nx-text-input--long': long,
        'nx-text-input--short': short }),
      className = classnames('nx-combobox', classNameProp, {
        'nx-combobox--dropdown-showable': showDropdown
      }),
      dropdownClassName = classnames('nx-combobox__menu', {
        'nx-combobox__menu--error': !!error
      });

  // There is a requirement that when there is an error querying the data, if the user navigates away from
  // the component and then comes back to it the search should be retried automatically
  function handleComponentFocus(evt: FocusEvent<HTMLDivElement>) {
    // check if this is focus coming into the component from somewhere else on the page, not just moving between
    // children of this component and not from focus coming into the browser from some other window
    const comingFromOutsidePage = evt.relatedTarget === null,
        comingFromChildNode = evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget);

    if (!(comingFromOutsidePage || comingFromChildNode) && error) {
      doSearch(searchText);
    }
  }

  function handleComponentBlur() {
    dropdownRef.current?.scrollTo({top: 0});
    setElToFocusId('');
    setFocusableBtnIndex(null);
  }

  function handleFilterChange(value: string) {
    setIsSelected(false);
    setElToFocusId('');
    setFocusableBtnIndex(null);
    onSearchTextChange(value);

    if (value.trim() !== searchText.trim()) {
      doSearch(value);
    }
  }

  // helper for focusing different buttons in the dropdown menu
  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = dropdownRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;
        if (elToFocus) {
          setElToFocusId(elToFocus.id);
          setFocusableBtnIndex(newFocusableBtnIndex);
        }
      },
      focusNext = adjustBtnFocus(inc),
      focusPrev = adjustBtnFocus(dec),
      focusFirst = adjustBtnFocus(always(0)),
      focusLast = adjustBtnFocus(always(matches.length - 1));

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    switch (evt.key) {
      case 'Enter':
        if (showDropdown) {
          typeof focusableBtnIndex === 'number' && elToFocusId ? handleOnClick(matches[focusableBtnIndex])
            : setIsSelected(true);
        }
        evt.preventDefault();
        break;
      case 'Home':
        focusFirst();
        evt.preventDefault();
        break;
      case 'End':
        focusLast();
        evt.preventDefault();
        break;
      case 'ArrowDown':
        if (!isEmpty && !showDropdown) {
          setIsSelected(false);
        }
        elToFocusId
          ? (dropdownRef.current?.children[matches.length - 1].id === elToFocusId ? focusFirst() : focusNext())
          : focusFirst();
        evt.preventDefault();
        break;
      case 'ArrowUp':
        if (!isEmpty && !showDropdown) {
          setIsSelected(false);
        }
        elToFocusId ? (dropdownRef.current?.children[0].id === elToFocusId ? focusLast() : focusPrev()) :
          focusLast();
        evt.preventDefault();
        break;
      case 'Escape':
        setIsSelected(true);
        setElToFocusId('');
        setFocusableBtnIndex(null);
        if (!showDropdown) {
          handleFilterChange('');
        }
        break;
    }
  }

  function doSearch(value: string) {
    onSearch(value.trim());
  }

  function focusTextInput() {
    filterRef.current?.querySelector('input')?.focus();
  }

  // Clamp or nullify focusableBtnIndex whenever the number of matches changes
  useEffect(function() {
    if (matches.length) {
      setFocusableBtnIndex(clamp(0, matches.length - 1, focusableBtnIndex ?? 0));
    }
    else {
      setFocusableBtnIndex(null);
    }
  }, [matches]);

  // If the dropdown is closed and use arrowkeys to navigate back to the items in the dropdown menu,
  // the ref will fire before state is updated, this will insure the items have visual focus and it's inview.
  useEffect(function() {
    if (elToFocusId && typeof focusableBtnIndex === 'number') {
      const el = dropdownRef.current?.children[focusableBtnIndex] as HTMLElement | null;
      if (el) {
        handleElInView(el);
      }
    }
  }, [elToFocusId]);

  /*
   * Horrible Hack: When an element within the dropdown is removed from the DOM while it is focused, we want
   * to move focus to the text input.  It turns out that this is very difficult to track in React, since
   * useEffect and useLayoutEffect generally fire too late - after the element has already been removed and
   * lost whatever focus it might've had. The only other way to get this info is with a useLayoutEffect handler
   * _in the component that was unmounted_, e.g. in NxButton. That would require adding new props for a special use
   * case to not only NxButton, but also NxLoadWrapper and NxLoadError. Just querying who has focus on every render
   * seemed like the less bad option.
   */
  elFocusedOnMostRecentRender.current = typeof document === 'undefined' ? null : document.activeElement;

  const checkForRemovedFocusedEl = useCallback(function checkForRemovedFocusedEl(mutations: MutationRecord[]) {
    const nodeContainedFocus = (el: Node) => el.contains(elFocusedOnMostRecentRender.current),
        nodeListContainedFocus =
            pipe<[NodeList], Node[], boolean>(Array.from, any(nodeContainedFocus)),
        focusedChildWasRemoved =
            any(pipe(prop('removedNodes'), nodeListContainedFocus), mutations);

    if (focusedChildWasRemoved) {
      focusTextInput();
    }
  }, []);

  useMutationObserver(dropdownRef, checkForRemovedFocusedEl, { childList: true });

  function handleOnClick(match: DataItem<T>) {
    onSelect(match);
    focusTextInput();
    setIsSelected(true);
    setElToFocusId('');
    setFocusableBtnIndex(null);
  }

  function handleElInView(el: HTMLElement) {
    const bounding = el.getBoundingClientRect();
    const dropdownMenu = dropdownRef.current;

    //this check if the dropdown menu is not in the document view
    const isInView = bounding.top >= 0 && bounding.left >= 0 &&
      bounding.bottom <= (document.documentElement.clientHeight)
      && bounding.right <= (document.documentElement.clientWidth);

    if (!isInView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    //this check if the option is not visible inside the dropdown menu
    if (dropdownMenu &&
      dropdownMenu.scrollTop + dropdownMenu.offsetHeight <
      el.offsetTop + el.offsetHeight
    ) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    else if (dropdownMenu && dropdownMenu.scrollTop > el.offsetTop + 4) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  return (
    <div ref={mergedRef} className={className} onFocus={handleComponentFocus} onBlur={handleComponentBlur} { ...attrs }>
      <NxTextInput role="combobox"
                   ref={filterRef}
                   className={filterClassName}
                   value={searchText}
                   onChange={handleFilterChange}
                   disabled={disabled || undefined}
                   isPristine={true}
                   onKeyDown={handleKeyDown}
                   aria-expanded={showDropdown}
                   aria-controls={dropdownId}
                   aria-activedescendant={elToFocusId}
                   />
      <NxDropdownMenu id={dropdownId}
                      role={dropdownRole}
                      ref={dropdownRef}
                      className={dropdownClassName}
                      onClosing={() => {}}
                      aria-busy={!!loading}
                      aria-live="polite"
                      aria-hidden={!showDropdown}>
        <NxLoadWrapper { ...{ loading, error } } retryHandler={() => doSearch(searchText)}>
          {
            matches.length ? matches.map((match, i) =>
              <button id={`nx-dropdown-button-${i}`}
                      role="option"
                      aria-selected={i === focusableBtnIndex && !!elToFocusId}
                      className= {classnames('nx-dropdown-button',
                          { 'nx-combobox__option--visual-selected': i === focusableBtnIndex && !!elToFocusId})}
                      tabIndex={-1}
                      disabled={disabled || undefined}
                      key={match.id}
                      onClick={() => handleOnClick(match)}>
                {match.displayName}
              </button>
            ) :
            <div className="nx-combobox__empty-message">{emptyMessage || 'No Results Found'}</div>
          }
        </NxLoadWrapper>
      </NxDropdownMenu>
    </div>
  );
}

const NxCombobox = Object.assign(forwardRef(NxComboboxRender), { propTypes });

export default NxCombobox;

//AUTOCOMPLETE NOTE:
//set aria-autocomplete (BOTH - default would be list)
//set aria-selected to array[0] / first match of array
//take the value of array[0] and apply string to input
//right key - does it complete the string?
