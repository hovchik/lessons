import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade12 = course(
    12,
    ["Final-year course for Armenia's grade 12: intensive preparation for the unified English exam and B2 certification; advanced grammar review, text analysis, essay mastery and speaking fluency.", "Ավարտական դասընթաց Հայաստանի 12-րդ դասարանի համար․ ինտենսիվ պատրաստություն անգլերենի միասնական քննությանը և B2 հավաստագրին․ բարդ քերականության կրկնություն, տեքստի վերլուծություն, էսսե, բանավոր սահունություն։", "Выпускной курс для 12 класса Армении: интенсивная подготовка к единому экзамену по английскому и сертификации B2; повторение сложной грамматики, анализ текста, мастерство эссе, беглость речи."],
    ["Armenia grade 12 (3–4 h/week): graduation and unified entrance exam (centralised test, 20-point scale) for university admission; many pupils also take IELTS/TOEFL. The exam covers reading, grammar transformation, vocabulary, writing.", "Հայաստան, 12-րդ դասարան (3–4 ժ/շաբ.)՝ ավարտական և միասնական ընդունելության քննություն (կենտրոնացված թեստ, 20 բալ) բուհ ընդունվելու համար․ շատերը հանձնում են նաև IELTS/TOEFL։ Քննությունը ներառում է ընթերցանություն, քերականական փոխակերպումներ, բառապաշար, գիր։", "Армения, 12 класс (3–4 ч/нед.): выпускной и единый вступительный экзамен (централизованный тест, 20 баллов) для поступления в вуз; многие сдают также IELTS/TOEFL. Экзамен включает чтение, грамматические трансформации, лексику, письмо."],
    ["Russia has no grade 12. This course corresponds to the second half of Russian grade 11 (ЕГЭ preparation) and to first-year university English; it can be used as an advanced revision module.", "Ռուսաստանում 12-րդ դասարան չկա։ Այս դասընթացը համապատասխանում է ռուսական 11-րդ դասարանի երկրորդ կեսին (ЕГЭ պատրաստություն) և բուհի առաջին կուրսի անգլերենին․ կարելի է օգտագործել որպես առաջադեմ կրկնության մոդուլ։", "В России нет 12 класса. Этот курс соответствует второй половине российского 11 класса (подготовка к ЕГЭ) и английскому первого курса вуза; его можно использовать как модуль углублённого повторения."],
    { armenia: 4, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
