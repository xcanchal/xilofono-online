# Xilófono Online — Affiliate Rollout Tracker

This file tracks delivery, launch readiness, evidence, and decisions. The product requirements remain in `xilofono-online-affiliate-plan.md`.

**Current status:** In progress

**Last updated:** 2026-07-18

## Status legend

- `Not started` — no work has begun
- `In progress` — implementation or verification is underway
- `Blocked` — requires an external decision, account access, or information
- `Done` — implementation is complete
- `Validated` — launched and supported by recorded evidence
- `Deferred` — intentionally out of scope for now

## Launch prerequisites

| Item | Status | Evidence / note |
|---|---|---|
| Affiliate programme account configured | Blocked | Requires merchant account and affiliate tag |
| Required disclosure wording confirmed | Blocked | Confirm in the merchant account before activation |
| Three products manually verified | Done | Amazon Spain listings, affiliate tag, product attributes, and catalogue entries reviewed on 2026-07-18 |
| Privacy and consent decision recorded | Blocked | Confirm the existing Umami setup is appropriate for the two aggregate events |
| Production rollout approved | Not started | |

## Phase 1 — Minimal affiliate MVP

**Status:** In progress

**Goal:** Validate interest in buying a physical xylophone without changing the primary play experience.

- [x] Add safe-disabled `affiliate-config.js`
- [x] Add centralized JSDoc product data module
- [x] Add dependency-free validation and native Node tests
- [x] Add reusable disclosure, retailer-link, and product-card rendering
- [x] Create `/mejores-xilofonos-para-ninos/`
- [x] Create `/aviso-afiliados/`
- [x] Add one secondary homepage CTA
- [x] Add `affiliate_guide_opened` event
- [x] Add `affiliate_link_clicked` event
- [x] Migrate to Astro static generation; affiliate HTML is build-time rendered
- [x] Add three verified, active products
- [ ] Confirm the generated sitemap includes the guide and disclosure at activation
- [ ] Complete desktop, mobile, and keyboard QA
- [x] Run validation and test commands

**Release evidence**

| Item | Value |
|---|---|
| Deployment / commit | |
| Feature activated on | |
| Products active | |
| Validation command | `npm run check` (passed with 7 tests and Astro build) |
| Manual QA completed by | |

**Phase 2 decision:** Record guide visits, retailer clicks, merchant purchases, and maintenance effort before progressing.

## Phase 2 — Contextual integration

**Status:** Deferred

**Gate:** Phase 1 receives consistent clicks, organic guide traffic, purchases, or clear homepage-to-guide visits.

- [ ] Add song-page CTA after educational content
- [ ] Add footer link
- [ ] Add PDF URL or QR code
- [ ] Add source attribution (`homepage`, `song-page`, `footer`, `pdf`)
- [ ] Measure guide traffic by source

## Phase 3 — Improve the buying guide

**Status:** Deferred

**Gate:** Contextual links produce enough traffic to identify high-performing entry points.

- [ ] Add comparison table and accessible mobile cards
- [ ] Add product badges and review dates
- [ ] Add meaningful one-time impression tracking
- [ ] Add product-level click-through reporting
- [ ] Improve FAQ and compatibility guidance

## Phase 4 — Merchant diversification

**Status:** Deferred

**Gate:** One merchant is producing enough validated value to justify maintaining alternatives.

- [ ] Add a second merchant
- [ ] Support multiple offers per product
- [ ] Expand host allowlist and validation
- [ ] Add merchant-level reporting
- [ ] Document merchant replacement workflow

## Phase 5 — Maintenance and optimisation

**Status:** Deferred

**Gate:** The channel needs operational tooling rather than occasional manual review.

- [ ] Add broken-link monitoring
- [ ] Add 60–90 day product-review reminders
- [ ] Add lightweight CTA tests
- [ ] Consider seasonal pages
- [ ] Consider a redirect route, CMS, or database only if static maintenance becomes painful

## Product review log

| Product ID | Merchant | Last reviewed | Link valid | Reviewer notes |
|---|---|---|---|---|
| `fuzeau-8288-metallonotes` | Amazon | 2026-07-18 | Yes | 8 coloured removable bars; two mallets and storage case. |
| `stoies-rainbow-xylophone` | Amazon | 2026-07-18 | Yes | 8-note C-major wooden model; two mallets and song book. |
| `a-star-wooden-xylophone` | Amazon | 2026-07-18 | Yes | 8-note diatonic wooden model with two wooden beaters. |

## Decision log

| Date | Phase | Decision | Reason / evidence |
|---|---|---|---|
| 2026-07-17 | 1 | Migrate to Astro static generation | Affiliate and editorial content must be present in the generated HTML; the Web Audio instrument remains plain browser JavaScript |
