# Hero Section Design

## Overview

Build the Hero section for milinds.dev v2 homepage. This is the first section of the homepage redesign, chosen for highest visibility and conversion impact.

**Source documents:** ARCHITECTURE.md (Section 8), CONTENT_STRATEGY.md (Homepage > Hero), ANIMATION_SPEC.md, STYLEGUIDE.md

---

## Layout

### Desktop (≥1024px)
- `min-height: 90svh`, bg `--color-bg-primary` (#0A0A0A)
- Two-column: left content (60%) + right portrait (40%)
- Content left-aligned, generous padding
- Animated gradient mesh spans full background
- Very light noise texture overlay

### Tablet (768-1023px)
- Two-column: left content + medium portrait on right
- Portrait size reduced proportionally

### Mobile (<768px)
- Single column stacked layout
- Order: Headline → Subheadline → CTAs → Badge → Trust Row → Metrics → Portrait
- Portrait small, below all content
- No mouse parallax

---

## Background

### Gradient Mesh
- CSS gradient with orange (`#FD5735`) at low opacity (5-10%)
- Very slow GSAP animation cycling position (20-30s cycle)
- No WebGL, no particles
- Think Linear/Stripe/Vercel, not crypto websites

### Noise Texture
- Very subtle CSS noise texture
- Opacity < 3% — imperceptible but adds depth

---

## Content (from CONTENT_STRATEGY.md)

| Element | Value |
|---|---|
| Eyebrow | FULL STACK DEVELOPER |
| Headline | Building high-performance fintech, e-commerce and SaaS products used by millions of users. |
| Subheadline | I'm Milind Sonawane, a Full Stack Developer with 6+ years of experience... |
| Primary CTA | View Case Studies |
| Secondary CTA | Download Resume |
| Badge | Available for Select Projects |
| Trust Row | Worked With — HDFC Sky · Angel One · Kapiva · Atomberg |
| Metrics | 6+ Years Experience · 50+ Projects Delivered · Millions of Users Reached |
| Scroll | Scroll to Explore (very subtle, bottom of hero) |

### Styling

**Eyebrow:** `text-sm font-medium uppercase tracking-[0.2em] text-brand-primary`
**Headline:** `text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-tight`
**Subheadline:** `text-lg md:text-xl text-text-secondary max-w-2xl`
**Primary CTA:** brand button with magnetic effect, links to `/projects`
**Secondary CTA:** ghost button (no magnetic), downloads resume
**Badge:** Green pulse dot + "Available for Select Projects"
**Trust Row:** "Worked With" label + company names in `text-text-muted text-sm`
**Metrics:** 3 stat items inline, static (no animation), `text-text-secondary`
**Scroll Indicator:** Tiny animated text at bottom, fade in after sequence

---

## Portrait

- Professional developer headshot
- `rounded-3xl` container (not circular)
- Soft shadow (`shadow-2xl`)
- Subtle parallax on mouse move (desktop only, max 15px)
- Image at `/public/assets/images/portrait.jpg` (AVIF/WebP)
- Desktop: large (~400px), Tablet: medium (~280px), Mobile: small (~200px)

---

## Animations

### Dependencies
- `gsap` — text reveal, gradient, magnetic button
- No SplitText (manual word splitting)
- No Framer Motion for this section

### Entrance Sequence
1. Gradient mesh begins animating (immediate, 20-30s cycle)
2. Eyebrow slides up (0.3s, delay 0.2s)
3. Headline reveals word-by-word (0.8s, stagger 0.08s)
4. Subheadline fades up (0.5s, delay 0.3s)
5. CTAs stagger in (0.4s, stagger 0.1s, delay 0.2s)
6. Badge fades in (0.3s, delay 0.2s)
7. Trust row + Metrics fade in together (0.4s, delay 0.3s)
8. Scroll indicator fades in (0.3s, delay 0.5s)

### Text Reveal
- Manual `text.split(" ")` → wrap each word in `<span>`
- No SplitText plugin
- Screen readers: content visible in DOM before animation

### Magnetic Button
- Only on primary CTA ("View Case Studies")
- Max 10px offset
- Smooth elastic return
- Desktop only

### Portrait Parallax
- `useMousePosition` hook
- Inversely follows cursor (max 15px)
- Desktop only

### Gradient
- `background-position` cycle, 20-30s duration
- `yoyo: true`, `ease: 'sine.inOut'`

### Accessibility
- `prefers-reduced-motion`: all animations become instant fade-in
- `aria-hidden` on decorative elements
- Content visible to screen readers immediately
- Keyboard: all CTAs focusable

---

## Component Architecture

```
src/components/sections/
└── HeroSection.tsx                    # Orchestrator

src/components/sections/hero/
├── Eyebrow.tsx                        # FULL STACK DEVELOPER
├── Headline.tsx                       # Word-by-word reveal
├── Subheadline.tsx                    # Supporting text
├── HeroCTA.tsx                        # Primary (magnetic) + secondary CTA
├── Portrait.tsx                       # Parallax photo
├── AvailabilityBadge.tsx              # Green dot + status
├── TrustRow.tsx                       # Worked With company list
├── HeroMetrics.tsx                    # 3 static stat items
└── ScrollIndicator.tsx                # Subtle "Scroll to Explore"

src/components/animations/
├── GradientMesh.tsx                   # Animated gradient bg
├── Reveal.tsx                         # Reusable entrance wrapper
└── MagneticButton.tsx                 # Magnetic hover effect
```

---

## Mobile Behavior

| Feature | Desktop | Tablet | Mobile |
|---|---|---|---|
| Portrait | Large, parallax | Medium | Small, below all content |
| Text reveal | Word-by-word | Word-by-word | Faster fade |
| Magnetic | Primary CTA only | Disabled | Disabled |
| Gradient | Full width | Full width | Full width |
| Layout | Two-column | Two-column | Stacked |
| Height | 90svh | 90svh | Auto |

---

## Files to Create

| File | Purpose |
|---|---|
| `src/hooks/useMousePosition.ts` | Mouse tracker |
| `src/components/animations/GradientMesh.tsx` | Animated gradient bg |
| `src/components/animations/Reveal.tsx` | Reusable entrance animation |
| `src/components/animations/MagneticButton.tsx` | Magnetic hover effect |
| `src/components/sections/HeroSection.tsx` | Main orchestrator |
| `src/components/sections/hero/Eyebrow.tsx` | Eyebrow text |
| `src/components/sections/hero/Headline.tsx` | Word reveal headline |
| `src/components/sections/hero/Subheadline.tsx` | Subheadline text |
| `src/components/sections/hero/HeroCTA.tsx` | CTA buttons |
| `src/components/sections/hero/Portrait.tsx` | Parallax portrait |
| `src/components/sections/hero/AvailabilityBadge.tsx` | Status badge |
| `src/components/sections/hero/TrustRow.tsx` | Company trust row |
| `src/components/sections/hero/HeroMetrics.tsx` | Static metrics |
| `src/components/sections/hero/ScrollIndicator.tsx` | Scroll indicator |

## Files to Modify

| File | Changes |
|---|---|
| `src/app/page.tsx` | Replace with HeroSection |

## Dependencies

```
npm install gsap
```

---

## Verification

1. `npm run check-types` — no errors
2. `npm run lint` — no errors
3. `npm run build` — passes
4. Hero renders at 90svh on desktop
5. Content matches CONTENT_STRATEGY.md verbatim
6. Animations play on desktop, respect reduced-motion
7. Portrait visible at all breakpoints (sizes vary)
8. Magnetic only on primary CTA
9. Trust row + metrics visible without animation delay
10. Scroll indicator appears at bottom of hero
11. Gradient animation is subtle, slow (20-30s cycle)
12. Mobile layout is stacked: headline → CTA → badge → trust → metrics → portrait
