import React, { useMemo, useState } from 'react';
import { ARTICLES } from './data/articles';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import type { Article } from './types';
import { buildQueryRegex, countMatches } from './utils/search';

const DEFAULT_QUERY = '';

export default function App() {
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return ARTICLES.map((a) => ({ article: a, score: 0 }));

    const regex = buildQueryRegex(q);
    return ARTICLES
      .map((article) => {
        const titleMatches = countMatches(article.title, regex);
        const bodyMatches = countMatches(article.body, regex);
        const score = titleMatches * 3 + bodyMatches * 1;
        return { article, score, titleMatches, bodyMatches };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query]);

  return (
    <div className="container">
      <header>
        <h1>Text Search</h1>
        <p className="instructions">
          Type a keyword or phrase and press Enter (or wait). Matches in title
          and excerpt will be highlighted.
        </p>
      </header>

      <SearchBar query={query} setQuery={setQuery} />

      <main>
        <div className="results-count">
          {results.length} posts were found.
        </div>

        <ArticleList results={results} query={query} />
      </main>

      <footer>
        <small>Client-only demo — articles are stored in-memory.</small>
      </footer>
    </div>
  );
}
