import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { I18nText } from "@/server/db/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Locale = "en" | "hy" | "ru";

/** Pick a localized string, falling back to English, then any non-empty value. */
export function pick(text: I18nText | null | undefined, locale: string): string {
  if (!text) return "";
  const l = locale as Locale;
  return text[l] || text.en || text.hy || text.ru || "";
}

export function hasContent(text: I18nText | null | undefined) {
  return !!text && Object.values(text).some((v) => v && v.trim().length > 0);
}

export const GRADES = Array.from({ length: 12 }, (_, i) => i + 1);

export const GRADE_STAGES: Record<"primary" | "middle" | "high", number[]> = {
  primary: [1, 2, 3, 4],
  middle: [5, 6, 7, 8, 9],
  high: [10, 11, 12],
};
