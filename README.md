# Personal Portfolio Website

Static personal portfolio website for Osman Azabagic, built with React, Vite, and TypeScript and prepared for GitHub Pages deployment.

## Overview

This project presents a professional profile focused on backend engineering, distributed systems, ETL/data processing, and a telecommunications engineering background. The site is intentionally static: no backend, no database, and no runtime dependency on Google Drive.

Drive was used only during content generation. The final site ships as plain static assets.

## Features

- Single-page portfolio with anchored navigation
- Responsive layout for mobile, tablet, and desktop
- Neo-brutalist visual system with reusable CSS custom properties
- Structured TypeScript data files for content editing
- Accessibility-focused navigation, focus states, and reduced-motion support
- SEO metadata, JSON-LD, `robots.txt`, `sitemap.xml`, and favicon
- GitHub Actions workflow for GitHub Pages deployment
- Sanitized public CV download

## Tech Stack

- React
- Vite
- TypeScript
- Lucide React
- Plain CSS with CSS Modules for component styling
- GitHub Actions

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   └── content-summary.md
├── public/
│   ├── favicon.svg
│   ├── osman-azabagic-public-cv.txt
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── eslint.config.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

The Vite dev server will print the local URL, usually `http://localhost:5173`.

## Build and Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Content Editing

Most site content lives in `src/data/`:

- `src/data/profile.ts`
- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/education.ts`

Update these files when you want to change copy without touching component logic.

## Source Summary

The Drive-derived content summary is documented in:

- [`docs/content-summary.md`](./docs/content-summary.md)

That file records which source documents were used, what was extracted, and what was intentionally excluded for privacy or verification reasons.

## Screenshots

Screenshots have not been generated yet.

- `TODO`: Add desktop homepage screenshot
- `TODO`: Add mobile navigation screenshot
- `TODO`: Add projects section screenshot

## GitHub Pages Deployment

### 1. Initialize git and push to GitHub

Replace the placeholders before running:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio site"
git remote add origin https://github.com/<github-username>/<repository-name>.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages` in the left sidebar.
4. Under `Build and deployment`, choose `GitHub Actions` as the source.
5. Push to `main` or rerun the `Deploy to GitHub Pages` workflow from the `Actions` tab.

### 3. Expected public URL

```text
https://<github-username>.github.io/<repository-name>/
```

## Vite Base Path

GitHub Pages project repositories are served from a subpath, not from `/`.

This project handles that by reading `GITHUB_REPOSITORY` in CI and setting:

```ts
base: "/<repository-name>/"
```

When you run locally, the base path remains `/`.

## Replacing Social Links and Contact Information

Update the values in `src/data/profile.ts`:

- `email`
- `github`
- `linkedin`
- `location`
- `cvDownloadPath`
- `repoUrl`
- `canonicalUrl`
- `availability`

## Custom Domain Later

If you want to use a custom domain later:

1. Add your domain in GitHub repository `Settings -> Pages`.
2. Create a `public/CNAME` file containing the domain.
3. Update `canonicalUrl` in `src/data/profile.ts`.
4. Update `public/robots.txt` and `public/sitemap.xml`.

## Accessibility Notes

- Semantic sections and heading hierarchy are used throughout.
- Mobile navigation is keyboard accessible.
- Focus indicators are visible.
- Reduced motion is respected with `prefers-reduced-motion`.
- Contrast was chosen to stay within a strong high-contrast range.

## Privacy Notes

- The public CV download is sanitized.
- Phone number, precise address, internal identifiers, client names, and proprietary details were intentionally excluded.
- The EMIMEP master’s program entry is currently marked as unverified pending a confirmed admission source.

## License Recommendation

No license file is included yet.

Recommended options:

- `MIT` if you want the code to be broadly reusable.
- `All rights reserved` if this should remain personal and non-reusable by default.

## Remaining TODOs

- Replace placeholder repository URL in `src/data/profile.ts`
- Replace placeholder canonical URL in `src/data/profile.ts`
- Update `robots.txt` and `sitemap.xml` with the real production URL
- Decide whether to keep the unverified EMIMEP entry visible or replace it with a confirmed future-study record
- Replace the text CV with a polished PDF if desired
- Add additional public project links if available
