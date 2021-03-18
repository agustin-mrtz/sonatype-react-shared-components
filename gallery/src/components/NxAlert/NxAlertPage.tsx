/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxAlertExample from './NxAlertExample';
import NxErrorAlertExample from './NxErrorAlertExample';
import NxWarningAlertExample from './NxWarningAlertExample';
import NxInfoAlertExample from './NxInfoAlertExample';
import NxSuccessAlertExample from './NxSuccessAlertExample';

const nxErrorAlertExampleCode = require('./NxErrorAlertExample?raw'),
    nxInfoAlertExampleCode = require('./NxInfoAlertExample?raw'),
    nxSuccessAlertExampleCode = require('./NxSuccessAlertExample?raw'),
    nxWarningAlertExampleCode = require('./NxWarningAlertExample?raw'),
    nxAlertExampleCode = require('./NxAlertExample?raw');

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Generic alert.</p>
      <p className="nx-p">Handy for DIY alert variations</p>
      <p className="nx-p">Accepts any prop that is valid on a div as well as the following:</p>
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
            <td className="nx-cell">icon</td>
            <td className="nx-cell">FontAwesome's Icons</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              A FontAwesome icon to use in the alert message
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">iconLabel</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Brief descriptive text to apply to the icon using
              the <code className="nx-code">aria-label</code> attribute. Optional for backwards compatibility, but
              strongly recommended.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onClose</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A handler that dismisses the alert when called. If this prop is present, a close button will be rendered
              at the right-hand side of the alert. When that button is clicked, this callback will be fired. Note that
              while this callback (and button) are optional, our UX patterns call for almost all alerts to be
              dismissable in some way. Therefore, an <code className="nx-code">onClose</code> callback should
              be provided, unless some other mechanism for closing the alert is provided within the alert children.
              A "Retry" button would be an example of such an alternative mechanism. Conversely, in the
              case where such an alternative mechanism is present, the <code className="nx-code">onClose</code>
              callback <em>should not</em> be provided.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Alert Example"
                        id="nx-alert-custom-example"
                        liveExample={NxAlertExample}
                        codeExamples={nxAlertExampleCode}>
      An example of a simple alert which adds a custom modifier class.
    </GalleryExampleTile>

    <GalleryTile title="NxErrorAlert, etc.">
      <p className="nx-p">Standard sonatype alerts.</p>
      <p className="nx-p">They come in four variations: Error, Info, Warning, and Success.</p>
      <p className="nx-p">
        Accepts any prop that is valid on a div as well as the <code className="nx-code">onClose</code> prop
        described above.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Accessibility Considerations</h3>
        </header>
        <p className="nx-p">
          Different types of alerts use
          different <a target="_blank" rel="noreferrer" href="https://www.w3.org/WAI/PF/aria/roles">ARIA roles</a>.{' '}
          <code className="nx-code">NxErrorAlert</code> uses <code className="nx-code">alert</code>.{' '}
          <code className="nx-code">NxSuccessAlert</code> uses <code className="nx-code">status</code>.{' '}
          <code className="nx-code">NxInfoAlert</code> uses no special role by default, though
          the <code className="nx-code">status</code> role may be appropriate in some use cases.{' '}
          Finally, <code className="nx-code">NxWarningAlert</code> also has no default role, but
          when used in dynamic circumstances, should typically be given either
          the <code className="nx-code">status</code> or <code className="nx-code">alert</code> role.
          The roles which are provided by default may be overridden by the caller.
        </p>
      </section>
    </GalleryTile>

    <GalleryExampleTile title="Success Alert Example"
                        id="nx-alert-success-example"
                        liveExample={NxSuccessAlertExample}
                        codeExamples={nxSuccessAlertExampleCode}>
      An example of an alert demonstrating success styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error Alert Example"
                        id="nx-alert-error-example"
                        liveExample={NxErrorAlertExample}
                        codeExamples={nxErrorAlertExampleCode}>
      An example of an alert demonstrating error styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Info Alert Example"
                        id="nx-alert-info-example"
                        liveExample={NxInfoAlertExample}
                        codeExamples={nxInfoAlertExampleCode}>
      An example of an alert demonstrating information styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning Alert Example"
                        id="nx-alert-warning-example"
                        liveExample={NxWarningAlertExample}
                        codeExamples={nxWarningAlertExampleCode}>
      An example of an alert demonstrating warning styling.
    </GalleryExampleTile>
  </>;

export default NxAlertPage;
