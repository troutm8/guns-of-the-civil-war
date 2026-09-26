import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categorySlugs } from './data/categories';

const arms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/arms' }),
  schema: z.object({
    title: z.string(),
    // A short headline name used in lists and cards, e.g. "Springfield M1861".
    shortTitle: z.string(),
    category: z.enum(categorySlugs),
    // Sort order within its category (lower comes first).
    order: z.number().default(100),
    // One-paragraph standfirst shown under the headline and on cards.
    summary: z.string(),
    sides: z.array(z.enum(['Union', 'Confederate'])),
    specs: z.object({
      maker: z.string(),
      years: z.string(),
      produced: z.string().optional(),
      caliber: z.string(),
      action: z.string(),
      ignition: z.string(),
      capacity: z.string().optional(),
      length: z.string().optional(),
      barrel: z.string().optional(),
      weight: z.string().optional(),
      rifling: z.string().optional(),
      sights: z.string().optional(),
      bayonet: z.string().optional(),
      ammunition: z.string().optional(),
      rateOfFire: z.string().optional(),
    }),
    reproductions: z
      .array(z.object({ maker: z.string(), model: z.string(), notes: z.string().optional() }))
      .default([]),
    // Impressions this arm suits, e.g. "Eastern Theater Federal infantry, 1862–65".
    impressions: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    // Editor's checklist: facts in the draft that should be verified before publishing.
    // Never rendered on the site.
    reviewNotes: z.array(z.string()).default([]),
  }),
});

export const collections = { arms };
