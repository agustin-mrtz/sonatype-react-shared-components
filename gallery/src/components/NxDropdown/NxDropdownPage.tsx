/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxDropdownNavigationExample from './NxDropdownNavigationExample';
import NxDropdownScrollingExample from './NxDropdownScrollingExample';
import NxDropdownDisabledExample from './NxDropdownDisabledExample';
import NxDropdownRightButtonsExample from './NxDropdownRightButtonsExample';
import NxDropdownCustomLabelExample from './NxDropdownCustomLabelExample';
import NxDropdownLinksExample from './NxDropdownLinksExample';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody } from '@sonatype/react-shared-components';

const nxDropdownNavigationExampleCode = require('!!raw-loader!./NxDropdownNavigationExample').default,
    nxDropdownScrollingExampleCode = require('!!raw-loader!./NxDropdownScrollingExample').default,
    nxDropdownDisabledExampleCode = require('!!raw-loader!./NxDropdownDisabledExample').default,
    nxDropdownCustomLabelExampleCode = require('!!raw-loader!./NxDropdownCustomLabelExample').default,
    nxDropdownRightButtonsExampleCode = require('!!raw-loader!./NxDropdownRightButtonsExample').default,
    nxDropdownLinksExampleCode = require('!!raw-loader!./NxDropdownLinksExample').default;

const NxDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A dropdown menu component. Note that this is for menus of nagivation links or
        action-triggering buttons.  It is <em>not</em> a form select field. By default the dropdown can display
        a maximum of 10 items before it scrolls the contents of the dropdown menu.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Props:</h3>
        </header>
        <table className="nx-table nx-table--gallery-props">
          <thead>
            <tr className="nx-table-row">
              <th className="nx-cell nx-cell--header">Prop</th>
              <th className="nx-cell nx-cell--header">Type</th>
              <th className="nx-cell nx-cell--header">Required</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell">label</td>
              <td className="nx-cell">string | VDOM</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">Content to render in the dropdown's button</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">isOpen</td>
              <td className="nx-cell">boolean</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">Value to control the toggling of the dropdown.</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">variant</td>
              <td className="nx-cell">"primary" | "secondary" | "tertiary"</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                What type of button to render for the dropdown.
                Defaults to <code className="nx-code">"tertiary"</code>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">Extra classes to apply to the component</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">disabled</td>
              <td className="nx-cell">boolean</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                Controls if the component should be rendered as disabled.
                Defaults to <code className="nx-code">false</code>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onToggleCollapse</td>
              <td className="nx-cell">function</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">A function to execute whenever the dropdown is toggled.</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">toggleTooltip</td>
              <td className="nx-cell">string | NxTooltip Props</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                If present, describes a tooltip to be placed on the dropdowns' toggle element. There are two ways
                to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
                of more complex tooltip options is desired, an object can be passed which will serve as the props for
                NxTooltip
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">HTML div Attributes</td>
              <td className="nx-cell">
                <a target="_blank"
                   rel="noopener"
                   href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/div">
                  HTML div Attributes
                </a>
              </td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                NxDropdown supports any html attribute that's normally supported by
                {' '}<code className="nx-code">div</code> elements.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Auxiliary Components</h3>
        </header>
        <p className="nx-p">
          An auxiliary component called <code className="nx-code">NxDropdownDivider</code> is available
          to be used as separator between child elements.
        </p>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Dropdown Menu Content Classes</h3>
        </header>
        <p className="nx-p">
          The following CSS classes are provided which must be used for the contents of the dropdown menu.
        </p>
        <NxTable className="nx-table--gallery-props">
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Class</NxTableCell>
              <NxTableCell>Location</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-button</code></NxTableCell>
              <NxTableCell>
                <code className="nx-code">&lt;a&gt;</code> and <code className="nx-code">&lt;button&gt;</code> elements
                within the dropdown menu
              </NxTableCell>
              <NxTableCell>
                Styles the buttons and links as clickable rows within the menu
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-link</code></NxTableCell>
              <NxTableCell>
                <code className="nx-code">&lt;a&gt;</code> elements within the dropdown menu
              </NxTableCell>
              <NxTableCell>
                Applies typical blue styling to links within the menu
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-right-button</code></NxTableCell>
              <NxTableCell>
                An additional icon-only button which can appear on the right side of a menu row
              </NxTableCell>
              <NxTableCell>
                Sometimes it is desireable to add a icon-only button to a menu row which performs an action distinct
                from clicking on the row itself - for instance, a trashcan button which deletes the row. For this
                scenario, the icon button, a sibling of the main row button, must include this class and
                the <code className="nx-code">nx-dropdown-button-container</code> and{' '}
                <code className="nx-code">nx-dropdown-button-content</code> must be used in conjunction.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-button-container</code></NxTableCell>
              <NxTableCell>
                Menu items when <code className="nx-code">nx-dropdown-right-button</code> is used
              </NxTableCell>
              <NxTableCell>
                This wrapper is necessary around all rows in a dropdown menu when any row in the dropdown menu includes
                a <code className="nx-code">nx-dropdown-right-button</code>.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-button-content</code></NxTableCell>
              <NxTableCell>
                Wrapper around text content of menu rows
                when <code className="nx-code">nx-dropdown-button-container</code> is in use.
              </NxTableCell>
              <NxTableCell>
                This wrapper is necessary around the text content of
                any <code className="nx-code">nx-dropdown-button</code> which is a child of
                a <code className="nx-code">nx-dropdown-button-container</code>.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Navigation Example"
                        liveExample={NxDropdownNavigationExample}
                        codeExamples={nxDropdownNavigationExampleCode}>
      An example of an <code className="nx-code">NxDropdown</code> as it might be used to implement a navigation list.
      Note that the menu can contain either <code className="nx-code">&lt;a&gt;</code> or
      {' '}<code className="nx-code">&lt;button&gt;</code> elements; this example contains both.
    </GalleryExampleTile>

    <GalleryExampleTile title="Scrolling Example"
                        id="nx-dropdown-scrolling-example"
                        liveExample={NxDropdownScrollingExample}
                        codeExamples={nxDropdownScrollingExampleCode}>
      An example with enough elements in the menu to induce scrolling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example"
                        id="nx-dropdown-disabled-example"
                        liveExample={NxDropdownDisabledExample}
                        codeExamples={nxDropdownDisabledExampleCode}>
      An example of a dropdown that is disabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="Links Example"
                        id="nx-dropdown-links-example"
                        liveExample={NxDropdownLinksExample}
                        codeExamples={nxDropdownLinksExampleCode}>
      An example of a dropdown with a menu of links – typically, links to external sites.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom label example"
                        id="nx-dropdown-custom-label-example"
                        liveExample={NxDropdownCustomLabelExample}
                        codeExamples={nxDropdownCustomLabelExampleCode}>
      This dropdown contains more complex JSX in its label.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with right-floating buttons"
                        id="nx-dropdown-right-buttons-example"
                        liveExample={NxDropdownRightButtonsExample}
                        codeExamples={nxDropdownRightButtonsExampleCode}>
      This example demonstrates a dropdown where some of the dropdown menu rows have an additional icon-only button
      at their right end.  Clicking the row itself still behaves as normal, while clicking the icon button performs
      some other action related to the row, such as deleting the item the row represents. There are a few caveats to
      using these styles: note that this example uses <code className="nx-code">&lt;a&gt;</code> elements for all
      menu items – unfortunately <code className="nx-code">&lt;button&gt;</code> elements get some special behaviors
      from the browser that prevent them from working with the styling here. Additionally, note that
      the <code className="nx-code">nx-dropdown-button-container</code> is present on all menu items, even those that
      do not have icon buttons, in order to get consistent menu item heights.
    </GalleryExampleTile>
  </>;

export default NxDropdownPage;
