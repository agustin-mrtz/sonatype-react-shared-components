/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { screen } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  const quickRender = rtlRender<Props>(NxToggle, simpleProps);
  const renderEl = rtlRenderElement(NxToggle, simpleProps);

  it('renders a swith with the correct label', function() {
    quickRender();

    const checkbox = screen.getByRole('switch', { name: 'Enables whales' });
    expect(checkbox).toBeInTheDocument();
  });

  it('renders an input element with role=switch with the correct attributes', function() {
    quickRender();

    const checkbox = screen.getByRole('switch');
    expect(checkbox).toHaveAttribute('id', 'toggle-id');
  });

  it('merges any passed in className', function() {
    const componentWithAddedClass = renderEl({ className: 'foo' });
    const component = renderEl()!;

    expect(componentWithAddedClass).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithAddedClass).toHaveClass(cls);
    }
  });

  it('calls its onChange prop when the label is clicked', async function() {
    const user = userEvent.setup();

    const onChange = jest.fn();

    const { container } = quickRender({ onChange });
    const label = container.querySelector('label')!;

    expect(onChange).not.toHaveBeenCalled();
    await user.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls its onChange prop when the input is focused and space key is pressed', async function() {
    const user = userEvent.setup();
    const onChange = jest.fn();

    quickRender({ onChange });

    const checkbox = screen.getByRole('switch');

    expect(onChange).not.toHaveBeenCalled();
    await checkbox.focus();
    await user.keyboard('{Space}');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const props: Props = {
      inputId: 'not-garfield',
      disabled: true,
      isChecked: true,
      className: 'label-classname',
      inputAttributes: {
        id: 'garfield',
        name: 'garfield',
        className: 'input-classname'
      }
    };

    quickRender(props);

    const checkbox = screen.getByRole('switch');

    expect(checkbox).toHaveAttribute('id', 'garfield');
    expect(checkbox).toHaveAttribute('name', 'garfield');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('input-classname');
    expect(checkbox).not.toHaveClass('label-classname');
    expect(checkbox).toBeChecked();
  });
});
