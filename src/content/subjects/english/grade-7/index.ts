import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const englishGrade7 = course(
    7,
    ["Conditionals (zero and first), relative clauses, passive voice (intro), reported requests, technology, media, sport and ambitions.", "Պայմանական նախադասություններ (0 և 1), հարաբերական նախադասություններ, կրավորական սեռ (ներածություն), տեխնոլոգիաներ, մեդիա, սպորտ, նպատակներ։", "Условные предложения (0 и 1 типа), относительные придаточные, пассивный залог (введение), технологии, медиа, спорт, цели."],
    ["Armenia grade 7 (3 h/week): A2 development; topics: technology and the internet, sports and the Olympic movement, Armenian culture and famous Armenians; grammar: first conditional, relative clauses, passive (present/past), used to.", "Հայաստան, 7-րդ դասարան (3 ժ/շաբ.)՝ A2-ի զարգացում․ թեմաներ՝ տեխնոլոգիաներ և համացանց, սպորտ և օլիմպիական շարժում, հայ մշակույթ և հայտնի հայեր․ քերականություն՝ 1-ին պայմանական, հարաբերական նախադասություններ, կրավորական, used to։", "Армения, 7 класс (3 ч/нед.): развитие A2; темы — технологии и интернет, спорт и олимпийское движение, армянская культура и знаменитые армяне; грамматика — первый тип условных, относительные придаточные, пассив (present/past), used to."],
    ["Russia grade 7 (3 h/week): present perfect continuous (intro), conditionals 0/1, relative pronouns who/which/that, passive voice present/past, used to, -ing/-ed adjectives, phrasal verbs, mass media, sport, friendship, ecology.", "Ռուսաստան, 7-րդ դասարան (3 ժ/շաբ.)՝ present perfect continuous (ներածություն), պայմանական 0/1, who/which/that, կրավորական present/past, used to, -ing/-ed ածականներ, դարձվածային բայեր, մեդիա, սպորտ, բարեկամություն, էկոլոգիա։", "Россия, 7 класс (3 ч/нед.): present perfect continuous (введение), условные 0/1, относительные местоимения who/which/that, пассив present/past, used to, прилагательные на -ing/-ed, фразовые глаголы, СМИ, спорт, дружба, экология."],
    { armenia: 3, russia: 3 },
  [unit1, unit2, unit3, unit4, unit5],
);
