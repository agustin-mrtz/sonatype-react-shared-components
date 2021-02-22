/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { NxAlert, useToggle } from '@sonatype/react-shared-components';

function NxAlertExample() {
  const [isOpen, dismiss] = useToggle(true);

  return isOpen ? (
    <NxAlert icon={faEye}
             iconLabel="Observe"
             id="this-id-ends-up-on-the-div"
             className="nx-alert--modifier"
             onClose={dismiss}>
      This is an example alert message.
      It is expected that users create their own modifier classes to alter the styles of this component.
      This alert has long text content in order to demonstrate text wrapping.
    </NxAlert>
  ) : null;
}

export default NxAlertExample;
