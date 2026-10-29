import type { CourseSeed } from "../../types";
import { howtoGrade1 } from "./grade-1";
import { howtoGrade2 } from "./grade-2";
import { howtoGrade3 } from "./grade-3";
import { howtoGrade4 } from "./grade-4";
import { howtoGrade5 } from "./grade-5";
import { howtoGrade6 } from "./grade-6";
import { howtoGrade7 } from "./grade-7";
import { howtoGrade8 } from "./grade-8";
import { howtoGrade9 } from "./grade-9";

export { HOWTO_META, type HowtoMeta, type Safety } from "./meta";

/** How-to lessons: three practical skills per grade, 1 to 12. */
export const howto: CourseSeed[] = [howtoGrade1, howtoGrade2, howtoGrade3, howtoGrade4, howtoGrade5, howtoGrade6, howtoGrade7, howtoGrade8, howtoGrade9];
