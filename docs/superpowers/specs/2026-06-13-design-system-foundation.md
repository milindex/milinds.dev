# Design System Foundation

## Overview

Set up the foundation layer for milinds.dev v2: design tokens, UI component library, directory structure, and base layout. This is the first sub-project of the v2 rewrite and provides the foundation for all subsequent work.

## Directory Structure

```
src/
├── app/                     # Existing App Router pages (unchanged)
├── components/
│   ├── layout/              # Header, Footer, Navigation, AppShell
│   ├── ui/                  # Button, Card, Input, Badge, Section, Container
│   ├── animations/          # Reveal, Counter, Magnetic, TextSplit
│   └── svg/                 # Existing SVG components
├── lib/                     # Utilities, helpers
├── hooks/                   # Custom React hooks
├── styles/                  # CSS files (tokens.css added)
├── types/                   # TypeScript types
└── constants/               # Site config, navigation links
```

Existing `src/components/{about, experience, footer, header, index, Projects, support}` remain in place during this phase. They are migrated into the new structure in later phases.

## Design Tokens

### CSS Variables + Tailwind v4 `@theme`

Defined in `src/styles/tokens.css`:

```css
@theme {
  --color-brand-primary: #FD5735;
  --color-brand-hover: #FF6B4A;
  --color-brand-active: #E54A28;

  --color-bg-primary: #0A0A0A;
  --color-surface-1: #111111;
  --color-surface-2: #171717;
  --color-surface-3: #1F1F1F;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A1A1AA;
  --color-text-muted: #71717A;

  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-accent: #60A5FA;

  --font-family-sans: Inter, sans-serif;
  --font-family-mono: JetBrains Mono, monospace;

  --spacing-0\.5: 4px;
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-6: 48px;
  --spacing-8: 64px;
  --spacing-12: 96px;
  --spacing-16: 128px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;
}
```

### Typography Scale

Utility classes for headings and body text (via `@utility` or `@apply`):

| Token | Desktop | Tablet | Mobile | Weight |
|---|---|---|---|---|
| h1 | 72px | 48px | 40px | 800 |
| h2 | 56px | 40px | 32px | 700 |
| h3 | 40px | 32px | 28px | 600 |
| h4 | 32px | 24px | 20px | 600 |
| body-large | 20px | — | — | 400 |
| body-default | 18px | — | — | 400 |
| body-small | 16px | — | — | 400 |
| caption | 14px | — | — | 400 |

### Layout Widths

- Site max-width: 1440px
- Content max-width: 1200px
- Reading max-width: 760px (blog, case studies)

## UI Components

### Button

**File:** `src/components/ui/Button.tsx`

Variants:
- `primary` — bg `brand-primary`, text white, radius 12px, height 52px
- `secondary` — transparent bg, border `1px solid #FFFFFF20`, radius 12px, height 52px
- `ghost` — no bg/border, text only

Sizes:
- `default` — 52px height, 16px horizontal padding
- `sm` — 40px height, 12px horizontal padding

Hover: primary → `brand-hover` bg + scale 1.02

### Card

**File:** `src/components/ui/Card.tsx`

Variants:
- `default` — surface-1 bg, border `1px solid rgba(255,255,255,0.05)`, radius 20px
- `interactive` — same + hover translateY(-4px)

### Input

**File:** `src/components/ui/Input.tsx`

- Height 56px
- Radius 12px
- Bg surface-1 (#111111)
- Focus: brand-primary border
- Label, error state, placeholder support

### Section

**File:** `src/components/ui/Section.tsx`

Props: `eyebrow`, `heading`, `subheading`, `children`, `className`

Standard section structure per STYLEGUIDE.md:
- Eyebrow (optional, small uppercase text)
- Heading
- Subheading (optional)
- Content (children)

### Badge

**File:** `src/components/ui/Badge.tsx`

For tech tags, categories, and labels.

### Container

**File:** `src/components/ui/Container.tsx`

Props: `variant` (`site` | `content` | `reading`), `children`

Applies max-width constraints.

## Base Layout

### Navigation (AppShell update)

Update `src/app/AppShell.tsx`:
- Nav height: 80px (was 64px)
- Transparent initially, blur + shadow on scroll
- Uses updated Navigation component

### Footer

Create `src/components/layout/Footer.tsx` with:
- Tagline: "Building products that are fast, scalable and designed to last."
- Copyright: "© Milind Sonawane. All rights reserved."
- Links (social, email)

### AppShell Integration

Update `src/app/layout.tsx` to:
- Import `tokens.css` alongside global.css
- Import Footer component

## Excluded from This Phase

- `src/components/sections/` — added when homepage is built
- `src/components/search/` — Portfolio Assistant
- `src/components/dashboard/` — dashboard page
- `src/components/recruiter/` — recruiter mode
- `src/components/client/` — client mode
- `src/components/case-studies/` — case study components
- `src/content/` — MDX content collections
- `src/hooks/` — custom hooks (added per need)
- `src/lib/` — utilities (added per need)
- `src/store/` — state management
- `src/analytics/` — PostHog/Plausible
- `src/seo/` — SEO utilities
- Animations library (GSAP, Framer Motion, Lenis)

## Files to Create

| File | Purpose |
|---|---|
| `src/styles/tokens.css` | Design tokens as CSS `@theme` |
| `src/components/ui/Button.tsx` | Button component |
| `src/components/ui/Card.tsx` | Card component |
| `src/components/ui/Input.tsx` | Input component |
| `src/components/ui/Section.tsx` | Section layout component |
| `src/components/ui/Badge.tsx` | Badge component |
| `src/components/ui/Container.tsx` | Container component |
| `src/components/ui/index.ts` | Barrel export |
| `src/components/layout/Footer.tsx` | Footer component |
| `src/hooks/useScrollPosition.ts` | Scroll detection hook |
| `src/constants/navigation.ts` | Nav links config |
| `src/constants/site.ts` | Site config (tagline, copyright, etc.) |

## Files to Modify

| File | Changes |
|---|---|
| `src/styles/global.css` | Import tokens.css |
| `src/app/layout.tsx` | Import tokens.css, use Footer |
| `src/app/AppShell.tsx` | Update nav height to 80px, use new hook |

## Verification

1. `npm run build` — builds successfully
2. `npm run check-types` — no TypeScript errors
3. `npm run lint` — no ESLint errors
4. New components render correctly (Button, Card, Input, etc.)
5. Navigation scroll behavior works (80px, blur on scroll)
6. Footer renders with correct content
