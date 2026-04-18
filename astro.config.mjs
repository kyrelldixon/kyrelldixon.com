import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import { SITE_METADATA } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  image: {
    service: passthroughImageService(),
  },
  integrations: [mdx(), sitemap(), solidJs(), metaTags(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
});
