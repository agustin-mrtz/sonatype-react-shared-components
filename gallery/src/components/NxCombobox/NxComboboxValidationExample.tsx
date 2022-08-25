/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { NxCombobox, DataItem }
  from '@sonatype/react-shared-components';

const states:string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'Washington DC', 'West Virginia', 'Wisconsin', 'Wyoming'];

const items = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: states[i - 1] }), range(1, states.length + 1)));

function search(query: string):DataItem<number, string>[] {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);
  return matchingItems;
}

function validator(val: string) {
  return val.length ? null : 'Must be non-empty';
}

export default function NxComboboxRequiredExample() {
  const [matches, setMatches] = useState<DataItem<number, string>[]>(items),
      [query, setQuery] = useState(''),
      [error, setError] = useState<string | null>(null),
      [isPristine, setIsPristine] = useState(true);

  const executeQuery = useCallback(function executeQuery(query: string) {
    setMatches(search(query));
  }, [query]);

  function onChange(query: string) {
    setQuery(query);
    setIsPristine(false);
    if (validator(query)) {
      setError(validator(query));
    }
    else {
      setError(null);
    }
  }

  function onSearch(query: string) {
    query ? executeQuery(query) : setMatches([]);
  }

  return (
    <NxCombobox className="nx-combobox--short"
                isPristine={isPristine}
                validatable={true}
                validationErrors={error}
                matches={matches}
                value={query}
                onChange={onChange}
                onSearch={onSearch}
                aria-label="combobox" />
  );
}
