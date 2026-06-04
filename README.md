# Text Search — Take‑Home Project

This is a client-only React + TypeScript implementation of the "Text Search" assignment.

Features
- Case-insensitive search across article title & body
- Highlighting of matched terms in title and excerpt
- Relevance sorting (title matches weighted higher)
- Debounced search input with clear button
- Unit tests for search logic

Getting started
1. Install dependencies
   npm install

2. Run dev server
   npm run dev

3. Run tests
   npm run test

Build
- npm run build
- npm run preview to preview the production build

Design notes
- Articles are stored in `src/data/articles.ts` per the assignment instructions (no backend needed).
- Highlighting is implemented using a React-safe splitter (no dangerouslySetInnerHTML).
- The search logic is in `src/utils/search.ts` and can be extended for phrase matching or fuzzy search.

How to submit
- Push the repository to GitHub and paste the repository URL into the assessment "Submit your answer" input box.

If you want me to push these files into an existing repository for you, give me the owner/repo (it must already exist) and confirm and I’ll commit them in one push.
