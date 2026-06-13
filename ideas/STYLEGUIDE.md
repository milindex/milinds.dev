# STYLEGUIDE.md

Version: 2.0

Project: milinds.dev

---

# Design Philosophy

milinds.dev is not a traditional developer portfolio.

It should feel like a premium software product.

Inspired by:

* Modern SaaS products
* High-end developer portfolios
* Product marketing websites
* Award-winning digital experiences

The design must prioritize:

1. Clarity
2. Performance
3. Accessibility
4. Consistency
5. Conversion

Over visual complexity.

---

# Brand Identity

## Personality

Professional

Technical

Modern

Confident

Premium

Approachable

---

# Color System

## Core Brand Color

```css
--brand-primary: #FD5735;
```

This is the primary brand color.

Use for:

* Buttons
* CTAs
* Highlights
* Active States
* Key Icons

---

## Brand Hover

```css
--brand-primary-hover: #FF6B4A;
```

---

## Brand Active

```css
--brand-primary-active: #E54A28;
```

---

## Secondary Accent

```css
--accent: #60A5FA;
```

Use sparingly.

Only for:

* Data visualization
* Architecture diagrams
* Dashboard charts
* Technical indicators

Never use as a CTA color.

---

# Background Colors

## Primary Background

```css
--background: #0A0A0A;
```

Never use pure black.

---

## Surface 1

```css
--surface-1: #111111;
```

Cards.

---

## Surface 2

```css
--surface-2: #171717;
```

Elevated cards.

---

## Surface 3

```css
--surface-3: #1F1F1F;
```

Modals and overlays.

---

# Typography Colors

## Primary Text

```css
--text-primary: #FFFFFF;
```

---

## Secondary Text

```css
--text-secondary: #A1A1AA;
```

---

## Muted Text

```css
--text-muted: #71717A;
```

---

# Semantic Colors

## Success

```css
--success: #22C55E;
```

---

## Warning

```css
--warning: #F59E0B;
```

---

## Error

```css
--error: #EF4444;
```

---

# Typography

## Font Family

Headings:

```css
Inter
```

Body:

```css
Inter
```

Code:

```css
JetBrains Mono
```

---

# Font Weights

```txt
400 Regular
500 Medium
600 SemiBold
700 Bold
800 ExtraBold
```

---

# Heading Scale

## H1

```css
72px Desktop
48px Tablet
40px Mobile
```

Weight:

```css
800
```

---

## H2

```css
56px Desktop
40px Tablet
32px Mobile
```

---

## H3

```css
40px Desktop
32px Tablet
28px Mobile
```

---

## H4

```css
32px Desktop
24px Tablet
20px Mobile
```

---

# Body Scale

Large:

```css
20px
```

Default:

```css
18px
```

Small:

```css
16px
```

Caption:

```css
14px
```

---

# Layout System

## Max Width

```css
1440px
```

---

## Content Width

```css
1200px
```

---

## Reading Width

```css
760px
```

Used for:

* Blog
* Case Studies
* Documentation

---

# Spacing System

Use 8px grid.

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

Never use arbitrary spacing values.

---

# Border Radius

Small:

```css
8px
```

---

Medium:

```css
12px
```

---

Large:

```css
20px
```

---

XL:

```css
32px
```

---

# Shadows

Avoid heavy shadows.

Use subtle elevation.

```css
0 4px 24px rgba(0,0,0,0.2)
```

---

# Buttons

## Primary Button

Background:

```css
#FD5735
```

Text:

```css
#FFFFFF
```

Radius:

```css
12px
```

Height:

```css
52px
```

---

Hover:

```css
Scale 1.02
Background Brightens
```

---

# Secondary Button

Background:

```css
Transparent
```

Border:

```css
1px solid #FFFFFF20
```

---

# Ghost Button

No background.

Text only.

Used sparingly.

---

# Cards

## Standard Card

Background:

```css
var(--surface-1)
```

Border:

```css
1px solid rgba(255,255,255,0.05)
```

Radius:

```css
20px
```

---

Hover

```css
TranslateY(-4px)
```

Only.

No large lifts.

---

# Forms

## Inputs

Height:

```css
56px
```

Radius:

```css
12px
```

---

Background:

```css
#111111
```

---

Focus

```css
Brand Orange Border
```

---

# Navigation

Height:

```css
80px
```

---

Behavior

Transparent initially.

Blur on scroll.

---

# Section Structure

Every section must follow:

```txt
Eyebrow

Heading

Subheading

Content

CTA
```

---

# Icons

Style:

```txt
Outline
```

Preferred:

```txt
Lucide
```

---

# Images

Use:

```txt
AVIF
WebP
```

Only.

---

# Animations

Motion supports content.

Motion never replaces content.

---

Allowed:

```txt
Fade
Translate
Scale
Parallax
Reveal
```

---

Avoid:

```txt
Bounce
Spin
Flash
Shake
```

---

# Accessibility

Minimum contrast:

```txt
WCAG AA
```

Required.

---

Focus states:

Always visible.

---

Keyboard Navigation:

100% supported.

---

# Component Rules

Every component must:

* Be responsive
* Be accessible
* Support dark mode
* Follow spacing scale
* Follow typography scale

---

# Golden Rule

When deciding between:

Cooler Design

or

Clearer Design

Always choose:

```txt
Clearer Design
```

The portfolio exists to communicate expertise and generate opportunities.

Everything else is secondary.
