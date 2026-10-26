import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { chemistryGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { chemistryGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { chemistryGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { chemistryGrade10 } from "./grade-10";
import { ru as ru10 } from "./grade-10.ru";
import { chemistryGrade11 } from "./grade-11";
import { ru as ru11 } from "./grade-11.ru";
import { chemistryGrade12 } from "./grade-12";
import { ru as ru12 } from "./grade-12.ru";

export const chemistry: CourseSeed[] = [withRu(chemistryGrade7, ru7), withRu(chemistryGrade8, ru8), withRu(chemistryGrade9, ru9), withRu(chemistryGrade10, ru10), withRu(chemistryGrade11, ru11), withRu(chemistryGrade12, ru12)];
