import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const astronomyGrade11: CourseSeed = {
  subject: "astronomy",
  grade: 11,
  title: t("Astronomy · Grade 11", "Աստղագիտություն · 11-րդ դասարան", "Астрономия · 11 класс"),
  description: t(
    "The first year of astronomy: what astronomy studies and its tools, the starry sky and its motions, time and the calendar, the laws of planetary motion and spaceflight, and the planets and small bodies of the Solar system.",
    "Աստղագիտության առաջին տարին․ ինչ է ուսումնասիրում աստղագիտությունը և նրա գործիքները, աստղազարդ երկինքը և նրա շարժումները, ժամանակը և օրացույցը, մոլորակների շարժման օրենքները և տիեզերական թռիչքները, Արեգակնային համակարգի մոլորակներն ու փոքր մարմինները։",
    "Первый год астрономии: что изучает астрономия и её инструменты, звёздное небо и его движения, время и календарь, законы движения планет и космические полёты, планеты и малые тела Солнечной системы.",
  ),
  curriculumNotes: notes(
    [
      "Armenia: no separate astronomy subject. The sky, the Solar system and gravitation are taught in natural science 5–6, geography 6 and physics 9 and 12; this course gathers them into one course (about 1 h/week), useful as an elective or for olympiads.",
      "Հայաստան․ աստղագիտությունն առանձին առարկա չէ։ Երկինքը, Արեգակնային համակարգը և ձգողությունը դասավանդվում են 5–6-րդ դասարանների բնագիտության, 6-րդ դասարանի աշխարհագրության և 9-րդ ու 12-րդ դասարանների ֆիզիկայի դասընթացներում․ այս դասընթացը դրանք միավորում է մեկ դասընթացում (մոտ 1 ժ/շաբ.)՝ օգտակար որպես կամընտրական կամ օլիմպիադաների համար։",
      "Армения: отдельного предмета «астрономия» нет. Небо, Солнечная система и тяготение изучаются в естествознании 5–6 классов, географии 6 класса и физике 9 и 12 классов; этот курс собирает их в один курс (около 1 ч/нед.), полезный как факультатив или для олимпиад.",
    ],
    [
      "Russia: astronomy became a compulsory 35-hour course in grades 10–11 in 2017 (1 h/week); the updated ФГОС СОО moves its content into physics, but many schools still teach it separately. App grade 11 matches Russian grade 10: the sky, time, celestial mechanics and the Solar system.",
      "Ռուսաստան․ 2017 թվականից աստղագիտությունը 10–11-րդ դասարաններում դարձավ 35 ժամանոց պարտադիր դասընթաց (1 ժ/շաբ.), թարմացված ФГОС СОО-ն դրա բովանդակությունը տեղափոխում է ֆիզիկայի մեջ, բայց շատ դպրոցներ այն դեռ առանձին են դասավանդում։ Հավելվածի 11-րդ դասարանը համապատասխանում է ռուսական 10-րդ դասարանին․ երկինք, ժամանակ, երկնային մեխանիկա և Արեգակնային համակարգ։",
      "Россия: с 2017 года астрономия стала обязательным курсом в 10–11 классах объёмом 35 часов (1 ч/нед.); обновлённый ФГОС СОО переносит её содержание в физику, но многие школы по-прежнему ведут её отдельно. 11 класс приложения соответствует российскому 10 классу: небо, время, небесная механика и Солнечная система.",
    ],
  ),
  hoursPerWeek: { armenia: null, russia: 1 },
  units: [unit1, unit2, unit3, unit4],
};
