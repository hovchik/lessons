import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { worldHistoryGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { worldHistoryGrade7 } from "./grade-7";
import { ru as ru7 } from "./grade-7.ru";
import { worldHistoryGrade8 } from "./grade-8";
import { ru as ru8 } from "./grade-8.ru";
import { worldHistoryGrade9 } from "./grade-9";
import { worldHistoryGrade10 } from "./grade-10";
import { worldHistoryGrade11 } from "./grade-11";
import { worldHistoryGrade12 } from "./grade-12";

export const worldHistory: CourseSeed[] = [withRu(worldHistoryGrade6, ru6), withRu(worldHistoryGrade7, ru7), withRu(worldHistoryGrade8, ru8), worldHistoryGrade9, worldHistoryGrade10, worldHistoryGrade11, worldHistoryGrade12];
