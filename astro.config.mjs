// astro.config.mjs
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/edge-functions"

import { sanityIntegration } from "@sanity/astro"; // Changed to a named import
import react from "@astrojs/react";
import { loadEnv } from "vite";
// Import the Netlify adapter to enable hybrid rendering on Netlify
import netlify from '@astrojs/netlify';



const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
// This is the new setting you need to add.
// It tells Astro to use a hybrid output, which is required for Sanity Studio.
output: 'hybrid',
  integrations: [
    sanityIntegration({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
    // Add the Netlify adapter to the integrations list
netlify(),
  ],
});
