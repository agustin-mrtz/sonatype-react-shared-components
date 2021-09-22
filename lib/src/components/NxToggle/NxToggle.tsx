/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import './NxToggle.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxToggle = forwardRef<HTMLLabelElement, Props>(
    function NxToggle(props, ref) {
      const {
        className,
        onChange,
        isChecked,
        disabled,
        inputId,
        children,
        checkboxAttributes,
        ...otherProps
      } = props;

      const labelClasses = classnames('nx-toggle', className, {
        'nx-toggle--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      });

      const {
        className: checkboxClassName,
        ...otherCheckboxProps
      } = checkboxAttributes;

      return (
        <label { ...otherProps } ref={ref} className={labelClasses}>
          <input type="checkbox"
                 id={inputId || undefined}
                 className={classnames('nx-toggle__input', checkboxClassName)}
                 disabled={!!disabled}
                 checked={isChecked}
                 readOnly={!onChange}
                 onChange={onChange || undefined}
                 { ...otherCheckboxProps } />
          <div className="nx-toggle__control"><div className="nx-toggle__indicator"/></div>
          { children && <span className="nx-toggle__content">{children}</span> }
        </label>
      );
    }
);

NxToggle.propTypes = propTypes;

NxToggle.defaultProps = {
  checkboxAttributes: {}
};

export default NxToggle;
