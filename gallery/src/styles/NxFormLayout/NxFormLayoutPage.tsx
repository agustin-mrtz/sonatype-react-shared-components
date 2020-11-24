/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormLayoutExample from './NxFormLayoutExample';
import NxFormHorizontalLayoutExample from './NxFormHorizontalLayoutExample';
import NxFormInlineLayoutExample from './NxFormInlineLayoutExample';

const NxFormLayoutCode = require('!!raw-loader!./NxFormLayoutExample').default;
const NxFormHorizontalLayoutCode = require('!!raw-loader!./NxFormHorizontalLayoutExample').default;
const NxFormInlineLayoutCode = require('!!raw-loader!./NxFormInlineLayoutExample').default;

const NxFormLayoutPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        This page demonstrates the HTML and SCSS required for displaying form and form elements in an application.
        Note that all standard HTML elements in a form have corresponding SCSS classes. It's important that these
        classes are used correctly as they reset browser default form styles.
      </p>
      <p className="nx-p">
        This page does not demonstrate validation which is a part of the form element components which can be found
        in the menu to the left.
      </p>
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
            <td className="nx-cell"><code className="nx-code">.nx-form</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Default form class. Resets browser <code className="nx-code">&lt;form&gt;</code> attributes and applies
              NX styles.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-form-group</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Basic container for form elements.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-form-row</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Used as a parent when you want <code className="nx-code">.nx-form-group</code> blocks to display
              horizontally rather than stack vertically.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-label</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Standard class for <code className="nx-code">&lt;label&gt;</code> elements. This element may either be
              wrapped around the form field and sublabel, or precede them and use
              the <code className="nx-code">for</code> attribute (<code className="nx-code">htmlFor</code> is react).
              When the sublabel is present, the label <em>should</em> be set up as a
              preceding element for accessibility reasons.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-label--optional</code></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Used when you want "Optional" text to appear after a <code className="nx-code">&lt;label&gt;</code>
              element.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-sub-label</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Used when you want text below the standard <code className="nx-code">&lt;label&gt;</code> text.
              <code className="nx-code">.nx-sub-label</code> is meant to be applied to a{' '}
              <code className="nx-code">&lt;span&gt;</code> located after the{' '}
              <code className="nx-code">&lt;label&gt;</code>, though for backwards compatibility placing it within
              the <code className="nx-code">&lt;label&gt;</code> is also supported. The sublabel <em>should</em> be
              referenced as the accessibility description (i.e.
              using <code className="nx-code">aria-describedby</code>) on the form field.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-fieldset</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Applied to a <code className="nx-code">&lt;fieldset&gt;</code> element that wraps checkboxes or
              radio buttons.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-footer</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Applied to a footer which contains the form action buttons (e.g. Submit, Cancel, etc).
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-legend</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Standard class for <code className="nx-code">&lt;legend&gt;</code> elements. A legend is used inside of a
              <code className="nx-code">&lt;fieldset&gt;</code> in the place of a
              <code className="nx-code">&lt;label&gt;</code>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-legend--optional</code></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Used when you want "Optional" text to appear after a <code className="nx-code">&lt;legend&gt;</code>
              element.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        id="nx-form-layout-example"
                        codeExamples={NxFormLayoutCode}
                        liveExample={NxFormLayoutExample}>
      This example shows a standard vertical form layout with validation on some fields.
    </GalleryExampleTile>

    <GalleryExampleTile title="Horizontal form layout"
                        id="nx-form-layout-horizontal-example"
                        liveExample={NxFormHorizontalLayoutExample}
                        codeExamples={NxFormHorizontalLayoutCode}>
      This example demonstrates a form layout with horizontally placed text input fields. Note that the checkbox and
      radio fieldsets remain vertically separated, they should not be placed side-by-side. This example also
      demonstrates the use of an <code className="nx-code">NxErrorAlert</code> in the footer.
    </GalleryExampleTile>

    <GalleryExampleTile title="Inline form layout"
                        id="nx-form-layout-inline-example"
                        liveExample={NxFormInlineLayoutExample}
                        codeExamples={NxFormInlineLayoutCode}>
      This example demonstrates a form layout with the submit button placed inline with a text input field.
    </GalleryExampleTile>
  </>;

export default NxFormLayoutPage;
