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
import { englishGrade10 } from "./grade-10";
import { englishGrade11 } from "./grade-11";

export const english: CourseSeed[] = [
  englishGrade2,
  englishGrade3,
  englishGrade4,

  englishGrade5,

  englishGrade6,

  englishGrade7,

  englishGrade8,

  englishGrade9,
  englishGrade10,
  englishGrade11,

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
