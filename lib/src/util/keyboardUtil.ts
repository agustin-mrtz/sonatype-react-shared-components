/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const MODIFIER_KEYS = ['Alt', 'AltGraph', 'Control', 'Meta', 'OS', 'Shift'];

export function modifierKeyIsPressed(event: React.KeyboardEvent | KeyboardEvent) {
  return MODIFIER_KEYS.some((key) => event.getModifierState(key));
}
