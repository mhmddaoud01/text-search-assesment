# Text Search — Take‑Home Project

This is my implementation of the "Text Search" take‑home assignment, built with React, TypeScript and Vite.

Overview
- A client-only single-page app that searches an in-memory list of articles.
- Matches are highlighted in the title and excerpt and results are sorted by simple relevance.

Features
- Case-insensitive search across article title & body
- Highlighting of matched terms in title and excerpt
- Relevance sorting (title matches weighted higher)
- Debounced search input with clear button
- Unit tests for core search logic

Getting started (what I ran locally)
1. Install dependencies

   npm install

2. Start the dev server

   npm run dev

   The app runs on http://localhost:5173 by default.

3. Run tests

   npm run test

Build

- Build for production: `npm run build`
- Preview production build locally: `npm run preview`

Design notes
- Articles are stored in `src/data/articles.ts` as an array of article objects (no backend required).
- Highlighting is implemented safely by splitting text and wrapping matches in `<mark>` elements (no dangerous HTML insertion).
- Search logic (tokenization, regex-building, match counting, and snippet generation) lives in `src/utils/search.ts` and is covered by unit tests in `src/__tests__/`.

Notes
- This project is intentionally lightweight and focused on demonstrating a clear, testable search and highlight implementation.
- If you want improvements, I can add more articles, refine the matching (phrase-exact or fuzzy matching), or add a deployed demo.

--
Implemented by mhmddaoud01
