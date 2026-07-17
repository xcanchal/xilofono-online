import { affiliateConfig } from '../affiliate-config.js';
import { affiliateProducts } from '../affiliate-products.js';
import { assertValidAffiliateProducts } from '../affiliate-validation.js';

assertValidAffiliateProducts(affiliateProducts, affiliateConfig);
console.log(`Affiliate product validation passed (${affiliateProducts.length} configured product${affiliateProducts.length === 1 ? '' : 's'}).`);
