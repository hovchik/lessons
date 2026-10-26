import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { scienceGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { scienceGrade3 } from "./grade-3";
import { scienceGrade4 } from "./grade-4";
import { scienceGrade5 } from "./grade-5";
import { scienceGrade6 } from "./grade-6";

export const science: CourseSeed[] = [withRu(scienceGrade2, ru2), scienceGrade3, scienceGrade4, scienceGrade5, scienceGrade6];
