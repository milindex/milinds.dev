# 24_ENGINEERING_DECISIONS.md

Project: Angel One (Formerly Angel Broking)

Status: Draft v1

Source:
Timesheet Analysis (2018–2024)
Engineering Experience
Architectural Inference

---

# Overview

Engineering is fundamentally about making decisions under constraints.

Every feature, architecture, optimization and implementation involves
trade-offs between performance, maintainability, scalability, developer
experience, business priorities and delivery timelines.

This document captures the major engineering decisions made throughout
the Angel One engagement, explains the reasoning behind those decisions
and records lessons that can be applied to future projects.

Unlike implementation documents, this file focuses on *why* technical
choices were made.

---

# Engineering Principles

Throughout the project, several principles consistently guided
implementation decisions.

## User Experience First

Every engineering decision should ultimately improve the customer's
experience.

Examples

* Faster loading pages
* Better navigation
* Simpler interfaces
* Reliable market information
* Responsive layouts

---

## Performance Is A Feature

Performance was treated as a core product requirement rather than a
post-release optimization.

Engineering effort consistently focused on reducing load times,
optimizing rendering, minimizing JavaScript execution and improving
mobile experiences.

---

## Reuse Before Rebuild

Whenever possible, reusable templates, shared components and common
patterns were preferred over duplicated implementations.

Benefits

* Lower maintenance
* Faster feature development
* Better consistency
* Reduced bugs

---

## Continuous Improvement

Large enterprise products are never "finished."

Engineering work focused on improving existing systems while delivering
new features.

---

# Major Engineering Decisions

---

## Decision 1

Enterprise Search Instead of Default CMS Search

Problem

The platform contained thousands of articles, company pages,
research reports and financial products.

Traditional WordPress search was not sufficient for fast,
relevant discovery.

Decision

Adopt Elasticsearch with ElasticPress to power enterprise search.

Why

* Faster queries
* Better relevance
* Scalability
* Advanced indexing
* Improved search experience

Trade-offs

Additional infrastructure complexity.

Index synchronization.

Operational maintenance.

Outcome

Search became a dedicated platform capability rather than a simple CMS
feature.

---

## Decision 2

Invest In AMP

Problem

A significant percentage of visitors arrived through Google Search on
mobile devices.

Decision

Develop and continuously maintain AMP pages.

Why

* Faster mobile loading
* Better SEO
* Improved discoverability
* Better user experience

Trade-offs

Separate templates.

Validation complexity.

Restricted JavaScript.

Outcome

Improved mobile performance while supporting search acquisition.

---

## Decision 3

API-Driven Financial Data

Problem

Market information changes continuously.

Static content would become outdated almost immediately.

Decision

Render financial information through APIs.

Why

* Accurate information
* Easier updates
* Centralized business logic
* Better scalability

Trade-offs

API dependency.

Error handling.

Network latency.

Outcome

Consistent financial information across multiple pages.

---

## Decision 4

Template Standardization

Problem

Creating unique templates for every page type increases maintenance
cost.

Decision

Build reusable template architecture.

Benefits

* Faster development
* Consistent UX
* Easier maintenance
* Better scalability

Trade-offs

More planning upfront.

Greater abstraction.

---

## Decision 5

Continuous Refactoring

Problem

Large products accumulate technical debt.

Decision

Refactor continuously instead of waiting for major rewrites.

Benefits

* Lower risk
* Better readability
* Easier onboarding
* Reduced maintenance

---

## Decision 6

Performance During Development

Problem

Performance improvements added after release are usually expensive.

Decision

Consider performance during implementation.

Examples

* Optimized assets
* Better rendering
* JavaScript improvements
* Efficient templates

Outcome

Performance became part of development instead of a later phase.

---

## Decision 7

SEO As An Engineering Concern

Problem

SEO affects business growth.

Decision

Treat SEO as part of engineering rather than marketing.

Examples

* Metadata
* Structured content
* AMP
* Indexing
* Webmaster improvements

Outcome

Engineering contributed directly to organic acquisition.

---

## Decision 8

Progressive Enhancement

Problem

Users access the platform through many devices and browsers.

Decision

Ensure core functionality works before adding advanced interactions.

Benefits

* Better accessibility
* Higher reliability
* Wider compatibility

---

## Decision 9

Production Stability Over Perfection

Problem

Enterprise products require continuous releases.

Decision

Prioritize stable deployments over unnecessary architectural changes.

Benefits

* Lower business risk
* Reliable releases
* Faster issue resolution

---

## Decision 10

Business Requirements Drive Architecture

Engineering decisions should support business goals.

Examples

Need

Improve discoverability

↓

Decision

Enterprise Search

---

Need

Improve mobile experience

↓

Decision

AMP

---

Need

Scale publishing

↓

Decision

Reusable CMS Templates

---

Need

Improve maintainability

↓

Decision

Refactoring

---

Need

Deliver faster

↓

Decision

Reusable Components

---

# Architectural Trade-Offs

Every major engineering decision involved balancing competing concerns.

Performance

vs

Developer Experience

---

Speed

vs

Flexibility

---

Scalability

vs

Complexity

---

Maintainability

vs

Delivery Time

---

SEO

vs

Implementation Complexity

---

Reusability

vs

Feature Specificity

---

# Lessons Learned

Large products evolve continuously.

Small improvements compound over time.

Performance should never be postponed.

Search deserves dedicated engineering.

Technical debt grows faster than expected.

Reusable systems outperform isolated implementations.

Architecture should enable future development rather than solve only
today's problem.

Business goals should influence technical decisions.

Engineering quality directly impacts customer experience.

Good documentation reduces long-term maintenance cost.

---

# What I Would Do Differently Today

If rebuilding this platform today, I would consider:

* Next.js App Router
* TypeScript everywhere
* Headless CMS architecture
* Design System from day one
* Component-driven development
* Server Components
* Edge rendering where appropriate
* Automated testing
* CI/CD pipelines
* Infrastructure as Code
* Observability dashboards
* Performance budgets
* AI-assisted developer tooling

The underlying engineering principles would remain the same, but the
implementation stack would evolve with modern technologies.

---

# Senior Engineering Takeaways

The Angel One engagement reinforced several principles that continue to
guide my engineering decisions.

* Build for maintainability, not just delivery.
* Performance is a user-facing feature.
* Search should be treated as a product capability.
* Technical debt should be addressed continuously.
* Architecture should simplify future development.
* Business understanding leads to better engineering decisions.
* Reusable systems create long-term velocity.
* Small engineering improvements compound over years.

---

# Portfolio Usage

This document powers:

* Architecture Explorer
* Recruiter Mode
* Portfolio Assistant
* Case Study "Engineering Decisions"
* Interview Preparation
* Technical Leadership Discussions
* Staff / Senior Engineer Interviews

It explains not only what was built, but how engineering decisions were
made and the reasoning behind them.
