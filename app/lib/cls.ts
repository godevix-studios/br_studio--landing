import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for optimal className composition.
 * 
 * This utility function:
 * - Accepts conditional classes via clsx
 * - Resolves Tailwind class conflicts via tailwind-merge
 * - Returns a single optimized className string
 * 
 * @example
 * cls("px-4", "py-2", { "bg-blue-500": isActive })
 * // => "px-4 py-2 bg-blue-500"
 * 
 * @example
 * cls("px-4", "px-6") // Conflict resolution
 * // => "px-6"
 */
export default function cls(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
