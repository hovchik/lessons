import type { TheoryMap } from "..";
import { algebra7a } from "./grade-7a";
import { algebra7b } from "./grade-7b";
import { algebra7c } from "./grade-7c";
import { algebra7d } from "./grade-7d";
export const algebraTheory: TheoryMap = {
  7: { ...algebra7a, ...algebra7b, ...algebra7c, ...algebra7d },
};
