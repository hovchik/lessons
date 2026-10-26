import type { CourseSeed } from "../../types";
import { withEn, withRu } from "../../ru-overlay";
import { worldHistoryGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { en as en6 } from "./grade-6.en";
import { worldHistoryGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { worldHistoryGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { worldHistoryGrade9 } from "./grade-9";
import { ru as ru9 } from "./grade-9.ru";
import { worldHistoryGrade10 } from "./grade-10";
import { ru as ru10 } from "./grade-10.ru";
import { worldHistoryGrade11 } from "./grade-11";
import { ru as ru11 } from "./grade-11.ru";
import { worldHistoryGrade12 } from "./grade-12";
import { ru as ru12 } from "./grade-12.ru";

export const worldHistory: CourseSeed[] = [withEn(withRu(worldHistoryGrade6, ru6), en6), withRu(worldHistoryGrade7, ru7), withRu(worldHistoryGrade8, ru8), withRu(worldHistoryGrade9, ru9), withRu(worldHistoryGrade10, ru10), withRu(worldHistoryGrade11, ru11), withRu(worldHistoryGrade12, ru12)];
