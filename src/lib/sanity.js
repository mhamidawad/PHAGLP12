import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true, // `false` is often used for static builds
  apiVersion: '2025-08-31', // Use today's date
});

Make sure you replace 
