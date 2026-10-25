import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade2 = course(
    2,
    ["For Armenian schools: Russian begins — alphabet, sounds, basic vocabulary and speech. For Russian schools: sounds and letters, word, sentence, text, first spelling rules.", "Հայկական դպրոց․ ռուսերենը սկսվում է՝ այբուբեն, հնչյուններ, հիմնական բառապաշար և խոսք։ Ռուսական դպրոց․ հնչյուն և տառ, բառ, նախադասություն, տեքստ, առաջին ուղղագրական կանոններ։", "Для армянской школы: русский начинается — алфавит, звуки, базовая лексика и речь. Для российской школы: звуки и буквы, слово, предложение, текст, первые правила."],
    ["Armenia grade 2 (Russian as a second language starts, 2–3 h/week): oral course (greetings, family, school, colours, numbers), Cyrillic alphabet, reading syllables and words, listening to songs and rhymes, dialogue. Textbook series: «Русский язык» for Armenian schools (МОН РА).", "Հայաստան, 2-րդ դասարան (ռուսերենը սկսվում է որպես երկրորդ լեզու, 2–3 ժ/շաբ.)՝ բանավոր դասընթաց (ողջույն, ընտանիք, դպրոց, գույներ, թվեր), կիրիլյան այբուբեն, վանկերի և բառերի ընթերցանություն, երգեր և ոտանավորներ, երկխոսություն։", "Армения, 2 класс (русский как второй язык начинается, 2–3 ч/нед.): устный курс (приветствия, семья, школа, цвета, числа), кириллица, чтение слогов и слов, песни и стихи, диалог. Учебники «Русский язык» для армянских школ (МОН РА)."],
    ["Russia grade 2 (ФГОС НОО, 5 h/week, 170 h): our speech, text, sentence, words and their meaning, sounds and letters (vowels, consonants, soft sign, divisive ь), spelling of unstressed vowels and paired consonants, parts of speech (noun, verb, adjective, pronoun, preposition).", "Ռուսաստան, 2-րդ դասարան (ФГОС НОО, 5 ժ/շաբ., 170 ժ)՝ խոսք, տեքստ, նախադասություն, բառ և իմաստ, հնչյուն և տառ, անշեշտ ձայնավորների և զույգ բաղաձայնների ուղղագրություն, խոսքի մասեր (գոյական, բայ, ածական, դերանուն, նախդիր)։", "Россия, 2 класс (ФГОС НОО, 5 ч/нед., 170 ч): наша речь, текст, предложение, слова и их значение, звуки и буквы (гласные, согласные, мягкий знак, разделительный ь), правописание безударных гласных и парных согласных, части речи (существительное, глагол, прилагательное, местоимение, предлог)."],
    { armenia: 2, russia: 5 },
  [unit1, unit2, unit3, unit4, unit5],
);
