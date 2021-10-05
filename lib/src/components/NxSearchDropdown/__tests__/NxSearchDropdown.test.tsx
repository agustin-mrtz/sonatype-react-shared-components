/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import NxFilterInput from '../../NxFilterInput/NxFilterInput';

import NxSearchDropdown, { Props } from '../NxSearchDropdown';
import NxDropdownMenu from '../../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../../NxLoadWrapper/NxLoadWrapper';

describe('NxSearchDropdown', function() {
  const minimalProps: Props<string | number> = {
        searchText: '',
        onSearchTextChange: () => {},
        onSearch: () => {},
        matches: [],
        onSelect: () => {}
      },
      getShallow = getShallowComponent(NxSearchDropdown, minimalProps),
      getMounted = getMountedComponent(NxSearchDropdown, minimalProps);

  let mountPoint: HTMLElement;

  beforeEach(function() {
    mountPoint = document.createElement('div');
    document.body.append(mountPoint);
  });

  afterEach(function() {
    mountPoint.remove();
  });

  it('renders a div with the nx-search-dropdown class', function() {
    expect(getShallow()).toMatchSelector('div.nx-search-dropdown');
  });

  it('adds additional specified classnames to the div', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-search-dropdown');
  });

  it('adds additional specified attributes to the div', function() {
    const component = getShallow({ id: 'foo', title: 'bar' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('title', 'bar');
  });

  it('adds a specified ref to the div', function() {
    const ref = React.createRef<HTMLDivElement>();
    const component = mount(<><NxSearchDropdown ref={ref} { ...minimalProps } /></>);

    expect(ref.current).toBeDefined();
    expect(component.getDOMNode()).toBe(ref.current);
  });

  it('has an NxFilterInput child with the nx-search-dropdown__input class', function() {
    const component = getShallow(),
        input = component.find(NxFilterInput);

    expect(input).toExist();
    expect(input).toHaveClassName('nx-search-dropdown__input');
  });

  it('sets the searchText as the value of the input', function() {
    const component = getShallow({ searchText: 'foo' }),
        input = component.find(NxFilterInput);

    expect(input).toHaveProp('value', 'foo');
  });

  it('calls onSearchTextChange whenver the input\'s onChange event fires', function() {
    const onSearchTextChange = jest.fn(),
        component = getShallow({ searchText: 'foo', onSearchTextChange }),
        input = component.find(NxFilterInput);

    expect(onSearchTextChange).not.toHaveBeenCalled();

    input.simulate('change', 'asdf');

    expect(onSearchTextChange).toHaveBeenCalledWith('asdf');
  });

  it('calls onSearch whenver the input\'s onChange event fires with a value that differs after trimming, ' +
      'passing the trimmed value', function() {
    const onSearch = jest.fn(),
        component = getShallow({ searchText: 'foo ', onSearch }),
        input = component.find(NxFilterInput);

    expect(onSearch).not.toHaveBeenCalled();

    input.simulate('change', 'foo');
    input.simulate('change', ' foo');
    input.simulate('change', ' foo ');
    input.simulate('change', 'foo ');

    expect(onSearch).not.toHaveBeenCalled();

    input.simulate('change', 'fo ');

    expect(onSearch).toHaveBeenCalledWith('fo');
  });

  it('adds the nx-text-input--long class to the input if the `long` prop is set', function() {
    expect(getShallow().find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');
    expect(getShallow({ long: undefined }).find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');
    expect(getShallow({ long: null }).find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');
    expect(getShallow({ long: false }).find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');

    expect(getShallow({ long: true }).find(NxFilterInput)).toHaveClassName('nx-text-input--long');
  });

  it('passes the disabled prop to the input', function() {
    expect(getShallow().find(NxFilterInput)).toHaveProp('disabled', undefined);
    expect(getShallow({ disabled: undefined }).find(NxFilterInput)).toHaveProp('disabled', undefined);
    expect(getShallow({ disabled: null }).find(NxFilterInput)).toHaveProp('disabled', undefined);
    expect(getShallow({ disabled: false }).find(NxFilterInput)).toHaveProp('disabled', undefined);

    expect(getShallow({ disabled: true }).find(NxFilterInput)).toHaveProp('disabled', true);
  });

  it('renders an NxDropdownMenu if the searchText is non-empty and disabled is not true', function() {
    expect(getShallow()).not.toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo', disabled: true })).not.toContainMatchingElement(NxDropdownMenu);

    expect(getShallow({ searchText: 'foo', disabled: false })).toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo', disabled: undefined })).toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo', disabled: null })).toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo' })).toContainMatchingElement(NxDropdownMenu);
  });

  it('sets the nx-search-dropdown__menu class on the NxDropdownMenu', function() {
    expect(getShallow({ searchText: 'foo' }).find(NxDropdownMenu)).toHaveClassName('nx-search-dropdown__menu');
  });

  it('renders an NxLoadWrapper within the dropdown menu', function() {
    expect(getShallow({ searchText: 'foo' }).find(NxDropdownMenu)).toContainMatchingElement(NxLoadWrapper);
  });

  it('passes the loading prop to the load wrapper', function() {
    const loading = getShallow({ searchText: 'foo', loading: true }),
        notLoading = getShallow({ searchText: 'foo' }),
        explicitNotLoading = getShallow({ searchText: 'foo', loading: false });

    expect(loading.find(NxLoadWrapper)).toHaveProp('loading', true);
    expect(notLoading.find(NxLoadWrapper)).toHaveProp('loading', undefined);
    expect(explicitNotLoading.find(NxLoadWrapper)).toHaveProp('loading', false);
  });

  it('passes the error prop to the load wrapper', function() {
    const error = getShallow({ searchText: 'foo', error: 'bar' }),
        noError = getShallow({ searchText: 'foo' });

    expect(error.find(NxLoadWrapper)).toHaveProp('error', 'bar');
    expect(noError.find(NxLoadWrapper)).toHaveProp('error', undefined);
  });

  it('fires onSearch with the searchText when the load wrappers retryHandler is triggered', function() {
    const onSearch = jest.fn(),
        error = getShallow({ searchText: 'foo', error: 'bar', onSearch });

    expect(onSearch).not.toHaveBeenCalled();

    error.find(NxLoadWrapper).prop('retryHandler')();

    expect(onSearch).toHaveBeenCalledWith('foo');
  });

  it('sets the load wrapper contents to buttons for each match', function() {
    const matches = [
          { id: '1', displayName: 'One' },
          { id: '2', displayName: 'Two' }
        ],
        notLoading = getShallow({ matches, searchText: 'foo' }),
        notLoadingLoadWrapper = notLoading.find(NxLoadWrapper);

    expect(notLoadingLoadWrapper.children().length).toBe(2);
    expect(notLoadingLoadWrapper.childAt(0)).toMatchSelector('button.nx-dropdown-button');
    expect(notLoadingLoadWrapper.childAt(0)).toHaveText('One');
    expect(notLoadingLoadWrapper.childAt(1)).toMatchSelector('button.nx-dropdown-button');
    expect(notLoadingLoadWrapper.childAt(1)).toHaveText('Two');
  });

  it('sets an onClick handler on the menu button that fires onSelect with the match object', function() {
    const onSelect = jest.fn(),
        matches = [
          { id: '1', displayName: 'One' },
          { id: '2', displayName: 'Two' }
        ],
        loadWrapper = getShallow({ matches, onSelect, searchText: 'foo' }).find(NxLoadWrapper);

    expect(onSelect).not.toHaveBeenCalled();

    loadWrapper.childAt(1).simulate('click');

    expect(onSelect).toHaveBeenCalledWith({ id: '2', displayName: 'Two' });
  });

  it('sets the load wrapper contents to an empty message if there are no results', function() {
    const notLoading = getShallow({ searchText: 'foo' });

    expect(notLoading.find(NxLoadWrapper).find('.nx-search-dropdown__empty-message')).toExist();
    expect(notLoading.find('.nx-search-dropdown__empty-message')).toHaveText('No Results Found');
  });

  it('sets the empty message from the emptyMessage prop', function() {
    const component = getShallow({ searchText: 'foo', emptyMessage: 'asdfasdf' });

    expect(component.find('.nx-search-dropdown__empty-message')).toHaveText('asdfasdf');
  });

  it('sets focus to the filter input if focus is within the dropdown menu when the menu is closed', function() {
    const component = getMounted(
        { searchText: 'foo', matches: [{ id: '1', displayName: 'foo' }] },
        { attachTo: mountPoint }
    );

    (component.find('.nx-dropdown-button').getDOMNode() as HTMLElement).focus();

    component.setProps({ searchText: '' });

    expect(component.find('.nx-dropdown-button')).not.toExist();
    expect(document.activeElement === component.find('.nx-search-dropdown__input input').getDOMNode()).toBe(true);
  });

  it('sets focus to the filter input if the load wrapper retry button is focused when the error prop becomes unset',
      function() {
        const component = getMounted(
            { searchText: 'foo', error: 'foo' },
            { attachTo: mountPoint }
        );

        (component.find('button.nx-load-error__retry').getDOMNode() as HTMLElement).focus();

        component.setProps({ error: null });

        expect(component.find('.nx-load-error__retry')).not.toExist();
        expect(document.activeElement === component.find('.nx-search-dropdown__input input').getDOMNode()).toBe(true);
      }
  );

  it('calls onSearch with the current trimmed searchText if focus enters the component from elsewhere on the page ' +
      'while there is an error', function() {
    const onSearch = jest.fn(),
        component = getMounted(
            { searchText: 'foo ', error: 'bar', onSearch },
            { attachTo: mountPoint }
        );

    const anotherElement = document.createElement('button');
    document.body.append(anotherElement);
    anotherElement.focus();

    expect(onSearch).not.toHaveBeenCalled();

    (component.find('.nx-search-dropdown__input input').getDOMNode() as HTMLElement).focus();

    expect(onSearch).toHaveBeenCalledWith('foo');

    anotherElement.remove();
  });

  it('does not call onSearch if focus moves within the component while there is an error', function() {
    const onSearch = jest.fn(),
        component = getMounted(
            { searchText: 'foo', onSearch },
            { attachTo: mountPoint }
        ),
        filterInput = component.find('.nx-search-dropdown__input input').getDOMNode() as HTMLElement;

    expect(onSearch).not.toHaveBeenCalled();

    // get focus into the component before we set the error
    filterInput.focus();
    expect(onSearch).not.toHaveBeenCalled();

    component.setProps({ error: 'err' });
    expect(onSearch).not.toHaveBeenCalled();

    const retryButton = component.find('button.nx-load-error__retry').getDOMNode() as HTMLElement;
    retryButton.focus();
    expect(onSearch).not.toHaveBeenCalled();

    filterInput.focus();
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if focus moves into the component from an outside window while there is an error',
      function() {
        const onSearch = jest.fn(),
            component = getMounted(
                { searchText: 'foo', onSearch },
                { attachTo: mountPoint }
            ),
            filterInput = component.find('.nx-search-dropdown__input input').getDOMNode() as HTMLElement;

        expect(onSearch).not.toHaveBeenCalled();

        // get focus into the component before we set the error
        filterInput.focus();
        expect(onSearch).not.toHaveBeenCalled();

        component.setProps({ error: 'err' });
        expect(onSearch).not.toHaveBeenCalled();

        (document.activeElement! as HTMLElement).blur();
        expect(onSearch).not.toHaveBeenCalled();

        filterInput.focus();
        expect(onSearch).not.toHaveBeenCalled();
      }
  );

  it('should clear search when Escape key is pressed on filterInput or dropdownMenu', function() {
    const matches = [
      { id: '1', displayName: 'One' },
      { id: '2', displayName: 'OneTwo' }
    ];

    const onSearchTextChange = jest.fn(),
        escPreventDefault = jest.fn(),
        component = getShallow(
            { searchText: 'One', matches, onSearchTextChange }
        ),
        filterInput = component.find(NxFilterInput),
        dropdownMenu = component.find(NxDropdownMenu);

    const keyDownEvent = {
      key: 'Escape',
      preventDefault: escPreventDefault
    };

    expect(onSearchTextChange).not.toHaveBeenCalled();

    filterInput.simulate('keyDown', keyDownEvent);

    expect(escPreventDefault).toHaveBeenCalled();
    expect(onSearchTextChange).toHaveBeenCalledWith('');

    onSearchTextChange.mockClear();

    dropdownMenu.simulate('keyDown', keyDownEvent);

    expect(onSearchTextChange).toHaveBeenCalledWith('');
  });
});
