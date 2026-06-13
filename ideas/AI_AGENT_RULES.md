# AI_AGENT_RULES.md

Version: 1.0

Project: milinds.dev

Purpose:

This document defines mandatory rules that all AI coding agents must follow when working on the project.

Applies to:

* ChatGPT
* Codex
* Cursor
* Claude Code
* Windsurf
* Cline
* opencode
* deepseek
* Any future AI coding assistant


Failure to follow these rules is considered a bug.

---

# Mission

The objective is to build a premium, high-performance personal portfolio platform.

Not a generic SaaS template.

Not a startup landing page.

Not an Awwwards clone.

Not a design experiment.

Every implementation decision must support:

* Clarity
* Performance
* Accessibility
* Conversion
* Maintainability

---

# Source Of Truth

Always follow:

1. ARCHITECTURE.md
2. STYLEGUIDE.md
3. ANIMATION_SPEC.md
4. CONTENT.md
5. CASE_STUDIES.md

If conflicts exist:

```txt
ARCHITECTURE.md wins.
```

---

# Never Invent Design Decisions

Do NOT create:

* New colors
* New typography scales
* New spacing systems
* New animation styles
* New shadows
* New border radii

Everything must come from STYLEGUIDE.md.

---

# Never Invent Content

Do NOT generate:

* Fake metrics
* Fake client quotes
* Fake achievements
* Fake project outcomes
* Fake years of experience

If information is missing:

```txt
USE PLACEHOLDER
```

Never hallucinate.

---

# Component Rules

All UI must be built using reusable components.

Never duplicate component logic.

---

## Bad

```tsx
<button className="...">
```

Repeated across pages.

---

## Good

```tsx
<Button />
```

Reusable component.

---

# Design System Rules

All pages must use:

```txt
Shared Components

Shared Typography

Shared Layout System

Shared Motion System
```

---

# Color Rules

Only use colors defined in:

```txt
STYLEGUIDE.md
```

---

## Forbidden

```css
color: red;
color: blue;
color: green;
```

Hardcoded colors.

---

## Allowed

```css
var(--brand-primary)
```

---

# Spacing Rules

Only use spacing tokens.

---

## Allowed

```txt
4
8
16
24
32
48
64
96
128
```

---

## Forbidden

```txt
13
27
43
71
```

Arbitrary spacing.

---

# Typography Rules

Never create custom heading sizes.

Use defined scale only.

---

# Accessibility Rules

Every component must:

* Be keyboard accessible
* Have visible focus states
* Have semantic HTML
* Support screen readers

---

# Mandatory

Buttons:

```html
<button>
```

Not divs.

---

Links:

```html
<a>
```

Not spans.

---

Forms:

Must have labels.

---

Images:

Must have alt text.

---

# Performance Rules

Performance is a feature.

---

# Forbidden

Do NOT:

* Import large libraries unnecessarily
* Use massive animation packages
* Load videos immediately
* Render hidden heavy components

---

# Required

Use:

* Lazy Loading
* Code Splitting
* Dynamic Imports

Where appropriate.

---

# Animation Rules

Always follow:

```txt
ANIMATION_SPEC.md
```

---

# Never Add

* Random GSAP timelines
* Random parallax effects
* Random hover effects
* Random page transitions

---

# Animation Philosophy

Animation must improve:

* Hierarchy
* Storytelling
* Navigation

Not decoration.

---

# Mobile Rules

Mobile is first-class.

---

Never:

```txt
Desktop First
```

Implementations.

---

Every feature must support:

```txt
Mobile

Tablet

Desktop
```

---

# Recruiter Mode Rules

Recruiter Mode is not a separate website.

It is a different presentation layer.

---

Do NOT:

* Duplicate pages
* Duplicate content

---

Instead:

* Reorder content
* Prioritize relevant sections
* Simplify navigation

---

# Client Mode Rules

Same content.

Different emphasis.

Never duplicate data.

---

# Portfolio Assistant Rules

Search must feel instant.

---

Target:

```txt
<50ms perceived response
```

---

Do not:

* Perform server-side search
* Query databases unnecessarily

Use static indexing.

---

# Dashboard Rules

Dashboard exists to show credibility.

---

Do not create:

* Fake activity
* Fake charts
* Fake metrics

---

Use real data only.

---

# Case Study Rules

Case studies are the most important content.

---

Always prioritize:

```txt
Problem

Solution

Impact
```

---

Never prioritize:

```txt
Technology

Buzzwords

Framework Lists
```

---

# Content Rules

Tone:

```txt
Professional

Technical

Human

Direct
```

---

Avoid:

```txt
Disruptive

Revolutionary

World-Class

Cutting Edge

Game Changing
```

---

# SEO Rules

Every page requires:

* Title
* Description
* Open Graph
* Canonical URL

---

Never ship pages without metadata.

---

# Code Quality Rules

Use:

```txt
TypeScript Strict Mode
```

Always.

---

Avoid:

```ts
any
```

Unless absolutely necessary.

---

# File Structure Rules

Never create random folders.

Follow:

```txt
ARCHITECTURE.md
```

Directory structure.

---

# Dependency Rules

Before adding a dependency ask:

```txt
Can this be done without a library?
```

---

If yes:

Do not install it.

---

# Error Handling Rules

Every:

* Form
* API Call
* Async Action

Must have:

```txt
Loading

Success

Error
```

States.

---

# Documentation Rules

Whenever a major feature is added:

Update relevant documentation.

---

# Definition Of Success

A feature is complete only if:

```txt
Works

Accessible

Responsive

Performant

Documented

Tested
```

---

# Golden Rule

When choosing between:

```txt
Looks Cooler
```

and

```txt
Works Better
```

Always choose:

```txt
Works Better
```

milinds.dev exists to communicate expertise, build trust and generate opportunities.

Everything else is secondary.
