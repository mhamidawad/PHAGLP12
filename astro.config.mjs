// astro.config.mjs
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

// This loads environment variables for use in the config file.
// It’s a good practice for local development and build environments.
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
process.env.NODE_ENV,
process.cwd(),
""
);

// https://astro.build/config
export default defineConfig({
// The 'hybrid' output is required for Sanity Studio.
output: 'hybrid',

// The adapter must be a top-level property, not an integration.
adapter: netlify(),

integrations: [
sanityIntegration({
// These values are loaded from your .env file
projectId: PUBLIC_SANITY_PROJECT_ID,
dataset: PUBLIC_SANITY_DATASET,
useCdn: true,
studioBasePath: "/admin",
}),
react(),
],
});
