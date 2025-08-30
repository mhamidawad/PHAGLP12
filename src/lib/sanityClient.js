
// src/lib/sanityClient.js or similar
import { createClient } from "@sanity/client";

console.log("Sanity Project ID from ENV:", import.meta.env.PUBLIC_SANITY_PROJECT_ID);

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // Set to true if you are using static data for the frontend
  apiVersion: "2024-05-19", // use current date (YYYY-MM-DD) to prevent errors
});
