/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode, NxTextLink } from '@sonatype/react-shared-components';

const nxScrollableExampleCode = require('./NxScrollableExample.html');

const NxScrollablePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>.nx-scrollable</NxCode> is a class that turns any block level element into a scrolling
        container. It has a default max-height of 400px so in most instances you're going to want to create a modifier
        class (e.g. <NxCode>.nx-scrollable--my-box</NxCode>) to adjust the height to suit your needs.
      </NxP>
      <NxP>
        Generally <NxCode>.nx-scrollable</NxCode> is applied to blocks
        like <NxCode>.nx-tile-content</NxCode>.
      </NxP>
      <NxP>
        <NxCode>.nx-scrollable</NxCode> should <strong>not</strong> be used to replicate page or browser
        scrolling, refer instead to the <NxTextLink href="#Pages/Page Layout/">page layout templates</NxTextLink>.
      </NxP>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="General Example"
                        id="nx-scrollable-simple-example"
                        codeExamples={nxScrollableExampleCode}
                        htmlExample={nxScrollableExampleCode}>
      In this instance the max-height has been left at its default value of 400px.
    </GalleryExampleTile>
  </>;

export default NxScrollablePage;
