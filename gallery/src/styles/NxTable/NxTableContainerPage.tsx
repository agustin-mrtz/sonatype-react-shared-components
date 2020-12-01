/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const NxTableFooterCode = require('!!raw-loader!./NxTableFooterExample.html').default,
    NxTableScrollingCode = require('!!raw-loader!./NxTableScrollingExample.html').default,
    NxTableUnfilledScrollContainerCode = require('!!raw-loader!./NxTableUnfilledScrollContainerExample.html').default,
    NxTableUnfilledContainerWithFooterCode =
        require('!!raw-loader!./NxTableUnfilledContainerWithFooterExample.html').default;

const NxTableContainerPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Some table layouts require an extra wrapper element outside of
        the <code className="nx-code">&lt;table&gt;</code> proper, but still stylistcally part of the table.
        For these situations, a wrapper element using the <code className="nx-code">.nx-table-container</code> class
        can be constructed around the table. This setup is needed for the following functionality:
      </p>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">Scrolling tables</li>
        <li className="nx-list__item">Tables with pagination</li>
      </ul>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-table-contaienr</code></td>
            <td className="nx-cell">Element wrapping an <code className="nx-code">.nx-table</code></td>
            <td className="nx-cell">
              Removes the border from the table itself and instead replicates on the container element. This allows
              layout patterns within the visually-apparent table that aren't supported
              on <code className="nx-code">&lt;table&gt;</code> itself.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-scrollable</code></td>
            <td className="nx-cell">Same element as <code className="nx-code">.nx-table-container</code></td>
            <td className="nx-cell">
              The container element should also have the <code className="nx-code">.nx-scrollable</code> class
              when table scrolling is desired.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-table-container__footer</code></td>
            <td className="nx-cell">
              Child of <code className="nx-code">.nx-table-container</code>, after
              the <code className="nx-code">.nx-table</code>.
            </td>
            <td className="nx-cell">
              Container for elements which should be displayed as if they are a table footer, but affixed to the
              bottom of the container, regardless of the size of the
              actual <code className="nx-code">&lt;table&gt;</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NX Table Footer Example"
                        htmlExample={NxTableFooterCode}
                        codeExamples={NxTableFooterCode}>
      A demonstration of a table with a footer element containing a button. The most common real-world use-case
      for a footer is a pagination bar, which can be seen in the <code className="nx-code">NxTable</code> react
      component examples. However, the general styling is flexible, built on
      the <code className="nx-code">&lt;tfoot&gt;</code> element and
      the <code className="nx-code">.nx-cell--meta-info</code> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Scrolling Example"
                        id="nx-table-scrolling-example"
                        htmlExample={NxTableScrollingCode}
                        codeExamples={NxTableScrollingCode}>
      A demonstration of a table that scrolls due to the presence of a height-constrained, scrolling wrapper element.
      The headers and footer stay stationary as the rows scroll. All tables that scroll "by themselves" (as opposed
      to being part of some broader section of the page that scrolls) should be implemented in this manner in order
      to get the sticky header behavior. For scrollable containers which, on the other hand, contain more content in
      addition to a table, sticky headers should not be used and therefore the scrolling-related classes and
      elements should not be used on the table.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Unfilled Example with Footer"
                        id="nx-table-unfilled-scroll-container-example"
                        htmlExample={NxTableUnfilledContainerWithFooterCode}
                        codeExamples={NxTableUnfilledContainerWithFooterCode}>
      This example demonstrates what happens when a table is set up with an explicit height and a footer, but fewer
      rows than would be necessary to fill up the height.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Unfilled Scroll Container Example"
                        id="nx-table-unfilled-scroll-container-example"
                        htmlExample={NxTableUnfilledScrollContainerCode}
                        codeExamples={NxTableUnfilledScrollContainerCode}>
      This example demonstrates what happens when a table is set up to enable scrolling, but does not have enough
      content to cause scrolling.
    </GalleryExampleTile>
  </>;

export default NxTableContainerPage;
