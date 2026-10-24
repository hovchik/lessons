import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade3 = course(
    3,
    ["Word structure and spelling, parts of speech in detail (noun cases introduced), sentence and text; extended vocabulary and reading.", "Բառի կազմ և ուղղագրություն, խոսքի մասեր մանրամասն (գոյականի հոլովների ներմուծում), նախադասություն և տեքստ, բառապաշարի ընդլայնում և ընթերցանություն։", "Состав слова и правописание, части речи подробно (введение падежей), предложение и текст; расширение словаря и чтение."],
    ["Armenia grade 3 (Russian as second language, 3 h/week): reading fluency, basic grammar (gender, number, present-tense conjugation, adjective agreement), vocabulary topics (home, city, nature, food), dialogues and short monologues, poems by heart.", "Հայաստան, 3-րդ դասարան (ռուսերեն որպես երկրորդ լեզու, 3 ժ/շաբ.)՝ սահուն ընթերցանություն, հիմնական քերականություն (սեռ, թիվ, բայի խոնարհում ներկա ժամանակում, ածականի համաձայնություն), բառապաշարի թեմաներ (տուն, քաղաք, բնություն, սնունդ), երկխոսություններ, ոտանավորներ անգիր։", "Армения, 3 класс (русский как второй язык, 3 ч/нед.): беглое чтение, базовая грамматика (род, число, спряжение глагола в настоящем времени, согласование прилагательного), лексические темы (дом, город, природа, еда), диалоги и монологи, стихи наизусть."],
    ["Russia grade 3 (ФГОС НОО, 5 h/week): text and sentence (phrase, simple and complex), word in language and speech, word structure (root, ending, prefix, suffix), spelling of word parts, parts of speech (noun: cases; adjective: gender/number/case; pronoun; verb: tense, не with verbs).", "Ռուսաստան, 3-րդ դասարան (ФГОС НОО, 5 ժ/շաբ.)՝ տեքստ և նախադասություն, բառակապակցություն, պարզ և բարդ նախադասություն, բառի կազմ (արմատ, վերջավորություն, նախածանց, վերջածանց), բառի մասերի ուղղագրություն, խոսքի մասեր (գոյականի հոլովներ, ածականի սեռ/թիվ/հոլով, դերանուն, բայի ժամանակ, не բայերի հետ)։", "Россия, 3 класс (ФГОС НОО, 5 ч/нед.): текст и предложение (словосочетание, простое и сложное), слово в языке и речи, состав слова (корень, окончание, приставка, суффикс), правописание частей слова, части речи (существительное: падежи; прилагательное: род/число/падеж; местоимение; глагол: время, не с глаголами)."],
    { armenia: 3, russia: 5 },
  [unit1, unit2, unit3, unit4, unit5],
);
