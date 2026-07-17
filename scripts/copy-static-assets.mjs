import { cp, mkdir, rm } from 'node:fs/promises';

const outputDirectory = 'dist';
const staticAssets = [
  'CNAME',
  'robots.txt',
  'favicon.svg',
  'favicon.ico',
  'apple-touch-icon.png',
  'canciones-faciles-para-xilofono.pdf',
  'seo-pages.css',
  'song-player.js'
];

await mkdir(outputDirectory, { recursive: true });
await Promise.all(staticAssets.map(async (asset) => {
  const destination = `${outputDirectory}/${asset}`;
  await rm(destination, { force: true });
  await cp(asset, destination);
}));
