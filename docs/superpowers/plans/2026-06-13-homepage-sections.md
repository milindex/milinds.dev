# Homepage Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build remaining 10 homepage sections (Trust Bar through Contact CTA) completing the v2 homepage.

**Architecture:** Each section is an independent component in `src/components/sections/`, using existing UI primitives (Section, Container, Button, Badge, Card) and animation primitives (Reveal, GSAP). Content uses exact copy from CONTENT_STRATEGY.md. Placeholder content marked with "Placeholder Content" / "Coming Soon" badges.

**Tech Stack:** Next.js App Router, Tailwind v4, GSAP (count-up, scroll-triggered animations)

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/sections/TrustBar.tsx` | Trust metrics with GSAP count-up |
| `src/components/sections/CompanyMarquee.tsx` | Auto-scroll company name marquee |
| `src/components/sections/FeaturedCaseStudies.tsx` | 3 featured project cards |
| `src/components/sections/ExperienceTimeline.tsx` | Career timeline preview |
| `src/components/sections/TechnologyStack.tsx` | Tech categories with badges |
| `src/components/sections/WritingInsights.tsx` | Blog article placeholders |
| `src/components/sections/OpenSource.tsx` | Open source placeholders |
| `src/components/sections/Testimonials.tsx` | Testimonial placeholder carousel |
| `src/components/sections/Availability.tsx` | Status + opportunity types |
| `src/components/sections/ContactCTA.tsx` | Final call-to-action |

## Files to Modify

| File | Change |
|------|--------|
| `src/app/page.tsx` | Import and render all 10 sections after HeroSection |

---

### Task 1: TrustBar — Trust metrics with GSAP count-up

**Files:**
- Create: `src/components/sections/TrustBar.tsx`

- [ ] **Step 1: Create TrustBar component**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '+', label: 'Enterprise Brands' },
  { value: 42, suffix: 'M+', label: 'Users Reached' },
];

function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counters = el.querySelectorAll<HTMLSpanElement>('[data-count]');

    const ctx = gsap.context(() => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.count);
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.2,
            ease: 'power3.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="border-t border-white/[0.05] bg-bg-primary py-8 md:py-12">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <span className="block text-4xl font-bold text-text-primary md:text-5xl">
                <span data-count={metric.value}>0</span>
                {metric.suffix}
              </span>
              <span className="mt-1 block text-sm text-text-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustBar;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/TrustBar.tsx
git commit -m "feat: add TrustBar section with GSAP count-up"
```

---

### Task 2: CompanyMarquee — Auto-scroll company name marquee

**Files:**
- Create: `src/components/sections/CompanyMarquee.tsx`

- [ ] **Step 1: Create CompanyMarquee component**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';

const COMPANIES = ['HDFC Sky', 'Angel One', 'Kapiva', 'Atomberg'];

function CompanyMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll<HTMLElement>('.marquee-item');
      const totalWidth = items[0].offsetWidth * items.length;

      gsap.set(el, { x: 0 });
      tweenRef.current = gsap.to(el, {
        x: -totalWidth,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });

      el.addEventListener('mouseenter', () => tweenRef.current?.timeScale(0));
      el.addEventListener('mouseleave', () => tweenRef.current?.timeScale(1));
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="border-t border-white/[0.05] bg-bg-primary py-8 md:py-10">
      <Container>
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-text-muted">
          Worked With
        </p>
        <div className="overflow-hidden">
          <div ref={ref} className="flex gap-12">
            {[...COMPANIES, ...COMPANIES].map((company, i) => (
              <span
                key={`${company}-${i}`}
                className="marquee-item shrink-0 text-xl font-semibold text-text-secondary md:text-2xl"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CompanyMarquee;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/CompanyMarquee.tsx
git commit -m "feat: add CompanyMarquee section with auto-scroll"
```

---

### Task 3: FeaturedCaseStudies — 3 featured project cards

**Files:**
- Create: `src/components/sections/FeaturedCaseStudies.tsx`

- [ ] **Step 1: Create FeaturedCaseStudies component**

```tsx
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const FEATURED_SLUGS = ['hdfcsky', 'angelone', 'atomberg'];

const PROJECTS = [
  {
    slug: 'hdfcsky',
    name: 'HDFC Sky',
    industry: 'Fintech',
    role: 'Tech Lead',
    technologies: ['Node.js', 'Next.js', 'Docker', 'Redis'],
    impact: [
      'Leading full-stack team for HDFC Securities trading platform',
      'Architected scalable infrastructure with Docker + Redis',
    ],
  },
  {
    slug: 'angelone',
    name: 'Angel One',
    industry: 'Fintech',
    role: 'Full Stack Developer',
    technologies: ['WordPress', 'Elasticsearch', 'AMP'],
    impact: [
      'Achieved 90+ Google PageSpeed score',
      'Implemented Elasticsearch for search and AMP pages',
    ],
  },
  {
    slug: 'atomberg',
    name: 'Atomberg 2.0',
    industry: 'E-Commerce',
    role: 'Full Stack Developer',
    technologies: ['WordPress', 'VueJS', 'Critical CSS'],
    impact: [
      'Built custom lead management system',
      'Implemented Critical CSS system for Core Web Vitals',
    ],
  },
];

function FeaturedCaseStudies() {
  return (
    <Section
      heading="Selected Work"
      subheading="A selection of projects where I helped businesses solve technical challenges, improve performance and deliver better user experiences."
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <Card variant="interactive" as="article">
                <div className="flex flex-col gap-3">
                  <Badge variant="brand">{project.industry}</Badge>
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text-muted">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <ul className="mt-2 space-y-1">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-2 text-sm font-medium text-brand-primary group-hover:underline">
                    View Case Study
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedCaseStudies;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/FeaturedCaseStudies.tsx
git commit -m "feat: add FeaturedCaseStudies section with 3 project cards"
```

---

### Task 4: ExperienceTimeline — Career timeline preview

**Files:**
- Create: `src/components/sections/ExperienceTimeline.tsx`

- [ ] **Step 1: Create ExperienceTimeline component**

```tsx
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

const ENTRIES = [
  {
    period: 'Jun 2024 - Present',
    company: 'HDFC Sky (HDFC Securities)',
    role: 'Senior Frontend Developer / Tech Lead',
    achievement: 'Leading frontend architecture and team for India\'s leading trading platform',
    technologies: ['Next.js', 'Node.js', 'Docker', 'Redis'],
  },
  {
    period: 'Jul 2018 - Jun 2024',
    company: 'Angel One',
    role: 'Full Stack Developer',
    achievement: 'Optimized website to 90+ PageSpeed score, implemented Elasticsearch',
    technologies: ['WordPress', 'Elasticsearch', 'AMP', 'Gulp'],
  },
  {
    period: 'May 2019 - Jul 2021',
    company: 'Kapiva',
    role: 'Full Stack Developer',
    achievement: 'Built custom checkout and payment gateway for BigCommerce store',
    technologies: ['VueJS', 'BigCommerce', 'NodeRED'],
  },
  {
    period: 'Feb 2020 - May 2022',
    company: 'Atomberg Technologies',
    role: 'Full Stack Developer',
    achievement: 'Revamped website with custom WordPress theme and lead management system',
    technologies: ['WordPress', 'VueJS', 'Critical CSS'],
  },
];

function ExperienceTimeline() {
  return (
    <Section heading="Experience Timeline">
      <Container>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/[0.08] md:left-1/2 md:-translate-x-px" />
          <div className="space-y-8">
            {ENTRIES.map((entry) => (
              <div
                key={entry.period}
                className="relative pl-10 md:pl-0 md:odd:pr-[52%] md:even:pl-[52%]"
              >
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-brand-primary bg-bg-primary md:left-1/2 md:-translate-x-1/2" />
                <div className="rounded-[20px] bg-surface-1 p-5 border border-white/[0.05]">
                  <p className="text-xs font-medium text-brand-primary">
                    {entry.period}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-text-primary">
                    {entry.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-text-muted">{entry.role}</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {entry.achievement}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
          >
            View Full Timeline
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default ExperienceTimeline;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/ExperienceTimeline.tsx
git commit -m "feat: add ExperienceTimeline section"
```

---

### Task 5: TechnologyStack — Tech categories grid

**Files:**
- Create: `src/components/sections/TechnologyStack.tsx`

- [ ] **Step 1: Create TechnologyStack component**

```tsx
'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

const CATEGORIES = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', years: '5+ yrs' },
      { name: 'Next.js', years: '4+ yrs' },
      { name: 'TypeScript', years: '4+ yrs' },
      { name: 'Tailwind', years: '3+ yrs' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', years: '5+ yrs' },
      { name: 'Express', years: '4+ yrs' },
      { name: 'Supabase', years: '1+ yrs' },
      { name: 'Firebase', years: '2+ yrs' },
    ],
  },
  {
    name: 'DevOps',
    items: [
      { name: 'Cloudflare', years: '3+ yrs' },
      { name: 'Docker', years: '3+ yrs' },
      { name: 'GitHub Actions', years: '3+ yrs' },
    ],
  },
  {
    name: 'CMS',
    items: [
      { name: 'WordPress', years: '6+ yrs' },
      { name: 'Headless CMS', years: '2+ yrs' },
      { name: 'MDX', years: '1+ yrs' },
    ],
  },
];

function TechnologyStack() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section
      heading="Technologies I Work With"
      subheading="A modern toolkit built around performance, scalability and long-term maintainability."
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div key={category.name}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 md:flex-col md:flex-nowrap">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Badge
                      variant={hovered === item.name ? 'brand' : 'default'}
                      className="cursor-default transition-colors"
                    >
                      {item.name}
                      {hovered === item.name && (
                        <span className="ml-2 text-[10px] opacity-70">
                          {item.years}
                        </span>
                      )}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TechnologyStack;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/TechnologyStack.tsx
git commit -m "feat: add TechnologyStack section with category grid"
```

---

### Task 6: WritingInsights — Blog placeholder cards

**Files:**
- Create: `src/components/sections/WritingInsights.tsx`

- [ ] **Step 1: Create WritingInsights component**

```tsx
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ARTICLES = [
  {
    title: 'Improving Core Web Vitals in Large Applications',
    excerpt:
      'A practical guide to identifying performance bottlenecks and implementing optimizations in large-scale web applications.',
    date: 'Coming Soon',
    category: 'Performance',
  },
  {
    title: 'Lessons From Building Fintech Products',
    excerpt:
      'Key technical and architectural lessons learned from building and scaling fintech platforms handling millions of users.',
    date: 'Coming Soon',
    category: 'Engineering',
  },
  {
    title: 'Why Performance Is a Feature',
    excerpt:
      'Why performance should be treated as a core product feature rather than an afterthought in the development process.',
    date: 'Coming Soon',
    category: 'Architecture',
  },
];

function WritingInsights() {
  return (
    <Section
      heading="Writing & Insights"
      subheading="Thoughts on engineering, architecture, performance and building products."
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <Card key={article.title} as="article">
              <div className="flex flex-col gap-3">
                <Badge variant="warning">{article.category}</Badge>
                <Badge variant="default">Placeholder Content</Badge>
                <h3 className="text-lg font-bold text-text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary">{article.excerpt}</p>
                <span className="mt-auto pt-2 text-xs text-text-muted">
                  {article.date}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default WritingInsights;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/WritingInsights.tsx
git commit -m "feat: add WritingInsights section with placeholder articles"
```

---

### Task 7: OpenSource — Open source placeholder cards

**Files:**
- Create: `src/components/sections/OpenSource.tsx`

- [ ] **Step 1: Create OpenSource component**

```tsx
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const REPOS = [
  {
    name: 'Repository Placeholder',
    description: 'A description of an open source project or tool will appear here.',
    language: 'TypeScript',
    stars: '--',
  },
  {
    name: 'Experiment Placeholder',
    description: 'A lab experiment or creative coding project will be showcased here.',
    language: 'TypeScript',
    stars: '--',
  },
  {
    name: 'Tool Placeholder',
    description: 'A developer tool or utility library will be featured here.',
    language: 'TypeScript',
    stars: '--',
  },
];

function OpenSource() {
  return (
    <Section
      heading="Open Source & Experiments"
      subheading="Projects, experiments and contributions that help me explore new technologies and ideas."
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {REPOS.map((repo) => (
            <Card key={repo.name} as="article">
              <div className="flex flex-col gap-3">
                <Badge variant="default">Placeholder Content</Badge>
                <h3 className="text-lg font-bold text-text-primary">
                  {repo.name}
                </h3>
                <p className="text-sm text-text-secondary">{repo.description}</p>
                <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-text-muted">
                  <span>{repo.language}</span>
                  <span>{repo.stars} stars</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default OpenSource;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/OpenSource.tsx
git commit -m "feat: add OpenSource section with placeholder repo cards"
```

---

### Task 8: Testimonials — Placeholder testimonial carousel

**Files:**
- Create: `src/components/sections/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials component**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const PLACEHOLDER_TESTIMONIALS = [
  {
    initials: 'PT',
    name: 'Placeholder Testimonial',
    quote:
      'This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected.',
  },
  {
    initials: 'PT',
    name: 'Placeholder Testimonial',
    quote:
      'This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected.',
  },
  {
    initials: 'PT',
    name: 'Placeholder Testimonial',
    quote:
      'This section will showcase feedback from clients, colleagues and stakeholders once testimonials are collected.',
  },
];

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.children;
    if (cards.length < 2) return;

    const ctx = gsap.context(() => {
      const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
      const totalWidth = cardWidth * (cards.length / 2);

      gsap.set(track, { x: 0 });
      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      track.addEventListener('mouseenter', () => tweenRef.current?.timeScale(0));
      track.addEventListener('mouseleave', () => tweenRef.current?.timeScale(1));
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      heading="What People Say"
      subheading="Feedback from clients, colleagues and teams I've worked with throughout my career."
    >
      <Container>
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6">
            {[...PLACEHOLDER_TESTIMONIALS, ...PLACEHOLDER_TESTIMONIALS].map(
              (item, i) => (
                <Card
                  key={i}
                  className="w-[350px] shrink-0 md:w-[400px]"
                  as="article"
                >
                  <div className="flex flex-col gap-4">
                    <Badge variant="default">Coming Soon</Badge>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-sm font-bold text-text-muted">
                        {item.initials}
                      </div>
                      <p className="text-sm font-medium text-text-primary">
                        {item.name}
                      </p>
                    </div>
                    <blockquote className="text-sm leading-relaxed text-text-secondary italic">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Testimonials.tsx
git commit -m "feat: add Testimonials section with placeholder carousel"
```

---

### Task 9: Availability — Status and opportunity types

**Files:**
- Create: `src/components/sections/Availability.tsx`

- [ ] **Step 1: Create Availability component**

```tsx
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

const OPPORTUNITIES = ['Freelance', 'Consulting', 'Contract', 'Full Time'];

function Availability() {
  return (
    <Section heading="Available For New Opportunities">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-text-secondary">
            I&apos;m currently available for freelance projects, consulting
            engagements and selected full-time opportunities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            If you&apos;re building something ambitious, I&apos;d love to hear
            about it.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {OPPORTUNITIES.map((type) => (
              <Badge key={type} variant="success">
                {type}
              </Badge>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-8 text-base font-medium text-white transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Availability;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Availability.tsx
git commit -m "feat: add Availability section with opportunity types"
```

---

### Task 10: ContactCTA — Final call-to-action

**Files:**
- Create: `src/components/sections/ContactCTA.tsx`

- [ ] **Step 1: Create ContactCTA component**

```tsx
import Link from 'next/link';
import Container from '@/components/ui/Container';

function ContactCTA() {
  return (
    <section className="border-t border-white/[0.05] bg-bg-primary py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-text-primary md:text-5xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Whether you need help building a product, improving performance or
            solving complex technical challenges, let&apos;s start a
            conversation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center justify-center rounded-[12px] bg-brand-primary px-8 text-base font-medium text-white transition-all duration-200 hover:bg-brand-hover hover:scale-[1.02]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/ContactCTA.tsx
git commit -m "feat: add ContactCTA section"
```

---

### Task 11: Update page.tsx — Wire all sections into homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update page.tsx to import and render all sections**

```tsx
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import CompanyMarquee from '@/components/sections/CompanyMarquee';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import TechnologyStack from '@/components/sections/TechnologyStack';
import WritingInsights from '@/components/sections/WritingInsights';
import OpenSource from '@/components/sections/OpenSource';
import Testimonials from '@/components/sections/Testimonials';
import Availability from '@/components/sections/Availability';
import ContactCTA from '@/components/sections/ContactCTA';

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CompanyMarquee />
      <FeaturedCaseStudies />
      <ExperienceTimeline />
      <TechnologyStack />
      <WritingInsights />
      <OpenSource />
      <Testimonials />
      <Availability />
      <ContactCTA />
    </>
  );
};

export default Index;
```

- [ ] **Step 2: Build to verify no errors**

Run: `npm run build`
Expected: Build succeeds, all types and lint pass.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire all 10 homepage sections into page.tsx"
```
