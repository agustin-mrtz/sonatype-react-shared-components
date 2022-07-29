/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxPopOver, NxButton, NxP } from '@sonatype/react-shared-components';

export default function NxPopOverExample() {
  const [showPopOver, setShowPopOver] = useState(false);
  const popOverCloseHandler = () => setShowPopOver(false);

  return (
    <div className="gallery-pop-over-example">
      <NxButton onClick={() => setShowPopOver(true)}>Open Pop Over</NxButton>
      {showPopOver && (
        <NxPopOver onCancel={popOverCloseHandler}
                   headerTitle="Example Pop Over Duis aute irure dolor in reprehenderit in voluptate velit esse{' '}
        cillum dolore eu fugiat nulla pariatur.">
          <NxPopOver.Content>
            <NxP>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
              dolore eu fugiat nulla pariatur.
            </NxP>
            <NxP>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
              dolore eu fugiat nulla pariatur.
            </NxP>
            <NxP>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
              dolore eu fugiat nulla pariatur.
            </NxP>
            <NxP>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
              dolore eu fugiat nulla pariatur.
            </NxP>
            <NxButton>Click</NxButton>
          </NxPopOver.Content>
          <NxPopOver.Footer>
            <NxP>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </NxP>
          </NxPopOver.Footer>
        </NxPopOver>
      )}
    </div>
  );
}
