/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef } from 'react';
import classnames from 'classnames';
import useMergedRef from '@react-hook/merged-ref';
import withClass from '../../util/withClass';

import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../NxLoadError/NxLoadError';

import NxListText from './NxListText';
import NxListSubtext from './NxListSubtext';
import NxListActions from './NxListActions';
import NxListButtonItem from './NxListButtonItem';
import NxListLinkItem from './NxListLinkItem';
import NxListItem from './NxListItem';
import { NxListProps, NxListComponent, nxListPropTypes } from './types';
import useEmptyComponent from '../../util/useEmptyComponent';


const NxList = forwardRef<HTMLUListElement, NxListProps>(function NxList(props: NxListProps, externalRef) {
  const {className, children, bulleted, emptyMessage, isLoading = false, error, retryHandler, ...attrs } = props;
  const classNames = classnames(className, 'nx-list', {'nx-list--bulleted': bulleted});
  const ulRef = useRef<HTMLUListElement | null>(null);
  const emptyListRef = useRef<HTMLLIElement>(null);
  const ref = useMergedRef(ulRef, externalRef);
  const isEmpty = useEmptyComponent(false, ulRef, emptyListRef);

  if (isEmpty && !isLoading && !error) {
    if (!emptyMessage) {
      console.warn('emptyMessage is required when no list items are to be rendered');
    }
  }

  const nxListEmpty = (
    <li ref={emptyListRef} className="nx-list__item nx-list__item--empty">
      <span className="nx-list__text">
        {emptyMessage || 'This list is empty.'}
      </span>
    </li>
  );

  const nxListLoading = (
    <li className='nx-list__item'>
      <NxLoadingSpinner />
    </li>
  );

  const nxListError = (
    <li className='nx-list__item nx-list__item--error'>
      <NxLoadError error={error} retryHandler={retryHandler} />
    </li>
  );

  return (
    <ul ref={ref}
        className={classNames}
        {...attrs}
    >
      {isLoading && nxListLoading}
      {!!error && !isLoading && nxListError}
      {!isLoading && !error && children}
      {!(isLoading || error) && isEmpty && nxListEmpty}
    </ul>
  );
}) as NxListComponent;

NxList.propTypes = nxListPropTypes;
NxList.Item = NxListItem;
NxList.Text = NxListText;
NxList.Subtext = NxListSubtext;
NxList.Actions = NxListActions;
NxList.ButtonItem = NxListButtonItem;
NxList.LinkItem = NxListLinkItem;
NxList.DescriptionTerm = withClass('dt', 'nx-list__term');
NxList.Description = withClass('dd', 'nx-list__description');

export default NxList;
export {NxListProps, nxListPropTypes} from './types';
