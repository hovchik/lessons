import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { musicGrade1 } from "./grade-1";
import { ru as ru1 } from "./grade-1.ru";
import { musicGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { musicGrade3 } from "./grade-3";
import { musicGrade4 } from "./grade-4";
import { musicGrade5 } from "./grade-5";
import { musicGrade6 } from "./grade-6";
import { musicGrade7 } from "./grade-7";

export const music: CourseSeed[] = [withRu(musicGrade1, ru1), withRu(musicGrade2, ru2), musicGrade3, musicGrade4, musicGrade5, musicGrade6, musicGrade7];
