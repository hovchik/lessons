import type { CourseSeed } from "../../types";
import { howtoGrade1 } from "./grade-1";
import { howtoGrade2 } from "./grade-2";
import { howtoGrade3 } from "./grade-3";
import { howtoGrade4 } from "./grade-4";

export { HOWTO_META, type HowtoMeta, type Safety } from "./meta";

/** How-to lessons: three practical skills per grade, 1 to 12. */
export const howto: CourseSeed[] = [howtoGrade1, howtoGrade2, howtoGrade3, howtoGrade4];
