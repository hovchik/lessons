import { course } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";
import { unit6 } from "./unit-6";

export const russianGrade10 = course(
    10,
    ["Language as a system: phonetics, lexicology, morphemics, morphology and orthography review at an advanced level; literature of the 19th century.", "Լեզուն որպես համակարգ՝ հնչյունաբանություն, բառագիտություն, ձևույթաբանություն, ձևաբանություն և ուղղագրություն խորացված, 19-րդ դարի գրականություն։", "Язык как система: фонетика, лексика, морфемика, морфология и орфография на углублённом уровне; литература XIX века."],
    ["Armenia grade 10 (2 h/week): Russian for academic and professional purposes, orthography review, stylistics, text analysis; literature: Pushkin, Lermontov, Gogol, Ostrovsky, Turgenev's «Отцы и дети», Tolstoy's «Война и мир» (excerpts), Dostoevsky.", "Հայաստան, 10-րդ դասարան (2 ժ/շաբ.)՝ ռուսերեն ակադեմիական և մասնագիտական նպատակներով, ուղղագրության ամփոփում, ոճաբանություն, տեքստի վերլուծություն, գրականություն՝ Պուշկին, Լերմոնտով, Գոգոլ, Օստրովսկի, Տուրգենևի «Отцы и дети», Տոլստոյի «Война и мир» (հատվածներ), Դոստոևսկի։", "Армения, 10 класс (2 ч/нед.): русский для академических и профессиональных целей, повторение орфографии, стилистика, анализ текста; литература: Пушкин, Лермонтов, Гоголь, Островский, «Отцы и дети» Тургенева, «Война и мир» Толстого (отрывки), Достоевский."],
    ["Russia grade 10 (ФГОС СОО, Russian 1–3 h + Literature 3 h): language and society, phonetics and orthoepy, lexicology and phraseology, morphemics and word formation, morphology and orthography (systematic review). Literature: Pushkin, Lermontov, Gogol, Ostrovsky's «Гроза», Goncharov's «Обломов», Turgenev's «Отцы и дети», Nekrasov, Tyutchev, Fet, Saltykov-Shchedrin, Dostoevsky's «Преступление и наказание», Tolstoy's «Война и мир», Chekhov.", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, ռուսերեն 1–3 ժ + գրականություն 3 ժ)՝ լեզու և հասարակություն, հնչյունաբանություն և արտասանություն, բառագիտություն և դարձվածաբանություն, ձևույթաբանություն և բառակազմություն, ձևաբանություն և ուղղագրություն։ Գրականություն՝ Պուշկին, Լերմոնտով, Գոգոլ, Օստրովսկու «Гроза», Գոնչարովի «Обломов», Տուրգենևի «Отцы и дети», Նեկրասով, Տյուտչև, Ֆետ, Սալտիկով-Շչեդրին, Դոստոևսկու «Преступление и наказание», Տոլստոյի «Война и мир», Չեխով։", "Россия, 10 класс (ФГОС СОО, русский 1–3 ч + литература 3 ч): язык и общество, фонетика и орфоэпия, лексика и фразеология, морфемика и словообразование, морфология и орфография (системное повторение). Литература: Пушкин, Лермонтов, Гоголь, «Гроза» Островского, «Обломов» Гончарова, «Отцы и дети» Тургенева, Некрасов, Тютчев, Фет, Салтыков-Щедрин, «Преступление и наказание» Достоевского, «Война и мир» Толстого, Чехов."],
    { armenia: 2, russia: 2 },
  [unit1, unit2, unit3, unit4, unit5, unit6],
);
