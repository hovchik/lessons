import type { CourseSeed } from "../../types";
import { withEn, withRu } from "../../ru-overlay";
import { scienceGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { en as en2 } from "./grade-2.en";
import { scienceGrade3 } from "./grade-3";
import { ru as ru3 } from "./grade-3.ru";
import { en as en3 } from "./grade-3.en";
import { scienceGrade4 } from "./grade-4";
import { ru as ru4 } from "./grade-4.ru";
import { en as en4 } from "./grade-4.en";
import { scienceGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { scienceGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";

export const science: CourseSeed[] = [withEn(withRu(scienceGrade2, ru2), en2), withEn(withRu(scienceGrade3, ru3), en3), withEn(withRu(scienceGrade4, ru4), en4), withRu(scienceGrade5, ru5), withRu(scienceGrade6, ru6)];
