# RoadSafe365 Website

A static dataset website for the RoadSafe365 benchmark, built with Next.js + TypeScript + TailwindCSS.

## Quick Start

```bash
npm install
npm run dev       # Development server at http://localhost:3000
npm run build     # Build for production (static export to ./out/)
```

## Project Structure

```
roadsafe365-website/
├── public/                  # Static assets (images, videos)
│   ├── overview.png         # Teaser/overview figure (replace with actual)
│   ├── pipeline.png         # Pipeline figure (replace with actual)
│   └── examples/            # Qualitative example images
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + Tailwind directives
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx       # Fixed top navigation with hamburger menu
│   │   ├── Hero.tsx         # Title, authors, affiliations, buttons
│   │   ├── Teaser.tsx       # Overview image section
│   │   ├── Abstract.tsx     # Abstract text
│   │   ├── Highlights.tsx   # Feature highlight cards
│   │   ├── Overview.tsx     # Pipeline/overview figure
│   │   ├── Statistics.tsx   # Dataset statistics cards
│   │   ├── Tasks.tsx        # Task & taxonomy cards
│   │   ├── Examples.tsx     # Qualitative examples grid
│   │   ├── Benchmark.tsx    # Benchmark results table
│   │   ├── Download.tsx     # Download links
│   │   ├── BibTeX.tsx       # BibTeX code block with copy button
│   │   ├── Toast.tsx        # Toast notification component
│   │   └── Footer.tsx       # Footer with credits
│   └── content/
│       └── site.config.ts   # All text content (edit this to update site)
├── tailwind.config.ts       # Tailwind theme (colors, fonts, spacing)
├── next.config.js           # Next.js config (static export)
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Content Configuration

All text content is in `src/content/site.config.ts`. Edit this file to update:
- Project title & description
- Author list & affiliations
- External links (Paper, Code, Dataset, Demo)
- Abstract text
- Highlights
- Dataset statistics
- Task descriptions
- Benchmark results
- BibTeX entry
- Download links
- Footer info

## Replacing Placeholder Images

Replace these files with your actual images:
- `public/overview.png` — Teaser/overview figure shown below the hero
- `public/pipeline.png` — Pipeline figure in the Overview section
- `public/examples/` — Add qualitative example images here

## Deploy to GitHub Pages

1. Create a GitHub repository

2. Add a GitHub Actions workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. In GitHub repo Settings → Pages → Source: select "GitHub Actions"

4. Push to `main` and the site auto-deploys

### If deploying to a subpath (e.g. `username.github.io/roadsafe365/`)

Update `next.config.js`:
```js
const nextConfig = {
  output: "export",
  basePath: "/roadsafe365",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

## Deploy to Vercel

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — deploy with defaults

