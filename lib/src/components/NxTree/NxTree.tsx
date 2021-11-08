/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { HTMLAttributes, useContext, useRef, useEffect, useState } from 'react';
import withClass from '../../util/withClass';
import NxTreeItem from './NxTreeItem';
import { ItemProps, NavigationDirection } from './types';
import TreeKeyNavContext from './TreeKeyNavContext';
import NxTreeStatefulItem from './stateful/NxTreeStatefulItem';

export { ItemProps };

import './NxTree.scss';

function _NxTree(props: HTMLAttributes<HTMLUListElement>) {
  const parentKeyNavContext = useContext(TreeKeyNavContext),
      [focusedChild, setFocusedChild] = useState<Element | null>(null),
      [navigationDirection, setNavigationDirection] = useState<NavigationDirection>('down'),
      childKeyNavContext = {
        navigationDirection,
        focusedChild,
        focusNext() {
          if (focusedChild) {
            setNavigationDirection('down');

            if (focusedChild.nextElementSibling) {
              setFocusedChild(focusedChild.nextElementSibling);
            }
            else if (parentKeyNavContext) {
              parentKeyNavContext.focusNext();
            }
          }
        },
        focusPrev() {
          if (focusedChild) {
            setNavigationDirection('up');

            if (focusedChild.previousElementSibling) {
              setFocusedChild(focusedChild.previousElementSibling);
            }
            else if (parentKeyNavContext) {
              parentKeyNavContext.focusPrev();
            }
          }
        },
        focusParent: parentKeyNavContext?.focusParent || (() => {})
      },
      ref = useRef<HTMLUListElement>(null);

  useEffect(function() {
    // We want to focus either the first or last child of this tree in two scenarios:
    // 1. this is the top tree
    // 2. this is a subtree which is currently designated (via `focusedChild) as containing the focus
    if (!parentKeyNavContext ||
        (parentKeyNavContext?.focusedChild && parentKeyNavContext?.focusedChild === ref.current)) {
      const childToFocus = parentKeyNavContext?.navigationDirection === 'up' ?
        ref.current?.lastElementChild :
        ref.current?.firstElementChild;

      setFocusedChild(childToFocus || ref.current);
    }
    else {
      setFocusedChild(null);
    }
  }, [!!parentKeyNavContext, parentKeyNavContext?.focusedChild]);

  return (
    <TreeKeyNavContext.Provider value={childKeyNavContext}>
      <ul ref={ref}
          className="nx-tree"
          role={!!parentKeyNavContext ? 'group' : 'tree'}
          { ...props } />
    </TreeKeyNavContext.Provider>
  );
}

const NxTree = Object.assign(_NxTree, {
  Item: NxTreeItem,
  StatefulItem: NxTreeStatefulItem,
  ItemLabel: withClass('span', 'nx-tree__item-label')
});

export default NxTree;
