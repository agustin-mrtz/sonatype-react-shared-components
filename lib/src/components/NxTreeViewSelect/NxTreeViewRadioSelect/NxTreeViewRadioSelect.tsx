/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { propEq, find } from 'ramda';

import { Props, propTypes, Option } from './types';
export { Props, Option } from './types';
import NxTreeViewCounter from '../NxTreeViewCounter';
import NxRadio from '../../NxRadio/NxRadio';
import AbstractTreeViewSelect, { generateId } from '../AbstractTreeViewSelect';

const NxTreeViewRadioSelect: FunctionComponent<Props> =
  function NxTreeViewRadioSelect({selectedId, onChange, ...props}) {

    const {name, options} = props,
        disabled = !!props.disabled,
        selectedItem = find(propEq('id', selectedId), options);

    const renderOption = ({id, name: optionName}: Option) => (
      <NxRadio radioId={generateId(name, id)}
               name={name}
               value={id}
               isChecked={id === selectedId}
               onChange={onChange}
               disabled={disabled}>
        {optionName}
      </NxRadio>
    );

    const renderCounter = () =>
      selectedItem && selectedItem.name ? <NxTreeViewCounter>{selectedItem.name}</NxTreeViewCounter> : null;

    return <AbstractTreeViewSelect {...props} renderOption={renderOption} renderCounter={renderCounter}/>;
  };
NxTreeViewRadioSelect.propTypes = propTypes;

export default NxTreeViewRadioSelect;
