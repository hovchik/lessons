import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { informaticsGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { informaticsGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { informaticsGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { informaticsGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { informaticsGrade9 } from "./grade-9";
import { informaticsGrade10 } from "./grade-10";
import { informaticsGrade11 } from "./grade-11";
import { informaticsGrade12 } from "./grade-12";

export const informatics: CourseSeed[] = [withRu(informaticsGrade5, ru5), withRu(informaticsGrade6, ru6), withRu(informaticsGrade7, ru7), withRu(informaticsGrade8, ru8), informaticsGrade9, informaticsGrade10, informaticsGrade11, informaticsGrade12];
