import { t, unit, type CourseSeed } from "../../types";
import { course, ruNote } from "./shared";
import { armenianGrade1 } from "./grade-1";
import { armenianGrade2 } from "./grade-2";
import { armenianGrade3 } from "./grade-3";
import { armenianGrade4 } from "./grade-4";
import { armenianGrade5 } from "./grade-5";
import { armenianGrade6 } from "./grade-6";
import { armenianGrade7 } from "./grade-7";
import { armenianGrade8 } from "./grade-8";
import { armenianGrade9 } from "./grade-9";

export const armenian: CourseSeed[] = [
  armenianGrade1,
  armenianGrade2,
  armenianGrade3,
  armenianGrade4,
  armenianGrade5,
  armenianGrade6,
  armenianGrade7,
  armenianGrade8,

  armenianGrade9,

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

