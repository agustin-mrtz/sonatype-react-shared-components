/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { NxDropdownIconOnly, useToggle } from '@sonatype/react-shared-components';

function NxDropdownIconOnlyNavigationExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      onClick = () => { alert('click'); };

  return (
    <NxDropdownIconOnly label="Navigation" isOpen={isOpen} onToggleCollapse={onToggleCollapse} icon={faEllipsisV}>
      <a onClick={onClick} href="#/pages/NxDropdown" className="nx-dropdown-button">
        Text link 1
      </a>
      <a onClick={onClick} href="#/pages/NxDropdown" className="nx-dropdown-button">
        Text link 2
      </a>
      <a onClick={onClick} href="#/pages/NxDropdown" className="nx-dropdown-button">
        Text link 3 - this link should trigger truncation
      </a>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 4 - this link should trigger truncation
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 5
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 6
      </button>
      <button className="disabled nx-dropdown-button">
        Button Link 7 Disabled
      </button>
    </NxDropdownIconOnly>
  );
}

export default NxDropdownIconOnlyNavigationExample;
