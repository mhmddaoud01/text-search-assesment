import React from 'react';
import type { Article } from '../types';
import { buildQueryRegex, snippetFor } from '../utils/search';
import Highlight from './Highlight';

type Result = {
  article: Article;
  score?: number;
  titleMatches?: number;
  bodyMatches?: number;
};

export default function ArticleList({
  results,
  query
}: {
  results: Result[];
  query: string;
}) {
  const q = query.trim();
  const regex = q ? buildQueryRegex(q) : null;

  if (results.length === 0) {
    return <div className="no-results">No posts found.</div>;
  }

  return (
    <section className="articles">
      {results.map(({ article }) => {
        const snippet = regex ? snippetFor(article.body, regex) : article.body;
        return (
          <article key={article.id} className="card">
            <h2 className="title">
              <Highlight text={article.title} query={q} />
            </h2>
            <div className="meta">{article.date}</div>
            <p className="excerpt">
              <Highlight text={snippet} query={q} />
            </p>
          </article>
        );
      })}
    </section>
  );
}
