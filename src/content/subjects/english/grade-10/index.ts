import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade10 = course(
    10,
    ["Upper-secondary B1+: future perfect and continuous, inversion (intro), advanced passive and reporting, collocations and idioms; topics: identity, media literacy, science and technology, travel.", "Ավագ դպրոց B1+․ future perfect և continuous, շրջադասություն (ներածություն), բարդ կրավորական և անուղղակի խոսք, բառակապակցություններ և դարձվածքներ․ թեմաներ՝ ինքնություն, մեդիագրագիտություն, գիտություն և տեխնոլոգիաներ, ճանապարհորդություն։", "Старшая школа B1+: future perfect и continuous, инверсия (введение), сложный пассив и косвенная речь, коллокации и идиомы; темы: идентичность, медиаграмотность, наука и технологии, путешествия."],
    ["Armenia grade 10 (3–4 h/week; up to 6 in humanities streams): start of high school, target B1+→B2 by grade 12. Topics: identity and values, Armenian diaspora, media, science; essay types and formal register are introduced.", "Հայաստան, 10-րդ դասարան (3–4 ժ/շաբ., հումանիտար հոսքում մինչև 6)՝ ավագ դպրոցի սկիզբ, նպատակ B1+→B2 մինչև 12-րդ դասարան։ Թեմաներ՝ ինքնություն և արժեքներ, հայկական սփյուռք, մեդիա, գիտություն․ ներմուծվում են էսսեի տեսակները և պաշտոնական ոճը։", "Армения, 10 класс (3–4 ч/нед., до 6 в гуманитарном потоке): начало старшей школы, цель B1+→B2 к 12 классу. Темы — идентичность и ценности, армянская диаспора, медиа, наука; вводятся типы эссе и официальный регистр."],
    ["Russia grade 10 (3 h/week base, 5 h profile; ФГОС СОО): future forms incl. future perfect, perfect infinitives, advanced passive, inversion, linking devices, word formation, essay «for and against»; topics: relationships, lifestyle, schools and jobs, environment, holidays, technology.", "Ռուսաստան, 10-րդ դասարան (3 ժ/շաբ. բազային, 5 պրոֆիլ; ФГОС СОО)՝ ապառնի ձևեր ներառյալ future perfect, perfect ինֆինիտիվ, բարդ կրավորական, շրջադասություն, կապող բառեր, բառակազմություն, «կողմ և դեմ» էսսե․ թեմաներ՝ հարաբերություններ, ապրելակերպ, դպրոց և աշխատանք, միջավայր, տեխնոլոգիաներ։", "Россия, 10 класс (3 ч/нед. база, 5 ч профиль; ФГОС СОО): формы будущего, включая future perfect, перфектный инфинитив, сложный пассив, инверсия, средства связи, словообразование, эссе «за и против»; темы: отношения, образ жизни, школа и работа, экология, отпуск, технологии."],
    { armenia: 4, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
