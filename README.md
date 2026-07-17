# Xilófono Online

Xilófono virtual gratuito para tocar en el navegador — https://xilofono-online.com

Astro static site hosted on GitHub Pages.

## Development

```sh
npm install
npm run dev
```

`npm run build` generates the deployable site in `dist/`. GitHub Pages deploys that directory through `.github/workflows/deploy.yml`.

In the repository’s **Settings → Pages**, choose **GitHub Actions** as the publishing source before merging the workflow to `main`.

## Affiliate Phase 1

Affiliate modules are disabled by default. Before enabling them, configure exactly three manually verified products in `affiliate-products.js`, confirm the merchant disclosure requirements, and set the GitHub Actions repository variable `PUBLIC_ENABLE_AFFILIATES` to `true`. Then run:

```sh
npm run check
```

When the checks pass, build and deploy normally. Astro renders the affiliate CTA and product cards into static HTML during that build and includes the guide and disclosure in the generated sitemap. Complete the manual checks in `affiliate-progress.md` before enabling the repository variable.

Do not add placeholder retailer URLs, prices, ratings, or product claims. The static buying guide remains educational while affiliate modules are disabled.

For a local CTA preview, create `.env.development` with `PUBLIC_ENABLE_AFFILIATES=true` and restart `npm run dev`. Product cards remain absent until the catalogue has three verified active products; a production build refuses to deploy an incomplete catalogue.
