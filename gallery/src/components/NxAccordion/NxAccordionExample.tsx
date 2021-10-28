/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxAccordion, useToggle } from '@sonatype/react-shared-components';

export default function NxAccordionExample() {
  const [open, toggleOpen] = useToggle(false);

  return (
    <NxAccordion open={open} onToggle={toggleOpen}>
      <NxAccordion.Header>
        <NxAccordion.Title>Foo</NxAccordion.Title>
      </NxAccordion.Header>
      <p>Foo Bar Baz</p>
    </NxAccordion>
  );
}
