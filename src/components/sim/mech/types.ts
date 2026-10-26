import type { ReactNode } from "react";
import type { ArtLang, Tr } from "@/lib/art/spec";

/**
 * A step-by-step mechanism: one picture that changes with each step, and a caption per step.
 * `draw` gets the step index, a 0→1 phase that loops while the step is shown (for small
 * animations) and the language for labels inside the picture.
 */
export type Mech = {
  title: Tr;
  hint?: Tr;
  caps: Tr[];
  w?: number;
  h?: number;
  dark?: boolean;
  draw: (i: number, p: number, lang: ArtLang) => ReactNode;
};

/** A labelled picture: tap a numbered dot to read about that part. */
export type Diagram = {
  title: Tr;
  hint?: Tr;
  w?: number;
  h?: number;
  dark?: boolean;
  draw: (lang: ArtLang, active: number | null) => ReactNode;
  parts: Array<{ x: number; y: number; name: Tr; text: Tr }>;
};
