import type { ExamSeed } from "../types";
import { mathTrials } from "./math";
import { algebraTrials } from "./algebra";
import { geometryTrials } from "./geometry";
import { physicsTrials } from "./physics";
import { drawingTrials } from "./drawing";
import { armenianTrials } from "./armenian";
import { russianTrials } from "./russian";
import { englishTrials } from "./english";

export const trials: ExamSeed[] = [
  ...mathTrials,
  ...algebraTrials,
  ...geometryTrials,
  ...physicsTrials,
  ...drawingTrials,
  ...armenianTrials,
  ...russianTrials,
  ...englishTrials,
];
