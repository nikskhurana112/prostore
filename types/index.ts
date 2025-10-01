import { Decimal } from "@prisma/client/runtime/library";

// Type for products returned from Prisma (database)
export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  description: string;
  stock: number;
  price: Decimal;
  rating: Decimal;
  numReviews: number;
  isFeatured: boolean;
  banner: string | null;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

// Type for creating/inserting products (matches Zod schema)
export type CreateProduct = {
  name: string;
  slug: string;
  description: string;
  images: string[];
  category: string;
  brand: string;
  stock: number;
  isFeatured: boolean;
  banner?: string;
  price: string; // Zod expects string for validation
};
