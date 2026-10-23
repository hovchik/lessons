import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade3 = course(
  3,
    ["Reading and writing begin: phonics, short words and sentences, «to be» and «have got», school, home, days and the time.", "Սկսվում են ընթերցանությունն ու գիրը․ հնչյունաբանություն, կարճ բառեր և նախադասություններ, «to be» և «have got», դպրոց, տուն, շաբաթվա օրեր և ժամ։", "Начинаются чтение и письмо: фонетика, короткие слова и предложения, «to be» и «have got», школа, дом, дни недели и время."],
    ["Armenia grade 3 (first official year of the foreign language, 2 h/week): the state standard expects pupils to greet, introduce themselves, name school objects, colours, numbers to 20, read and copy short words. Textbooks follow a phonics-first approach.", "Հայաստան, 3-րդ դասարան (օտար լեզվի առաջին պաշտոնական տարի, 2 ժ/շաբ.)՝ չափորոշիչը պահանջում է ողջունել, ներկայանալ, անվանել դպրոցական առարկաները, գույները, թվերը մինչև 20, կարդալ և արտագրել կարճ բառեր։", "Армения, 3 класс (первый официальный год иностранного языка, 2 ч/нед.): стандарт ожидает умения приветствовать, представляться, называть школьные предметы, цвета, числа до 20, читать и списывать короткие слова."],
    ["Russia grade 3 (2 h/week): second year — reading rules for vowels in open/closed syllables, present simple with «to be», «have got», «can», there is/there are, plural nouns, numbers to 100, school, food, free time, seasons.", "Ռուսաստան, 3-րդ դասարան (2 ժ/շաբ.)՝ երկրորդ տարի․ ձայնավորների ընթերցանության կանոններ բաց/փակ վանկում, present simple «to be»-ով, «have got», «can», there is/are, հոգնակի, թվեր մինչև 100, դպրոց, սնունդ, ազատ ժամանակ, եղանակներ։", "Россия, 3 класс (2 ч/нед.): второй год — правила чтения гласных в открытом/закрытом слоге, present simple с «to be», «have got», «can», there is/there are, множественное число, числа до 100, школа, еда, досуг, времена года."],
    { armenia: 2, russia: 2 },
  [unit1, unit2, unit3, unit4, unit5],
);
