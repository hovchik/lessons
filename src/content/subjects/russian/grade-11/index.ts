import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";
import { unit6 } from "./unit-6";

export const russianGrade11 = course(
    11,
    ["Syntax and punctuation review, text and stylistics, speech culture, exam essay; literature of the 20th century.", "Շարահյուսության և կետադրության ամփոփում, տեքստ և ոճաբանություն, խոսքի մշակույթ, քննական շարադրություն, 20-րդ դարի գրականություն։", "Повторение синтаксиса и пунктуации, текст и стилистика, культура речи, экзаменационное сочинение; литература XX века."],
    ["Armenia grade 11 (2 h/week): syntax and punctuation review, academic writing, presentations, media texts; literature: Bunin, Kuprin, Gorky, Blok, Yesenin, Mayakovsky, Akhmatova, Tsvetaeva, Bulgakov's «Мастер и Маргарита», Sholokhov, Pasternak, Solzhenitsyn, Shukshin, Rasputin.", "Հայաստան, 11-րդ դասարան (2 ժ/շաբ.)՝ շարահյուսության և կետադրության ամփոփում, ակադեմիական գրություն, ներկայացումներ, մեդիա տեքստեր, գրականություն՝ Բունին, Կուպրին, Գորկի, Բլոկ, Եսենին, Մայակովսկի, Ախմատովա, Ցվետաևա, Բուլգակովի «Мастер и Маргарита», Շոլոխով, Պաստեռնակ, Սոլժենիցին, Շուկշին, Ռասպուտին։", "Армения, 11 класс (2 ч/нед.): повторение синтаксиса и пунктуации, академическое письмо, презентации, медиатексты; литература: Бунин, Куприн, Горький, Блок, Есенин, Маяковский, Ахматова, Цветаева, «Мастер и Маргарита» Булгакова, Шолохов, Пастернак, Солженицын, Шукшин, Распутин."],
    ["Russia grade 11 (ФГОС СОО, Russian 1–3 h + Literature 3 h; ЕГЭ): syntax and punctuation (systematic), text, functional styles, speech culture, exam essay. Literature: Bunin, Kuprin, Gorky, Silver Age poetry, Bulgakov, Platonov, Sholokhov's «Тихий Дон», war literature, Tvardovsky, Solzhenitsyn, Shukshin, Rasputin, Astafiev, Brodsky, contemporary literature.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ռուսերեն 1–3 ժ + գրականություն 3 ժ, ЕГЭ)՝ շարահյուսություն և կետադրություն, տեքստ, գործառական ոճեր, խոսքի մշակույթ, շարադրություն։ Գրականություն՝ Բունին, Կուպրին, Գորկի, Արծաթե դար, Բուլգակով, Պլատոնով, Շոլոխովի «Тихий Дон», պատերազմի գրականություն, Տվարդովսկի, Սոլժենիցին, Շուկշին, Ռասպուտին, Աստաֆև, Բրոդսկի, ժամանակակից գրականություն։", "Россия, 11 класс (ФГОС СОО, русский 1–3 ч + литература 3 ч; ЕГЭ): синтаксис и пунктуация (системно), текст, функциональные стили, культура речи, сочинение ЕГЭ. Литература: Бунин, Куприн, Горький, поэзия Серебряного века, Булгаков, Платонов, «Тихий Дон» Шолохова, литература о войне, Твардовский, Солженицын, Шукшин, Распутин, Астафьев, Бродский, современная литература."],
    { armenia: 2, russia: 2 },
  [unit1, unit2, unit3, unit4, unit5, unit6],
);
