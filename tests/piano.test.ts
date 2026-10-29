import { test } from "node:test";
import assert from "node:assert/strict";
import { intervalName, parseNote } from "../src/components/sim/widgets/piano";
import { checkSimBlocks } from "../src/components/sim/validate";

const name = (a: string, b: string, lang: "en" | "hy" | "ru" = "en") => intervalName(parseNote(a)!, parseNote(b)!, lang).name;

test("intervals are named by their semitones, also from or to a black key", () => {
  assert.equal(name("C4", "E4"), "major third");
  assert.equal(name("C4", "D#4"), "minor third");
  assert.equal(name("C#4", "F4"), "major third");
  assert.equal(name("F4", "A#4"), "perfect fourth");
  assert.equal(name("C4", "F#4"), "tritone");
  assert.equal(name("D4", "C5"), "minor seventh");
  assert.equal(name("C4", "C5"), "octave");
  assert.equal(name("C4", "D#4", "ru"), "малая терция");
  assert.equal(intervalName(60, 63, "en").steps, 3);
});

test("a rhythm must fill whole bars and staff notes must be on the keyboard", () => {
  const errs = (spec: string) => checkSimBlocks(`~~~sim\n${spec}\n~~~\n`).join("\n");
  assert.equal(errs("piano mode=rhythm pattern=e,e,h,e,e,h meter=3"), "");
  assert.match(errs("piano mode=rhythm pattern=e,e,h,e,e,h meter=4"), /not whole bars/);
  assert.match(errs("piano mode=staff notes=A3,C4"), /on the keyboard/);
});
