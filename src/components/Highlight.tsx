import React from 'react';
import { escapeRegExp } from '../utils/search';

/**
 * Render text with <mark> around matched query tokens.
 * Safe (no dangerouslySetInnerHTML) — we split and render nodes.
 */
export default function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;

  const tokens = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);

  if (tokens.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${tokens.join('|')})`, 'ig');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="highlight">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
