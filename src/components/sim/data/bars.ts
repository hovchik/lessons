import type { Tr } from "@/lib/art/spec";
import { BIO_BARS } from "./bars-bio";
import { GEO_BARS } from "./bars-geo";
import { INF_BARS } from "./bars-inf";
import { SCI_BARS } from "./bars-sci";

/** A data set for the bars widget: label, value and an optional note per row. */
export type BarSet = { title: Tr; unit?: Tr; log?: boolean; source?: Tr; colors?: string[]; rows: Array<[Tr, number, Tr?]> };

export const BAR_SETS: Record<string, BarSet> = { ...BIO_BARS, ...GEO_BARS, ...SCI_BARS, ...INF_BARS };
