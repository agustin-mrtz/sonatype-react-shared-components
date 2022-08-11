/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef } from 'react';
import useMergedRef from '@react-hook/merged-ref';

import withClass from '../../util/withClass';
import useEmptyComponent from '../../util/useEmptyComponent';

import NxDescriptionListButtonItem from './NxDescriptionListButtonItem';

import { Props } from './types';

const _NxDescriptionList = forwardRef<HTMLElement, Props>(function({ emptyMessage, ...otherProps }, externalRef) {
  const emptyChildRef = useRef<HTMLLIElement>(null),
      listRef = useRef<HTMLElement>(null),
      ref = useMergedRef(externalRef, listRef),
      isEmpty = useEmptyComponent(listRef, emptyChildRef);

  const emptyList = (
    <ul className="nx-list" ref={ref} { ...otherProps }>
      <li ref={emptyChildRef} className="nx-list__item nx-list__item--empty">
        <span className="nx-list__text">
          {emptyMessage || 'This list is empty.'}
        </span>
      </li>
    </ul>
  );

  return isEmpty ? emptyList : <dl ref={ref} className="nx-list nx-list--description-list" { ...otherProps } />;
});

const NxDescriptionList = Object.assign(_NxDescriptionList, {
  Item: withClass('div', 'nx-list__item'),
  Term: withClass('dt', 'nx-list__term'),
  Description: withClass('dd', 'nx-list__description'),
  ButtonItem: NxDescriptionListButtonItem
});

export default NxDescriptionList;
