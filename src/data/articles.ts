import type { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Understanding the difference between grid-template and grid-auto',
    date: '2018-10-09',
    body:
      'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns.'
  },
  {
    id: '2',
    title: 'Recreating the GitHub Contribution Graph with CSS Grid Layout',
    date: '2019-03-21',
    body:
      'In this tutorial we will recreate the GitHub contribution graph using CSS Grid. We will use grid and repeat to construct the blocks and style them with colors.'
  },
  {
    id: '3',
    title: 'Flexbox vs Grid: When to use each layout system',
    date: '2020-07-15',
    body:
      'Both Flexbox and CSS Grid are powerful layout systems. This article compares them and gives guidance on when to use grid and when to use flexbox for one-dimensional layouts.'
  },
  {
    id: '4',
    title: 'A short post about accessibility',
    date: '2021-02-11',
    body:
      'Accessibility is essential. This short post focuses on semantic HTML and keyboard navigation.'
  }
];
