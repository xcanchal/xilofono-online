import { writeFile } from 'node:fs/promises';

const site = 'https://xilofono-online.com';
const standardRoutes = [
  '/',
  '/canciones-faciles-para-xilofono/',
  '/estrellita-xilofono/',
  '/cumpleanos-feliz-xilofono/',
  '/himno-alegria-xilofono/',
  '/los-pollitos-dicen-xilofono/',
  '/xilofono-virtual-para-ninos/',
  '/xilofono-online-con-notas/'
];
const affiliateRoutes = [
  '/mejores-xilofonos-para-ninos/',
  '/aviso-afiliados/'
];
const routes = process.env.PUBLIC_ENABLE_AFFILIATES === 'true'
  ? [...standardRoutes, ...affiliateRoutes]
  : standardRoutes;
const urls = routes.map((route) => `  <url><loc>${site}${route}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

await writeFile('dist/sitemap.xml', sitemap);
