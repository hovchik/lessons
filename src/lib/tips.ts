import type { TipCategory } from "@/server/db/schema";

/** English labels used in the admin panel (the public site uses next-intl messages). */
export const CATEGORY_LABELS: Record<TipCategory, string> = {
  mentalMath: "Mental math",
  memory: "Memory aid",
  problemSolving: "Problem solving",
  language: "Language hack",
  exam: "Exam strategy",
  study: "Study habit",
};
