import type { CourseSeed } from "./types";
import { subjects } from "./subjects";
import { math } from "./subjects/math";
import { algebra } from "./subjects/algebra";
import { geometry } from "./subjects/geometry";
import { physics } from "./subjects/physics";
import { drawing } from "./subjects/drawing";
import { armenian } from "./subjects/armenian";
import { russian } from "./subjects/russian";
import { english } from "./subjects/english";
import { chemistry } from "./subjects/chemistry";
import { biology } from "./subjects/biology";

export { subjects };

export const courses: CourseSeed[] = [
  ...math,
  ...algebra,
  ...geometry,
  ...physics,
  ...drawing,
  ...armenian,
  ...russian,
  ...english,
  ...chemistry,
  ...biology,
];

export const courseId = (subject: string, grade: number) => `${subject}-${grade}`;
