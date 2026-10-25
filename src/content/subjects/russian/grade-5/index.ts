import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade5 = course(
    5,
    ["Phonetics, lexicology, word formation, morphology begins (noun, adjective, verb); syntax and punctuation basics; literature course.", "Հնչյունաբանություն, բառագիտություն, բառակազմություն, ձևաբանության սկիզբ (գոյական, ածական, բայ), շարահյուսության և կետադրության հիմունքներ, գրականություն։", "Фонетика, лексика, словообразование, начало морфологии (существительное, прилагательное, глагол); основы синтаксиса и пунктуации; курс литературы."],
    ["Armenia grade 5 (Russian 3 h/week + literature integrated): phonetics and orthoepy, vocabulary expansion, noun and adjective systems, verb aspect and tense, simple sentence, reading Russian folklore, Pushkin, Krylov, Tolstoy; dialogues on everyday topics.", "Հայաստան, 5-րդ դասարան (ռուսերեն 3 ժ/շաբ. + գրականություն)՝ հնչյունաբանություն և արտասանություն, բառապաշարի ընդլայնում, գոյականի և ածականի համակարգեր, բայի կերպ և ժամանակ, պարզ նախադասություն, ռուսական բանահյուսություն, Պուշկին, Կռիլով, Տոլստոյ, երկխոսություններ։", "Армения, 5 класс (русский 3 ч/нед. + литература): фонетика и орфоэпия, расширение словаря, системы существительного и прилагательного, вид и время глагола, простое предложение, чтение русского фольклора, Пушкина, Крылова, Толстого; диалоги на бытовые темы."],
    ["Russia grade 5 (ФГОС ООО, Russian 5 h + Literature 3 h): syntax and punctuation (phrase, simple and complex sentence, direct speech), phonetics and graphics, lexicology, morphemics and spelling, morphology (noun, adjective, verb). Literature: folklore, Old Russian literature, Krylov, Pushkin, Lermontov, Gogol, Turgenev, Tolstoy, Chekhov, 20th-century prose.", "Ռուսաստան, 5-րդ դասարան (ФГОС ООО, ռուսերեն 5 ժ + գրականություն 3 ժ)՝ շարահյուսություն և կետադրություն, հնչյունաբանություն և գրաֆիկա, բառագիտություն, ձևույթաբանություն և ուղղագրություն, ձևաբանություն (գոյական, ածական, բայ)։ Գրականություն՝ բանահյուսություն, հին ռուս գրականություն, Կռիլով, Պուշկին, Լերմոնտով, Գոգոլ, Տուրգենև, Տոլստոյ, Չեխով, 20-րդ դարի արձակ։", "Россия, 5 класс (ФГОС ООО, русский 5 ч + литература 3 ч): синтаксис и пунктуация (словосочетание, простое и сложное предложение, прямая речь), фонетика и графика, лексика, морфемика и орфография, морфология (существительное, прилагательное, глагол). Литература: фольклор, древнерусская литература, Крылов, Пушкин, Лермонтов, Гоголь, Тургенев, Толстой, Чехов, проза XX века."],
    { armenia: 3, russia: 5 },
  [unit1, unit2, unit3, unit4, unit5],
);
