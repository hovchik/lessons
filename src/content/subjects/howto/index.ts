import type { CourseSeed } from "../../types";
import { howtoGrade1 } from "./grade-1";

export { HOWTO_META, type HowtoMeta, type Safety } from "./meta";

/** How-to lessons: three practical skills per grade, 1 to 12. */
export const howto: CourseSeed[] = [howtoGrade1];
