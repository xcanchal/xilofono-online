import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { affiliateConfig } from '../affiliate-config.js';
import { validateAffiliateProducts } from '../affiliate-validation.js';
import { renderAffiliateProductCard, renderBuyingGuideAffiliateProducts, renderHomepageAffiliateCta } from '../src/lib/affiliate-html.js';

const validProduct = {
  id: 'eight-note-example',
  slug: 'eight-note-example',
  name: 'Eight Note Example',
  shortName: 'Example',
  merchant: 'amazon-es',
  affiliateUrl: 'https://www.amazon.es/dp/example',
  imageSrc: '/images/affiliate/example.png',
  imageAlt: 'Ilustración orientativa de un xilófono de ocho notas',
  bestFor: 'Principiantes',
  noteCount: 8,
  strengths: ['Cubre una octava'],
  limitations: ['Los colores pueden variar'],
  active: true,
  displayOrder: 1,
  lastReviewedAt: '2026-07-17'
};

test('affiliate modules are disabled by default', () => {
  assert.equal(affiliateConfig.enabled, false);
});

test('a complete active product passes validation', () => {
  assert.deepEqual(validateAffiliateProducts([validProduct], affiliateConfig), []);
});

test('enabled Phase 1 requires exactly three active products', () => {
  const enabledConfig = { ...affiliateConfig, enabled: true };
  const errors = validateAffiliateProducts([validProduct], enabledConfig);

  assert(errors.some((error) => error.includes('exactly three active')));
});

test('validation rejects duplicate IDs and unapproved merchant hosts', () => {
  const duplicate = { ...validProduct, affiliateUrl: 'https://example.com/product' };
  const errors = validateAffiliateProducts([validProduct, duplicate], affiliateConfig);

  assert(errors.some((error) => error.includes('Duplicate id')));
  assert(errors.some((error) => error.includes('host is not allowed')));
});

test('validation requires strengths and limitations for active products', () => {
  const incomplete = { ...validProduct, strengths: [], limitations: [] };
  const errors = validateAffiliateProducts([incomplete], affiliateConfig);

  assert(errors.some((error) => error.includes('at least one strength')));
  assert(errors.some((error) => error.includes('at least one limitation')));
});

test('validation requires an image and explanatory alt text for active products', () => {
  const incomplete = { ...validProduct, imageSrc: '', imageAlt: '' };
  const errors = validateAffiliateProducts([incomplete], affiliateConfig);

  assert(errors.some((error) => error.includes('imageSrc')));
  assert(errors.some((error) => error.includes('imageAlt')));
});

test('statically rendered affiliate links use the required safe attributes', () => {
  const card = renderAffiliateProductCard(validProduct);

  assert.match(card, /target="_blank"/);
  assert.match(card, /rel="sponsored nofollow noopener noreferrer"/);
  assert.match(card, /data-umami-event="affiliate_link_clicked"/);
  assert.match(card, /Ilustración orientativa/);
});

test('disabled affiliate modules render no commercial HTML', () => {
  assert.equal(renderHomepageAffiliateCta(), '');
  assert.equal(renderBuyingGuideAffiliateProducts(), '');
});

test('printable PDF downloads record their placement', async () => {
  const [homepage, songsIndex] = await Promise.all([
    readFile(new URL('../index.html', import.meta.url), 'utf8'),
    readFile(new URL('../canciones-faciles-para-xilofono/index.html', import.meta.url), 'utf8')
  ]);

  assert.match(homepage, /data-umami-event="pdf_downloaded"/);
  assert.match(homepage, /data-umami-event-placement="homepage"/);
  assert.match(songsIndex, /data-umami-event="pdf_downloaded"/);
  assert.match(songsIndex, /data-umami-event-placement="songs-index"/);
});
