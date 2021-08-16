/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton, NxButtonBar } from '@sonatype/react-shared-components';

const NxButtonDefaultExample = () =>
  <>
    <div>
      Some preceding content.  nx-btn-bar ensures that the buttons are spaced appropriately from
      adjacent block elements such as this
    </div>
    <NxButtonBar>
      <NxButton>Button</NxButton>
      <span>Some other inline content.</span>
      <NxButton className="disabled">Disabled by class</NxButton>
      <NxButton disabled>Disabled by attribute</NxButton>
    </NxButtonBar>
  </>;

export default NxButtonDefaultExample;
