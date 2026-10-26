import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { chemistryGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { chemistryGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { chemistryGrade9 } from "./grade-9";
import { chemistryGrade10 } from "./grade-10";
import { chemistryGrade11 } from "./grade-11";
import { chemistryGrade12 } from "./grade-12";

export const chemistry: CourseSeed[] = [withRu(chemistryGrade7, ru7), withRu(chemistryGrade8, ru8), chemistryGrade9, chemistryGrade10, chemistryGrade11, chemistryGrade12];
