/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import NxToastContainerContext from './contexts';

import { NxToastContainerProps, nxToastContainerPropTypes } from './types';

export { Props } from './types';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { children } = props;

  const ref = useRef<HTMLDivElement | null>(null),
      prevSelectedRef = useRef<HTMLElement | null>(null);

  const body = document.body;

  const onToastClosing = () => {
    //When closing Toasts with a mouse click, document.activeElement becomes nx-body, so need
    //to specify not to assign selectedRef to body so the focus returns to the appropriate element
    if (!ref.current?.contains(document.activeElement) && document.activeElement !== body) {
      prevSelectedRef.current = document.activeElement;
    }

    if (ref.current) {
      const closeBtns = ref.current.querySelectorAll<HTMLButtonElement>('.nx-toast .nx-btn--close');
      const lastCloseBtn = closeBtns[closeBtns.length - 1];
      if (lastCloseBtn) {
        (lastCloseBtn as HTMLElement).focus();
      }
      else if (prevSelectedRef) {
        (prevSelectedRef.current as HTMLElement).focus();
      }
    }
  };

  return (
    <NxToastContainerContext.Provider value={{onToastClosing}}>
      <div className="nx-toast__wrapper" ref={ref}>
        <div className="nx-toast__container">
          {children}
        </div>
      </div>
    </NxToastContainerContext.Provider>
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;

export default NxToastContainer;
