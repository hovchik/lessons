import { t, unit, type CourseSeed } from "../../types";
import { course } from "./shared";
import { russianGrade1 } from "./grade-1";
import { russianGrade2 } from "./grade-2";
import { russianGrade3 } from "./grade-3";
import { russianGrade4 } from "./grade-4";
import { russianGrade5 } from "./grade-5";
import { russianGrade6 } from "./grade-6";
import { russianGrade7 } from "./grade-7";
import { russianGrade8 } from "./grade-8";
import { russianGrade9 } from "./grade-9";
import { russianGrade10 } from "./grade-10";
import { russianGrade11 } from "./grade-11";

export const russian: CourseSeed[] = [
  russianGrade1,
  russianGrade2,
  russianGrade3,
  russianGrade4,
  russianGrade5,
  russianGrade6,
  russianGrade7,
  russianGrade8,
  russianGrade9,
  russianGrade10,
  russianGrade11,
  course(
    12,
    ["Final Armenian year: Russian for university and work (academic writing, business communication, translation), exam preparation; literature seminar and comparative reading.", "Հայաստանի ավարտական տարի՝ ռուսերեն համալսարանի և աշխատանքի համար (ակադեմիական գրություն, գործնական հաղորդակցություն, թարգմանություն), քննության նախապատրաստություն, գրական սեմինար և համեմատական ընթերցանություն։", "Выпускной год в Армении: русский для университета и работы (академическое письмо, деловое общение, перевод), подготовка к экзамену; литературный семинар и сопоставительное чтение."],
    ["Armenia grade 12 (2 h/week; Russian is an elective in the unified exam): systematic review of grammar and orthography in test format, academic and business Russian, translation Armenian↔Russian, literature seminar (Armenian themes in Russian literature; Russian translations of Armenian classics by Bryusov, Akhmatova, Pasternak), essay.", "Հայաստան, 12-րդ դասարան (2 ժ/շաբ., ռուսերենը միասնական քննության ընտրովի առարկա է)՝ քերականության և ուղղագրության համակարգված ամփոփում թեստային ձևաչափով, ակադեմիական և գործնական ռուսերեն, թարգմանություն հայերեն↔ռուսերեն, գրական սեմինար (հայկական թեմաները ռուս գրականությունում, հայ դասականների ռուսերեն թարգմանություններ Բրյուսովի, Ախմատովայի, Պաստեռնակի), շարադրություն։", "Армения, 12 класс (2 ч/нед.; русский — предмет по выбору на едином экзамене): системное повторение грамматики и орфографии в тестовом формате, академический и деловой русский, перевод армянский↔русский, литературный семинар (армянская тема в русской литературе; переводы армянской классики Брюсовым, Ахматовой, Пастернаком), эссе."],
    ["No Russian grade 12: this content corresponds to ЕГЭ preparation and first-year university Russian (speech culture, academic writing).", "Ռուսաստանում 12-րդ դասարան չկա․ բովանդակությունը համապատասխանում է ЕГЭ նախապատրաստությանը և համալսարանի առաջին կուրսի ռուսերենին։", "В России 12 класса нет: содержание соответствует подготовке к ЕГЭ и русскому языку первого курса университета (речевая культура, академическое письмо)."],
    { armenia: 2, russia: null },
    [
      unit(t("Exam review: orthography and lexicology", "Քննական ամփոփում․ ուղղագրություն և բառագիտություն", "Повторение к экзамену: орфография и лексика"), t("Test-format review of all orthograms, orthoepy, lexical norms.", "Բոլոր ուղղագրական կանոնների, արտասանության, բառային նորմերի թեստային ամփոփում։", "Тестовое повторение всех орфограмм, орфоэпии, лексических норм."), [
        ["ru12-orthography-test", "Orthography in test format", "Ուղղագրություն թեստային ձևաչափով", "Орфография в тестовом формате"],
        ["ru12-orthoepy-lexicon-test", "Orthoepy and lexical norms in tests", "Արտասանություն և բառային նորմեր թեստերում", "Орфоэпия и лексические нормы в тестах"],
      ]),
      unit(t("Exam review: grammar and punctuation", "Քննական ամփոփում․ քերականություն և կետադրություն", "Повторение к экзамену: грамматика и пунктуация"), t("Morphological and syntactic norms, punctuation, text tasks.", "Ձևաբանական և շարահյուսական նորմեր, կետադրություն, տեքստային առաջադրանքներ։", "Морфологические и синтаксические нормы, пунктуация, задания по тексту."), [
        ["ru12-grammar-norms-test", "Grammar norms in test format", "Քերականական նորմեր թեստային ձևաչափով", "Грамматические нормы в тестовом формате"],
        ["ru12-punctuation-test", "Punctuation in test format", "Կետադրություն թեստային ձևաչափով", "Пунктуация в тестовом формате"],
        ["ru12-text-tasks", "Text tasks: main idea, means of expression, cohesion", "Տեքստային առաջադրանքներ", "Задания по тексту: главная мысль, средства выразительности, связность"],
        ["ru12-mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
      unit(t("Russian for university and work", "Ռուսերեն համալսարանի և աշխատանքի համար", "Русский для университета и работы"), t("Academic writing, abstracts, presentations, business letters, CV, interview; translation.", "Ակադեմիական գրություն, ռեֆերատ, ներկայացումներ, գործնական նամակներ, ինքնակենսագրություն, հարցազրույց, թարգմանություն։", "Академическое письмо, реферат, презентации, деловые письма, резюме, собеседование; перевод."), [
        ["ru12-academic-writing", "Academic writing: abstract, summary, report", "Ակադեմիական գրություն․ ռեֆերատ, ամփոփում, զեկույց", "Академическое письмо: реферат, конспект, доклад"],
        ["ru12-business-russian", "Business Russian: letters, CV, interview", "Գործնական ռուսերեն․ նամակներ, ինքնակենսագրություն, հարցազրույց", "Деловой русский: письма, резюме, собеседование"],
        ["ru12-translation", "Translation Armenian ↔ Russian: typical difficulties", "Թարգմանություն հայերեն ↔ ռուսերեն․ տիպիկ դժվարություններ", "Перевод армянский ↔ русский: типичные трудности"],
        ["ru12-presentation", "Presentation and public speaking", "Ներկայացում և հրապարակային խոսք", "Презентация и публичное выступление"],
      ]),
      unit(t("Literature seminar", "Գրական սեմինար", "Литературный семинар"), t("Armenia in Russian literature; Russian translations of Armenian classics; comparative reading; essay.", "Հայաստանը ռուս գրականությունում, հայ դասականների ռուսերեն թարգմանություններ, համեմատական ընթերցանություն, շարադրություն։", "Армения в русской литературе; русские переводы армянской классики; сопоставительное чтение; эссе."), [
        ["ru12-armenia-in-russian-lit", "Armenia in Russian literature: Pushkin, Bryusov, Mandelstam, Grossman, Bitov", "Հայաստանը ռուս գրականությունում․ Պուշկին, Բրյուսով, Մանդելշտամ, Գրոսման, Բիտով", "Армения в русской литературе: Пушкин, Брюсов, Мандельштам, Гроссман, Битов"],
        ["ru12-translations", "Armenian poetry in Russian: Bryusov's anthology, Akhmatova, Pasternak, Tarkovsky", "Հայ պոեզիան ռուսերեն․ Բրյուսովի անթոլոգիա, Ախմատովա, Պաստեռնակ, Տարկովսկի", "Армянская поэзия на русском: антология Брюсова, Ахматова, Пастернак, Тарковский"],
        ["ru12-comparative-reading", "Comparative reading: Tumanyan and Tolstoy, Charents and Mayakovsky", "Համեմատական ընթերցանություն․ Թումանյան և Տոլստոյ, Չարենց և Մայակովսկի", "Сопоставительное чтение: Туманян и Толстой, Чаренц и Маяковский"],
        ["ru12-final-essay", "Final essay", "Ավարտական շարադրություն", "Итоговое эссе"],
      ]),
    ],
  ),
];
