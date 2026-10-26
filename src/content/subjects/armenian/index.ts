import { t, unit, type CourseSeed } from "../../types";
import { course, ruNote } from "./shared";
import { armenianGrade1 } from "./grade-1";
import { armenianGrade2 } from "./grade-2";
import { armenianGrade3 } from "./grade-3";
import { armenianGrade4 } from "./grade-4";
import { armenianGrade5 } from "./grade-5";
import { armenianGrade6 } from "./grade-6";
import { armenianGrade7 } from "./grade-7";
import { armenianGrade8 } from "./grade-8";
import { armenianGrade9 } from "./grade-9";
import { armenianGrade10 } from "./grade-10";
import { armenianGrade11 } from "./grade-11";

export const armenian: CourseSeed[] = [
  armenianGrade1,
  armenianGrade2,
  armenianGrade3,
  armenianGrade4,
  armenianGrade5,
  armenianGrade6,
  armenianGrade7,
  armenianGrade8,

  armenianGrade9,

  armenianGrade10,
  armenianGrade11,
  course(
    12,
    ["Review of the language course for the unified exam; literature of the second half of the 20th century and today; essay writing.", "Լեզվի դասընթացի ամփոփում միասնական քննության համար, 20-րդ դարի երկրորդ կեսի և մեր օրերի գրականություն, շարադրություն։", "Повторение курса языка к единому экзамену; литература второй половины XX века и современность; написание эссе."],
    ["Armenia grade 12 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h): systematic review of orthography, morphology, syntax and punctuation in the format of the unified exam test; literature: Shiraz, Sevak, Kaputikyan, Emin, Sahyan, Mahari, Matevosyan, Dovlatyan, Khanzadyan, Vahagn Davtyan, contemporary authors; essay.", "Հայաստան, 12-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ ուղղագրության, ձևաբանության, շարահյուսության և կետադրության համակարգված ամփոփում միասնական քննության թեստի ձևաչափով, գրականություն՝ Շիրազ, Սևակ, Կապուտիկյան, Էմին, Սահյան, Մահարի, Մաթևոսյան, Դովլաթյան, Խանզադյան, Վահագն Դավթյան, ժամանակակից հեղինակներ, շարադրություն։", "Армения, 12 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): системное повторение орфографии, морфологии, синтаксиса и пунктуации в формате теста единого экзамена; литература: Шираз, Севак, Капутикян, Эмин, Саян, Маари, Матевосян, Довлатян, Ханзадян, Ваагн Давтян, современные авторы; эссе."],
    ruNote,
    { armenia: 4, russia: null },
    [
      unit(t("Exam review: orthography and lexicology", "Քննական ամփոփում․ ուղղագրություն և բառագիտություն", "Повторение к экзамену: орфография и лексикология"), t("Test-format drills on spelling, word meaning, phraseology.", "Թեստային վարժանքներ ուղղագրության, բառիմաստի, դարձվածքների վրա։", "Тренировка в тестовом формате: правописание, значение слова, фразеология."), [
        ["review-orthography", "Orthography: the hardest rules", "Ուղղագրություն․ ամենադժվար կանոնները", "Орфография: самые трудные правила"],
        ["review-lexicology", "Lexicology and phraseology in tests", "Բառագիտություն և դարձվածաբանություն թեստերում", "Лексикология и фразеология в тестах"],
        ["review-word-formation", "Word formation in tests", "Բառակազմությունը թեստերում", "Словообразование в тестах"],
      ]),
      unit(t("Exam review: grammar", "Քննական ամփոփում․ քերականություն", "Повторение к экзамену: грамматика"), t("Morphology, syntax and punctuation in test format.", "Ձևաբանություն, շարահյուսություն և կետադրություն թեստային ձևաչափով։", "Морфология, синтаксис и пунктуация в тестовом формате."), [
        ["review-morphology", "Morphology: parts of speech and forms", "Ձևաբանություն․ խոսքի մասեր և ձևեր", "Морфология: части речи и формы"],
        ["review-syntax", "Syntax: sentence analysis", "Շարահյուսություն․ նախադասության վերլուծություն", "Синтаксис: разбор предложения"],
        ["review-punctuation", "Punctuation: all rules", "Կետադրություն․ բոլոր կանոնները", "Пунктуация: все правила"],
        ["armenian-mock-test", "Mock unified exam test", "Միասնական քննության փորձնական թեստ", "Пробный тест единого экзамена"],
      ]),
      unit(t("Literature: 1950s–1980s", "Գրականություն․ 1950–1980-ականներ", "Литература: 1950–1980-е"), t("Shiraz, Sevak, Kaputikyan, Emin, Sahyan, Mahari, Khanzadyan, Matevosyan.", "Շիրազ, Սևակ, Կապուտիկյան, Էմին, Սահյան, Մահարի, Խանզադյան, Մաթևոսյան։", "Шираз, Севак, Капутикян, Эмин, Саян, Маари, Ханзадян, Матевосян."), [
        ["shiraz-12", "Hovhannes Shiraz: «Հայոց դանթեականը»", "Հովհաննես Շիրազ․ «Հայոց դանթեականը»", "Ованес Шираз: «Армянская Дантеада»"],
        ["sevak-12", "Paruyr Sevak: «Եղիցի լույս», «Մարդը ափի մեջ»", "Պարույր Սևակ․ «Եղիցի լույս», «Մարդը ափի մեջ»", "Паруйр Севак: «Да будет свет», «Человек на ладони»"],
        ["kaputikyan-emin-sahyan", "Kaputikyan, Emin, Sahyan", "Կապուտիկյան, Էմին, Սահյան", "Капутикян, Эмин, Саян"],
        ["mahari-12", "Gurgen Mahari: «Ayrvogh aygestanner»", "Գուրգեն Մահարի․ «Այրվող այգեստաններ»", "Гурген Маари: «Горящие сады»"],
        ["matevosyan-12", "Hrant Matevosyan: «Մենք ենք, մեր սարերը»", "Հրանտ Մաթևոսյան․ «Մենք ենք, մեր սարերը»", "Грант Матевосян: «Мы и наши горы»"],
      ]),
      unit(t("Literature: contemporary and essay", "Գրականություն․ ժամանակակից և շարադրություն", "Литература: современность и эссе"), t("Vahagn Davtyan, Razmik Davoyan, Levon Khechoyan, contemporary prose; the literary essay.", "Վահագն Դավթյան, Ռազմիկ Դավոյան, Լևոն Խեչոյան, ժամանակակից արձակ, գրական շարադրություն։", "Ваагн Давтян, Размик Давоян, Левон Хечоян, современная проза; литературное эссе."), [
        ["davtyan-davoyan", "Vahagn Davtyan and Razmik Davoyan", "Վահագն Դավթյան և Ռազմիկ Դավոյան", "Ваагн Давтян и Размик Давоян"],
        ["khechoyan-contemporary", "Levon Khechoyan and contemporary prose", "Լևոն Խեչոյան և ժամանակակից արձակ", "Левон Хечоян и современная проза"],
        ["diaspora-literature", "Diaspora literature: Shahnour, Saroyan, Zahrad", "Սփյուռքի գրականություն․ Շահնուր, Սարոյան, Զահրատ", "Литература диаспоры: Шахнур, Сароян, Захрад"],
        ["literary-essay", "Writing the literary essay", "Գրական շարադրություն գրելը", "Пишем литературное эссе"],
        ["literature-exam-prep", "Literature exam preparation", "Գրականության քննության նախապատրաստություն", "Подготовка к экзамену по литературе"],
      ]),
    ],
  ),
];

