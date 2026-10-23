import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade4 = course(
  4,
    ["Describing people and daily routines, present simple with he/she, present continuous, past simple of «to be», food, animals and places in town.", "Մարդկանց և ամենօրյա գործողությունների նկարագրություն, present simple he/she-ով, present continuous, «to be»-ի past simple, սնունդ, կենդանիներ, քաղաքի վայրեր։", "Описание людей и распорядка дня, present simple с he/she, present continuous, past simple глагола «to be», еда, животные, места в городе."],
    ["Armenia grade 4 (2 h/week): end of primary stage; standard expects A1-level listening/speaking on familiar topics, reading short texts, writing 4–5 sentences about oneself. Grade 4 has a knowledge check in the mother tongue and maths, not in English.", "Հայաստան, 4-րդ դասարան (2 ժ/շաբ.)՝ տարրական աստիճանի ավարտ․ պահանջվում է A1 մակարդակի լսել-խոսել ծանոթ թեմաներով, կարդալ կարճ տեքստեր, գրել 4–5 նախադասություն իր մասին։", "Армения, 4 класс (2 ч/нед.): завершение начальной ступени; стандарт ожидает A1 в аудировании и говорении на знакомые темы, чтение коротких текстов, письмо 4–5 предложений о себе."],
    ["Russia grade 4 (2 h/week): end of НОО — present simple all persons, present continuous, past simple (to be, regular verbs), future with «will» (intro), comparative adjectives, telling the time, daily routine, food, animals, holidays; ВПР-style tasks on listening, reading, writing.", "Ռուսաստան, 4-րդ դասարան (2 ժ/շաբ.)՝ НОО-ի ավարտ․ present simple բոլոր դեմքերով, present continuous, past simple (to be, կանոնավոր բայեր), «will» (ներածություն), համեմատական աստիճան, ժամ, օրակարգ, սնունդ, կենդանիներ, տոներ։", "Россия, 4 класс (2 ч/нед.): завершение НОО — present simple во всех лицах, present continuous, past simple (to be, правильные глаголы), будущее с «will» (введение), сравнительная степень, время, режим дня, еда, животные, праздники."],
    { armenia: 2, russia: 2 },
  [unit1, unit2, unit3, unit4, unit5],
);
