# 05_MODULES.md

Project: Angel One (Formerly Angel Broking)

Status: Draft v1

Source:
Timesheet Analysis (2018–2024)

---

# Overview

Angel One was not a single application but a collection of
interconnected products, services and content platforms.

Throughout the engagement, development work was distributed across
multiple business domains, customer journeys and internal systems.

This document identifies those engineering modules and the work
performed within each.

---

# Product Architecture

```

Angel One Platform

```
├── Public Website
├── Market Data
├── Trading Information
├── Research
├── IPO
├── Mutual Funds
├── Knowledge Center
├── Blog
├── Search
├── CMS
├── APIs
├── SEO
├── Performance
└── Internal Engineering

1. Public Website

Purpose

Primary customer-facing experience.

Modules

Homepage
Landing Pages
Product Pages
Navigation
Footer
Header
Shared Components

Responsibilities

UI Development
Responsive Design
Bug Fixes
Performance
UX Improvements
2. Market Data Platform

Purpose

Display financial market information.

Modules

Stock Detail Pages
Company Pages
Market Movers
Top Gainers
Top Losers
Sector Performance
Historical Data

Responsibilities

Data Rendering
API Integration
Charts
Performance
UI Improvements
3. Trading Information

Purpose

Provide investors with actionable financial information.

Modules

Company Overview
Trading Information
Company Statistics
Financial Ratios
Market Data

Responsibilities

API Integration
UI
Business Logic
Bug Fixes
4. Research Platform

Purpose

Deliver research and investment insights.

Modules

Research Homepage
Research Articles
Categories
Analyst Reports
Market Analysis

Responsibilities

Templates
CMS
Navigation
SEO
5. IPO Platform

Purpose

Help users discover and evaluate IPOs.

Modules

IPO Listing
IPO Detail
IPO Timeline
IPO Information

Responsibilities

UI
APIs
Templates
Enhancements
6. Mutual Fund Platform

Purpose

Present mutual fund information.

Modules

Fund Listing
Scheme Pages
Fund Details
Returns
Charts

Responsibilities

UI
Data Integration
Performance
7. Knowledge Center

Purpose

Educational content.

Modules

Homepage
Categories
Learning Articles
Guides
Financial Education

Responsibilities

CMS
Templates
SEO
Performance
8. Blog Platform

Purpose

Content marketing.

Modules

Blog Homepage
Categories
Articles
Authors
Related Posts

Responsibilities

WordPress
Templates
SEO
Performance
9. Search Platform

Purpose

Content discovery.

Major Components

Elasticsearch
ElasticPress
Search APIs
Navigation Search
Suggestions

Responsibilities

Integration
UI
Optimization
Bug Fixes

One of the largest engineering investments.

10. AMP Platform

Purpose

High-performance mobile experience.

Modules

AMP Articles
AMP Templates
AMP Calculators
AMP Landing Pages

Responsibilities

Development
Validation
SEO
Bug Fixes
11. CMS

Purpose

Content management.

Platform

WordPress

Modules

Templates
Gutenberg
Admin
Publishing
Reusable Components

Responsibilities

Theme Development
CMS Architecture
Publishing Improvements
12. APIs

Purpose

Backend communication.

Currently Identified

Company API
Historical OHLCV
Ticketing API
Search API

Responsibilities

Integration
Mapping
Error Handling
13. Performance Layer

Cross-cutting engineering concerns.

Included

JavaScript Optimization
Asset Optimization
Rendering
AMP
Performance Improvements
14. SEO Layer

Cross-platform responsibilities.

Included

Metadata
AMP SEO
Webmaster
Search Visibility
Structured Content
15. UI Component Library

Shared Components

Navigation
Cards
Tables
Charts
Lists
Widgets
Buttons
Forms

Engineering Focus

Reusability

Consistency

Maintainability

16. Production Support

Responsibilities

Bug Fixes
QA
Releases
Merge Requests
Hotfixes
17. Internal Engineering

Activities

Technical Discussions
Planning
Architecture
Reviews
Refactoring
Module Relationships

Homepage

↓

Navigation

↓

Search

↓

Company Pages

↓

Market Data

↓

Historical APIs

↓

Research

↓

Knowledge Center

↓

Blog

↓

CMS

Complexity Ranking

★★★★★ Search

★★★★★ Market Data

★★★★★ Performance

★★★★★ AMP

★★★★★ Website

★★★★★ CMS

★★★★ IPO

★★★★ Research

★★★★ Mutual Funds

★★★★ Knowledge Center

★★★★ APIs

★★★ Blog

★★★ Internal Engineering