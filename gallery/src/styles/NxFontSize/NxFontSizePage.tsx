/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxP, NxCode } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './NxFontSizeScssExample.scss';

const nxFontSizeHtmlExampleCode = require('./NxFontSizeHtmlExample.html');
const nxFontSizeScssExampleCode = require('./NxFontSizeScssExample.scss?raw');

const NxFontSizePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>font-size()</NxCode> is a mixin that can be applied to the <NxCode>&lt;body&gt;</NxCode> tag of
        your project to adjust the default RSC font size to better match your project. The default font size in RSC
        is 16px.
      </NxP>
      <NxP>
        The mixin takes a single variable which is the desired font-size with unit. For example:
        {' '}<NxCode>@include font-size(14px);</NxCode> or <NxCode>@include font-size(1.1em);</NxCode>.
      </NxP>
      <NxP>
        The mixin adjusts the default text size as well as several form elements which have default font size values
        set by the browser.
      </NxP>
      <NxP>
        This mixin is primarily intended for use when RSC is incorporated into existing/legacy projects. If you're
        using it on a new project then you should confirm with your designer, or the design group that custom font
        sizes are a design requirement.
      </NxP>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="Sample HTML"
                        codeExamples={[{ content: nxFontSizeHtmlExampleCode, language: 'html' },
                          { content: nxFontSizeScssExampleCode, language: 'scss' }]}
                        htmlExample={nxFontSizeHtmlExampleCode}>
      In the example below the &lt;body&gt; tag has a custom CSS class applied which is referenced in the SCSS.
    </GalleryExampleTile>
  </>;

export default NxFontSizePage;
