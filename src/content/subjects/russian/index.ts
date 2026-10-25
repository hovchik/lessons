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
  course(
    10,
    ["Language as a system: phonetics, lexicology, morphemics, morphology and orthography review at an advanced level; literature of the 19th century.", "Լեզուն որպես համակարգ՝ հնչյունաբանություն, բառագիտություն, ձևույթաբանություն, ձևաբանություն և ուղղագրություն խորացված, 19-րդ դարի գրականություն։", "Язык как система: фонетика, лексика, морфемика, морфология и орфография на углублённом уровне; литература XIX века."],
    ["Armenia grade 10 (2 h/week): Russian for academic and professional purposes, orthography review, stylistics, text analysis; literature: Pushkin, Lermontov, Gogol, Ostrovsky, Turgenev's «Отцы и дети», Tolstoy's «Война и мир» (excerpts), Dostoevsky.", "Հայաստան, 10-րդ դասարան (2 ժ/շաբ.)՝ ռուսերեն ակադեմիական և մասնագիտական նպատակներով, ուղղագրության ամփոփում, ոճաբանություն, տեքստի վերլուծություն, գրականություն՝ Պուշկին, Լերմոնտով, Գոգոլ, Օստրովսկի, Տուրգենևի «Отцы и дети», Տոլստոյի «Война и мир» (հատվածներ), Դոստոևսկի։", "Армения, 10 класс (2 ч/нед.): русский для академических и профессиональных целей, повторение орфографии, стилистика, анализ текста; литература: Пушкин, Лермонтов, Гоголь, Островский, «Отцы и дети» Тургенева, «Война и мир» Толстого (отрывки), Достоевский."],
    ["Russia grade 10 (ФГОС СОО, Russian 1–3 h + Literature 3 h): language and society, phonetics and orthoepy, lexicology and phraseology, morphemics and word formation, morphology and orthography (systematic review). Literature: Pushkin, Lermontov, Gogol, Ostrovsky's «Гроза», Goncharov's «Обломов», Turgenev's «Отцы и дети», Nekrasov, Tyutchev, Fet, Saltykov-Shchedrin, Dostoevsky's «Преступление и наказание», Tolstoy's «Война и мир», Chekhov.", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, ռուսերեն 1–3 ժ + գրականություն 3 ժ)՝ լեզու և հասարակություն, հնչյունաբանություն և արտասանություն, բառագիտություն և դարձվածաբանություն, ձևույթաբանություն և բառակազմություն, ձևաբանություն և ուղղագրություն։ Գրականություն՝ Պուշկին, Լերմոնտով, Գոգոլ, Օստրովսկու «Гроза», Գոնչարովի «Обломов», Տուրգենևի «Отцы и дети», Նեկրասով, Տյուտչև, Ֆետ, Սալտիկով-Շչեդրին, Դոստոևսկու «Преступление и наказание», Տոլստոյի «Война и мир», Չեխով։", "Россия, 10 класс (ФГОС СОО, русский 1–3 ч + литература 3 ч): язык и общество, фонетика и орфоэпия, лексика и фразеология, морфемика и словообразование, морфология и орфография (системное повторение). Литература: Пушкин, Лермонтов, Гоголь, «Гроза» Островского, «Обломов» Гончарова, «Отцы и дети» Тургенева, Некрасов, Тютчев, Фет, Салтыков-Щедрин, «Преступление и наказание» Достоевского, «Война и мир» Толстого, Чехов."],
    { armenia: 2, russia: 2 },
    [
      unit(t("Language and speech", "Լեզու և խոսք", "Язык и речь"), t("Russian in the modern world, language norm, speech culture, orthoepy.", "Ռուսերենը ժամանակակից աշխարհում, լեզվական նորմ, խոսքի մշակույթ, արտասանություն։", "Русский язык в современном мире, языковая норма, культура речи, орфоэпия."), [
        ["ru10-language-world", "Russian in the modern world; Russian in Armenia", "Ռուսերենը ժամանակակից աշխարհում, ռուսերենը Հայաստանում", "Русский язык в современном мире; русский в Армении"],
        ["ru10-norm", "Language norm and its types", "Լեզվական նորմ և նրա տեսակները", "Языковая норма и её виды"],
        ["ru10-orthoepy", "Orthoepic norms; difficult stresses", "Արտասանական նորմեր, բարդ շեշտեր", "Орфоэпические нормы; трудные ударения"],
      ]),
      unit(t("Lexicology and phraseology: advanced", "Բառագիտություն և դարձվածաբանություն․ խորացված", "Лексика и фразеология: углублённо"), t("Lexical norms, paronyms, pleonasm, stylistic colouring, phraseology, dictionaries.", "Բառային նորմեր, հարանուններ, պլեոնազմ, ոճական երանգ, դարձվածաբանություն, բառարաններ։", "Лексические нормы, паронимы, плеоназм, стилистическая окраска, фразеология, словари."), [
        ["ru10-lexical-norms", "Lexical norms; paronyms; pleonasm and tautology", "Բառային նորմեր, հարանուններ, պլեոնազմ և նույնաբանություն", "Лексические нормы; паронимы; плеоназм и тавтология"],
        ["ru10-stylistic-colouring", "Stylistic colouring of words", "Բառերի ոճական երանգ", "Стилистическая окраска слов"],
        ["ru10-phraseology-advanced", "Phraseology and winged words", "Դարձվածաբանություն և թևավոր խոսքեր", "Фразеология и крылатые слова"],
      ]),
      unit(t("Morphemics, word formation, orthography", "Ձևույթաբանություն, բառակազմություն, ուղղագրություն", "Морфемика, словообразование, орфография"), t("Systematic orthography: roots, prefixes, suffixes, н/нн, не/ни, hyphen, ъ/ь.", "Համակարգված ուղղագրություն՝ արմատներ, նախածանցներ, վերջածանցներ, н/нн, не/ни, գծիկ, ъ/ь։", "Системная орфография: корни, приставки, суффиксы, н/нн, не/ни, дефис, ъ/ь."), [
        ["ru10-roots-review", "Spelling of roots: checked, unchecked, alternating", "Արմատների ուղղագրություն․ ստուգվող, չստուգվող, հերթագայող", "Правописание корней: проверяемые, непроверяемые, чередующиеся"],
        ["ru10-prefixes-review", "Spelling of prefixes; ъ and ь", "Նախածանցների ուղղագրություն, ъ և ь", "Правописание приставок; ъ и ь"],
        ["ru10-n-nn-review", "Н and нн in all parts of speech", "Н և нн բոլոր խոսքի մասերում", "Н и нн во всех частях речи"],
        ["ru10-ne-ni-review", "Не and ни with all parts of speech", "Не և ни բոլոր խոսքի մասերի հետ", "Не и ни с разными частями речи"],
        ["ru10-hyphen-review", "Hyphen, joined and separate spelling", "Գծիկ, միասին և առանձին գրություն", "Дефисное, слитное и раздельное написание"],
      ]),
      unit(t("Morphology: review", "Ձևաբանություն․ ամփոփում", "Морфология: повторение"), t("Morphological norms: forms of nouns, adjectives, numerals, pronouns, verbs, participles, gerunds.", "Ձևաբանական նորմեր՝ գոյականի, ածականի, թվականի, դերանվան, բայի, դերբայների ձևեր։", "Морфологические нормы: формы существительных, прилагательных, числительных, местоимений, глаголов, причастий, деепричастий."), [
        ["ru10-noun-norms", "Noun forms: gender, plural, cases of difficulty", "Գոյականի ձևեր․ սեռ, հոգնակի, բարդ դեպքեր", "Формы существительных: род, множественное число, трудные случаи"],
        ["ru10-numeral-norms", "Numeral and pronoun forms", "Թվականի և դերանվան ձևեր", "Формы числительных и местоимений"],
        ["ru10-verb-norms", "Verb, participle and gerund forms", "Բայի, դերբայների ձևեր", "Формы глаголов, причастий и деепричастий"],
      ]),
      unit(t("Literature: Pushkin to Turgenev", "Գրականություն․ Պուշկինից Տուրգենև", "Литература: от Пушкина до Тургенева"), t("Pushkin's lyrics, Lermontov, Gogol's «Петербургские повести», Ostrovsky's «Гроза», Goncharov's «Обломов», Turgenev's «Отцы и дети».", "Պուշկինի քնարերգություն, Լերմոնտով, Գոգոլի «Петербургские повести», Օստրովսկու «Гроза», Գոնչարովի «Обломов», Տուրգենևի «Отцы и дети»։", "Лирика Пушкина, Лермонтов, «Петербургские повести» Гоголя, «Гроза» Островского, «Обломов» Гончарова, «Отцы и дети» Тургенева."), [
        ["ru10-pushkin-lyrics", "Pushkin: philosophical lyrics", "Պուշկին․ փիլիսոփայական քնարերգություն", "Пушкин: философская лирика"],
        ["ru10-lermontov-10", "Lermontov: lyrics and «Демон»", "Լերմոնտով․ քնարերգություն և «Демон»", "Лермонтов: лирика и «Демон»"],
        ["ru10-gogol-petersburg", "Gogol: «Петербургские повести»", "Գոգոլ․ «Петербургские повести»", "Гоголь: «Петербургские повести»"],
        ["ru10-ostrovsky", "Ostrovsky: «Гроза»", "Օստրովսկի․ «Гроза»", "Островский: «Гроза»"],
        ["ru10-goncharov", "Goncharov: «Обломов»", "Գոնչարով․ «Обломов»", "Гончаров: «Обломов»"],
        ["ru10-turgenev-fathers", "Turgenev: «Отцы и дети»", "Տուրգենև․ «Отцы и дети»", "Тургенев: «Отцы и дети»"],
      ]),
      unit(t("Literature: Tyutchev to Chekhov", "Գրականություն․ Տյուտչևից Չեխով", "Литература: от Тютчева до Чехова"), t("Tyutchev, Fet, Nekrasov, Dostoevsky's «Преступление и наказание», Tolstoy's «Война и мир», Chekhov's plays.", "Տյուտչև, Ֆետ, Նեկրասով, Դոստոևսկու «Преступление и наказание», Տոլստոյի «Война и мир», Չեխովի պիեսներ։", "Тютчев, Фет, Некрасов, «Преступление и наказание» Достоевского, «Война и мир» Толстого, пьесы Чехова."), [
        ["ru10-tyutchev-fet-nekrasov", "Tyutchev, Fet, Nekrasov", "Տյուտչև, Ֆետ, Նեկրասով", "Тютчев, Фет, Некрасов"],
        ["ru10-dostoevsky", "Dostoevsky: «Преступление и наказание»", "Դոստոևսկի․ «Преступление и наказание»", "Достоевский: «Преступление и наказание»"],
        ["ru10-war-and-peace", "Tolstoy: «Война и мир»", "Տոլստոյ․ «Война и мир»", "Толстой: «Война и мир»"],
        ["ru10-chekhov-plays", "Chekhov: stories and «Вишнёвый сад»", "Չեխով․ պատմվածքներ և «Вишнёвый сад»", "Чехов: рассказы и «Вишнёвый сад»"],
      ]),
    ],
  ),
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
