# The Guns of the Civil War

A reference to the small arms of the American Civil War (1861–1865), written for
reenactors and living historians. It is laid out in the style of an 1860s broadsheet.

Built with [Astro](https://astro.build) and published to GitHub Pages at
<https://troutm8.github.io/guns-of-the-civil-war/>.

## Working on the site

Requires Node.js 22.12 or later.

```sh
npm install
npm run dev      # local preview at http://localhost:4321/guns-of-the-civil-war/
npm run build    # production build into dist/
```

## Where things live

| Path | What it is |
|---|---|
| `src/content/arms/*.md` | **One file per weapon.** Specs in the front matter, the article below it. |
| `src/data/categories.ts` | The five departments (muskets, breechloaders, carbines, handguns, sharpshooters). |
| `src/pages/*.md` | The Reenactor's Guide, Ammunition, Glossary, Sources and About pages. |
| `src/pages/index.astro` | The front page. |
| `src/styles/global.css` | All styling (colors, fonts, rules). |
| `src/layouts/`, `src/components/` | Page templates. |

## Editing a weapon article

Each file in `src/content/arms/` begins with a block of front matter between `---` lines:

- `title`, `shortTitle`, `summary`: the headline, the short name used in lists, and the standfirst.
- `category`: one of `muskets`, `breechloaders`, `carbines`, `handguns`, `sharpshooter`.
- `sides`: `[Union]`, `[Confederate]` or `[Union, Confederate]`.
- `specs`: the "Particulars" box. Any field may be left out. **Put values that start with a
  dot, such as calibers, in quotes** (`caliber: ".58"`), or they will be read as numbers.
- `reproductions`, `impressions`, `related`: the reproductions table, the impressions box and
  the "See Also" links (by file name, without `.md`).
- `reviewNotes`: an editor's checklist of facts to verify. **These are never shown on the
  site.** Delete each note once you've checked it.

Below the front matter is the article in ordinary Markdown. Use `## Heading` for sections.

To add a weapon, copy an existing file, rename it (the file name becomes the page's web
address) and edit it.

## Publishing

Every push to `main` builds the site and deploys it with GitHub Actions
(`.github/workflows/deploy.yml`). Before the first deploy, go to **Settings → Pages** on
GitHub and set **Source** to **GitHub Actions**.
