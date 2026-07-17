const MERCHANT_IDS = new Set(['amazon-es', 'thomann', 'music-store', 'other']);
const BADGES = new Set([
  'best-overall',
  'budget',
  'young-children',
  'quality',
  'classroom'
]);

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function hasUniqueValues(products, field, errors) {
  const values = new Set();

  products.forEach((product) => {
    if (values.has(product[field])) {
      errors.push(`Duplicate ${field}: ${product[field]}`);
    }
    values.add(product[field]);
  });
}

/**
 * Returns validation messages for a static affiliate catalogue.
 *
 * @param {Array<object>} products
 * @param {{ allowedMerchantHosts: string[], merchants: Record<string, string> }} config
 * @returns {string[]}
 */
export function validateAffiliateProducts(products, config) {
  const errors = [];

  if (!Array.isArray(products)) {
    return ['Affiliate products must be an array'];
  }

  hasUniqueValues(products, 'id', errors);
  hasUniqueValues(products, 'slug', errors);
  hasUniqueValues(products, 'displayOrder', errors);

  products.forEach((product) => {
    const label = isNonEmptyString(product?.id) ? product.id : 'unknown product';

    if (!isNonEmptyString(product?.id)) errors.push(`${label}: id is required`);
    if (!isNonEmptyString(product?.slug)) errors.push(`${label}: slug is required`);
    if (!isNonEmptyString(product?.name)) errors.push(`${label}: name is required`);
    if (!isNonEmptyString(product?.shortName)) errors.push(`${label}: shortName is required`);
    if (!Number.isInteger(product?.displayOrder)) errors.push(`${label}: displayOrder must be an integer`);
    if (typeof product?.active !== 'boolean') errors.push(`${label}: active must be a boolean`);

    if (!MERCHANT_IDS.has(product?.merchant) || !config.merchants[product.merchant]) {
      errors.push(`${label}: unsupported merchant`);
    }
    if (product?.badge && !BADGES.has(product.badge)) errors.push(`${label}: unsupported badge`);
    if (product?.noteCount !== undefined && (!Number.isInteger(product.noteCount) || product.noteCount < 1)) {
      errors.push(`${label}: noteCount must be a positive integer`);
    }

    if (!product?.active) return;

    if (!isNonEmptyString(product.affiliateUrl)) {
      errors.push(`${label}: active products require an affiliateUrl`);
    } else {
      try {
        const url = new URL(product.affiliateUrl);
        if (!config.allowedMerchantHosts.includes(url.hostname)) {
          errors.push(`${label}: affiliate URL host is not allowed`);
        }
      } catch {
        errors.push(`${label}: affiliateUrl must be a valid URL`);
      }
    }

    if (!isNonEmptyString(product.bestFor)) errors.push(`${label}: active products require bestFor`);
    if (!isNonEmptyString(product.imageSrc)) errors.push(`${label}: active products require imageSrc`);
    if (!isNonEmptyString(product.imageAlt)) errors.push(`${label}: active products require imageAlt`);
    if (!Array.isArray(product.strengths) || product.strengths.length === 0) {
      errors.push(`${label}: active products require at least one strength`);
    }
    if (!Array.isArray(product.limitations) || product.limitations.length === 0) {
      errors.push(`${label}: active products require at least one limitation`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(product.lastReviewedAt || '')) {
      errors.push(`${label}: active products require lastReviewedAt in YYYY-MM-DD format`);
    }
  });

  if (config.enabled) {
    const activeProducts = products.filter((product) => product.active);
    if (activeProducts.length !== 3) {
      errors.push('Phase 1 requires exactly three active, verified products when affiliates are enabled');
    }
  }

  return errors;
}

export function assertValidAffiliateProducts(products, config) {
  const errors = validateAffiliateProducts(products, config);
  if (errors.length > 0) {
    throw new Error(`Affiliate product validation failed:\n- ${errors.join('\n- ')}`);
  }
}
