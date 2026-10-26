import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { musicGrade1 } from "./grade-1";
import { ru as ru1 } from "./grade-1.ru";
import { musicGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { musicGrade3 } from "./grade-3";
import { ru as ru3 } from "./grade-3.ru";
import { musicGrade4 } from "./grade-4";
import { ru as ru4 } from "./grade-4.ru";
import { musicGrade5 } from "./grade-5";
import { ru as ru5 } from "./grade-5.ru";
import { musicGrade6 } from "./grade-6";
import { ru as ru6 } from "./grade-6.ru";
import { musicGrade7 } from "./grade-7";

export const music: CourseSeed[] = [withRu(musicGrade1, ru1), withRu(musicGrade2, ru2), withRu(musicGrade3, ru3), withRu(musicGrade4, ru4), withRu(musicGrade5, ru5), withRu(musicGrade6, ru6), musicGrade7];
