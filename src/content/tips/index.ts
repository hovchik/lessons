import type { TipSeed } from "./types";
import { mathTips } from "./math";
import { algebraTips } from "./algebra";

export const tips: TipSeed[] = [...mathTips, ...algebraTips];
