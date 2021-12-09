/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent } from 'react';
import { NxFormSelect, nxFormSelectStateHelpers, NxFormGroup } from '@sonatype/react-shared-components';

const NxFormSelectExample = () => {
  const [selectState, setSelectValue] = nxFormSelectStateHelpers.useNxFormSelectState<number>(1);

  const [selectState2, setSelectValue2] = nxFormSelectStateHelpers.useNxFormSelectState<number>(1);

  function onChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectValue(parseInt(evt.currentTarget.value));
  }

  function onChange2(evt: FormEvent<HTMLSelectElement>) {
    setSelectValue2(parseInt(evt.currentTarget.value));
  }

  return (
    <>
      <NxFormGroup label={`Selected Option: ${selectState.value}`} isRequired>
        <NxFormSelect onChange={onChange} { ...selectState } className="nx-form-select--short">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>

      <NxFormGroup label={`Selected Option: ${selectState2.value}`} isRequired>
        <NxFormSelect onChange={onChange2} { ...selectState2 } className="nx-form-select--long">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>
    </>
  );
};

export default NxFormSelectExample;
