import { Crown, Hash, Leaf, Lightbulb, Shapes, Sparkles, Type, type LucideIcon } from "lucide-react";
import type { PuzzleTheme } from "@/content/puzzles";

/** Each puzzle theme's icon and colour (a `subject-*` palette). */
export const PUZZLE_THEMES: Record<PuzzleTheme, { icon: LucideIcon; color: string }> = {
  numbers: { icon: Hash, color: "subject-indigo" },
  logic: { icon: Lightbulb, color: "subject-violet" },
  words: { icon: Type, color: "subject-rose" },
  chess: { icon: Crown, color: "subject-teal" },
  shapes: { icon: Shapes, color: "subject-emerald" },
  nature: { icon: Leaf, color: "subject-sky" },
  teaser: { icon: Sparkles, color: "subject-amber" },
};
