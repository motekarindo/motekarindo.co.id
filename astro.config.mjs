import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://motekarindo.co.id",
  vite: {
    plugins: [tailwindcss()],
  },
});
