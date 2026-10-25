import type { TipSeed } from "./types";
import { mathTips } from "./math";
import { algebraTips } from "./algebra";
import { geometryTips } from "./geometry";
import { physicsTips } from "./physics";

export const tips: TipSeed[] = [...mathTips, ...algebraTips, ...geometryTips, ...physicsTips];
