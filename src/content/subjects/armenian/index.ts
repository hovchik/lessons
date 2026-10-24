import { t, unit, type CourseSeed } from "../../types";
import { course, ruNote } from "./shared";
import { armenianGrade1 } from "./grade-1";
import { armenianGrade2 } from "./grade-2";
import { armenianGrade3 } from "./grade-3";
import { armenianGrade4 } from "./grade-4";
import { armenianGrade5 } from "./grade-5";
import { armenianGrade6 } from "./grade-6";
import { armenianGrade7 } from "./grade-7";

export const armenian: CourseSeed[] = [
  armenianGrade1,
  armenianGrade2,
  armenianGrade3,
  armenianGrade4,
  armenianGrade5,
  armenianGrade6,
  armenianGrade7,
  course(
    8,
    ["Syntax of the simple sentence; literature — Armenian prose and poetry of the 19th–20th centuries and Shakespeare.", "Պարզ նախադասության շարահյուսություն, գրականություն՝ 19–20-րդ դարերի հայ արձակ և պոեզիա, Շեքսպիր։", "Синтаксис простого предложения; литература — армянская проза и поэзия XIX–XX веков и Шекспир."],
    ["Armenia grade 8: «Հայոց լեզու» (2–3 h) + «Գրականություն» (2 h). Language: phrase and sentence, sentence members, agreement, one-member sentences, homogeneous members, detached members, address, parenthetical words, punctuation. Literature: Raffi, Muratsan, Shirvanzade, Tumanyan's «Գիքոր» and «Թմկաբերդի առումը», Teryan, Charents, Bakunts, Shakespeare's «Romeo and Juliet».", "Հայաստան, 8-րդ դասարան՝ «Հայոց լեզու» (2–3 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ բառակապակցություն և նախադասություն, անդամներ, համաձայնություն, միակազմ նախադասություններ, համադաս անդամներ, տրոհված անդամներ, կոչական, միջանկյալ բառեր, կետադրություն։ Գրականություն՝ Րաֆֆի, Մուրացան, Շիրվանզադե, Թումանյանի «Գիքոր» և «Թմկաբերդի առումը», Տերյան, Չարենց, Բակունց, Շեքսպիրի «Ռոմեո և Ջուլիետ»։", "Армения, 8 класс: «Армянский язык» (2–3 ч) + «Литература» (2 ч). Язык: словосочетание и предложение, члены предложения, согласование, односоставные предложения, однородные и обособленные члены, обращение, вводные слова, пунктуация. Литература: Раффи, Мурацан, Ширванзаде, «Гикор» и «Взятие Тмкаберда» Туманяна, Терьян, Чаренц, Бакунц, «Ромео и Джульетта» Шекспира."],
    ruNote,
    { armenia: 4, russia: null },
    [
      unit(t("Phrase and sentence", "Բառակապակցություն և նախադասություն", "Словосочетание и предложение"), t("Types of phrases, agreement and government, main members, predicate types.", "Բառակապակցության տեսակներ, համաձայնություն և խնդրառություն, գլխավոր անդամներ, ստորոգյալի տեսակներ։", "Типы словосочетаний, согласование и управление, главные члены, типы сказуемого."), [
        ["phrase-types", "Phrases: types and connections", "Բառակապակցություն․ տեսակներ և կապեր", "Словосочетание: типы и связи"],
        ["subject-types", "The subject and its expression", "Ենթական և նրա արտահայտությունը", "Подлежащее и способы его выражения"],
        ["predicate-types", "Simple and compound predicate", "Պարզ և բաղադրյալ ստորոգյալ", "Простое и составное сказуемое"],
        ["agreement", "Agreement of subject and predicate", "Ենթակայի և ստորոգյալի համաձայնությունը", "Согласование подлежащего и сказуемого"],
      ]),
      unit(t("Secondary members", "Երկրորդական անդամներ", "Второстепенные члены"), t("Object, attribute, adverbial modifier; one-member and incomplete sentences.", "Խնդիր, որոշիչ, պարագա, միակազմ և թերի նախադասություններ։", "Дополнение, определение, обстоятельство; односоставные и неполные предложения."), [
        ["object", "Direct and indirect object", "Ուղիղ և անուղղակի խնդիր", "Прямое и косвенное дополнение"],
        ["attribute-apposition", "Attribute and apposition", "Որոշիչ և բացահայտիչ", "Определение и приложение"],
        ["adverbial-modifiers", "Adverbial modifiers", "Պարագաներ", "Обстоятельства"],
        ["one-member-sentences", "One-member and incomplete sentences", "Միակազմ և թերի նախադասություններ", "Односоставные и неполные предложения"],
      ]),
      unit(t("Complicated simple sentence", "Բարդացված պարզ նախադասություն", "Осложнённое простое предложение"), t("Homogeneous members, detached members, address, parenthetical words, punctuation rules.", "Համադաս անդամներ, տրոհված անդամներ, կոչական, միջանկյալ բառեր, կետադրական կանոններ։", "Однородные члены, обособленные члены, обращение, вводные слова, правила пунктуации."), [
        ["homogeneous-8", "Homogeneous members and generalising words", "Համադաս անդամներ և ընդհանրացնող բառեր", "Однородные члены и обобщающие слова"],
        ["detached-members", "Detached members", "Տրոհված անդամներ", "Обособленные члены"],
        ["address-parenthetical", "Address and parenthetical words", "Կոչական և միջանկյալ բառեր", "Обращение и вводные слова"],
        ["punctuation-simple", "Punctuation of the simple sentence: review", "Պարզ նախադասության կետադրություն․ ամփոփում", "Пунктуация простого предложения: обзор"],
      ]),
      unit(t("Literature: prose", "Գրականություն․ արձակ", "Литература: проза"), t("Raffi, Muratsan, Shirvanzade, Tumanyan's «Գիքոր», Bakunts.", "Րաֆֆի, Մուրացան, Շիրվանզադե, Թումանյանի «Գիքոր», Բակունց։", "Раффи, Мурацан, Ширванзаде, «Гикор» Туманяна, Бакунц."), [
        ["raffi-khent", "Raffi: «Խենթը» (excerpts)", "Րաֆֆի․ «Խենթը» (հատվածներ)", "Раффи: «Хент» (отрывки)"],
        ["muratsan", "Muratsan: «Գևորգ Մարզպետունի» (excerpts)", "Մուրացան․ «Գևորգ Մարզպետունի» (հատվածներ)", "Мурацан: «Геворг Марзпетуни» (отрывки)"],
        ["gikor-8", "Tumanyan: «Գիքոր» in full", "Թումանյան․ «Գիքոր» ամբողջությամբ", "Туманян: «Гикор» полностью"],
        ["shirvanzade", "Shirvanzade: «Պատվի համար»", "Շիրվանզադե․ «Պատվի համար»", "Ширванзаде: «Ради чести»"],
        ["bakunts", "Aksel Bakunts: «Ալպիական մանուշակ»", "Ակսել Բակունց․ «Ալպիական մանուշակ»", "Аксель Бакунц: «Альпийская фиалка»"],
      ]),
      unit(t("Literature: poetry and drama", "Գրականություն․ պոեզիա և դրամա", "Литература: поэзия и драма"), t("Tumanyan's «Թմկաբերդի առումը», Teryan, Charents, Shakespeare's «Romeo and Juliet».", "Թումանյանի «Թմկաբերդի առումը», Տերյան, Չարենց, Շեքսպիրի «Ռոմեո և Ջուլիետ»։", "«Взятие Тмкаберда» Туманяна, Терьян, Чаренц, «Ромео и Джульетта» Шекспира."), [
        ["tmkaberd", "Tumanyan: «Թմկաբերդի առումը»", "Թումանյան․ «Թմկաբերդի առումը»", "Туманян: «Взятие Тмкаберда»"],
        ["teryan", "Vahan Teryan: «Մթնշաղի անուրջներ»", "Վահան Տերյան․ «Մթնշաղի անուրջներ»", "Ваан Терьян: «Грёзы сумерек»"],
        ["charents-8", "Charents: poems and «Դանթեական առասպել»", "Չարենց․ բանաստեղծություններ և «Դանթեական առասպել»", "Чаренц: стихи и «Дантова легенда»"],
        ["romeo-juliet", "Shakespeare: «Romeo and Juliet» (Masehyan translation)", "Շեքսպիր․ «Ռոմեո և Ջուլիետ» (Մասեհյանի թարգմանություն)", "Шекспир: «Ромео и Джульетта» (перевод Масеяна)"],
      ]),
    ],
  ),
  course(
    9,
    ["Syntax of the complex sentence, text and style; literature overview from folklore to the present; grade 9 state exam preparation.", "Բարդ նախադասության շարահյուսություն, տեքստ և ոճ, գրականության ընդհանուր ակնարկ բանահյուսությունից մինչև մեր օրերը, 9-րդ դասարանի պետական քննության նախապատրաստություն։", "Синтаксис сложного предложения, текст и стиль; обзор литературы от фольклора до наших дней; подготовка к государственному экзамену за 9 класс."],
    ["Armenia grade 9: «Հայոց լեզու» (2 h) + «Գրականություն» (2 h). Language: compound and complex sentences, types of subordinate clauses, direct and indirect speech, text linguistics, functional styles, punctuation in full. Literature: Khorenatsi, Narekatsi, Sayat-Nova, Abovyan, Raffi, Tumanyan, Isahakyan, Teryan, Charents, Bakunts, Sevak, Shiraz, Mahari, Matevosyan. State exam in Armenian (20-point).", "Հայաստան, 9-րդ դասարան՝ «Հայոց լեզու» (2 ժ) + «Գրականություն» (2 ժ)։ Լեզու՝ բարդ համադասական և ստորադասական նախադասություններ, երկրորդական նախադասությունների տեսակները, ուղղակի և անուղղակի խոսք, տեքստի լեզվաբանություն, գործառական ոճեր, կետադրությունն ամբողջությամբ։ Գրականություն՝ Խորենացի, Նարեկացի, Սայաթ-Նովա, Աբովյան, Րաֆֆի, Թումանյան, Իսահակյան, Տերյան, Չարենց, Բակունց, Սևակ, Շիրազ, Մահարի, Մաթևոսյան։ Պետական քննություն (20-բալանոց)։", "Армения, 9 класс: «Армянский язык» (2 ч) + «Литература» (2 ч). Язык: сложносочинённые и сложноподчинённые предложения, типы придаточных, прямая и косвенная речь, лингвистика текста, функциональные стили, полная пунктуация. Литература: Хоренаци, Нарекаци, Саят-Нова, Абовян, Раффи, Туманян, Исаакян, Терьян, Чаренц, Бакунц, Севак, Шираз, Маари, Матевосян. Государственный экзамен (20 баллов)."],
    ruNote,
    { armenia: 4, russia: null },
    [
      unit(t("Compound sentence", "Բարդ համադասական նախադասություն", "Сложносочинённое предложение"), t("Coordination types, conjunctions, punctuation.", "Համադասության տեսակները, շաղկապներ, կետադրություն։", "Типы сочинения, союзы, пунктуация."), [
        ["compound-sentence-types", "Compound sentences: copulative, adversative, disjunctive", "Համադասական նախադասություններ․ միավորիչ, ներհակական, տրոհական", "Сложносочинённые: соединительные, противительные, разделительные"],
        ["compound-punctuation", "Punctuation in compound sentences", "Կետադրությունը բարդ համադասականում", "Пунктуация в сложносочинённом предложении"],
      ]),
      unit(t("Complex sentence", "Բարդ ստորադասական նախադասություն", "Сложноподчинённое предложение"), t("Main and subordinate clause, kinds of subordinate clauses, multi-clause sentences, direct and indirect speech.", "Գլխավոր և երկրորդական նախադասություն, երկրորդականի տեսակները, բազմաբաղադրիչ նախադասություններ, ուղղակի և անուղղակի խոսք։", "Главное и придаточное, виды придаточных, многочленные предложения, прямая и косвенная речь."), [
        ["subordinate-clause-intro", "Main and subordinate clause; conjunctions and relative words", "Գլխավոր և երկրորդական նախադասություն, շաղկապներ և հարաբերական բառեր", "Главное и придаточное; союзы и относительные слова"],
        ["subordinate-subject-predicate", "Subordinate subject and predicate clauses", "Ենթակա և ստորոգելիական երկրորդական նախադասություններ", "Придаточные подлежащные и сказуемные"],
        ["subordinate-attributive-object", "Attributive and object clauses", "Որոշիչ և խնդիր երկրորդականներ", "Придаточные определительные и дополнительные"],
        ["subordinate-adverbial", "Adverbial clauses: time, place, cause, purpose, condition, concession", "Պարագայական երկրորդականներ․ ժամանակի, տեղի, պատճառի, նպատակի, պայմանի, զիջման", "Придаточные обстоятельственные: времени, места, причины, цели, условия, уступки"],
        ["multi-clause", "Sentences with several subordinate clauses", "Մի քանի երկրորդականով նախադասություններ", "Предложения с несколькими придаточными"],
        ["direct-indirect-speech", "Direct and indirect speech; citation", "Ուղղակի և անուղղակի խոսք, մեջբերում", "Прямая и косвенная речь; цитирование"],
      ]),
      unit(t("Text and style", "Տեքստ և ոճ", "Текст и стиль"), t("Text cohesion, functional styles, genres of writing, essay and argument.", "Տեքստի կապակցվածություն, գործառական ոճեր, գրավոր ժանրեր, շարադրություն և փաստարկում։", "Связность текста, функциональные стили, жанры письма, сочинение и аргументация."), [
        ["text-cohesion", "Text: theme, idea, cohesion", "Տեքստ․ թեմա, գաղափար, կապակցվածություն", "Текст: тема, идея, связность"],
        ["functional-styles", "Functional styles of Armenian", "Հայերենի գործառական ոճերը", "Функциональные стили армянского языка"],
        ["official-style", "Official documents: application, CV, letter", "Գործնական գրություններ․ դիմում, ինքնակենսագրություն, նամակ", "Деловые бумаги: заявление, автобиография, письмо"],
        ["argumentative-essay", "Argumentative essay", "Փաստարկված շարադրություն", "Сочинение-рассуждение"],
        ["punctuation-full-review", "Punctuation: full review", "Կետադրություն․ ամբողջական ամփոփում", "Пунктуация: полный обзор"],
      ]),
      unit(t("Literature: from the origins to the 19th century", "Գրականություն․ սկզբնաղբյուրներից մինչև 19-րդ դար", "Литература: от истоков до XIX века"), t("Khorenatsi, Narekatsi, Kuchak, Sayat-Nova, Abovyan, Raffi, Nalbandian.", "Խորենացի, Նարեկացի, Քուչակ, Սայաթ-Նովա, Աբովյան, Րաֆֆի, Նալբանդյան։", "Хоренаци, Нарекаци, Кучак, Саят-Нова, Абовян, Раффи, Налбандян."), [
        ["khorenatsi", "Movses Khorenatsi: «History of Armenia» (excerpts)", "Մովսես Խորենացի․ «Հայոց պատմություն» (հատվածներ)", "Мовсес Хоренаци: «История Армении» (отрывки)"],
        ["narekatsi-9", "Narekatsi: the lyric self", "Նարեկացի․ քնարական ես-ը", "Нарекаци: лирическое «я»"],
        ["abovyan-9", "Abovyan and the birth of modern Armenian literature", "Աբովյանը և նոր հայ գրականության ծնունդը", "Абовян и рождение новой армянской литературы"],
        ["nalbandian", "Mikael Nalbandian: «Ազատություն»", "Միքայել Նալբանդյան․ «Ազատություն»", "Микаэл Налбандян: «Свобода»"],
        ["raffi-9", "Raffi: the historical novel", "Րաֆֆի․ պատմական վեպ", "Раффи: исторический роман"],
      ]),
      unit(t("Literature: the 20th century and exam review", "Գրականություն․ 20-րդ դար և քննական ամփոփում", "Литература: XX век и подготовка к экзамену"), t("Tumanyan, Isahakyan, Teryan, Charents, Bakunts, Sevak, Shiraz, Mahari, Matevosyan; exam preparation.", "Թումանյան, Իսահակյան, Տերյան, Չարենց, Բակունց, Սևակ, Շիրազ, Մահարի, Մաթևոսյան, քննության նախապատրաստություն։", "Туманян, Исаакян, Терьян, Чаренц, Бакунц, Севак, Шираз, Маари, Матевосян; подготовка к экзамену."), [
        ["tumanyan-9", "Tumanyan: poems, legends, «Սասունցի Դավիթ»", "Թումանյան․ պոեմներ, լեգենդներ, «Սասունցի Դավիթ»", "Туманян: поэмы, легенды, «Давид Сасунский»"],
        ["charents-9", "Charents: «Գիրք ճանապարհի»", "Չարենց․ «Գիրք ճանապարհի»", "Чаренц: «Книга пути»"],
        ["sevak-9", "Paruyr Sevak: «Անլռելի զանգակատուն»", "Պարույր Սևակ․ «Անլռելի զանգակատուն»", "Паруйр Севак: «Несмолкающая колокольня»"],
        ["mahari-matevosyan", "Gurgen Mahari and Hrant Matevosyan", "Գուրգեն Մահարի և Հրանտ Մաթևոսյան", "Гурген Маари и Грант Матевосян"],
        ["exam-9-armenian", "Grade 9 exam: structure and practice", "9-րդ դասարանի քննություն․ կառուցվածք և վարժանք", "Экзамен за 9 класс: структура и практика"],
      ]),
    ],
  ),
  course(
    10,
    ["High school: history of the Armenian language, phonetics and lexicology at an advanced level, stylistics; literature of the 5th–18th centuries.", "Ավագ դպրոց՝ հայոց լեզվի պատմություն, հնչյունաբանություն և բառագիտություն խորացված, ոճաբանություն, 5–18-րդ դարերի գրականություն։", "Старшая школа: история армянского языка, фонетика и лексикология на углублённом уровне, стилистика; литература V–XVIII веков."],
    ["Armenia grade 10 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h, humanities stream more): language as a system, Grabar–Middle Armenian–Modern Armenian, Eastern and Western Armenian, orthography reforms, phonetics and lexicology in depth, stylistics. Literature: 5th-century historians, Narekatsi, medieval lyric, Sayat-Nova, Armenian Enlightenment.", "Հայաստան, 10-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ լեզուն որպես համակարգ, գրաբար–միջին հայերեն–աշխարհաբար, արևելահայերեն և արևմտահայերեն, ուղղագրական բարեփոխումներ, հնչյունաբանություն և բառագիտություն խորությամբ, ոճաբանություն։ Գրականություն՝ 5-րդ դարի պատմիչներ, Նարեկացի, միջնադարյան քնարերգություն, Սայաթ-Նովա, հայ լուսավորականություն։", "Армения, 10 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): язык как система, грабар — среднеармянский — ашхарабар, восточно- и западноармянский, орфографические реформы, углублённая фонетика и лексикология, стилистика. Литература: историки V века, Нарекаци, средневековая лирика, Саят-Нова, армянское Просвещение."],
    ruNote,
    { armenia: 4, russia: null },
    [
      unit(t("History of the language", "Լեզվի պատմություն", "История языка"), t("Indo-European origins, Grabar, Middle Armenian, Modern Armenian, the two standards, orthography.", "Հնդեվրոպական ծագում, գրաբար, միջին հայերեն, աշխարհաբար, երկու գրական տարբերակ, ուղղագրություն։", "Индоевропейское происхождение, грабар, среднеармянский, ашхарабар, два литературных стандарта, орфография."), [
        ["indo-european", "Armenian among the Indo-European languages", "Հայերենը հնդեվրոպական լեզուների շարքում", "Армянский среди индоевропейских языков"],
        ["grabar", "Grabar: Classical Armenian", "Գրաբար․ դասական հայերեն", "Грабар: классический армянский"],
        ["middle-modern", "Middle Armenian and the rise of Ashkharhabar", "Միջին հայերեն և աշխարհաբարի ձևավորում", "Среднеармянский и становление ашхарабара"],
        ["eastern-western", "Eastern and Western Armenian", "Արևելահայերեն և արևմտահայերեն", "Восточноармянский и западноармянский"],
        ["orthography-reforms", "Orthography: classical and reformed (1922, 1940)", "Ուղղագրություն․ դասական և բարեփոխված (1922, 1940)", "Орфография: классическая и реформированная (1922, 1940)"],
      ]),
      unit(t("Phonetics and lexicology: advanced", "Հնչյունաբանություն և բառագիտություն․ խորացված", "Фонетика и лексикология: углублённо"), t("Phonological system, sound alternations, lexical strata, etymology, dialects.", "Հնչյունաբանական համակարգ, հնչյունափոխություն, բառապաշարի շերտեր, ստուգաբանություն, բարբառներ։", "Фонологическая система, чередования, пласты лексики, этимология, диалекты."), [
        ["sound-alternations", "Sound alternations: ե/ի, ո/ու, ույ/ու", "Հնչյունափոխություն․ ե/ի, ո/ու, ույ/ու", "Чередования звуков: ե/ի, ո/ու, ույ/ու"],
        ["lexical-strata", "Lexical strata: native, Iranian, Greek, Arabic, Russian, European", "Բառապաշարի շերտեր․ բնիկ, իրանական, հունական, արաբական, ռուսական, եվրոպական", "Пласты лексики: исконная, иранская, греческая, арабская, русская, европейская"],
        ["etymology", "Etymology: Acharyan's dictionary", "Ստուգաբանություն․ Աճառյանի բառարան", "Этимология: словарь Ачаряна"],
        ["dialects", "Armenian dialects", "Հայերենի բարբառները", "Армянские диалекты"],
        ["terminology", "Terminology and neologisms", "Տերմինաբանություն և նորաբանություններ", "Терминология и неологизмы"],
      ]),
      unit(t("Stylistics", "Ոճաբանություն", "Стилистика"), t("Expressive means, tropes and figures, style of the author, stylistic analysis.", "Արտահայտչամիջոցներ, պատկերավորման միջոցներ, հեղինակի ոճ, ոճական վերլուծություն։", "Выразительные средства, тропы и фигуры, авторский стиль, стилистический анализ."), [
        ["tropes", "Tropes: metaphor, metonymy, epithet, hyperbole", "Պատկերավորման միջոցներ․ փոխաբերություն, փոխանունություն, մակդիր, չափազանցություն", "Тропы: метафора, метонимия, эпитет, гипербола"],
        ["figures", "Figures of speech: anaphora, antithesis, inversion", "Ոճական պատկերներ․ նախաձայն, հակադրություն, շրջադասություն", "Фигуры речи: анафора, антитеза, инверсия"],
        ["stylistic-analysis", "Stylistic analysis of a text", "Տեքստի ոճական վերլուծություն", "Стилистический анализ текста"],
      ]),
      unit(t("Literature: 5th–12th centuries", "Գրականություն․ 5–12-րդ դարեր", "Литература: V–XII века"), t("Koriun, Khorenatsi, Yeghishe, Parpetsi, Narekatsi, Shnorhali.", "Կորյուն, Խորենացի, Եղիշե, Փարպեցի, Նարեկացի, Շնորհալի։", "Корюн, Хоренаци, Егише, Парпеци, Нарекаци, Шнорали."), [
        ["koriun", "Koriun: «Life of Mashtots»", "Կորյուն․ «Վարք Մաշտոցի»", "Корюн: «Житие Маштоца»"],
        ["yeghishe", "Yeghishe: «On Vardan and the Armenian War»", "Եղիշե․ «Վասն Վարդանայ և Հայոց պատերազմին»", "Егише: «О Вардане и войне армянской»"],
        ["khorenatsi-10", "Khorenatsi: legends and history", "Խորենացի․ առասպելներ և պատմություն", "Хоренаци: легенды и история"],
        ["narekatsi-10", "Narekatsi: «Book of Lamentations» in depth", "Նարեկացի․ «Մատյան ողբերգության» խորությամբ", "Нарекаци: «Книга скорбных песнопений» углублённо"],
        ["shnorhali", "Nerses Shnorhali", "Ներսես Շնորհալի", "Нерсес Шнорали"],
      ]),
      unit(t("Literature: 13th–18th centuries", "Գրականություն․ 13–18-րդ դարեր", "Литература: XIII–XVIII века"), t("Frik, Kostandin Yerznkatsi, Kuchak, Naghash Hovnatan, Sayat-Nova, Baghdasar Dpir.", "Ֆրիկ, Կոստանդին Երզնկացի, Քուչակ, Նաղաշ Հովնաթան, Սայաթ-Նովա, Բաղդասար Դպիր։", "Фрик, Костандин Ерзнкаци, Кучак, Нагаш Овнатан, Саят-Нова, Багдасар Дпир."), [
        ["frik", "Frik: social poetry", "Ֆրիկ․ սոցիալական պոեզիա", "Фрик: социальная поэзия"],
        ["yerznkatsi", "Kostandin Yerznkatsi: spring and love", "Կոստանդին Երզնկացի․ գարուն և սեր", "Костандин Ерзнкаци: весна и любовь"],
        ["kuchak-10", "Kuchak: hayrens of love and exile", "Քուչակ․ սիրո և պանդխտության հայրեններ", "Кучак: айрены любви и изгнания"],
        ["sayat-nova-10", "Sayat-Nova: the trilingual poet", "Սայաթ-Նովա․ եռալեզու բանաստեղծ", "Саят-Нова: трёхъязычный поэт"],
        ["enlightenment", "The Armenian Enlightenment: Mkhitarists, Baghdasar Dpir", "Հայ լուսավորականություն․ Մխիթարյաններ, Բաղդասար Դպիր", "Армянское Просвещение: мхитаристы, Багдасар Дпир"],
      ]),
    ],
  ),
  course(
    11,
    ["Morphology and syntax at an advanced level, speech culture; literature of the 19th century and the first half of the 20th.", "Ձևաբանություն և շարահյուսություն խորացված, խոսքի մշակույթ, 19-րդ դարի և 20-րդ դարի առաջին կեսի գրականություն։", "Морфология и синтаксис на углублённом уровне, культура речи; литература XIX века и первой половины XX."],
    ["Armenia grade 11 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h): grammatical system review, difficult cases of morphology, syntax of the complex sentence and text, speech culture and norms, public speaking. Literature: Abovyan, Nalbandian, Raffi, Proshyan, Shirvanzade, Sundukyan, Tumanyan, Isahakyan, Teryan, Varuzhan, Siamanto, Metsarents, Charents, Bakunts, Totovents, Zoryan.", "Հայաստան, 11-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ քերականական համակարգի ամփոփում, ձևաբանության բարդ դեպքեր, բարդ նախադասության և տեքստի շարահյուսություն, խոսքի մշակույթ և նորմեր, հրապարակային խոսք։ Գրականություն՝ Աբովյան, Նալբանդյան, Րաֆֆի, Պռոշյան, Շիրվանզադե, Սունդուկյան, Թումանյան, Իսահակյան, Տերյան, Վարուժան, Սիամանթո, Մեծարենց, Չարենց, Բակունց, Թոթովենց, Զորյան։", "Армения, 11 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): обзор грамматической системы, трудные случаи морфологии, синтаксис сложного предложения и текста, культура речи и нормы, публичная речь. Литература: Абовян, Налбандян, Раффи, Прошян, Ширванзаде, Сундукян, Туманян, Исаакян, Терьян, Варужан, Сиаманто, Мецаренц, Чаренц, Бакунц, Тотовенц, Зорян."],
    ruNote,
    { armenia: 4, russia: null },
    [
      unit(t("Morphology: difficult cases", "Ձևաբանություն․ բարդ դեպքեր", "Морфология: трудные случаи"), t("Declension and conjugation exceptions, participles in use, norm and variation.", "Հոլովման և խոնարհման բացառություններ, դերբայների գործածություն, նորմ և տարբերակայնություն։", "Исключения склонения и спряжения, употребление причастий, норма и вариативность."), [
        ["declension-difficult", "Difficult declensions and plural forms", "Բարդ հոլովումներ և հոգնակի ձևեր", "Трудные склонения и формы множественного числа"],
        ["participle-usage", "Participles and converbs in text", "Դերբայները տեքստում", "Причастия и деепричастные формы в тексте"],
        ["verb-norms", "Norms of verb usage; common errors", "Բայի գործածության նորմեր, տարածված սխալներ", "Нормы употребления глагола; типичные ошибки"],
      ]),
      unit(t("Syntax: advanced", "Շարահյուսություն․ խորացված", "Синтаксис: углублённо"), t("Complex syntactic wholes, period, paragraph, text syntax, punctuation mastery.", "Բարդ շարահյուսական ամբողջություններ, պարբերույթ, պարբերություն, տեքստի շարահյուսություն, կետադրության տիրապետում։", "Сложные синтаксические целые, период, абзац, синтаксис текста, владение пунктуацией."), [
        ["complex-syntactic-whole", "Complex syntactic whole and paragraph", "Բարդ շարահյուսական ամբողջություն և պարբերություն", "Сложное синтаксическое целое и абзац"],
        ["period", "The period; rhetorical syntax", "Պարբերույթ, հռետորական շարահյուսություն", "Период; риторический синтаксис"],
        ["punctuation-mastery", "Punctuation mastery: author's punctuation", "Կետադրության տիրապետում, հեղինակային կետադրություն", "Мастерство пунктуации: авторская пунктуация"],
      ]),
      unit(t("Speech culture", "Խոսքի մշակույթ", "Культура речи"), t("Norms, correctness, purity, expressiveness, public speaking, debate.", "Նորմեր, ճշտություն, մաքրություն, արտահայտչականություն, հրապարակային խոսք, բանավեճ։", "Нормы, правильность, чистота, выразительность, публичная речь, дебаты."), [
        ["speech-norms", "Literary norm and common errors", "Գրական նորմ և տարածված սխալներ", "Литературная норма и типичные ошибки"],
        ["public-speaking", "Public speaking: structure of a speech", "Հրապարակային խոսք․ ելույթի կառուցվածք", "Публичная речь: структура выступления"],
        ["debate", "Debate and argumentation", "Բանավեճ և փաստարկում", "Дебаты и аргументация"],
      ]),
      unit(t("Literature: the 19th century", "Գրականություն․ 19-րդ դար", "Литература: XIX век"), t("Abovyan, Nalbandian, Raffi, Sundukyan, Shirvanzade, Paronyan, Durian, Patkanian.", "Աբովյան, Նալբանդյան, Րաֆֆի, Սունդուկյան, Շիրվանզադե, Պարոնյան, Դուրյան, Պատկանյան։", "Абовян, Налбандян, Раффи, Сундукян, Ширванзаде, Паронян, Дурян, Патканян."), [
        ["abovyan-11", "Abovyan: «Վերք Հայաստանի» as a novel", "Աբովյան․ «Վերք Հայաստանի»՝ որպես վեպ", "Абовян: «Раны Армении» как роман"],
        ["sundukyan", "Gabriel Sundukyan: «Պեպո»", "Գաբրիել Սունդուկյան․ «Պեպո»", "Габриэл Сундукян: «Пэпо»"],
        ["paronyan", "Hakob Paronyan: satire", "Հակոբ Պարոնյան․ երգիծանք", "Акоп Паронян: сатира"],
        ["durian", "Petros Durian: lyrics", "Պետրոս Դուրյան․ քնարերգություն", "Петрос Дурян: лирика"],
        ["raffi-shirvanzade-11", "Raffi and Shirvanzade: the novel", "Րաֆֆի և Շիրվանզադե․ վեպ", "Раффи и Ширванзаде: роман"],
      ]),
      unit(t("Literature: early 20th century", "Գրականություն․ 20-րդ դարի սկիզբ", "Литература: начало XX века"), t("Tumanyan, Isahakyan, Teryan, Varuzhan, Siamanto, Metsarents, Charents, Bakunts, Totovents, Zoryan.", "Թումանյան, Իսահակյան, Տերյան, Վարուժան, Սիամանթո, Մեծարենց, Չարենց, Բակունց, Թոթովենց, Զորյան։", "Туманян, Исаакян, Терьян, Варужан, Сиаманто, Мецаренц, Чаренц, Бакунц, Тотовенц, Зорян."), [
        ["tumanyan-11", "Tumanyan: the whole world", "Թումանյան․ ամբողջ աշխարհը", "Туманян: целый мир"],
        ["isahakyan-teryan-11", "Isahakyan and Teryan", "Իսահակյան և Տերյան", "Исаакян и Терьян"],
        ["western-armenian-poets", "Western Armenian poets: Varuzhan, Siamanto, Metsarents", "Արևմտահայ բանաստեղծներ․ Վարուժան, Սիամանթո, Մեծարենց", "Западноармянские поэты: Варужан, Сиаманто, Мецаренц"],
        ["charents-11", "Charents: from «Ես իմ անուշ» to «Գիրք ճանապարհի»", "Չարենց․ «Ես իմ անուշ»-ից «Գիրք ճանապարհի»", "Чаренц: от «Ес им ануш» до «Книги пути»"],
        ["bakunts-totovents", "Bakunts, Totovents, Zoryan: prose of the 1920s–30s", "Բակունց, Թոթովենց, Զորյան․ 1920–30-ականների արձակ", "Бакунц, Тотовенц, Зорян: проза 1920–30-х"],
      ]),
    ],
  ),
  course(
    12,
    ["Review of the language course for the unified exam; literature of the second half of the 20th century and today; essay writing.", "Լեզվի դասընթացի ամփոփում միասնական քննության համար, 20-րդ դարի երկրորդ կեսի և մեր օրերի գրականություն, շարադրություն։", "Повторение курса языка к единому экзамену; литература второй половины XX века и современность; написание эссе."],
    ["Armenia grade 12 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h): systematic review of orthography, morphology, syntax and punctuation in the format of the unified exam test; literature: Shiraz, Sevak, Kaputikyan, Emin, Sahyan, Mahari, Matevosyan, Dovlatyan, Khanzadyan, Vahagn Davtyan, contemporary authors; essay.", "Հայաստան, 12-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ ուղղագրության, ձևաբանության, շարահյուսության և կետադրության համակարգված ամփոփում միասնական քննության թեստի ձևաչափով, գրականություն՝ Շիրազ, Սևակ, Կապուտիկյան, Էմին, Սահյան, Մահարի, Մաթևոսյան, Դովլաթյան, Խանզադյան, Վահագն Դավթյան, ժամանակակից հեղինակներ, շարադրություն։", "Армения, 12 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): системное повторение орфографии, морфологии, синтаксиса и пунктуации в формате теста единого экзамена; литература: Шираз, Севак, Капутикян, Эмин, Саян, Маари, Матевосян, Довлатян, Ханзадян, Ваагн Давтян, современные авторы; эссе."],
    ruNote,
    { armenia: 4, russia: null },
    [
      unit(t("Exam review: orthography and lexicology", "Քննական ամփոփում․ ուղղագրություն և բառագիտություն", "Повторение к экзамену: орфография и лексикология"), t("Test-format drills on spelling, word meaning, phraseology.", "Թեստային վարժանքներ ուղղագրության, բառիմաստի, դարձվածքների վրա։", "Тренировка в тестовом формате: правописание, значение слова, фразеология."), [
        ["review-orthography", "Orthography: the hardest rules", "Ուղղագրություն․ ամենադժվար կանոնները", "Орфография: самые трудные правила"],
        ["review-lexicology", "Lexicology and phraseology in tests", "Բառագիտություն և դարձվածաբանություն թեստերում", "Лексикология и фразеология в тестах"],
        ["review-word-formation", "Word formation in tests", "Բառակազմությունը թեստերում", "Словообразование в тестах"],
      ]),
      unit(t("Exam review: grammar", "Քննական ամփոփում․ քերականություն", "Повторение к экзамену: грамматика"), t("Morphology, syntax and punctuation in test format.", "Ձևաբանություն, շարահյուսություն և կետադրություն թեստային ձևաչափով։", "Морфология, синтаксис и пунктуация в тестовом формате."), [
        ["review-morphology", "Morphology: parts of speech and forms", "Ձևաբանություն․ խոսքի մասեր և ձևեր", "Морфология: части речи и формы"],
        ["review-syntax", "Syntax: sentence analysis", "Շարահյուսություն․ նախադասության վերլուծություն", "Синтаксис: разбор предложения"],
        ["review-punctuation", "Punctuation: all rules", "Կետադրություն․ բոլոր կանոնները", "Пунктуация: все правила"],
        ["armenian-mock-test", "Mock unified exam test", "Միասնական քննության փորձնական թեստ", "Пробный тест единого экзамена"],
      ]),
      unit(t("Literature: 1950s–1980s", "Գրականություն․ 1950–1980-ականներ", "Литература: 1950–1980-е"), t("Shiraz, Sevak, Kaputikyan, Emin, Sahyan, Mahari, Khanzadyan, Matevosyan.", "Շիրազ, Սևակ, Կապուտիկյան, Էմին, Սահյան, Մահարի, Խանզադյան, Մաթևոսյան։", "Шираз, Севак, Капутикян, Эмин, Саян, Маари, Ханзадян, Матевосян."), [
        ["shiraz-12", "Hovhannes Shiraz: «Հայոց դանթեականը»", "Հովհաննես Շիրազ․ «Հայոց դանթեականը»", "Ованес Шираз: «Армянская Дантеада»"],
        ["sevak-12", "Paruyr Sevak: «Եղիցի լույս», «Մարդը ափի մեջ»", "Պարույր Սևակ․ «Եղիցի լույս», «Մարդը ափի մեջ»", "Паруйр Севак: «Да будет свет», «Человек на ладони»"],
        ["kaputikyan-emin-sahyan", "Kaputikyan, Emin, Sahyan", "Կապուտիկյան, Էմին, Սահյան", "Капутикян, Эмин, Саян"],
        ["mahari-12", "Gurgen Mahari: «Ayrvogh aygestanner»", "Գուրգեն Մահարի․ «Այրվող այգեստաններ»", "Гурген Маари: «Горящие сады»"],
        ["matevosyan-12", "Hrant Matevosyan: «Մենք ենք, մեր սարերը»", "Հրանտ Մաթևոսյան․ «Մենք ենք, մեր սարերը»", "Грант Матевосян: «Мы и наши горы»"],
      ]),
      unit(t("Literature: contemporary and essay", "Գրականություն․ ժամանակակից և շարադրություն", "Литература: современность и эссе"), t("Vahagn Davtyan, Razmik Davoyan, Levon Khechoyan, contemporary prose; the literary essay.", "Վահագն Դավթյան, Ռազմիկ Դավոյան, Լևոն Խեչոյան, ժամանակակից արձակ, գրական շարադրություն։", "Ваагн Давтян, Размик Давоян, Левон Хечоян, современная проза; литературное эссе."), [
        ["davtyan-davoyan", "Vahagn Davtyan and Razmik Davoyan", "Վահագն Դավթյան և Ռազմիկ Դավոյան", "Ваагн Давтян и Размик Давоян"],
        ["khechoyan-contemporary", "Levon Khechoyan and contemporary prose", "Լևոն Խեչոյան և ժամանակակից արձակ", "Левон Хечоян и современная проза"],
        ["diaspora-literature", "Diaspora literature: Shahnour, Saroyan, Zahrad", "Սփյուռքի գրականություն․ Շահնուր, Սարոյան, Զահրատ", "Литература диаспоры: Шахнур, Сароян, Захрад"],
        ["literary-essay", "Writing the literary essay", "Գրական շարադրություն գրելը", "Пишем литературное эссе"],
        ["literature-exam-prep", "Literature exam preparation", "Գրականության քննության նախապատրաստություն", "Подготовка к экзамену по литературе"],
      ]),
    ],
  ),
];

