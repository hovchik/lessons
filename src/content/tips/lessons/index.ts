/**
 * Tricks that belong to one lesson (TipSeed.lesson). They are stored in the same `tips` table
 * as course tips, shown inside their lesson ("Tricks for this lesson") and listed on the course
 * page with a link to the lesson. One file per subject or group of grades; register it here.
 */
import type { TipSeed } from "../types";
import { mathTricks1to3 } from "./math-1-3";
import { mathTricks4to6 } from "./math-4-6";
import { algebraGeometryTricks } from "./algebra-geometry";
import { physicsChemistryTricks } from "./physics-chemistry";
import { otherSubjectTricks } from "./other-subjects";

export const lessonTricks: TipSeed[] = [...mathTricks1to3, ...mathTricks4to6, ...algebraGeometryTricks, ...physicsChemistryTricks, ...otherSubjectTricks];
