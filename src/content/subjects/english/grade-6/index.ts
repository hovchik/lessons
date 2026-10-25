import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade6 = course(
    6,
    ["Present perfect, past continuous, quantifiers, the environment, health and food, famous cities, reading longer texts and writing emails.", "Present perfect, past continuous, քանակական բառեր, շրջակա միջավայր, առողջություն և սնունդ, հայտնի քաղաքներ, ավելի երկար տեքստերի ընթերցանություն, էլ. նամակ։", "Present perfect, past continuous, квантификаторы, окружающая среда, здоровье и еда, известные города, чтение длинных текстов и написание писем."],
    ["Armenia grade 6 (3 h/week): topics include Yerevan and London, Armenian traditions, healthy lifestyle, nature of Armenia; grammar: past continuous, present perfect (intro), quantifiers, modal verbs. Pupils write short letters and descriptions.", "Հայաստան, 6-րդ դասարան (3 ժ/շաբ.)՝ թեմաներ՝ Երևան և Լոնդոն, հայկական ավանդույթներ, առողջ ապրելակերպ, Հայաստանի բնություն․ քերականություն՝ past continuous, present perfect (ներածություն), քանակական բառեր, մոդալ բայեր։", "Армения, 6 класс (3 ч/нед.): темы — Ереван и Лондон, армянские традиции, здоровый образ жизни, природа Армении; грамматика — past continuous, present perfect (введение), квантификаторы, модальные глаголы."],
    ["Russia grade 6 (3 h/week): present perfect with ever/never/just/already/yet, past continuous, much/many/a lot of/few/little, have to, possessive pronouns, ordinal numbers and dates, Moscow and London, the environment, free time, celebrations.", "Ռուսաստան, 6-րդ դասարան (3 ժ/շաբ.)՝ present perfect ever/never/just/already/yet-ով, past continuous, much/many/a lot of/few/little, have to, ստացական դերանուններ, դասական թվականներ և ամսաթվեր, Մոսկվա և Լոնդոն, միջավայր։", "Россия, 6 класс (3 ч/нед.): present perfect с ever/never/just/already/yet, past continuous, much/many/a lot of/few/little, have to, притяжательные местоимения, порядковые числительные и даты, Москва и Лондон, экология, досуг."],
    { armenia: 3, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
