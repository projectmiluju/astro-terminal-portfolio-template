import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['cs', 'book', 'til']),
    series: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
    highlights: z.array(z.string()).default([]),
    metrics: z.array(z.string()).default([]),
    cover: z.string().optional(),
    youtube: z.string().optional(), // YouTube 비디오 ID
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
