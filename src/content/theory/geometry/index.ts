import type { TheoryMap } from "..";
import { geometry7 } from "./grade-7";
import { geometry7b } from "./grade-7b";
import { geometry7c } from "./grade-7c";

export const geometryTheory: TheoryMap = {
  7: { ...geometry7, ...geometry7b, ...geometry7c },
};
