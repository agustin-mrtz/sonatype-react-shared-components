/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import NxTooltip from '../NxTooltip/NxTooltip';

import { ThreatLevelCategory, categoryByPolicyThreatLevel } from '../../util/threatLevels';
import { Props, propTypes } from './types';
export { Props } from './types';

import './NxThreatIndicator.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const NxThreatIndicator: FunctionComponent<Props> =
  function NxThreatIndicator(props): ReactElement<Props> {
    const { title, threatLevelCategory, policyThreatLevel, className: classNameProp } = props,
        category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] :
          'unspecified',

        className = classnames(classNameProp, `nx-threat-indicator nx-threat-indicator--${category}`),
        label = `threat level ${category}`;

    return (
      <NxTooltip title={title || capitalize(category)}>
        {/* This span is just to handle the tooltip. Wrapping NxTooltip directly around NxFontAwesomeIcon causes
            complications due to the way it handles the title prop, involving an autogenerated id and a prop that's
            supposed to allow us to control the id but which appears to be broken
          */}
        <span className={className}>
          <NxFontAwesomeIcon aria-hidden={false} aria-label={label} icon={faCircle} />
        </span>
      </NxTooltip>
    );
  };

NxThreatIndicator.propTypes = propTypes;

export default NxThreatIndicator;
