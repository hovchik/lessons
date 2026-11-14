import { exams } from "@/content/exams";
import { shuffledChoice } from "@/lib/questions";
import { examItemId } from "@/lib/memory";
const pos = [0, 0, 0, 0]; let same0 = 0;
for (const e of exams) { let z = 0; e.questions.forEach((q, i) => { const s = shuffledChoice(q, examItemId(e.id, i)); pos[s.answer]++; if (s.answer === 0) z++; }); if (z / e.questions.length > 0.5) same0++; }
console.log(pos, "exams with >50% at A:", same0, "of", exams.length);
