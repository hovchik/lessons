import type { Tr } from "@/lib/art/spec";
import { HIST_TIMELINES } from "./timelines-hist";

/** One dated event: years BC are negative; `to` makes it a period, `c` marks an approximate date. */
export type TimeEvent = { y: number; to?: number; c?: boolean; l: Tr; n?: Tr };
export type TimeSet = { title: Tr; events: TimeEvent[]; eras?: Array<{ from: number; to: number; l: Tr; color?: string }> };

export const TIMELINES: Record<string, TimeSet> = { ...HIST_TIMELINES };
