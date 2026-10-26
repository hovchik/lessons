import type { CourseSeed } from "../../types";
import { withEn, withRu } from "../../ru-overlay";
import { socialStudiesGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { en as en8 } from "./grade-8.en";
import { socialStudiesGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { en as en9 } from "./grade-9.en";
import { socialStudiesGrade10 } from "./grade-10";
import { ru as ru10 } from "./grade-10.ru";
import { en as en10 } from "./grade-10.en";
import { socialStudiesGrade11 } from "./grade-11";
import { ru as ru11 } from "./grade-11.ru";
import { socialStudiesGrade12 } from "./grade-12";
import { ru as ru12 } from "./grade-12.ru";

export const socialStudies: CourseSeed[] = [withEn(withRu(socialStudiesGrade8, ru8), en8), withEn(withRu(socialStudiesGrade9, ru9), en9), withEn(withRu(socialStudiesGrade10, ru10), en10), withRu(socialStudiesGrade11, ru11), withRu(socialStudiesGrade12, ru12)];
