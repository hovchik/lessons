import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade9 = course(
    9,
    ["Syntax of the complex sentence, text and style; literature overview from folklore to the present; grade 9 state exam preparation.", "Բարդ նախադասության շարահյուսություն, տեքստ և ոճ, գրականության ընդհանուր ակնարկ բանահյուսությունից մինչև մեր օրերը, 9-րդ դասարանի պետական քննության նախապատրաստություն։", "Синтаксис сложного предложения, текст и стиль; обзор литературы от фольклора до наших дней; подготовка к государственному экзамену за 9 класс."],
    ["Armenia grade 9: «Հայոց լեզու» (2 h) + «Գրականություն» (2 h). Language: compound and complex sentences, types of subordinate clauses, direct and indirect speech, text linguistics, functional styles, punctuation in full. Literature: Khorenatsi, Narekatsi, Sayat-Nova, Abovyan, Raffi, Tumanyan, Isahakyan, Teryan, Charents, Bakunts, Sevak, Shiraz, Mahari, Matevosyan. State exam in Armenian (20-point).", "Հայաստան, 9-րդ դասարան՝ «Հայոց լեզու» (2 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ բարդ համադասական և ստորադասական նախադասություններ, երկրորդական նախադասությունների տեսակները, ուղղակի և անուղղակի խոսք, տեքստի լեզվաբանություն, գործառական ոճեր, կետադրությունն ամբողջությամբ։ Գրականություն՝ Խորենացի, Նարեկացի, Սայաթ-Նովա, Աբովյան, Րաֆֆի, Թումանյան, Իսահակյան, Տերյան, Չարենց, Բակունց, Սևակ, Շիրազ, Մահարի, Մաթևոսյան։ Պետական քննություն (20-բալանոց)։", "Армения, 9 класс: «Армянский язык» (2 ч) + «Литература» (2 ч). Язык: сложносочинённые и сложноподчинённые предложения, типы придаточных, прямая и косвенная речь, лингвистика текста, функциональные стили, полная пунктуация. Литература: Хоренаци, Нарекаци, Саят-Нова, Абовян, Раффи, Туманян, Исаакян, Терьян, Чаренц, Бакунц, Севак, Шираз, Маари, Матевосян. Государственный экзамен (20 баллов)."],
    ruNote,
    { armenia: 4, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
