"use server";

import { prisma } from "@/lib/db";
import { convertToPlainObject } from "@/lib/utils";

//Get latest products
export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(products);
};

// Get all products
export const getProducts = async () => {
  const products = await prisma.product.findMany();
  return convertToPlainObject(products);
};

//Get product by slug
export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: { slug },
  });
  return convertToPlainObject(product);
};
