/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxTable,
  NxWarningAlert,
  NxTextLink,
  NxP,
  NxCode,
  NxH3,
  NxTile,
  NxList
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormExample from './NxFormExample';
import NxFormCustomizedExample from './NxFormCustomizedExample';

const NxFormExampleCode = require('./NxFormExample?raw'),
    NxFormCustomizedExampleCode = require('./NxFormCustomizedExample?raw'),
    NxFormCustomizedExampleScss = require('./NxFormCustomizedExample.scss?raw');

import './NxFormCustomizedExample.scss';

const customizedExampleCode = [
  NxFormCustomizedExampleCode,
  { language: 'scss', content: NxFormCustomizedExampleScss}
];

const NxFormPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxForm</NxCode> is an encapsulation of styles and typical behavior for
        a form within a Sonatype application. It helps manage the UI around the following behaviors.
      </NxP>
      <NxList bulleted>
        <NxList.Item>
          <NxList.Text>Standard form footer with submit and cancel buttons</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Initial loading including error and retry handling</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Form submission including the submit mask</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Form cancellation</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Form validation including disabling of submit button for invalid forms
          </NxList.Text>
        </NxList.Item>
      </NxList>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Default</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>loading</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>false</NxTable.Cell>
            <NxTable.Cell>
              Set to true to display a loading spinner in place of the form. Only has an effect when used in
              conjunction with <NxCode>doLoad</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>doLoad</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>noop</NxTable.Cell>
            <NxTable.Cell>
              When this prop is defined, it indicates that some asynchronous, retryable data load must happen
              before the form can be displayed. The form is wrapped in an{' '}
              <NxTextLink href="#/pages/Load%20Wrapper">
                <NxCode>NxLoadWrapper</NxCode>
              </NxTextLink>
              {' '}and this function is wired up to the retry button on the load error alert. Note that the
              initial load of the form data is expected to be triggered externally{' '}
              – <NxCode>NxForm</NxCode> only calls this function in response to the Retry button.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onSubmit</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              The function to invoke in response to the form submission. Note that to prevent browser-native
              form submission semantics (e.g. page reload) the form
              event's <NxCode>preventDefault</NxCode> method is called before this method is
              dispatched. This function does not receive the form submit event as an argument, because it may
              also be called in response to a click on the Retry button in the form submission error alert. Note that
              this handler does get called even if the form is currently invalid, and should <em>not</em> carry out
              the submission when that is the case. It should, however, always
              update <NxCode>showValidationErrors</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onCancel</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>noop</NxTable.Cell>
            <NxTable.Cell>
              If this prop is defined, a Cancel button will be added to the form footer which triggers this function
              when clicked.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>loadError</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>undefined</NxTable.Cell>
            <NxTable.Cell>
              If defined, the load wrapper's error alert will be displayed in place of the form, with this string
              as its error message. Only has an effect if <NxCode>doLoad</NxCode> is also defined.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitError</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>undefined</NxTable.Cell>
            <NxTable.Cell>
              If defined, an error alert will be rendered in the form footer showing the corresponding message,
              along with a Retry button wired to the <NxCode>onSubmit</NxCode> handler.
              Additionally, the Submit button is hidden when this prop is defined.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitErrorTitleMessage</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>"An error occurred saving data."</NxTable.Cell>
            <NxTable.Cell>
              The <NxCode>titleMessage</NxCode> to set on
              the <NxCode>NxLoadError</NxCode> which displays errors from form submission.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>validationErrors</NxTable.Cell>
            <NxTable.Cell><NxCode>ValidationErrors</NxCode></NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>undefined</NxTable.Cell>
            <NxTable.Cell>
              A string or list of strings, the first of which becomes the overall validation message for the form.
              When defined and <NxCode>showValidationErrors</NxCode> is true, this message will appear in the form
              footer within an <NxCode>NxErrorAlert</NxCode>, and the Submit button will not be visible. This
              prop must be set with a value if any of the fields within this form
              have <NxCode>validationErrors</NxCode> values of their own.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>showValidationErrors</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              <NxP>
                Whether or not validation errors within the form should all currently be shown. When true, the form-wide
                <NxCode>validationErrors</NxCode> will be displayed in an <NxCode>NxErrorAlert</NxCode> in the footer
                and all <NxCode>validationErrors</NxCode> on individual form fields will also be displayed regardless of
                whether those fields are pristine (pristine fields do not otherwise display
                their <NxCode>validationErrors</NxCode>).
              </NxP>
              <NxP>
                Calling code should set this prop to false on freshly-rendered forms, forms that have been submitted
                successfully, and when a form transitions from having <NxCode>validationErrors</NxCode> to having
                no <NxCode>validationErrors</NxCode>. Calling code should set this prop to true when a form submission
                is attempted.  See <NxCode>NxStatefulForm</NxCode> for automatic management of this prop.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitBtnClasses</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>empty</NxTable.Cell>
            <NxTable.Cell>Extra CSS classes to apply to the submit button</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitBtnText</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>Submit</NxTable.Cell>
            <NxTable.Cell>The text content of the submit button</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitMaskState</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>null</NxTable.Cell>
            <NxTable.Cell>
              If null, the submit mask is not shown. If false, the mask is shown in its "submitting" state. If
              true, the mask is shown in its "success" state.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitMaskMessage</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>Submitting…</NxTable.Cell>
            <NxTable.Cell>
              The message to display in the submit mask while the form submission is pending
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>submitMaskSuccessMessage</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>Success!</NxTable.Cell>
            <NxTable.Cell>
              The message to briefly display in the submit mask while the form submission has succeeded
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>additionalFooterBtns</NxTable.Cell>
            <NxTable.Cell>JSX</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>empty</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                Extra buttons to render in the form footer to the left of the Submit and Cancel buttons. These buttons
                would typically use tertiary button styling.
              </NxP>
              <NxWarningAlert>
                Do not forget that <NxCode>&lt;button&gt;</NxCode> elements, including those
                rendered by <NxCode>NxButton</NxCode>,
                have <NxCode>type="submit"</NxCode> by default. Therefore, in order to avoid these
                additional buttons submitting the form, care must be taken to
                add <NxCode>type="button"</NxCode> to each of them.
              </NxWarningAlert>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>JSX or (() =&gt; JSX)</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              The form contents, excluding the footer which is provided by this component. Can be specified as a
              function in order to avoid rendering children before loading completes
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;form&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/form">
                HTML form Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              NxForm supports any HTML attribute that's normally supported
              by <NxCode>&lt;form&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxForm Submit and Cancel Button Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          In order to differentiate them from other buttons that might be on the page the
          <NxCode>NxForm</NxCode> cancel and submit buttons have custom classes.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-form__cancel-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Applied to the default <NxCode>NxForm</NxCode> Cancel button.
              </NxTable.Cell>
              <NxTable.Cell>
                A CSS class that can be used to identify the Cancel button on the page for testing or other purposes.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-form__submit-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Applied to the default <NxCode>NxForm</NxCode> Submit button.
              </NxTable.Cell>
              <NxTable.Cell>
                A CSS class that can be used to identify the Submit button on the page for testing or other purposes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Validation Behaviors</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          RSC forms have a number of validation behaviors. Validation errors can be present on individual
          form fields and/or on the form as a whole. On individual fields, validation error messages are displayed
          in small red text underneath of the field whenever the field is not pristine or a submission of the form
          has been attempted. For instance, when the user first arrives at a form, no validation errors are shown, even
          if the initial values of some fields are not valid. If the user then attempts to immediately submit the form
          however, all current individual field validation errors would become visible. Alternatively, if they edit a
          field but leave it with an invalid value, that field's validation error would become visible.
        </NxP>
        <NxP>
          In addition to each field's validation errors, the form overall may have validation errors. These errors
          display within the form footer. Like the individual field validation errors, this overall error is not
          displayed upon the form's initial load and is only displayed once the user attempts to submit the form.
          Once the user takes whatever action is necessary to fix the form-level validation error, any new form-level
          validation errors also do not display until the user again attempts to submit the form. At the implementation
          level, the display of the form-level validation errors is controlled by
          the <NxCode>showValidationErrors</NxCode> prop, and the calling code must manage this prop according to the
          rules above. Wherever possible, it is recommend to use <NxCode>NxStatefulForm</NxCode> instead which manages
          that prop automatically.
        </NxP>
        <NxP>
          As an additional important aspect of form validation, note that the form-level validation error must function
          as a "roll-up" of the individual field validation errors.  That is, if any fields have an active validation
          error, then the form overall should also have a validation error, though it does not need to be worded
          identically. The overall effect being that when the user attempts to submit the form, they see the form
          validation error in the footer (near the Submit button that they just clicked) <em>and</em> see a field
          validation error on the field(s) that are the cause of the problem. There may also be some cases where
          form-level validation errors are appropriate even in the absense of any field validation errors.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Asynchronous Example"
                        id="nx-form-example"
                        codeExamples={NxFormExampleCode}
                        liveExample={NxFormExample}>
      This example shows an asynchronously loading NxForm. The example is contrived such that the
      form fails to load the first time, but does load (after a brief wait) upon a second attempt.
      Additionally, the first attempt to submit the form fails, while the retry succeeds.
    </GalleryExampleTile>

    <GalleryExampleTile title="Customized Example"
                        id="nx-form-customized-example"
                        codeExamples={customizedExampleCode}
                        liveExample={NxFormCustomizedExample}>
      This example demonstrates the various form props that can further customize the presentation of the form,
      including styling of the form overall as well as the submit button.
    </GalleryExampleTile>
  </>;

export default NxFormPage;
