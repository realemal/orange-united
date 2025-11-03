import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.enum(['Curriculum', 'Board Meetings', 'Opinion', 'News']),
    tags: z.array(z.string()).default([]),
    esTitle: z.string().optional(),
    esExcerpt: z.string().optional(),
    status: z.enum(['draft', 'published']).default('published'),
    featured: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    rsvpUrl: z.string().url().optional(),
    isCanceled: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  articles,
  events,
  pages,
};

