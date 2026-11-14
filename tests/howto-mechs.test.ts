import { test } from "node:test";
import assert from "node:assert/strict";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MECH_GROUPS } from "../src/components/sim/mech/ids";
import type { Mech } from "../src/components/sim/mech/types";
import { MECHS as howto1 } from "../src/components/sim/mech/howto-1";
import { MECHS as howto2 } from "../src/components/sim/mech/howto-2";
import { MECHS as howto3 } from "../src/components/sim/mech/howto-3";

// tsconfig keeps JSX as-is for Next.js, so tsx compiles it to React.createElement calls.
(globalThis as { React?: typeof React }).React = React;

const FILES: Record<"howto1" | "howto2" | "howto3", Record<string, Mech>> = { howto1, howto2, howto3 };

for (const [group, mechs] of Object.entries(FILES) as Array<[keyof typeof FILES, Record<string, Mech>]>) {
  test(`${group}: the id list matches the file`, () => {
    assert.deepEqual(Object.keys(mechs).sort(), [...MECH_GROUPS[group]].sort());
  });

  test(`${group}: every step draws in every language`, () => {
    for (const [id, mech] of Object.entries(mechs)) {
      assert.ok(mech.caps.length >= 3, `${id} has too few steps`);
      for (const lang of ["en", "hy", "ru"] as const) {
        assert.ok(mech.title[lang], `${id} has no ${lang} title`);
        mech.caps.forEach((cap, i) => {
          assert.ok(cap[lang], `${id} step ${i} has no ${lang} caption`);
          for (const p of [0, 0.5, 1]) {
            const svg = renderToStaticMarkup(React.createElement("svg", null, mech.draw(i, p, lang)));
            assert.ok(!svg.includes("NaN"), `${id} step ${i} (${lang}, p=${p}) draws NaN`);
          }
        });
      }
    }
  });
}
