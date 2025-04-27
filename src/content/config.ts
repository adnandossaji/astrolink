import { defineCollection, z } from 'astro:content';

// Define the schema for our site configuration collection
export const collections = {
  'config': defineCollection({
    type: 'data',
    schema: z.object({
      profile: z.object({
        name: z.string(),
        image: z.string(),
      }),
      socialLinks: z.array(
        z.object({
          platform: z.string(),
          url: z.string(),
        })
      ),
      links: z.array(
        z.object({
          title: z.string(),
          url: z.string(),
        })
      ),
    }),
  }),
}; 