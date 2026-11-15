import type { TipSeed } from "./types";
import { mathTips } from "./math";
import { algebraTips } from "./algebra";
import { geometryTips } from "./geometry";
import { physicsTips } from "./physics";
import { armenianTips } from "./armenian";
import { russianTips } from "./russian";
import { englishTips } from "./english";
import { drawingTips } from "./drawing";
import { TIP_LESSONS } from "./links";
import { lessonTricks } from "./lessons";

const courseTips: TipSeed[] = [...mathTips, ...algebraTips, ...geometryTips, ...physicsTips, ...armenianTips, ...russianTips, ...englishTips, ...drawingTips].map(
  (tp) => {
    const lesson = TIP_LESSONS[`${tp.subject}-${tp.grade}/${tp.slug}`];
    return lesson ? { ...tp, lesson } : tp;
  },
);

/** Course tips first, then the tricks written for single lessons (src/content/tips/lessons). */
export const tips: TipSeed[] = [...courseTips, ...lessonTricks];
