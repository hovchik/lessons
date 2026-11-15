/**
 * Course-wide tips from the first tips batch that clearly belong to one lesson.
 * Key: `${subject}-${grade}/${tip slug}`, value: lesson slug. Linked tips are shown inside that
 * lesson as well as on the course page; tips that are general habits stay course-wide.
 */
export const TIP_LESSONS: Record<string, string> = {
  "math-1/make-ten": "add-crossing-ten",
  "math-1/count-on-from-bigger": "swap-addends",
  "math-1/doubles-and-near-doubles": "doubles",
  "math-1/subtract-by-counting-up": "link-add-subtract",
  "math-2/add-by-rounding": "add-two-digit-mental",
  "math-2/two-times-table-doubling": "tables-4-5",
  "math-2/check-with-the-opposite": "checking-answers",
  "math-3/multiply-by-11": "multiply-two-digit-by-digit",
  "math-3/multiply-by-5": "multiply-round-tens",
  "math-3/times-table-only-half": "commutative-multiplication",
  "math-3/draw-the-problem": "two-step-problems",
  "math-4/multiply-by-25": "multiply-round-numbers",
  "math-4/casting-out-nines": "column-add-large",
  "math-4/squares-ending-in-5": "multiply-two-digit",
  "math-4/work-backwards": "equations-grade4",
  "math-5/percent-of-swap": "percent-of-number",
  "math-5/ten-percent-first": "percent-of-number",
  "math-5/butterfly-fractions": "common-denominator",
  "math-5/decimal-fraction-pairs": "decimal-notation",
  "math-6/negative-numbers-money": "add-negatives",
  "math-6/fraction-of-fraction": "fraction-of-number",
  "math-6/ratio-table": "proportion",
};
