/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

import NxStatefulTabsSimpleExample from './NxStatefulTabsSimpleExample';

const NxStatefulTabsSimpleCode = require('./NxStatefulTabsSimpleExample?raw');

export default function NxStatefulTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          This component simply wraps the <NxCode>NxTabs</NxCode> component
          to track the currently selected tab.
        </p>

        <NxTable className="nx-table--gallery-props">
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>defaultActiveTab</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                The index of the tab that should be active initially. If not set, no tab will be activated.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onTabSelect</NxTableCell>
              <NxTableCell>function(number)</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                Called with the index of the newly selected tab when the currently selected tab changes.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxTabs Example"
                          liveExample={NxStatefulTabsSimpleExample}
                          codeExamples={NxStatefulTabsSimpleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components.
      </GalleryExampleTile>
    </>
  );
}
