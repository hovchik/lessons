import { test } from "node:test";
import assert from "node:assert/strict";
import { examItemId, parseItemId, quizItemId, recallChance, scheduleAnswer } from "../src/lib/memory";

const DAY = 24 * 60 * 60 * 1000;
const now = new Date("2026-10-26T10:00:00Z");
const daysUntil = (iso: string, from = now) => (new Date(iso).getTime() - from.getTime()) / DAY;

test("item ids round-trip", () => {
  assert.deepEqual(parseItemId(quizItemId("math-3-tables-6-7", 4)), { source: "quiz", refId: "math-3-tables-6-7", index: 4 });
  assert.deepEqual(parseItemId(examItemId("am-9-math", 0)), { source: "exam", refId: "am-9-math", index: 0 });
  assert.equal(parseItemId("nonsense"), null);
});

test("a right first answer comes back in a few days, a wrong one tomorrow", () => {
  const right = scheduleAnswer(null, true, now);
  const wrong = scheduleAnswer(null, false, now);
  assert.ok(daysUntil(right.due) >= 2 && daysUntil(right.due) <= 5, `right: ${daysUntil(right.due)} days`);
  assert.equal(daysUntil(wrong.due), 1);
  assert.equal(right.reps, 1);
});

test("a guess that happens to be right comes back sooner than a sure answer", () => {
  const sure = scheduleAnswer(null, true, now, 2);
  const guess = scheduleAnswer(null, true, now, 0);
  assert.ok(daysUntil(guess.due) < daysUntil(sure.due));
});

test("intervals grow with each right answer and stay within about half a year", () => {
  let card = scheduleAnswer(null, true, now);
  let prev = 0;
  for (let i = 0; i < 8; i++) {
    const at = new Date(card.due);
    card = scheduleAnswer(card, true, at);
    const gap = daysUntil(card.due, at);
    assert.ok(gap >= prev, `review ${i}: ${gap} < ${prev}`);
    // maximum_interval is 180; ts-fsrs can land one day past it.
    assert.ok(gap <= 181, `review ${i}: ${gap} days`);
    prev = gap;
  }
  assert.ok(prev > 60);
});

test("forgetting a well-known question brings it back by tomorrow and counts a lapse", () => {
  let card = scheduleAnswer(null, true, now);
  for (let i = 0; i < 4; i++) card = scheduleAnswer(card, true, new Date(card.due));
  const at = new Date(card.due);
  const after = scheduleAnswer(card, false, at);
  assert.ok(daysUntil(after.due, at) <= 1);
  assert.equal(after.lapses, card.lapses + 1);
});

test("recall chance falls over time", () => {
  const card = scheduleAnswer(null, true, now);
  const soon = recallChance(card, new Date(now.getTime() + DAY));
  const late = recallChance(card, new Date(now.getTime() + 30 * DAY));
  assert.ok(soon > 0.9 && soon <= 1);
  assert.ok(late < soon);
});
