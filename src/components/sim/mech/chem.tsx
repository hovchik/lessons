"use client";

import { CHEM_A } from "./chem-a";
import { CHEM_B } from "./chem-b";
import type { Mech } from "./types";

export const MECHS: Record<string, Mech> = { ...CHEM_A, ...CHEM_B };
