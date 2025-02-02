/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxCollapsibleRadioSelectExample from './NxCollapsibleRadioSelectExample';
import NxCollapsibleRadioSelectCustomTooltipExample from './NxCollapsibleRadioSelectCustomTooltipExample';
import NxCollapsibleRadioSelectDisabledExample from './NxCollapsibleRadioSelectDisabledExample';

const NxCollapsibleRadioSelectExampleCode = require('./NxCollapsibleRadioSelectExample?raw'),
    NxCollapsibleRadioSelectDisabledExampleCode = require('./NxCollapsibleRadioSelectDisabledExample?raw'),
    NxCollapsibleRadioSelectCustomTooltipExampleCode =
        require('./NxCollapsibleRadioSelectCustomTooltipExample?raw');

const NxCollapsibleRadioSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A collapsible collection of radio buttons component with support for filtering.
      </NxP>

      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>options</NxTable.Cell>
            <NxTable.Cell>Array of {'{id:string, name:string}'}</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                An array of objects that corresponds to the possible options of the component (the checkboxes).
                These objects need to at least have an <NxCode>id: string</NxCode> property and a{' '}
                <NxCode>name: string</NxCode> property. If an empty array is passed in, the component
                will be disabled.
              </NxP>
              <NxP>
                <NxCode>id</NxCode> will be the value provided to the{' '}
                <NxCode>onChange</NxCode> callback, and{' '}
                <NxCode>name</NxCode> will be used to render the option.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>name</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Name used in the default disabled tooltip and to identify the radio group.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>VDOM</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The content to be used as the collapsible item trigger.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              A function that will be called whenever a change occurs; it will receive the{' '}
              <NxCode>id</NxCode> of the selected radio.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>selectedId</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The <NxCode>id</NxCode> of the <NxCode>option</NxCode> to be selected.
              If not provided no option will be selected.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isOpen</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the collapsible item is open or closed. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>id</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Id to assign to the component
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the collapsible item should be rendered as disabled or not. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onToggleCollapse</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Called whenever the NxCollapsibleRadioSelect is toggled.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabledTooltip</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Enables the tooltip that appears when the component is disabled.
              If no <NxCode>disabledTooltip</NxCode> is passed in and the component is disabled due
              to lack of <NxCode>options</NxCode>, a default tooltip will be provided. If the
              component is disabled explicitly and no <NxCode>disabledTooltip</NxCode> is provided,
              no tooltip will be shown.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>optionTooltipGenerator</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Callback to generate tooltip text for each option. Called with the option object. If not supplied, the
              default overflow tooltip behavior of the checkboxes will be active.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>tooltipModifierClass</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Custom class to be applied to all the tooltips rendered by this component.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onFilterChange</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Called whenever filter term is changed. It will receive the current value of the filter term.
              If not provided the filter text input will not be rendered and filtering will be disabled.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filter</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Current value of filter term.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filteredOptions</NxTable.Cell>
            <NxTable.Cell>Array of {'{id:string, name:string}'}</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Options filtered using current filter term.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filterPlaceholder</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Placeholder to be used in filter text input. Defaults to "filter" but recommended to
              be something clearer for screenreading purposes.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filterThreshold</NxTable.Cell>
            <NxTable.Cell>Number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If number of options is greater than filter-threshold - allows filtering the options. Default is 10.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxCollapsibleRadioSelect Basic Example"
                        id="nx-collapsible-radio-select-example"
                        liveExample={NxCollapsibleRadioSelectExample}
                        codeExamples={NxCollapsibleRadioSelectExampleCode}>
      A basic example of <NxCode>NxCollapsibleRadioSelect</NxCode>, with working collapse/expand,
      filtering, and selection. Note that the overflowing label gets a tooltip.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleRadioSelect Custom Tooltip Example"
                        liveExample={NxCollapsibleRadioSelectCustomTooltipExample}
                        codeExamples={NxCollapsibleRadioSelectCustomTooltipExampleCode}>
      Example of an <NxCode>NxCollapsibleRadioSelect</NxCode> which generates a tooltip for each option
      based on a custom field.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleRadioSelect Disabled Example"
                        liveExample={NxCollapsibleRadioSelectDisabledExample}
                        codeExamples={NxCollapsibleRadioSelectDisabledExampleCode}>
      A disabled <NxCode>NxCollapsibleRadioSelect</NxCode>
    </GalleryExampleTile>
  </>;

export default NxCollapsibleRadioSelectPage;
