import { z } from "zod";

export const agentSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  image: z.string().optional(),
});

export const typeEnumSchema = z.enum(["villa", "apartment", "finca"]);

export const propertySchema = z.object({
  id: z.number().int().optional(),
  created: z.string().datetime().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  type: typeEnumSchema,
  price: z.number().int().nonnegative(),
  newbuild: z.enum(["0", "1"]).or(z.number().int().min(0).max(1)),
  build: z.number().int().nonnegative(),
  area: z.number().int().positive(),
  plot: z.number().int().positive().nullable().optional(),
  bedrooms: z.number().int().min(0),
  bathrooms: z.number().int().min(0),
  private_pool: z.enum(["0", "1"]).or(z.number().int().min(0).max(1)),
  parking: z.number().int().min(0),
  images: z.string().optional(),
  agent_id: z.number().int().positive(),
});

export const distinctFilters = z.object({
  types: z.array(z.string()),
  locations: z.array(z.string()),
});

export const filterSchema = z.object({
  locations: z.array(z.string()).default([]),
  types: z.array(typeEnumSchema).default(["villa", "apartment", "finca"]),
  maxPrice: z.number().min(0).default(0),
});

export type TypeEnum = z.infer<typeof typeEnumSchema>;
export type Property = z.infer<typeof propertySchema>;
export type Filters = z.infer<typeof filterSchema>;
export type DistinctFilters = z.infer<typeof distinctFilters>;
export type Agent = z.infer<typeof agentSchema>;
