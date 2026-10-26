import { t, unit, type CourseSeed } from "../../types";
import { physicsGrade7 } from "./grade-7";
import { physicsGrade8 } from "./grade-8";
import { physicsGrade9 } from "./grade-9";
import { physicsGrade10 } from "./grade-10";
import { physicsGrade11 } from "./grade-11";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const physics: CourseSeed[] = [
  physicsGrade7,
  physicsGrade8,
  physicsGrade9,
  physicsGrade10,
  physicsGrade11,
  {
    subject: "physics",
    grade: 12,
    title: t("Physics · Grade 12", "Ֆիզիկա · 12-րդ դասարան", "Физика · 12 класс"),
    description: t("Final Armenian year: nuclear and particle physics, astrophysics and cosmology, modern technology, and systematic review for the unified exam.", "Հայաստանի ավարտական տարի՝ միջուկի և տարրական մասնիկների ֆիզիկա, աստղաֆիզիկա և կոսմոլոգիա, ժամանակակից տեխնոլոգիաներ, միասնական քննության համակարգված ամփոփում։", "Выпускной год в Армении: физика ядра и элементарных частиц, астрофизика и космология, современные технологии, системное повторение к единому экзамену."),
    curriculumNotes: notes(
      ["Armenia grade 12 (2–4 h/week): atomic nucleus, radioactivity and nuclear reactions, nuclear energy (incl. the Armenian NPP context), elementary particles, astrophysics (Sun, stars, galaxies, cosmology), modern technologies, physics in Armenia (Byurakan observatory, Alikhanian institute), full review for the unified exam.", "Հայաստան, 12-րդ դասարան (2–4 ժ/շաբ.)՝ ատոմի միջուկ, ռադիոակտիվություն և միջուկային ռեակցիաներ, միջուկային էներգետիկա (այդ թվում Հայկական ԱԷԿ-ի համատեքստը), տարրական մասնիկներ, աստղաֆիզիկա (Արև, աստղեր, գալակտիկաներ, կոսմոլոգիա), ժամանակակից տեխնոլոգիաներ, ֆիզիկան Հայաստանում (Բյուրականի աստղադիտարան, Ալիխանյանի ինստիտուտ), միասնական քննության ամփոփում։", "Армения, 12 класс (2–4 ч/нед.): атомное ядро, радиоактивность и ядерные реакции, ядерная энергетика (включая контекст Армянской АЭС), элементарные частицы, астрофизика (Солнце, звёзды, галактики, космология), современные технологии, физика в Армении (Бюраканская обсерватория, институт Алиханяна), полное повторение к единому экзамену."],
      ["No Russian grade 12: this material corresponds to the nuclear/particle/astronomy chapters at the end of Russian grade 11 and ЕГЭ review.", "Ռուսաստանում 12-րդ դասարան չկա․ նյութը համապատասխանում է ռուսական 11-րդ դասարանի միջուկային/մասնիկների/աստղագիտության գլուխներին և ЕГЭ ամփոփմանը։", "В России 12 класса нет: материал соответствует главам о ядре, частицах и астрономии в конце 11 класса и повторению к ЕГЭ."],
    ),
    hoursPerWeek: { armenia: 3, russia: null },
    units: [
      unit(t("Nuclear physics", "Միջուկային ֆիզիկա", "Физика атомного ядра"), t("Structure of the nucleus, binding energy, radioactive decay law, nuclear reactions, fission and fusion, dosimetry.", "Միջուկի կառուցվածք, կապի էներգիա, ռադիոակտիվ տրոհման օրենք, միջուկային ռեակցիաներ, տրոհում և սինթեզ, դոզիմետրիա։", "Строение ядра, энергия связи, закон радиоактивного распада, ядерные реакции, деление и синтез, дозиметрия."), [
        ["binding-energy", "Nuclear forces; mass defect; binding energy", "Միջուկային ուժեր, զանգվածի պակասորդ, կապի էներգիա", "Ядерные силы; дефект массы; энергия связи"],
        ["decay-law", "Law of radioactive decay; half-life", "Ռադիոակտիվ տրոհման օրենք, կիսատրոհման պարբերություն", "Закон радиоактивного распада; период полураспада"],
        ["nuclear-reactions-12", "Nuclear reactions; energy yield", "Միջուկային ռեակցիաներ, էներգիայի ելք", "Ядерные реакции; энергетический выход"],
        ["fission-reactors", "Fission; nuclear reactors; Armenian NPP", "Տրոհում, միջուկային ռեակտորներ, Հայկական ԱԷԿ", "Деление ядер; ядерные реакторы; Армянская АЭС"],
        ["fusion", "Thermonuclear fusion; stars and ITER", "Թերմոմիջուկային սինթեզ, աստղեր և ITER", "Термоядерный синтез; звёзды и ITER"],
        ["dosimetry-12", "Biological effect of radiation; dosimetry", "Ճառագայթման կենսաբանական ազդեցություն, դոզիմետրիա", "Биологическое действие излучения; дозиметрия"],
      ]),
      unit(t("Elementary particles", "Տարրական մասնիկներ", "Элементарные частицы"), t("Discovery of particles, antiparticles, fundamental interactions, quarks and the Standard Model.", "Մասնիկների հայտնաբերում, հակամասնիկներ, հիմնարար փոխազդեցություններ, քվարկներ և Ստանդարտ մոդել։", "Открытие частиц, античастицы, фундаментальные взаимодействия, кварки и Стандартная модель."), [
        ["particles-discovery", "Three stages of particle physics; antiparticles", "Մասնիկների ֆիզիկայի երեք փուլ, հակամասնիկներ", "Три этапа развития физики частиц; античастицы"],
        ["fundamental-interactions", "Four fundamental interactions", "Չորս հիմնարար փոխազդեցություն", "Четыре фундаментальных взаимодействия"],
        ["quarks-standard-model", "Quarks, leptons, the Standard Model; accelerators", "Քվարկներ, լեպտոններ, Ստանդարտ մոդել, արագացուցիչներ", "Кварки, лептоны, Стандартная модель; ускорители"],
      ]),
      unit(t("Astrophysics and cosmology", "Աստղաֆիզիկա և կոսմոլոգիա", "Астрофизика и космология"), t("Solar system, the Sun, stars and their evolution, galaxies, expanding Universe, Big Bang.", "Արեգակնային համակարգ, Արև, աստղեր և դրանց էվոլյուցիա, գալակտիկաներ, ընդարձակվող Տիեզերք, Մեծ պայթյուն։", "Солнечная система, Солнце, звёзды и их эволюция, галактики, расширяющаяся Вселенная, Большой взрыв."), [
        ["solar-system", "Solar system; Kepler's laws", "Արեգակնային համակարգ, Կեպլերի օրենքներ", "Солнечная система; законы Кеплера"],
        ["sun-stars", "The Sun; stars: classification and evolution", "Արև, աստղեր․ դասակարգում և էվոլյուցիա", "Солнце; звёзды: классификация и эволюция"],
        ["galaxies-byurakan", "Galaxies; Byurakan observatory and V. Ambartsumian", "Գալակտիկաներ, Բյուրականի աստղադիտարան և Վ․ Համբարձումյան", "Галактики; Бюраканская обсерватория и В. Амбарцумян"],
        ["cosmology", "Expanding Universe; Big Bang; dark matter and energy", "Ընդարձակվող Տիեզերք, Մեծ պայթյուն, մութ նյութ և էներգիա", "Расширяющаяся Вселенная; Большой взрыв; тёмная материя и энергия"],
      ]),
      unit(t("Physics and technology", "Ֆիզիկա և տեխնոլոգիա", "Физика и технологии"), t("Semiconductor electronics, lasers and fibre optics, renewable energy, physics of the modern world.", "Կիսահաղորդչային էլեկտրոնիկա, լազերներ և օպտիկամանրաթել, վերականգնվող էներգիա, ժամանակակից աշխարհի ֆիզիկա։", "Полупроводниковая электроника, лазеры и оптоволокно, возобновляемая энергия, физика современного мира."), [
        ["electronics", "From transistor to microchip", "Տրանզիստորից միկրոսխեմա", "От транзистора к микросхеме"],
        ["renewable-energy", "Renewable energy: solar, wind, hydro in Armenia", "Վերականգնվող էներգիա․ արև, քամի, հիդրո Հայաստանում", "Возобновляемая энергетика: солнце, ветер, гидро в Армении"],
        ["physics-everyday-tech", "Physics in everyday technology: GPS, MRI, smartphones", "Ֆիզիկան ամենօրյա տեխնոլոգիայում․ GPS, ՄՈՌ, սմարթֆոն", "Физика в повседневной технике: GPS, МРТ, смартфоны"],
      ]),
      unit(t("Exam review", "Քննական ամփոփում", "Повторение к экзамену"), t("Systematic review of mechanics, thermodynamics, electrodynamics, optics and quantum physics.", "Մեխանիկայի, թերմոդինամիկայի, էլեկտրադինամիկայի, օպտիկայի և քվանտային ֆիզիկայի համակարգված ամփոփում։", "Системное повторение механики, термодинамики, электродинамики, оптики и квантовой физики."), [
        ["review-mechanics", "Review: mechanics", "Ամփոփում․ մեխանիկա", "Повторение: механика"],
        ["review-thermo", "Review: molecular physics and thermodynamics", "Ամփոփում․ մոլեկուլային ֆիզիկա և թերմոդինամիկա", "Повторение: молекулярная физика и термодинамика"],
        ["review-electrodynamics", "Review: electrodynamics", "Ամփոփում․ էլեկտրադինամիկա", "Повторение: электродинамика"],
        ["review-optics-quantum", "Review: optics and quantum physics", "Ամփոփում․ օպտիկա և քվանտային ֆիզիկա", "Повторение: оптика и квантовая физика"],
        ["physics-mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
    ],
  },
];
