import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade1: CourseSeed = {
  subject: "drawing",
  grade: 1,
  ...g(1),
    description: t("First steps in art: lines, shapes, primary colours, drawing from imagination and nature, paper crafts.", "Արվեստի առաջին քայլերը՝ գծեր, ձևեր, հիմնական գույներ, նկարել երևակայությամբ և բնությունից, թղթե աշխատանքներ։", "Первые шаги в искусстве: линии, формы, основные цвета, рисование по воображению и с натуры, работа с бумагой."),
    curriculumNotes: notes(
      ["Armenia grade 1, «Կերպարվեստ» (1 h/week): acquaintance with art materials, line and spot, basic shapes, three primary colours and mixing, warm and cold colours, drawing from observation and imagination, appliqué, Armenian ornaments and folk motifs.", "Հայաստան, 1-ին դասարան, «Կերպարվեստ» (1 ժ/շաբ.)՝ ծանոթություն նյութերին, գիծ և բիծ, հիմնական ձևեր, երեք հիմնական գույն և դրանց խառնում, տաք և սառը գույներ, նկարել դիտումով և երևակայությամբ, ապլիկացիա, հայկական զարդանախշեր և ժողովրդական մոտիվներ։", "Армения, 1 класс, «Կերպարվեստ» (1 ч/нед.): знакомство с материалами, линия и пятно, основные формы, три основных цвета и смешение, тёплые и холодные цвета, рисование с натуры и по воображению, аппликация, армянские орнаменты и народные мотивы."],
      ["Russia grade 1, ИЗО (ФГОС НОО, 1 h/week, 33 h; Неменский programme «Ты изображаешь, украшаешь, строишь»): the three 'Master Brothers' — depicting, decorating, constructing; spot, line, colour, volume; nature as a source of forms.", "Ռուսաստան, 1-ին դասարան, ИЗО (ФГОС НОО, 1 ժ/շաբ., 33 ժ, Նեմենսկու ծրագիր)՝ երեք «վարպետ եղբայրները»՝ պատկերել, զարդարել, կառուցել, բիծ, գիծ, գույն, ծավալ, բնությունը որպես ձևերի աղբյուր։", "Россия, 1 класс, ИЗО (ФГОС НОО, 1 ч/нед., 33 ч; программа Неменского «Ты изображаешь, украшаешь, строишь»): три «Брата-Мастера» — изображение, украшение, постройка; пятно, линия, цвет, объём; природа как источник форм."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
