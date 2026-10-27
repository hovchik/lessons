import type { VisualMap } from "..";
import { grade2 } from "./grade-2";
import { grade3 } from "./grade-3";
import { grade4 } from "./grade-4";
import { grade5 } from "./grade-5";

/**
 * English 2–12: the letter board, counting, compare tables (English, Armenian and Russian side
 * by side, British and American words), sentence games and tense time lines, plus a "Look
 * closer" section for every lesson in English, Armenian and Russian.
 */
export const englishVisuals: VisualMap = {
  2: grade2,
  3: grade3,
  4: grade4,
  5: grade5,
};
