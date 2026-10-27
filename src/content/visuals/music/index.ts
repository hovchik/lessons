import type { VisualMap } from "..";
import { grade1 } from "./grade-1";
import { grade2 } from "./grade-2";
import { grade3 } from "./grade-3";
import { grade4 } from "./grade-4";

/**
 * Music 1–7: a keyboard, staff, rhythm and metronome you can hear (piano), labelled pictures,
 * timelines and charts, plus a "Look closer" section for every lesson in English, Armenian and Russian.
 */
export const musicVisuals: VisualMap = {
  1: grade1,
  2: grade2,
  3: grade3,
  4: grade4,
};
