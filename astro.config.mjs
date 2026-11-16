import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import metaTags from "astro-meta-tags";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { SITE_METADATA } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  site: 'https://svaltheim.github.io',
  base: '/', // Obligatorio para estructurar correctamente los enlaces en GitHub Pages
  prefetch: true,
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx(), sitemap(), solidJs(), metaTags(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.vs/**'],
      },
    },
  },
});