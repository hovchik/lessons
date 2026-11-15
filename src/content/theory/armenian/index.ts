import type { TheoryMap } from "..";
import { armenian1a } from "./grade-1a";
import { armenian1b } from "./grade-1b";
import { armenian1c } from "./grade-1c";

export const armenianTheory: TheoryMap = {
  1: { ...armenian1a, ...armenian1b, ...armenian1c },
};
