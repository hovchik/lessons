import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade8 = course(
    8,
    ["Past perfect, second conditional, reported speech, modals of deduction, gerunds and infinitives; topics: communication, nature, science, jobs.", "Past perfect, երկրորդ պայմանական, անուղղակի խոսք, մոդալ բայեր ենթադրության համար, գերունդ և ինֆինիտիվ․ թեմաներ՝ հաղորդակցություն, բնություն, գիտություն, մասնագիտություններ։", "Past perfect, второй тип условных, косвенная речь, модальные глаголы предположения, герундий и инфинитив; темы: общение, природа, наука, профессии."],
    ["Armenia grade 8 (3 h/week): A2+; topics: communication and social media, Armenian nature and ecology, science and inventions, choosing a profession; grammar: past perfect, reported speech, second conditional, gerund/infinitive.", "Հայաստան, 8-րդ դասարան (3 ժ/շաբ.)՝ A2+․ թեմաներ՝ հաղորդակցություն և սոցիալական մեդիա, Հայաստանի բնություն և էկոլոգիա, գիտություն և գյուտեր, մասնագիտության ընտրություն․ քերականություն՝ past perfect, անուղղակի խոսք, 2-րդ պայմանական, գերունդ/ինֆինիտիվ։", "Армения, 8 класс (3 ч/нед.): A2+; темы — общение и соцсети, природа и экология Армении, наука и изобретения, выбор профессии; грамматика — past perfect, косвенная речь, второй тип условных, герундий/инфинитив."],
    ["Russia grade 8 (3 h/week): past perfect, past perfect continuous (intro), second conditional, reported statements and questions, modals of deduction (must/may/can't), gerund vs infinitive, -ing forms after prepositions, question tags, socialising, food and shopping, great minds, nature.", "Ռուսաստան, 8-րդ դասարան (3 ժ/շաբ.)՝ past perfect, past perfect continuous (ներածություն), 2-րդ պայմանական, անուղղակի խոսք, must/may/can't ենթադրություն, գերունդ vs ինֆինիտիվ, question tags, շփում, սնունդ և գնումներ, մեծ մտքեր, բնություն։", "Россия, 8 класс (3 ч/нед.): past perfect, past perfect continuous (введение), второй тип условных, косвенная речь (утверждения и вопросы), модальные предположения must/may/can't, герундий и инфинитив, разделительные вопросы, общение, еда и покупки, великие умы, природа."],
    { armenia: 3, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
