import type { VisualMap } from "..";
import { grade1 } from "./grade-1";
import { grade2 } from "./grade-2";
import { grade3 } from "./grade-3";
import { grade4 } from "./grade-4";
import { grade5 } from "./grade-5";
import { grade6 } from "./grade-6";

/**
 * Math 1–6: interactive pictures (number lines, ten frames, place-value blocks, fractions,
 * arrays, column sums, clocks, charts, balance scales) and a "Look closer" section with more
 * explanation, a worked example and a fact for every lesson, in English, Armenian and Russian.
 */
export const mathVisuals: VisualMap = {
  1: grade1,
  2: grade2,
  3: grade3,
  4: grade4,
  5: grade5,
  6: grade6,
};
