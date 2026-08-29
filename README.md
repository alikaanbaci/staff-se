# staff-se

A navy-themed engineering blog and personal portfolio site with Turkish/
English (i18n) support, built with Docusaurus.

Live at: https://alikaanbaci.github.io/staff-se/

## Setup and development

```bash
npm install
npm start
```

`npm start` opens the dev server at http://localhost:3000/staff-se/ (default
locale: Turkish). To view the English version during development:

```bash
npm start -- --locale en
```

## Build

```bash
npm run build      # generates static files (build/) for all locales
npm run typecheck  # TypeScript type checking
npm run serve       # serves the build output locally
```

## Project structure

```
docusaurus.config.ts   Site config (title, navbar, footer, i18n, theme)
src/css/custom.css      Navy color palette and theme
src/pages/index.tsx      Home page (hero, technologies)
src/pages/about.tsx      About page (experience, skills, contact)
blog/                     Engineering blog posts (under /blog)
i18n/en/                  English translations
```

Note: the site has no separate "Projects" section — the docs plugin is
disabled (`docs: false` in `docusaurus.config.ts`), and there's no
`sidebars.ts`.

## Adding content

**A new blog post:** add a `YYYY-MM-DD-slug.md` file to `blog/` (see the
existing examples). The part before the `{/* truncate */}` marker is shown
as the preview in the blog list.

## i18n (Turkish / English)

The site is set up with Turkish as the default locale. English translations
live under `i18n/en/`:

- `i18n/en/docusaurus-theme-classic/navbar.json` and `footer.json` — navbar/footer text
- `i18n/en/code.json` — `<Translate>` strings inside `src/pages/*.tsx`
- `i18n/en/docusaurus-plugin-content-blog/` — `blog/` translations (same file names)

When you add new page text (inside `src/pages`), wrap it with
`<Translate id="...">`, then run:

```bash
npm run write-translations -- --locale en
```

This adds the new key to `i18n/en/code.json`; fill in the English text
there. Details: https://docusaurus.io/docs/i18n/tutorial

## Status

The site has been personalized: `docusaurus.config.ts`, `src/pages/about.tsx`,
`src/pages/index.tsx`, `blog/authors.yml` and their i18n counterparts are
filled in with real content; the example/placeholder project pages and blog
posts, and the entire (empty) "Projects" section (docs plugin, `projects/`,
`sidebars.ts`, navbar/footer links) have been removed.

One placeholder remains: `static/img/social-card.jpg` is still Docusaurus's
default promo image — it's what shows up in social-media link previews.
`static/img/favicon.ico` may also still be the default. To replace either,
just overwrite the file under the same name (`static/img/logo.svg` is
already a custom navy-themed logo, no need to touch it).

To add a new job entry, copy one of the `.timelineItem` blocks in
`src/pages/about.tsx` and give it new `Translate` ids like `about.exp5.*`;
remember to add the English text to `i18n/en/code.json` too.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` automatically builds and deploys the site to
GitHub Pages on every push to `main`. One-time setup:

1. Create/push this repo on GitHub.
2. Under repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Make sure `url`, `baseUrl`, `organizationName` and `projectName` in
   `docusaurus.config.ts` match your GitHub username/repo name.
4. The workflow runs automatically on every push to `main`.

`.github/workflows/ci.yml` runs a build/typecheck check on pull requests
(it doesn't deploy).
