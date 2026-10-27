import type { Tr } from "@/lib/art/spec";
import { BIO_BARS } from "./bars-bio";

/** A data set for the bars widget: label, value and an optional note per row. */
export type BarSet = { title: Tr; unit?: Tr; log?: boolean; source?: Tr; colors?: string[]; rows: Array<[Tr, number, Tr?]> };

export const BAR_SETS: Record<string, BarSet> = { ...BIO_BARS };
