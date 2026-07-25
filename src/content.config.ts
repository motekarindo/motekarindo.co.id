import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const layanan = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/layanan" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    category: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(true),
    image: z.object({ file: z.string(), alt: z.string() }).optional(),
  }),
});

const solutions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/solutions" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    services: z.array(z.string()),
    outcome: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(true),
  }),
});

const produk = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/produk" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    category: z.string(),
    icon: z.string(),
    status: z.enum(["in-development", "coming-soon", "available"]).default("coming-soon"),
    audience: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(true),
    image: z.object({ file: z.string(), alt: z.string() }).optional(),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/clients" }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    description: z.string(),
    public: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(true),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    clientPublic: z.boolean().default(false),
    problem: z.string(),
    solution: z.string(),
    services: z.array(z.string()),
    technologies: z.array(z.string()),
    outcome: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(true),
  }),
});

export const collections = {
  layanan,
  solutions,
  produk,
  clients,
  portfolio,
};
