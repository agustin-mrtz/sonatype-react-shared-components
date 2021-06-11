/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxCloseButton } from '@sonatype/react-shared-components';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const NxAlertInfoExample = () =>
  <div className="nx-alert nx-alert--info" aria-atomic={true}>
    <NxFontAwesomeIcon icon={faInfoCircle} aria-label="information" aria-hidden={false} />
    <span>Information! I am an informational alert! Be informed!</span>
    <NxCloseButton />
  </div>;

export default NxAlertInfoExample;
