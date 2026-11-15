import type { TheoryMap } from "..";
import { algebra7a } from "./grade-7a";
import { algebra7b } from "./grade-7b";
import { algebra7c } from "./grade-7c";
import { algebra7d } from "./grade-7d";
import { algebra8a } from "./grade-8a";
import { algebra8b } from "./grade-8b";
import { algebra8c } from "./grade-8c";
import { algebra8d } from "./grade-8d";
import { algebra8e } from "./grade-8e";
export const algebraTheory: TheoryMap = {
  7: { ...algebra7a, ...algebra7b, ...algebra7c, ...algebra7d },
  8: { ...algebra8a, ...algebra8b, ...algebra8c, ...algebra8d, ...algebra8e },
};
