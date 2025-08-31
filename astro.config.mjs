// astro.config.mjs
import { defineConfig } from "astro/config";
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react"; // Import the React integration
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
      // Define the base path where the Sanity Studio will be available
      // For example, this will make the studio accessible at yoursite.com/admin
      studioBasePath: "/admin",
    }),
    react(), // Add the React integration to your project
  ],
});
