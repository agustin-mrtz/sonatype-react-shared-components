/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulDropdownIconOnlyExample from './NxStatefulDropdownIconOnlyExample';

const nxStatefulDropdownIconOnlyExampleCode = require('./NxStatefulDropdownIconOnlyExample?raw');

const NxStatefulDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A stateful variation of the dropdown menu component which uses a single icon as its toggle.
        <NxCode>NxStatefulDropdownIconOnly</NxCode> shares all of the same props as{' '}
        <NxTextLink href="#/pages/NxStatefulDropdown">NxStatefulDropdown</NxTextLink>{' '}
        as well as the ones listed below.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>icon</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The name of the FontAwesome icon to use in the trigger.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>toggleTooltip</NxTable.Cell>
            <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Describes a tooltip to be placed on the dropdowns' toggle element. For accessibility reasons this prop
              is required on <NxCode>NxDropdownIconOnly</NxCode>. There are two ways to specify the tooltip: the
              simpler way is to simply specify the tooltip text as a string. If control of more complex tooltip
              options is desired, an object can be passed which will serve as the props for
              {' '}<NxCode>NxTooltip</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulDropdownIconOnlyExampleCode}
                        liveExample={NxStatefulDropdownIconOnlyExample}>
      This example demonstrates a simple NxStatefulDropdown, showing that it tracks
      its own open/closed state with no need for support from the surrounding code.
    </GalleryExampleTile>
  </>;

export default NxStatefulDropdownPage;
