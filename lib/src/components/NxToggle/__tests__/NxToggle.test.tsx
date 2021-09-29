/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
        inputId: 'toggle-id',
        isChecked: false,
        onChange: () => {},
        disabled: undefined,
        children: 'Enables whales'
      },
      getShallow = getShallowComponent<Props>(NxToggle, simpleProps);

  it('renders a <label> containing a toggle <input> and toggle control', function() {
    const shallowRender = getShallow();

    expect(shallowRender).toMatchSelector('label.nx-toggle');

    expect(shallowRender.find('input')).toHaveProp('type', 'checkbox');
    expect(shallowRender.find('input')).toHaveProp('id', 'toggle-id');
    expect(shallowRender.find('input')).toHaveClassName('nx-toggle__input');

    expect(shallowRender.find('.nx-toggle__control')).toExist();
  });

  it('adds classes specified with the className prop', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-toggle');
  });

  it('adds the nx-toggle--disabled class if disabled is set', function() {
    expect(getShallow()).not.toHaveClassName('nx-toggle--disabled');
    expect(getShallow({ disabled: true })).toHaveClassName('nx-toggle--disabled');
  });

  it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
    expect(getShallow()).toHaveClassName('tm-unchecked');
    expect(getShallow()).not.toHaveClassName('tm-checked');

    expect(getShallow({ isChecked: true })).not.toHaveClassName('tm-unchecked');
    expect(getShallow({ isChecked: true })).toHaveClassName('tm-checked');
  });

  it('renders children nodes within an nx-toggle__content <span>', function() {
    const render = shallow(
      <NxToggle { ...simpleProps }>
        <div className="bar"></div>
      </NxToggle>
    );

    expect(render).toContainMatchingElement('label .nx-toggle__content .bar');
  });

  it('disables the input iff disabled is set', function() {
    expect(getShallow().find('input')).toHaveProp('disabled', false);
    expect(getShallow({ disabled: false }).find('input')).toHaveProp('disabled', false);
    expect(getShallow({ disabled: true }).find('input')).toHaveProp('disabled', true);
  });

  it('sets the input to checked per the value of isChecked', function() {
    expect(getShallow({ isChecked: false }).find('input')).toHaveProp('checked', false);
    expect(getShallow({ isChecked: true }).find('input')).toHaveProp('checked', true);
  });

  it('calls its onChange prop when the input fires a change event', function() {
    const onChange = jest.fn(),
        component = getShallow({ onChange });

    expect(onChange).not.toHaveBeenCalled();
    component.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });

  it('sets the input as readonly if there is no onChange handler', function() {
    expect(getShallow().find('input')).toHaveProp('readOnly', false);
    expect(getShallow({ onChange: undefined }).find('input')).toHaveProp('readOnly', true);
    expect(getShallow({ onChange: null }).find('input')).toHaveProp('readOnly', true);
  });

  it('passes unknown props to the label element', function() {
    const component = getShallow({ id: 'foo', htmlFor: 'baz' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('htmlFor', 'baz');
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const component = getShallow({
      inputId: 'not-garfield',
      disabled: true,
      isChecked: true,
      className: 'label-classname',
      inputAttributes: {
        id: 'garfield',
        name: 'garfield',
        disabled: false,
        className: 'input-classname',
        checked: false
      } as Props['inputAttributes']
    });

    expect(component.find('input')).toHaveProp('id', 'garfield');
    expect(component.find('input')).toHaveProp('name', 'garfield');
    expect(component.find('input')).toHaveProp('disabled', true);
    expect(component.find('input')).toHaveClassName('input-classname');
    expect(component.find('input')).not.toHaveClassName('label-classname');
    expect(component.find('input')).toHaveProp('checked', true);
  });
});
