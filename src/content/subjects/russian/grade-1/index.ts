import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade1 = course(
    1,
    ["Russian primer: the Cyrillic alphabet, reading syllables and words, first sentences (Russian schools); oral preparation for Armenian schools.", "Ռուսերեն այբբենարան՝ կիրիլյան այբուբեն, վանկերի և բառերի ընթերցանություն, առաջին նախադասություններ (ռուսական դպրոց), բանավոր նախապատրաստություն հայկական դպրոցի համար։", "Русский букварь: кириллица, чтение слогов и слов, первые предложения (российская школа); устная подготовка для армянской школы."],
    ["Armenia: Russian is not taught in grade 1 of Armenian-medium schools (it starts in grade 2). This grade-1 course serves Russian-medium classes in Armenia and as an optional oral introduction (songs, rhymes, basic words) for younger children.", "Հայաստան․ հայալեզու դպրոցների 1-ին դասարանում ռուսերեն չի դասավանդվում (սկսվում է 2-րդ դասարանից)։ Այս դասընթացը նախատեսված է Հայաստանի ռուսալեզու դասարանների և փոքրիկների բանավոր ներածության (երգեր, ոտանավորներ, հիմնական բառեր) համար։", "Армения: в 1 классе армяноязычных школ русский не преподаётся (начинается со 2 класса). Этот курс предназначен для русскоязычных классов Армении и как устное введение (песни, стишки, базовые слова) для младших."],
    ["Russia grade 1 (ФГОС НОО, «Обучение грамоте» 9 h/week incl. reading, then «Русский язык» 5 h): pre-primer period, 33 letters, syllable reading, writing in cursive, first spelling rules (жи-ши, ча-ща, чу-щу, capital letters), sentence.", "Ռուսաստան, 1-ին դասարան (ФГОС НОО, «Գրագիտության ուսուցում» 9 ժ/շաբ. ներառյալ ընթերցանություն, ապա «Ռուսաց լեզու» 5 ժ)՝ նախաայբբենական շրջան, 33 տառ, վանկային ընթերցանություն, ձեռագիր, առաջին ուղղագրական կանոններ (жи-ши, ча-ща, чу-щу, մեծատառ), նախադասություն։", "Россия, 1 класс (ФГОС НОО, «Обучение грамоте» 9 ч/нед. включая чтение, затем «Русский язык» 5 ч): добукварный период, 33 буквы, слоговое чтение, письмо, первые правила (жи-ши, ча-ща, чу-щу, заглавная буква), предложение."],
    { armenia: null, russia: 5 },
  [unit1, unit2, unit3, unit4, unit5],
);
