/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';
import { PublicProps as NxTextInputProps, propTypes as nxTextInputPropTypes } from '../NxTextInput/NxTextInput';

export interface Props extends Omit<NxTextInputProps, 'validatable' | 'isPristine' | 'validationErrors' | 'type'> {
  searchIcon?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...omit(['validatable', 'isPristine', 'validationErrors', 'type'], nxTextInputPropTypes),
  searchIcon: PropTypes.bool
};
