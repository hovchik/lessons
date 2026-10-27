import type { VisualMap } from "..";
import { grade2 } from "./grade-2";
import { grade3 } from "./grade-3";
import { grade4 } from "./grade-4";

/**
 * Chess 2–4: an interactive board (square names, tap a piece to see its moves) and step-by-step
 * lines for rules, mates, tactics and endgames, checked move by move by the rules engine, plus a
 * "Look closer" section and a quick check for every lesson in English, Armenian and Russian.
 */
export const chessVisuals: VisualMap = {
  2: grade2,
  3: grade3,
  4: grade4,
};
