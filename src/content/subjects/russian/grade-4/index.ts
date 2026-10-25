import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade4 = course(
    4,
    ["Declension of nouns, adjectives and pronouns, conjugation of verbs, homogeneous members, text work; end of primary.", "Գոյականի, ածականի և դերանվան հոլովում, բայի խոնարհում, համադաս անդամներ, տեքստ, տարրական դպրոցի ավարտ։", "Склонение существительных, прилагательных и местоимений, спряжение глаголов, однородные члены, работа с текстом; конец начальной школы."],
    ["Armenia grade 4 (3 h/week): systematic cases of nouns and adjectives, verb conjugation (I and II), aspect introduced, dialogue and monologue on topics (Armenia and Russia, holidays, travel), reading adapted texts, grade 4 assessment in Russian.", "Հայաստան, 4-րդ դասարան (3 ժ/շաբ.)՝ գոյականի և ածականի հոլովման համակարգ, բայի խոնարհում (I և II), կերպի ներմուծում, երկխոսություն և մենախոսություն (Հայաստան և Ռուսաստան, տոներ, ճանապարհորդություն), հարմարեցված տեքստերի ընթերցանություն, 4-րդ դասարանի ստուգում։", "Армения, 4 класс (3 ч/нед.): система падежей существительных и прилагательных, спряжение глаголов (I и II), введение вида, диалог и монолог по темам (Армения и Россия, праздники, путешествия), чтение адаптированных текстов, проверка за 4 класс."],
    ["Russia grade 4 (ФГОС НОО, 5 h/week): sentence with homogeneous members, complex sentences, three declensions of nouns, declension of adjectives and personal pronouns, I and II conjugation, spelling of unstressed personal endings, -тся/-ться, ВПР preparation.", "Ռուսաստան, 4-րդ դասարան (ФГОС НОО, 5 ժ/շաբ.)՝ համադաս անդամներով նախադասություն, բարդ նախադասություններ, գոյականի երեք հոլովում, ածականի և անձնական դերանունների հոլովում, I և II խոնարհում, անշեշտ դիմային վերջավորություններ, -тся/-ться, ВПР նախապատրաստություն։", "Россия, 4 класс (ФГОС НОО, 5 ч/нед.): предложение с однородными членами, сложные предложения, три склонения существительных, склонение прилагательных и личных местоимений, I и II спряжение, правописание безударных личных окончаний, -тся/-ться, подготовка к ВПР."],
    { armenia: 3, russia: 5 },
  [unit1, unit2, unit3, unit4, unit5],
);
