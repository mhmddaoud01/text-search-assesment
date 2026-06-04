import React, { useEffect, useState } from 'react';

type Props = {
  query: string;
  setQuery: (q: string) => void;
};

export default function SearchBar({ query, setQuery }: Props) {
  const [local, setLocal] = useState(query);

  useEffect(() => {
    setLocal(query);
  }, [query]);

  // debounce
  useEffect(() => {
    const t = setTimeout(() => setQuery(local), 300);
    return () => clearTimeout(t);
  }, [local, setQuery]);

  return (
    <div className="searchbar">
      <label htmlFor="search-input" className="sr-only">
        Search articles
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Search"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        autoComplete="off"
        aria-label="Search articles"
      />
      <div className="controls">
        <button
          onClick={() => {
            setLocal('');
            setQuery('');
          }}
          aria-label="Clear search"
          title="Clear"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
