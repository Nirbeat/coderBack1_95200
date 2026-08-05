import { z } from "zod";

export const productsQuerySchema = z.object({
  category: z.string().optional(),
  maxPrice: z.coerce.number().positive().optional(),
  limit: z.coerce.number().int().positive().default(10),
  page: z.coerce.number().int().positive().default(1),
  sortBy: z.enum(["price", "createdAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("asc")
});

export const mongoIdSchema = z.object({
  pid: z.string().length(24)
});

export const productBodySchema = z.object({
  title: z.string().min(3),
  description: z.string(),
  price: z.number().positive(),
  category: z.enum(["auriculares", "teclados", "monitores", "mouse"]),
  stock: z.number().int().nonnegative(),
  code: z.string()
});

