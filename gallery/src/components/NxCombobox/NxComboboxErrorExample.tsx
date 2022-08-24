/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import { NxCombobox, DataItem, NX_SEARCH_DROPDOWN_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';

export default function NxComboboxErrorExample() {
  const [loading, setLoading] = useState(false),
      [query, setQuery] = useState(''),
      [error, setError] = useState<string | null>(null);

  function onSelect({ displayName }: DataItem<number>) {
    alert('Selected ' + displayName);
  }

  const executeQuery = useDebounceCallback(useCallback(function executeQuery(query: string) {
    setError(`Error executing query ${query}`);
    setLoading(false);
  }, [query]), NX_SEARCH_DROPDOWN_DEBOUNCE_TIME);

  function onChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    setError(null);

    if (query !== '') {
      setLoading(true);
      executeQuery(query);
    }
  }

  return (
    <NxCombobox matches={[]}
                loading={loading}
                loadError={error}
                value={query}
                onChange={onChange}
                onSearch={onSearch}
                onSelect={onSelect}
                aria-label="combobox" />
  );
}
