import { z } from "zod";
import { formatNumber } from "./utils";

const currency = z
  .string()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(val))),
    "Price must be a valid number with up to 2 decimal places"
  );

//Schema for inserting product
export const productInsertSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(1),
  description: z.string().min(10, "Description must be at least 10 characters"),
  images: z.array(z.string()).min(1, "Images must be at least 1"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  stock: z.coerce.number(),
  isFeatured: z.boolean().default(false),
  banner: z.string().optional(),
  price: currency,
});
