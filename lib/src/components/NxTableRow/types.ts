/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import PropTypes from 'prop-types';
import {HTMLAttributes} from 'react';

// Final Props are the HTMLProps & our re-definitions
export type Props = HTMLAttributes<HTMLTableRowElement> & {
  isHeader?: boolean | null;
  isFilterHeader?: boolean | null;
  isClickable?: boolean | null;
  selected?: boolean | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  isHeader: PropTypes.bool,
  isFilterHeader: PropTypes.bool,
  isClickable: PropTypes.bool,
  selected: PropTypes.bool,
  children: PropTypes.node
};
