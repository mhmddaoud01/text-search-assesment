# Text Search — Take‑Home Project

A compact, client-only React + TypeScript application that implements a text search over an in-memory list of articles. Matches are highlighted and results are ordered by simple relevance.

Tech
- React, TypeScript, Vite

Key features
- Case-insensitive search across title and body
- All matches highlighted in title and excerpt
- Relevance sorting (title matches weighted higher)
- Debounced search input and clear control
- Unit tests for core search utilities

Run locally
1. Install dependencies

   npm install

2. Start dev server

   npm run dev

   Open http://localhost:5173

Tests

- Run unit tests: `npm run test`

Build
- Build: `npm run build`
- Preview build locally: `npm run preview`

Implementation notes
- Articles are stored in `src/data/articles.ts`.
- Search and highlighting logic is implemented in `src/utils/search.ts` and `src/components/Highlight.tsx`.

Implemented by mhmddaoud01
