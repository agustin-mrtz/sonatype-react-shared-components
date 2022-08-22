/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode,
  NxP,
  NxTable,
  NxTile,
  NxH2,
  NxH3,
  NxTextLink,
  NxStatefulAccordion,
  NxAccordion,
  NxWarningAlert
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryTileFooter } from '../../gallery-components/GalleryTileFooter';

import CodeExample from '../../CodeExample';

const NxToastFullPageVariationsExampleCode = require('./NxToastFullPageVariationsExample?raw'),
    NxToastFullPageSimpleExampleCode = require('./NxToastFullPageSimpleExample?raw');

const NxToastPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Toasts are rendered on the top right corner of the screen, and will remain in place until the user
        dismisses them individually. Each toast renders one <NxCode>NxAlert</NxCode>, which comes in four
        variations: Error, Info, Warning, and Success. To find out more about <NxCode>NxAlert</NxCode>, you
        can review the documentation <NxTextLink href="#/pages/Alert">here</NxTextLink>.
      </NxP>
      <NxP>
        Toasts generally fall under a ‘global and static’ context, in a sense that throughout the application,
        toasts are rendered within the same container on the top right corner of the screen.
      </NxP>
      <NxWarningAlert>
        Note: In order to render toasts in the correct position, all toasts must be wrapped within the parent React
        component <NxCode>NxToastContainer</NxCode>, which must be a direct child of <NxCode>NxPageMain</NxCode>.
      </NxWarningAlert>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxToastContainer</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Resource</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>React Node</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                All <NxCode>NxToast</NxCode>s rendered within <NxCode>NxToastContainer</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxToast</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Resource</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>onClose</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                A function that dismisses the toast when called. When the close button is clicked, this callback
                will be fired.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>React Element</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                A single <NxCode>ReactElement</NxCode> which accepts an <NxCode>onClose</NxCode> prop and which
                ultimately renders an <NxCode>NxAlert</NxCode> (or one of its variants such as
                {' '}<NxCode>NxSuccessAlert</NxCode>. Most commonly, this would just be one of the RSC
                {' '}<NxCode>Nx*Alert</NxCode> components themselves, but custom wrapping components are also permitted.
                Note that the calling code should not specify the<NxCode>onClose</NxCode> prop for the alert, it will be
                set up internally by <NxCode>NxToast</NxCode>. Calling code should instead use the
                {' '}<NxCode>onClose</NxCode> prop of <NxCode>NxToast</NxCode> itself. Additionally, note that the alert
                text content should be brief: only one rendered line of text per toast is supported.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Toasts With Simple Page Layout Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          An simple full page layout example. Note that this layout does not have <NxCode>NxGlobalHeader</NxCode> and
          therefore the toasts will be positioned in the top right corner of the screen.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxToastFullPageSimpleExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastFullPageSimpleExampleCode} />
          <GalleryTileFooter clipboardContent= {NxToastFullPageSimpleExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Toasts With Complex Page Layout Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          An complex full page layout example. With the inclusion of <NxCode>NxGlobalHeader</NxCode>, the toasts
          will be positioned in the top right corner of the <NxCode>NxPageMain</NxCode>, underneath the the header.
          Extra content is provided to be able to view the positioning of the toasts with scrolling behavior.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxToastFullPageVariationsExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastFullPageVariationsExampleCode} />
          <GalleryTileFooter clipboardContent= {NxToastFullPageVariationsExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>
  </>;

export default NxToastPage;
