import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const russianGrade6 = course(
    6,
    ["Morphology continued: noun and adjective spelling, numeral, pronoun, verb moods; lexicology (borrowings, phraseology); literature.", "Ձևաբանության շարունակություն՝ գոյականի և ածականի ուղղագրություն, թվական, դերանուն, բայի եղանակներ, բառագիտություն (փոխառություններ, դարձվածքներ), գրականություն։", "Продолжение морфологии: правописание существительных и прилагательных, числительное, местоимение, наклонения глагола; лексика (заимствования, фразеология); литература."],
    ["Armenia grade 6 (3 h/week): numerals and their declension, pronouns of all classes, verb moods, participles introduced, vocabulary topics (culture, science, sport), reading Pushkin, Lermontov, Turgenev, Chekhov, Prishvin; speaking and writing on cross-cultural topics.", "Հայաստան, 6-րդ դասարան (3 ժ/շաբ.)՝ թվականներ և դրանց հոլովում, բոլոր տեսակի դերանուններ, բայի եղանակներ, դերբայների ներմուծում, բառապաշարի թեմաներ (մշակույթ, գիտություն, սպորտ), Պուշկին, Լերմոնտով, Տուրգենև, Չեխով, Պրիշվին, միջմշակութային թեմաներով խոսք և գրություն։", "Армения, 6 класс (3 ч/нед.): числительные и их склонение, местоимения всех разрядов, наклонения глагола, введение причастий, лексические темы (культура, наука, спорт), чтение Пушкина, Лермонтова, Тургенева, Чехова, Пришвина; устная и письменная речь на межкультурные темы."],
    ["Russia grade 6 (ФГОС ООО, Russian 6 h + Literature 3 h): lexicology and phraseology, word formation, noun (indeclinable, common gender, не), adjective (degrees, не, н/нн, -к-/-ск-, compound adjectives), numeral, pronoun, verb (moods, transitivity, reflexive, impersonal). Literature: Pushkin's «Дубровский», Lermontov, Turgenev's «Бежин луг», Tolstoy, Leskov, Chekhov, Grin, Platonov, Rasputin, Astafiev.", "Ռուսաստան, 6-րդ դասարան (ФГОС ООО, ռուսերեն 6 ժ + գրականություն 3 ժ)՝ բառագիտություն և դարձվածաբանություն, բառակազմություն, գոյական, ածական (աստիճաններ, не, н/нн, -к-/-ск-, բարդ ածականներ), թվական, դերանուն, բայ (եղանակներ, անցողականություն, անդրադարձ, անդեմ)։ Գրականություն՝ Պուշկինի «Дубровский», Լերմոնտով, Տուրգենևի «Бежин луг», Տոլստոյ, Լեսկով, Չեխով, Գրին, Պլատոնով, Ռասպուտին, Աստաֆև։", "Россия, 6 класс (ФГОС ООО, русский 6 ч + литература 3 ч): лексика и фразеология, словообразование, существительное (несклоняемые, общий род, не), прилагательное (степени, не, н/нн, -к-/-ск-, сложные), числительное, местоимение, глагол (наклонения, переходность, возвратные, безличные). Литература: «Дубровский» Пушкина, Лермонтов, «Бежин луг» Тургенева, Толстой, Лесков, Чехов, Грин, Платонов, Распутин, Астафьев."],
    { armenia: 3, russia: 6 },
  [unit1, unit2, unit3, unit4, unit5],
);
