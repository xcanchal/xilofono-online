export const affiliateConfig = Object.freeze({
  // Node validation and post-build verification receive this value from the shell.
  // Astro page rendering reads import.meta.env so .env.development works locally.
  enabled: process.env.PUBLIC_ENABLE_AFFILIATES === 'true',
  allowedMerchantHosts: ['amazon.es', 'www.amazon.es'],
  merchants: Object.freeze({
    'amazon-es': 'Amazon'
  })
});
