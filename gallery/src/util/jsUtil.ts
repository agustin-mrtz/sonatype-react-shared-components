/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

/**
 * If an array is passed in, returns an equivalent array.
 * If a value that is not an array is passed in, returns an array containing only that value
 */
export function ensureArray<T>(items: T | T[]): T[] {
  return Array.isArray(items) ? items : [items];
}

// Quick and dirty removal of any comment appearing at the beginning of the content, as it is assumed to be
// a license which is not helpful to the example display. Both HTML-syntax and C-syntax comments are removed
export const removeLicense = (content: string) =>
  content
      .replace(/^<!--(.|\n)*?-->\s*\n?/, '')
      .replace(/^\/\*(.|\n)*?\*\/\s*\n?/, '');

// Copies a string to the clipboard.
export const copyTextToClipboard = (textToCopy: string) => {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    navigator.clipboard.writeText(textToCopy);
  }
  else {
    // text area method
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    // make the textarea not visible
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};
