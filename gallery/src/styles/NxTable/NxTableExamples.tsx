/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode } from '@sonatype/react-shared-components';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTableClickableExample from './NxTableClickableExample';
import NxTableIconButtonExample from './NxTableIconButtonExample';
import NxTableErrorExample from './NxTableErrorStateExample';
import NxTableFixedLayoutExample from './NxTableFixedLayoutExample';
import NxTableSortableExample from './NxTableSortableExample';
import NxTableFilterExample from './NxTableFilterExample';

import './NxTableTruncationAndWrappingExample.scss';
import './NxTableFixedLayoutExample.scss';

const NxTableSimpleCode = require('./NxTableDefaultExample.html'),
    NxTableClickableCode = require('./NxTableClickableExample?raw'),
    NxTableIconButtonCode = require('./NxTableIconButtonExample?raw'),
    NxTableEmptyCode = require('./NxTableEmptyExample.html'),
    NxTableErrorStateCode = require('./NxTableErrorStateExample?raw'),
    NxTableTruncationAndWrappingCode = require('./NxTableTruncationAndWrappingExample.html'),
    NxTableFixedLayoutCode = require('./NxTableFixedLayoutExample?raw'),
    NxTableTruncationAndWrappingScss = require('./NxTableTruncationAndWrappingExample.scss?raw'),
    NxTableFixedLayoutScss = require('./NxTableFixedLayoutExample.scss?raw'),
    NxTableFilterCode = require('./NxTableFilterExample?raw'),
    NxTableSortableCode = require('./NxTableSortableExample?raw');

const truncationAndWrappingCodeExamples = [
      NxTableTruncationAndWrappingCode,
      { content: NxTableTruncationAndWrappingScss, language: 'scss'}
    ],
    fixedLayoutCodeExamples = [
      NxTableFixedLayoutCode,
      { content: NxTableFixedLayoutScss, language: 'scss'}
    ];

const NxTablesExamples = () =>
  <>
    <GalleryExampleTile title="NX Table Simple Example"
                        htmlExample={NxTableSimpleCode}
                        codeExamples={NxTableSimpleCode}>
      A simple, static demonstration of <NxCode>nx-table</NxCode> styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Truncation and Wrapping Example"
                        id="nx-table-truncation-wrapping-example"
                        htmlExample={NxTableTruncationAndWrappingCode}
                        codeExamples={truncationAndWrappingCodeExamples}>
      A demonstration of text truncation and wrapping within table cells. The first column truncates, while the second
      wraps. Notice that wrapping is the default behavior. Truncation requires an extra element within the table cell,
      which must have an explicit width.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Clickable Rows Example"
                        liveExample={NxTableClickableExample}
                        codeExamples={NxTableClickableCode}>
      A demonstration of an <NxCode>nx-table</NxCode> with rows that receive clickable styling and
      a chevron column.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Fixed Layout Example"
                        id="nx-table-fixed-layout-example"
                        liveExample={NxTableFixedLayoutExample}
                        codeExamples={fixedLayoutCodeExamples}>
      This example demonstrates the nx-table--fixed-layout class which is typically used in conjunction with
      a custom class to explicitly set the widths of table rows. Notice here that the implementation of a
      truncated column is simpler: the inner <NxCode>div</NxCode> is not necessary and instead
      the <NxCode>.nx-truncate-ellipsis</NxCode> class can be applied directly to the table cell.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Empty Example"
                        htmlExample={NxTableEmptyCode}
                        codeExamples={NxTableEmptyCode}>
      A demonstration of the expected styling and content of an empty <NxCode>nx-table</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Error Message Example"
                        liveExample={NxTableErrorExample}
                        codeExamples={NxTableErrorStateCode}>
      A demonstration of the expected styling and content and an <NxCode>nx-table</NxCode> whose
      contents failed to load.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Sortable Rows Example"
                        liveExample={NxTableSortableExample}
                        codeExamples={NxTableSortableCode}>
      A demonstration of a <NxCode>nx-table</NxCode> used for columns that can be sorted.
      In this example the interactivity to sort columns is not wired up. Note
      the <NxCode>&lt;button&gt;</NxCode> surrounding the sort header contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Filter Rows Example"
                        liveExample={NxTableFilterExample}
                        codeExamples={NxTableFilterCode}>
      A demonstration of a <NxCode>nx-table</NxCode> with a header
      cell that contains a filter. Rows can be filtered depending on the text provided in the input.
      In this example the interactivity to filter content is not wired up. Note
      the <NxCode>&lt;button&gt;</NxCode> surrounding the chevron cell contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Icon Buttons Example"
                        id="nx-table-icon-buttons-example"
                        liveExample={NxTableIconButtonExample}
                        codeExamples={NxTableIconButtonCode}>
      A demonstration of an <NxCode>nx-table</NxCode> with icon-only buttons and an icon-only dropdown in both the
      filter row and the content rows. Note that the buttons in the filter row are the standard height while the
      buttons in the content rows are smaller. The default styles only support these sorts of buttons in the rightmost
      column.
    </GalleryExampleTile>
  </>;

export default NxTablesExamples;
