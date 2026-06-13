# Premium Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate milinds.dev from a well-structured Tailwind portfolio to a premium 2026 portfolio with distinctive section identity, refined interactions, and scroll storytelling.

**Architecture:** 4 sequential phases. Phase 1 fixes bugs and layout (CTA, alignment, nav, footer, scrollbar). Phase 2 adds visual identity (hero upgrade, hover system, section backgrounds). Phase 3 adds interaction layer (custom cursor, signature moments). Phase 4 adds scroll experience (section progress, scroll storytelling). Each phase is independently verifiable and builds on the prior one.

**Tech Stack:** Next.js 15 (App Router, static export), Tailwind CSS v4, GSAP + ScrollTrigger (installed), no new dependencies.

**Spec:** `docs/superpowers/specs/2026-06-13-premium-refinement-design.md`

---

## File Structure

### New Files
- `src/components/layout/FloatingNav.tsx` — floating pill navigation, visible from load, morphs on scroll
- `src/components/animations/CustomCursor.tsx` — custom cursor with contextual labels
- `src/components/layout/SectionProgress.tsx` — vertical section progress indicator (desktop)
- `src/hooks/useScrollStory.ts` — ScrollStoryProvider managing sequential reveals + progress bar

### Modified Files
- `src/styles/global.css` — scrollbar styles, cursor hide, background utilities, section background classes
- `src/components/ui/Section.tsx` — explicit `text-left` on heading
- `src/components/ui/Card.tsx` — enhanced interactive variant (glow, bg shift, scale)
- `src/components/sections/hero/HeroCTA.tsx` — secondary CTA gets subtle glass bg
- `src/components/sections/CompanyMarquee.tsx` — heading left-aligned
- `src/components/sections/CareerJourney.tsx` — heading/call-to-action left-aligned, animated beam, timeline node fill
- `src/components/sections/WritingInsights.tsx` — heading/call-to-action left-aligned, reading time badge, noise bg
- `src/components/sections/Availability.tsx` — remove text-center wrapper
- `src/components/sections/ContactCTA.tsx` — use Section component, left-aligned, scale-in animation
- `src/components/layout/Footer.tsx` — complete 4-column redesign
- `src/app/AppShell.tsx` — FloatingNav replaces header, mount CustomCursor + SectionProgress
- `src/components/sections/HeroSection.tsx` — min-h-[90svh], grid overlay, gradient blobs, orange glow, ScrollTrigger entrance
- `src/components/sections/hero/Portrait.tsx` — glow shadow
- `src/components/sections/TrustBar.tsx` — grid background pattern
- `src/components/sections/FeaturedCaseStudies.tsx` — radial glow bg, card tilt
- `src/components/sections/TechnologyStack.tsx` — 3-4 floating particles
- `src/components/sections/LabsExperiments.tsx` — dot grid bg
- `src/components/sections/Testimonials.tsx` — glass-morphism cards

---

## Phase 1 — Critical Fixes & Layout

### Task 1.1: Fix CTA Text Visibility

**Files:**
- Modify: `src/components/sections/hero/HeroCTA.tsx:30-41`
- Audit: `src/components/sections/Availability.tsx`, `src/components/sections/ContactCTA.tsx`

- [ ] **Step 1: Add glass background to secondary CTA**

```tsx
// In HeroCTA.tsx, update the secondary "Download Resume" link:
<a
  href="/assets/resume.pdf"
  className="inline-flex h-[52px] items-center justify-center rounded-[12px] border border-white/20 bg-white/[3%] px-6 text-base font-medium text-text-primary backdrop-blur-sm transition-colors hover:bg-surface-1"
>
  Download Resume
</a>
```

- [ ] **Step 2: Verify all CTA buttons have proper contrast**

Audit every CTA across the site. All already use `text-white` on `bg-brand-primary` (#FD5735) — acceptable contrast. The secondary CTA was the only one at risk (white text on transparent background over gradient mesh). Fixed by adding `bg-white/[3%]` + `backdrop-blur-sm`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/hero/HeroCTA.tsx
git commit -m "fix: add glass background to secondary CTA for contrast against gradient mesh"
```

---

### Task 1.2: Fix Section Heading Alignment

**Files:**
- Modify: `src/components/ui/Section.tsx:18` — add `text-left`
- Modify: `src/components/sections/CompanyMarquee.tsx` — left-align heading `<p>`
- Modify: `src/components/sections/CareerJourney.tsx` — remove `text-center` from bottom link
- Modify: `src/components/sections/WritingInsights.tsx` — remove `text-center` from bottom link
- Modify: `src/components/sections/Availability.tsx` — remove `text-center` wrapper
- Modify: `src/components/sections/ContactCTA.tsx` — rewrite to use Section component

- [ ] **Step 1: Add `text-left` to Section heading**

```tsx
// Section.tsx line 18 (change className to include text-left)
<h2 className="text-left text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
  {heading}
</h2>
```

- [ ] **Step 2: Left-align CompanyMarquee heading**

```tsx
// In CompanyMarquee.tsx, find the heading paragraph and change:
<p className="mb-8 text-left text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
  Worked With
</p>
```

- [ ] **Step 3: Remove center alignment from CareerJourney bottom link**

```tsx
// In CareerJourney.tsx, change:
// from: <div className="mt-12 text-center">
// to:
<div className="mt-12">
  <Link href="/timeline" className="...">
    View Full Timeline &rarr;
  </Link>
</div>
```

- [ ] **Step 4: Remove center alignment from WritingInsights bottom link**

```tsx
// In WritingInsights.tsx, change:
// from: <div className="mt-12 text-center">
// to:
<div className="mt-12">
  <Link href="/writing" className="...">
    View All Articles &rarr;
  </Link>
</div>
```

- [ ] **Step 5: Remove text-center wrapper from Availability**

```tsx
// In Availability.tsx, change:
// from: <div className="mx-auto max-w-2xl text-center">
// to:
<div className="max-w-2xl">
```

- [ ] **Step 6: Rewrite ContactCTA to use Section component**

```tsx
// ContactCTA.tsx — replace whole file:
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        scale: 0.95,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.05] bg-bg-primary py-16 md:py-24">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[600px] rounded-full bg-brand-primary/5 blur-[120px]" />
      </div>
      <Container>
        <div ref={ref} className="relative z-10">
          <Section heading="Let&apos;s Build Something Great" subheading="Whether you need help building a product, improving performance or solving complex technical challenges, let&apos;s start a conversation.">
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-8 text-base font-medium text-white transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02]"
              >
                Get In Touch
              </Link>
            </div>
          </Section>
        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;
```

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/Section.tsx src/components/sections/CompanyMarquee.tsx src/components/sections/CareerJourney.tsx src/components/sections/WritingInsights.tsx src/components/sections/Availability.tsx src/components/sections/ContactCTA.tsx
git commit -m "fix: enforce Option A left-aligned headings across all sections"
```

---

### Task 1.3: Build Floating Pill Navigation

**Files:**
- Create: `src/components/layout/FloatingNav.tsx`
- Modify: `src/app/AppShell.tsx` — replace header with FloatingNav
- Modify: `src/styles/global.css` — remove old navbar styles

- [ ] **Step 1: Create FloatingNav component**

```tsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import Logo from '@/components/svg/Logo';

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

function FloatingNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.to(nav, {
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(24px)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: '80px',
          end: '81px',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed left-1/2 top-4 z-100 flex h-14 w-[calc(100%-32px)] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-[999px] border border-transparent bg-transparent px-6 transition-colors duration-300"
    >
      <div className="site-logo rounded-full">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === href
                ? 'text-brand-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        className="flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-5 bg-text-primary transition-transform duration-200 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
        <span className={`h-0.5 w-5 bg-text-primary transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-5 bg-text-primary transition-transform duration-200 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
      </button>
    </header>
  );
}

export default FloatingNav;
```

- [ ] **Step 2: Update AppShell**

```tsx
// AppShell.tsx — full file replace:
'use client';

import Footer from '@/components/layout/Footer';
import FloatingNav from '@/components/layout/FloatingNav';

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FloatingNav />
      <main className="mx-auto mt-20 px-4 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}

export default AppShell;
```

- [ ] **Step 3: Update global.css — remove old navbar styles, keep new floating nav minimal**

```css
/* Remove or comment out these blocks from global.css: */
/* 
.desk-navbar { ... }
@media (min-width: 768px) { .desk-navbar.scrolled { ... } }
.navbar { ... }
*/
```

Add at the bottom:

```css
/* Floating nav */
@media (max-width: 767px) {
  header[class*="rounded-\\[999px\\]"] {
    width: calc(100% - 16px);
    top: 8px;
  }
}
```

- [ ] **Step 4: Run build to verify**

```bash
npm run build
# Expected: no errors
```

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/FloatingNav.tsx src/app/AppShell.tsx src/styles/global.css
git commit -m "feat: replace nav with floating pill nav that morphs on scroll"
```

---

### Task 1.4: Redesign Footer (4-Column)

**Files:**
- Modify: `src/components/layout/Footer.tsx` — full rewrite

- [ ] **Step 1: Rewrite Footer**

```tsx
import Link from 'next/link';
import { SiteConfig } from '@/constants';

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: SiteConfig.social.github, label: 'GitHub' },
  { href: SiteConfig.social.linkedin, label: 'LinkedIn' },
  { href: `mailto:${SiteConfig.email}`, label: 'Email' },
];

const resourceLinks = [
  { href: '/assets/resume.pdf', label: 'Resume' },
  { href: '/uses', label: 'Uses' },
  { href: '/now', label: 'Now' },
  { href: '/experiments', label: 'Lab' },
];

function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Column 1: Logo + Bio */}
          <div>
            <p className="text-lg font-semibold text-text-primary">
              {SiteConfig.title}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {SiteConfig.tagline}
            </p>
            <p className="mt-8 text-xs text-text-muted">
              {SiteConfig.copyright}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Resources
            </p>
            <ul className="space-y-3">
              {resourceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

- [ ] **Step 2: Run build to verify**

```bash
npm run build
# Expected: no errors
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: redesign footer to 4-column layout with Navigate, Connect, Resources"
```

---

### Task 1.5: Custom Scrollbar CSS

**Files:**
- Modify: `src/styles/global.css` — update scrollbar styles

- [ ] **Step 1: Replace existing scrollbar CSS in global.css**

Find and replace the existing scrollbar styles (lines 39-56):

```css
html {
  scrollbar-width: thin;
  scrollbar-color: #FD5735 #111111;
}

html::-webkit-scrollbar {
  width: 8px;
}

html::-webkit-scrollbar-track {
  background: #111111;
}

html::-webkit-scrollbar-thumb {
  background-color: #FD5735;
  border-radius: 999px;
}

html::-webkit-scrollbar-thumb:hover {
  background-color: #FF6B4A;
}
```

- [ ] **Step 2: Verify**

```bash
npm run build
# Expected: no errors
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: custom branded scrollbar with orange thumb on dark track"
```

---

## Phase 2 — Visual Identity

### Task 2.1: Hero Visual Upgrade

**Files:**
- Modify: `src/components/sections/HeroSection.tsx` — add `min-h-[90svh]`, grid, blobs, glow, ScrollTrigger entrance
- Modify: `src/components/sections/hero/Portrait.tsx` — add glow shadow

- [ ] **Step 1: Add grid overlay and gradient blobs to HeroSection**

```tsx
// Add to HeroSection.tsx, inside the <section> tag, before the content div:
<section
  id="hero"
  className="relative min-h-[90svh] overflow-hidden py-12"
>
  {/* Grid overlay */}
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 40px)',
      backgroundSize: '40px 40px',
    }}
  />

  {/* Orange glow behind headline */}
  <div
    className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
    style={{
      width: '600px',
      height: '400px',
      background: 'radial-gradient(ellipse, rgba(253,87,53,0.15), transparent 70%)',
    }}
  />

  {/* Gradient blobs */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 animate-blob-float rounded-full bg-brand-primary/10 blur-[80px]" />
  <div className="pointer-events-none absolute -bottom-32 -left-32 h-48 w-48 animate-blob-float rounded-full bg-accent/10 blur-[80px]" style={{ animationDelay: '-7s' }} />
```

Add keyframes to the bottom of the file or in global.css:

```css
@keyframes blob-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

.animate-blob-float {
  animation: blob-float 20s ease-in-out infinite;
}
```

- [ ] **Step 2: Add glow shadow to Portrait component**

```tsx
// In Portrait.tsx, add to the portrait container:
<div className="relative rounded-3xl shadow-[0_0_60px_rgba(253,87,53,0.15)]">
  <Image
    src="/assets/images/portrait.jpg"
    alt="Milind Sonawane"
    width={400}
    height={500}
    className="rounded-3xl"
    priority
  />
</div>
```

- [ ] **Step 3: Run build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/components/sections/hero/Portrait.tsx src/styles/global.css
git commit -m "feat: hero visual upgrade with min-h-[90svh], grid overlay, orange glow, gradient blobs, portrait aura"
```

---

### Task 2.2: Card Hover System Enhancement

**Files:**
- Modify: `src/components/ui/Card.tsx` — enhanced interactive variant

- [ ] **Step 1: Update Card interactive variant**

```tsx
// Card.tsx — full file:
type CardVariant = 'default' | 'interactive';

type CardProps = {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
};

const variantStyles: Record<CardVariant, string> = {
  default:
    'bg-surface-1 border border-white/[0.05]',
  interactive:
    'bg-surface-1 border border-white/[0.05] hover:-translate-y-[2px] hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(253,87,53,0.3)] hover:bg-surface-2',
};

function Card({
  variant = 'default',
  children,
  className = '',
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={`rounded-[20px] p-6 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Card;
```

- [ ] **Step 2: Run build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Card.tsx
git commit -m "feat: enhance card hover with brand glow border, bg shift, subtle scale"
```

---

### Task 2.3: Section-Specific Background Treatments

**Files:**
- Modify: `src/components/sections/TrustBar.tsx` — grid pattern
- Modify: `src/components/sections/FeaturedCaseStudies.tsx` — radial glow
- Modify: `src/components/sections/CareerJourney.tsx` — animated vertical beam
- Modify: `src/components/sections/TechnologyStack.tsx` — 3-4 floating particles
- Modify: `src/components/sections/WritingInsights.tsx` — noise texture
- Modify: `src/components/sections/LabsExperiments.tsx` — dot grid
- Modify: `src/components/sections/Testimonials.tsx` — glass cards
- Modify: `src/components/sections/Availability.tsx` — warm ambient glow
- Modify: `src/styles/global.css` — add utility classes

- [ ] **Step 1: Add background utility classes to global.css**

```css
/* Section background utilities */
.section-grid-bg {
  background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 40px);
  background-size: 40px 40px;
}

.section-radial-glow {
  background: radial-gradient(ellipse at 50% 0%, rgba(253,87,53,0.06), transparent 60%);
}

.section-beam {
  position: relative;
}

.section-beam::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, rgba(253,87,53,0.15), transparent);
  animation: beam-pulse 3s ease-in-out infinite, beam-shift 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes beam-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes beam-shift {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 0% 100%; }
}

.section-noise {
  position: relative;
}

.section-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
  pointer-events: none;
}

.section-dot-grid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 32px 32px;
}

.section-ambient-glow {
  background: radial-gradient(ellipse at 50% 100%, rgba(253,87,53,0.04), transparent 60%);
}

/* Floating particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(253, 87, 53, 0.2);
  border-radius: 50%;
  pointer-events: none;
}

@keyframes float-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.particle-1 { top: 20%; left: 15%; animation: float-up 6s ease-in-out infinite; }
.particle-2 { top: 60%; right: 20%; animation: float-up 8s ease-in-out infinite 1s; }
.particle-3 { top: 30%; right: 35%; animation: float-up 7s ease-in-out infinite 2s; }
.particle-4 { top: 70%; left: 25%; animation: float-up 9s ease-in-out infinite 0.5s; }
```

- [ ] **Step 2: Apply backgrounds to sections**

```tsx
// TrustBar.tsx — add className to <section>:
<section className="section-grid-bg py-16 md:py-24">

// FeaturedCaseStudies.tsx — add className:
<section className="section-radial-glow">

// CareerJourney.tsx — add className:
<section className="section-beam">

// TechnologyStack.tsx — add particles inside section content:
<div className="particle particle-1" />
<div className="particle particle-2" />
<div className="particle particle-3" />
<div className="particle particle-4" />

// WritingInsights.tsx — add className:
<section className="section-noise">

// LabsExperiments.tsx — add className:
<section className="section-dot-grid">

// Testimonials.tsx — update Card variant or add className to cards:
// Add glass style to each testimonial card:
// className="bg-[rgba(17,17,17,0.6)] backdrop-blur-[12px] border-white/[0.05]"

// Availability.tsx — add className:
<section className="section-ambient-glow">
```

- [ ] **Step 3: Run build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css src/components/sections/TrustBar.tsx src/components/sections/FeaturedCaseStudies.tsx src/components/sections/CareerJourney.tsx src/components/sections/TechnologyStack.tsx src/components/sections/WritingInsights.tsx src/components/sections/LabsExperiments.tsx src/components/sections/Testimonials.tsx src/components/sections/Availability.tsx
git commit -m "feat: add section-specific background treatments - grid, glow, beam, particles, noise, dots, glass, ambient"
```

---

## Phase 3 — Interaction Layer

### Task 3.1: Custom Cursor

**Files:**
- Create: `src/components/animations/CustomCursor.tsx`
- Modify: `src/app/AppShell.tsx` — mount CustomCursor
- Modify: `src/styles/global.css` — hide default cursor on desktop

- [ ] **Step 1: Add cursor hide CSS to global.css**

```css
/* Custom cursor — desktop only */
@media (pointer: fine) {
  body.custom-cursor-active,
  body.custom-cursor-active * {
    cursor: none !important;
  }
}
```

- [ ] **Step 2: Create CustomCursor component**

```tsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type CursorState = 'default' | 'view' | 'visit' | 'explore' | 'drag' | 'read';

const stateConfig: Record<CursorState, { size: number; label?: string }> = {
  default: { size: 32 },
  view: { size: 48, label: 'View' },
  visit: { size: 48, label: 'Visit' },
  explore: { size: 48, label: 'Explore' },
  drag: { size: 48, label: 'Drag' },
  read: { size: 48, label: 'Read' },
};

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef<CursorState>('default');

  const updateCursor = useCallback((e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0,
      ease: 'none',
    });
    gsap.to(ringRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });
  }, []);

  const setCursorState = useCallback((state: CursorState) => {
    if (stateRef.current === state) return;
    stateRef.current = state;
    const config = stateConfig[state];

    gsap.to(ringRef.current, {
      width: config.size,
      height: config.size,
      marginLeft: -(config.size / 2),
      marginTop: -(config.size / 2),
      duration: 0.3,
      ease: 'power3.out',
    });

    if (labelRef.current) {
      gsap.to(labelRef.current, {
        opacity: config.label ? 1 : 0,
        duration: 0.2,
      });
      if (config.label) {
        labelRef.current.textContent = config.label;
      }
    }
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduces)').matches;
    if (prefersReduced) return;

    document.body.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', updateCursor);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorState | null;
      if (cursorAttr && stateConfig[cursorAttr]) {
        setCursorState(cursorAttr);
      }
    };

    const handleMouseLeave = () => setCursorState('default');

    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            node.querySelectorAll('[data-cursor]').forEach((el) => {
              el.addEventListener('mouseenter', handleMouseEnter as EventListener);
              el.addEventListener('mouseleave', handleMouseLeave);
            });
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateCursor);
      observer.disconnect();
    };
  }, [updateCursor, setCursorState]);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div
          ref={ringRef}
          className="flex items-center justify-center rounded-full border"
          style={{
            width: 32,
            height: 32,
            borderColor: 'rgba(253, 87, 53, 0.5)',
            marginLeft: -16,
            marginTop: -16,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: '#FD5735',
            }}
          />
        </div>
      </div>
      <span
        ref={labelRef}
        className="pointer-events-none fixed z-[9999] text-sm font-medium opacity-0"
        style={{ color: '#FD5735' }}
      />
    </>
  );
}

export default CustomCursor;
```

- [ ] **Step 3: Mount CustomCursor in AppShell**

```tsx
// AppShell.tsx — add import + mount:
import CustomCursor from '@/components/animations/CustomCursor';

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FloatingNav />
      <CustomCursor />
      <main className="mx-auto mt-20 px-4 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 4: Add data-cursor attributes to interactive elements**

In `FeaturedCaseStudies.tsx`, wrap case study cards with `data-cursor="view"`:

```tsx
// On the card container:
<div data-cursor="view" className="...">
```

In `CareerJourney.tsx`, add to timeline nodes:

```tsx
<div data-cursor="explore" className="timeline-node...">
```

In `WritingInsights.tsx`, add to article cards:

```tsx
<article data-cursor="read" className="...">
```

In `CompanyMarquee.tsx`, add to marquee area:

```tsx
<div data-cursor="drag" className="marquee-area...">
```

Add `data-cursor="visit"` to external links in Footer.tsx:

```tsx
<a href={href} data-cursor="visit" ...>
```

- [ ] **Step 5: Run build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/animations/CustomCursor.tsx src/app/AppShell.tsx src/styles/global.css src/components/sections/FeaturedCaseStudies.tsx src/components/sections/CareerJourney.tsx src/components/sections/WritingInsights.tsx src/components/sections/CompanyMarquee.tsx src/components/layout/Footer.tsx
git commit -m "feat: custom cursor with contextual labels (View, Visit, Explore, Drag, Read)"
```

---

### Task 3.2: Signature Moments Per Section

**Files:**
- Modify: `src/components/sections/FeaturedCaseStudies.tsx` — card tilt (GSAP)
- Modify: `src/components/sections/CareerJourney.tsx` — timeline node fill (ScrollTrigger scrub)
- Modify: `src/components/sections/TechnologyStack.tsx` — icon orbit glow (CSS)
- Modify: `src/components/sections/WritingInsights.tsx` — reading time badge slide-up (CSS)
- Modify: `src/components/sections/LabsExperiments.tsx` — card glow reveal (CSS)
- Modify: `src/components/sections/Testimonials.tsx` — active card scale (GSAP)

- [ ] **Step 1: Add card tilt to FeaturedCaseStudies**

```tsx
// In FeaturedCaseStudies.tsx, add to each case study card:
'use client';

import { useCallback, useRef } from 'react';
import gsap from 'gsap';

// Inside the card component:
const cardRef = useRef<HTMLDivElement>(null);

const handleMouseMove = useCallback((e: React.MouseEvent) => {
  const card = cardRef.current;
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  gsap.to(card, {
    rotationX: -y * 6,
    rotationY: x * 6,
    duration: 0.4,
    ease: 'power3.out',
  });
}, []);

const handleMouseLeave = useCallback(() => {
  gsap.to(cardRef.current, {
    rotationX: 0,
    rotationY: 0,
    duration: 0.4,
    ease: 'elastic.out(1, 0.3)',
  });
}, []);

// The card container:
<div
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ perspective: '1000px' }}
  className="..."
>
  {/* card content */}
</div>
```

- [ ] **Step 2: Add timeline node fill to CareerJourney**

```tsx
// In CareerJourney.tsx, add ScrollTrigger scrub to timeline nodes:
useEffect(() => {
  const ctx = gsap.context(() => {
    document.querySelectorAll('.timeline-node').forEach((node, i) => {
      gsap.fromTo(
        node.querySelector('.timeline-dot'),
        { scale: 0, background: 'transparent' },
        {
          scale: 1,
          background: '#FD5735',
          duration: 0.8,
          scrollTrigger: {
            trigger: node,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });
  });
  return () => ctx.revert();
}, []);
```

- [ ] **Step 3: Add reading time badge to WritingInsights cards**

```tsx
// In WritingInsights.tsx, wrap card content and add badge:
<article
  data-cursor="read"
  className="group relative overflow-hidden rounded-[20px] bg-surface-1 p-6 transition-all duration-300 hover:border-[rgba(253,87,53,0.3)] hover:bg-surface-2"
>
  <div className="relative z-10">
    {/* existing card content */}
  </div>
  <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-brand-primary/10 px-4 py-2 text-xs text-brand-primary transition-transform duration-300 group-hover:translate-y-0">
    5 min read
  </span>
</article>
```

- [ ] **Step 4: Add card glow reveal to LabsExperiments**

```tsx
// In LabsExperiments.tsx, add hover glow to cards:
<div className="rounded-[20px] bg-surface-1 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,87,53,0.1)] hover:brightness-110">
```

- [ ] **Step 5: Add active card scale to Testimonials**

```tsx
// In Testimonials.tsx, use GSAP to scale active card:
useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 70%',
        end: 'top 30%',
        onEnter: () => {
          cards.forEach((c, j) => {
            gsap.to(c, {
              scale: j === i ? 1.02 : 0.95,
              opacity: j === i ? 1 : 0.6,
              duration: 0.4,
            });
          });
        },
      });
    });
  });
  return () => ctx.revert();
}, []);
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/FeaturedCaseStudies.tsx src/components/sections/CareerJourney.tsx src/components/sections/WritingInsights.tsx src/components/sections/LabsExperiments.tsx src/components/sections/Testimonials.tsx
git commit -m "feat: add signature moments - card tilt, timeline fill, badge reveal, glow, active scale"
```

---

## Phase 4 — Scroll Experience

### Task 4.1: Section Progress Indicator

**Files:**
- Create: `src/components/layout/SectionProgress.tsx`
- Modify: `src/app/AppShell.tsx` — mount SectionProgress

- [ ] **Step 1: Create SectionProgress component**

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'trust', label: 'Trust Bar' },
  { id: 'clients', label: 'Selected Work' },
  { id: 'work', label: 'Case Studies' },
  { id: 'timeline', label: 'Career Journey' },
  { id: 'tech', label: 'Technology' },
  { id: 'writing', label: 'Writing' },
  { id: 'experiments', label: 'Labs' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'availability', label: 'Availability' },
  { id: 'contact', label: 'Contact' },
];

function SectionProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Track scroll position to show/hide progress
      ScrollTrigger.create({
        trigger: document.body,
        start: '100px',
        onToggle: (self) => setVisible(self.isActive),
      });

      // Track active section
      SECTIONS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <div className="relative flex flex-col items-center gap-3">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.08]" />

        {SECTIONS.map(({ id, label }, i) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex h-3 w-3 items-center justify-center"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'h-2 w-2 bg-brand-primary' : 'bg-white/20'
              }`}
            />
            <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-surface-2 px-2 py-1 text-xs text-text-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default SectionProgress;
```

- [ ] **Step 2: Mount in AppShell**

```tsx
// AppShell.tsx — add import + mount:
import SectionProgress from '@/components/layout/SectionProgress';

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FloatingNav />
      <CustomCursor />
      <SectionProgress />
      <main className="mx-auto mt-20 px-4 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/SectionProgress.tsx src/app/AppShell.tsx
git commit -m "feat: add homepage section progress indicator with labeled dots"
```

---

### Task 4.2: Scroll Storytelling

**Files:**
- Create: `src/hooks/useScrollStory.ts`
- Modify: `src/components/sections/HeroSection.tsx` — add ScrollTrigger entrance
- Modify: `src/components/sections/ContactCTA.tsx` — verify scale-in animation (already done in Task 1.2)

- [ ] **Step 1: Create useScrollStory hook**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ScrollStoryOptions = {
  trigger: string | Element;
  stagger?: number;
  duration?: number;
  y?: number;
  start?: string;
};

export function useScrollStory({
  trigger,
  stagger = 0.08,
  duration = 0.8,
  y = 40,
  start = 'top 85%',
}: ScrollStoryOptions) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const children = el.children;
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: Math.min(stagger, 0.12),
          ease: 'power4.out',
          scrollTrigger: {
            trigger: typeof trigger === 'string' ? trigger : trigger,
            start,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [trigger, stagger, duration, y, start]);

  return ref;
}
```

- [ ] **Step 2: Apply scroll storytelling to HeroSection**

```tsx
// In HeroSection.tsx, add the hook:
import { useScrollStory } from '@/hooks/useScrollStory';

// In the component:
const storyRef = useScrollStory({
  trigger: '#hero',
  stagger: 0.1,
});

// Wrap the hero content div:
<div ref={storyRef} className="flex flex-col items-center gap-8 lg:flex-row">
  {/* existing content */}
</div>
```

- [ ] **Step 3: Apply to other sections as needed**

Each section's content grid/children should use the `useScrollStory` hook or a data attribute approach. For simplicity, the Section component's children container can be targeted:

```tsx
// In each section component, add a className to the content wrapper:
<div className="scroll-reveal">
  {children}
</div>
```

Then register a global ScrollTrigger for all `.scroll-reveal` elements:

```tsx
// In a root-level effect (e.g., in AppShell or useScrollStory):
useEffect(() => {
  const ctx = gsap.context(() => {
    document.querySelectorAll('.scroll-reveal > *').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top 85%',
        },
      });
    });
  });
  return () => ctx.revert();
}, []);
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useScrollStory.ts src/components/sections/HeroSection.tsx
git commit -m "feat: add scroll storytelling with sequential section reveals"
```

---

## Full Build Verification

- [ ] **Run final verification**

```bash
npm run build
# Expected: clean build, no TypeScript or lint errors
```

- [ ] **Final commit**

```bash
git add .
git commit -m "chore: finalize premium refinement - all 4 phases complete"
```
