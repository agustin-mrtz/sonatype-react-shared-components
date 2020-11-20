/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxListClickableExample = () =>
  <ul className="nx-list nx-list--clickable" role="list">
    <li className="nx-list__item" tabIndex={0}>
      <span className="nx-list__text">Action 1</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item" tabIndex={0}>
      <span className="nx-list__text nx-truncate-ellipsis">
        This list item should be truncated at the right end edge. youtube weathered network network systemic
        systema claymore mine voodoo god garage monofilament realism order-flow corporation car footage vinyl.
      </span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item selected" tabIndex={0}>
      <span className="nx-list__text" aria-selected="true">This list item is selected</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item" tabIndex={0}>
      <span className="nx-list__text">Action 4</span>
      <span className="nx-list__subtext">
        This is a fourth line. It includes text that might relate to the top line or might not.
      </span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item disabled" aria-disabled="true">
      <span className="nx-list__text">This list item is disabled</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
  </ul>;

export default NxListClickableExample;
