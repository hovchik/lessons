import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { biologyGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { biologyGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { biologyGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { biologyGrade10 } from "./grade-10";
import { biologyGrade11 } from "./grade-11";
import { biologyGrade12 } from "./grade-12";

export const biology: CourseSeed[] = [withRu(biologyGrade7, ru7), withRu(biologyGrade8, ru8), withRu(biologyGrade9, ru9), biologyGrade10, biologyGrade11, biologyGrade12];
