import type { VisualMap } from "..";
import { grade7 } from "./grade-7";
import { grade8 } from "./grade-8";
import { grade9 } from "./grade-9";

/**
 * Biology 7–12: labelled pictures (cells, organs, animals), step-by-step animations (mitosis,
 * protein synthesis, the reflex arc, metamorphosis), Punnett squares, real-data bars and the
 * energy pyramid, plus a "Look closer" section for every lesson in English, Armenian and Russian.
 */
export const biologyVisuals: VisualMap = {
  7: grade7,
  8: grade8,
  9: grade9,
};
