import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
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
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    status: z.enum(["in-development", "coming-soon", "available"]),
    summary: z.string(),
    audience: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
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
  }),
});

export const collections = {
  services,
  solutions,
  products,
  clients,
  portfolio,
};
