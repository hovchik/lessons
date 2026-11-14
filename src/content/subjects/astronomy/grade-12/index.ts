import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const astronomyGrade12: CourseSeed = {
  subject: "astronomy",
  grade: 12,
  title: t("Astronomy · Grade 12", "Աստղագիտություն · 12-րդ դասարան", "Астрономия · 12 класс"),
  description: t(
    "The second year of astronomy: light and spectra, the Sun and its activity, the distances, properties and lives of stars, our Galaxy and other galaxies, the expanding Universe and the Big Bang, exoplanets and the search for life.",
    "Աստղագիտության երկրորդ տարին․ լույս և սպեկտրներ, Արեգակը և նրա ակտիվությունը, աստղերի հեռավորությունները, հատկությունները և կյանքը, մեր Գալակտիկան և այլ գալակտիկաներ, ընդարձակվող Տիեզերքը և Մեծ պայթյունը, էկզոմոլորակներ և կյանքի որոնում։",
    "Второй год астрономии: свет и спектры, Солнце и его активность, расстояния, свойства и жизнь звёзд, наша Галактика и другие галактики, расширяющаяся Вселенная и Большой взрыв, экзопланеты и поиск жизни.",
  ),
  curriculumNotes: notes(
    [
      "Armenia: no separate astronomy subject; grade 12 physics has a short astrophysics unit (the Sun, stars, galaxies, cosmology). This course covers that unit in depth and adds stellar distances, variable stars, active galaxies and exoplanets (about 1 h/week).",
      "Հայաստան․ աստղագիտությունն առանձին առարկա չէ, 12-րդ դասարանի ֆիզիկան ունի աստղաֆիզիկայի կարճ բաժին (Արեգակ, աստղեր, գալակտիկաներ, կոսմոլոգիա)։ Այս դասընթացը խորությամբ ներկայացնում է այդ բաժինը և ավելացնում աստղերի հեռավորությունները, փոփոխական աստղերը, ակտիվ գալակտիկաները և էկզոմոլորակները (մոտ 1 ժ/շաբ.)։",
      "Армения: отдельного предмета «астрономия» нет; в физике 12 класса есть короткий раздел астрофизики (Солнце, звёзды, галактики, космология). Этот курс подробно раскрывает его и добавляет расстояния до звёзд, переменные звёзды, активные галактики и экзопланеты (около 1 ч/нед.).",
    ],
    [
      "Russia: matches the second half of the grade 10–11 astronomy course (Sun and stars, our Galaxy, galaxies and cosmology, life in the Universe), now taught within physics under the updated ФГОС СОО. App grade 12 corresponds to Russian grade 11.",
      "Ռուսաստան․ համապատասխանում է 10–11-րդ դասարանների աստղագիտության դասընթացի երկրորդ կեսին (Արեգակ և աստղեր, մեր Գալակտիկան, գալակտիկաներ և կոսմոլոգիա, կյանքը Տիեզերքում), որն այժմ դասավանդվում է ֆիզիկայի կազմում՝ թարմացված ФГОС СОО-ով։ Հավելվածի 12-րդ դասարանը համապատասխանում է ռուսական 11-րդ դասարանին։",
      "Россия: соответствует второй половине курса астрономии 10–11 классов (Солнце и звёзды, наша Галактика, галактики и космология, жизнь во Вселенной), который по обновлённому ФГОС СОО теперь изучается в составе физики. 12 класс приложения соответствует российскому 11 классу.",
    ],
  ),
  hoursPerWeek: { armenia: null, russia: 1 },
  units: [unit1, unit2, unit3, unit4],
};
