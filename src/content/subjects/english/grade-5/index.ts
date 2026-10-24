import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade5 = course(
    5,
    ["Moving to secondary school: consolidating present and past tenses, irregular verbs, comparatives and superlatives, countries, travel and the English-speaking world.", "Անցում միջին դպրոց․ ներկա և անցյալ ժամանակների ամրապնդում, անկանոն բայեր, համեմատական և գերադրական աստիճան, երկրներ, ճանապարհորդություն, անգլախոս աշխարհ։", "Переход в основную школу: закрепление настоящих и прошедших времён, неправильные глаголы, степени сравнения, страны, путешествия, англоязычный мир."],
    ["Armenia grade 5 (3 h/week in middle school): start of the basic stage; 10-point marking begins. Standard aims towards A1+/A2 by grade 9: communicative topics (family, school, hobbies, Armenia and the UK), systematic grammar and a first project.", "Հայաստան, 5-րդ դասարան (3 ժ/շաբ. միջին դպրոցում)՝ հիմնական աստիճանի սկիզբ, սկսվում է 10 բալանոց գնահատումը։ Նպատակ՝ A1+/A2 մինչև 9-րդ դասարան․ հաղորդակցական թեմաներ (ընտանիք, դպրոց, հոբբի, Հայաստան և Մեծ Բրիտանիա), համակարգված քերականություն։", "Армения, 5 класс (3 ч/нед. в средней школе): начало основной ступени; вводится 10-балльная шкала. Цель — A1+/A2 к 9 классу: коммуникативные темы (семья, школа, хобби, Армения и Великобритания), систематическая грамматика, первый проект."],
    ["Russia grade 5 (3 h/week, ФГОС ООО): present simple/continuous, past simple with irregular verbs, future simple, degrees of comparison, modal verbs can/must/should, articles, countries and nationalities, English-speaking countries, school life, famous people.", "Ռուսաստան, 5-րդ դասարան (3 ժ/շաբ., ФГОС ООО)՝ present simple/continuous, past simple անկանոն բայերով, future simple, համեմատության աստիճաններ, can/must/should, հոդեր, երկրներ և ազգություններ, անգլախոս երկրներ, դպրոցական կյանք։", "Россия, 5 класс (3 ч/нед., ФГОС ООО): present simple/continuous, past simple с неправильными глаголами, future simple, степени сравнения, модальные can/must/should, артикли, страны и национальности, англоязычные страны, школьная жизнь."],
    { armenia: 3, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
