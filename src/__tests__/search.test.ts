import { describe, it, expect } from 'vitest';
import { buildQueryRegex, countMatches, snippetFor } from '../utils/search';

describe('search utils', () => {
  it('builds a regex for multiple tokens', () => {
    const r = buildQueryRegex('grid layout');
    expect(r.source).toContain('grid');
    expect(r.source).toContain('layout');
    expect(r.flags).toContain('i');
  });

  it('counts matches correctly', () => {
    const r = buildQueryRegex('grid');
    expect(countMatches('grid grid GRID', r)).toBe(3);
    expect(countMatches('no match here', r)).toBe(0);
  });

  it('creates snippet around first match', () => {
    const text = 'start a lot of words then grid match somewhere in the middle and then many words';
    const r = buildQueryRegex('grid');
    const s = snippetFor(text, r, 10);
    expect(s).toContain('grid');
    expect(s.length).toBeLessThan(text.length);
  });
});
