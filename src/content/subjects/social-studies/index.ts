import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { socialStudiesGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { socialStudiesGrade9 } from "./grade-9";
import { socialStudiesGrade10 } from "./grade-10";
import { socialStudiesGrade11 } from "./grade-11";
import { socialStudiesGrade12 } from "./grade-12";

export const socialStudies: CourseSeed[] = [withRu(socialStudiesGrade8, ru8), socialStudiesGrade9, socialStudiesGrade10, socialStudiesGrade11, socialStudiesGrade12];
