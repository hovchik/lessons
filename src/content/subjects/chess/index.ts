import type { CourseSeed } from "../../types";
import { withEn, withRu } from "../../ru-overlay";
import { chessGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { en as en2 } from "./grade-2.en";
import { chessGrade3 } from "./grade-3";
import { ru as ru3 } from "./grade-3.ru";
import { en as en3 } from "./grade-3.en";
import { chessGrade4 } from "./grade-4";
import { ru as ru4 } from "./grade-4.ru";
import { en as en4 } from "./grade-4.en";

export const chess: CourseSeed[] = [withEn(withRu(chessGrade2, ru2), en2), withEn(withRu(chessGrade3, ru3), en3), withEn(withRu(chessGrade4, ru4), en4)];
