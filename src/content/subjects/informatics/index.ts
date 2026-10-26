import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { informaticsGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { informaticsGrade6 } from "./grade-6";
import { informaticsGrade7 } from "./grade-7";
import { informaticsGrade8 } from "./grade-8";
import { informaticsGrade9 } from "./grade-9";
import { informaticsGrade10 } from "./grade-10";
import { informaticsGrade11 } from "./grade-11";
import { informaticsGrade12 } from "./grade-12";

export const informatics: CourseSeed[] = [withRu(informaticsGrade5, ru5), informaticsGrade6, informaticsGrade7, informaticsGrade8, informaticsGrade9, informaticsGrade10, informaticsGrade11, informaticsGrade12];
