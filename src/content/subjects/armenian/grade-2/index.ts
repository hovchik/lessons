import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade2 = course(
    2,
    ["Fluent reading, spelling rules, sentence and word, nouns and verbs introduced, children's literature.", "Սահուն ընթերցանություն, ուղղագրության կանոններ, նախադասություն և բառ, գոյական և բայ, մանկական գրականություն։", "Беглое чтение, правила правописания, предложение и слово, знакомство с существительным и глаголом, детская литература."],
    ["Armenia grade 2, «Մայրենի» (7 h/week): sounds and letters, syllable division and hyphenation, Ե/Է, Ո/Օ, Ը spelling, sentence types, word meaning, parts of speech first look (noun, adjective, verb), reading comprehension of folk tales and classic children's authors.", "Հայաստան, 2-րդ դասարան, «Մայրենի» (7 ժ/շաբ.)՝ հնչյուն և տառ, վանկատում և տողադարձ, Ե/Է, Ո/Օ, Ը-ի ուղղագրություն, նախադասության տեսակները, բառի իմաստ, խոսքի մասերի առաջին ծանոթություն (գոյական, ածական, բայ), ժողովրդական հեքիաթների և մանկագիրների ընթերցանություն։", "Армения, 2 класс, «Մայրենի» (7 ч/нед.): звуки и буквы, слогоделение и перенос, правописание Ե/Է, Ո/Օ, Ը, типы предложений, значение слова, первое знакомство с частями речи (существительное, прилагательное, глагол), чтение народных сказок и классиков детской литературы."],
    ruNote,
    { armenia: 7, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
