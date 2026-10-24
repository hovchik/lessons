import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade6 = course(
    6,
    ["Morphology part one: noun, adjective, numeral, pronoun; literature of the 19th century — Abovyan, Proshyan, Raffi, Tumanyan.", "Ձևաբանություն, մաս առաջին՝ գոյական, ածական, թվական, դերանուն, 19-րդ դարի գրականություն՝ Աբովյան, Պռոշյան, Րաֆֆի, Թումանյան։", "Морфология, часть первая: существительное, прилагательное, числительное, местоимение; литература XIX века — Абовян, Прошян, Раффи, Туманян."],
    ["Armenia grade 6: «Հայոց լեզու» (3 h) + «Գրականություն» (2 h). Language: parts of speech system, noun (all categories), adjective, numeral, pronoun (all classes). Literature: Abovyan's «Վերք Հայաստանի» (excerpts), Proshyan, Raffi «Սամվել» excerpts, Tumanyan's quatrains, Shirvanzade, Sevak for youth.", "Հայաստան, 6-րդ դասարան՝ «Հայոց լեզու» (3 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ խոսքի մասերի համակարգ, գոյական (բոլոր կարգերը), ածական, թվական, դերանուն (բոլոր տեսակները)։ Գրականություն՝ Աբովյանի «Վերք Հայաստանի» (հատվածներ), Պռոշյան, Րաֆֆի «Սամվել» (հատվածներ), Թումանյանի քառյակներ, Շիրվանզադե, Սևակ։", "Армения, 6 класс: «Армянский язык» (3 ч) + «Литература» (2 ч). Язык: система частей речи, существительное (все категории), прилагательное, числительное, местоимение (все разряды). Литература: «Раны Армении» Абовяна (отрывки), Прошян, «Самвел» Раффи (отрывки), четверостишия Туманяна, Ширванзаде, Севак для юношества."],
    ruNote,
    { armenia: 5, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
