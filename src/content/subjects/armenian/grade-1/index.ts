import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade1 = course(
    1,
    ["The Armenian alphabet, reading syllables and words, first sentences, listening and speaking.", "Հայոց այբուբենը, վանկերի և բառերի ընթերցանություն, առաջին նախադասությունները, լսել և խոսել։", "Армянский алфавит, чтение слогов и слов, первые предложения, аудирование и говорение."],
    ["Armenia grade 1, «Մայրենի» (7 h/week): pre-alphabet period (speech, sounds, syllables), alphabet period (39 letters in the order of the Armenian primer: Ա, Յ, Ն, Ս, Ր …), post-alphabet period (reading short texts, Tumanyan, Aghayan, Khnko-Aper). Descriptive assessment, no marks.", "Հայաստան, 1-ին դասարան, «Մայրենի» (7 ժ/շաբ.)՝ նախաայբբենական շրջան (խոսք, հնչյուններ, վանկեր), այբբենական շրջան (39 տառ հայկական Այբբենարանի հերթականությամբ՝ Ա, Յ, Ն, Ս, Ր …), հետայբբենական շրջան (կարճ տեքստերի ընթերցանություն, Թումանյան, Աղայան, Խնկո-Ապեր)։ Նկարագրական գնահատում։", "Армения, 1 класс, «Մայրենի» (7 ч/нед.): добукварный период (речь, звуки, слоги), букварный период (39 букв в порядке армянского букваря: Ա, Յ, Ն, Ս, Ր …), послебукварный период (чтение коротких текстов, Туманян, Агаян, Хнко-Апер). Описательное оценивание."],
    ruNote,
    { armenia: 7, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
