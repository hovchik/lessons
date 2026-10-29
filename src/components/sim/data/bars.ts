import type { Tr } from "@/lib/art/spec";
import { ASTRO_BARS } from "./bars-astro";
import { BIO_BARS } from "./bars-bio";
import { CH_BARS } from "./bars-ch";
import { CHESS_BARS } from "./bars-chess";
import { GEO_BARS } from "./bars-geo";
import { INF_BARS } from "./bars-inf";
import { MUS_BARS } from "./bars-mus";
import { SCI_BARS } from "./bars-sci";
import { TECH_BARS } from "./bars-tech";

/** A data set for the bars widget: label, value and an optional note per row. */
export type BarSet = { title: Tr; unit?: Tr; log?: boolean; source?: Tr; colors?: string[]; rows: Array<[Tr, number, Tr?]> };

export const BAR_SETS: Record<string, BarSet> = { ...BIO_BARS, ...ASTRO_BARS, ...GEO_BARS, ...SCI_BARS, ...INF_BARS, ...CH_BARS, ...MUS_BARS, ...TECH_BARS, ...CHESS_BARS };
