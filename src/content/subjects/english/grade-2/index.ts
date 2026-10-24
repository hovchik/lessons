import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade2 = course(
  2,
    ["First English: greetings, the alphabet, colours, numbers 1–10, family and toys, through songs, games and pictures.", "Առաջին անգլերեն՝ ողջույններ, այբուբեն, գույներ, 1–10 թվեր, ընտանիք և խաղալիքներ՝ երգերի, խաղերի և նկարների միջոցով։", "Первый английский: приветствия, алфавит, цвета, числа 1–10, семья и игрушки — через песни, игры и картинки."],
    ["Armenia: a foreign language officially starts in grade 3, but many schools offer an optional oral English club in grade 2. This course is purely oral and playful: no reading or writing is required.", "Հայաստան․ օտար լեզուն պաշտոնապես սկսվում է 3-րդ դասարանից, սակայն շատ դպրոցներ 2-րդում առաջարկում են բանավոր անգլերենի խմբակ։ Դասընթացը բանավոր է և խաղային՝ կարդալ-գրել չի պահանջվում։", "Армения: иностранный язык официально начинается с 3 класса, но многие школы предлагают во 2 классе устный кружок английского. Курс устный и игровой, чтение и письмо не требуются."],
    ["Russia grade 2 (ФГОС НОО, 2 h/week): first year of the foreign language — alphabet and sounds, greetings, name and age, family, colours, numbers 1–10, toys and pets, simple «I have / I like / It is» structures.", "Ռուսաստան, 2-րդ դասարան (ФГОС НОО, 2 ժ/շաբ.)՝ օտար լեզվի առաջին տարի․ այբուբեն և հնչյուններ, ողջույններ, անուն և տարիք, ընտանիք, գույներ, 1–10 թվեր, խաղալիքներ և կենդանիներ, «I have / I like / It is» կառույցներ։", "Россия, 2 класс (ФГОС НОО, 2 ч/нед.): первый год иностранного языка — алфавит и звуки, приветствия, имя и возраст, семья, цвета, числа 1–10, игрушки и питомцы, простые структуры «I have / I like / It is»."],
    { armenia: null, russia: 2 },
  [unit1, unit2, unit3, unit4, unit5],
);
