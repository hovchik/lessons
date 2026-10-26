import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { socialStudiesGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { socialStudiesGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { socialStudiesGrade10 } from "./grade-10";
import { ru as ru10 } from "./grade-10.ru";
import { socialStudiesGrade11 } from "./grade-11";
import { ru as ru11 } from "./grade-11.ru";
import { socialStudiesGrade12 } from "./grade-12";
import { ru as ru12 } from "./grade-12.ru";

export const socialStudies: CourseSeed[] = [withRu(socialStudiesGrade8, ru8), withRu(socialStudiesGrade9, ru9), withRu(socialStudiesGrade10, ru10), withRu(socialStudiesGrade11, ru11), withRu(socialStudiesGrade12, ru12)];
