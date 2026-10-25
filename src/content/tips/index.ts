import type { TipSeed } from "./types";
import { mathTips } from "./math";
import { algebraTips } from "./algebra";
import { geometryTips } from "./geometry";
import { physicsTips } from "./physics";
import { armenianTips } from "./armenian";
import { russianTips } from "./russian";

export const tips: TipSeed[] = [...mathTips, ...algebraTips, ...geometryTips, ...physicsTips, ...armenianTips, ...russianTips];
