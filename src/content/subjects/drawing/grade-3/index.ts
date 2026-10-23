import { t, type CourseSeed } from "../../../types";
import { notes, g } from "../shared";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

export const drawingGrade3: CourseSeed = {
    subject: "drawing",
    grade: 3,
    ...g(3),
    description: t("Art around us: in the home, on the street, in the theatre and museum; composition, still life, landscape, portrait beginnings.", "Արվեստը մեր շուրջ՝ տանը, փողոցում, թատրոնում և թանգարանում, կոմպոզիցիա, նատյուրմորտ, բնանկար, դիմանկարի սկիզբ։", "Искусство вокруг нас: дома, на улице, в театре и музее; композиция, натюрморт, пейзаж, начала портрета."),
    curriculumNotes: notes(
      ["Armenia grade 3 (1 h/week): composition basics (centre, balance), still life, landscape of Armenia (Ararat, Sevan), architecture (churches, old Yerevan), book illustration, theatre masks, museum visit (National Gallery).", "Հայաստան, 3-րդ դասարան (1 ժ/շաբ.)՝ կոմպոզիցիայի հիմունքներ (կենտրոն, հավասարակշռություն), նատյուրմորտ, Հայաստանի բնանկար (Արարատ, Սևան), ճարտարապետություն (եկեղեցիներ, հին Երևան), գրքի նկարազարդում, թատերական դիմակներ, թանգարանի այց (Ազգային պատկերասրահ)։", "Армения, 3 класс (1 ч/нед.): основы композиции (центр, равновесие), натюрморт, пейзаж Армении (Арарат, Севан), архитектура (церкви, старый Ереван), книжная иллюстрация, театральные маски, посещение музея (Национальная галерея)."],
      ["Russia grade 3, ИЗО («Искусство вокруг нас», 34 h): art in your home, on the streets of your city, the artist and the spectacle (theatre, circus, posters), the artist and the museum (painting genres).", "Ռուսաստան, 3-րդ դասարան, ИЗО («Արվեստը մեր շուրջ», 34 ժ)՝ արվեստը տանը, քաղաքի փողոցներում, նկարիչը և տեսարանը (թատրոն, կրկես, ազդագրեր), նկարիչը և թանգարանը (նկարչության ժանրերը)։", "Россия, 3 класс, ИЗО («Искусство вокруг нас», 34 ч): искусство в твоём доме, на улицах твоего города, художник и зрелище (театр, цирк, афиша), художник и музей (жанры живописи)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
