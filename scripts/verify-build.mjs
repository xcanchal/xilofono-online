import { access, readFile } from 'node:fs/promises';

import { affiliateConfig } from '../affiliate-config.js';

const pages = [
  'index.html',
  'canciones-faciles-para-xilofono/index.html',
  'cumpleanos-feliz-xilofono/index.html',
  'estrellita-xilofono/index.html',
  'himno-alegria-xilofono/index.html',
  'los-pollitos-dicen-xilofono/index.html',
  'xilofono-online-con-notas/index.html',
  'xilofono-virtual-para-ninos/index.html',
  'mejores-xilofonos-para-ninos/index.html',
  'aviso-afiliados/index.html'
];
const assets = [
  'CNAME',
  'robots.txt',
  'favicon.svg',
  'favicon.ico',
  'apple-touch-icon.png',
  'canciones-faciles-para-xilofono.pdf',
  'seo-pages.css',
  'song-player.js',
  'sitemap.xml'
];

await Promise.all([...pages, ...assets].map((file) => access(`dist/${file}`)));

const [homepage, guide, sitemap] = await Promise.all([
  readFile('dist/index.html', 'utf8'),
  readFile('dist/mejores-xilofonos-para-ninos/index.html', 'utf8'),
  readFile('dist/sitemap.xml', 'utf8')
]);

for (const [name, html] of [['homepage', homepage], ['buying guide', guide]]) {
  if ((html.match(/<html/g) || []).length !== 1 || (html.match(/<body/g) || []).length !== 1) {
    throw new Error(`Generated ${name} must contain exactly one HTML document`);
  }
}

const hasAffiliateEvents = /data-umami-event="affiliate_(guide_opened|link_clicked)"/.test(`${homepage}${guide}`);
const affiliatePagesInSitemap = /mejores-xilofonos-para-ninos|aviso-afiliados/.test(sitemap);

if (affiliateConfig.enabled) {
  if (!hasAffiliateEvents || !affiliatePagesInSitemap) {
    throw new Error('Enabled build must include affiliate HTML and sitemap routes');
  }
} else if (hasAffiliateEvents || affiliatePagesInSitemap) {
  throw new Error('Disabled build must not include affiliate HTML or sitemap routes');
}

console.log(`Astro build verification passed (${affiliateConfig.enabled ? 'affiliates enabled' : 'affiliates disabled'}).`);
