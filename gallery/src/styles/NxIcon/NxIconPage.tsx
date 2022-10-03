/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxP, NxCode, NxTile, NxH3 } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxIconExampleCode = require('./NxIconExample.html');

const NxIconPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>.nx-icon</NxCode> is a class that gives standard layout, namely left and right margin,
        to icons in a way that is compatible with the <NxCode>nx-container-helpers</NxCode>.
      </NxP>
      <NxP>
        When using <NxCode>.nx-icon</NxCode> manually, be careful to set up heights and widths in
        ways that work in all supported browsers. For instance, note that in the example below, only the height OR the
        width need to be specified for Chrome and Firefox due to the instrinsic aspect ratio from
        the <NxCode>viewBox</NxCode>, while for IE, both the width and the height are necessary.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Modifiers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          The <NxCode>nx-icon--colorful</NxCode> modifier class is available to be applied to icons that have
          meaningful colors that shouldn't have their color overwritten in certain context. For example, some
          components that allow custom icons would overrride the color. This modifier ensures the color is not replaced.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxIconExampleCode}
                        htmlExample={nxIconExampleCode}>
      This example demonstrates the usage of the nx-icon class on SVG icons, providing them with standard margins.
    </GalleryExampleTile>
  </>;

export default NxIconPage;
