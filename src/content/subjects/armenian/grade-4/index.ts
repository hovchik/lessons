import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade4 = course(
    4,
    ["Completing the primary grammar course: declension and conjugation systems, complex sentences introduced, essays, and the grade 4 state assessment.", "Տարրական քերականության ամփոփում՝ հոլովում և խոնարհում, բարդ նախադասության ներմուծում, շարադրություններ, 4-րդ դասարանի պետական ստուգում։", "Завершение начального курса грамматики: склонение и спряжение, введение сложного предложения, сочинения и государственная проверка за 4 класс."],
    ["Armenia grade 4, «Մայրենի» (6 h/week): noun declension types, verb conjugations and moods introduced, adverb, conjunction, preposition and postposition, simple and complex sentences, direct speech, text types (reasoning), reading Armenian classics; ends with the state check (20-point).", "Հայաստան, 4-րդ դասարան, «Մայրենի» (6 ժ/շաբ.)՝ գոյականի հոլովման տիպեր, բայի խոնարհում և եղանակների ներմուծում, մակբայ, շաղկապ, նախդիր և կապ, պարզ և բարդ նախադասություն, ուղղակի խոսք, տեքստի տեսակներ (դատողություն), հայ դասականների ընթերցանություն, պետական ստուգում (20-բալանոց)։", "Армения, 4 класс, «Մայրենի» (6 ч/нед.): типы склонения существительных, спряжение глагола и введение наклонений, наречие, союз, предлог и послелог, простое и сложное предложение, прямая речь, типы текста (рассуждение), чтение армянской классики; государственная проверка (20 баллов)."],
    ruNote,
    { armenia: 6, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
