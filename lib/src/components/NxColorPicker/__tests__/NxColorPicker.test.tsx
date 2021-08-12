/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';

import NxColorPicker, { Props } from '../NxColorPicker';
import NxTooltip from '../../NxTooltip/NxTooltip';
import NxFieldset from '../../NxFieldset/NxFieldset';

describe('NxColorPicker', function() {
  const minimalProps = { label: 'My Color Picker' },
      getShallow = getShallowComponent<Props>(NxColorPicker, minimalProps),
      getMounted = getMountedComponent<Props>(NxColorPicker, minimalProps);

  it('renders an NxFieldset with the nx-color-picker class', function() {
    expect(getShallow()).toMatchSelector('.nx-color-picker');
    expect(getShallow()).toMatchSelector(NxFieldset);
  });

  it('adds any custom classes to the NxFieldset', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-color-picker');
  });

  it('adds specified extra attributes to the fieldset', function() {
    const component = getShallow({ id: 'foo', lang: 'en_US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('adds the label prop to the NxFieldset', function() {
    const component = getShallow();
    expect(component).toHaveProp('label', 'My Color Picker');
  });

  it('renders a label.nx-color-picker__color wrapped around a input.nx-color-picker__input radio for each color',
      function() {
        const component = getMounted(),
            labels = component.find('label.nx-color-picker__color');

        expect(labels).toHaveLength(10);

        labels.forEach(function(label) {
          expect(label).toContainMatchingElement('input.nx-color-picker__input');
          expect(label.find('input')).toHaveProp('type', 'radio');
        });
      }
  );

  it('sets a --color modifier class with the color name on each label', function() {
    const component = getMounted(),
        labels = component.find('label.nx-color-picker__color');

    expect(labels.filter('.nx-selectable-color--light-blue')).toExist();
    expect(labels.filter('.nx-selectable-color--purple')).toExist();
    expect(labels.filter('.nx-selectable-color--pink')).toExist();
    expect(labels.filter('.nx-selectable-color--blue')).toExist();
    expect(labels.filter('.nx-selectable-color--red')).toExist();
    expect(labels.filter('.nx-selectable-color--green')).toExist();
    expect(labels.filter('.nx-selectable-color--orange')).toExist();
    expect(labels.filter('.nx-selectable-color--yellow')).toExist();
    expect(labels.filter('.nx-selectable-color--lime')).toExist();
  });

  it('wraps each label in a tooltip with a display friendly color name', function() {
    const component = getMounted(),
        tooltips = component.find(NxTooltip);

    expect(tooltips).toHaveLength(10);

    expect(tooltips.filterWhere(tooltip => tooltip.prop('title') === 'Light Blue'))
        .toContainMatchingElement('label.nx-selectable-color--light-blue');

    expect(tooltips.filterWhere(tooltip => tooltip.prop('title') === 'Green'))
        .toContainMatchingElement('label.nx-selectable-color--green');
  });

  it('sets an aria-label derived from the color name and overall label on each <label>', function() {
    const component = getMounted(),
        labels = component.find('.nx-color-picker__color');

    expect(labels.filter('.nx-selectable-color--light-blue')).toHaveProp('aria-label', 'My Color Picker Light Blue');
    expect(labels.filter('.nx-selectable-color--green')).toHaveProp('aria-label', 'My Color Picker Green');
  });

  it('sets a random common name attr on each radio', function() {
    const component1 = getMounted(),
        component2 = getMounted(),
        inputs1 = component1.find('input'),
        inputs2 = component2.find('input'),
        name1 = inputs1.at(0).prop('name'),
        name2 = inputs2.at(0).prop('name');

    expect(name1).toBeTruthy();
    expect(name2).toBeTruthy();
    expect(name1).not.toBe(name2);

    inputs1.forEach(function(input) {
      expect(input).toHaveProp('name', name1);
    });

    inputs2.forEach(function(input) {
      expect(input).toHaveProp('name', name2);
    });
  });

  it('sets the corresponding color value on each input', function() {
    const component = getMounted(),
        labels = component.find('.nx-color-picker__color');

    expect(labels.filterWhere(label => label.hasClass('nx-selectable-color--light-blue')).find('input'))
        .toHaveProp('value', 'light-blue');

    expect(labels.filterWhere(label => label.hasClass('nx-selectable-color--green')).find('input'))
        .toHaveProp('value', 'green');
  });

  it('sets the checked attr to true only on the input matching the value', function() {
    const noneSelectedComponent = getMounted(),
        greenSelectedComponent = getMounted({ value: 'green' });

    expect(noneSelectedComponent.find('input').filterWhere(input => !!input.prop('checked'))).not.toExist();

    expect(greenSelectedComponent.find('input').filterWhere(input => !!input.prop('checked')))
        .toHaveProp('value', 'green');
  });

  it('sets the selected class on the label of the selected color', function() {
    expect(getMounted({ value: 'green' }).find('.nx-color-picker__color.selected'))
        .toHaveClassName('nx-selectable-color--green');
  });

  it('fires its onChange handler with the color of the clicked input', function() {
    const onChange = jest.fn(),
        component = getMounted({ onChange });

    expect(onChange).not.toHaveBeenCalled();

    component.find('input').filterWhere(input => input.prop('value') === 'green').simulate('change');

    expect(onChange).toHaveBeenCalledWith('green');
  });

  it('does nothing when an input is clicked with no onChange prop', function() {
    const component = getMounted();

    component.find('input').filterWhere(input => input.prop('value') === 'green').simulate('change');

    // shouldn't throw an exception
  });
});
