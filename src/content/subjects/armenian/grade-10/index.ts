import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade10 = course(
    10,
    ["High school: history of the Armenian language, phonetics and lexicology at an advanced level, stylistics; literature of the 5th–18th centuries.", "Ավագ դպրոց՝ հայոց լեզվի պատմություն, հնչյունաբանություն և բառագիտություն խորացված, ոճաբանություն, 5–18-րդ դարերի գրականություն։", "Старшая школа: история армянского языка, фонетика и лексикология на углублённом уровне, стилистика; литература V–XVIII веков."],
    ["Armenia grade 10 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h, humanities stream more): language as a system, Grabar–Middle Armenian–Modern Armenian, Eastern and Western Armenian, orthography reforms, phonetics and lexicology in depth, stylistics. Literature: 5th-century historians, Narekatsi, medieval lyric, Sayat-Nova, Armenian Enlightenment.", "Հայաստան, 10-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ լեզուն որպես համակարգ, գրաբար–միջին հայերեն–աշխարհաբար, արևելահայերեն և արևմտահայերեն, ուղղագրական բարեփոխումներ, հնչյունաբանություն և բառագիտություն խորությամբ, ոճաբանություն։ Գրականություն՝ 5-րդ դարի պատմիչներ, Նարեկացի, միջնադարյան քնարերգություն, Սայաթ-Նովա, հայ լուսավորականություն։", "Армения, 10 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): язык как система, грабар — среднеармянский — ашхарабар, восточно- и западноармянский, орфографические реформы, углублённая фонетика и лексикология, стилистика. Литература: историки V века, Нарекаци, средневековая лирика, Саят-Нова, армянское Просвещение."],
    ruNote,
    { armenia: 4, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
