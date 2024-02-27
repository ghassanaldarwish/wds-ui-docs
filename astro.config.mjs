import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://wds-ui.webdrei.com",
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "one-dark-pro",
      },
      gfm: false,
    }),
    sitemap(),
    react(),
    tailwind(),
  ],
});
