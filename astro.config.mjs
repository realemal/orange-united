import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://orangeunited.org',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
});

