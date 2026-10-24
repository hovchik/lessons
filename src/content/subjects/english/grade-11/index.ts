import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade11 = course(
    11,
    ["B2-level work: participle clauses, cleft sentences, subjunctive and modal perfects, academic vocabulary, exam formats (ЕГЭ, Armenian unified exam); topics: society, law, work, environment, arts.", "B2 մակարդակ․ դերբայական դարձվածներ, cleft նախադասություններ, ենթադրական եղանակ և modal perfect, ակադեմիական բառապաշար, քննական ձևաչափեր (ЕГЭ, միասնական քննություն)․ թեմաներ՝ հասարակություն, իրավունք, աշխատանք, միջավայր, արվեստ։", "Уровень B2: причастные обороты, расщеплённые предложения, сослагательное наклонение и modal perfect, академическая лексика, форматы экзаменов (ЕГЭ, армянский единый экзамен); темы: общество, право, работа, экология, искусство."],
    ["Armenia grade 11 (3–4 h/week): preparation for the unified entrance exam in English (grade 12). Reading comprehension, grammar transformation, vocabulary, and essay. Topics: human rights, work and money, environment, arts and leisure.", "Հայաստան, 11-րդ դասարան (3–4 ժ/շաբ.)՝ նախապատրաստություն անգլերենի միասնական քննությանը (12-րդ դասարան)․ ընթերցանություն, քերականական փոխակերպումներ, բառապաշար, էսսե։ Թեմաներ՝ մարդու իրավունքներ, աշխատանք և փող, միջավայր, արվեստ և հանգիստ։", "Армения, 11 класс (3–4 ч/нед.): подготовка к единому экзамену по английскому (12 класс). Понимание текста, грамматические трансформации, лексика, эссе. Темы: права человека, работа и деньги, экология, искусство и досуг."],
    ["Russia grade 11 (3 h base / 5 h profile): final year; ЕГЭ по английскому — listening, reading, grammar and vocabulary, email (100–140 words), essay-project on a table/diagram (200–250 words), speaking (reading aloud, questions, interview, comparison of pictures). Grammar: all structures to B2.", "Ռուսաստան, 11-րդ դասարան (3 ժ բազային / 5 պրոֆիլ)՝ ավարտական տարի․ ЕГЭ անգլերեն՝ լսել, կարդալ, քերականություն և բառապաշար, էլ. նամակ (100–140 բառ), էսսե-նախագիծ աղյուսակի հիման վրա (200–250 բառ), բանավոր։ Քերականություն՝ բոլոր կառույցները մինչև B2։", "Россия, 11 класс (3 ч база / 5 ч профиль): выпускной год; ЕГЭ по английскому — аудирование, чтение, грамматика и лексика, электронное письмо (100–140 слов), эссе-проект по таблице/диаграмме (200–250 слов), говорение (чтение вслух, вопросы, интервью, сравнение картинок). Грамматика: все структуры до B2."],
    { armenia: 4, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
