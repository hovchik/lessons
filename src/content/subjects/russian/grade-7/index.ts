import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade7 = course(
    7,
    ["Participles, gerunds, adverbs, function words, interjections; literature of the 18th–20th centuries.", "Դերբայներ (причастие, деепричастие), մակբայ, սպասարկու բառեր, ձայնարկություն, 18–20-րդ դարերի գրականություն։", "Причастие, деепричастие, наречие, служебные части речи, междометие; литература XVIII–XX веков."],
    ["Armenia grade 7 (2–3 h/week): participles and gerunds (recognition and use), adverbs, prepositions and conjunctions, text types, business writing, reading Pushkin, Lermontov, Gogol, Turgenev, Chekhov, Gorky; Armenian-Russian literary links (Bryusov, Mandelstam, Grossman on Armenia).", "Հայաստան, 7-րդ դասարան (2–3 ժ/շաբ.)՝ причастие և деепричастие (ճանաչում և գործածություն), մակբայներ, նախդիրներ և շաղկապներ, տեքստի տեսակներ, գործնական գրություն, Պուշկին, Լերմոնտով, Գոգոլ, Տուրգենև, Չեխով, Գորկի, հայ-ռուսական գրական կապեր (Բրյուսով, Մանդելշտամ, Գրոսման Հայաստանի մասին)։", "Армения, 7 класс (2–3 ч/нед.): причастие и деепричастие (узнавание и употребление), наречия, предлоги и союзы, типы текста, деловое письмо, чтение Пушкина, Лермонтова, Гоголя, Тургенева, Чехова, Горького; армяно-русские литературные связи (Брюсов, Мандельштам, Гроссман об Армении)."],
    ["Russia grade 7 (ФГОС ООО, Russian 4 h + Literature 2 h): participle (participial phrase, н/нн, не), gerund, adverb, category of state, preposition, conjunction, particle (не/ни), interjection. Literature: byliny, Lomonosov, Derzhavin, Pushkin, Lermontov, Gogol's «Тарас Бульба», Turgenev, Nekrasov, Saltykov-Shchedrin, Tolstoy's «Детство», Chekhov, Bunin, Gorky's «Детство», Mayakovsky, Platonov, Tvardovsky.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, ռուսերեն 4 ժ + գրականություն 2 ժ)՝ причастие, деепричастие, մակբայ, վիճակի կատեգորիա, նախդիր, շաղկապ, մասնիկ (не/ни), ձայնարկություն։ Գրականություն՝ բիլինաներ, Լոմոնոսով, Դերժավին, Պուշկին, Լերմոնտով, Գոգոլի «Тарас Бульба», Տուրգենև, Նեկրասով, Սալտիկով-Շչեդրին, Տոլստոյի «Детство», Չեխով, Բունին, Գորկու «Детство», Մայակովսկի, Պլատոնով, Տվարդովսկի։", "Россия, 7 класс (ФГОС ООО, русский 4 ч + литература 2 ч): причастие (оборот, н/нн, не), деепричастие, наречие, категория состояния, предлог, союз, частица (не/ни), междометие. Литература: былины, Ломоносов, Державин, Пушкин, Лермонтов, «Тарас Бульба» Гоголя, Тургенев, Некрасов, Салтыков-Щедрин, «Детство» Толстого, Чехов, Бунин, «Детство» Горького, Маяковский, Платонов, Твардовский."],
    { armenia: 2, russia: 4 },
  [unit1, unit2, unit3, unit4, unit5],
);
