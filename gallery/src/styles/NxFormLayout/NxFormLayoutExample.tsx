/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';

import {
  NxCheckbox,
  NxRadio,
  NxStatefulTextInput,
  NxButton,
  NxFontAwesomeIcon,
  NxToggle,
  NxFormGroup,
  NxFieldset,
  useToggle,
  NxColorPicker,
  SelectableColor,
  NxInfoAlert,
  NxFormSelect,
  nxFormSelectStateHelpers,
  NxTransferList,
  NxForm,
  NxTile
} from '@sonatype/react-shared-components';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { map, range } from 'ramda';

const transferListItems = map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101));

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>('');

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false);

  const [color, setColor] = useState<string | null>(null);

  const [isWarpOn, toggleWarp] = useToggle(false),
      [isKrakenOut, toggleKraken] = useToggle(false),
      [isShapes, toggleShapes] = useToggle(false);

  const [tagColor, setTagColor] = useState<SelectableColor | null>(null);

  const [selectedTransferItems, setSelectedTransferItems] = useState<Set<number>>(new Set()),
      [availableTransferItemsFilter, setAvailableTransferItemsFilter] = useState(''),
      [selectedTransferItemsFilter, setSelectedTransferItemsFilter] = useState('');

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    alert('Submitted!');
  }

  const hostnameSublabel = (
    <>
      <NxFontAwesomeIcon icon={faCalendar}/>
      <span id="long-field-sublabel">The field element below is wider than the default.</span>
    </>
  );

  return (
    <form className="nx-form" onSubmit={onSubmit} aria-label="Default Form Layout Example">
      <NxTile.HeaderSubtitle>
        <NxForm.RequiredFieldNotice />
      </NxTile.HeaderSubtitle>
      <NxInfoAlert>This is a sample alert message</NxInfoAlert>
      <NxFormGroup label="A Field to Fill in" isRequired>
        <NxStatefulTextInput aria-required={true} validator={validator}/>
      </NxFormGroup>
      <NxFormGroup label="Username">
        <NxStatefulTextInput />
      </NxFormGroup>
      <NxFormGroup label="Hostname" sublabel={hostnameSublabel}>
        <NxStatefulTextInput className="nx-text-input--long"/>
      </NxFormGroup>
      <NxFieldset label="Colors" isRequired>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Primary Color" sublabel="Pick a single color">
        <NxRadio name="color"
                 value="red"
                 onChange={setColor}
                 isChecked={color === 'red'}>
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setColor}
                 isChecked={color === 'purple'}>
          Purple
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'}>
          Green
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'}>
          Blue
        </NxRadio>
      </NxFieldset>
      <NxFormGroup label="Select" isRequired>
        <NxFormSelect { ...selectState } onChange={onSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>
      <NxFieldset label="Enable features - this text is extra long to demonstrate wrapping, how much wood would
                         a woodchuck chuck"
                  isRequired>
        <div className="nx-sub-label">
          In a form layout toggles are laid out in a <code className="nx-code">&lt;fieldset&gt;</code> - this text is
          extra long to demonstrate wrapping, how much wood would a woodchuck chuck
        </div>
        <NxToggle inputId="subscribe-check" onChange={toggleWarp} isChecked={isWarpOn}>
          Enable Warp Drive
        </NxToggle>
        <NxToggle inputId="no-label-check" onChange={toggleKraken} isChecked={isKrakenOut}>
          Release the Kraken!
        </NxToggle>
        <NxToggle inputId="children-check" onChange={toggleShapes} isChecked={isShapes}>
          Allow shapes
        </NxToggle>
      </NxFieldset>
      <NxFormGroup label="Comments" isRequired>
        <NxStatefulTextInput type="textarea" placeholder="placeholder" aria-required={true}/>
      </NxFormGroup>
      <NxColorPicker label="Tag Color" isRequired value={tagColor} onChange={setTagColor} />
      <NxFieldset label="Numbered Items">
        <NxTransferList allItems={transferListItems}
                        selectedItems={selectedTransferItems}
                        availableItemsFilter={availableTransferItemsFilter}
                        selectedItemsFilter={selectedTransferItemsFilter}
                        onAvailableItemsFilterChange={setAvailableTransferItemsFilter}
                        onSelectedItemsFilterChange={setSelectedTransferItemsFilter}
                        onChange={setSelectedTransferItems} />
      </NxFieldset>
      <dl className="nx-read-only">
        <dt className="nx-read-only__label">
          This is a read only label that that describes the data that will appear below
        </dt>
        <dd className="nx-read-only__data">
          Data - found security vulnerability CVE-2020-6230 with severity &lt; 10 (severity = 7.2)
        </dd>
        <dd className="nx-read-only__data">
          Found security vulnerability CVE-2020-6230 with severity &gt;= 7 (severity = 7.2)
        </dd>
        <dd className="nx-read-only__data">
          Found security vulnerability CVE-2020-6230 with status 'Open', not 'Not Applicable'
        </dd>
        <dd className="nx-read-only__data">
          Component does not contain proprietary packages
        </dd>
      </dl>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton type="button">Cancel</NxButton>
          <NxButton variant="primary" type="submit">Submit</NxButton>
        </div>
      </footer>
    </form>
  );
}
