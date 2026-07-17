import { affiliateConfig } from '../../affiliate-config.js';
import { affiliateProducts } from '../../affiliate-products.js';
import { assertValidAffiliateProducts, validateAffiliateProducts } from '../../affiliate-validation.js';

const DISCLOSURE = 'Algunos enlaces son de afiliado. Si compras a través de ellos, podemos recibir una comisión sin coste adicional para ti.';
const buildAffiliateConfig = Object.freeze({
  ...affiliateConfig,
  enabled: import.meta.env?.PUBLIC_ENABLE_AFFILIATES === 'true'
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getProducts() {
  if (!buildAffiliateConfig.enabled) return [];

  const errors = validateAffiliateProducts(affiliateProducts, buildAffiliateConfig);
  if (errors.length > 0) {
    if (import.meta.env?.PROD) {
      assertValidAffiliateProducts(affiliateProducts, buildAffiliateConfig);
    }
    console.warn('Affiliate products are not rendered in development until the catalogue is complete.', errors);
    return [];
  }

  return affiliateProducts
    .filter((product) => product.active)
    .sort((first, second) => first.displayOrder - second.displayOrder);
}

function disclosureHtml() {
  return `<p class="affiliate-disclosure">${DISCLOSURE} <a href="/aviso-afiliados/">Más información.</a></p>`;
}

function badgeLabel(badge) {
  return {
    'best-overall': 'Mejor opción general',
    budget: 'Mejor calidad-precio',
    'young-children': 'Mejor para niños pequeños',
    quality: 'Mejor calidad',
    classroom: 'Mejor para el aula'
  }[badge];
}

export function renderAffiliateProductCard(product) {
  const merchant = affiliateConfig.merchants[product.merchant];
  const noteRange = product.noteRange || (product.noteCount ? `${product.noteCount} notas` : 'No verificado');
  const details = [
    ['Notas', noteRange],
    ['Comercio', merchant],
    product.colorCoded === undefined ? null : ['Láminas de colores', product.colorCoded ? 'Sí' : 'No verificado'],
    product.matchesWebsiteColors === undefined ? null : ['Colores como en la web', product.matchesWebsiteColors ? 'Sí' : 'No necesariamente']
  ].filter(Boolean).map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`).join('');
  const list = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const badge = product.badge ? `<p class="affiliate-badge">${escapeHtml(badgeLabel(product.badge))}</p>` : '';

  return `<article class="affiliate-card">
  <figure class="affiliate-image">
    <img src="${escapeHtml(product.imageSrc)}" alt="${escapeHtml(product.imageAlt)}" width="720" height="480" loading="lazy" decoding="async">
    <figcaption>Ilustración orientativa</figcaption>
  </figure>
  <div class="affiliate-card-content">
    <div class="affiliate-card-heading">${badge}<h2>${escapeHtml(product.name)}</h2></div>
    <p class="affiliate-best-for"><strong>Ideal para: </strong>${escapeHtml(product.bestFor)}</p>
    <dl class="affiliate-details">${details}</dl>
    <div class="affiliate-card-lists">
      <section class="affiliate-strengths"><h3>Puntos fuertes</h3><ul>${list(product.strengths)}</ul></section>
      <section class="affiliate-limitations"><h3>A tener en cuenta</h3><ul>${list(product.limitations)}</ul></section>
    </div>
    <a class="affiliate-button" href="${escapeHtml(product.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer" aria-label="Ver ${escapeHtml(product.name)} en ${escapeHtml(merchant)}" data-umami-event="affiliate_link_clicked" data-umami-event-product-id="${escapeHtml(product.id)}" data-umami-event-merchant="${escapeHtml(product.merchant)}" data-umami-event-placement="buying-guide">Ver en ${escapeHtml(merchant)}</a>
  </div>
</article>`;
}

export function renderHomepageAffiliateCta() {
  if (!buildAffiliateConfig.enabled) return '';

  return `<section class="affiliate-home-cta">
  <h2>¿Quieres seguir practicando fuera de la pantalla?</h2>
  <p>Consulta tres xilófonos recomendados para empezar y tocar las mismas canciones.</p>
  <a class="affiliate-guide-link" href="/mejores-xilofonos-para-ninos/" data-umami-event="affiliate_guide_opened" data-umami-event-source="homepage">Ver xilófonos recomendados</a>
  ${disclosureHtml()}
</section>`;
}

export function renderBuyingGuideAffiliateProducts() {
  const products = getProducts();
  if (products.length === 0) return '';

  return `<h2>Tres xilófonos recomendados</h2><div class="affiliate-product-grid">${products.map(renderAffiliateProductCard).join('')}</div>${disclosureHtml()}`;
}
