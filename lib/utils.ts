import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Convert prisma object into regular JS object
/**
 * Converts a Prisma (or any complex) object into a plain JavaScript object.
 * This is often used to strip out methods, symbols, or non-serializable properties,
 * especially when preparing data for serialization (e.g., sending to the client).
 *
 * Note: Using JSON.parse(JSON.stringify(obj)) will remove properties like Date objects,
 * BigInt, or undefined values, and can lose type information. For most simple use-cases,
 * this is sufficient, but for more complex data, consider using a library like superjson.
 */
export function convertToPlainObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

//format number with decimal places

export function formatNumber(number: number): string {
  const [integerPart, decimalPart] = number.toString().split(".");
  return decimalPart
    ? `${integerPart}.${decimalPart.padEnd(2, "0")}`
    : integerPart.padEnd(2, "0");
}
