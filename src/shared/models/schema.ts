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
  year: z.number().int().nonnegative(),
  area: z.number().int().positive(),
  plot: z.number().int().positive().nullable().optional(),
  bedrooms: z.number().int().min(0),
  bathrooms: z.number().int().min(0),
  private_pool: z.enum(["0", "1"]).or(z.number().int().min(0).max(1)),
  parking: z.number().int().min(0),
  features: z.string(),
  status: z.enum(["available", "sold", "reserved"]),
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
  page: z.number().int().min(1).default(1),
  size: z.number().int().default(10),
});

export const agentContactSchema = z.object({
  name: z.string().min(1).default(""),
  email: z.string().email().default(""),
  phone: z.string().optional(),
  message: z.string().min(1).default(""),
  propertyId: z.number().default(0),
});

export const propertyResponseSchema = z.object({
  properties: z.array(propertySchema),
  total: z.number().int().nonnegative(),
  pages: z.number().int().nonnegative(),
  page: z.number().int().nonnegative(),
  limit: z.number().int().nonnegative(),
});

export type TypeEnum = z.infer<typeof typeEnumSchema>;
export type Property = z.infer<typeof propertySchema>;
export type PropertyResponse = z.infer<typeof propertyResponseSchema>;
export type Filters = z.infer<typeof filterSchema>;
export type DistinctFilters = z.infer<typeof distinctFilters>;
export type Agent = z.infer<typeof agentSchema>;
export type AgentContact = z.infer<typeof agentContactSchema>;
