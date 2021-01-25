/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './NxTag.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxTag: FunctionComponent<Props> =
    function NxTag(props) {
      const { children, className, color, ...attrs } = props,
          tagClasses = classnames('nx-tag', className, {
            [`nx-tag--${color}`]: color,
            ['nx-tag--default']: !color
          });

      return (
        <NxOverflowTooltip>
          <div className={tagClasses} {...attrs}>
            {children}
          </div>
        </NxOverflowTooltip>
      );
    };

NxTag.propTypes = propTypes;
export default NxTag;

export const NxSelectableTag: FunctionComponent<Props> =
    function NxSelectableTag(props) {
      const { children, className, color, selected, onSelect, ...attrs } = props,
          isSelected = selected,
          tagClasses = classnames('nx-tag nx-tag--selectable', className, {
            'nx-tag--selected': isSelected,
            'nx-tag--unselected': !isSelected,
            [`nx-tag--${color}`]: color,
            ['nx-tag--default']: !color
          });

      return (
        <NxOverflowTooltip>
          <div tabIndex={0}
               role="switch"
               aria-checked={selected}
               className={tagClasses}
               onClick={onSelect || undefined}
               {...attrs}>
            <span className="nx-tag__text">{children}</span>
            <NxFontAwesomeIcon icon={faPlusCircle} className="nx-tag__action" />
          </div>
        </NxOverflowTooltip>
      );
    };

NxSelectableTag.propTypes = propTypes;
