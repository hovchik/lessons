import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade8 = course(
    8,
    ["Syntax of the simple sentence; literature — Armenian prose and poetry of the 19th–20th centuries and Shakespeare.", "Պարզ նախադասության շարահյուսություն, գրականություն՝ 19–20-րդ դարերի հայ արձակ և պոեզիա, Շեքսպիր։", "Синтаксис простого предложения; литература — армянская проза и поэзия XIX–XX веков и Шекспир."],
    ["Armenia grade 8: «Հայոց լեզու» (2–3 h) + «Գրականություն» (2 h). Language: phrase and sentence, sentence members, agreement, one-member sentences, homogeneous members, detached members, address, parenthetical words, punctuation. Literature: Raffi, Muratsan, Shirvanzade, Tumanyan's «Գիքոր» and «Թմկաբերդի առումը», Teryan, Charents, Bakunts, Shakespeare's «Romeo and Juliet».", "Հայաստան, 8-րդ դասարան՝ «Հայոց լեզու» (2–3 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ բառակապակցություն և նախադասություն, անդամներ, համաձայնություն, միակազմ նախադասություններ, համադաս անդամներ, տրոհված անդամներ, կոչական, միջանկյալ բառեր, կետադրություն։ Գրականություն՝ Րաֆֆի, Մուրացան, Շիրվանզադե, Թումանյանի «Գիքոր» և «Թմկաբերդի առումը», Տերյան, Չարենց, Բակունց, Շեքսպիրի «Ռոմեո և Ջուլիետ»։", "Армения, 8 класс: «Армянский язык» (2–3 ч) + «Литература» (2 ч). Язык: словосочетание и предложение, члены предложения, согласование, односоставные предложения, однородные и обособленные члены, обращение, вводные слова, пунктуация. Литература: Раффи, Мурацан, Ширванзаде, «Гикор» и «Взятие Тмкаберда» Туманяна, Терьян, Чаренц, Бакунц, «Ромео и Джульетта» Шекспира."],
    ruNote,
    { armenia: 4, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
