import type { CourseSeed } from "../../types";
import { withRu } from "../../ru-overlay";
import { chessGrade2 } from "./grade-2";
import { ru as ru2 } from "./grade-2.ru";
import { chessGrade3 } from "./grade-3";
import { chessGrade4 } from "./grade-4";

export const chess: CourseSeed[] = [withRu(chessGrade2, ru2), chessGrade3, chessGrade4];
