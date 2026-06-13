# Hero Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Hero section for milinds.dev v2 homepage with gradient background, GSAP word-by-word text reveal, magnetic primary CTA, company trust row, static metrics, parallax portrait, and scroll indicator.

**Architecture:** GSAP-powered entrance sequence orchestrated by HeroSection. Content from CONTENT_STRATEGY.md (verbatim). Design tokens from existing @theme. Animation primitives in `src/components/animations/`. All sub-components in `src/components/sections/hero/`. Portrait visible at all breakpoints (sized responsively). Stacked on mobile, two-column on desktop/tablet.

**Tech Stack:** Next.js 16.2.9, React 19.2, GSAP, Tailwind CSS v4, TypeScript

---

### Task 1: Install GSAP + Create Animation Primitives + Mouse Hook

**Files:**
- Modify: `package.json`
- Create: `src/hooks/useMousePosition.ts`
- Create: `src/components/animations/GradientMesh.tsx`
- Create: `src/components/animations/Reveal.tsx`
- Create: `src/components/animations/MagneticButton.tsx`

Note: If `src/components/animations/` does not exist, create it first.

- [ ] **Step 1: Install GSAP**

Run: `npm install gsap`

- [ ] **Step 2: Create useMousePosition hook**

Create `src/hooks/useMousePosition.ts`:

```ts
'use client';

import { useEffect, useState } from 'react';

type MousePosition = { x: number; y: number };

function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

export default useMousePosition;
```

- [ ] **Step 3: Create GradientMesh component**

Create `src/components/animations/GradientMesh.tsx`. Very slow cycle (20-30s) for premium feel:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function GradientMesh() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        backgroundPosition: '100% 100%',
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(600px circle at 20% 30%, rgba(253, 87, 53, 0.08), transparent 50%), radial-gradient(400px circle at 80% 70%, rgba(253, 87, 53, 0.04), transparent 50%)',
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
      }}
    />
  );
}

export default GradientMesh;
```

- [ ] **Step 4: Create Reveal component**

Create `src/components/animations/Reveal.tsx`:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'p';
  delay?: number;
  duration?: number;
  y?: number;
};

function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  duration = 0.5,
  y = 20,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export default Reveal;
```

- [ ] **Step 5: Create MagneticButton component**

Create `src/components/animations/MagneticButton.tsx`. Applied ONLY to primary CTA, not secondary:

```tsx
'use client';

import { useCallback, useRef } from 'react';
import gsap from 'gsap';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  [key: string]: unknown;
};

function MagneticButton({
  children,
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power3.out',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {Tag === 'a' ? (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      ) : (
        <button className={className} {...props}>
          {children}
        </button>
      )}
    </div>
  );
}

export default MagneticButton;
```

- [ ] **Step 6: Verify**

Run: `npm run check-types`
Expected: No TypeScript errors

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json src/hooks/useMousePosition.ts src/components/animations/
git commit -m "feat: install gsap, add animation primitives and mouse hook"
```

---

### Task 2: Create Hero Sub-Components

**Files:**
- Create: `src/components/sections/hero/Eyebrow.tsx`
- Create: `src/components/sections/hero/Headline.tsx`
- Create: `src/components/sections/hero/Subheadline.tsx`
- Create: `src/components/sections/hero/HeroCTA.tsx`
- Create: `src/components/sections/hero/Portrait.tsx`
- Create: `src/components/sections/hero/AvailabilityBadge.tsx`
- Create: `src/components/sections/hero/TrustRow.tsx`
- Create: `src/components/sections/hero/HeroMetrics.tsx`
- Create: `src/components/sections/hero/ScrollIndicator.tsx`

Note: If `src/components/sections/hero/` does not exist, create it first.

- [ ] **Step 1: Create Eyebrow component**

Create `src/components/sections/hero/Eyebrow.tsx`:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EYEBROW_TEXT = 'FULL STACK DEVELOPER';

function Eyebrow() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 20, opacity: 0, duration: 0.3, delay: 0.2 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={ref}
      className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-primary"
    >
      {EYEBROW_TEXT}
    </p>
  );
}

export default Eyebrow;
```

- [ ] **Step 2: Create Headline component**

Manual word split (no SplitText plugin):

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HEADLINE_TEXT =
  'Building high-performance fintech,\ne-commerce and SaaS products\nused by millions of users.';

function Headline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent || '';
    el.textContent = '';

    text.split(' ').forEach((word) => {
      const span = document.createElement('span');
      span.textContent = word + '\u00A0';
      span.style.display = 'inline-block';
      el.appendChild(span);
    });

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={ref}
      className="text-5xl font-extrabold leading-tight text-text-primary md:text-6xl lg:text-7xl"
    >
      {HEADLINE_TEXT}
    </h1>
  );
}

export default Headline;
```

- [ ] **Step 3: Create Subheadline component**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SUBHEADLINE_TEXT =
  "I'm Milind Sonawane, a Full Stack Developer with 6+ years of experience building scalable web applications, e-commerce platforms and fintech products for companies including HDFC Sky, Angel One, Kapiva and Atomberg.";

function Subheadline() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 20, opacity: 0, duration: 0.5, delay: 0.5 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={ref}
      className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
    >
      {SUBHEADLINE_TEXT}
    </p>
  );
}

export default Subheadline;
```

- [ ] **Step 4: Create HeroCTA component**

Primary CTA has magnetic effect, secondary CTA does not:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '@/components/animations/MagneticButton';

function HeroCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current?.children, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.8,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-8 flex flex-wrap gap-4">
      <MagneticButton
        as="a"
        href="/projects"
        className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-6 text-base font-medium text-white transition-colors hover:bg-brand-hover active:bg-brand-active"
      >
        View Case Studies
      </MagneticButton>
      <a
        href="/assets/resume.pdf"
        className="inline-flex h-[52px] items-center justify-center rounded-[12px] border border-white/20 px-6 text-base font-medium text-text-primary transition-colors hover:bg-surface-1"
      >
        Download Resume
      </a>
    </div>
  );
}

export default HeroCTA;
```

- [ ] **Step 5: Create Portrait component**

Responsive sizes: desktop large (~400px), tablet medium (~280px), mobile small (~200px). `rounded-3xl` container (not circular):

```tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import useMousePosition from '@/hooks/useMousePosition';

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  const handleMouseMove = () => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (mouse.x - centerX) / 30;
    const deltaY = (mouse.y - centerY) / 30;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="overflow-hidden rounded-3xl shadow-2xl max-lg:w-[280px] lg:w-[400px]"
      >
        <Image
          src="/assets/images/portrait.jpg"
          alt="Milind Sonawane"
          width={400}
          height={500}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default Portrait;
```

- [ ] **Step 6: Create AvailabilityBadge component**

Text: "Available for Select Projects":

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function AvailabilityBadge() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { opacity: 0, duration: 0.3, delay: 1.1 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-8 flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
      </span>
      <span className="text-sm text-text-secondary">Available for Select Projects</span>
    </div>
  );
}

export default AvailabilityBadge;
```

- [ ] **Step 7: Create TrustRow component**

Company trust row — "Worked With" + company names:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const COMPANIES = ['HDFC Sky', 'Angel One', 'Kapiva', 'Atomberg'];

function TrustRow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 10, opacity: 0, duration: 0.4, delay: 1.3 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-10">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
        Worked With
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {COMPANIES.map((company) => (
          <span key={company} className="text-sm font-medium text-text-secondary">
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrustRow;
```

- [ ] **Step 8: Create HeroMetrics component**

Static metrics (no animation):

```tsx
const METRICS = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: 'Millions', label: 'Users Reached' },
];

function HeroMetrics() {
  return (
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
      {METRICS.map((metric) => (
        <div key={metric.label}>
          <span className="text-lg font-bold text-text-primary">{metric.value}</span>
          <span className="ml-1.5 text-sm text-text-muted">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroMetrics;
```

- [ ] **Step 9: Create ScrollIndicator component**

Subtle animated scroll indicator at bottom of hero:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.8 });
      tl.from(ref.current, { opacity: 0, duration: 0.3 })
        .to(ref.current, { opacity: 0.4, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <span className="text-xs tracking-[0.2em] text-text-muted">
        Scroll to Explore
      </span>
    </div>
  );
}

export default ScrollIndicator;
```

- [ ] **Step 10: Verify**

Run: `npm run check-types`
Expected: No TypeScript errors

- [ ] **Step 11: Commit**

```bash
git add src/components/sections/hero/
git commit -m "feat: add all hero sub-components (eyebrow, headline, CTA, portrait, badge, trust row, metrics, scroll indicator)"
```

---

### Task 3: Create HeroSection Orchestrator + Wire into Homepage

**Files:**
- Create: `src/components/sections/HeroSection.tsx`
- Modify: `src/app/page.tsx`

Note: If `src/components/sections/` does not exist, create it first.

- [ ] **Step 1: Create HeroSection orchestrator**

Create `src/components/sections/HeroSection.tsx` — 90svh height, responsive layout with portrait visible at all breakpoints:

```tsx
'use client';

import GradientMesh from '@/components/animations/GradientMesh';
import Eyebrow from '@/components/sections/hero/Eyebrow';
import Headline from '@/components/sections/hero/Headline';
import Subheadline from '@/components/sections/hero/Subheadline';
import HeroCTA from '@/components/sections/hero/HeroCTA';
import Portrait from '@/components/sections/hero/Portrait';
import AvailabilityBadge from '@/components/sections/hero/AvailabilityBadge';
import TrustRow from '@/components/sections/hero/TrustRow';
import HeroMetrics from '@/components/sections/hero/HeroMetrics';
import ScrollIndicator from '@/components/sections/hero/ScrollIndicator';

function HeroSection() {
  return (
    <section className="relative min-h-[90svh] overflow-hidden bg-bg-primary px-4 py-20 md:px-8">
      <GradientMesh />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <Eyebrow />
          <Headline />
          <Subheadline />
          <HeroCTA />
          <AvailabilityBadge />
          <TrustRow />
          <HeroMetrics />
        </div>

        <div className="lg:flex-shrink-0">
          <Portrait />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default HeroSection;
```

- [ ] **Step 2: Update homepage**

Replace `src/app/page.tsx`:

```tsx
import HeroSection from '@/components/sections/HeroSection';

const Index = () => {
  return <HeroSection />;
};

export default Index;
```

- [ ] **Step 3: Verify**

Run: `npm run check-types`
Expected: No TypeScript errors

Run: `npm run build`
Expected: Build succeeds without errors

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/app/page.tsx
git commit -m "feat: add HeroSection orchestrator and wire into homepage"
```

---

### Task 4: Add Portrait Image

**Prerequisite:** User provides a portrait image.

- [ ] **Step 1: Add portrait image**

Place the portrait image at `public/assets/images/portrait.jpg`. Recommended: AVIF or WebP format, approximately 400x500px aspect ratio.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds, portrait image loads without errors
