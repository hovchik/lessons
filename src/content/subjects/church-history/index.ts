import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { churchHistoryGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { churchHistoryGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { churchHistoryGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { churchHistoryGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { churchHistoryGrade9 } from "./grade-9";
import { churchHistoryGrade10 } from "./grade-10";
import { churchHistoryGrade11 } from "./grade-11";

export const churchHistory: CourseSeed[] = [withRu(churchHistoryGrade5, ru5), withRu(churchHistoryGrade6, ru6), withRu(churchHistoryGrade7, ru7), withRu(churchHistoryGrade8, ru8), churchHistoryGrade9, churchHistoryGrade10, churchHistoryGrade11];
