import { t, type SubjectSeed } from "./types";

export const subjects: SubjectSeed[] = [
  {
    id: "math",
    name: t("Mathematics", "Մաթեմատիկա", "Математика"),
    description: t(
      "Numbers, arithmetic, measurement and early geometry for grades 1–6, before the course splits into algebra and geometry.",
      "Թվեր, թվաբանություն, չափումներ և երկրաչափության սկզբունքներ 1–6-րդ դասարանների համար, մինչև առարկան բաժանվի հանրահաշվի և երկրաչափության։",
      "Числа, арифметика, измерения и начала геометрии для 1–6 классов, до разделения курса на алгебру и геометрию.",
    ),
    color: "indigo",
    icon: "Calculator",
    sortOrder: 1,
  },
  {
    id: "algebra",
    name: t("Algebra", "Հանրահաշիվ", "Алгебра"),
    description: t(
      "From expressions and linear equations in grade 7 to functions, logarithms and calculus foundations in grades 10–12.",
      "7-րդ դասարանի արտահայտություններից և գծային հավասարումներից մինչև ֆունկցիաներ, լոգարիթմներ և անալիզի սկզբունքներ 10–12-րդ դասարաններում։",
      "От выражений и линейных уравнений в 7 классе до функций, логарифмов и начал анализа в 10–12 классах.",
    ),
    color: "violet",
    icon: "FunctionSquare",
    sortOrder: 2,
  },
  {
    id: "geometry",
    name: t("Geometry", "Երկրաչափություն", "Геометрия"),
    description: t(
      "Plane geometry in grades 7–9 and solid geometry with vectors and coordinates in grades 10–12.",
      "Հարթաչափություն 7–9-րդ դասարաններում, տարածաչափություն, վեկտորներ և կոորդինատներ 10–12-րդ դասարաններում։",
      "Планиметрия в 7–9 классах и стереометрия с векторами и координатами в 10–12 классах.",
    ),
    color: "sky",
    icon: "Shapes",
    sortOrder: 3,
  },
  {
    id: "physics",
    name: t("Physics", "Ֆիզիկա", "Физика"),
    description: t(
      "Mechanics, heat, electricity, optics, and modern physics, following the Armenian and Russian grade 7–12 programmes.",
      "Մեխանիկա, ջերմություն, էլեկտրականություն, օպտիկա և ժամանակակից ֆիզիկա՝ հայկական և ռուսական 7–12-րդ դասարանների ծրագրերով։",
      "Механика, тепловые явления, электричество, оптика и современная физика по армянской и российской программам 7–12 классов.",
    ),
    color: "amber",
    icon: "Atom",
    sortOrder: 4,
  },
  {
    id: "drawing",
    name: t("Drawing & Art", "Կերպարվեստ", "Рисование и ИЗО"),
    description: t(
      "Line, shape, colour, composition and art history for grades 1–7, aligned to Armenian Kerparvest and Russian IZO.",
      "Գիծ, ձև, գույն, կոմպոզիցիա և արվեստի պատմություն 1–7-րդ դասարանների համար՝ «Կերպարվեստ» և ռուսական ИЗО ծրագրերով։",
      "Линия, форма, цвет, композиция и история искусства для 1–7 классов по программам «Կերպարվեստ» и ИЗО.",
    ),
    color: "rose",
    icon: "Palette",
    sortOrder: 5,
  },
  {
    id: "armenian",
    name: t("Armenian Language", "Հայոց լեզու", "Армянский язык"),
    description: t(
      "Reading, writing, grammar and literature in Armenian from the alphabet in grade 1 to literary analysis in grade 12.",
      "Հայերեն կարդալ, գրել, քերականություն և գրականություն՝ 1-ին դասարանի այբուբենից մինչև 12-րդ դասարանի գրական վերլուծություն։",
      "Чтение, письмо, грамматика и литература на армянском языке от алфавита в 1 классе до анализа текста в 12 классе.",
    ),
    color: "orange",
    icon: "BookOpenText",
    sortOrder: 6,
  },
  {
    id: "russian",
    name: t("Russian Language", "Ռուսաց լեզու", "Русский язык"),
    description: t(
      "Russian as a first language (Russian schools) and as a second language (Armenian schools, from grade 2): phonetics, grammar, speech and texts.",
      "Ռուսերենը որպես մայրենի (ռուսական դպրոց) և որպես երկրորդ լեզու (հայկական դպրոց, 2-րդ դասարանից)՝ հնչյունաբանություն, քերականություն, խոսք և տեքստեր։",
      "Русский как родной (российская школа) и как второй язык (армянская школа, со 2 класса): фонетика, грамматика, речь и тексты.",
    ),
    color: "red",
    icon: "Languages",
    sortOrder: 7,
  },
  {
    id: "english",
    name: t("English Language", "Անգլերեն", "Английский язык"),
    description: t(
      "English as a foreign language from grade 2–3 to upper-intermediate level in grade 12, following CEFR-aligned national programmes.",
      "Անգլերենը որպես օտար լեզու 2–3-րդ դասարանից մինչև 12-րդ դասարանի միջինից բարձր մակարդակ՝ CEFR-ին համապատասխան ազգային ծրագրերով։",
      "Английский как иностранный со 2–3 класса до уровня выше среднего в 12 классе по национальным программам, согласованным с CEFR.",
    ),
    color: "emerald",
    icon: "Globe",
    sortOrder: 8,
  },
];
