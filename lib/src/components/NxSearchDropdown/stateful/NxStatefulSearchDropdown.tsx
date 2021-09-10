/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Ref, useState } from 'react';
import NxSearchDropdown from '../NxSearchDropdown';

import forwardRef from '../../../util/genericForwardRef';
import { StatefulProps as Props, statefulPropTypes as propTypes } from '../types';

function NxStatefulSearchDropdownRender<T extends string | number = string>(
  { defaultSearchText, ...otherProps }: Props<T>,
  ref: Ref<HTMLDivElement>
) {
  const [searchText, setSearchText] = useState(defaultSearchText || '');

  return <NxSearchDropdown { ...{ ref, searchText, ...otherProps } } onSearchTextChange={setSearchText} />;
}

const NxStatefulSearchDropdown = Object.assign(forwardRef(NxStatefulSearchDropdownRender), { propTypes });

export default NxStatefulSearchDropdown;
export { Props };
