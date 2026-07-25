import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/layanan" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    category: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(false),
    logo: z.string().optional(),
    location: z.string().optional(),
    testimonial: z.string().optional(),
    image: z.object({ file: z.string(), alt: z.string() }).optional(),
  }),
});

const solutions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/solusi" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    services: z.array(z.string()),
    outcome: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(false),
    logo: z.string().optional(),
    location: z.string().optional(),
    testimonial: z.string().optional(),
  }),
});

const products = defineCollection({
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
    link: z.string().optional(),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/klien" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    description: z.string(),
    public: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number(),
    is_published: z.boolean().default(false),
    logo: z.string().optional(),
    location: z.string().optional(),
    testimonial: z.string().optional(),
    image: z.object({ file: z.string(), alt: z.string() }).optional(),
    icon: z.string().optional(),
    website: z.string().optional(),
  }),
});

const portofolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portofolio" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
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
    image: z.object({ file: z.string(), alt: z.string() }).optional(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  services,
  solutions,
  products,
  clients,
  portofolio,
};
