import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { geographyGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { geographyGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { geographyGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { geographyGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { geographyGrade10 } from "./grade-10";
import { ru as ru10 } from "./grade-10.ru";
import { geographyGrade11 } from "./grade-11";
import { geographyGrade12 } from "./grade-12";

export const geography: CourseSeed[] = [withRu(geographyGrade6, ru6), withRu(geographyGrade7, ru7), withRu(geographyGrade8, ru8), withRu(geographyGrade9, ru9), withRu(geographyGrade10, ru10), geographyGrade11, geographyGrade12];
