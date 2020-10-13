/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { faSort, faSortDown, faSortUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {ensureElement} from '../../util/reactUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxFilterInput from '../NxFilterInput/NxFilterInput';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxTableCell = function NxTableCell(props: Props) {
  const {
    isHeader = false,
    metaInfo = false,
    isNumeric = false,
    isSortable = false,
    hasIcon = false,
    chevron = false,
    isFilter = false,
    isFilterDisable = false,
    sortDir,
    className,
    children,
    filterPlaceholder,
    filter,
    filterListId,
    filterOptions,
    onFilterChange,
    ...attrs
  } = props;

  const classes = classnames('nx-cell', className, {
    'nx-cell--header': isHeader,
    'nx-cell--meta-info': metaInfo,
    'nx-cell--num': isNumeric,
    'nx-cell--icon': hasIcon,
    'nx-cell--chevron': chevron,
    'nx-cell--sortable': isSortable,
    'nx-table-cell--filter-header': isFilter
  });

  let maskedSort;
  if (sortDir === 'asc') {
    maskedSort = (
      <>
        <NxFontAwesomeIcon icon={faSortDown} />
        <NxFontAwesomeIcon icon={faSortUp} />
      </>
    );
  }
  else if (sortDir === 'desc') {
    maskedSort = (
      <>
        <NxFontAwesomeIcon icon={faSortUp} />
        <NxFontAwesomeIcon icon={faSortDown} />
      </>
    );
  }
  else {
    maskedSort = <NxFontAwesomeIcon icon={faSort} />;
  }

  const filterContent = onFilterChange && (
    <NxFilterInput disabled={isFilterDisable}
                   placeholder={filterPlaceholder || ''}
                   onChange={onFilterChange}
                   value={filter || ''}
                   listId={filterListId}
                   options={filterOptions}
    />
  );

  const Tag = isHeader ? 'th' : 'td';

  return (
    <Tag className={classes} {...attrs}>
      { (chevron && !isHeader) ?
        <NxFontAwesomeIcon icon={faChevronRight}/> :
        <>
          {ensureElement(children)}
          {isSortable && <span className="nx-cell__sort-icons fa-layers">{maskedSort}</span>}
          {isFilter && <div>{filterContent}</div>}
        </>
      }
    </Tag>
  );
};

NxTableCell.propTypes = propTypes;

export default NxTableCell;
