/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject, ReactNode, HTMLAttributes, ReactElement, WeakValidationMap, KeyboardEventHandler} from 'react';
import * as PropTypes from 'prop-types';

import { NX_BUTTON_VARIANTS, NX_BUTTON_VARIANT_TYPE } from '../NxButton/types';
import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';

export interface AbstractDropdownRenderToggleElementProps {
  onToggleCollapse: (() => void);
  toggleRef: RefObject<HTMLButtonElement>;
}

export type AbstractDropdownRenderToggleElement = (props: AbstractDropdownRenderToggleElementProps) => ReactNode;

export type AbstractDropdownProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  className?: string;
  isOpen: boolean;
  disabled?: boolean | null;
  renderToggleElement: AbstractDropdownRenderToggleElement;
  children?: ReactElement | ReactElement[] | null;
  onToggleCollapse?: (() => void) | null;
  onCloseKeyDown?: KeyboardEventHandler | null;
  onCloseClick?: ((e: MouseEvent) => void) | null;
};

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  label: ReactNode | string;
  isOpen: boolean;
  variant?: NX_BUTTON_VARIANT_TYPE | null;
  className?: string | null;
  children?: ReactElement | ReactElement[] | null;
  disabled?: boolean | null;
  onToggleCollapse?: (() => void) | null;
  onCloseKeyDown?: KeyboardEventHandler | null;
  onCloseClick?: ((e: MouseEvent) => void) | null;
  toggleTooltip?: TooltipConfigProps | string | null;
};

export const propTypes: WeakValidationMap<Props> = {
  label: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.string.isRequired
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(NX_BUTTON_VARIANTS),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    PropTypes.element.isRequired
  ]),
  disabled: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
  onCloseKeyDown: PropTypes.func,
  onCloseClick: PropTypes.func,
  toggleTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string])
};
