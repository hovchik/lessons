import type { TheoryMap } from "..";
import { geometry7 } from "./grade-7";
import { geometry7b } from "./grade-7b";
import { geometry7c } from "./grade-7c";
import { geometry8a } from "./grade-8a";
import { geometry8b } from "./grade-8b";
import { geometry8c } from "./grade-8c";
import { geometry8d } from "./grade-8d";

export const geometryTheory: TheoryMap = {
  7: { ...geometry7, ...geometry7b, ...geometry7c },
  8: { ...geometry8a, ...geometry8b, ...geometry8c, ...geometry8d },
};
