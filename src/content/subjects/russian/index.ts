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
  course(
    11,
    ["Syntax and punctuation review, text and stylistics, speech culture, exam essay; literature of the 20th century.", "Շարահյուսության և կետադրության ամփոփում, տեքստ և ոճաբանություն, խոսքի մշակույթ, քննական շարադրություն, 20-րդ դարի գրականություն։", "Повторение синтаксиса и пунктуации, текст и стилистика, культура речи, экзаменационное сочинение; литература XX века."],
    ["Armenia grade 11 (2 h/week): syntax and punctuation review, academic writing, presentations, media texts; literature: Bunin, Kuprin, Gorky, Blok, Yesenin, Mayakovsky, Akhmatova, Tsvetaeva, Bulgakov's «Мастер и Маргарита», Sholokhov, Pasternak, Solzhenitsyn, Shukshin, Rasputin.", "Հայաստան, 11-րդ դասարան (2 ժ/շաբ.)՝ շարահյուսության և կետադրության ամփոփում, ակադեմիական գրություն, ներկայացումներ, մեդիա տեքստեր, գրականություն՝ Բունին, Կուպրին, Գորկի, Բլոկ, Եսենին, Մայակովսկի, Ախմատովա, Ցվետաևա, Բուլգակովի «Мастер и Маргарита», Շոլոխով, Պաստեռնակ, Սոլժենիցին, Շուկշին, Ռասպուտին։", "Армения, 11 класс (2 ч/нед.): повторение синтаксиса и пунктуации, академическое письмо, презентации, медиатексты; литература: Бунин, Куприн, Горький, Блок, Есенин, Маяковский, Ахматова, Цветаева, «Мастер и Маргарита» Булгакова, Шолохов, Пастернак, Солженицын, Шукшин, Распутин."],
    ["Russia grade 11 (ФГОС СОО, Russian 1–3 h + Literature 3 h; ЕГЭ): syntax and punctuation (systematic), text, functional styles, speech culture, exam essay. Literature: Bunin, Kuprin, Gorky, Silver Age poetry, Bulgakov, Platonov, Sholokhov's «Тихий Дон», war literature, Tvardovsky, Solzhenitsyn, Shukshin, Rasputin, Astafiev, Brodsky, contemporary literature.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ռուսերեն 1–3 ժ + գրականություն 3 ժ, ЕГЭ)՝ շարահյուսություն և կետադրություն, տեքստ, գործառական ոճեր, խոսքի մշակույթ, շարադրություն։ Գրականություն՝ Բունին, Կուպրին, Գորկի, Արծաթե դար, Բուլգակով, Պլատոնով, Շոլոխովի «Тихий Дон», պատերազմի գրականություն, Տվարդովսկի, Սոլժենիցին, Շուկշին, Ռասպուտին, Աստաֆև, Բրոդսկի, ժամանակակից գրականություն։", "Россия, 11 класс (ФГОС СОО, русский 1–3 ч + литература 3 ч; ЕГЭ): синтаксис и пунктуация (системно), текст, функциональные стили, культура речи, сочинение ЕГЭ. Литература: Бунин, Куприн, Горький, поэзия Серебряного века, Булгаков, Платонов, «Тихий Дон» Шолохова, литература о войне, Твардовский, Солженицын, Шукшин, Распутин, Астафьев, Бродский, современная литература."],
    { armenia: 2, russia: 2 },
    [
      unit(t("Syntax and punctuation: system", "Շարահյուսություն և կետադրություն․ համակարգ", "Синтаксис и пунктуация: система"), t("Simple and complex sentence punctuation, syntactic norms, difficult cases.", "Պարզ և բարդ նախադասության կետադրություն, շարահյուսական նորմեր, բարդ դեպքեր։", "Пунктуация простого и сложного предложения, синтаксические нормы, трудные случаи."), [
        ["ru11-simple-punctuation", "Punctuation in the simple sentence: system", "Պարզ նախադասության կետադրություն․ համակարգ", "Пунктуация в простом предложении: система"],
        ["ru11-complex-punctuation", "Punctuation in the complex sentence", "Բարդ նախադասության կետադրություն", "Пунктуация в сложном предложении"],
        ["ru11-syntactic-norms", "Syntactic norms: government and agreement", "Շարահյուսական նորմեր․ խնդրառություն և համաձայնություն", "Синтаксические нормы: управление и согласование"],
        ["ru11-gerund-errors", "Errors with participial and gerund phrases", "Սխալներ դերբայական դարձվածներում", "Ошибки в употреблении причастных и деепричастных оборотов"],
      ]),
      unit(t("Text and stylistics", "Տեքստ և ոճաբանություն", "Текст и стилистика"), t("Text analysis, means of expression, functional styles, genres, the exam essay.", "Տեքստի վերլուծություն, արտահայտչամիջոցներ, գործառական ոճեր, ժանրեր, քննական շարադրություն։", "Анализ текста, средства выразительности, функциональные стили, жанры, сочинение ЕГЭ."), [
        ["ru11-text-analysis", "Complex text analysis", "Տեքստի համալիր վերլուծություն", "Комплексный анализ текста"],
        ["ru11-expressive-means", "Means of expression: tropes and figures", "Արտահայտչամիջոցներ․ պատկերավորման միջոցներ", "Средства выразительности: тропы и фигуры"],
        ["ru11-styles-genres", "Styles and genres: scientific, official, journalistic", "Ոճեր և ժանրեր․ գիտական, պաշտոնական, հրապարակախոսական", "Стили и жанры: научный, официально-деловой, публицистический"],
        ["ru11-exam-essay", "The exam essay: structure and argument", "Քննական շարադրություն․ կառուցվածք և փաստարկում", "Сочинение ЕГЭ: структура и аргументация"],
      ]),
      unit(t("Literature: turn of the century and Silver Age", "Գրականություն․ դարասկիզբ և Արծաթե դար", "Литература: рубеж веков и Серебряный век"), t("Bunin, Kuprin, Gorky, Blok, Yesenin, Mayakovsky, Akhmatova, Tsvetaeva, Mandelstam, Pasternak.", "Բունին, Կուպրին, Գորկի, Բլոկ, Եսենին, Մայակովսկի, Ախմատովա, Ցվետաևա, Մանդելշտամ, Պաստեռնակ։", "Бунин, Куприн, Горький, Блок, Есенин, Маяковский, Ахматова, Цветаева, Мандельштам, Пастернак."), [
        ["ru11-bunin-kuprin-gorky", "Bunin, Kuprin, Gorky's «На дне»", "Բունին, Կուպրին, Գորկու «На дне»", "Бунин, Куприн, Горький «На дне»"],
        ["ru11-blok", "Blok: «Двенадцать» and lyrics", "Բլոկ․ «Двенадцать» և քնարերգություն", "Блок: «Двенадцать» и лирика"],
        ["ru11-yesenin-mayakovsky", "Yesenin and Mayakovsky", "Եսենին և Մայակովսկի", "Есенин и Маяковский"],
        ["ru11-akhmatova-tsvetaeva", "Akhmatova and Tsvetaeva", "Ախմատովա և Ցվետաևա", "Ахматова и Цветаева"],
        ["ru11-mandelstam-pasternak", "Mandelstam and Pasternak; Mandelstam's «Армения»", "Մանդելշտամ և Պաստեռնակ, Մանդելշտամի «Армения»", "Мандельштам и Пастернак; «Армения» Мандельштама"],
      ]),
      unit(t("Literature: Soviet period and beyond", "Գրականություն․ սովետական շրջան և հետո", "Литература: советский период и далее"), t("Bulgakov's «Мастер и Маргарита», Platonov, Sholokhov, war literature, Solzhenitsyn, Shukshin, Rasputin, Brodsky, contemporary literature.", "Բուլգակովի «Мастер и Маргарита», Պլատոնով, Շոլոխով, պատերազմի գրականություն, Սոլժենիցին, Շուկշին, Ռասպուտին, Բրոդսկի, ժամանակակից գրականություն։", "«Мастер и Маргарита» Булгакова, Платонов, Шолохов, литература о войне, Солженицын, Шукшин, Распутин, Бродский, современная литература."), [
        ["ru11-master-margarita", "Bulgakov: «Мастер и Маргарита»", "Բուլգակով․ «Мастер и Маргарита»", "Булгаков: «Мастер и Маргарита»"],
        ["ru11-sholokhov-platonov", "Sholokhov's «Тихий Дон»; Platonov", "Շոլոխովի «Тихий Дон», Պլատոնով", "Шолохов «Тихий Дон»; Платонов"],
        ["ru11-war-literature", "Literature of the Great Patriotic War", "Հայրենական մեծ պատերազմի գրականություն", "Литература о Великой Отечественной войне"],
        ["ru11-solzhenitsyn-village", "Solzhenitsyn; village prose: Shukshin, Rasputin, Astafiev", "Սոլժենիցին, գյուղական արձակ․ Շուկշին, Ռասպուտին, Աստաֆև", "Солженицын; деревенская проза: Шукшин, Распутин, Астафьев"],
        ["ru11-brodsky-contemporary", "Brodsky and contemporary literature", "Բրոդսկի և ժամանակակից գրականություն", "Бродский и современная литература"],
      ]),
    ],
  ),
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
