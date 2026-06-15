# Ganesh Chandrasekar Portfolio

Personal portfolio site built with Next.js for projects, experience, publications, and CV updates.

The current version is positioned around machine learning, NLP, retrieval, evaluation, and software engineering work. It is meant to be a clean professional site rather than a research-only or biomedical-only portfolio.

## What is in the site

- Home page with a focused intro, featured work, experience preview, and current job-search status
- Projects page with MDX-backed case studies and lightweight category filters
- Experience and About pages aligned with the current CV
- Publications page for papers and research artifacts
- Embedded CV page at `/cv` with direct PDF access
- Blog route reserved for later updates

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- MDX-style content loading through `gray-matter`
- Framer Motion for motion and transitions

## Local development

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm start
```

## Content structure

- `src/lib/site.ts`: global profile copy, links, and availability
- `src/lib/experience.ts`: experience timeline data
- `src/content/projects/*.mdx`: project case studies
- `src/content/publications/*.mdx`: publication entries
- `public/cv.pdf`: latest CV used by the embedded CV page

## Notes for future updates

- If the CV changes, replace `public/cv.pdf` and update the matching copy in `site.ts`, `experience.ts`, and the relevant MDX files.
- New projects are easiest to add as new files under `src/content/projects/`.
- The blog page is still a placeholder and can be expanded later without changing the rest of the content model.
