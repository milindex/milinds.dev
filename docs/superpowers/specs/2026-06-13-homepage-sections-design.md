# Homepage Sections — Trust Bar through Contact CTA

Version: 2.0
Status: Approved
Author: Milind Sonawane
Date: 2026-06-13

Source of Truth: ARCHITECTURE.md (Section 8), implementation plan
Content Source: CONTENT_STRATEGY.md
Animation Source: ANIMATION_SPEC.md

---

## Context

The homepage currently renders only `HeroSection`. 10 remaining sections must be built to complete the v2 homepage. Each section uses the existing design system foundation (Container, Section, Button, Card, Badge, tokens.css) and animation primitives (Reveal, GSAP).

---

## Homepage Structure

```
Hero (done)
Trust Bar
Company Trust Marquee
Featured Case Studies
Experience Timeline Preview
Technology Stack
Writing & Insights
Open Source & Experiments
Testimonials
Availability
Contact CTA
```

---

## Sections (in order)

### 1. Trust Bar

**Purpose:** Quick credibility boost.

**Content (from CONTENT_STRATEGY.md):**
- 6+ Years Experience
- 50+ Projects Delivered
- 4+ Enterprise Brands
- Millions of Users Reached

**Layout:** 4 centered metrics in a responsive grid (2x2 on mobile, 4 columns on md+). Each metric: large number (count-up), label below.

**Animation:** GSAP count-up on viewport enter, 1.2s duration.

**Note:** Standalone section below Hero, distinct from the subtle inline `HeroMetrics` within the Hero itself.

**Component:** `src/components/sections/TrustBar.tsx`

---

### 2. Company Trust Marquee

**Purpose:** Instant brand recognition.

**Content:**
- Heading: "Worked With"
- Companies: HDFC Sky, Angel One, Kapiva, Atomberg

**Layout:** Auto-scrolling marquee/ticker. Pause on hover. Subtle animation.

**Component:** `src/components/sections/CompanyMarquee.tsx`

---

### 3. Featured Case Studies

**Purpose:** Show strongest work. Maximum 3.

**Content:**
- Heading: "Selected Work" (from CONTENT_STRATEGY.md)
- Subheading: "A selection of projects where I helped businesses solve technical challenges..."
- 3 cards: HDFC Sky, Angel One, Atomberg (from `src/utils/Projects.ts`)

**Card content:** Project name, industry, role, technologies (Badge), impact highlights (achievements), CTA: "View Case Study" → `/projects/[slug]`

**Layout:** Responsive grid (1 col mobile, 3 cols desktop).

**Interactions:** Hover lift (-4px translateY, 1.01 scale, 200ms). Click navigates.

**Component:** `src/components/sections/FeaturedCaseStudies.tsx`

---

### 4. Experience Timeline Preview

**Purpose:** Show career progression.

**Timeline:** 2018 → 2026.

**Entry structure:** Company, Role, Achievement, Technologies.

**CTA:** "View Full Timeline" → `/timeline`

**Data:** Static inline data.

**Component:** `src/components/sections/ExperienceTimeline.tsx`

---

### 5. Technology Stack

**Purpose:** Show technical breadth.

**Content:**
- Heading: "Technologies I Work With"
- Subheading: "A modern toolkit..."

**Categories:**
- Frontend: React, Next.js, TypeScript, Tailwind
- Backend: Node.js, Express, Supabase, Firebase
- DevOps: Cloudflare, Docker, GitHub Actions
- CMS: WordPress, Headless CMS, MDX

**Layout:** 4 category columns with badge-style chips.

**Interaction:** Hover reveals years-of-experience text (e.g., "3+ yrs", placeholder initially).

**Component:** `src/components/sections/TechnologyStack.tsx`

---

### 6. Writing & Insights

**Purpose:** Build authority.

**Content:**
- Heading: "Writing & Insights"
- Subheading: "Thoughts on engineering, architecture, performance and building products."

**Articles (development placeholders, visibly labeled):**
1. "Improving Core Web Vitals in Large Applications"
2. "Lessons From Building Fintech Products"
3. "Why Performance Is a Feature"

**Badge:** "Placeholder Content" on each card.

**CTA:** "View All Articles" → `/blog`

**Component:** `src/components/sections/WritingInsights.tsx`

---

### 7. Open Source & Experiments

**Purpose:** Show technical curiosity.

**Content:**
- Heading: "Open Source & Experiments"
- Subheading: "Projects, experiments and contributions that help me explore new technologies and ideas."

**Cards (development placeholders, visibly labeled):**
- "Repository Placeholder"
- "Experiment Placeholder"
- "Tool Placeholder"

**Badge:** "Placeholder Content" on each card.

**Future:** Replace with GitHub API data + lab projects.

**Component:** `src/components/sections/OpenSource.tsx`

---

### 8. Testimonials

**Purpose:** Increase trust.

**Content:**
- Heading: "What People Say"
- Subheading: "Feedback from clients, colleagues and teams..."

**Rules:** No fake names, companies, photos, job titles, or quotes.

**Card example:**
- Avatar: "PT" placeholder initials
- Name: "Placeholder Testimonial"
- Quote: "This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected."

**Badge:** "Coming Soon"

**Layout:** Auto-scroll carousel (GSAP timeline). Pause on hover.

**Component:** `src/components/sections/Testimonials.tsx`

---

### 9. Availability

**Purpose:** Generate opportunities.

**Content:**
- Heading: "Available For New Opportunities"
- Paragraph: "I'm currently available for freelance projects, consulting engagements and selected full-time opportunities. If you're building something ambitious, I'd love to hear about it."
- Opportunity types: Freelance, Consulting, Contract, Full Time (as tags/badges)

**Component:** `src/components/sections/Availability.tsx`

---

### 10. Contact CTA

**Purpose:** Generate leads.

**Content:**
- Heading: "Let's Build Something Great"
- Paragraph: "Whether you need help building a product, improving performance or solving complex technical challenges, let's start a conversation."
- CTA: "Get In Touch" → `/contact`

**Component:** `src/components/sections/ContactCTA.tsx`

---

## Placeholder Policy

**Allowed placeholders:** Testimonials, Blog Articles, Open Source repos, Impact Metrics.

**Required label on every placeholder:** "Placeholder Content" or "Coming Soon" badge.

**Forbidden:** Never create fake testimonials, clients, metrics, GitHub stats, blog articles, or social proof.

---

## Shared Conventions

- Every section wrapped in `<Section>` + `<Container>` from `@/components/ui/`
- Section headings use appropriate sizing hierarchy
- `<Reveal>` animation wrapper on section headings and key content
- No new NPM dependencies (GSAP already installed)
- Content uses exact copy from CONTENT_STRATEGY.md — no invented copy
- PLACEHOLDER used wherever real data doesn't exist yet
- Each section is its own component in `src/components/sections/`
- `src/app/page.tsx` imports and renders all sections in order

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/sections/TrustBar.tsx` | Trust metrics with count-up |
| `src/components/sections/CompanyMarquee.tsx` | Auto-scroll company marquee |
| `src/components/sections/FeaturedCaseStudies.tsx` | 3 featured project cards |
| `src/components/sections/ExperienceTimeline.tsx` | Career timeline preview |
| `src/components/sections/TechnologyStack.tsx` | Tech categories grid |
| `src/components/sections/WritingInsights.tsx` | Blog placeholder cards |
| `src/components/sections/OpenSource.tsx` | Open source placeholder cards |
| `src/components/sections/Testimonials.tsx` | Testimonial placeholder carousel |
| `src/components/sections/Availability.tsx` | Status + opportunity types |
| `src/components/sections/ContactCTA.tsx` | Final call-to-action |

## Files to Modify

| File | Change |
|------|--------|
| `src/app/page.tsx` | Import and render all 10 new sections after HeroSection |
