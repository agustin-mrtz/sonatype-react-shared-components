/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import RawHtmlExample from '../../CodeExample';
const pageLayoutTwoColumnImg = require('./page-layout-2col.png');
const pageLayoutSingleColumnImg = require('./page-layout-1col.png');

const singleColumnLayoutExampleCode = require('./SingleColumnLayoutExample.html');
const twoColumnLayoutExampleCode = require('./TwoColumnLayoutExample.html');
const reactRootLayoutExampleCode = require('./ReactRootLayoutExample.html');

const PageLayoutPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        HTML and SCSS are provided for both single and two column page layouts. We use{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          flexbox
        </a>
        {' '}to handle our layouts.
      </p>
      <h2 className="nx-h2">Flexbox</h2>
      <p className="nx-p">
        One challenge of flexbox layouts is that direct parent-child relationships between elements are crucial, and
        adding intermediate ancestors can easily break the layout. This often makes flexbox layouts challenging with
        frameworks which insert <code className="nx-code">&lt;div&gt;</code>'s into the DOM structure (like Angular)
        which can effect the order and/or nesting of the blocks. If your layout isn't working the way you expect this
        is the first thing you should check.
      </p>
      <p className="nx-p">
        Our single and double column layouts are essentially the same except that the single column layout omits the
        sidebar element. When the sidebar element is not present the
        {' '}<code className="nx-code">.nx-page-main</code> block will expand to fill the available space.
      </p>
      <h2 className="nx-h2">Scrolling</h2>
      <p className="nx-p">
        The default RSC page layout uses what we call "section scrolling". With section scrolling the header remains
        fixed, while the sidebar and main content areas are able to scroll independently depending on their oveflow
        state.
      </p>
      <p className="nx-p">
        Including the <code className="nx-code">.nx-html--page-scrolling</code> modifier to
        {' '}<code className="nx-code">&lt;html&gt;</code> will change this to "page scrolling" where
        the sidebar and main content areas scroll together if either has content which overflows and causes scrollbars
        to appear. The header and footer (if used) remain fixed. Note that the RSC gallery uses this scrolling mode.
      </p>
      <p className="nx-p">
        When in "section scrolling" mode, the the <code className="nx-code">.nx-viewport-sized</code> family of classes
        may be used to fit the contents of a section to the height of that section, as described on{' '}
        the <a className="nx-text-link" href="#/pages/nx-viewport-sized">nx-viewport-sized helper class page</a>.
      </p>
      <h2 className="nx-h2">Page layout illustrations</h2>
      <h3 className="nx-h3">Standard two column layout</h3>
      <p className="nx-p">
        Our standard two column layout consists of a page header area, a page sidebar, main content area, and a page
        footer. Many of our apps do not use a page footer and this can be safely omitted.
      </p>
      <img src={pageLayoutTwoColumnImg}/>
      <p className="nx-p">The HTML for this layout would look like this:</p>
      <RawHtmlExample content={twoColumnLayoutExampleCode} />
      <h3 className="nx-h3">Standard single column layout</h3>
      <p className="nx-p">
        Note that the sidebar element is no longer defined, <code className="nx-code">nx-page-main-content</code> will
        expand to the left to occupy the available space.
      </p>
      <img src={pageLayoutSingleColumnImg}/>
      <p className="nx-p">The HTML for this layout would look like this:</p>
      <RawHtmlExample content={singleColumnLayoutExampleCode}/>
      <h3 className="nx-h3">React Root Element</h3>
      <p className="nx-p">
        Typically in a React app, some high level element in the page which is a descendant of
        the <code className="nx-code">{'<body>'}</code> is used as the attachment point for the root
        React <code className="nx-code">ReactDOM.render</code> call. In the gallery itself,
        the <code className="nx-code">.nx-page</code> element, which also has
        an <code className="nx-code">id</code> of <code className="nx-code">ui</code>, is used as this attachment
        point.  We recommend that other apps use the same pattern.
      </p>
      <RawHtmlExample content={reactRootLayoutExampleCode}/>
    </GalleryDescriptionTile>
  </>;

export default PageLayoutPage;
