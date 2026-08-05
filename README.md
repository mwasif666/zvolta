# ZVolta website

Production React website for ZVolta's EV charging, hosting, software, vehicle,
driver, and investment services.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Run the full quality gate before publishing:

```bash
npm run check
```

## Project structure

- `src/components/layout` and `src/components/seo`: shared application UI.
- `src/components/pages`: route-level page views being progressively split into
  feature sections.
- `src/features`: domain logic with focused unit tests.
- `src/hooks`: route animation and form lifecycle hooks.
- `src/data/pages`: route metadata and CMS-backed content.
- `src/pages`: lazy-loaded route entry points.
- `public`: runtime assets copied directly into the production build.
- `scripts`: content conversion and sitemap generation.

Routes are declared once in `src/page-registry.js` and enriched for navigation
in `src/routes.js`. The application remounts each route so legacy GSAP timelines,
observers, timers, and event handlers are cleaned before the next page starts.

## Production

`npm run build` generates the sitemap and creates `dist/`. Serve `dist/` as
static files. The included `zvolta.com.conf` is an Nginx example with canonical
host redirects, SPA routing, security headers, and immutable caching for hashed
assets. Vite's preview server is not used as a production server.

## Content updates

```bash
npm run sync:blogs
npm run generate:sitemap
```

The Notion sync requires its configured environment variables. Generated blog
data is intentionally excluded from formatting and lint rewriting.
