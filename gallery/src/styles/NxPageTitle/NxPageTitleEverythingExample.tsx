/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxPageTitle,
  NxButtonBar,
  NxTag,
  NxDropdown,
  NxPolicyViolationIndicator,
  useToggle
} from '@sonatype/react-shared-components';

function NxPageTitleEverythingExample() {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return (
    <NxPageTitle>
      <NxPageTitle.Headings>
        <h1 className="nx-h1">
          Longer Page Title Foo Bar Foo!
        </h1>
        <h2 className="nx-h2 nx-page-title__sub-title">
          This is a page sub-title that will truncate with an ellipsis
        </h2>
      </NxPageTitle.Headings>
      <NxButtonBar>
        <NxDropdown label="Example Dropdown" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
          <a href="#" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 1</span>
          </a>
          <a href="#" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 2</span>
          </a>
          <a href="#" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 3</span>
          </a>
          <a href="#" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 4</span>
          </a>
        </NxDropdown>
      </NxButtonBar>
      <NxPageTitle.Description>
        <p className="nx-p">This is a page description.</p>
        <p className="nx-p">
          jeans sign papier-mache assassin San Francisco rifle physical 3D-printed denim tanto courier concrete dolphin
          rebar free-market. tank-traps papier-mache dead free-market tanto drone concrete dolphin sunglasses weathered
          dead jeans office vehicle nodal point. motion film meta- monofilament knife vinyl post- bridge jeans city
          Tokyo alcohol marketing girl vehicle.
        </p>
      </NxPageTitle.Description>
      <NxPageTitle.Tags>
        <NxPolicyViolationIndicator threatLevelCategory="severe">A bunch</NxPolicyViolationIndicator>
        <NxPolicyViolationIndicator threatLevelCategory="critical">Danger Will Robinson!</NxPolicyViolationIndicator>
        <NxTag>Default</NxTag>
        <NxTag color="purple">Purple</NxTag>
        <NxTag color="light-blue">Light Blue</NxTag>
        <NxTag color="pink">Pink</NxTag>
        <NxTag color="blue">Blue</NxTag>
        <NxTag color="red">Red</NxTag>
        <NxTag color="green">Green</NxTag>
        <NxTag color="orange">Orange</NxTag>
        <NxTag color="yellow">Yellow</NxTag>
        <NxTag color="lime">Lime</NxTag>
      </NxPageTitle.Tags>
    </NxPageTitle>
  );
}

export default NxPageTitleEverythingExample;
