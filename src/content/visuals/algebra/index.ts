import type { VisualMap } from "..";
import { grade7 } from "./grade-7";
import { grade8 } from "./grade-8";
import { grade9 } from "./grade-9";
import { grade10 } from "./grade-10";
import { grade11 } from "./grade-11";
import { grade12 } from "./grade-12";

/**
 * Algebra 7–12: interactive graphs (lines, parabolas, power, trig, exponential and logarithmic
 * functions, tangents, areas), area models for identities, intervals, progressions and chance,
 * plus a "Look closer" section for every lesson in English, Armenian and Russian.
 */
export const algebraVisuals: VisualMap = {
  7: grade7,
  8: grade8,
  9: grade9,
  10: grade10,
  11: grade11,
  12: grade12,
};
