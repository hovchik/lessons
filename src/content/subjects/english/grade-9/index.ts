import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade9 = course(
    9,
    ["Exam-level B1 preparation: all tenses, third conditional, mixed conditionals, passive in all tenses, reported speech review, essay writing; topics: celebrations, art, careers, global issues.", "B1 քննական պատրաստություն․ բոլոր ժամանակները, 3-րդ պայմանական, խառը պայմանականներ, կրավորական բոլոր ժամանակներում, անուղղակի խոսքի կրկնություն, էսսե․ թեմաներ՝ տոներ, արվեստ, կարիերա, գլոբալ խնդիրներ։", "Подготовка к уровню B1 и экзамену: все времена, третий тип условных, смешанные условные, пассив во всех временах, повторение косвенной речи, эссе; темы: праздники, искусство, карьера, глобальные проблемы."],
    ["Armenia grade 9 (3 h/week): end of basic school; the grade-9 state exam (20-point) can include a foreign language. Expected level A2+/B1: reading authentic texts, writing an essay/letter of 100–120 words, 2-minute monologue.", "Հայաստան, 9-րդ դասարան (3 ժ/շաբ.)՝ հիմնական դպրոցի ավարտ․ 9-րդ դասարանի ավարտական քննությունը (20 բալ) կարող է ներառել օտար լեզու։ Սպասվող մակարդակ A2+/B1․ բնագիր տեքստեր, 100–120 բառանոց էսսե/նամակ, 2-րոպեանոց մենախոսություն։", "Армения, 9 класс (3 ч/нед.): завершение основной школы; выпускной экзамен 9 класса (20 баллов) может включать иностранный язык. Ожидаемый уровень A2+/B1: чтение аутентичных текстов, эссе/письмо 100–120 слов, монолог 2 минуты."],
    ["Russia grade 9 (3 h/week): ОГЭ по английскому (optional, A2+/B1) — listening, reading, grammar/vocabulary (word formation), personal letter 100–120 words, speaking (reading aloud, questions, monologue). Grammar: third conditional, passive all tenses, reported speech, causative (intro).", "Ռուսաստան, 9-րդ դասարան (3 ժ/շաբ.)՝ ОГЭ անգլերեն (ընտրովի, A2+/B1)․ լսել, կարդալ, քերականություն/բառակազմություն, անձնական նամակ 100–120 բառ, բանավոր։ Քերականություն՝ 3-րդ պայմանական, կրավորական բոլոր ժամանակներում, անուղղակի խոսք։", "Россия, 9 класс (3 ч/нед.): ОГЭ по английскому (по выбору, A2+/B1) — аудирование, чтение, грамматика и лексика (словообразование), личное письмо 100–120 слов, говорение. Грамматика: третий тип условных, пассив во всех временах, косвенная речь, causative (введение)."],
    { armenia: 3, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
