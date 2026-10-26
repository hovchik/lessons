import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { geographyGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { geographyGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { geographyGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { geographyGrade9 } from "./grade-9";
import { geographyGrade10 } from "./grade-10";
import { geographyGrade11 } from "./grade-11";
import { geographyGrade12 } from "./grade-12";

export const geography: CourseSeed[] = [withRu(geographyGrade6, ru6), withRu(geographyGrade7, ru7), withRu(geographyGrade8, ru8), geographyGrade9, geographyGrade10, geographyGrade11, geographyGrade12];
