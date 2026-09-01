/**
 * Safely encodes a string for use in URI query parameters (e.g. WhatsApp, URLs).
 * Prevents "URIError: URI malformed" by sanitizing lone Unicode surrogates,
 * broken surrogate pairs from string slicing, and malformed characters.
 */
export function safeEncodeURIComponent(str: string | undefined | null): string {
  if (str === undefined || str === null) return '';
  const text = String(str);
  try {
    // Modern JS engines: toWellFormed() replaces lone surrogates with U+FFFD
    const wellFormed = typeof (text as any).toWellFormed === 'function'
      ? (text as any).toWellFormed()
      : sanitizeLoneSurrogates(text);
    return encodeURIComponent(wellFormed);
  } catch {
    try {
      const sanitized = sanitizeLoneSurrogates(text);
      return encodeURIComponent(sanitized);
    } catch {
      return '';
    }
  }
}

/**
 * Strips lone high/low UTF-16 surrogates that cause encodeURIComponent to crash
 */
export function sanitizeLoneSurrogates(str: string): string {
  if (!str) return '';
  return str.replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, '$1');
}

/**
 * Unicode-aware string truncation that never cuts an emoji or surrogate pair in half
 */
export function safeTruncate(str: string, maxLength: number): string {
  if (!str) return '';
  const chars = Array.from(str);
  if (chars.length <= maxLength) return str;
  return chars.slice(0, Math.max(0, maxLength - 3)).join('') + '...';
}
