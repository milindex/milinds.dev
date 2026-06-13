# Design System Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Set up design tokens, constants, UI component library, scroll hook, and updated layout shell for milinds.dev v2.

**Architecture:** CSS-first design tokens via Tailwind v4 `@theme` block, simple React components in `src/components/ui/` and `src/components/layout/`, constants in `src/constants/`, hooks in `src/hooks/`. Does NOT include sections, animations, MDX, or page-level features — those come in later sub-projects.

**Tech Stack:** Next.js 16.2.9, React 19.2, Tailwind CSS v4, TypeScript

---

### Task 1: Design Tokens, Constants & Global Styles

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/constants/site.ts`
- Create: `src/constants/navigation.ts`
- Create: `src/constants/index.ts`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create tokens.css with @theme block**

Create `src/styles/tokens.css`:

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

- [ ] **Step 2: Create constants files**

Create `src/constants/site.ts`:

```ts
export const SiteConfig = {
  tagline: 'Building products that are fast, scalable and designed to last.',
  copyright: `© ${new Date().getFullYear()} Milind Sonawane. All rights reserved.`,
  email: 'connect@milinds.dev',
  social: {
    github: 'https://github.com/milindex',
    linkedin: 'https://www.linkedin.com/in/milindks/',
    gitlab: 'https://gitlab.com/milindks',
    twitter: 'https://twitter.com/milind2k',
    instagram: 'https://www.instagram.com/milind2k/',
  },
} as const;
```

Create `src/constants/navigation.ts`:

```ts
export const NavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;
```

Create `src/constants/index.ts`:

```ts
export { SiteConfig } from './site';
export { NavLinks } from './navigation';
```

- [ ] **Step 3: Add tokens import to global.css**

Open `src/styles/global.css`. After line 2 (`@import "tailwindcss";`), add a new line:

```css
@import "./tokens.css";
```

The file now starts with:

```css
@import url(fonts.css);
@import "tailwindcss";
@import "./tokens.css";
```

All existing styles (`.desk-navbar`, `body`, scrollbar, etc.) remain unchanged — they get cleaned up when those components are rewritten in later phases. This step only adds the import.

- [ ] **Step 4: Verify**

Run: `cd "$WORKSPACE_ROOT" && npm run check-types`
Expected: No TypeScript errors

Run: `cd "$WORKSPACE_ROOT" && npm run lint`
Expected: No ESLint errors

- [ ] **Step 5: Commit**

```bash
git add src/styles/tokens.css src/constants/ src/styles/global.css
git commit -m "feat: add design tokens, constants, update global.css"
```

---

### Task 2: Layout UI Components (Container + Section)

**Files:**
- Create: `src/components/ui/Container.tsx`
- Create: `src/components/ui/Section.tsx`
- Create: `src/components/ui/index.ts`

Note: If the directory `src/components/ui/` does not exist, create it first.

- [ ] **Step 1: Create Container component**

Create `src/components/ui/Container.tsx`:

```tsx
type ContainerVariant = 'site' | 'content' | 'reading';

type ContainerProps = {
  variant?: ContainerVariant;
  children: React.ReactNode;
  className?: string;
};

const maxWidths: Record<ContainerVariant, string> = {
  site: 'max-w-[1440px]',
  content: 'max-w-[1200px]',
  reading: 'max-w-[760px]',
};

function Container({ variant = 'content', children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 ${maxWidths[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Container;
```

- [ ] **Step 2: Create Section component**

Create `src/components/ui/Section.tsx`:

```tsx
type SectionProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Section({ eyebrow, heading, subheading, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-8 md:py-12 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 max-w-2xl text-lg text-text-secondary md:text-xl">
          {subheading}
        </p>
      )}
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}

export default Section;
```

- [ ] **Step 3: Create barrel export**

Create `src/components/ui/index.ts`:

```ts
export { default as Container } from './Container';
export { default as Section } from './Section';
```

- [ ] **Step 4: Verify**

Run: `cd "$WORKSPACE_ROOT" && npm run check-types`
Expected: No TypeScript errors

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add Container and Section layout components"
```

---

### Task 3: Interactive UI Components (Button + Badge + Card + Input)

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Input.tsx`
- Modify: `src/components/ui/index.ts`

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button.tsx`:

```tsx
import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'default' | 'sm';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-brand-hover active:bg-brand-active',
  secondary:
    'border border-white/20 text-white hover:bg-surface-1 hover:border-white/30',
  ghost:
    'text-text-secondary hover:text-text-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-[52px] px-4 text-base',
  sm: 'h-10 px-3 text-sm',
};

function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[12px] font-medium transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
```

- [ ] **Step 2: Create Badge component**

Create `src/components/ui/Badge.tsx`:

```tsx
type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'error';

type BadgeProps = {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface-2 text-text-secondary',
  brand: 'bg-brand-primary/10 text-brand-primary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
};

function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
```

- [ ] **Step 3: Create Card component**

Create `src/components/ui/Card.tsx`:

```tsx
type CardVariant = 'default' | 'interactive';

type CardProps = {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
};

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface-1 border border-white/[0.05]',
  interactive:
    'bg-surface-1 border border-white/[0.05] hover:-translate-y-1 transition-all duration-300 hover:border-white/[0.1]',
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

- [ ] **Step 4: Create Input component**

Create `src/components/ui/Input.tsx`:

```tsx
import { type InputHTMLAttributes, forwardRef } from 'react';

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-secondary"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`h-14 rounded-[12px] bg-surface-1 px-4 text-text-primary placeholder-text-muted outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-primary ${
            error ? 'ring-2 ring-error' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm text-error">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
```

- [ ] **Step 5: Update barrel export**

Update `src/components/ui/index.ts`:

```ts
export { default as Container } from './Container';
export { default as Section } from './Section';
export { default as Button } from './Button';
export { default as Badge } from './Badge';
export { default as Card } from './Card';
export { default as Input } from './Input';
```

- [ ] **Step 6: Verify**

Run: `cd "$WORKSPACE_ROOT" && npm run check-types`
Expected: No TypeScript errors

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add Button, Badge, Card, and Input components"
```

---

### Task 4: Scroll Hook + Footer Component

**Files:**
- Create: `src/hooks/useScrollPosition.ts`
- Create: `src/components/layout/Footer.tsx`

Note: If the directories `src/hooks/` or `src/components/layout/` do not exist, create them first.

- [ ] **Step 1: Create useScrollPosition hook**

Create `src/hooks/useScrollPosition.ts`:

```ts
'use client';

import { useEffect, useState } from 'react';

function useScrollPosition(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

export default useScrollPosition;
```

- [ ] **Step 2: Create Footer component**

Create `src/components/layout/Footer.tsx`:

```tsx
import { SiteConfig } from '@/constants';

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 py-12 text-center">
        <p className="text-lg text-text-secondary">
          {SiteConfig.tagline}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SiteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text-primary"
            title="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={SiteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text-primary"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={`mailto:${SiteConfig.email}`}
            className="text-text-muted transition-colors hover:text-text-primary"
            title="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>
        </div>
        <p className="text-sm text-text-muted">
          {SiteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
```

- [ ] **Step 3: Verify**

Run: `cd "$WORKSPACE_ROOT" && npm run check-types`
Expected: No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/hooks/useScrollPosition.ts src/components/layout/Footer.tsx
git commit -m "feat: add useScrollPosition hook and Footer component"
```

---

### Task 5: AppShell Updates

**Files:**
- Modify: `src/app/AppShell.tsx`

- [ ] **Step 1: Update AppShell**

Replace `src/app/AppShell.tsx`:

```tsx
'use client';

import Footer from '@/components/layout/Footer';
import Navigation from '@/components/header/navigation';
import useScrollPosition from '@/hooks/useScrollPosition';

function AppShell({ children }: { children: React.ReactNode }) {
  const isScrolled = useScrollPosition(50);

  return (
    <div>
      <header
        className={`desk-navbar flex h-20 w-full items-center justify-between shadow-md md:shadow-none${
          isScrolled ? ' scrolled' : ''
        }`}
      >
        <Navigation />
      </header>
      <main className="container z-10 mx-auto mt-[65px]">{children}</main>
      <Footer />
    </div>
  );
}

export default AppShell;
```

Key changes:
- `h-16` → `h-20` (64px → 80px nav height)
- Imports `Footer` from `@/components/layout/Footer` instead of `@/components/footer/Content`
- Imports `useScrollPosition` from `@/hooks/useScrollPosition`
- Removed `useState`/`useEffect` import (moved to hook)
- Removed `FooterContent` import (entirely)

- [ ] **Step 2: Verify**

Run: `cd "$WORKSPACE_ROOT" && npm run check-types`
Expected: No TypeScript errors

Run: `cd "$WORKSPACE_ROOT" && npm run build`
Expected: Build succeeds without errors

- [ ] **Step 3: Commit**

```bash
git add src/app/AppShell.tsx
git commit -m "refactor: update AppShell with 80px nav, new Footer, useScrollPosition hook"
```
