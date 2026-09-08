// Static SPA build for GitHub Pages (no server runtime).
// The normal Lovable build still uses vite.config.ts + nitro.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env["PAGES_BASE"] ?? "/korean-path-learn/";

export default defineConfig({
  nitro: false,
  tanstackStart: {
  // Render actual static pages for GitHub Pages.
  spa: { enabled: false },
    prerender: { enabled: true },
    server: { entry: "server" },
  },
  vite: {
    base,
  },
});
