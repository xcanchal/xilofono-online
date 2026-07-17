# Xilófono Online — Affiliate Monetization Plan

**Domain:** https://xilofono-online.com  
**Document type:** Product requirements and technical implementation plan  
**Primary audience:** Codex / software engineer  
**Scope:** Affiliate monetization only  
**Status:** In progress  
**Last updated:** 2026-07-17

Delivery state, launch evidence, and phase gates are tracked separately in `affiliate-progress.md`.

---

## 1. Executive summary

Xilófono Online should monetize through relevant affiliate recommendations for physical xylophones and beginner musical instruments.

The core user journey is:

```text
Visitor opens Xilófono Online
        ↓
Child plays the virtual xylophone
        ↓
Parent or teacher sees that the experience is useful
        ↓
Adult considers buying a physical instrument
        ↓
Xilófono Online recommends compatible products
        ↓
Visitor clicks an affiliate link
        ↓
Xilófono Online may receive a commission
```

The affiliate experience must feel like useful editorial guidance, not generic advertising.

The recommended implementation consists of:

1. A dedicated buying guide
2. A small affiliate call-to-action below the virtual instrument
3. A contextual affiliate call-to-action at the end of song pages
4. A manually curated product catalogue
5. Clear affiliate disclosures
6. Privacy-safe click and impression analytics
7. Feature flags that allow affiliate modules to be disabled instantly

The first release should not include dynamic prices, automated product scraping, a database, a CMS, user reviews, display ads, paid downloads, or user accounts.

---

## 2. Product objective

The purpose of the affiliate system is to help parents and teachers choose a physical xylophone that is compatible with the songs and teaching method used by Xilófono Online.

The recommendations should answer practical questions such as:

- How many notes does the instrument need?
- Does it cover the range from `Do/C` to the upper `Do/C`?
- Is it appropriate for beginners?
- Is it suitable for a young child?
- Are the notes color coded?
- Is it portable?
- Is it suitable for classroom use?
- How closely does it match the virtual instrument?

The affiliate model should improve the site even for users who never purchase anything.

---

## 3. Goals

### 3.1 Business goals

- Generate affiliate revenue from existing traffic
- Validate whether visitors have purchase intent
- Learn which pages and placements generate commercial clicks
- Identify which product types users prefer
- Build a low-maintenance monetization system
- Preserve the free nature of the virtual instrument

### 3.2 Product goals

- Make buying a suitable physical xylophone easier
- Avoid recommending incompatible instruments
- Explain trade-offs clearly
- Keep the virtual instrument as the highest-priority experience
- Provide commercial recommendations only to adults
- Maintain trust through transparent disclosures

### 3.3 Technical goals

- Keep affiliate data centralized
- Reuse affiliate components across pages
- Support multiple merchants later
- Keep the system database-free for the MVP
- Avoid hard-coded affiliate URLs inside page content
- Make all affiliate functionality removable through feature flags
- Add reliable analytics without collecting personal data

---

## 4. Non-goals

The first affiliate release will not include:

- Display advertising
- Donations
- Paid printable packs
- Subscriptions
- User accounts
- Product reviews submitted by users
- Real-time product prices
- Product availability scraping
- Amazon Product Advertising API integration
- Automated product imports
- A product marketplace
- Product recommendation personalization
- Child profiles
- Email marketing
- Affiliate links inside the interactive keys
- Affiliate pop-ups or interstitials

---

## 5. Target audiences

## 5.1 Parents

Typical intent:

- Buy a first musical instrument
- Find a toy that is also educational
- Help a child reproduce songs from the website
- Replace screen time with a physical activity
- Find a suitable birthday or Christmas gift

Likely useful recommendations:

- Best overall beginner xylophone
- Best affordable option
- Best for ages 3–5
- Best portable option
- Best-quality option

## 5.2 Teachers and educators

Typical intent:

- Buy instruments for classroom use
- Find durable instruments
- Use the same note system online and offline
- Purchase several low-cost instruments
- Use an instrument with a projector or interactive whiteboard lesson

Likely useful recommendations:

- Best classroom option
- Best multipack
- Best durable model
- Best instrument with clear note labels
- Best option for group activities

## 5.3 Children

Children are end users, not purchasers.

Requirements:

- Purchase calls-to-action must be written for adults
- Affiliate cards must not resemble game controls
- Commercial modules must not interrupt play
- Avoid urgency, scarcity, or manipulative language
- Do not encourage children to ask adults to purchase

---

## 6. Affiliate programme strategy

## 6.1 Initial provider

The MVP can start with Amazon Associates Spain because:

- It has broad product coverage
- Users already trust the platform
- It is familiar to Spanish consumers
- Product delivery and returns are handled externally
- Static product links are easy to integrate

The implementation must remain provider-neutral.

Possible future merchants:

- Thomann
- Music Store
- Educational supply retailers
- Local musical instrument shops
- Manufacturers with direct referral programmes
- Toy retailers

## 6.2 Merchant-neutral architecture

The centralized JavaScript model should support the merchant IDs `amazon-es`, `thomann`, `music-store`, and `other`.

The UI must display the merchant clearly.

Example button labels:

```text
Ver en Amazon
Ver en Thomann
Ver precio y disponibilidad
```

Do not use generic labels such as:

```text
Comprar ahora
Oferta
Últimas unidades
```

unless the information is verified and compliant.

---

## 7. Product selection strategy

## 7.1 Initial product set

Launch with three to five carefully selected products.

Recommended categories:

1. Best overall beginner option
2. Best affordable option
3. Best for young children
4. Best higher-quality option
5. Best classroom option

Avoid publishing ten or more products at launch.

A small, useful selection is better than a large, low-quality catalogue.

## 7.2 Required product criteria

Each selected product should be manually checked for:

- Number of notes
- Lowest note
- Highest note
- Whether it covers at least `Do/C` to upper `Do/C`
- Color-coded keys
- Key material
- Frame material
- Manufacturer guidance
- Product dimensions
- Portability
- Included mallets
- Merchant availability
- Product stability over time
- Suitability for beginners
- Suitability for classroom use
- Compatibility with Xilófono Online songs

## 7.3 Compatibility rules

Preferred instruments:

```text
8-note diatonic range:
Do / C
Re / D
Mi / E
Fa / F
Sol / G
La / A
Si / B
Do / C
```

Products with more notes may also be recommended.

Products with fewer notes should not be recommended for the main song catalogue unless a limitation is clearly stated.

## 7.4 Editorial labels

Supported labels: `best-overall`, `budget`, `young-children`, `quality`, and `classroom`.

Spanish UI equivalents:

```text
Mejor opción general
Mejor calidad-precio
Mejor para niños pequeños
Mejor calidad
Mejor para el aula
```

## 7.5 Recommendation rules

Every recommended product must include:

- Who it is best for
- Why it was selected
- Main strengths
- At least one limitation
- Note range
- Whether the colors match the website
- Merchant
- Last review date

Do not recommend a product solely because it offers a higher commission.

---

## 8. Product placement strategy

## 8.1 Homepage placement

Place one compact affiliate CTA below the virtual instrument or after the first explanatory section.

Suggested copy:

```text
¿Quieres seguir practicando fuera de la pantalla?

Consulta nuestra guía de xilófonos de 8 notas para encontrar un instrumento adecuado para tocar estas canciones.

[Ver xilófonos recomendados]
```

Requirements:

- Do not place the CTA before the instrument
- Do not place product cards beside the keys
- Do not auto-open the buying guide
- Use a visually secondary style
- Clearly indicate that the guide is for parents and teachers

## 8.2 Song-page placement

Add one contextual CTA after the complete song content.

Suggested copy:

```text
Para tocar esta canción en un instrumento real necesitas un xilófono que cubra al menos desde Do/C hasta Do/C.

[Ver instrumentos recomendados]
```

Alternative copy:

```text
¿Quieres practicar esta canción en un xilófono físico?

Consulta modelos compatibles con las notas utilizadas en Xilófono Online.

[Elegir un xilófono]
```

## 8.3 Buying-guide placement

Create a dedicated route:

```text
/mejores-xilofonos-para-ninos/
```

This is the primary affiliate conversion page.

The guide should contain:

- Introductory guidance
- Quick recommendations
- Comparison table
- Detailed product cards
- Explanation of note ranges
- Explanation of colors
- Xylophone versus metallophone terminology
- FAQ
- Affiliate disclosure

## 8.4 PDF placement

If the site already has a free printable PDF, add a small non-intrusive section near the end:

```text
¿Necesitas un xilófono físico?

Consulta instrumentos compatibles con estas canciones:

xilofono-online.com/mejores-xilofonos-para-ninos
```

Optionally include a QR code.

Do not embed direct affiliate URLs in the PDF.

## 8.5 Footer placement

A footer link may point to:

```text
Xilófonos recomendados
```

Do not add product cards to the footer.

---

## 9. Buying guide requirements

## 9.1 Route

```text
/mejores-xilofonos-para-ninos/
```

## 9.2 Suggested title

```text
Mejores xilófonos para niños: guía para elegir uno de 8 notas
```

## 9.3 Suggested meta description

```text
Compara xilófonos para niños y principiantes. Descubre cuántas notas necesitas, qué modelos son compatibles con nuestras canciones y cuál elegir para casa o el aula.
```

## 9.4 Page structure

```text
H1: Mejores xilófonos para niños

Introduction
Quick recommendations
Comparison table
How many notes are needed?
Why an 8-note range is useful
Xylophone vs metallophone
Detailed recommendations
Which model should you choose?
Compatibility with Xilófono Online
Frequently asked questions
Affiliate disclosure
Last reviewed date
```

## 9.5 Quick recommendation section

Example:

```text
Mejor opción general
[Product name]

Mejor opción económica
[Product name]

Mejor para niños pequeños
[Product name]

Mejor para el aula
[Product name]
```

Each item should link to the relevant detailed section before linking externally.

## 9.6 Comparison table

Recommended columns:

| Product | Best for | Notes | Color coded | Material | Main limitation | Merchant |
|---|---|---:|---|---|---|---|

Mobile behavior:

- Convert rows into cards
- Keep the comparison order
- Preserve accessible labels
- Avoid horizontal scrolling where practical

## 9.7 Detailed product section

Each product section should include:

```text
Product name
Editorial badge
Best for
Product image
Summary
Note range
Strengths
Limitations
Compatibility with the website
Last reviewed date
Affiliate disclosure
Merchant button
```

## 9.8 Editorial transparency

Add text such as:

```text
Seleccionamos estos instrumentos según su rango de notas, facilidad de uso, compatibilidad con las canciones del sitio y características para principiantes. No ordenamos los productos únicamente por comisión.
```

Do not claim personal testing unless the product was actually tested.

---

## 10. Affiliate disclosure

## 10.1 Short disclosure

Show near all affiliate modules:

```text
Algunos enlaces son de afiliado. Si compras a través de ellos, podemos recibir una comisión sin coste adicional para ti.
```

## 10.2 Full disclosure page

Create:

```text
/aviso-afiliados/
```

Suggested sections:

- What affiliate links are
- How commissions work
- No additional cost to the user
- Editorial independence
- Merchants used
- Product information limitations
- Price and availability changes
- Contact information

## 10.3 Link attributes

Every affiliate link must include:

```html
rel="sponsored nofollow"
```

External links may include:

```html
target="_blank"
```

only if consistent with the site's UX.

If `target="_blank"` is used, also include:

```html
rel="sponsored nofollow noopener noreferrer"
```

## 10.4 Programme-specific wording

Before launch, verify the latest required disclosure language in the relevant affiliate programme account.

Do not rely on this document as the final legal wording.

---

## 11. Product data model

This is an Astro static site deployed to GitHub Pages. Keep all affiliate data in one ES module and use JSDoc for editor support. Astro reads that data during the build and writes the resulting product cards into the HTML; it is not fetched or rendered by browser JavaScript.

Suggested file: `affiliate-products.js`.

```js
/**
 * @typedef {'amazon-es' | 'thomann' | 'music-store' | 'other'} AffiliateMerchant
 * @typedef {'best-overall' | 'budget' | 'young-children' | 'quality' | 'classroom'} AffiliateBadge
 * @typedef {object} AffiliateProduct
 * @property {string} id
 * @property {string} slug
 * @property {string} name
 * @property {string} shortName
 * @property {AffiliateMerchant} merchant
 * @property {string} affiliateUrl
 * @property {number=} noteCount
 * @property {string=} noteRange
 * @property {boolean=} colorCoded
 * @property {boolean=} matchesWebsiteColors
 * @property {string=} material
 * @property {string=} recommendedAges
 * @property {string} bestFor
 * @property {string[]} strengths
 * @property {string[]} limitations
 * @property {AffiliateBadge=} badge
 * @property {boolean} active
 * @property {number} displayOrder
 * @property {string} lastReviewedAt
 */

/** @type {AffiliateProduct[]} */
export const affiliateProducts = [];
```

The initial committed configuration must contain no invented products, copied retailer images, or placeholder URLs. Add a product and mark it `active: true` only after its merchant URL, attributes, and editorial claims have been manually verified.

---

## 12. Data validation

Run validation before every affiliate deployment with `npm run check`. The command runs the dependency-free Node validator and tests, then performs the Astro static build. An enabled build fails unless it has exactly three valid active products.

The validator must reject:

- duplicate `id`, `slug`, or `displayOrder` values
- invalid URLs or hosts outside the merchant allowlist
- active products without a review date, `bestFor`, strength, or limitation
- unsupported merchants or badge values
- inactive products supplied to rendering functions
- non-positive note counts

Export a pure `validateAffiliateProducts(products)` function for native Node tests. Do not add Zod or a framework solely for this small static catalogue.

---

## 13. Suggested project structure

Use Astro's static-site structure:

```text
astro.config.mjs                    # static output, canonical site URL, sitemap filter
src/components/LegacyPage.astro     # preserves existing page markup during migration
src/lib/affiliate-html.js           # build-time affiliate HTML renderer
src/pages/                           # file-based routes for every existing public URL
affiliate-config.js                 # build-time feature switch and permitted merchant hosts
affiliate-products.js               # all product data, exported as an ES module
affiliate-validation.js             # build-time catalogue validation
scripts/validate-affiliates.mjs     # native Node validation command
scripts/copy-static-assets.mjs      # copies existing PDFs, icons, CSS, and scripts to dist/
test/affiliate-products.test.mjs    # native node:test coverage
.github/workflows/deploy.yml        # builds dist/ and deploys GitHub Pages
README.md                           # development, validation, and activation instructions
```

---

## 14. Feature flag

Add `affiliate-config.js`:

```js
export const affiliateConfig = {
  enabled: process.env.PUBLIC_ENABLE_AFFILIATES === 'true',
  allowedMerchantHosts: ['amazon.es', 'www.amazon.es']
};
```

`PUBLIC_ENABLE_AFFILIATES` is a build-time environment variable. It defaults to `false`; GitHub Actions reads it from a repository variable and Astro compiles either the commercial HTML or the educational-only version into `dist/`.

Requirements:

- Default must be disabled
- No CTA, disclosure, product cards, affiliate URLs, or affiliate analytics should be present in the generated HTML when disabled
- No empty spacing should remain
- The buying-guide route remains an educational page without commercial modules when disabled
- The guide is omitted from the build-generated sitemap until affiliate modules are enabled

GitHub Pages cannot return a feature-flagged 404 at runtime. The educational fallback is the safe static equivalent.

---

## 15. Affiliate build modules

Implement the following build-time rendering functions in `src/lib/affiliate-html.js`:

### 15.1 `disclosureHtml`

- Renders the short disclosure and its link to `/aviso-afiliados/`
- Is readable and does not use tiny or low-contrast text

### 15.2 `renderAffiliateProductCard`

- Resolves the centralized product URL during the build
- Adds the required `rel` attributes and clear merchant label
- Adds only aggregate Umami click-event data attributes
- Escapes every configured value before writing HTML

### 15.3 `renderHomepageAffiliateCta` and `renderBuyingGuideAffiliateProducts`

- Emit static HTML only when the feature is enabled
- Display product facts, strengths, a limitation, merchant, and review date
- Do not display prices, ratings, or unverified claims

Comparison tables, contextual song-page CTAs, non-text badges, and impression tracking belong to later phases and must not be built in Phase 1.

---

## 16. Affiliate URLs

Do not scatter raw affiliate URLs throughout page components.

Use a centralized resolver in `src/lib/affiliate-html.js`:

```js
export function getAffiliateUrl(product) {
  if (!product.active) {
    throw new Error(
      `Cannot resolve inactive product: ${product.id}`
    );
  }

  return product.affiliateUrl;
}
```

## 16.1 Merchant allowlist

```js
const ALLOWED_AFFILIATE_HOSTS = new Set([
  'amazon.es',
  'www.amazon.es',
  'thomann.de',
  'www.thomann.de'
]);
```

Validation should reject unknown hosts unless explicitly reviewed.

## 16.2 Redirect route

A first-party redirect route is optional:

```text
/go/product-slug
```

Do not include it in the MVP unless there is a clear need.

Potential benefits:

- Centralized link updates
- Server-side click logging
- Cleaner URLs in PDFs

Potential risks:

- Perceived link cloaking
- Extra maintenance
- Open-redirect vulnerabilities
- Additional compliance review
- Search-engine confusion

If implemented later:

- Use an allowlist
- Prevent arbitrary destination parameters
- Use a temporary redirect
- Keep merchant identity visible before the click
- Add `noindex`
- Exclude `/go/*` from XML sitemaps
- Never use the route to hide the destination deceptively

---

## 17. Analytics

## 17.1 Principles

Because the site is child-oriented:

- Track aggregate interactions only
- Do not collect personal information
- Do not collect age
- Do not create behavioral profiles
- Do not send arbitrary user input
- Do not use session replay
- Avoid persistent identifiers where possible
- Respect consent requirements

## 17.2 Events

```text
affiliate_module_viewed
  placement: placement ID
  productIds: product IDs

affiliate_guide_opened
  source:
        source:
          | 'homepage'
          | 'song-page'
          | 'footer'
          | 'pdf'
          | 'other';
        songId?: string;
affiliate_link_clicked
  productId: configured product ID
  merchant: configured merchant ID
  placement: placement ID
```

## 17.3 Impression tracking

A module impression should only fire when:

- The module enters the viewport
- At least 50% is visible
- It remains visible for a minimum threshold such as one second
- The event has not already fired for that module instance

Do not fire an impression merely because HTML was rendered.

## 17.4 KPIs

Primary:

```text
Guide click-through rate =
affiliate guide opens / eligible page sessions
```

```text
Product click-through rate =
affiliate retailer clicks / affiliate module impressions
```

```text
Affiliate revenue per 1,000 sessions =
affiliate revenue / sessions × 1,000
```

Secondary:

- Clicks by product
- Clicks by merchant
- Clicks by placement
- Clicks by landing page
- Clicks by device category
- Clicks by country
- Conversion rate from merchant reports
- Revenue by product
- Returned or cancelled orders

## 17.5 Guardrails

Affiliate monetization must not materially reduce:

- Virtual instrument interactions
- Song demo starts
- Song-page engagement
- Organic traffic
- Return visits
- Core Web Vitals
- Accessibility

---

## 18. SEO requirements

## 18.1 On-page SEO

The buying guide must include:

- Unique title
- Unique meta description
- Self-referencing canonical
- One H1
- Descriptive headings
- Original content
- Internal links to the virtual instrument
- Internal links to song pages
- Affiliate disclosure
- Last reviewed date
- Useful image alternative text

## 18.2 Structured data

Potentially appropriate:

- `Article`
- `BreadcrumbList`
- `ItemList`
- `FAQPage`, only for visible FAQs

Be cautious with:

- `Product`
- `Review`
- `AggregateRating`
- `Offer`

Do not publish:

- Fabricated ratings
- Unverified prices
- Fake product reviews
- Merchant inventory claims
- Product schema implying Xilófono Online is the seller

## 18.3 Internal links

Homepage:

```text
Virtual instrument
        ↓
Recommended xylophones guide
```

Song page:

```text
Song instructions
        ↓
Compatible physical instrument guide
```

Buying guide:

```text
Product comparison
        ↓
Virtual instrument
        ↓
Compatible song collection
```

## 18.4 Product images

Use only images that are permitted by:

- The affiliate programme
- The merchant
- The manufacturer
- The image licence

Do not copy arbitrary retailer images into the repository without permission.

For the MVP, acceptable options may include:

- Affiliate-programme-provided images
- Manufacturer press images with permission
- Original photographs
- No product image until compliant sourcing is resolved

---

## 19. Performance requirements

- Affiliate components must not block the instrument
- No large third-party affiliate SDK
- Astro renders the product cards and guide copy into static HTML at build time
- Product images must declare dimensions
- Product images should be lazy-loaded below the fold
- Use modern image formats where possible
- Avoid cumulative layout shift
- Keep the existing Web Audio xylophone as plain browser JavaScript; do not hydrate a React application for static content
- Analytics must use the existing Umami tracker already loaded on the homepage and songs page
- Affiliate modules add no client JavaScript

Recommended performance budget:

```text
Additional client JavaScript for affiliate UI:
Preferably under 10 KB compressed
```

The exact budget may be adjusted to the existing stack.

---

## 20. Accessibility requirements

- All affiliate actions must be keyboard accessible
- Buttons and links must have visible focus states
- External-link purpose must be clear
- Merchant names must be readable
- Do not rely on color alone for badges
- Product images need useful alt text
- Comparison cards need semantic headings
- Table headers must use correct markup
- Disclosure text must meet contrast requirements
- Touch targets should be at least 44 × 44 CSS pixels where practical
- Avoid motion unless optional
- Respect reduced-motion preferences
- Do not create visually deceptive calls-to-action

---

## 21. Privacy and legal checklist

This is an implementation checklist, not legal advice.

Before launch:

- Verify current affiliate programme terms
- Confirm required disclosure wording
- Update privacy policy
- Add affiliate disclosure page
- Confirm whether affiliate click tracking requires consent
- Review child-directed audience implications
- Avoid personalized product recommendations
- Avoid collecting child data
- Avoid session replay
- Avoid fingerprinting
- Confirm cookie behavior
- Confirm merchant-link behavior
- Ensure affiliate links are clearly distinguishable
- Ensure product claims are supportable
- Do not display prices unless permitted and current

---

## 22. Product maintenance workflow

## 22.1 Review cadence

Review active products every 60–90 days.

Review immediately when:

- A product becomes unavailable
- A retailer URL breaks
- A manufacturer changes the model
- Product specifications change
- The affiliate programme sends a policy update
- Users report incompatibility
- Merchant conversion falls unexpectedly

## 22.2 Review checklist

For each product:

- [ ] Link works
- [ ] Product still exists
- [ ] Merchant is correct
- [ ] Note count is correct
- [ ] Note range is correct
- [ ] Color information is correct
- [ ] Materials are correct
- [ ] Product still suits the stated audience
- [ ] Strengths remain accurate
- [ ] Limitations remain accurate
- [ ] Image use remains permitted
- [ ] Disclosure remains present
- [ ] `lastReviewedAt` is updated

## 22.3 Deactivating a product

Set:

```js
active: false
```

Expected behavior:

- Product disappears from the comparison page
- Product disappears from cards
- Product cannot generate affiliate URLs
- Product remains in version history
- No broken layout remains
- Analytics historical data keeps the same product ID

---

## 23. Testing plan

Use native `node:test` and `npm run build`. Do not introduce a browser-testing framework for this small static MVP.

## 23.1 Automated checks

- `node --test test/affiliate-products.test.mjs`
  - duplicate IDs, slugs, and display order
  - invalid URLs and unapproved merchant hosts
  - incomplete active products
  - inactive-product exclusion
  - safe-disabled configuration
  - affiliate URL and required `rel` attributes
  - minimal Umami event payloads
- `node scripts/validate-affiliates.mjs`
- assertions against the generated `dist/` routes, static assets, and sitemap

## 23.2 Manual browser checks

- With affiliates disabled, homepage has no CTA or empty gap; guide has no product links, disclosure, or affiliate events
- With affiliates enabled and three verified products, homepage CTA opens the guide and the guide renders exactly three cards in configured order
- Each merchant link opens safely, carries `rel="sponsored nofollow noopener noreferrer"`, and emits only the approved click event
- Verify mobile, desktop, keyboard navigation, visible focus, disclosure readability, and no instrument regression

## 23.3 Manual QA

- iPhone Safari
- Android Chrome
- Desktop Chrome
- Desktop Safari
- Tablet portrait
- Tablet landscape
- Keyboard-only use
- Screen-reader smoke test
- Slow network
- JavaScript disabled where relevant
- Affiliate links opened from Spain
- Product images
- Disclosure visibility
- Analytics event payloads
- Broken-link behavior

---

## 24. Phased delivery plan

The affiliate system should be shipped incrementally.

Each phase must deliver something usable on its own. Later phases should only be implemented when the previous phase shows enough value or exposes a real need.

---

## Phase 1 — Minimal affiliate MVP

### Goal

Validate whether visitors are interested in buying a physical xylophone.

### Product scope

Create one useful buying guide with a very small set of recommendations.

Launch with:

- One buying guide
- Three manually selected products
- One affiliate disclosure
- One simple CTA from the homepage
- Basic outbound click tracking

### Routes

```text
/mejores-xilofonos-para-ninos/
/aviso-afiliados/
```

### Product categories

Use only three:

1. Best overall
2. Best budget option
3. Best for young children

### Technical scope

Build only:

- JSDoc `AffiliateProduct` data model in a centralized ES module
- Static product data and a native Node validation script
- build-time disclosure, retailer-link, and product-card functions
- `affiliate-config.js` driven by `PUBLIC_ENABLE_AFFILIATES`, with a safe false default
- The two approved Umami events

### Analytics

Track only:

```text
affiliate_guide_opened
affiliate_link_clicked
```

Do not add viewport impression tracking yet.

### Explicitly excluded

- Comparison table
- Song-page CTAs
- Multiple merchants
- Product badges beyond simple text
- Product API
- Redirect routes
- Dynamic prices
- Product availability monitoring
- A/B testing
- Advanced analytics
- PDF links
- Teacher-specific recommendations
- Structured data beyond normal article metadata

### Acceptance criteria

```gherkin
Given affiliate monetization is enabled
When a visitor opens the homepage
Then one secondary CTA links to the buying guide
And the virtual instrument remains the primary element
```

```gherkin
Given a visitor opens the buying guide
Then three manually verified products are shown
And every product includes:
- who it is for;
- key strengths;
- at least one limitation;
- note count or range when verified;
- a visible affiliate disclosure.
```

```gherkin
Given a visitor clicks an affiliate link
Then the link includes rel="sponsored nofollow"
And a privacy-safe affiliate_link_clicked event is emitted
```

### Decision gate

Continue to Phase 2 only when at least one of the following is true:

- Affiliate links receive consistent clicks
- The guide starts receiving organic traffic
- Merchant reports show purchases
- Users visit the guide from the homepage
- Product maintenance feels manageable

---

## Phase 2 — Contextual integration

### Goal

Increase qualified traffic to the buying guide from pages where purchase intent is more likely.

### Product scope

Add contextual links from:

- Song pages
- Footer
- Existing free PDF, if easy to update

### Technical scope

Add:

- `ContextualAffiliateCta`
- Placement metadata in click analytics
- Optional `songId`
- Reusable CTA copy by context

### Suggested song-page copy

```text
Para tocar esta canción en un instrumento real necesitas un xilófono que cubra al menos desde Do/C hasta Do/C.

[Ver instrumentos recomendados]
```

### Analytics

Extend:

```text
affiliate_guide_opened
  source: homepage | song-page | footer | pdf
  songId: optional song ID
```

### Explicitly excluded

- Product links directly on every song page
- Product-specific recommendations by song
- User personalization
- Complex experiments
- Additional merchants

### Acceptance criteria

- Song-page CTAs appear after the educational content
- No CTA appears inside or beside the instrument controls
- Source attribution works in analytics
- Affiliate modules disappear cleanly when the feature flag is disabled

### Decision gate

Continue to Phase 3 when:

- Song pages send meaningful traffic to the guide
- Some songs or entry pages clearly outperform others
- There is enough usage to justify improving the comparison experience

---

## Phase 3 — Improve the buying guide

### Goal

Increase conversion from guide visitor to merchant click.

### Product scope

Upgrade the guide with:

- Comparison table
- Stronger category labels
- Better explanation of note compatibility
- Better mobile comparison UX
- Product review dates
- Additional FAQs
- One or two additional products, only if they fill a real gap

### Technical scope

Add:

- `ProductComparison`
- `AffiliateBadge`
- `displayOrder`
- Stronger pre-deploy validation
- Product-level click reporting
- Meaningful module impression tracking

### Analytics

Add:

```text
affiliate_module_viewed
```

Measure:

```text
retailer clicks / module views
```

### Possible additional categories

Only add where useful:

- Best quality option
- Best classroom option

### Explicitly excluded

- Automated product imports
- Dynamic prices
- Product review system
- User ratings
- Recommendation personalization

### Acceptance criteria

- Desktop comparison is easy to scan
- Mobile comparison uses stacked cards
- Every product still includes a limitation
- Impression events fire only after meaningful visibility
- Product order can be changed through data rather than component edits

### Decision gate

Continue to Phase 4 when:

- Affiliate clicks are meaningful
- There is enough revenue or conversion evidence to justify maintenance
- Users would benefit from retailer choice
- One merchant has availability gaps

---

## Phase 4 — Merchant diversification

### Goal

Reduce dependence on one affiliate programme and improve product availability.

### Product scope

Add a second merchant such as:

- Thomann
- Music Store
- An educational supplier
- A direct manufacturer

### Technical scope

Add:

- Merchant configuration
- Multiple offers per product, if needed
- Merchant-specific button labels
- Merchant allowlist expansion
- Merchant-level analytics

Potential model:

```js
{
  id: 'product-id',
  name: 'Product name',
  offers: [{ merchant: 'amazon-es', affiliateUrl: 'https://…', active: true }]
}
```

### Explicitly excluded

- Automated price comparison
- Real-time stock checks
- Cheapest-price claims
- Marketplace-style filtering

### Acceptance criteria

- Merchant identity is always visible
- Users can choose between merchants where available
- No stale price comparison is displayed
- Merchant-specific performance is measurable

### Decision gate

Continue to Phase 5 only if the affiliate channel becomes meaningful enough to require operational tooling.

---

## Phase 5 — Maintenance and optimization

### Goal

Make a proven affiliate channel easier to maintain and improve.

### Possible work

- Broken-link monitoring
- Product review reminders
- Automated inactive-link checks
- Lightweight CTA experiments
- Product availability alerts
- Optional first-party redirect route
- Seasonal gift guides
- Classroom-specific recommendations
- Additional commercial-intent SEO pages

### Do not build automatically

These items should only be implemented when a real operational problem exists:

- Product API integrations
- Automated catalogue syncing
- Dynamic pricing
- Complex experimentation platform
- Database-backed product management
- CMS workflow
- Recommendation engine

---

## 25. Prioritized backlog

## Phase 1 — Build now

- [ ] Join or configure one affiliate programme
- [ ] Confirm required disclosure wording
- [ ] Select three products
- [ ] Verify product attributes manually
- [ ] Add `affiliate-config.js` with `enabled: false`
- [ ] Add JSDoc `AffiliateProduct` data model
- [ ] Add static product data
- [ ] Add basic validation
- [ ] Build `AffiliateDisclosure`
- [ ] Build `AffiliateLink`
- [ ] Build simple `ProductCard`
- [ ] Create buying guide
- [ ] Create affiliate disclosure page
- [ ] Add homepage CTA
- [ ] Add click analytics
- [ ] Add basic tests
- [ ] Run mobile and accessibility QA

## Phase 2 — Add after validation

- [ ] Add song-page CTA
- [ ] Add footer link
- [ ] Add PDF URL or QR code
- [ ] Add source attribution in analytics
- [ ] Add contextual CTA component
- [ ] Measure guide traffic by source

## Phase 3 — Optimize conversion

- [ ] Add comparison table
- [ ] Add mobile comparison cards
- [ ] Add product badges
- [ ] Add product review dates
- [ ] Add impression tracking
- [ ] Add product-level CTR reporting
- [ ] Add one or two additional product categories
- [ ] Improve FAQ and compatibility guidance

## Phase 4 — Diversify

- [ ] Add second merchant
- [ ] Add merchant-specific analytics
- [ ] Support multiple offers per product
- [ ] Expand merchant allowlist
- [ ] Document merchant replacement workflow

## Phase 5 — Operationalize

- [ ] Add broken-link monitoring
- [ ] Add product review reminders
- [ ] Add lightweight CTA tests
- [ ] Add seasonal pages
- [ ] Consider redirect route
- [ ] Consider CMS or database only if static data becomes painful

---

## 26. Phase 1 technical specification

Phase 1 should remain intentionally small.

### Suggested data model

```js
/** @type {AffiliateProduct[]} */
export const affiliateProducts = [];
```

Define `AffiliateProduct` with JSDoc in `affiliate-products.js`. Astro reads this module during the build. Phase 1 uses only `id`, `slug`, `name`, `shortName`, `affiliateUrl`, `merchant`, `bestFor`, `noteCount` or `noteRange`, `strengths`, `limitations`, `active`, `displayOrder`, and `lastReviewedAt`.

### Suggested components

```text
disclosureHtml
renderAffiliateProductCard
renderHomepageAffiliateCta
renderBuyingGuideAffiliateProducts
```

Do not build yet:

```text
ProductComparison
AffiliateBadge
ContextualAffiliateCta
Affiliate redirect service
Merchant abstraction layer
```

A small merchant field is enough to avoid hard-coding copy.

### Suggested page structure

```text
H1
Short explanation
How many notes are needed?
Three product recommendations
How to choose
Xylophone vs metallophone
FAQ
Affiliate disclosure
```

### Suggested homepage CTA

```text
¿Quieres seguir practicando fuera de la pantalla?

Consulta tres xilófonos recomendados para empezar y tocar las mismas canciones.

[Ver xilófonos recomendados]
```

### Suggested events

```text
affiliate_guide_opened
  source: homepage

affiliate_link_clicked
  productId: configured product ID
  merchant: configured merchant ID
```

Use the existing Umami tracker. Astro writes the event data attributes into the static homepage CTA and retailer links. Do not send URLs, product names, visitor identifiers, age, or free-form input.

---

## 27. Phase 1 testing

### Automated checks

- Native `node:test` coverage for configuration, validation, inactive products, link attributes, and event payloads
- `node scripts/validate-affiliates.mjs`
- `npm run build` and assertions against the generated `dist/` HTML and sitemap
- An enabled build with fewer than three verified active products must fail

### Manual QA

- Mobile
- Desktop
- Keyboard navigation
- Visible focus states
- Disclosure readability
- Instrument unaffected
- No layout shift
- No price shown
- Merchant links valid from Spain
- Umami Events view shows only the two expected affiliate events after a controlled test

---

## 28. Suggested Codex prompt for Phase 1

```text
Implement Phase 1 of the Xilófono Online affiliate monetization plan.

Scope:
- Affiliate monetization only.
- Build the smallest useful MVP.
- Do not implement later phases.

Before coding:
1. Inspect the Astro route structure, shared CSS, existing Umami integration, content structure, and available command-line checks.
2. Identify the homepage route.
3. Reuse existing conventions.
4. Produce a concise file-level implementation plan.

Build:
- Astro static output and a GitHub Pages deployment workflow.
- `affiliate-config.js` driven by `PUBLIC_ENABLE_AFFILIATES`, with a safe false default.
- A JSDoc `AffiliateProduct` model in a build-time ES module.
- Centralized static configuration for up to three manually verified products.
- A dependency-free Node validation command and native tests.
- Build-time functions for disclosure, retailer links, and product cards.
- /mejores-xilofonos-para-ninos/.
- /aviso-afiliados/.
- One secondary CTA from the homepage to the buying guide.
- Two privacy-safe analytics events:
  - affiliate_guide_opened
  - affiliate_link_clicked

Buying-guide requirements:
- Spanish UI copy.
- Explain that an eight-note Do/C to Do/C range is suitable for many songs on the site.
- Explain xylophone versus metallophone terminology briefly.
- Show exactly three product categories:
  - best overall;
  - best budget option;
  - best for young children.
- Every product must include:
  - who it is for;
  - strengths;
  - at least one limitation;
  - note count or note range when verified.
- Include a visible affiliate disclosure.
- Do not show prices.
- Do not fabricate ratings, reviews, testing claims, safety claims, or product details.
- If verified products are not available, keep the product array empty and the affiliate switch disabled. Do not create placeholder URLs or claims.

Technical requirements:
- Centralize affiliate URLs.
- Add rel="sponsored nofollow" to every affiliate link.
- If target="_blank" is used, add noopener and noreferrer.
- Do not render inactive products.
- Do not leave empty layout space when affiliates are disabled.
- Keep affiliate UI lightweight.
- Do not add a database.
- Do not add a CMS.
- Do not add a comparison table.
- Do not add song-page CTAs.
- Do not add multiple merchants.
- Do not add impression tracking.
- Do not add redirect routes.
- Do not add dynamic prices.
- Do not add product APIs.

Testing:
- Native Node tests for configuration, validation, inactive products, link attributes, and event payloads.
- `npm run build` plus checks of generated HTML and sitemap output.
- Generated-HTML and manual browser checks for homepage CTA, click analytics, and disabled-state rendering.

Deliver:
- Production-ready code.
- Tests.
- Configuration and activation documentation.
- A summary of changed files.
- A short manual QA checklist.
```

## 29. Final recommendation

Do not build the complete affiliate system upfront.

Start with:

```text
One homepage CTA
        ↓
One useful buying guide
        ↓
Three curated products
        ↓
One affiliate programme
        ↓
Basic click tracking
```

This is enough to answer the first important question:

> Do Xilófono Online visitors actually click through to buy a physical instrument?

Only add song-page integrations, comparison tables, extra merchants, automated monitoring, or operational tooling after the MVP demonstrates real interest.

The first phase should be small enough to implement, review, and deploy without changing the nature of the site.
