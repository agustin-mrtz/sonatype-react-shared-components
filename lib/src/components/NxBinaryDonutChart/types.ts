/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { SVGAttributes } from 'react';
import * as PropTypes from 'prop-types';
import { optionalPercentNumber } from '../../util/customPropTypes';

interface BaseProps extends SVGAttributes<SVGSVGElement> {
  innerRadiusPercent?: number | null;
  maxVal?: number | null;
}

interface CurrentProps extends BaseProps {
  value: number;
  percent?: number;
}

interface DeprecatedProps extends BaseProps {
  value?: number | null;
  percent: number;
}

export type Props = CurrentProps | DeprecatedProps;

export const propTypes: PropTypes.ValidationMap<Props> = {
  value: PropTypes.number,
  percent: optionalPercentNumber,
  innerRadiusPercent: optionalPercentNumber,
  maxVal: PropTypes.number
};
