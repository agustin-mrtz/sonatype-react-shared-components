/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {faCube} from '@fortawesome/free-solid-svg-icons';

import { NxTreeView, NxTreeViewChild, NxFontAwesomeIcon, useToggle } from '@sonatype/react-shared-components';

function NxTreeViewExtrasExample() {
  const [toggleCheck1, onToggleCollapse1] = useToggle(false),
      [toggleCheck2, onToggleCollapse2] = useToggle(false),
      [toggleCheck3, onToggleCollapse3] = useToggle(false),
      [toggleCheck4, onToggleCollapse4] = useToggle(false);

  return (
    <>
      <NxTreeView onToggleCollapse={onToggleCollapse1}
                  isOpen={toggleCheck1}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>Trigger with icon &amp; counter</span>
                      <div aria-label="12 options out of 29 selected" className="nx-counter">
                        12 of 29
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
      <NxTreeView onToggleCollapse={onToggleCollapse2}
                  isOpen={toggleCheck2}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>Foo</span>
                      <div aria-label="2 options out of 4 selected" className="nx-counter">
                        2 of 4
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
      <NxTreeView onToggleCollapse={onToggleCollapse3}
                  isOpen={toggleCheck3}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>This title is extra long and triggers ellipsis truncation</span>
                      <div aria-label="40000 options out of 80000 selected" className="nx-counter">
                        40000 of 80000
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
      <NxTreeView onToggleCollapse={onToggleCollapse4}
                  isOpen={toggleCheck4}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>Organizations</span>
                      <div aria-label="Filter name goes here" className="nx-counter">
                        Filter name goes here
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
    </>
  );
}

export default NxTreeViewExtrasExample;
