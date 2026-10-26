import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { scienceGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { scienceGrade3 } from "./grade-3";
import { ru as ru3 } from "./grade-3.ru";
import { scienceGrade4 } from "./grade-4";
import { ru as ru4 } from "./grade-4.ru";
import { scienceGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { scienceGrade6 } from "./grade-6";

export const science: CourseSeed[] = [withRu(scienceGrade2, ru2), withRu(scienceGrade3, ru3), withRu(scienceGrade4, ru4), withRu(scienceGrade5, ru5), scienceGrade6];
