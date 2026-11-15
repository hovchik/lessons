import type { TheoryMap } from "..";
import { armenian1a } from "./grade-1a";
import { armenian1b } from "./grade-1b";
import { armenian1c } from "./grade-1c";
import { armenian2a } from "./grade-2a";
import { armenian2b } from "./grade-2b";
import { armenian2c } from "./grade-2c";
import { armenian3a } from "./grade-3a";
import { armenian3b } from "./grade-3b";
import { armenian3c } from "./grade-3c";
import { armenian4a } from "./grade-4a";
import { armenian4b } from "./grade-4b";
import { armenian4c } from "./grade-4c";
import { armenian4d } from "./grade-4d";
import { armenian4e } from "./grade-4e";

export const armenianTheory: TheoryMap = {
  1: { ...armenian1a, ...armenian1b, ...armenian1c },
  2: { ...armenian2a, ...armenian2b, ...armenian2c },
  3: { ...armenian3a, ...armenian3b, ...armenian3c },
  4: { ...armenian4a, ...armenian4b, ...armenian4c, ...armenian4d, ...armenian4e },
};
