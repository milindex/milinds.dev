# Homepage v2 — Complete Section Reference

> Layout, spacing, text, animation, and component hierarchy for every section on milinds.dev.

---

## Global Layout

### AppShell (`src/app/AppShell.tsx`)

```
┌─────────────────────────────────────────────────────┐
│  <header> h-20 (80px) fixed                         │
│    <Navigation />                                    │
│  </header>                                           │
│                                                       │
│  <main> mx-auto mt-20 px-4 md:px-8                   │
│    ↑ 80px (clears fixed header)                       │
│    ← px-4 (16px) on mobile / px-8 (32px) on desktop → │
│                                                       │
│    {page content — sections stack vertically}         │
│                                                       │
│  </main>                                              │
│                                                       │
│  <Footer />                                           │
└─────────────────────────────────────────────────────┘
```

- **Max content width per section:** each section uses `<Container variant="content">` = `max-w-[1200px]` with `mx-auto`
- **HeroSection** uses its own `max-w-[1200px]` flex wrapper (same width, no Container component)
- **Background:** `#0A0A0A` (`bg-bg-primary`) — all sections

---

## Section Order

```
1. HeroSection (`id="hero"`)
2. TrustBar (`id="trust"`)
3. CompanyMarquee (`id="clients"`)
4. FeaturedCaseStudies (`id="work"`)
5. CareerJourney (`id="timeline"`)
6. TechnologyStack (`id="tech"`)
7. WritingInsights (`id="writing"`)
8. LabsExperiments (`id="experiments"`)
9. Testimonials (`id="testimonials"`)
10. Availability (`id="availability"`)
11. ContactCTA (`id="contact"`)
```

All sections are separated by `border-t border-white/[0.05]` (subtle 1px top border). Sections without an explicit border inherit it from the next section's top border.

Every section has `py-8` (32px) or `py-12` (48px) vertical padding. See individual sections for exact values.

---

## 1. HeroSection

```
┌─────────────────────────────────────────────────────┐
│                      py-12 (48px)                    │
│  ┌───────────────────────────────────────────────┐   │
│  │  GradientMesh (animated background, z-0)      │   │
│  │                                               │   │
│  │  max-w-[1200px] mx-auto flex gap-12            │   │
│  │  ┌─────────────┐  ┌──────────────┐           │   │
│  │  │  flex-1     │  │  Portrait    │           │   │
│  │  │             │  │  w-[280px]   │           │   │
│  │  │  Eyebrow    │  │  lg:w-[400px]│           │   │
│  │  │  Headline   │  │  rounded-3xl │           │   │
│  │  │  Subheadline│  │  parallax    │           │   │
│  │  │  HeroCTA    │  │              │           │   │
│  │  │  AvailBadge │  │              │           │   │
│  │  │  TrustRow   │  │              │           │   │
│  │  │  HeroMetrics│  │              │           │   │
│  │  └─────────────┘  └──────────────┘           │   │
│  │                                               │   │
│  │  ScrollIndicator (absolute bottom-8)          │   │
│  └───────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

**Section:** `<section className="relative overflow-hidden bg-bg-primary py-12">`
- `py-12` = 48px top + bottom padding
- `relative` for absolute-positioned children (ScrollIndicator, GradientMesh)
- No horizontal padding (inherits from `<main>` wrapper: `px-4 md:px-8`)

### 1a. Eyebrow

```
FULL STACK DEVELOPER     ← text-sm, uppercase, tracking-[0.2em], text-brand-primary (#FD5735)
                          ← mb-4 (16px below)
                          ← GSAP: y:20→0, opacity:0→1, 0.3s, delay 0.2s
```

**Path:** `src/components/sections/hero/Eyebrow.tsx`
**Class:** `mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-primary`
**Spacing below:** `mb-4` (16px)

### 1b. Headline

```
Building high-performance fintech,     ← h1, text-3xl (30px) / md:text-4xl (36px) / lg:text-5xl (48px)
e-commerce and SaaS products            ← font-extrabold, leading-tight
used by millions of users.             ← text-text-primary (#FFFFFF)
                                        ← No bottom margin — next element has mt-*
                                        ← GSAP: word stagger, each word y:40→0, opacity:0→1, 0.8s, stagger 0.08s
```

**Path:** `src/components/sections/hero/Headline.tsx`
**Class:** `text-3xl font-extrabold leading-tight text-text-primary md:text-4xl lg:text-5xl`
**Animation:** Manual word-split (no GSAP SplitText plugin). Each word wrapped in `<span style="display:inline-block">`.

### 1c. Subheadline

```
I'm Milind Sonawane, a Full Stack Developer with 6+    ← text-lg (18px) / md:text-xl (20px)
years of experience building scalable web applications, ← text-text-secondary (#A1A1AA)
e-commerce platforms and fintech products for companies ← max-w-2xl (672px)
including HDFC Sky, Angel One, Kapiva and Atomberg.    ← mt-6 (24px above)
                                                        ← GSAP: y:20→0, opacity:0→1, 0.5s, delay 0.5s
```

**Path:** `src/components/sections/hero/Subheadline.tsx`
**Class:** `mt-6 max-w-2xl text-lg text-text-secondary md:text-xl`
**Spacing above:** `mt-6` (24px)

### 1d. HeroCTA

```
┌─────────────────────────┐  ┌──────────────────────┐
│  View Case Studies      │  │  Download Resume     │
│  bg-brand-primary       │  │  border-white/20     │
│  MagneticButton (parallax)│  │  plain <a>          │
│  → /projects            │  │  → /assets/resume.pdf│
└─────────────────────────┘  └──────────────────────┘
← mt-8 (32px above), flex flex-wrap gap-4 (16px gap)
← GSAP: stagger children y:20→0, 0.4s, stagger 0.1s, delay 0.8s
```

**Path:** `src/components/sections/hero/HeroCTA.tsx`
**Spacing above:** `mt-8` (32px)
**Button height:** `h-[52px]`, `rounded-[12px]`
**Primary CTA:** Uses `MagneticButton` wrapper (mouse-follow parallax, 10px max displacement). Only primary CTA gets magnetic effect.
**Secondary CTA:** Plain `<a>` tag (no magnetic effect).

### 1e. AvailabilityBadge

```
● Available for Select Projects    ← text-sm, text-text-secondary
  └─ green pulsing dot (animate-ping, bg-success)
← mt-8 (32px above), flex items-center gap-2 (8px gap)
← GSAP: opacity:0→1, 0.3s, delay 1.1s
```

**Path:** `src/components/sections/hero/AvailabilityBadge.tsx`
**Spacing above:** `mt-8` (32px)
**Dot:** Two `<span>` elements — one with `animate-ping` (CSS pulse animation), one solid. Both `bg-success` (`#22C55E`), `h-3 w-3` (12px), `rounded-full`.

### 1f. TrustRow

```
Worked With                    ← text-xs, uppercase, tracking-[0.15em], text-text-muted, mb-2
HDFC Sky  Angel One  Kapiva  Atomberg   ← text-sm, font-medium
← mt-10 (40px above), flex flex-wrap gap-x-4 gap-y-1
← GSAP: y:10→0, opacity:0→1, 0.4s, delay 1.3s
```

**Path:** `src/components/sections/hero/TrustRow.tsx`
**Spacing above:** `mt-10` (40px)
**Companies:** `['HDFC Sky', 'Angel One', 'Kapiva', 'Atomberg']`
**Layout:** `flex flex-wrap gap-x-4 gap-y-1` — horizontal gap 16px, vertical gap 4px

### 1g. HeroMetrics

```
6+ Years Experience     50+ Projects Delivered     Millions Users Reached
← text-lg font-bold / text-sm text-muted, ml-1.5 gap between value and label
← mt-6 (24px above), flex flex-wrap gap-x-8 (32px) gap-y-2 (8px)
```

**Path:** `src/components/sections/hero/HeroMetrics.tsx`
**Spacing above:** `mt-6` (24px)
**Data:**
- `{ value: '6+', label: 'Years Experience' }`
- `{ value: '50+', label: 'Projects Delivered' }`
- `{ value: 'Millions', label: 'Users Reached' }`

**Note:** This is an inline metric display within the Hero — distinct from the standalone TrustBar section below.

### 1h. Portrait

```
┌─────────────────────┐
│                     │
│   portrait.jpg      │  ← rounded-3xl (24px), shadow-2xl
│   400×500           │  ← max-lg:w-[280px], lg:w-[400px]
│                     │  ← Mouse parallax: x,y /30, 0.6s
└─────────────────────┘
```

**Path:** `src/components/sections/hero/Portrait.tsx`
**Image:** `/assets/images/portrait.jpg`, `width={400} height={500}`, `priority` (LCP)
**Classes:** `overflow-hidden rounded-3xl shadow-2xl max-lg:w-[280px] lg:w-[400px]`
**Interaction:** Mouse parallax via `useMousePosition` hook. Displacement: mouse distance from image center divided by 30. GSAP `power2.out` 0.6s.

### 1i. GradientMesh (Background)

**Path:** `src/components/animations/GradientMesh.tsx`
**Position:** Absolute, full coverage behind content (`z-index` below content)
**Animation:** 25s gradient color cycle (slow, premium feel)
**Content:** Noise overlay, no particles, no WebGL

### 1j. ScrollIndicator

```
                          Scroll to Explore
← absolute bottom-8 (32px), left-1/2, -translate-x-1/2
← text-xs, tracking-[0.2em], text-text-muted
← GSAP: opacity pulse 0.4↔1, yoyo infinite, 1.5s, delay 1.8s initial
```

**Path:** `src/components/sections/hero/ScrollIndicator.tsx`
**Visible only at top of page (before scroll)**

---

## 2. TrustBar

```
┌─────────────────────────────────────────────────────┐
│  ───── border-t border-white/[0.05] (top separator) │
│                py-8 (32px) / md:py-12 (48px)        │
│                                                       │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐            │
│  │ 6+   │  │ 50+  │  │ 4+   │  │Millns│            │
│  │ Years│  │Proj. │  │Enterp│  │Users │            │
│  │Exper.│  │Deliv.│  │Brands│  │Reach.│            │
│  └──────┘  └──────┘  └──────┘  └──────┘            │
│    grid-cols-2 (mobile) / md:grid-cols-4            │
│    gap-6 (24px) / md:gap-8 (32px)                   │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/TrustBar.tsx`
**Spacing:** `py-8` (32px) / `md:py-12` (48px)
**Border-top:** `border-t border-white/[0.05]` — subtle 1px, 5% white
**Background:** `bg-bg-primary` (#0A0A0A)
**Container:** `<Container>` = max-w-[1200px], mx-auto, px-4 (inherits main padding too)

**Grid:**
- Mobile: `grid-cols-2` — 2 columns
- Desktop: `md:grid-cols-4` — 4 columns
- Gap: `gap-6` (24px) / `md:gap-8` (32px)

**Metric display:**
- Values: `text-3xl` (30px) / `md:text-4xl` (36px), `font-bold`, `text-text-primary`
- Labels: `mt-1` (4px above), `text-sm`, `text-text-muted` (#71717A)
- All centered: `text-center`

**Animation:** GSAP ScrollTrigger count-up on viewport entry (`top 85%`). 1.2s duration, `power3.out`.
- First 3 metrics: Animated counter via `gsap.fromTo` on `textContent`
- Last metric ("Millions"): Static text (no count-up — realistic since "Millions" isn't a specific number)

**Data:**
| Value | Suffix | Label |
|-------|--------|-------|
| 6 | + | Years Experience |
| 50 | + | Projects Delivered |
| 4 | + | Enterprise Brands |
| (text: "Millions") | — | Millions of Users Reached |

---

## 3. CompanyMarquee

```
┌─────────────────────────────────────────────────────┐
│  ───── border-t border-white/[0.05]                  │
│                py-8 (32px) / md:py-10 (40px)        │
│                                                       │
│               Worked With                            │
│    ← text-sm uppercase tracking, text-muted          │
│                                                       │
│  ┌─────────────────────────────────────────────┐    │
│  │  overflow-hidden                             │    │
│  │  ┌──────────────────────────────────────┐   │    │
│  │  │← GSAP scrolls left →                 │   │    │
│  │  │ HDFC Sky  Angel One  Kapiva  Atomberg│   │    │
│  │  │         (duplicated for loop)         │   │    │
│  │  │ flex gap-12 (48px)                    │   │    │
│  │  └──────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────┘    │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/CompanyMarquee.tsx`
**Spacing:** `py-8` (32px) / `md:py-10` (40px)
**Label:** `mb-4` (16px below label), `text-center`, `text-sm`, `uppercase`, `tracking-[0.15em]`
**Company text:** `text-xl` (20px) / `md:text-2xl` (24px), `font-semibold`, `text-text-secondary`
**Animation:** GSAP `repeat:-1` horizontal scroll, 30s per loop, `ease: 'none'`. Pauses on hover (`timeScale(0)`).
**Gap between items:** `gap-12` = 48px

---

## 4. FeaturedCaseStudies

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  Selected Work (h2, text-4xl md:text-5xl    │    │
│  │  lg:text-6xl, font-bold)                     │    │
│  │                                               │    │
│  │  A selection of projects where I helped     │    │
│  │  businesses solve technical challenges...    │    │
│  │  (text-lg md:text-xl, text-secondary,        │    │
│  │   max-w-2xl, mt-4)                           │    │
│  │                                               │    │
│  │  ┌────────────┐ ┌────────────┐ ┌──────────┐ │    │
│  │  │ HDFC Sky   │ │ Angel One  │ │Atomberg  │ │    │
│  │  │ badge:Fin. │ │ badge:Fin. │ │badge:ECom│ │    │
│  │  │ Role       │ │ Role       │ │ Role     │ │    │
│  │  │ tech badges│ │ tech badges│ │tech badge│ │    │
│  │  │ impact x2  │ │ impact x2  │ │impact x2 │ │    │
│  │  │ View Case  │ │ View Case  │ │View Case │ │    │
│  │  └────────────┘ └────────────┘ └──────────┘ │    │
│  │         grid gap-6 / md:grid-cols-3          │    │
│  └───────────────────────────────────────────────┘    │
│              mt-8 (section content padding)            │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/FeaturedCaseStudies.tsx`
**Wrapper:** `<Section heading="Selected Work" subheading="...">`
- Section heading: `text-4xl md:text-5xl lg:text-6xl`, `font-bold`, `text-text-primary`
- Subheading: `mt-4`, `max-w-2xl`, `text-lg md:text-xl`, `text-text-secondary`
- Content area: `mt-8` (separates heading from children)

**Grid:** `grid gap-6` (24px) / `md:grid-cols-3`

**Card structure (each project):**
- `<Link href="/projects/[slug]" className="group block">` — entire card is clickable
- `<Card variant="interactive" as="article">` — interactive variant has `hover:-translate-y-1`, `transition-all duration-300`, `hover:border-white/[0.1]`
- Inner: `flex flex-col gap-3` (12px)
  1. Industry badge — `<Badge variant="brand">` (orange bg at 10% opacity, orange text)
  2. Project name — `<h3 className="text-xl font-bold text-text-primary">`
  3. Role — `<p className="text-sm text-text-muted">Role: ...</p>`
  4. Tech badges — `flex flex-wrap gap-2`, each `<Badge variant="default">`
  5. Impact list — `<ul className="mt-2 space-y-1">` (8px top, 4px between items), items `text-sm text-text-secondary`
  6. CTA — `<span className="mt-auto pt-2 text-sm font-medium text-brand-primary group-hover:underline">View Case Study</span>`

**Data (3 projects):**

| Project | Industry | Role | Tech | Impact |
|---------|----------|------|------|--------|
| HDFC Sky | Fintech | Tech Lead | Node.js, Next.js, Docker, Redis | Leading full-stack team; Architected scalable infrastructure |
| Angel One | Fintech | Full Stack Developer | WordPress, Elasticsearch, AMP | Achieved 90+ PageSpeed; Implemented Elasticsearch |
| Atomberg 2.0 | E-Commerce | Full Stack Developer | WordPress, VueJS, Critical CSS | Built custom lead management; Critical CSS for Core Web Vitals |

---

## 5. CareerJourney

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  Career Journey                              │    │
│  │                                              │    │
│  │  Alternate layout:                           │    │
│  │                                              │    │
│  │  Mobile: all entries on left side            │    │
│  │  Desktop: odd→left, even→right              │    │
│  │                                              │    │
│  │    │ (vertical line)                         │    │
│  │    ● Jun 2024 - Present                      │    │
│  │    │  HDFC Sky (HDFC Securities)            │    │
│  │    │  Senior Frontend Developer / Tech Lead  │    │
│  │    │  Leading frontend architecture...       │    │
│  │    │  [Next.js] [Node.js] [Docker] [Redis]   │    │
│  │    │                                         │    │
│  │    │                                         │    │
│  │    ● Jul 2018 - Jun 2024                     │    │
│  │    │  Angel One                              │    │
│  │    │  Full Stack Developer                   │    │
│  │    │  Optimized website to 90+...            │    │
│  │    │  [WP] [Elasticsearch] [AMP] [Gulp]      │    │
│  │    │                                         │    │
│  │    ● May 2019 - Jul 2021                     │    │
│  │    │  Kapiva                                 │    │
│  │    │  Full Stack Developer                   │    │
│  │    │  Built custom checkout...               │    │
│  │    │  [VueJS] [BigCommerce] [NodeRED]        │    │
│  │    │                                         │    │
│  │    ● Feb 2020 - May 2022                     │    │
│  │    │  Atomberg Technologies                  │    │
│  │    │  Full Stack Developer                   │    │
│  │    │  Revamped website...                    │    │
│  │    │  [WP] [VueJS] [Critical CSS]            │    │
│  │                                              │    │
│  │            View Full Timeline →              │    │
│  │              (links to /experience)           │    │
│  └───────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/CareerJourney.tsx`
**Wrapper:** `<Section id="timeline" heading="Career Journey">` (no subheading)

**Timeline line:** `absolute left-4 md:left-1/2`, `w-px`, `bg-white/[0.08]`, full height.

**Alternating layout:**
- Mobile: `pl-10` (40px padding-left for all entries, line is on left)
- Desktop odd entries: `pr-[52%]` — card takes 48% width, aligned right of center line
- Desktop even entries: `pl-[52%]` — card takes 48% width, aligned left of center line

**Timeline dot:** `h-3 w-3` (12px), `rounded-full`, `border-2 border-brand-primary`, `bg-bg-primary`. Positioned `left-2.5` on mobile, `left-1/2` on desktop.

**Card:** `rounded-[20px] p-5 bg-surface-1 border border-white/[0.05]`
- `p-5` = 20px padding

**Card content spacing:**
1. Period — `text-xs font-medium text-brand-primary`
2. Company — `<h3 className="mt-1 text-lg font-bold text-text-primary">`
3. Role — `mt-0.5 text-sm text-text-muted`
4. Achievement — `mt-2 text-sm text-text-secondary`
5. Tech badges — `mt-3 flex flex-wrap gap-2`

**Entries spacing:** `space-y-8` — 32px between entries

**CTA:** `mt-8 text-center`, link `text-sm font-medium text-brand-primary hover:underline` → `/timeline`

---

## 6. TechnologyStack

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  Technologies I Work With                    │    │
│  │  A modern toolkit built around...            │    │
│  │                                              │    │
│  │  ┌──────────┐ ┌──────────┐ ┌────────┐ ┌───┐│    │
│  │  │FRONTEND  │ │ BACKEND  │ │DEVOPS  │ │CMS││    │
│  │  │          │ │          │ │        │ │   ││    │
│  │  │ React ◄──│─│ Node.js◄─│─│Cloudfl◄│─│WP◄││    │
│  │  │  5+ yrs  │ │  5+ yrs  │ │ 3+ yrs │ │6+y││    │
│  │  │ Next.js  │ │ Express  │ │ Docker │ │HCS││    │
│  │  │ TS       │ │ Supabase │ │ GHA    │ │MDX││    │
│  │  │ Tailwind │ │ Firebase │ │        │ │   ││    │
│  │  └──────────┘ └──────────┘ └────────┘ └───┘│    │
│  │         grid gap-8 / md:grid-cols-4         │    │
│  └───────────────────────────────────────────────┘    │
│                                                       │
│  Hover behavior: badge switches to brand variant,    │
│  years experience text appears inline (e.g., "5+ yrs")│
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/TechnologyStack.tsx`
**State:** `useState<string | null>(null)` for tracking hovered badge name

**Grid:** `grid gap-8` (32px) / `md:grid-cols-4`
- Mobile: single column (grid defaults to 1 col)
- Desktop: 4 columns

**Category heading:** `<h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-text-muted">`
- `mb-4` = 16px below

**Items container:** `flex flex-wrap gap-3 md:flex-col md:flex-nowrap`
- Mobile: horizontal flex wrapping, gap 12px
- Desktop: vertical column, no wrap

**Badge states:**
- Default: `<Badge variant="default">` — `bg-surface-2 text-text-secondary`
- Hovered: `<Badge variant="brand">` — `bg-brand-primary/10 text-brand-primary`
- Years text appears inside badge: `<span className="ml-2 text-[10px] opacity-70">5+ yrs</span>`

**Data:**

| Category | Items |
|----------|-------|
| Frontend | React (5+), Next.js (4+), TypeScript (4+), Tailwind (3+) |
| Backend | Node.js (5+), Express (4+), Supabase (1+), Firebase (2+) |
| DevOps | Cloudflare (3+), Docker (3+), GitHub Actions (3+) |
| CMS | WordPress (6+), Headless CMS (2+), MDX (1+) |

---

## 7. WritingInsights

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  Writing & Insights                          │    │
│  │  Thoughts on engineering, architecture,      │    │
│  │  performance and building products.          │    │
│  │                                              │    │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────┐│    │
│  │  │⚠️ Performance│ │⚠️ Engineering│ │⚠️Arch.││    │
│  │  │📌 Placeholder│ │📌 Placeholder│ │📌Plce.││    │
│  │  │              │ │              │ │      ││    │
│  │  │Improving Core│ │Lessons From  │ │Why   ││    │
│  │  │Web Vitals... │ │Building...   │ │Perf. ││    │
│  │  │              │ │              │ │Is a  ││    │
│  │  │A practical   │ │Key technical │ │Feat. ││    │
│  │  │guide to...   │ │and arch...   │ │      ││    │
│  │  │              │ │              │ │      ││    │
│  │  │Coming Soon   │ │Coming Soon   │ │Coming││    │
│  │  └──────────────┘ └──────────────┘ └──────┘│    │
│  │                                              │    │
│  │              View All Articles →              │    │
│  │                   (/blog)                     │    │
│  └───────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/WritingInsights.tsx`
**Grid:** `grid gap-6` (24px) / `md:grid-cols-3`

**Card structure:**
1. Category badge — `<Badge variant="warning">` (amber/yellow), e.g., "Performance", "Engineering", "Architecture"
2. Placeholder badge — `<Badge variant="default">Placeholder Content</Badge>` (clearly labeled)
3. Title — `<h3 className="text-lg font-bold text-text-primary">`
4. Excerpt — `<p className="text-sm text-text-secondary">`
5. Date — `<span className="mt-auto pt-2 text-xs text-text-muted">Coming Soon</span>` — pushed to card bottom

**CTA:** `mt-8 text-center`, link → `/blog`
**Note:** Placeholder content — all articles show "Coming Soon" as date and "Placeholder Content" badge.

---

## 8. LabsExperiments

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  Labs & Experiments                          │    │
│  │  Projects, experiments and contributions...  │    │
│  │                                              │    │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────┐│    │
│  │  │📌 Placeholder│ │📌 Placeholder│ │📌Plce.││    │
│  │  │              │ │              │ │      ││    │
│  │  │  Repository  │ │  Experiment  │ │ Tool ││    │
│  │  │  Placeholder │ │  Placeholder │ │Plce. ││    │
│  │  │              │ │              │ │      ││    │
│  │  │ A description│ │ A lab...     │ │A dev ││    │
│  │  │ of an open   │ │              │ │tool..││    │
│  │  │ source...    │ │              │ │      ││    │
│  │  │              │ │              │ │      ││    │
│  │  │TypeScript    │ │TypeScript    │ │Type..││    │
│  │  │-- stars      │ │-- stars      │ │--    ││    │
│  │  └──────────────┘ └──────────────┘ └──────┘│    │
│  └───────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/LabsExperiments.tsx`
**Grid:** `grid gap-6` (24px) / `md:grid-cols-3`

**Card structure:**
1. Placeholder badge — `<Badge variant="default">Placeholder Content</Badge>`
2. Title — `<h3 className="text-lg font-bold text-text-primary">`
3. Description — `<p className="text-sm text-text-secondary">`
4. Footer — `<div className="mt-auto flex items-center gap-4 pt-2 text-xs text-text-muted">` — language + stars

**Data:**
| Name | Description | Language | Stars |
|------|-------------|----------|-------|
| Repository Placeholder | "A description..." | TypeScript | -- |
| Experiment Placeholder | "A lab experiment..." | TypeScript | -- |
| Tool Placeholder | "A developer tool..." | TypeScript | -- |

---

## 9. Testimonials

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  What People Say                             │    │
│  │  Feedback from clients, colleagues and teams.│    │
│  │                                              │    │
│  │  ┌──────────────────────────────────────┐    │    │
│  │  │  overflow-hidden                     │    │    │
│  │  │  ┌───────────────────────────────┐   │    │    │
│  │  │  │← GSAP auto-scrolls left      │   │    │    │
│  │  │  │                              │   │    │    │
│  │  │  │ ┌──────┐ ┌──────┐ ┌──────┐  │   │    │    │
│  │  │  │ │📌   │ │📌   │ │📌   │  │   │    │    │
│  │  │  │ │Coming│ │Coming│ │Coming│  │   │    │    │
│  │  │  │ │Soon  │ │Soon  │ │Soon  │  │   │    │    │
│  │  │  │ │      │ │      │ │      │  │   │    │    │
│  │  │  │ │ (PT) │ │ (PT) │ │ (PT) │  │   │    │    │
│  │  │  │ │Place-│ │Place-│ │Place-│  │   │    │    │
│  │  │  │ │holder│ │holder│ │holder│  │   │    │    │
│  │  │  │ │"This │ │"This │ │"This │  │   │    │    │
│  │  │  │ │section│ │sec..│ │sec..│  │   │    │    │
│  │  │  │ └──────┘ └──────┘ └──────┘  │   │    │    │
│  │  │  │        w-[350px] cards      │   │    │    │
│  │  │  │        flex gap-6           │   │    │    │
│  │  │  └───────────────────────────────┘   │    │    │
│  │  └──────────────────────────────────────┘    │    │
│  └───────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/Testimonials.tsx`
**Animation:** GSAP auto-scroll carousel, 20s loop, pauses on hover (`timeScale(0)`). Content duplicated for seamless loop.

**Card:** `w-[350px] md:w-[400px] shrink-0`
- Uses `<Card>` with explicit width for carousel layout
- `flex gap-6` (24px) on the track

**Card content:**
1. "Coming Soon" badge — `<Badge variant="default">Coming Soon</Badge>`
2. Avatar — `h-10 w-10 rounded-full bg-surface-2`, initials "PT" in `text-sm font-bold text-text-muted`
3. Name — `text-sm font-medium text-text-primary`
4. Quote — `<blockquote className="text-sm leading-relaxed text-text-secondary italic">`
   - All quotes: "This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected."
   - Wrapped in `&ldquo;`/`&rdquo;` (curly quotes)

**Policy:** No fake names, companies, photos, job titles, or quotes. Placeholder initials "PT" only.

---

## 10. Availability

```
┌─────────────────────────────────────────────────────┐
│  ┌─ Section heading ───────────────────────────┐    │
│  │  Available For New Opportunities             │    │
│  │                                              │    │
│  │  I'm currently available for freelance       │    │
│  │  projects, consulting engagements and        │    │
│  │  selected full-time opportunities.           │    │
│  │                                              │    │
│  │  If you're building something ambitious,     │    │
│  │  I'd love to hear about it.                  │    │
│  │                                              │    │
│  │     [Freelance] [Consulting]                 │    │
│  │     [Contract]   [Full Time]                 │    │
│  │         ← success variant badges              │    │
│  │                                              │    │
│  │        ┌──────────────────┐                  │    │
│  │        │   Get In Touch   │                  │    │
│  │        │   → /contact     │                  │    │
│  │        │   bg-brand-primary                  │    │
│  │        └──────────────────┘                  │    │
│  └───────────────────────────────────────────────┘    │
│              max-w-2xl, text-center                    │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/Availability.tsx`
**Container:** `mx-auto max-w-2xl text-center`

**Content (exact copies from CONTENT_STRATEGY.md):**
- Paragraph 1: "I'm currently available for freelance projects, consulting engagements and selected full-time opportunities."
- Paragraph 2: "If you're building something ambitious, I'd love to hear about it."
- Both: `text-lg leading-relaxed text-text-secondary`

**Badges:** `flex flex-wrap justify-center gap-3`, each `<Badge variant="success">` (green)
- Types: Freelance, Consulting, Contract, Full Time

**CTA Button:** `inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-8 text-base font-medium text-white transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02]`
- Links to `/contact`
- Same styling as HeroCTA primary button

---

## 11. ContactCTA

```
┌─────────────────────────────────────────────────────┐
│  ───── border-t border-white/[0.05]                  │
│              py-12 (48px) / md:py-16 (64px)         │
│                                                       │
│  ┌─────────────────────────────────────────────┐    │
│  │            Let's Build Something Great       │    │
│  │         text-4xl md:text-5xl, font-bold      │    │
│  │              text-text-primary                │    │
│  │                                               │    │
│  │  Whether you need help building a product,   │    │
│  │  improving performance or solving complex    │    │
│  │  technical challenges, let's start a         │    │
│  │  conversation.                               │    │
│  │         text-lg, text-text-secondary          │    │
│  │              mt-4 (16px above)                │    │
│  │                                               │    │
│  │        ┌──────────────────┐                   │    │
│  │        │   Get In Touch   │                   │    │
│  │        │   → /contact     │                   │    │
│  │        │   mt-8 (32px)   │                   │    │
│  │        └──────────────────┘                   │    │
│  │      max-w-2xl, text-center, mx-auto           │    │
│  └─────────────────────────────────────────────┘    │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Path:** `src/components/sections/ContactCTA.tsx`
**Section:** `id="contact" border-t border-white/[0.05] bg-bg-primary py-16 md:py-24 relative overflow-hidden`
- `py-16` (64px) on mobile, `py-24` (96px) on desktop
- Subtle brand glow: `h-[400px] w-[600px] rounded-full bg-brand-primary/5 blur-[120px]` centered behind content
- Content has `relative z-10` to sit above glow
- No `<Section>` wrapper (uses raw `<section>` + `<Container>`)

**Content inner:** `mx-auto max-w-2xl text-center`

**Heading:** `<h2 className="text-4xl font-bold text-text-primary md:text-5xl">`
- Mobile: `text-4xl` (36px)
- Desktop: `md:text-5xl` (48px)
- No `mt-*` (first element)

**Paragraph:** `mt-4 text-lg leading-relaxed text-text-secondary`

**CTA:** Same styling as Availability CTA — `h-[52px]`, `rounded-[12px]`, `bg-brand-primary`, hover scale effect. Links to `/contact`.

---

## Shared Components Reference

### Section (`src/components/ui/Section.tsx`)
```
Props: { eyebrow?, heading, subheading?, children, className?, id? }

<section className="py-8 md:py-12">
  {eyebrow && <p className="mb-2 text-sm uppercase tracking-[0.2em] text-brand-primary" />}
  <h2 className="text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl" />
  {subheading && <p className="mt-4 max-w-2xl text-lg text-text-secondary md:text-xl" />}
  <div className="mt-8">{children}</div>
</section>
```

### Container (`src/components/ui/Container.tsx`)
```
Props: { variant?: 'site'|'content'|'reading', children, className? }
- site: max-w-[1440px]
- content: max-w-[1200px]  (DEFAULT)
- reading: max-w-[760px]

<div className="mx-auto w-full px-4" />  (100% width, centered, 16px side padding)
```

### Card (`src/components/ui/Card.tsx`)
```
Props: { variant?: 'default'|'interactive', children, className?, as?: 'div'|'article'|'section' }
- default: bg-surface-1 border border-white/[0.05]
- interactive: same + hover:-translate-y-1 transition-all duration-300 hover:border-white/[0.1]

<div className="rounded-[20px] p-6" />
```

### Badge (`src/components/ui/Badge.tsx`)
```
Props: { variant?: 'default'|'brand'|'success'|'warning'|'error', children, className? }
- default: bg-surface-2 text-text-secondary
- brand: bg-brand-primary/10 text-brand-primary (orange)
- success: bg-success/10 text-success (green)
- warning: bg-warning/10 text-warning (amber)
- error: bg-error/10 text-error (red)

<span className="rounded-full px-3 py-1 text-xs font-medium" />
```

### Button (`src/components/ui/Button.tsx`)
```
Props: { variant?: 'primary'|'secondary'|'ghost', size?: 'default'|'sm', children, className?, ...button attrs }
- primary: bg-brand-primary text-white hover:bg-brand-hover hover:scale-[1.02]
- secondary: border border-white/20 text-white hover:bg-surface-1
- ghost: text-text-secondary hover:text-text-primary
- default size: h-[52px] px-4 text-base
- sm size: h-10 px-3 text-sm

<button className="rounded-[12px] font-medium transition-all duration-200" />
```

### Reveal (`src/components/animations/Reveal.tsx`)
```
Props: { children, className?, as?, delay?, duration?, y? }
GSAP from({ y, opacity: 0 }) → to({ y: 0, opacity: 1 })
Default: y=20, duration=0.5s, delay=0, power3.out
```

**Used on:** Section headings and key content blocks for entrance animations.

---

## Design Tokens (from `src/styles/tokens.css`)

| Token | Value |
|-------|-------|
| `--color-brand-primary` | `#FD5735` |
| `--color-bg-primary` | `#0A0A0A` |
| `--color-surface-1` | `#111111` |
| `--color-surface-2` | `#171717` |
| `--color-surface-3` | `#1F1F1F` |
| `--color-text-primary` | `#FFFFFF` |
| `--color-text-secondary` | `#A1A1AA` |
| `--color-text-muted` | `#71717A` |
| `--color-success` | `#22C55E` |

---

## Animation Summary

| Section | Animation | Details |
|---------|-----------|---------|
| Hero — Eyebrow | GSAP fade-up | y:20, 0.3s, delay 0.2s |
| Hero — Headline | GSAP word stagger | y:40, 0.8s, stagger 0.08s |
| Hero — Subheadline | GSAP fade-up | y:20, 0.5s, delay 0.5s |
| Hero — CTA buttons | GSAP stagger | y:20, 0.4s, stagger 0.1s, delay 0.8s |
| Hero — AvailabilityBadge | GSAP fade | opacity, 0.3s, delay 1.1s |
| Hero — TrustRow | GSAP fade-up | y:10, 0.4s, delay 1.3s |
| Hero — GradientMesh | CSS gradient cycle | 25s cycle (continuous) |
| Hero — Portrait | Mouse parallax | displacement/30, 0.6s power2.out |
| Hero — ScrollIndicator | GSAP pulse | opacity 0.4↔1, yoyo infinite, 1.5s, delay 1.8s |
| TrustBar | GSAP count-up | ScrollTrigger, 1.2s, top 85% |
| CompanyMarquee | GSAP infinite scroll | 30s loop, pauses on hover |
| Testimonials | GSAP auto-scroll | 20s loop, pauses on hover |

---

## Placeholder Content Policy

Sections with temporary placeholder content must clearly label it:
- **WritingInsights:** "Placeholder Content" badge (default variant) on each card
- **OpenSource:** "Placeholder Content" badge (default variant) on each card
- **Testimonials:** "Coming Soon" badge (default variant) on each card

No fake testimonials, metrics, GitHub stats, or blog content is ever created.
