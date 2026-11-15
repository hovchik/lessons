import type { TheoryMap } from "..";
import { math3a } from "./grade-3a";
import { math3b } from "./grade-3b";
import { math3c } from "./grade-3c";
import { math3d } from "./grade-3d";
import { math3e } from "./grade-3e";
import { math4a } from "./grade-4a";
import { math4b } from "./grade-4b";

export const mathTheory: TheoryMap = {
  3: { ...math3a, ...math3b, ...math3c, ...math3d, ...math3e },
  4: { ...math4a, ...math4b },
};
