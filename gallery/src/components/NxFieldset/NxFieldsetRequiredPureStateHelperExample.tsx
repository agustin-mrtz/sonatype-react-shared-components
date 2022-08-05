/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useReducer } from 'react';

import { NxCheckbox, NxFieldset, NxRadio, nxFieldsetStateHelpers } from '@sonatype/react-shared-components';
const { radioGroupInitialState, checkboxGroupInitialState, radioGroupUserInput, checkboxGroupUserInput} =
    nxFieldsetStateHelpers;

interface State {
  color: nxFieldsetStateHelpers.RadioStateProps;
  direction: nxFieldsetStateHelpers.CheckboxStateProps;
}

const requiredMessage = 'At least one color must be selected',
    radioValidator = (v: string | null) => v ? null : requiredMessage,
    checkboxValidator = (selectedDirs: string[]) => selectedDirs.length ? null : requiredMessage;

const initialState = {
  color: radioGroupInitialState(undefined, radioValidator),
  direction: checkboxGroupInitialState(undefined, checkboxValidator)
};

/**
 * Normally these stateHelpers would be used when the state management is done entirely outside of the React
 * component file. For simplicity however this example just uses a simple reducer defined here
 */
function reducer(state: State, { type, payload }: { type: string, payload: string }) {
  switch (type) {
    case 'setColor':
      return { ...state, color: radioGroupUserInput(payload, radioValidator) };
    case 'toggleDirection':
      return { ...state, direction: checkboxGroupUserInput(state.direction, payload, checkboxValidator) };
    default:
      return state;
  }
}

export default function NxFieldsetRequiredPureStateHelperExample() {
  const [{ color, direction }, dispatch] = useReducer(reducer, initialState),
      setColor = (color: string | null) => {
        if (color) {
          dispatch({ type: 'setColor', payload: color });
        }
      },
      toggleDirection = (d: string) => () => { dispatch({ type: 'toggleDirection', payload: d }); };

  return (
    <>
      <NxFieldset label="Color"
                  isRequired
                  isPristine={color.isPristine}
                  validationErrors={color.validationErrors}>
        <NxRadio value="red" isChecked={color.value === 'red'} name="color" onChange={setColor}>Red</NxRadio>
        <NxRadio value="green" isChecked={color.value === 'green'} name="color" onChange={setColor}>Green</NxRadio>
        <NxRadio value="blue" isChecked={color.value === 'blue'} name="color" onChange={setColor}>Blue</NxRadio>
        <NxRadio value="purple" isChecked={color.value === 'purple'} name="color" onChange={setColor}>Purple</NxRadio>
      </NxFieldset>
      <NxFieldset label="Direction"
                  isRequired
                  isPristine={direction.isPristine}
                  validationErrors={direction.validationErrors}>
        <NxCheckbox isChecked={direction.values.includes('north')} onChange={toggleDirection('north')}>
          North
        </NxCheckbox>
        <NxCheckbox isChecked={direction.values.includes('south')} onChange={toggleDirection('south')}>
          South
        </NxCheckbox>
        <NxCheckbox isChecked={direction.values.includes('east')} onChange={toggleDirection('east')}>
          East
        </NxCheckbox>
        <NxCheckbox isChecked={direction.values.includes('west')} onChange={toggleDirection('west')}>
          West
        </NxCheckbox>
      </NxFieldset>
    </>
  );
}
