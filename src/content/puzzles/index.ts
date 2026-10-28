import type { PuzzleLevel } from "@/lib/puzzle";
import { juniorPuzzles } from "./junior";
import { seniorPuzzles } from "./senior";
import type { Puzzle } from "./types";

export type { Puzzle, PuzzleTheme } from "./types";

/** The daily puzzle banks, walked one a day (src/lib/puzzle.ts). */
export const PUZZLES: Record<PuzzleLevel, Puzzle[]> = { junior: juniorPuzzles, senior: seniorPuzzles };
