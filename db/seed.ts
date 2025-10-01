import { prisma } from "@/lib/db";
import sampleData from "./sample-data";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: sampleData.products,
  });
  console.log("Database seeded successfully");
}

main();
