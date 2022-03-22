/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import React, { forwardRef } from 'react';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';

import './NxProgressBar.scss';

const NxProgressBar = forwardRef<HTMLProgressElement, Props>(
    function NxProgressBar(props, ref) {
      const {
        hasError,
        inlineCounter,
        label,
        labelError,
        labelSuccess,
        max: maxProp,
        showCounter: showCounterProp,
        value,
        variant
      } = props;

      const showCounter = showCounterProp ?? true;
      const max = maxProp ?? 100;
      const percentage = Math.round(value / max * 100);

      const renderCounter = () => {
        if (!showCounter || variant === 'inline') {
          return null;
        }

        return <span className="nx-counter nx-progress-bar__counter">{`${hasError ? 0 : percentage}%`}</span>;
      };

      const renderLabel = () => {
        if (variant === 'small') {
          return null;
        }

        if (hasError) {
          return labelError ? (
            <>
              <NxFontAwesomeIcon icon={faExclamationCircle} />
              <span className="nx-progress-bar__label-text">{labelError}</span>
            </>
          ) : null;
        }

        if (percentage === 100 && (labelSuccess || label)) {
          return (
            <>
              <NxFontAwesomeIcon icon={faCheckCircle} />
              <span className="nx-progress-bar__label-text">{labelSuccess || label}</span>
            </>
          );
        }

        return <span className="nx-progress-bar__label-text">{label}</span>;
      };

      const renderCounterAndLabel = () => {
        if (variant === 'inline') {
          return null;
        }

        return (
          <span className="nx-progress-bar__counter-and-label">
            {renderCounter()}
            {inlineCounter ? null : renderLabel()}
          </span>
        );
      };

      const classes = classnames('nx-progress-bar', {
        'nx-progress-bar--inline': variant === 'inline',
        'nx-progress-bar--small': variant === 'small',
        'nx-progress-bar--full': variant === 'full',
        'nx-progress-bar--inline-counter': inlineCounter,
        'nx-progress-bar--error': hasError,
        'nx-progress-bar--success': percentage === 100
      });

      return (
        <label className={classes}>
          <progress ref={ref}
                    className="nx-progress-bar__progress"
                    value={hasError ? 0 : value}
                    max={max}>
          </progress>
          {renderCounterAndLabel()}
        </label>
      );
    }
);

NxProgressBar.propTypes = propTypes;

export default NxProgressBar;
