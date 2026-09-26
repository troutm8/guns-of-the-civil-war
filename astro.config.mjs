// @ts-check
import { defineConfig } from 'astro/config';

// Published to GitHub Pages as a project site:
// https://troutm8.github.io/guns-of-the-civil-war/
export default defineConfig({
  site: 'https://troutm8.github.io',
  base: '/guns-of-the-civil-war',
  trailingSlash: 'always',
});
