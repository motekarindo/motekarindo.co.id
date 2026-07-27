import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import rehypeCallouts from "rehype-callouts";
import rehypeImageCaption from "./src/plugins/rehype-image-caption";

export default defineConfig({
  site: "https://motekarindo.co.id",

  integrations: [
    sitemap(),
    compress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        webp: { quality: 82 },
        avif: { quality: 68 },
        png: { quality: 82 },
      },
    },
    remotePatterns: [],
  },

  build: {
    inlineStylesheets: "auto",
    assets: "assets",
  },

  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: false,
  },

  markdown: {
    rehypePlugins: [rehypeImageCaption, rehypeCallouts],
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
  },
});
