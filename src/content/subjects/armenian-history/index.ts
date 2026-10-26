import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { armenianHistoryGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { armenianHistoryGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { armenianHistoryGrade7 } from "./grade-7";
import { armenianHistoryGrade8 } from "./grade-8";
import { armenianHistoryGrade9 } from "./grade-9";
import { armenianHistoryGrade10 } from "./grade-10";
import { armenianHistoryGrade11 } from "./grade-11";
import { armenianHistoryGrade12 } from "./grade-12";

export const armenianHistory: CourseSeed[] = [withRu(armenianHistoryGrade5, ru5), withRu(armenianHistoryGrade6, ru6), armenianHistoryGrade7, armenianHistoryGrade8, armenianHistoryGrade9, armenianHistoryGrade10, armenianHistoryGrade11, armenianHistoryGrade12];
