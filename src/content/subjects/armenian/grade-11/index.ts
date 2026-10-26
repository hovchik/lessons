import { course, ruNote } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const armenianGrade11 = course(
    11,
    ["Morphology and syntax at an advanced level, speech culture; literature of the 19th century and the first half of the 20th.", "Ձևաբանություն և շարահյուսություն խորացված, խոսքի մշակույթ, 19-րդ դարի և 20-րդ դարի առաջին կեսի գրականություն։", "Морфология и синтаксис на углублённом уровне, культура речи; литература XIX века и первой половины XX."],
    ["Armenia grade 11 («Հայոց լեզու» 2 h + «Հայ գրականություն» 2–3 h): grammatical system review, difficult cases of morphology, syntax of the complex sentence and text, speech culture and norms, public speaking. Literature: Abovyan, Nalbandian, Raffi, Proshyan, Shirvanzade, Sundukyan, Tumanyan, Isahakyan, Teryan, Varuzhan, Siamanto, Metsarents, Charents, Bakunts, Totovents, Zoryan.", "Հայաստան, 11-րդ դասարան («Հայոց լեզու» 2 ժ + «Հայ գրականություն» 2–3 ժ)՝ քերականական համակարգի ամփոփում, ձևաբանության բարդ դեպքեր, բարդ նախադասության և տեքստի շարահյուսություն, խոսքի մշակույթ և նորմեր, հրապարակային խոսք։ Գրականություն՝ Աբովյան, Նալբանդյան, Րաֆֆի, Պռոշյան, Շիրվանզադե, Սունդուկյան, Թումանյան, Իսահակյան, Տերյան, Վարուժան, Սիամանթո, Մեծարենց, Չարենց, Բակունց, Թոթովենց, Զորյան։", "Армения, 11 класс («Армянский язык» 2 ч + «Армянская литература» 2–3 ч): обзор грамматической системы, трудные случаи морфологии, синтаксис сложного предложения и текста, культура речи и нормы, публичная речь. Литература: Абовян, Налбандян, Раффи, Прошян, Ширванзаде, Сундукян, Туманян, Исаакян, Терьян, Варужан, Сиаманто, Мецаренц, Чаренц, Бакунц, Тотовенц, Зорян."],
    ruNote,
    { armenia: 4, russia: null },
  [unit1, unit2, unit3, unit4, unit5],
);
