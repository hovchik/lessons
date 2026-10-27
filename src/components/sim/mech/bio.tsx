"use client";

import { BIO_A } from "./bio-a";
import { BIO_B } from "./bio-b";
import type { Mech } from "./types";

export const MECHS: Record<string, Mech> = { ...BIO_A, ...BIO_B };
