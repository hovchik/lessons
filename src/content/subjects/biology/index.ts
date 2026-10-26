import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { biologyGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { biologyGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { biologyGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { biologyGrade10 } from "./grade-10";
import { ru as ru10 } from "./grade-10.ru";
import { biologyGrade11 } from "./grade-11";
import { ru as ru11 } from "./grade-11.ru";
import { biologyGrade12 } from "./grade-12";

export const biology: CourseSeed[] = [withRu(biologyGrade7, ru7), withRu(biologyGrade8, ru8), withRu(biologyGrade9, ru9), withRu(biologyGrade10, ru10), withRu(biologyGrade11, ru11), biologyGrade12];
