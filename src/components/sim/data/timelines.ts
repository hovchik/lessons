import type { Tr } from "@/lib/art/spec";
import { CH_TIMELINES } from "./timelines-ch";
import { HIST_TIMELINES } from "./timelines-hist";
import { INF_TIMELINES } from "./timelines-inf";
import { MUS_TIMELINES } from "./timelines-mus";
import { SOC_TIMELINES } from "./timelines-soc";
import { WORLD_TIMELINES } from "./timelines-world";

/** One dated event: years BC are negative; `to` makes it a period, `c` marks an approximate date. */
export type TimeEvent = { y: number; to?: number; c?: boolean; l: Tr; n?: Tr };
export type TimeSet = { title: Tr; events: TimeEvent[]; eras?: Array<{ from: number; to: number; l: Tr; color?: string }> };

export const TIMELINES: Record<string, TimeSet> = { ...HIST_TIMELINES, ...WORLD_TIMELINES, ...INF_TIMELINES, ...SOC_TIMELINES, ...CH_TIMELINES, ...MUS_TIMELINES };
