import type { TheoryMap } from "..";
import { armenian1a } from "./grade-1a";
import { armenian1b } from "./grade-1b";
import { armenian1c } from "./grade-1c";
import { armenian2a } from "./grade-2a";
import { armenian2b } from "./grade-2b";
import { armenian2c } from "./grade-2c";

export const armenianTheory: TheoryMap = {
  1: { ...armenian1a, ...armenian1b, ...armenian1c },
  2: { ...armenian2a, ...armenian2b, ...armenian2c },
};
