import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade5 = course(
    5,
    ["Middle school begins: phonetics, lexicology, word formation in depth, and a literature course from folklore to Tumanyan.", "Սկսվում է միջին դպրոցը՝ հնչյունաբանություն, բառագիտություն, բառակազմություն խորությամբ, գրականություն՝ բանահյուսությունից մինչև Թումանյան։", "Начало средней школы: фонетика, лексикология, углублённое словообразование и курс литературы от фольклора до Туманяна."],
    ["Armenia grade 5: «Հայոց լեզու» (3 h) + «Գրականություն» (2 h). Language: phonetics and orthography, lexicology (meaning, synonyms, homonyms, phraseology), word formation. Literature: folklore genres, fairy tales, fables, Tumanyan, Aghayan, Isahakyan, Shiraz, foreign literature.", "Հայաստան, 5-րդ դասարան՝ «Հայոց լեզու» (3 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ հնչյունաբանություն և ուղղագրություն, բառագիտություն (իմաստ, հոմանիշ, համանուն, դարձվածք), բառակազմություն։ Գրականություն՝ բանահյուսության ժանրեր, հեքիաթներ, առակներ, Թումանյան, Աղայան, Իսահակյան, Շիրազ, արտասահմանյան գրականություն։", "Армения, 5 класс: «Армянский язык» (3 ч) + «Литература» (2 ч). Язык: фонетика и орфография, лексикология (значение, синонимы, омонимы, фразеологизмы), словообразование. Литература: жанры фольклора, сказки, басни, Туманян, Агаян, Исаакян, Шираз, зарубежная литература."],
    ruNote,
    { armenia: 5, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
