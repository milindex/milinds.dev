# milinds.dev v2 Architecture

Version: 2.0
Status: Planning
Author: Milind Sonawane
Last Updated: 2026

---

# 1. Executive Summary

## Overview

milinds.dev is a premium personal portfolio platform built to showcase technical expertise, professional experience, case studies, engineering capabilities, and personal brand.

The platform is designed to serve three primary audiences:

1. Recruiters
2. Clients
3. Developers

Unlike traditional portfolios that act as static resumes, milinds.dev is designed as an interactive product experience combining:

* Personal branding
* Technical storytelling
* Premium motion design
* Interactive project exploration
* High-performance web engineering
* AI-assisted content discovery

The platform must demonstrate the same level of quality, architecture, performance, and polish expected from modern SaaS products.

---

## Core Objectives

### Recruiter Objectives

Allow recruiters to determine within 2 minutes:

* Who Milind is
* Years of experience
* Technical capabilities
* Companies worked with
* Major achievements
* Availability status

### Client Objectives

Allow potential clients to determine within 5 minutes:

* Services offered
* Relevant experience
* Case study outcomes
* Professional credibility
* How to initiate contact

### Developer Objectives

Allow developers and engineers to:

* Explore architecture decisions
* Review technical implementations
* Learn from case studies
* Explore experiments and lab projects

---

## Success Metrics

### Business Metrics

* Increased inbound project inquiries
* Increased recruiter engagement
* Increased consultation requests
* Increased newsletter subscriptions

### Portfolio Metrics

* Resume downloads
* Contact submissions
* Case study completion rate
* Search usage
* Recruiter mode engagement
* Client mode engagement

### Technical Metrics

* Lighthouse Score > 95
* Core Web Vitals Passing
* Accessibility Score > 95
* SEO Score > 95

---

# 2. Vision & Goals

## Vision Statement

Create one of the most technically impressive, visually polished, and conversion-focused developer portfolios while maintaining exceptional usability, accessibility, and performance.

The portfolio should feel like a modern product rather than a personal website.

---

## Product Philosophy

Every section must answer at least one of these questions:

### Can this increase trust?

Examples:

* Testimonials
* Client logos
* Experience metrics
* Case studies

### Can this demonstrate expertise?

Examples:

* Architecture diagrams
* Technical writing
* Open source work
* Project walkthroughs

### Can this increase conversion?

Examples:

* Contact forms
* Availability status
* Discovery call booking
* Service offerings

If a feature satisfies none of these objectives, it should not be included.

---

## Experience Principles

### Performance First

Motion and visuals must never compromise performance.

Target:

* Lighthouse 95+
* LCP < 2s
* CLS < 0.05

### Content First

Content should always remain more important than animation.

Animation exists to support storytelling.

### Accessibility First

Every experience must remain:

* Keyboard accessible
* Screen reader friendly
* Reduced-motion compatible

### Mobile First

All experiences must work flawlessly on:

* Mobile
* Tablet
* Desktop

---

# 3. Design Philosophy

## Design Direction

The visual language should combine:

* Premium SaaS design
* Editorial storytelling
* Award-winning motion design
* Technical precision

Inspired by:

* Modern developer portfolios
* Product landing pages
* Interactive case studies
* Technical documentation sites

---

## Visual Principles

### Simplicity

Minimal UI.

Maximum clarity.

### Depth

Use motion and layering to create depth.

Not decoration.

### Consistency

Every component should feel part of the same system.

### Purpose

Every animation must communicate:

* hierarchy
* context
* progression
* interaction

---

## Brand Identity

### Personality

Professional

Technical

Confident

Approachable

Modern

---

### Positioning

Current Positioning:

"Full Stack Developer"

New Positioning:

"Building high-performance fintech, e-commerce, and SaaS products used by millions of users."

---

## Color Philosophy

### Primary Background

```css
#000000
```

### Primary Accent

```css
#29D192
```

### Accent Usage

Used for:

* Headings
* Links
* Buttons
* Interactive states
* Highlights

---

## Typography Philosophy

### Headings

Bold

High contrast

Large scale

### Body Text

Readable

Comfortable line length

Accessible contrast

### Hierarchy

Every page should communicate hierarchy immediately without requiring scrolling.

---

# 4. User Personas

## Recruiter Persona

### Goals

Evaluate candidate quickly.

Determine technical fit.

Review experience.

Download resume.

Schedule interview.

---

### Primary Questions

Who is Milind?

How experienced is he?

What technologies does he use?

What companies has he worked with?

What impact has he delivered?

---

### Priority Sections

Hero

Experience

Case Studies

Skills

Resume

Availability

---

## Client Persona

### Goals

Find a reliable technical partner.

Understand capabilities.

Evaluate previous work.

Initiate contact.

---

### Primary Questions

Can he solve my problem?

Has he worked on similar projects?

What industries has he worked in?

How can I hire him?

---

### Priority Sections

Services

Case Studies

Testimonials

Process

Contact

---

## Developer Persona

### Goals

Learn.

Explore.

Investigate implementation details.

Understand architecture decisions.

---

### Primary Questions

How was this built?

Why were these decisions made?

What technologies are used?

What challenges were solved?

---

### Priority Sections

Lab

Case Studies

Architecture Diagrams

Blog

Open Source

---

# 5. Technology Stack

## Frontend

### Framework

Next.js

### Language

TypeScript

### Runtime

React

---

## Styling

### Core

Tailwind CSS

### Design Tokens

CSS Variables

### Component Variants

Class Variance Authority

---

## Animation

### Primary Animation Engine

GSAP

### Scroll Animations

GSAP ScrollTrigger

### Smooth Scrolling

Lenis

### Component Motion

Framer Motion

---

## Content

### Content Format

MDX

### Content Collections

Static Content Layer

---

## Search

### Search Engine

Fuse.js

### Index Generation

Build Time

---

## Analytics

### Product Analytics

PostHog

### Privacy Analytics

Plausible

---

## Backend

### Database

Supabase

### Authentication

Supabase Auth

### Storage

Supabase Storage

---

## Deployment

### Hosting

Cloudflare Pages

### CDN

Cloudflare Edge Network

### Image Delivery

Cloudflare Images

---

# 6. Project Structure

```txt
src/
│
├── app/
│
├── components/
│   ├── layout/
│   ├── ui/
│   ├── sections/
│   ├── animations/
│   ├── search/
│   ├── dashboard/
│   ├── recruiter/
│   ├── client/
│   └── case-studies/
│
├── content/
│   ├── projects/
│   ├── blog/
│   ├── testimonials/
│   ├── services/
│   └── pages/
│
├── lib/
│
├── hooks/
│
├── store/
│
├── styles/
│
├── types/
│
├── analytics/
│
├── seo/
│
└── constants/
```

---

## Architectural Principles

### Separation of Concerns

Content, UI, business logic, and animations must remain isolated.

### Reusability

All UI elements should be reusable.

### Scalability

Adding a new project, blog article, service, or testimonial should require no code changes.

### Maintainability

Content updates should be possible through structured content collections.

---

# 7. High-Level Sitemap

```txt
/
/about
/projects
/projects/[slug]
/blog
/blog/[slug]
/lab
/uses
/now
/dashboard
/recruiter
/client
/contact
/search
```

These routes represent the core platform architecture for Version 2.

# 8. Homepage Architecture

## Purpose

The homepage is the most important conversion page on the platform.

It must communicate within 10–15 seconds:

* Who Milind is
* What Milind does
* Who Milind has worked with
* Why visitors should trust him
* What action visitors should take next

The homepage should feel like a premium product landing page rather than a traditional portfolio.

---

# Homepage Structure

```txt
Hero
Trust Bar
Featured Case Studies
Impact Metrics
Technology Stack
Experience Timeline Preview
Testimonials
Writing & Insights
Open Source
Availability
Contact CTA
```

---

# Hero Section

## Purpose

Immediately establish credibility.

## Layout

```txt
Headline
Subheadline
Primary CTA
Secondary CTA
Availability Badge
Hero Visual
```

---

## Headline

```txt
Milind Sonawane

Building high-performance fintech,
e-commerce and SaaS products
used by millions of users.
```

---

## Subheadline

```txt
Full Stack Developer with 6+ years of experience
working with HDFC Sky, Angel One, Kapiva and
Atomberg.
```

---

## Primary CTA

```txt
View Case Studies
```

---

## Secondary CTA

```txt
Download Resume
```

---

## Availability Badge

```txt
Available for Freelance
Available for Consulting
Open to Opportunities
```

Dynamic.

---

## Hero Motion

### Effects

* Text Reveal
* Character Animation
* Gradient Motion
* Mouse Parallax
* Magnetic Buttons

### Restrictions

Motion must not delay readability.

---

# Trust Bar

## Purpose

Establish credibility instantly.

## Metrics

```txt
6+ Years Experience

50+ Projects Delivered

4+ Enterprise Brands

Millions of Users Reached
```

---

## Animation

Count-up animation on viewport entry.

---

# Featured Case Studies

## Purpose

Show strongest work immediately.

Maximum 3 featured projects.

---

## Card Structure

```txt
Project
Industry
Role
Technologies
Impact
```

---

## Example

```txt
HDFC Sky

Frontend Architecture

Performance Optimization

Next.js
React
TypeScript

Reduced Load Time
Improved Lighthouse Scores
```

---

## Interactions

Hover:

* Image Reveal
* Tilt Effect
* Glow Effect

Click:

Navigate to full case study.

---

# Impact Metrics

## Purpose

Communicate measurable outcomes.

---

## Examples

```txt
Projects Delivered

Pages Optimized

Integrations Built

Automation Workflows

Core Web Vital Improvements
```

---

## Presentation

Large typography.

Animated counters.

---

# Technology Stack

## Purpose

Show technical breadth.

---

## Categories

### Frontend

```txt
React
Next.js
TypeScript
Tailwind
```

### Backend

```txt
Node.js
Express
Supabase
Firebase
```

### DevOps

```txt
Cloudflare
Docker
GitHub Actions
```

### CMS

```txt
WordPress
Headless CMS
MDX
```

---

## Interaction

Technology cloud.

Hover reveals experience level.

---

# Experience Timeline Preview

## Purpose

Provide quick career overview.

---

## Display

```txt
2018 → 2026
```

---

## Content

```txt
Company

Role

Major Achievement

Technologies
```

---

## CTA

```txt
View Full Timeline
```

Links to Project Timeline Explorer.

---

# Testimonials

## Purpose

Increase trust.

---

## Sources

Clients

Employers

Colleagues

LinkedIn Recommendations

---

## Card Structure

```txt
Photo
Name
Role
Company
Quote
```

---

## Motion

Auto-scroll carousel.

Pause on hover.

---

# Writing & Insights

## Purpose

Demonstrate expertise.

---

## Display

Latest 3 articles.

---

## Categories

```txt
Engineering
Performance
Architecture
Next.js
Career
```

---

## CTA

```txt
View All Articles
```

---

# Open Source

## Purpose

Demonstrate technical engagement.

---

## Display

```txt
Pinned Repositories

Contribution Activity

Most Starred Project
```

---

## Data Source

GitHub API.

---

# Availability Section

## Purpose

Drive conversions.

---

## Status

```txt
Available

Busy

Limited Availability
```

---

## Opportunities

```txt
Freelance

Consulting

Contract

Full Time
```

---

# Contact CTA

## Purpose

Generate leads.

---

## Headline

```txt
Let's Build Something Great
```

---

## CTA Options

```txt
Book Discovery Call

Send Message

Download Resume
```

---

# 9. About Page Architecture

## Purpose

Humanize the brand.

The About page is not a resume.

It is a story.

---

# Structure

```txt
Introduction

Career Journey

Core Values

Working Style

Technologies

Personal Interests

Fun Facts

Contact CTA
```

---

# Introduction

## Goal

Answer:

```txt
Who is Milind?
```

---

## Content

Story.

Background.

Career progression.

Motivation.

---

# Career Journey

Interactive timeline.

Preview of:

```txt
Companies

Roles

Milestones
```

---

# Core Values

Examples:

```txt
Quality

Performance

Ownership

Transparency

Continuous Learning
```

---

# Working Style

Explain:

```txt
How projects are approached.

How communication works.

How collaboration happens.
```

---

# Personal Interests

Humanize the profile.

Examples:

```txt
Technology

AI

Automation

Travel

Fitness

Photography
```

---

# Contact CTA

Invite conversation.

---

# 10. Projects Architecture

## Purpose

Show proven experience.

Projects are the most important section after the homepage.

---

# Structure

```txt
Featured Projects

Project Filters

Project Grid

Search

Categories
```

---

# Filters

```txt
Fintech

E-Commerce

SaaS

WordPress

Performance

Automation
```

---

# Search

Integrated with Portfolio Assistant.

---

# Project Card

```txt
Thumbnail

Project Name

Industry

Role

Technologies

Impact
```

---

# Hover State

Reveal:

```txt
View Case Study
```

---

# Categories

Projects may belong to multiple categories.

---

# Featured Projects

Pinned manually.

Used for flagship work.

---

# 11. Case Study Architecture

## Purpose

Case studies are the heart of the portfolio.

Each case study must explain:

```txt
Problem
Solution
Impact
```

---

# Structure

```txt
Hero

Overview

Problem

Research

Architecture

Tech Stack

Challenges

Implementation

Results

Lessons Learned

Related Projects
```

---

# Hero

Contains:

```txt
Project Name

Company

Industry

Timeline

Role

Team Size
```

---

# Overview

Short summary.

---

# Problem

What challenge existed?

---

# Research

Discovery process.

Constraints.

Requirements.

---

# Architecture

Interactive architecture diagram.

---

# Tech Stack

Frontend

Backend

Infrastructure

Integrations

---

# Challenges

Technical obstacles.

Business obstacles.

---

# Implementation

Detailed explanation.

Screenshots.

Code examples where appropriate.

---

# Results

Must contain measurable outcomes.

Examples:

```txt
Performance Gains

SEO Improvements

Conversion Improvements

Automation Benefits
```

---

# Lessons Learned

Insights gained.

Future improvements.

---

# Related Projects

Cross-linking system.

---

# 12. Blog Architecture

## Purpose

Build authority.

Improve SEO.

Share expertise.

---

# Categories

```txt
Engineering

Architecture

Performance

Next.js

AI

Career
```

---

# Article Structure

```txt
Hero

Table of Contents

Content

Callouts

Code Blocks

Related Articles
```

---

# Features

Reading time.

Share buttons.

Newsletter signup.

Progress indicator.

---

# SEO

Every article includes:

```txt
Article Schema

Open Graph

Canonical URL
```

# 13. Lab Architecture

## Purpose

The Lab section exists to demonstrate engineering depth.

Unlike case studies, which focus on business outcomes, the Lab focuses on experimentation, innovation, and technical curiosity.

This section is intended primarily for:

* Developers
* Technical Recruiters
* Engineering Managers

---

# Route

```txt
/lab
```

---

# Objectives

Demonstrate:

* Advanced frontend engineering
* Creative development
* Performance optimization
* AI experimentation
* Technical research

---

# Structure

```txt
Lab Homepage

├── Featured Experiments
├── Categories
├── Search
├── Experiment Grid
└── Archive
```

---

# Categories

```txt
AI

Automation

Three.js

WebGL

Shaders

Creative Coding

Performance

Developer Tools

Open Source
```

---

# Experiment Card

```txt
Title

Description

Technology Stack

Category

Difficulty

Date
```

---

# Experiment Page Structure

```txt
Hero

Overview

Challenge

Approach

Implementation

Demo

Code Walkthrough

Lessons Learned
```

---

# Demo Section

Whenever possible include:

```txt
Interactive Demo

Video Recording

Live Example
```

---

# Technical Breakdown

Explain:

```txt
Architecture

Algorithms

Optimization

Tradeoffs
```

---

# Lab Search

Integrated into Portfolio Assistant.

---

# Success Criteria

Visitors should immediately recognize:

```txt
This developer enjoys building things beyond client work.
```

---

# 14. Uses Page Architecture

## Purpose

Provide transparency into tools, workflow and development environment.

Popular among senior engineers and developer communities.

---

# Route

```txt
/uses
```

---

# Structure

```txt
Hardware

Development Setup

Software

Productivity

AI Tools

Learning Resources
```

---

# Hardware

## Workstation

```txt
Laptop

Desktop

Monitor

Keyboard

Mouse

Audio Setup
```

---

# Development Environment

```txt
VS Code

Terminal

Extensions

Themes

Fonts
```

---

# Software

```txt
GitHub

Postman

Docker

Figma

Notion
```

---

# AI Stack

```txt
ChatGPT

Claude

Cursor

GitHub Copilot

Perplexity
```

---

# Productivity

```txt
Task Management

Knowledge Management

Calendar

Communication
```

---

# Goals

Humanize the developer.

Create community connection.

---

# 15. Now Page Architecture

## Purpose

Show what is currently happening.

Provides freshness to the portfolio.

---

# Route

```txt
/now
```

---

# Sections

```txt
Current Focus

Current Projects

Learning

Reading

Goals

Availability
```

---

# Current Focus

Example:

```txt
Building milinds.dev v2

Learning AI Workflows

Exploring Agentic Systems
```

---

# Current Projects

Show active work.

Keep concise.

---

# Learning

Examples:

```txt
AI Agents

Cloudflare Ecosystem

Advanced Motion Design
```

---

# Availability

Current status:

```txt
Available

Limited Availability

Booked
```

---

# Update Frequency

Monthly.

---

# Philosophy

The page should feel alive.

---

# 16. Portfolio Assistant Architecture

## Purpose

Enable instant navigation across the portfolio.

Inspired by:

```txt
Linear

Raycast

Vercel

Stripe Docs
```

---

# Trigger

```txt
CTRL + K

CMD + K
```

---

# Route

```txt
/search
```

---

# Searchable Content

```txt
Projects

Case Studies

Blog Articles

Services

Testimonials

Technologies

Experience

Lab Experiments
```

---

# Search Experience

Real-time results.

No page refresh.

---

# Example Queries

```txt
React

Next.js

Angel One

Performance

SEO

Automation

WordPress
```

---

# Result Types

```txt
Project

Case Study

Blog

Page

Technology
```

---

# Ranking

Priority:

```txt
Exact Match

Title Match

Content Match

Tags

Related Content
```

---

# Technical Architecture

```txt
Fuse.js

Static Search Index

JSON Generation

Build-Time Processing
```

---

# Performance Goal

```txt
Search Results < 50ms
```

---

# 17. Recruiter Mode

## Purpose

Create a recruiter-optimized experience.

Reduce noise.

Increase clarity.

---

# Route

```txt
/recruiter
```

---

# Toggle

Available globally.

---

# Content Prioritization

### Show

```txt
Experience

Companies

Case Studies

Technologies

Resume

Achievements

Availability
```

---

### Hide

```txt
Experimental Content

Creative Demos

Lab Projects

Technical Deep Dives
```

---

# Recruiter Dashboard

## Summary

```txt
Years Experience

Projects Delivered

Top Skills

Companies Worked With

Availability
```

---

# Quick Actions

```txt
Download Resume

Schedule Interview

View LinkedIn

Contact
```

---

# Goal

A recruiter should understand the profile in less than 2 minutes.

---

# 18. Client Mode

## Purpose

Create a client-focused experience.

Increase inquiries and conversions.

---

# Route

```txt
/client
```

---

# Toggle

Available globally.

---

# Prioritized Sections

```txt
Services

Case Studies

Testimonials

Process

Contact
```

---

# Hidden Sections

```txt
Technical Deep Dives

Lab Experiments

Developer Content
```

---

# Service Categories

```txt
Web Applications

SaaS Platforms

Performance Optimization

Automation

Technical Consulting

E-Commerce
```

---

# Client Dashboard

## Overview

```txt
Projects Delivered

Years Experience

Industries Served

Testimonials
```

---

# Conversion CTAs

```txt
Book Discovery Call

Request Proposal

Get Estimate

Contact
```

---

# Goal

Convert visitors into leads.

---

# 19. Developer Dashboard Architecture

## Purpose

Provide a live view of professional and technical activity.

---

# Route

```txt
/dashboard
```

---

# Sections

```txt
Overview

GitHub Activity

Portfolio Metrics

Technical Metrics

Writing Metrics

Open Source Metrics
```

---

# Overview Cards

```txt
Years Experience

Projects Delivered

Articles Published

Technologies Used
```

---

# GitHub Section

Display:

```txt
Repositories

Stars

Forks

Commits

Contributions
```

---

# Portfolio Metrics

Display:

```txt
Case Studies

Experiments

Blog Posts

Testimonials
```

---

# Writing Metrics

Display:

```txt
Articles

Views

Reading Time
```

---

# Refresh Strategy

```txt
Build Time

Daily Revalidation
```

---

# Purpose

Show evidence of continuous activity.

---

# 20. Project Timeline Explorer

## Purpose

Replace traditional static timelines.

Provide an interactive career journey.

---

# Route

```txt
/timeline
```

---

# Timeline Structure

```txt
2018
2019
2020
2021
2022
2023
2024
2025
2026
```

---

# Year Detail

Each year expands into:

```txt
Companies

Projects

Technologies

Achievements
```

---

# Interaction

Hover:

```txt
Technology Details
```

Click:

```txt
Open Case Study
```

---

# Animation

```txt
GSAP ScrollTrigger

Pinned Timeline

Parallax Layers

Progress Indicators
```

---

# Goal

Transform career history into an engaging experience.

---

# 21. Interactive Architecture Diagrams

## Purpose

Show technical thinking visually.

Most developers describe architecture.

Few explain it interactively.

---

# Usage Locations

```txt
Case Studies

Lab Experiments

Technical Articles
```

---

# Diagram Types

```txt
System Architecture

Data Flow

Infrastructure

API Flows

Automation Workflows
```

---

# Interactive Nodes

Each node can display:

```txt
Purpose

Responsibilities

Technology

Challenges

Solutions
```

---

# Example

```txt
Frontend
    ↓
API Gateway
    ↓
Authentication
    ↓
Database
```

---

# Technical Stack

```txt
React Flow

SVG

GSAP

Motion One
```

---

# User Actions

Hover Node

Click Node

Expand Details

View Related Content

---

# Goal

Demonstrate senior-level architecture understanding while remaining accessible to non-technical visitors.

---

# Platform Experience Modes

## Available Modes

```txt
Default Mode

Recruiter Mode

Client Mode
```

---

# Storage

```txt
localStorage

Cookie Persistence
```

---

# Switching Behaviour

Navigation

Content Priority

CTAs

Homepage Layout

Case Study Layout

All adapt to the selected mode.

---

# Design Principle

One website.

Three optimized experiences.

# 22. Motion Design System

## Philosophy

Motion is a communication tool.

It exists to:

* Guide attention
* Establish hierarchy
* Improve storytelling
* Increase perceived quality
* Reinforce interactions

Motion must never exist purely for decoration.

---

# Motion Principles

## Performance First

Every animation must maintain:

```txt id="6c6q2l"
60 FPS Target
```

---

## Progressive Enhancement

Site must remain fully usable if:

```txt id="2wg5u5"
JavaScript Disabled

Animations Disabled

Reduced Motion Enabled
```

---

## Accessibility First

Respect:

```txt id="9ih73s"
prefers-reduced-motion
```

---

## Consistency

Animation behavior must feel unified across the entire platform.

---

# Motion Architecture

## Animation Stack

### Primary Engine

```txt id="f7x69f"
GSAP
```

---

### Scroll Engine

```txt id="wpjlwm"
GSAP ScrollTrigger
```

---

### Smooth Scroll Engine

```txt id="80w7z5"
Lenis
```

---

### UI Animations

```txt id="rqfns5"
Framer Motion
```

---

# Animation Categories

```txt id="4l71cx"
Entrance Motion

Scroll Motion

Interaction Motion

Navigation Motion

Page Transition Motion

Storytelling Motion
```

---

# 23. Global Scroll System

## Purpose

Create a premium browsing experience.

---

# Smooth Scrolling

## Engine

```txt id="t5gj7z"
Lenis
```

---

## Behavior

Desktop:

```txt id="s8tlhb"
Enabled
```

Mobile:

```txt id="kv1fcv"
Native Scroll
```

---

## Target

Scrolling should feel:

```txt id="2opddu"
Responsive

Natural

Buttery Smooth
```

---

# Scroll Progress Indicator

## Location

Top of viewport.

---

## Behavior

Shows:

```txt id="8xf7bm"
Page Completion
```

---

## Animation

ScaleX transform.

GPU accelerated.

---

# Scroll Velocity Tracking

Used for:

```txt id="8cnz7h"
Parallax

Image Motion

Background Motion
```

---

# 24. Entrance Animation System

## Purpose

Reveal content naturally.

---

# Standard Reveal

### Initial State

```txt id="6ycvji"
opacity: 0

translateY: 40px
```

---

### Final State

```txt id="4q7hsv"
opacity: 1

translateY: 0
```

---

### Duration

```txt id="v6d3k0"
0.6s - 1s
```

---

# Heading Reveal

## Method

Character splitting.

---

## Animation

```txt id="qgmksf"
Characters

Words

Lines
```

Reveal sequentially.

---

# Image Reveal

## Technique

```txt id="k2jv0d"
Mask Reveal
```

---

## Animation

```txt id="5z57gw"
Clip Path

Scale

Opacity
```

---

# Card Reveal

Used for:

```txt id="s8ybxv"
Projects

Testimonials

Articles

Services
```

---

# Stagger Rules

Maximum:

```txt id="1h9lkz"
100ms between items
```

---

# 25. Page Transition System

## Purpose

Create continuity.

---

# Transition Style

Default:

```txt id="6s4k4x"
Fade

Scale

Blur
```

---

# Duration

```txt id="h4c0b4"
400ms
```

---

# Transition Flow

### Exit

```txt id="0ffzj0"
Opacity ↓

Blur ↑
```

---

### Enter

```txt id="6nlsuv"
Opacity ↑

TranslateY ↓
```

---

# Route Groups

### High Priority

```txt id="fepzy7"
Homepage

Projects

Case Studies
```

Receive richer transitions.

---

# 26. Hero Animation System

## Purpose

Create a memorable first impression.

---

# Components

```txt id="txv7pq"
Headline

Subheadline

CTA

Background

Hero Visual
```

---

# Headline Animation

### Method

Text reveal.

---

### Sequence

```txt id="b1r7nr"
Headline

Subheadline

CTA

Trust Bar
```

---

# Hero Background

Animated:

```txt id="p6izqm"
Gradient Mesh

Noise

Particles
```

Subtle.

Never distracting.

---

# Mouse Parallax

Desktop only.

---

## Layers

```txt id="j0o17t"
Background

Shapes

Illustration

Decorative Elements
```

---

# Limits

Maximum movement:

```txt id="kj5qqy"
20px
```

---

# 27. Custom Cursor System

## Purpose

Increase perceived polish.

---

# Desktop Only

Disabled on:

```txt id="jlwmgk"
Mobile

Tablet
```

---

# Cursor States

Default:

```txt id="0gr5iq"
Cursor
```

---

Project:

```txt id="3m5tlm"
View Project
```

---

Case Study:

```txt id="fmlgbf"
Explore
```

---

Draggable:

```txt id="cvfzh8"
Drag
```

---

External Link:

```txt id="6h2y91"
Visit
```

---

# Performance

Cursor updates must use:

```txt id="7h4l87"
transform: translate3d()
```

Only.

---

# 28. Magnetic Button System

## Purpose

Increase interaction quality.

---

# Applied To

```txt id="lg0gtf"
Hire Me

Contact

Resume

Book Call
```

---

# Behavior

Cursor proximity:

```txt id="y24vtw"
Button shifts toward pointer.
```

---

# Maximum Movement

```txt id="f6n0we"
10px
```

---

# Restrictions

Never apply to:

```txt id="6r2n4x"
Forms

Navigation

Small Buttons
```

---

# 29. Parallax System

## Purpose

Create depth.

---

# Layers

### Background

Slowest

---

### Midground

Medium speed

---

### Foreground

Fastest

---

# Usage

Hero

Case Studies

Timeline Explorer

---

# Rules

Maximum movement:

```txt id="6mfl3z"
20%
```

relative to viewport.

---

# 30. Horizontal Storytelling Sections

## Purpose

Create immersive narratives.

---

# Usage

```txt id="ibgk4y"
Case Studies

Architecture Walkthroughs

Timeline Explorer
```

---

# Pattern

Vertical scroll drives horizontal movement.

---

# Implementation

```txt id="zhxw7v"
GSAP ScrollTrigger

Pinned Container
```

---

# Restrictions

Never use on mobile.

Fallback to vertical layout.

---

# 31. Text Effects System

## Text Scramble

### Purpose

Premium developer aesthetic.

---

# Usage

```txt id="3yk0a5"
Logo

Hero Headline

Section Titles
```

---

# Restrictions

Only on hover or first load.

Never continuously.

---

# Gradient Text

Used sparingly.

Reserved for:

```txt id="mp0u9v"
Hero

Key Metrics

Major Headings
```

---

# Highlight Animation

Animated underline.

---

# Usage

```txt id="13w7pj"
Links

Achievements

Technologies
```

---

# 32. Case Study Storytelling System

## Purpose

Transform project pages into experiences.

---

# Structure

```txt id="mnuzb4"
Challenge

Research

Solution

Architecture

Results
```

---

# Scroll Behavior

Sections become:

```txt id="3x6w5x"
Pinned

Animated

Progressive
```

---

# Metrics Animation

Numbers animate when entering viewport.

---

# Architecture Diagram Animation

Interactive node reveals.

---

# Screenshot Showcase

### Desktop

```txt id="p8m39e"
Pinned Device Frame
```

---

### Scroll

Changes screens dynamically.

---

# 33. Animation Performance Standards

## Mandatory Rules

### Use Transform

Always:

```css id="5v7gw7"
transform
opacity
```

---

Never:

```css id="sxsmtg"
top
left
width
height
```

---

# GPU Acceleration

Required:

```css id="a7mhhm"
translate3d()
will-change
```

---

# ScrollTrigger Limits

Avoid:

```txt id="dg2f9m"
100+ active triggers
```

---

# Bundle Size

Animation libraries combined:

```txt id="j1x4an"
< 150 KB
```

---

# Mobile Strategy

Reduce:

```txt id="8m4g2m"
Parallax

Mouse Tracking

Heavy Scroll Effects
```

---

# Reduced Motion Strategy

When:

```txt id="lm9zc7"
prefers-reduced-motion
```

Replace all animations with:

```txt id="fzh6lx"
Fade

Instant Reveal

No Motion
```

---

# 34. Awwwards-Inspired Experience Guidelines

## Inspiration

Inspired by award-winning digital experiences.

---

## Do

```txt id="l5z7vl"
Tell stories

Create depth

Guide attention

Reward exploration
```

---

## Don't

```txt id="2s8u9u"
Over-animate

Hide content

Break usability

Reduce accessibility
```

---

# Golden Rule

If an animation improves understanding:

✅ Keep it

If an animation only exists to look cool:

❌ Remove it

The portfolio must always prioritize clarity, performance, accessibility and conversion over visual effects.

# 35. Component Architecture

## Philosophy

Components must be:

* Reusable
* Composable
* Accessible
* Performant
* Independently testable

---

# Component Layers

```txt
components/

├── ui/
├── layout/
├── sections/
├── features/
├── animations/
├── providers/
└── shared/
```

---

## UI Layer

Pure presentation.

Examples:

```txt
Button
Input
Textarea
Card
Badge
Tooltip
Modal
Tabs
Accordion
```

Rules:

* No business logic
* No API calls
* Fully reusable

---

## Layout Layer

Examples:

```txt
Navbar
Footer
Container
Grid
Sidebar
PageWrapper
```

Responsible for:

* Structure
* Layout
* Spacing

---

## Sections Layer

Page-specific sections.

Examples:

```txt
HeroSection
TrustBar
Testimonials
TechStack
ContactCTA
```

---

## Features Layer

Business logic components.

Examples:

```txt
PortfolioAssistant
RecruiterMode
ClientMode
TimelineExplorer
ArchitectureDiagram
Dashboard
```

---

## Animation Layer

Examples:

```txt
Reveal
Parallax
MagneticButton
Cursor
PageTransition
```

All motion behavior must be isolated.

---

# Component Design Rules

## Single Responsibility

Each component should solve one problem.

---

## Composition Over Inheritance

Favor composition.

Avoid deeply nested inheritance patterns.

---

## Props First

No hardcoded content.

Everything configurable.

---

# 36. State Management Architecture

## Philosophy

Use the simplest solution possible.

Avoid unnecessary global state.

---

# Local State

Use:

```txt
React State
```

For:

```txt
Forms
Modals
Tabs
Accordions
```

---

# URL State

Use URL parameters for:

```txt
Filters
Search
Pagination
Mode Selection
```

---

# Global State

Use Zustand.

---

## Stores

### Search Store

```txt
Query
Results
Recent Searches
```

---

### Mode Store

```txt
Default Mode

Recruiter Mode

Client Mode
```

---

### Theme Store

```txt
Dark

Light
```

---

# Persistence

Use:

```txt
localStorage
```

For:

```txt
Theme

Mode

Search History
```

---

# 37. CMS & Content Architecture

## Philosophy

Content must be manageable without touching code.

---

# Content Types

```txt
Projects

Case Studies

Articles

Testimonials

Services

Experiments

Pages
```

---

# Storage Format

MDX

---

# Content Directory

```txt
content/

projects/
articles/
testimonials/
services/
experiments/
pages/
```

---

# Project Schema

```yaml
title:
slug:
client:
industry:
role:
timeline:
technologies:
challenge:
solution:
results:
featured:
```

---

# Blog Schema

```yaml
title:
slug:
excerpt:
author:
date:
tags:
readingTime:
featured:
```

---

# Testimonial Schema

```yaml
name:
company:
role:
quote:
avatar:
featured:
```

---

# Service Schema

```yaml
title:
slug:
description:
deliverables:
```

---

# Build Process

Content compiled during build.

No runtime CMS dependency.

---

# 38. SEO Architecture

## Philosophy

Every page must be discoverable.

Every page must have intent.

---

# Metadata

Every page requires:

```txt
Title

Description

Canonical URL

Open Graph

Twitter Card
```

---

# Structured Data

## Person Schema

Homepage.

---

## Project Schema

Case studies.

---

## Article Schema

Blog posts.

---

## Breadcrumb Schema

Sitewide.

---

## FAQ Schema

Landing sections where applicable.

---

# Internal Linking

Mandatory between:

```txt
Projects

Articles

Services

Technologies
```

---

# Sitemap

Generated automatically.

---

# Robots

Generated automatically.

---

# Open Graph System

Dynamic image generation.

---

# URL Structure

```txt
/projects/[slug]

/blog/[slug]

/lab/[slug]
```

Only.

No query-string driven content.

---

# 39. Analytics Architecture

## Philosophy

Track meaningful behavior.

Not vanity metrics.

---

# Analytics Stack

## Product Analytics

PostHog

---

## Privacy Analytics

Plausible

---

# Events

## Homepage

```txt
Hero CTA Click

Resume Download

Contact Click
```

---

## Projects

```txt
Case Study Opened

Case Study Completed

Related Project Click
```

---

## Search

```txt
Search Opened

Search Query

Result Click
```

---

## Recruiter Mode

```txt
Mode Enabled

Resume Download

LinkedIn Click
```

---

## Client Mode

```txt
Mode Enabled

Proposal Request

Discovery Call
```

---

# Dashboard Metrics

Monitor:

```txt
Most Viewed Projects

Top Search Terms

Top Technologies

Conversion Funnels
```

---

# 40. Security Standards

## Security Philosophy

Security by default.

---

# Headers

Mandatory:

```txt
CSP

HSTS

X-Frame-Options

Referrer Policy
```

---

# Forms

Protected by:

```txt
Rate Limiting

Bot Detection

Validation
```

---

# Environment Variables

Never exposed unless intentionally public.

---

# Secrets

Stored only via:

```txt
Cloudflare

GitHub Secrets
```

---

# Dependency Management

Weekly security scans.

---

# 41. Accessibility Standards

## Target

WCAG 2.2 AA

---

# Requirements

## Keyboard Navigation

100% support.

---

## Focus States

Always visible.

---

## Contrast

Minimum AA compliance.

---

## Screen Readers

All controls labeled.

---

## Reduced Motion

Full support.

---

## Forms

Accessible labels.

Accessible validation.

---

# Accessibility Audits

Performed before every release.

---

# 42. Performance Architecture

## Performance Budget

### Lighthouse

```txt
Performance > 95

Accessibility > 95

SEO > 95

Best Practices > 95
```

---

### Core Web Vitals

```txt
LCP < 2.0s

CLS < 0.05

INP < 150ms
```

---

# JavaScript Budget

Initial load:

```txt
< 250 KB
```

---

# Image Strategy

Use:

```txt
AVIF

WebP
```

---

# Lazy Loading

Mandatory for:

```txt
Images

Videos

Heavy Components
```

---

# Code Splitting

Route based.

Feature based.

---

# Font Strategy

```txt
Self Hosted

Preloaded

Subsetted
```

---

# 43. Cloudflare Deployment Architecture

## Hosting

Cloudflare Pages.

---

# Edge Network

Global distribution.

---

# Services

```txt
Cloudflare Pages

Cloudflare Images

Cloudflare Analytics

Cloudflare WAF

Cloudflare Cache
```

---

# Caching

Static Assets:

```txt
1 Year
```

---

# HTML

```txt
Short TTL
```

---

# Security

Cloudflare WAF enabled.

---

# Image Delivery

Cloudflare Images.

Responsive transformations.

---

# 44. CI/CD Pipeline

## Repository

GitHub.

---

# Branch Strategy

```txt
main
develop
feature/*
```

---

# Pull Requests

Required for:

```txt
Features

Fixes

Content Updates
```

---

# Pipeline

```txt
Lint

Type Check

Unit Tests

Build

Performance Audit

Deploy
```

---

# Deployment Flow

```txt
Push

Build

Test

Deploy

Verify
```

---

# 45. Testing Strategy

## Unit Testing

Framework:

```txt
Vitest
```

---

# Component Testing

Framework:

```txt
Testing Library
```

---

# E2E Testing

Framework:

```txt
Playwright
```

---

# Visual Regression

Framework:

```txt
Percy
```

---

# Coverage Targets

```txt
Critical Features: 90%+

Overall: 80%+
```

---

# Critical Features

```txt
Portfolio Assistant

Recruiter Mode

Client Mode

Contact Form

Timeline Explorer
```

---

# 46. Definition of Done

A feature is considered complete only when:

---

## Development

✅ Implemented

---

## Design

✅ Matches design system

---

## Accessibility

✅ WCAG compliant

---

## Performance

✅ Within budget

---

## SEO

✅ Metadata complete

---

## Testing

✅ Unit tests pass

✅ E2E tests pass

---

## Analytics

✅ Events tracked

---

## Documentation

✅ Updated

---

## Review

✅ Approved

---

# Final Vision

milinds.dev v2 is not a portfolio website.

It is a high-performance personal platform that combines:

* Personal Branding
* Technical Storytelling
* Interactive Experiences
* Case Studies
* AI-Powered Discovery
* Recruiter Optimization
* Client Conversion

while maintaining:

```txt
Performance First
Accessibility First
Content First
Engineering Excellence
```

The platform should feel closer to a premium SaaS product than a traditional developer portfolio and should represent the highest standard of modern personal websites in 2026.
