import type { TheoryMap } from "..";
import { physics7a } from "./grade-7a";
import { physics7b } from "./grade-7b";
import { physics7c } from "./grade-7c";
import { physics7d } from "./grade-7d";
export const physicsTheory: TheoryMap = {
  7: { ...physics7a, ...physics7b, ...physics7c, ...physics7d },
};
