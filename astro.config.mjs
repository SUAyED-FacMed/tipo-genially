// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    build: {
        assets: 'assets',
        inlineStylesheets: 'never',
        format: 'preserve'
    },
    vite: {
      resolve: {
          alias: {
              '@': new URL('./src', import.meta.url).pathname,
              '@assets': new URL('./src/assets', import.meta.url).pathname,
          },
      },

      plugins: [tailwindcss()],
    },
});
