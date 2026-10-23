import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade3 = course(
    3,
    ["Parts of speech in detail, word structure, sentence members, text types, extended reading.", "Խոսքի մասերը մանրամասն, բառակազմություն, նախադասության անդամներ, տեքստի տեսակներ, ընթերցանություն։", "Части речи подробно, состав слова, члены предложения, типы текста, расширенное чтение."],
    ["Armenia grade 3, «Մայրենի» (6 h/week): word structure (root, suffix, prefix), noun (number, cases introduced), adjective (degrees), numeral, pronoun, verb (tenses introduced), sentence members, text: narrative and description, essays, reading of Armenian and world children's classics.", "Հայաստան, 3-րդ դասարան, «Մայրենի» (6 ժ/շաբ.)՝ բառակազմություն (արմատ, ածանց, նախածանց), գոյական (թիվ, հոլովների ներմուծում), ածական (աստիճաններ), թվական, դերանուն, բայ (ժամանակների ներմուծում), նախադասության անդամներ, տեքստ՝ պատմություն և նկարագրություն, շարադրություններ, հայ և համաշխարհային մանկական գրականություն։", "Армения, 3 класс, «Մայրենի» (6 ч/нед.): состав слова (корень, суффикс, приставка), существительное (число, введение падежей), прилагательное (степени), числительное, местоимение, глагол (введение времён), члены предложения, текст: повествование и описание, сочинения, армянская и мировая детская классика."],
    ruNote,
    { armenia: 6, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
