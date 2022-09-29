/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';

import {
  NxButton,
  NxModal,
  NxFormGroup,
  NxToggle,
  NxFieldset,
  NxRadio,
  NxTooltip,
  NxFontAwesomeIcon,
  NxCode
} from '@sonatype/react-shared-components';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { themingEnabled, themeOverride, setThemingEnabled, setThemeOverride } from '../themeClassManager';

type Props = {
  modalCloseHandler: () => void;
};

const DarkModeModal = ({ modalCloseHandler }: Props) => {

  const [themingEnabledState, setThemingEnabledState] = useState(themingEnabled),
      [themeOverrideState, setThemeOverrideState] = useState(themeOverride);

  useEffect(function() {
    setThemingEnabled(themingEnabledState);
  }, [themingEnabledState]);

  useEffect(function() {
    setThemeOverride(themeOverrideState);
  }, [themeOverrideState]);

  return (
    <NxModal id="nx-modal-dark-mode-example"
             onCancel={modalCloseHandler}
             aria-labelledby="nx-modal-dark-mode-header">
      <header className="nx-modal-header">
        <h2 className="nx-h2" id="nx-modal-dark-mode-header">
          Setting Preferences for Light or Dark Mode
        </h2>
      </header>
      <div className="nx-modal-content">
        <NxFormGroup label="Enable Theme Changes">
          <NxToggle onChange={()=> setThemingEnabledState(!themingEnabledState)} isChecked={themingEnabledState}>
            Opt-in to Allow Theming
            <NxTooltip title={
              <>Opting in will allow you to make adjustments to the display theme. Failure
                to do so will always result in light mode. This operates by toggling the presence of
                the <NxCode>nx-html--enable-color-schemes</NxCode> class.
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxToggle>
        </NxFormGroup>
        <NxFieldset label="Choose Your Mode">
          <NxRadio name="mode"
                   value="browserChoice"
                   onChange={() => setThemeOverrideState(null)}
                   isChecked={themeOverrideState === null}
                   disabled={!themingEnabledState}>
            <span>Let Your Browser Color Preference Decide</span>
            <NxTooltip title={
              <>The default theme will be dictated by your browser or OS theme choice, which is
                communicated to the application via the <NxCode>prefers-color-scheme</NxCode> media query
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxRadio>
          <NxRadio name="mode"
                   value="dark"
                   onChange={() => setThemeOverrideState('dark')}
                   isChecked={themeOverrideState === 'dark'}
                   disabled={!themingEnabledState}>
            <span>Dark Mode</span>
            <NxTooltip title={
              <>Overrides the browser's default display theme to dark mode by adding the class
                {' '}<NxCode>nx-html--dark-mode</NxCode> to the HTML element.
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxRadio>
          <NxRadio name="mode"
                   value="light"
                   onChange={() => setThemeOverrideState('light')}
                   isChecked={themeOverrideState === 'light'}
                   disabled={!themingEnabledState}>
            <span>Light Mode</span>
            <NxTooltip title={
              <>Overrides the browser's default display theme to dark mode by adding the class
                {' '}<NxCode>nx-html--light-mode</NxCode> to the HTML element.
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxRadio>
        </NxFieldset>
      </div>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton onClick={modalCloseHandler}>Close</NxButton>
        </div>
      </footer>
    </NxModal>
  );
};

export default DarkModeModal;
