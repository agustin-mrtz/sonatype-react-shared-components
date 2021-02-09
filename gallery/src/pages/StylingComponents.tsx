/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';

const StylingRSCPage = () =>
  <GalleryTile title="How to style your app when using RSC">
    <p className="nx-p">
      If you have styling needs that aren't covered by the styles included in React Shared Components (RSC),
      then you're going to have to create your own styles.
    </p>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <h3 className="nx-h3">Page &amp; component specific stylesheets</h3>
      </header>
      <p className="nx-p">
        Why have page and component specific stylesheets? By grouping our styles together by use and (ideally) locating
        the SCSS next to the HTML that it modifies we decrease clutter/noise in our main stylesheet, keep our styles
        focused on what they modify, and also help maintain a clear separation between code, layout, and styling.
      </p>
      <h4 className="nx-h4">Modifying component styles</h4>
      <p className="nx-p">
        If you need to modify any of the stock RSC styles for use within your project you should create either a single
        file to contain your modifications or keep them within a page specific stylesheet if the changes are localised
        to a page. For example in IQ has an SCSS file named <code className="nx-code">_nx-overrides.scss</code> in
        which all IQ specific modifications to RSC styles are stored. If you are starting a brand new project you
        probably won't need to do this but for existing projects where RSC styles will be mixing with legacy styles it
        can be invaluable.
      </p>
    </section>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <h3 className="nx-h3">B.E.M.</h3>
      </header>
      <p className="nx-p">
        You might have noticed lots of dashes and underscores in our class names. That's because we use BEM naming
        by default. BEM stands for "Block", "Element", and "Modifier".{' '}
        <a href="https://www.toptal.com/css/introduction-to-bem-methodology" target="_blank">Learn more about BEM</a>.
        We use a slightly modified version of BEM in the RSC; we have added namespaces and utility classes.
      </p>
    </section>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <h3 className="nx-h3">Namespaces</h3>
      </header>
      <p className="nx-p">
        Because the RSC styles are used by multiple apps we wanted to clearly distinguish between RSC styles and
        custom app styles. To that end we use a namespace prefix in our class names. In RSC that prefix
        is <code className="nx-code">nx-</code>. In IQ they use <code className="nx-code">iq-</code> as
        a prefix in order to differentiate between classes in IQ and classes from RSC. When you
        create custom CSS in your app you should create a simple unique prefix for your app.
      </p>
    </section>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <h3 className="nx-h3">Utility classes</h3>
      </header>
      <p className="nx-p">
        You may notice as you work with the various RSC that some components have CSS classes that don't follow
        normal BEM naming conventions. Classes like:
      </p>
      <div className="nx-list nx-list--bulleted">
        <ul>
          <li className="nx-list__item">
            <code className="nx-code">open</code> &amp; <code className="nx-code">closed</code>
          </li>
          <li className="nx-list__item">
            <code className="nx-code">disabled</code>
          </li>
          <li className="nx-list__item">
            <code className="nx-code">pristine</code>, <code className="nx-code">valid</code>,
            {' '}<code className="nx-code">invalid</code>
          </li>
          <li className="nx-list__item">
            <code className="nx-code">selected</code> &amp; <code className="nx-code">unselected</code>
          </li>
        </ul>
      </div>
      <p className="nx-p">
        These are commonly refered to as "utility classes". Utility classes usually describe a change in a components'
        visual state. These classes are common across all components that might need them, especially in the case of the
        validation utility classes.
      </p>

      <h3 className="nx-h3 nx-tile__section-header">CSS Resources</h3>
      <p className="nx-p">
        Many components in the RSC are layed out using CSS Flexbox or CSS Grid. Flexbox is well
        established, but Grid is quite new. The syntax for both can be a little confusing for those who aren't used to
        them. There are many resources available on the web to help new users, the ones linked below are used by the RSC
        team for reference.
      </p>
      <h4 className="nx-h4">Flexbox</h4>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          <a rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
            target="_blank">
            MDN Layout Guide: Flexbox
          </a>
        </li>
        <li className="nx-list__item">
          <a rel="noreferrer"
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank">
            CSS Tricks Guide to CSS Flexbox
          </a>
        </li>
      </ul>
      <h4 className="nx-h4">CSS Grid</h4>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          <a rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
            target="_blank">
            MDN Layout Guide: CSS Grid
          </a>
        </li>
        <li className="nx-list__item">
          <a rel="noreferrer"
            href="https://css-tricks.com/snippets/css/complete-guide-grid/"
            target="_blank">
            CSS Tricks Guide to CSS Grid
          </a>
        </li>
      </ul>
      <p className="nx-p">
        If you have questions about how to use RSC's styles in your app, or how to create customs style for your app
        #react-components on Slack is a good place to ask.
      </p>
    </section>
  </GalleryTile>;

export default StylingRSCPage;
