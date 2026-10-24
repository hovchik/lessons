import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade7 = course(
    7,
    ["Morphology part two: the verb system in full, adverb, function words; literature — Armenian medieval poetry and the 20th century.", "Ձևաբանություն, մաս երկրորդ՝ բայի համակարգն ամբողջությամբ, մակբայ, սպասարկու բառեր, գրականություն՝ հայ միջնադարյան պոեզիա և 20-րդ դար։", "Морфология, часть вторая: полная система глагола, наречие, служебные слова; литература — армянская средневековая поэзия и XX век."],
    ["Armenia grade 7: «Հայոց լեզու» (3 h) + «Գրականություն» (2 h). Language: the verb (voice, aspect, tense, mood, participles), adverb, prepositions/postpositions, conjunctions, particles, interjections. Literature: Narekatsi, Kuchak, Sayat-Nova, Tumanyan's «Անուշ», Isahakyan, Charents, Shiraz, Sevak, world literature.", "Հայաստան, 7-րդ դասարան՝ «Հայոց լեզու» (3 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ բայ (սեռ, կերպ, ժամանակ, եղանակ, դերբայներ), մակբայ, կապ, շաղկապ, վերաբերական, ձայնարկություն։ Գրականություն՝ Նարեկացի, Քուչակ, Սայաթ-Նովա, Թումանյանի «Անուշ», Իսահակյան, Չարենց, Շիրազ, Սևակ, համաշխարհային գրականություն։", "Армения, 7 класс: «Армянский язык» (3 ч) + «Литература» (2 ч). Язык: глагол (залог, вид, время, наклонение, причастия), наречие, послелоги, союзы, частицы, междометия. Литература: Нарекаци, Кучак, Саят-Нова, «Ануш» Туманяна, Исаакян, Чаренц, Шираз, Севак, мировая литература."],
    ruNote,
    { armenia: 5, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
