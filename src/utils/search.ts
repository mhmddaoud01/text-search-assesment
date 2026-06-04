export function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Build a regex that matches any of the query tokens (words or phrase).
 * For phrase queries with quotes, we could preserve phrase logic. For now:
 * - split on whitespace to support multiple words
 * - match any occurrence (global, case-insensitive)
 */
export function buildQueryRegex(query: string): RegExp {
  const tokens = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);
  const pattern = tokens.length ? tokens.join('|') : '';
  return new RegExp(pattern, 'gi');
}

export function countMatches(text: string, regex: RegExp) {
  const copy = new RegExp(regex.source, regex.flags);
  const matches = text.match(copy);
  return matches ? matches.length : 0;
}

/**
 * Generate an excerpt centered on the first match (if any), otherwise start of text.
 */
export function snippetFor(text: string, regex: RegExp, radius = 120) {
  const m = regex.exec(text);
  if (!m) {
    return text.length <= radius * 2 ? text : text.slice(0, radius * 2) + '...';
  }
  const idx = Math.max(0, m.index - radius);
  const end = Math.min(text.length, m.index + m[0].length + radius);
  const prefix = idx > 0 ? '...' : '';
  const suffix = end < text.length ? '...' : '';
  return prefix + text.slice(idx, end) + suffix;
}
