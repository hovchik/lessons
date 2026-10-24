import { t, unit, type CourseSeed } from "../../types";
import { course } from "./shared";
import { englishGrade3 } from "./grade-3";
import { englishGrade2 } from "./grade-2";
import { englishGrade4 } from "./grade-4";
import { englishGrade5 } from "./grade-5";
import { englishGrade6 } from "./grade-6";
import { englishGrade7 } from "./grade-7";
import { englishGrade8 } from "./grade-8";
import { englishGrade9 } from "./grade-9";

export const english: CourseSeed[] = [
  englishGrade2,
  englishGrade3,
  englishGrade4,

  englishGrade5,

  englishGrade6,

  englishGrade7,

  englishGrade8,

  englishGrade9,
  course(
    10,
    ["Upper-secondary B1+: future perfect and continuous, inversion (intro), advanced passive and reporting, collocations and idioms; topics: identity, media literacy, science and technology, travel.", "Ավագ դպրոց B1+․ future perfect և continuous, շրջադասություն (ներածություն), բարդ կրավորական և անուղղակի խոսք, բառակապակցություններ և դարձվածքներ․ թեմաներ՝ ինքնություն, մեդիագրագիտություն, գիտություն և տեխնոլոգիաներ, ճանապարհորդություն։", "Старшая школа B1+: future perfect и continuous, инверсия (введение), сложный пассив и косвенная речь, коллокации и идиомы; темы: идентичность, медиаграмотность, наука и технологии, путешествия."],
    ["Armenia grade 10 (3–4 h/week; up to 6 in humanities streams): start of high school, target B1+→B2 by grade 12. Topics: identity and values, Armenian diaspora, media, science; essay types and formal register are introduced.", "Հայաստան, 10-րդ դասարան (3–4 ժ/շաբ., հումանիտար հոսքում մինչև 6)՝ ավագ դպրոցի սկիզբ, նպատակ B1+→B2 մինչև 12-րդ դասարան։ Թեմաներ՝ ինքնություն և արժեքներ, հայկական սփյուռք, մեդիա, գիտություն․ ներմուծվում են էսսեի տեսակները և պաշտոնական ոճը։", "Армения, 10 класс (3–4 ч/нед., до 6 в гуманитарном потоке): начало старшей школы, цель B1+→B2 к 12 классу. Темы — идентичность и ценности, армянская диаспора, медиа, наука; вводятся типы эссе и официальный регистр."],
    ["Russia grade 10 (3 h/week base, 5 h profile; ФГОС СОО): future forms incl. future perfect, perfect infinitives, advanced passive, inversion, linking devices, word formation, essay «for and against»; topics: relationships, lifestyle, schools and jobs, environment, holidays, technology.", "Ռուսաստան, 10-րդ դասարան (3 ժ/շաբ. բազային, 5 պրոֆիլ; ФГОС СОО)՝ ապառնի ձևեր ներառյալ future perfect, perfect ինֆինիտիվ, բարդ կրավորական, շրջադասություն, կապող բառեր, բառակազմություն, «կողմ և դեմ» էսսե․ թեմաներ՝ հարաբերություններ, ապրելակերպ, դպրոց և աշխատանք, միջավայր, տեխնոլոգիաներ։", "Россия, 10 класс (3 ч/нед. база, 5 ч профиль; ФГОС СОО): формы будущего, включая future perfect, перфектный инфинитив, сложный пассив, инверсия, средства связи, словообразование, эссе «за и против»; темы: отношения, образ жизни, школа и работа, экология, отпуск, технологии."],
    { armenia: 4, russia: 3 },
    [
      unit(t("Who am I?", "Ո՞վ եմ ես", "Кто я?"), t("Identity, values, personality idioms, present and past tenses in depth.", "Ինքնություն, արժեքներ, բնավորության դարձվածքներ, ներկա և անցյալ ժամանակները խորությամբ։", "Идентичность, ценности, идиомы о характере, настоящие и прошедшие времена углублённо."), [
        ["identity-values", "Identity and values", "Ինքնություն և արժեքներ", "Идентичность и ценности"],
        ["personality-idioms", "Personality idioms and collocations", "Բնավորության դարձվածքներ և բառակապակցություններ", "Идиомы и коллокации о характере"],
        ["tenses-in-depth", "Present and past tenses: fine distinctions", "Ներկա և անցյալ ժամանակներ․ նուրբ տարբերություններ", "Настоящие и прошедшие времена: тонкости"],
        ["diaspora-multicultural", "Diaspora and multicultural societies", "Սփյուռք և բազմամշակութային հասարակություններ", "Диаспора и многокультурные общества"],
      ]),
      unit(t("Media literacy", "Մեդիագրագիտություն", "Медиаграмотность"), t("News and fake news, reporting verbs, advanced reported speech, linking devices.", "Նորություններ և կեղծ լուրեր, հաղորդող բայեր, բարդ անուղղակի խոսք, կապող բառեր։", "Новости и фейки, глаголы сообщения, сложная косвенная речь, средства связи."), [
        ["news-fake-news", "News and fake news", "Նորություններ և կեղծ լուրեր", "Новости и фейки"],
        ["reporting-verbs", "Reporting verbs: suggest, deny, admit", "Հաղորդող բայեր․ suggest, deny, admit", "Глаголы сообщения: suggest, deny, admit"],
        ["linking-devices", "Linking devices: however, moreover, whereas", "Կապող բառեր․ however, moreover, whereas", "Средства связи: however, moreover, whereas"],
        ["for-against-essay", "Essay: for and against", "Էսսե․ կողմ և դեմ", "Эссе: за и против"],
      ]),
      unit(t("Science and the future", "Գիտություն և ապագա", "Наука и будущее"), t("Future perfect and future continuous, predictions, AI and ethics.", "Future perfect և future continuous, կանխատեսումներ, ԱԲ և էթիկա։", "Future perfect и future continuous, прогнозы, ИИ и этика."), [
        ["future-perfect-continuous", "By 2050 we will have…: future perfect and continuous", "By 2050 we will have…․ future perfect և continuous", "By 2050 we will have…: future perfect и continuous"],
        ["predictions-probability", "Predictions and probability", "Կանխատեսումներ և հավանականություն", "Прогнозы и вероятность"],
        ["ai-ethics", "Artificial intelligence: a debate", "Արհեստական բանականություն․ բանավեճ", "Искусственный интеллект: дебаты"],
        ["word-formation-advanced", "Word formation: prefixes un-, dis-, mis-, over-", "Բառակազմություն․ un-, dis-, mis-, over- նախածանցներ", "Словообразование: приставки un-, dis-, mis-, over-"],
      ]),
      unit(t("Travel and the world", "Ճանապարհորդություն և աշխարհ", "Путешествия и мир"), t("Tourism, inversion for emphasis, articles with geographical names, a travel blog.", "Տուրիզմ, շրջադասություն շեշտադրման համար, հոդեր աշխարհագրական անունների հետ, ուղեգրություն։", "Туризм, инверсия для эмфазы, артикли с географическими названиями, тревел-блог."), [
        ["tourism-pros-cons", "Tourism: benefits and problems", "Տուրիզմ․ օգուտներ և խնդիրներ", "Туризм: польза и проблемы"],
        ["inversion", "Never have I seen…: inversion", "Never have I seen…․ շրջադասություն", "Never have I seen…: инверсия"],
        ["articles-geography", "Articles with geographical names", "Հոդերը աշխարհագրական անունների հետ", "Артикли с географическими названиями"],
        ["travel-blog", "Writing a travel blog post", "Ուղեգրություն բլոգի համար", "Пишем пост в тревел-блог"],
        ["year-10-review", "Review and listening exam practice", "Ամփոփում և լսողական քննության պրակտիկա", "Повторение и практика аудирования"],
      ]),
    ],
  ),

  course(
    11,
    ["B2-level work: participle clauses, cleft sentences, subjunctive and modal perfects, academic vocabulary, exam formats (ЕГЭ, Armenian unified exam); topics: society, law, work, environment, arts.", "B2 մակարդակ․ դերբայական դարձվածներ, cleft նախադասություններ, ենթադրական եղանակ և modal perfect, ակադեմիական բառապաշար, քննական ձևաչափեր (ЕГЭ, միասնական քննություն)․ թեմաներ՝ հասարակություն, իրավունք, աշխատանք, միջավայր, արվեստ։", "Уровень B2: причастные обороты, расщеплённые предложения, сослагательное наклонение и modal perfect, академическая лексика, форматы экзаменов (ЕГЭ, армянский единый экзамен); темы: общество, право, работа, экология, искусство."],
    ["Armenia grade 11 (3–4 h/week): preparation for the unified entrance exam in English (grade 12). Reading comprehension, grammar transformation, vocabulary, and essay. Topics: human rights, work and money, environment, arts and leisure.", "Հայաստան, 11-րդ դասարան (3–4 ժ/շաբ.)՝ նախապատրաստություն անգլերենի միասնական քննությանը (12-րդ դասարան)․ ընթերցանություն, քերականական փոխակերպումներ, բառապաշար, էսսե։ Թեմաներ՝ մարդու իրավունքներ, աշխատանք և փող, միջավայր, արվեստ և հանգիստ։", "Армения, 11 класс (3–4 ч/нед.): подготовка к единому экзамену по английскому (12 класс). Понимание текста, грамматические трансформации, лексика, эссе. Темы: права человека, работа и деньги, экология, искусство и досуг."],
    ["Russia grade 11 (3 h base / 5 h profile): final year; ЕГЭ по английскому — listening, reading, grammar and vocabulary, email (100–140 words), essay-project on a table/diagram (200–250 words), speaking (reading aloud, questions, interview, comparison of pictures). Grammar: all structures to B2.", "Ռուսաստան, 11-րդ դասարան (3 ժ բազային / 5 պրոֆիլ)՝ ավարտական տարի․ ЕГЭ անգլերեն՝ լսել, կարդալ, քերականություն և բառապաշար, էլ. նամակ (100–140 բառ), էսսե-նախագիծ աղյուսակի հիման վրա (200–250 բառ), բանավոր։ Քերականություն՝ բոլոր կառույցները մինչև B2։", "Россия, 11 класс (3 ч база / 5 ч профиль): выпускной год; ЕГЭ по английскому — аудирование, чтение, грамматика и лексика, электронное письмо (100–140 слов), эссе-проект по таблице/диаграмме (200–250 слов), говорение (чтение вслух, вопросы, интервью, сравнение картинок). Грамматика: все структуры до B2."],
    { armenia: 4, russia: 3 },
    [
      unit(t("Society and the law", "Հասարակություն և իրավունք", "Общество и право"), t("Rights and responsibilities, modal perfects, participle clauses, formal register.", "Իրավունքներ և պարտականություններ, modal perfect, դերբայական դարձվածներ, պաշտոնական ոճ։", "Права и обязанности, modal perfect, причастные обороты, официальный регистр."), [
        ["rights-responsibilities", "Rights and responsibilities", "Իրավունքներ և պարտականություններ", "Права и обязанности"],
        ["modal-perfects", "You should have told me: modal perfects", "You should have told me․ modal perfect", "You should have told me: modal perfect"],
        ["participle-clauses", "Having finished…: participle clauses", "Having finished…․ դերբայական դարձվածներ", "Having finished…: причастные обороты"],
        ["formal-register", "Formal and informal register", "Պաշտոնական և ոչ պաշտոնական ոճ", "Официальный и неофициальный регистр"],
      ]),
      unit(t("Work and money", "Աշխատանք և փող", "Работа и деньги"), t("Job interviews, cleft sentences, emphasis, business email.", "Հարցազրույց աշխատանքի, cleft նախադասություններ, շեշտադրում, գործարար նամակ։", "Собеседование, расщеплённые предложения, эмфаза, деловое письмо."), [
        ["job-interview", "The job interview", "Հարցազրույց աշխատանքի համար", "Собеседование"],
        ["cleft-sentences", "What I need is…: cleft sentences", "What I need is…․ cleft նախադասություններ", "What I need is…: расщеплённые предложения"],
        ["money-idioms", "Money idioms and collocations", "Փողի դարձվածքներ և բառակապակցություններ", "Идиомы и коллокации о деньгах"],
        ["business-email", "Writing a business email", "Գործարար էլ. նամակ", "Деловое электронное письмо"],
      ]),
      unit(t("Our planet", "Մեր մոլորակը", "Наша планета"), t("Climate change, the subjunctive, «It is essential that…», describing graphs and tables.", "Կլիմայի փոփոխություն, ենթադրական եղանակ, «It is essential that…», գրաֆիկների և աղյուսակների նկարագրություն։", "Изменение климата, сослагательное наклонение, «It is essential that…», описание графиков и таблиц."), [
        ["climate-change", "Climate change: causes and solutions", "Կլիմայի փոփոխություն․ պատճառներ և լուծումներ", "Изменение климата: причины и решения"],
        ["subjunctive", "It is essential that he be…: the subjunctive", "It is essential that he be…․ ենթադրական եղանակ", "It is essential that he be…: сослагательное наклонение"],
        ["describing-data", "Describing graphs, tables and trends", "Գրաֆիկներ, աղյուսակներ և միտումներ", "Описание графиков, таблиц и тенденций"],
        ["essay-project", "Essay-project on a table or diagram", "Էսսե-նախագիծ աղյուսակի հիման վրա", "Эссе-проект по таблице или диаграмме"],
      ]),
      unit(t("Arts and leisure", "Արվեստ և հանգիստ", "Искусство и досуг"), t("Cinema, theatre and music, comparison of pictures (speaking), academic vocabulary.", "Կինո, թատրոն, երաժշտություն, նկարների համեմատություն (բանավոր), ակադեմիական բառապաշար։", "Кино, театр и музыка, сравнение картинок (говорение), академическая лексика."), [
        ["cinema-theatre", "Cinema and theatre", "Կինո և թատրոն", "Кино и театр"],
        ["comparing-pictures", "Speaking: comparing two pictures", "Բանավոր․ երկու նկարի համեմատություն", "Говорение: сравнение двух картинок"],
        ["academic-vocabulary", "Academic word list in use", "Ակադեմիական բառապաշար գործնականում", "Академическая лексика в действии"],
        ["grammar-transformations", "Grammar transformations (exam format)", "Քերականական փոխակերպումներ (քննական ձևաչափ)", "Грамматические трансформации (экзаменационный формат)"],
        ["year-11-exam-review", "Full mock exam and review", "Ամբողջական փորձնական քննություն և ամփոփում", "Полный пробный экзамен и разбор"],
      ]),
    ],
  ),

  course(
    12,
    ["Final-year course for Armenia's grade 12: intensive preparation for the unified English exam and B2 certification; advanced grammar review, text analysis, essay mastery and speaking fluency.", "Ավարտական դասընթաց Հայաստանի 12-րդ դասարանի համար․ ինտենսիվ պատրաստություն անգլերենի միասնական քննությանը և B2 հավաստագրին․ բարդ քերականության կրկնություն, տեքստի վերլուծություն, էսսե, բանավոր սահունություն։", "Выпускной курс для 12 класса Армении: интенсивная подготовка к единому экзамену по английскому и сертификации B2; повторение сложной грамматики, анализ текста, мастерство эссе, беглость речи."],
    ["Armenia grade 12 (3–4 h/week): graduation and unified entrance exam (centralised test, 20-point scale) for university admission; many pupils also take IELTS/TOEFL. The exam covers reading, grammar transformation, vocabulary, writing.", "Հայաստան, 12-րդ դասարան (3–4 ժ/շաբ.)՝ ավարտական և միասնական ընդունելության քննություն (կենտրոնացված թեստ, 20 բալ) բուհ ընդունվելու համար․ շատերը հանձնում են նաև IELTS/TOEFL։ Քննությունը ներառում է ընթերցանություն, քերականական փոխակերպումներ, բառապաշար, գիր։", "Армения, 12 класс (3–4 ч/нед.): выпускной и единый вступительный экзамен (централизованный тест, 20 баллов) для поступления в вуз; многие сдают также IELTS/TOEFL. Экзамен включает чтение, грамматические трансформации, лексику, письмо."],
    ["Russia has no grade 12. This course corresponds to the second half of Russian grade 11 (ЕГЭ preparation) and to first-year university English; it can be used as an advanced revision module.", "Ռուսաստանում 12-րդ դասարան չկա։ Այս դասընթացը համապատասխանում է ռուսական 11-րդ դասարանի երկրորդ կեսին (ЕГЭ պատրաստություն) և բուհի առաջին կուրսի անգլերենին․ կարելի է օգտագործել որպես առաջադեմ կրկնության մոդուլ։", "В России нет 12 класса. Этот курс соответствует второй половине российского 11 класса (подготовка к ЕГЭ) и английскому первого курса вуза; его можно использовать как модуль углублённого повторения."],
    { armenia: 4, russia: null },
    [
      unit(t("Grammar mastery", "Քերականության տիրապետում", "Мастерство грамматики"), t("Systematic review of tenses, conditionals, passive, reported speech and modals with exam-style transformations.", "Ժամանակների, պայմանականների, կրավորականի, անուղղակի խոսքի և մոդալների համակարգված կրկնություն քննական փոխակերպումներով։", "Систематическое повторение времён, условных, пассива, косвенной речи и модальных глаголов с экзаменационными трансформациями."), [
        ["tense-system-review", "The English tense system: full map", "Անգլերենի ժամանակների համակարգը․ ամբողջական քարտեզ", "Система времён английского: полная карта"],
        ["conditionals-wishes-review", "Conditionals, wishes and inversion", "Պայմանականներ, ցանկություններ և շրջադասություն", "Условные, желания и инверсия"],
        ["passive-causative-review", "Passive and causative structures", "Կրավորական և causative կառույցներ", "Пассив и causative-конструкции"],
        ["modals-review", "Modals in past, present and future", "Մոդալ բայեր անցյալում, ներկայում, ապառնիում", "Модальные глаголы в прошлом, настоящем и будущем"],
        ["articles-prepositions-review", "Articles and prepositions: tricky cases", "Հոդեր և նախդիրներ․ բարդ դեպքեր", "Артикли и предлоги: сложные случаи"],
      ]),
      unit(t("Vocabulary and word formation", "Բառապաշար և բառակազմություն", "Лексика и словообразование"), t("Collocations, phrasal verbs, confusable words, prefixes and suffixes for exam gap-fills.", "Բառակապակցություններ, դարձվածային բայեր, շփոթվող բառեր, նախածանցներ և վերջածանցներ։", "Коллокации, фразовые глаголы, легко путаемые слова, приставки и суффиксы для заданий на пропуски."), [
        ["collocations-advanced", "Advanced collocations", "Բարդ բառակապակցություններ", "Сложные коллокации"],
        ["phrasal-verbs-advanced", "Phrasal verbs: systematic review", "Դարձվածային բայեր․ համակարգված կրկնություն", "Фразовые глаголы: систематическое повторение"],
        ["confusable-words", "Confusable words: affect/effect, rise/raise", "Շփոթվող բառեր․ affect/effect, rise/raise", "Легко путаемые слова: affect/effect, rise/raise"],
        ["word-formation-exam", "Word formation for exam gap-fills", "Բառակազմություն քննական առաջադրանքների համար", "Словообразование для заданий на пропуски"],
      ]),
      unit(t("Reading and text analysis", "Ընթերցանություն և տեքստի վերլուծություն", "Чтение и анализ текста"), t("Skimming, scanning, inference, matching headings, multiple choice; literary and journalistic texts.", "Արագ և ուղղորդված ընթերցանություն, ենթատեքստ, վերնագրերի համապատասխանեցում, բազմընտրանք․ գրական և լրագրային տեքստեր։", "Беглое и поисковое чтение, выводы, подбор заголовков, множественный выбор; литературные и публицистические тексты."), [
        ["reading-strategies", "Reading strategies: skimming and scanning", "Ընթերցանության ռազմավարություններ", "Стратегии чтения: беглое и поисковое"],
        ["inference-tone", "Inference, tone and the writer's purpose", "Ենթատեքստ, տոն և հեղինակի նպատակ", "Выводы, тон и цель автора"],
        ["literary-extracts", "Reading literary extracts", "Գրական հատվածների ընթերցանություն", "Чтение литературных отрывков"],
        ["journalistic-texts", "Reading the press", "Մամուլ կարդալ", "Читаем прессу"],
      ]),
      unit(t("Writing and speaking for the exam", "Գիր և բանավոր խոսք քննության համար", "Письмо и говорение для экзамена"), t("Essay types, formal letters, summaries; speaking fluency, debate and presentation.", "Էսսեի տեսակներ, պաշտոնական նամակներ, ամփոփագրեր․ բանավոր սահունություն, բանավեճ և ներկայացում։", "Типы эссе, официальные письма, краткое изложение; беглость речи, дебаты и презентация."), [
        ["essay-types", "Essay types: opinion, discursive, problem–solution", "Էսսեի տեսակներ․ կարծիք, քննարկում, խնդիր–լուծում", "Типы эссе: мнение, дискурсивное, проблема–решение"],
        ["summary-writing", "Writing a summary", "Ամփոփագիր գրել", "Пишем краткое изложение"],
        ["debate-skills", "Debate: arguing a position", "Բանավեճ․ դիրքորոշման պաշտպանություն", "Дебаты: отстаиваем позицию"],
        ["presentation-skills", "Giving a presentation in English", "Ներկայացում անգլերենով", "Презентация на английском"],
        ["final-mock-exam", "Final mock exam and feedback", "Վերջնական փորձնական քննություն և վերլուծություն", "Итоговый пробный экзамен и разбор"],
      ]),
    ],
  ),
];
