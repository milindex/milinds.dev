# Next.js 16 Migration Design

## Overview

Migrate milinds.dev from Next.js 13.2.4 (Pages Router) to Next.js 16.2.9 (App Router) with Turbopack, while keeping static export deployment. Also upgrade Tailwind CSS to v4 and remove legacy dependencies.

## Target Versions

| Dependency | Current | Target |
|---|---|---|
| next | 13.2.4 | 16.2.9 |
| react / react-dom | 18.2.0 | 19.2.0 |
| typescript | 4.9.5 | 5.7+ |
| tailwindcss | 3.2.7 | 4.x |
| node | 16.x | 20.x+ |

## Architecture

- **Router:** App Router (`src/app/`)
- **Build:** Turbopack (default in Next.js 16)
- **Export:** Static (`output: 'export'`)
- **Images:** `next/image` with `unoptimized: true`
- **SEO:** Built-in `metadata` API (remove `next-seo`)
- **Styling:** Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- **Themes:** `next-themes` remains, moved to `layout.tsx`
- **Sitemap:** `next-sitemap` updated to latest

## App Router Structure

```
src/app/
├── layout.tsx           # Global layout (ThemeProvider, metadata, fonts)
├── page.tsx             # Home page
├── about/page.tsx       # About page
├── blog/page.tsx        # Blog listing
├── contact/page.tsx     # Contact form (Firebase client-side)
├── experience/page.tsx  # Experience/timeline
└── projects/
    ├── page.tsx         # Project listing
    └── [slug]/page.tsx  # Dynamic project detail
```

Removed:
- `src/pages/` — replaced entirely
- `src/pages/api/connect.tsx` — unused API route
- `src/middleware/` — empty directory

## Config Changes

### next.config.js
- Remove `next-compose-plugins`, `next-transpile-modules`, `@next/bundle-analyzer`
- Add `output: 'export'`
- Add `images: { unoptimized: true }`
- Keep `trailingSlash: true`, `reactStrictMode: true`, `sassOptions`

### Tailwind CSS v4
- No `tailwind.config.js` needed
- CSS uses `@import "tailwindcss"` instead of `@tailwind` directives
- Update `postcss.config.js` if needed

## Dependency Changes

### Remove
- `next-compose-plugins`
- `next-transpile-modules`
- `next-seo`
- `@svgr/webpack`
- `@next/bundle-analyzer`
- `jest`, `@testing-library/react`, `@types/jest`
- `cypress`, `@percy/cypress`
- `rimraf`

### Update
- `next`, `eslint-config-next`, `next-sitemap`, `next-themes`
- `react`, `react-dom`, `@types/react`, `@types/node`
- `tailwindcss`, `postcss`, `autoprefixer`
- `typescript`
- `sass`

## Pages Migration Details

### Layout (`_app.tsx` → `layout.tsx`)
- `ThemeProvider` from `next-themes` wraps `{children}`
- Global CSS imports remain
- Metadata replaces `<Head>` from `next-seo`
- HTML lang attribute via `metadata` export

### Image Migration
- Replace `<img>` with `next/image` (`<Image>`)
- Add explicit `width` and `height` props
- `images.unoptimized: true` in config (required for static export)

### SEO Migration
- `NextSeo` component → `export const metadata` per-page
- Default metadata in root `layout.tsx`

## Testing

- Remove Jest and Cypress test suites
- Remove `__mocks__/` directory
- Remove test configuration files
- Verify with `next build` and manual spot-check

## Verification Criteria

1. `npm run build` succeeds with static export
2. All pages render correctly
3. Image component works with `unoptimized`
4. Theme toggle (dark/light) works
5. Contact form (Firebase) works
6. Navigation between pages works
7. Sitemap generation works
