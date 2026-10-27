import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";
import { unit6 } from "./unit-6";

export const russianGrade12 = course(
    12,
    ["Final Armenian year: Russian for university and work (academic writing, business communication, translation), exam preparation; literature seminar and comparative reading.", "Հայաստանի ավարտական տարի՝ ռուսերեն համալսարանի և աշխատանքի համար (ակադեմիական գրություն, գործնական հաղորդակցություն, թարգմանություն), քննության նախապատրաստություն, գրական սեմինար և համեմատական ընթերցանություն։", "Выпускной год в Армении: русский для университета и работы (академическое письмо, деловое общение, перевод), подготовка к экзамену; литературный семинар и сопоставительное чтение."],
    ["Armenia grade 12 (2 h/week; Russian is an elective in the unified exam): systematic review of grammar and orthography in test format, academic and business Russian, translation Armenian↔Russian, literature seminar (Armenian themes in Russian literature; Russian translations of Armenian classics by Bryusov, Blok, Akhmatova), essay.", "Հայաստան, 12-րդ դասարան (2 ժ/շաբ., ռուսերենը միասնական քննության ընտրովի առարկա է)՝ քերականության և ուղղագրության համակարգված ամփոփում թեստային ձևաչափով, ակադեմիական և գործնական ռուսերեն, թարգմանություն հայերեն↔ռուսերեն, գրական սեմինար (հայկական թեմաները ռուս գրականությունում, հայ դասականների ռուսերեն թարգմանություններ Բրյուսովի, Բլոկի, Ախմատովայի), շարադրություն։", "Армения, 12 класс (2 ч/нед.; русский — предмет по выбору на едином экзамене): системное повторение грамматики и орфографии в тестовом формате, академический и деловой русский, перевод армянский↔русский, литературный семинар (армянская тема в русской литературе; переводы армянской классики Брюсовым, Блоком, Ахматовой), эссе."],
    ["No Russian grade 12: this content corresponds to ЕГЭ preparation and first-year university Russian (speech culture, academic writing).", "Ռուսաստանում 12-րդ դասարան չկա․ բովանդակությունը համապատասխանում է ЕГЭ նախապատրաստությանը և համալսարանի առաջին կուրսի ռուսերենին։", "В России 12 класса нет: содержание соответствует подготовке к ЕГЭ и русскому языку первого курса университета (речевая культура, академическое письмо)."],
    { armenia: 2, russia: null },
  [unit1, unit2, unit3, unit4, unit5, unit6],
);
