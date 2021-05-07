/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap, HTMLAttributes, AnchorHTMLAttributes, Validator, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Props {
  isOpen: boolean;
  className?: string | null;
  toggleOpenIcon: IconDefinition;
  toggleCloseIcon: IconDefinition;
  onToggleClick: (() => void);
  logoImg: string;
  logoAltText: string;
  logoLink: string;
  children?: ReactNode | null;
}

export const propTypes: ValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  toggleOpenIcon: PropTypes.object.isRequired as Validator<IconDefinition>,
  toggleCloseIcon: PropTypes.object.isRequired as Validator<IconDefinition>,
  onToggleClick: PropTypes.func.isRequired,
  logoImg: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired,
  children: PropTypes.node
};

export type NxGlobalSidebarNavigationProps = HTMLAttributes<HTMLDivElement>;

// Casting to hack around flaws in react's typings: the typings for HTMLAttributes.className don't claim to accept null,
// but non-required proptypes do, and the actual implementation does
export const nxGlobalSidebarNavigationPropTypes = {
  className: PropTypes.string
} as ValidationMap<NxGlobalSidebarNavigationProps>;

export interface NxGlobalSidebarNavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isSelected?: boolean | null;
  icon: IconDefinition;
  text: string;
  href: string;
}

export const nxGlobalSidebarNavigationLinkPropTypes: ValidationMap<NxGlobalSidebarNavigationLinkProps> = {
  isSelected: PropTypes.bool,
  icon: PropTypes.object.isRequired as Validator<IconDefinition>,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export interface NxGlobalSidebarFooterProps {
  showSupport: boolean;
  supportIcon?: IconDefinition;
  supportText?: string | null;
  supportLink?: string | null;
  releaseText?: string | null;
  productText?: string | null;
  showSonatype: boolean;
  sonatypeText?: string | null;
  children?: ReactNode | null;
  className?: string | null;
}

export const nxGlobalSidebarFooterPropTypes: ValidationMap<NxGlobalSidebarFooterProps> = {
  showSupport: PropTypes.bool.isRequired,
  supportIcon: PropTypes.object as Validator<IconDefinition>,
  supportText: PropTypes.string,
  supportLink: PropTypes.string,
  releaseText: PropTypes.string,
  productText: PropTypes.string,
  showSonatype: PropTypes.bool.isRequired,
  sonatypeText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};
