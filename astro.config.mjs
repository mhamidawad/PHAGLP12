// astro.config.mjs
import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro"; // Changed to a named import
import react from "@astrojs/react";
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
