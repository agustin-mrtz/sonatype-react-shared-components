/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxRadio, { Props } from '../NxRadio';
import { PropsWithAnyInputAttributes } from '../types';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';

describe('NxRadio', function() {
  const simpleProps: Props = {
    name: 'color',
    value: 'red',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: undefined
  };

  const getShallow = getShallowComponent<PropsWithAnyInputAttributes>(NxRadio, simpleProps);

  it('renders a <label> containing a radio <input> and .nx-radio__circle and .nx-radio__outer-circle  elements',
      function() {
        const shallowRender = getShallow();

        expect(shallowRender).toMatchSelector('label.nx-radio');

        expect(shallowRender.find('input')).toHaveProp('name', 'color');
        expect(shallowRender.find('input')).toHaveProp('type', 'radio');
        expect(shallowRender.find('input')).toHaveProp('disabled', false);
        expect(shallowRender.find('input')).toHaveProp('checked', false);

        expect(shallowRender.find('input')).toHaveClassName('nx-radio__input');

        expect(shallowRender.find('svg.nx-radio__circle')).toExist();
        expect(shallowRender.find('.nx-radio__circle .nx-radio__outer-circle')).toExist();
      }
  );

  it('adds classes specified with the className prop', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-radio');
  });

  it('renders .nx-radio__inner-circle iff it is checked', function() {
    expect(getShallow()).not.toContainMatchingElement('.nx-radio__inner-circle');
    expect(getShallow({ isChecked: true })).toContainMatchingElement('.nx-radio__circle .nx-radio__inner-circle');
    expect(getShallow({ isChecked: true, disabled: true }))
        .toContainMatchingElement('.nx-radio__circle .nx-radio__inner-circle');
  });

  it('uses null as the value passed to onChange if the supplied value is null', function() {
    const onChange = jest.fn();
    const component = getShallow({ name: 'somename', value: null, onChange });

    component.find('input').simulate('change');
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('passes unknown props to the label element', function() {
    const component = getShallow({ id: 'foo', htmlFor: 'baz' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('htmlFor', 'baz');
  });

  describe('when disabled prop is true', function () {
    it('adds the nx-radio-checkbox--disabled class', function() {
      expect(getShallow()).not.toHaveClassName('nx-radio-checkbox--disabled');
      expect(getShallow({ disabled: true })).toHaveClassName('nx-radio-checkbox--disabled');
    });

    it('disables the input', function() {
      expect(getShallow().find('input')).toHaveProp('disabled', false);
      expect(getShallow({ disabled: false }).find('input')).toHaveProp('disabled', false);
      expect(getShallow({ disabled: true }).find('input')).toHaveProp('disabled', true);
    });
  });

  describe('isChecked prop', function () {
    it('sets the input to checked per the value of isChecked', function() {
      expect(getShallow({ isChecked: false }).find('input')).toHaveProp('checked', false);
      expect(getShallow({ isChecked: true }).find('input')).toHaveProp('checked', true);
    });

    it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
      expect(getShallow()).toHaveClassName('tm-unchecked');
      expect(getShallow()).not.toHaveClassName('tm-checked');

      expect(getShallow({ isChecked: true })).not.toHaveClassName('tm-unchecked');
      expect(getShallow({ isChecked: true })).toHaveClassName('tm-checked');
    });
  });

  describe('children prop', function () {
    it('renders children nodes within an nx-radio__content <span>', function() {
      const render = shallow(
        <NxRadio { ...simpleProps }>
          <div className="bar"></div>
        </NxRadio>
      );

      expect(render).toContainMatchingElement('label span.nx-radio__content .bar');
    });

    it('does not render the .nx-radio__content element if there are no children', function() {
      expect(getShallow()).not.toContainMatchingElement('.nx-radio__content');
    });

    it('wraps the .nx-radio__content element in an NxOverflowTooltip unless overflowTooltip is set to false',
        function() {
          expect(getShallow()).not.toContainMatchingElement(NxOverflowTooltip);

          expect(getShallow({ children: <div/> })).toContainMatchingElement(NxOverflowTooltip);
          expect(getShallow({ children: <div/> }).find(NxOverflowTooltip))
              .toContainMatchingElement('.nx-radio__content');

          expect(getShallow({ children: <div/>, overflowTooltip: true }))
              .toContainMatchingElement(NxOverflowTooltip);
          expect(getShallow({ children: <div/>, overflowTooltip: true }).find(NxOverflowTooltip))
              .toContainMatchingElement('.nx-radio__content');

          expect(getShallow({ children: <div/>, overflowTooltip: null }))
              .toContainMatchingElement(NxOverflowTooltip);
          expect(getShallow({ children: <div/>, overflowTooltip: null }).find(NxOverflowTooltip))
              .toContainMatchingElement('.nx-radio__content');

          expect(getShallow({ children: <div/>, overflowTooltip: false }))
              .not.toContainMatchingElement(NxOverflowTooltip);
          expect(getShallow({ children: <div/>, overflowTooltip: false }))
              .toContainMatchingElement('.nx-radio__content');
        }
    );
  });

  it('calls its onChange prop with value argument when the input fires a change event', function() {
    const onChange = jest.fn(),
        component = getShallow({ onChange });

    expect(onChange).not.toHaveBeenCalled();
    component.find('input').simulate('change');
    expect(onChange).toHaveBeenCalledWith('red');
  });

  it('sets the input as readonly if there is no onChange handler', function() {
    expect(getShallow().find('input')).toHaveProp('readOnly', false);
    expect(getShallow({ onChange: undefined }).find('input')).toHaveProp('readOnly', true);
    expect(getShallow({ onChange: null }).find('input')).toHaveProp('readOnly', true);
  });

  it('adds id attribute to radio input when radioId prop is provided', function () {
    const component = getShallow({ radioId: 'color-red'});
    expect(component.find('input')).toHaveProp('id', 'color-red');
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const component = getShallow({
      radioId: 'not-garfield',
      disabled: true,
      isChecked: true,
      name: 'garfield',
      className: 'label-classname',
      inputAttributes: {
        id: 'garfield',
        name: 'not-garfield',
        disabled: false,
        className: 'checkbox-classname',
        checked: false
      }
    });

    expect(component.find('input')).toHaveProp('id', 'garfield');
    expect(component.find('input')).toHaveProp('name', 'garfield');
    expect(component.find('input')).toHaveProp('disabled', true);
    expect(component.find('input')).toHaveClassName('checkbox-classname');
    expect(component.find('input')).toHaveProp('checked', true);
  });
});
