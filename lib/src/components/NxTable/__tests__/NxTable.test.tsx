/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';

import { render, screen, within, waitFor } from '@testing-library/react';
import { rtlRenderElement, userEvent, runTimers } from '../../../__testutils__/rtlUtils';

import { RowContext } from '../contexts';
import { NxTableCellProps } from '../types';

import NxTable from '../NxTable';
import NxTableHead from '../NxTableHead';
import NxTableRow from '../NxTableRow';
import NxTableCell from '../NxTableCell';
import NxTableBody from '../NxTableBody';

describe('NxTable', function() {
  const renderEl = rtlRenderElement(NxTable, {});

  it('passes general attributes to top-level element', function() {
    const component = renderEl({ id: 'dolphin', lang: 'en-CA' });
    expect(component).toHaveAttribute('id', 'dolphin');
    expect(component).toHaveAttribute('lang', 'en-CA');
  });

  it('merges any passed in className', function() {
    const componentWithAddedClass = renderEl({ className: 'foo' });
    const component = renderEl()!;

    expect(componentWithAddedClass).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithAddedClass).toHaveClass(cls);
    }
  });

  it('renders children of table with correct element types', function() {
    render(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Foo</NxTableCell>
            <NxTableCell>Bar</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody>
          <NxTableRow>
            <NxTableCell>0</NxTableCell>
            <NxTableCell>1024</NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    );

    const table = screen.getByRole('table');
    const rowGroups = within(table).getAllByRole('rowgroup');
    const headerRows = within(rowGroups[0]).getAllByRole('row');
    const headerColumnHeaders = within(headerRows[0]).getAllByRole('columnheader');
    const headerCells = within(headerRows[0]).queryAllByRole('cell');
    const bodyRows = within(rowGroups[1]).getAllByRole('row');
    const bodyColumnHeaders = within(bodyRows[0]).queryAllByRole('columnheader');
    const bodyCells = within(bodyRows[0]).getAllByRole('cell');

    expect(table).toBeInTheDocument();
    expect(rowGroups).toHaveLength(2);
    expect(headerRows).toHaveLength(1);
    expect(headerColumnHeaders).toHaveLength(2);
    expect(headerCells).toHaveLength(0);
    expect(bodyRows).toHaveLength(1);
    expect(bodyColumnHeaders).toHaveLength(0);
    expect(bodyCells).toHaveLength(2);

    expect(bodyCells[0]).not.toHaveAttribute('colspan');
    expect(bodyCells[1]).not.toHaveAttribute('colspan');
  });

  describe('NxTableBody', function() {
    it('Puts the correct colSpan on a loading meta-info cell', function() {
      const {debug} = render(
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody isLoading />
        </NxTable>
      );

      debug();
      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');
    });

    it('Puts the correct colSpan on an emptyMessage meta-info cell', async function() {
      render(
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody emptyMessage="Empty" />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');
      expect(screen.getByRole('cell')).toHaveTextContent('Empty');
    });

    it('Puts the correct colSpan on an error meta-info cell', function() {
      render(
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody error="Error!" />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');
      expect(screen.getByRole('cell')).toHaveTextContent('Error!');
    });

    it('correctly updates the colspan if the number of columns changes', async function() {
      const { rerender } = render(
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody error="Error!" />
        </NxTable>
      );

      expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2');

      rerender(
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody error="Error!" />
        </NxTable>
      );

      await waitFor(() => expect(screen.getByRole('cell')).toHaveAttribute('colspan', '1'));

      expect(screen.getByRole('cell')).toHaveTextContent('Error!');
    });

    it('does not show the emptyMessage when there are children', async function() {
      render(
        <NxTable>
          <NxTableBody emptyMessage="Empty message">
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message');
    });

    it('does not show the emptyMessage when isLoading', function() {
      render(<NxTable><NxTableBody emptyMessage="Empty message" isLoading /></NxTable>);
      expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message');
    });

    it('does not show the emptyMessage when in error', function() {
      render(<NxTable><NxTableBody emptyMessage="Empty message" error="Errr" retryHandler={() => { }} /></NxTable>);

      expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message');
    });

    it('removes the emptyMessage when children are added', async function() {
      const { rerender } = render(<NxTable><NxTableBody emptyMessage="Empty message"></NxTableBody></NxTable>);

      expect(screen.getByRole('rowgroup')).toHaveTextContent('Empty message');

      rerender(
        <NxTable>
          <NxTableBody emptyMessage="Empty message">
            <NxTableRow>
              <NxTableCell />
            </NxTableRow>
            <NxTableRow>
              <NxTableCell />
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      await waitFor(() => expect(screen.getByRole('rowgroup')).not.toHaveTextContent('Empty message'));
    });
  });

  describe('NxTableRow', function() {
    it('renders cell instead of columnheader when isFilterHeader is set to true', function() {
      render(
        <NxTable>
          <NxTableHead>
            <NxTableRow isFilterHeader={true}>
              <NxTableCell>Foo</NxTableCell>
            </NxTableRow>
          </NxTableHead>
        </NxTable>
      );

      expect(screen.getByRole('cell')).toBeInTheDocument();
    });

    it('sets the clickable row accessible name based on the text of its cells', function() {
      render(
        <NxTable>
          <NxTableBody>
            <NxTableRow isClickable={true}>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      expect(screen.getByRole('row')).toHaveAccessibleName('Foo Bar');
    });

    it('sets the isFilterHeader flag into the RowContext, normalized to a boolean', function() {
      function ContextDependentChild() {
        const { isFilterHeader } = useContext(RowContext);
        return <span data-testid="context-dependent">{isFilterHeader.toString()}</span>;
      }

      const { rerender } = render(
        <NxTable>
          <NxTableBody>
            <NxTableRow isFilterHeader={true}>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
              <NxTableCell />
              <NxTableCell>Baz</NxTableCell>
              <NxTableCell><ContextDependentChild /></NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      expect(screen.getByTestId('context-dependent')).toHaveTextContent('true');

      rerender(
        <NxTable>
          <NxTableBody>
            <NxTableRow isFilterHeader={false}>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
              <NxTableCell />
              <NxTableCell>Baz</NxTableCell>
              <NxTableCell><ContextDependentChild /></NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      expect(screen.getByTestId('context-dependent')).toHaveTextContent('false');

      rerender(
        <NxTable>
          <NxTableBody>
            <NxTableRow isFilterHeader={null}>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
              <NxTableCell />
              <NxTableCell>Baz</NxTableCell>
              <NxTableCell><ContextDependentChild /></NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      expect(screen.getByTestId('context-dependent')).toHaveTextContent('false');

      rerender(
        <NxTable>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>Foo</NxTableCell>
              <NxTableCell>Bar</NxTableCell>
              <NxTableCell />
              <NxTableCell>Baz</NxTableCell>
              <NxTableCell><ContextDependentChild /></NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      );

      expect(screen.getByTestId('context-dependent')).toHaveTextContent('false');
    });
  });

  describe('NxTableCell', function() {
    const renderColumnHeader = (extraProps?: NxTableCellProps) => render(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell { ...extraProps }/>
          </NxTableRow>
        </NxTableHead>
      </NxTable>
    ).getByRole('columnheader') as HTMLElement;

    describe('when the chevron prop is true', function() {
      describe('when not isHeader', function() {
        it('sets the button accessible name from the row clickAccessibleLabel', function() {
          render(
            <NxTable>
              <NxTableBody>
                <NxTableRow clickAccessibleLabel="dolphin">
                  <NxTableCell chevron/>
                </NxTableRow>
              </NxTableBody>
            </NxTable>
          );

          expect(screen.getByRole('button')).toHaveAccessibleName('dolphin');
        });
      });

      describe('when isHeader', function() {
        it('renders a visually hidden header cell with the text "Select Row"', function() {
          const component = renderColumnHeader({
            chevron: true,
            sortDir: 'asc',
            children: <span>foo</span>
          })!;

          expect(component).toHaveTextContent('Select Row');
        });
      });
    });

    describe('when the rowBtnIcon prop is set', function() {
      describe('when isHeader', function() {
        it('sets default aria-sort', function() {
          expect(renderColumnHeader({ isSortable: true })).toHaveAttribute('aria-sort', 'none');
        });

        it('sets ascending aria-sort', function() {
          expect(renderColumnHeader({ isSortable: true, sortDir: 'asc' })).toHaveAttribute('aria-sort', 'ascending');
        });

        it('sets descending aria-sort', function() {
          expect(
              renderColumnHeader({ isSortable: true, sortDir: 'desc' })
          ).toHaveAttribute('aria-sort', 'descending');
        });

        it('renders default tooltip and content', async function() {
          const user = userEvent.setup();

          const sortDefault = within(
              renderColumnHeader({ isSortable: true, children: 'foo' })!
          ).getByRole('button');

          await user.hover(sortDefault);
          await runTimers();
          const tooltip = await screen.findByRole('tooltip');
          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toHaveTextContent('foo unsorted');
        });

        it('renders ascending tooltip and content', async function() {
          const user = userEvent.setup();

          const sortAsc = within(
              renderColumnHeader({ isSortable: true, children: 'foo', sortDir: 'asc' })!
          ).getByRole('button');

          await user.hover(sortAsc);
          await runTimers();
          const tooltip = await screen.findByRole('tooltip');
          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toHaveTextContent('foo ascending');
        });

        it('renders ascending tooltip and content', async function() {
          const user = userEvent.setup();

          const sortDesc = within(
              renderColumnHeader({ isSortable: true, children: 'foo', sortDir: 'desc' })!
          ).getByRole('button');

          await user.hover(sortDesc);
          await runTimers();
          const tooltip = await screen.findByRole('tooltip');
          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toHaveTextContent('foo descending');
        });

        it('sets default button accessible name to match the tooltip', function() {
          expect(
              within(renderColumnHeader({ isSortable: true, children: 'foo' })
              ).getByRole('button'))
              .toHaveAccessibleName('foo unsorted');
        });

        it('sets ascending button accessible name to match the tooltip', function() {
          expect(
              within(renderColumnHeader({ isSortable: true, children: 'foo', sortDir: 'asc' })
              ).getByRole('button'))
              .toHaveAccessibleName('foo ascending');
        });

        it('sets descending button accessible name to match the tooltip', function() {
          expect(
              within(renderColumnHeader({ isSortable: true, children: 'foo', sortDir: 'desc' })
              ).getByRole('button'))
              .toHaveAccessibleName('foo descending');
        });
      });
    });
  });
});
