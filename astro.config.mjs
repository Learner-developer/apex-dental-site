import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: process.env.SITE_URL || 'https://apexdentalclinic.in',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@visuals': fileURLToPath(new URL('./Visuals', import.meta.url)),
      },
    },
  },
});

