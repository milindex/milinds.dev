# ANIMATION_SPEC.md

Version: 2.0

Project: milinds.dev

---

# Animation Philosophy

## Purpose

Animation exists to:

* Guide attention
* Create hierarchy
* Improve storytelling
* Increase perceived quality
* Reward interaction

Animation must never:

* Hide content
* Delay information
* Reduce usability
* Hurt performance

---

# Core Principles

## Performance First

Target:

```txt id="rj6s5a"
60 FPS
```

Always.

---

## Content First

Content must remain readable even if animations fail.

---

## Accessibility First

Support:

```txt id="u8dd6z"
prefers-reduced-motion
```

For all experiences.

---

## Progressive Enhancement

Animations enhance.

Animations do not define functionality.

---

# Motion Stack

## Primary Engine

```txt id="uk8v1u"
GSAP
```

Used for:

* Timelines
* Scroll-based interactions
* Storytelling

---

## Scroll Engine

```txt id="6e7smh"
GSAP ScrollTrigger
```

Used for:

* Pinning
* Progress tracking
* Horizontal scrolling
* Timeline interactions

---

## Smooth Scrolling

```txt id="o6wq1e"
Lenis
```

Desktop only.

---

## UI Motion

```txt id="3opz1w"
Framer Motion
```

Used for:

* Modals
* Menus
* Hover states
* Small interactions

---

# Global Motion Tokens

## Duration

Fast

```txt id="ux68yi"
150ms
```

---

Normal

```txt id="k2o4j4"
300ms
```

---

Medium

```txt id="gijxmg"
500ms
```

---

Slow

```txt id="7x2tzn"
800ms
```

---

Extra Slow

```txt id="6n5v7e"
1200ms
```

---

# Easing

## Primary

```txt id="7hk5wy"
power3.out
```

---

## Entrance

```txt id="0lw7w5"
power4.out
```

---

## Exit

```txt id="7yxu25"
power2.in
```

---

## Scroll

```txt id="klx63m"
none
```

Scrubbed animations only.

---

# Reveal System

## Purpose

Default content appearance.

---

# Standard Reveal

Initial State

```css id="ykh7el"
opacity: 0;
transform: translateY(40px);
```

---

Final State

```css id="8mepqi"
opacity: 1;
transform: translateY(0);
```

---

Duration

```txt id="hgp3pj"
0.8s
```

---

# Stagger

Default

```txt id="rjlwm7"
0.08s
```

---

Maximum

```txt id="lnu7ns"
0.12s
```

---

# Heading Animation System

## Purpose

Hero and section headings.

---

# Method

Split text into:

```txt id="i4e0ot"
Lines
Words
Characters
```

---

# Hero Heading

Reveal:

```txt id="i7ikxq"
Line by line
```

---

Delay

```txt id="0t3scz"
50ms
```

between lines.

---

# Restrictions

Never animate body text by character.

---

# Image Reveal System

## Purpose

Reveal imagery elegantly.

---

# Technique

Mask Reveal.

---

Animation

```txt id="g0i71g"
Clip Path
Opacity
Scale
```

---

Scale

```txt id="n0nix4"
1.05 → 1
```

---

Duration

```txt id="81o6r5"
1.2s
```

---

# Hero Animation

## Components

```txt id="c1h05t"
Headline

Subheadline

CTA

Trust Bar

Hero Visual
```

---

# Sequence

```txt id="3n9h0s"
Headline

Subheadline

CTA

Trust Bar

Visual
```

---

# Total Duration

```txt id="pckq6i"
< 2s
```

---

# Hero Background

Allowed

```txt id="s2udf7"
Gradient Motion

Noise

Light Parallax
```

---

Forbidden

```txt id="5t9fdr"
Large Particles

WebGL Scenes

Heavy CPU Effects
```

On homepage load.

---

# Custom Cursor

## Desktop Only

Enabled:

```txt id="yv0w4x"
1024px+
```

---

Disabled:

```txt id="6t5u7q"
Mobile

Tablet
```

---

# States

Default

```txt id="o3nhm7"
Cursor
```

---

Project

```txt id="p4u6rz"
View
```

---

Case Study

```txt id="u2r4z2"
Explore
```

---

External Link

```txt id="hcmvhd"
Visit
```

---

Drag

```txt id="wm5v0n"
Drag
```

---

# Performance Rule

Use:

```css id="d5dhxk"
translate3d()
```

Only.

---

# Magnetic Button System

## Applied To

```txt id="73g8t2"
Hire Me

Resume

Book Call

Contact
```

---

# Movement

Maximum

```txt id="o0nvhy"
10px
```

---

# Restrictions

Do not apply to:

```txt id="dyb4v7"
Navigation

Forms

Small Buttons
```

---

# Card Hover System

## Purpose

Increase perceived depth.

---

# Hover Motion

Translate

```txt id="n9dkgc"
-4px
```

---

Scale

```txt id="h4w4nq"
1.01
```

---

Duration

```txt id="f4n85r"
200ms
```

---

# Prohibited

```txt id="db9c0d"
Large Tilts

Aggressive Rotations

Excessive Glow
```

---

# Parallax System

## Purpose

Create depth.

---

# Layers

Background

```txt id="ywmj2n"
0.2x
```

---

Midground

```txt id="k3nwbm"
0.5x
```

---

Foreground

```txt id="24u7hn"
1x
```

---

# Usage

Hero

Timeline

Case Studies

---

# Restriction

Maximum displacement:

```txt id="u6jz2r"
20%
```

viewport height.

---

# Scroll Storytelling

## Purpose

Premium case study experience.

---

# Components

```txt id="zgk3qn"
Pinned Sections

Progress Indicators

Architecture Walkthroughs

Metric Reveals
```

---

# Pinning

Maximum pin duration:

```txt id="wbl30z"
200vh
```

---

Avoid:

```txt id="f3qrrs"
Infinite Scroll Stories
```

---

# Horizontal Scroll

## Usage

Only:

```txt id="wtwrqg"
Timeline Explorer

Architecture Walkthroughs

Project Showcase
```

---

# Mobile

Fallback:

```txt id="l4rzbb"
Vertical Layout
```

Always.

---

# Metric Counter System

## Purpose

Show impact.

---

# Examples

```txt id="0x1p7f"
Projects

Users

Performance Gains

Years Experience
```

---

# Trigger

On viewport entry.

---

# Duration

```txt id="cjlwmr"
1.2s
```

---

# Number Format

Always readable.

Never excessive decimals.

---

# Architecture Diagram Animation

## Purpose

Guide understanding.

---

# Node States

Idle

Hover

Active

Selected

---

# Animation

```txt id="j2h4vr"
Opacity

Scale

Stroke Width
```

Only.

---

# Avoid

```txt id="1pj33v"
Rotating Nodes

Continuous Motion
```

---

# Navigation Animation

## Mobile Menu

Duration

```txt id="f1z42t"
300ms
```

---

Animation

```txt id="4d6hfx"
Slide

Fade
```

---

# Desktop Navigation

On scroll:

```txt id="sk8hfh"
Blur

Background Opacity

Shadow
```

---

# Page Transitions

## Default

Exit

```txt id="l7ylwk"
Fade Out

Blur
```

---

Enter

```txt id="vhvqkh"
Fade In

TranslateY
```

---

Duration

```txt id="2ay6dg"
400ms
```

---

# Reduced Motion Mode

## Trigger

```txt id="dx3pjq"
prefers-reduced-motion
```

---

# Behavior

Disable:

```txt id="hzvjlwm"
Parallax

Scramble

Mouse Tracking

Horizontal Scroll

Magnetic Effects
```

---

Replace With

```txt id="m9izmr"
Fade

Instant Reveal
```

---

# Performance Standards

## Allowed Properties

```css id="gz4vfy"
transform
opacity
filter
```

---

## Forbidden Properties

```css id="vr1lwt"
top
left
right
bottom
width
height
```

---

# GPU Acceleration

Required

```css id="qj6gg6"
translate3d()
will-change
```

---

# ScrollTrigger Limits

Maximum

```txt id="9n58wl"
50 active triggers
```

Per page.

---

# Mobile Strategy

Reduce:

```txt id="m8bdc5"
Parallax

Pinned Sections

Heavy Scroll Effects
```

By 70%.

---

# Golden Rule

If an animation improves:

```txt id="phvh54"
Understanding
Hierarchy
Storytelling
```

Keep it.

If an animation only exists to:

```txt id="eij8m2"
Look Cool
```

Remove it.

milinds.dev is a professional platform first and an animation showcase second.
