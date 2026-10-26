import { PICS_1, type Pic } from "./pictures-1";
import { PICS_2 } from "./pictures-2";
import { PICS_3 } from "./pictures-3";

export type { Pic };

/** All pictures for the `pic` block, by id. */
export const PICS: Record<string, Pic> = { ...PICS_1, ...PICS_2, ...PICS_3 };
