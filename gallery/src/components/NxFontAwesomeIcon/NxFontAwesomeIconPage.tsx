/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFontAwesomeIconExample from './NxFontAwesomeIconExample';

const nxFontAwesomeIconExampleCode = require('!!raw-loader!./NxFontAwesomeIconExample').default,
    nxFontAwesomeIconExampleScssCode = require('!!raw-loader!./NxFontAwesomeIconExample.scss').default;

const NxFontAwesomeIconPage = () => {
  const codeExamples = [
    nxFontAwesomeIconExampleCode,
    { content: nxFontAwesomeIconExampleScssCode, language: 'scss' }
  ];

  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">NxFontAwesomeIcon</code> is a wrapper around
          the <code className="nx-code">FontAwesomeIcon</code> component. It passes through its props
          to <code className="nx-code">FontAwesomeIcon</code> and adds the <code className="nx-code">.nx-icon</code> CSS
          class.
        </p>
        <p className="nx-p">
          See the <code className="nx-code">FontAwesomeIcon</code>{' '}
          <a href="https://github.com/FortAwesome/react-fontawesome#features" target="_blank">documentation</a>
          {' '}for details on available props
        </p>
        <h3 className="nx-h3">Accessibility</h3>
        <p className="nx-p">
          <code className="nx-code">FontAwesomeIcon</code> has a <code className="nx-code">title</code> prop which
          sets up a <code className="nx-code">&lt;title&gt;</code> element within the rendered SVG and configures is
          as the accessible name for the icon. Use this attribute when an icon itself needs to be read by a
          screenreader. Note however that this will also create a native tooltip with the title, which is not ideal
          due to our preference for <code className="nx-code">NxTooltip</code>. This technique should therefore be
          used sparingly, and labels on parent elements should be preferred where appropriate. For instance,
          the accessible name for an icon-only button should be placed on the button itself, not on the icon.
          See the <a href="#/pages/NxButton"><code className="nx-code">NxButton</code></a> page for an example.
        </p>
        <p className="nx-p">
          If you are in doubt about whether an icon should be made accessible consider whether the user could perform
          their given task, or understand an explaination if that icon was not there.
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          liveExample={NxFontAwesomeIconExample}>
        This example shows a button containing a series of icons inline with some text.
        The buttons showcase various FontAwesome options that are supported. The address card icon
        demonstrates accessibility requirements for icons that are not purely presentational.
      </GalleryExampleTile>
    </>
  );
};

export default NxFontAwesomeIconPage;
