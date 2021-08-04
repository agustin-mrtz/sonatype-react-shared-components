/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';
import { none } from 'ramda';
import classnames from 'classnames';

import { NxButton, NxCheckbox, NxTextInput, NxTooltip, hasValidationErrors, NxFormGroup, NxFieldset, useToggle }
  from '@sonatype/react-shared-components';
import { StateProps, Validator } from '@sonatype/react-shared-components/components/NxTextInput/types';
import { initialState, userInput } from '@sonatype/react-shared-components/components/NxTextInput/stateHelpers';

type StatePropsSetter = (state: StateProps) => void;

export default function FormValidationExample() {
  const [textInput1State, setTextInput1State] = useState(initialState('')),
      [textInput2State, setTextInput2State] = useState(initialState('')),
      [textInput3State, setTextInput3State] = useState(initialState('')),
      [checkboxValue, toggleCheckbox] = useToggle(false);

  const stateHasValidationErrors = (state: StateProps) => hasValidationErrors(state.validationErrors),
      isValid = none(stateHasValidationErrors, [textInput1State, textInput2State, textInput3State]),
      hasAllRequiredData = !!(textInput1State.trimmedValue && textInput3State.trimmedValue),
      isSubmittable = isValid && hasAllRequiredData;

  const setTextInput = (setter: StatePropsSetter, validator?: Validator) => (value: string) => {
    setter(userInput(validator, value));
  };

  const nonEmptyValidator = (val: string) => val && val.length ? null : 'Must be non-empty',
      noDollarSignsValidator = (val: string) => val && val.indexOf('$') >= 0 ? 'Must not contain dollar signs' : null,
      combinedValidator = (val: string) => nonEmptyValidator(val) || noDollarSignsValidator(val);

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (isSubmittable) {
      // in real code this is where the form submission would be implemented
      alert('Form submitted');
    }
    else {
      evt.stopPropagation();
    }
  }

  const submitBtnClasses = classnames({ disabled: !isSubmittable }),
      submitTooltip = isSubmittable ? '' :
      hasAllRequiredData ? 'Validation errors are present' :
      'Required fields are missing';

  return (
    <form className="nx-form" onSubmit={onSubmit}>
      <NxFormGroup label="Text input 1" isRequired>
        <NxTextInput { ...textInput1State }
                     validatable={true}
                     onChange={setTextInput(setTextInput1State, nonEmptyValidator)}/>
      </NxFormGroup>
      <NxFormGroup label="Text input 2">
        <NxTextInput { ...textInput2State } onChange={setTextInput(setTextInput2State)}/>
      </NxFormGroup>
      <NxFormGroup label="Text input 3" isRequired>
        <NxTextInput { ...textInput3State }
                     validatable={true}
                     onChange={setTextInput(setTextInput3State, combinedValidator)}/>
      </NxFormGroup>

      <NxFieldset label="Check this box?">
        <NxCheckbox isChecked={checkboxValue} onChange={toggleCheckbox}>Check It</NxCheckbox>
      </NxFieldset>

      <footer className="nx-form-footer">
        <div className="nx-btn-bar">
          <NxTooltip title={submitTooltip}>
            <NxButton className={submitBtnClasses} variant="primary" type="submit">Submit</NxButton>
          </NxTooltip>
        </div>
      </footer>
    </form>
  );
}
