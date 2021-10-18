/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint react/prop-types: 0 */
import React, { ReactElement } from 'react';

import { Option } from './commonTypes';
import NxTreeView, { NxTreeViewChild } from '../NxTreeView/NxTreeView';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import { TooltipConfigProps } from '../../util/tooltipUtils';
import { ensureElement } from '../../util/reactUtil';
import { useUniqueId } from '../../util/idUtil';

import { CommonProps } from './commonTypes';

export interface Props<T extends Option = Option> extends CommonProps<T> {
  renderOption: ((option: T) => ReactElement);
  renderToggleAllOption?: (() => ReactElement | null) | null;
  renderCounter?: (() => ReactElement | null) | null;
}

export function generateId(groupName: string, elementId: string | null) {
  return `nx-tree-view-select-${groupName}-${elementId}`.replace(' ', '-').toLowerCase();
}

function AbstractTreeViewSelect<T extends Option>(props: Props<T>) {

  const {
        options,
        onToggleCollapse,
        filterPlaceholder,
        children,
        id: idProp,
        filter,
        onFilterChange,
        disabledTooltip,
        optionTooltipGenerator,
        tooltipModifierClass,
        name,
        renderOption,
        renderToggleAllOption,
        renderCounter
      } = props,
      filterThreshold = props.filterThreshold || 10,
      isOpen = !!props.isOpen,
      disabled = !!props.disabled || !options.length,
      id = useUniqueId('nx-tree-view-select', idProp || undefined),
      filteredOptions = props.filteredOptions || options;

  function getTooltipProps(title: string) {

    const tooltipProps: TooltipConfigProps = {
      title,
      placement: 'top'
    };

    if (tooltipModifierClass) {
      tooltipProps.className = tooltipModifierClass;
    }
    return tooltipProps;
  }

  const renderedOptions = filteredOptions.map((item: T) => {
    const option = renderOption(item),
        key = `key-${item.id}`;

    return optionTooltipGenerator ? (
      <NxTooltip key={key} {...getTooltipProps(optionTooltipGenerator(item))}>
        <NxTreeViewChild>{option}</NxTreeViewChild>
      </NxTooltip>
    ) : <NxTreeViewChild key={key}>{option}</NxTreeViewChild>;
  });

  const wrappedTriggerContent = ensureElement(children);

  const counter = renderCounter && renderCounter();

  const triggerWithCounter = counter ? (
    <>
      {wrappedTriggerContent}
      {counter}
    </>
  ) : wrappedTriggerContent;

  const filterContent = onFilterChange && options.length > filterThreshold && (
    <NxFilterInput disabled={disabled}
                   placeholder={filterPlaceholder || 'filter'}
                   id={generateId(name, 'filter-input')}
                   aria-controls={id}
                   onChange={onFilterChange}
                   value={filter || ''}/>
  );

  const selectAllOption = renderToggleAllOption && renderToggleAllOption();

  const getTriggerTooltip = () => {
    if (disabled) {
      if (disabledTooltip) {
        return getTooltipProps(disabledTooltip);
      }
      else if (!options.length) {
        return getTooltipProps(`There are no ${name} options`);
      }
    }
    return null;
  };

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={isOpen && options.length > 0}
                id={id}
                triggerContent={triggerWithCounter}
                triggerTooltip={getTriggerTooltip()}
                disabled={disabled}
                className="nx-tree-view--select"
                aria-describedby={counter && counter.props.id}>
      {filterContent}
      { selectAllOption && <NxTreeViewChild>{selectAllOption}</NxTreeViewChild> }
      {renderedOptions}
    </NxTreeView>
  );
}

export default AbstractTreeViewSelect;
