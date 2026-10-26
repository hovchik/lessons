"use client";

import { PHYS_A } from "./phys-a";
import { PHYS_B } from "./phys-b";
import type { Mech } from "./types";

export const MECHS: Record<string, Mech> = { ...PHYS_A, ...PHYS_B };
