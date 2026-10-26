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
import { geography } from "./subjects/geography";
import { armenianHistory } from "./subjects/armenian-history";
import { worldHistory } from "./subjects/world-history";
import { informatics } from "./subjects/informatics";
import { socialStudies } from "./subjects/social-studies";
import { science } from "./subjects/science";
import { churchHistory } from "./subjects/church-history";

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
  ...geography,
  ...armenianHistory,
  ...worldHistory,
  ...informatics,
  ...socialStudies,
  ...science,
  ...churchHistory,
];

export const courseId = (subject: string, grade: number) => `${subject}-${grade}`;
