import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";

export const armenianGrade12 = course(
    12,
    ["Review of the language course for the unified exam; literature of the second half of the 20th century and today; essay writing.", "Լեզվի դասընթացի ամփոփում միասնական քննության համար, 20-րդ դարի երկրորդ կեսի և մեր օրերի գրականություն, շարադրություն։", "Повторение курса языка к единому экзамену; литература второй половины XX века и современность; написание эссе."],
    ["Armenia grade 12 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h): systematic review of orthography, morphology, syntax and punctuation in the format of the unified exam test; literature: Shiraz, Sevak, Kaputikyan, Emin, Sahyan, Mahari, Matevosyan, Dovlatyan, Khanzadyan, Vahagn Davtyan, contemporary authors; essay.", "Հայաստան, 12-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ ուղղագրության, ձևաբանության, շարահյուսության և կետադրության համակարգված ամփոփում միասնական քննության թեստի ձևաչափով, գրականություն՝ Շիրազ, Սևակ, Կապուտիկյան, Էմին, Սահյան, Մահարի, Մաթևոսյան, Դովլաթյան, Խանզադյան, Վահագն Դավթյան, ժամանակակից հեղինակներ, շարադրություն։", "Армения, 12 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): системное повторение орфографии, морфологии, синтаксиса и пунктуации в формате теста единого экзамена; литература: Шираз, Севак, Капутикян, Эмин, Саян, Маари, Матевосян, Довлатян, Ханзадян, Ваагн Давтян, современные авторы; эссе."],
    ruNote,
    { armenia: 4, russia: null },
  [unit1, unit2, unit3, unit4],
);
