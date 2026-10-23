import { t, unit, q, type CourseSeed } from "../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const physics: CourseSeed[] = [
  {
    subject: "physics",
    grade: 7,
    title: t("Physics · Grade 7", "Ֆիզիկա · 7-րդ դասարան", "Физика · 7 класс"),
    description: t("Introduction to physics: measurement, structure of matter, motion and forces, pressure, work and energy.", "Ֆիզիկայի ներածություն՝ չափումներ, նյութի կառուցվածք, շարժում և ուժեր, ճնշում, աշխատանք և էներգիա։", "Введение в физику: измерения, строение вещества, движение и силы, давление, работа и энергия."),
    curriculumNotes: notes(
      ["Armenia grade 7 (2 h/week): physics starts. Topics: what physics studies, measuring physical quantities, structure of matter (molecules, diffusion, states), mechanical motion, speed, mass and density, forces (gravity, elasticity, friction), pressure of solids, liquids and gases, Archimedes' force, work, power, simple machines, energy.", "Հայաստան, 7-րդ դասարան (2 ժ/շաբ.)՝ ֆիզիկան սկսվում է։ Թեմաներ՝ ինչ է ուսումնասիրում ֆիզիկան, ֆիզիկական մեծությունների չափում, նյութի կառուցվածք (մոլեկուլներ, դիֆուզիա, վիճակներ), մեխանիկական շարժում, արագություն, զանգված և խտություն, ուժեր (ծանրության, առաձգականության, շփման), պինդ մարմինների, հեղուկների և գազերի ճնշում, Արքիմեդի ուժ, աշխատանք, հզորություն, պարզ մեխանիզմներ, էներգիա։", "Армения, 7 класс (2 ч/нед.): начало физики. Темы: что изучает физика, измерение физических величин, строение вещества (молекулы, диффузия, агрегатные состояния), механическое движение, скорость, масса и плотность, силы (тяжести, упругости, трения), давление твёрдых тел, жидкостей и газов, сила Архимеда, работа, мощность, простые механизмы, энергия."],
      ["Russia grade 7 (ФГОС ООО, 2 h/week, 70 h; Перышкин textbook tradition): the same sequence — introduction, structure of matter, interaction of bodies, pressure, work and power, energy.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, 2 ժ/շաբ., 70 ժ, Պերիշկինի դասագրքերի ավանդույթ)՝ նույն հերթականությունը՝ ներածություն, նյութի կառուցվածք, մարմինների փոխազդեցություն, ճնշում, աշխատանք և հզորություն, էներգիա։", "Россия, 7 класс (ФГОС ООО, 2 ч/нед., 70 ч; традиция учебников Перышкина): та же последовательность — введение, строение вещества, взаимодействие тел, давление, работа и мощность, энергия."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      {
        title: t("Introduction to physics", "Ֆիզիկայի ներածություն", "Введение в физику"),
        summary: t("What physics studies, observation and experiment, physical quantities and their measurement.", "Ինչ է ուսումնասիրում ֆիզիկան, դիտում և փորձ, ֆիզիկական մեծություններ և դրանց չափումը։", "Что изучает физика, наблюдения и опыты, физические величины и их измерение."),
        lessons: [
          {
            slug: "what-physics-studies",
            title: t("What physics studies", "Ի՞նչ է ուսումնասիրում ֆիզիկան", "Что изучает физика"),
            objectives: {
              en: ["Give examples of physical phenomena of different kinds", "Distinguish a physical body, a substance and a phenomenon", "Explain the roles of observation, hypothesis and experiment"],
              hy: ["Բերել տարբեր տեսակի ֆիզիկական երևույթների օրինակներ", "Տարբերել ֆիզիկական մարմինը, նյութը և երևույթը", "Բացատրել դիտման, վարկածի և փորձի դերը"],
              ru: ["Приводить примеры физических явлений разных видов", "Различать физическое тело, вещество и явление", "Объяснять роль наблюдения, гипотезы и опыта"],
            },
            content: {
              en: `## Nature changes all the time

Snow melts, lightning flashes, a ball rolls down a hill, a magnet picks up a nail, a guitar string sings. All these changes in nature are **phenomena**. **Physics** (from Greek *physis* — nature) studies the most general phenomena and the laws behind them.

### Kinds of physical phenomena

| Kind | Examples |
|---|---|
| Mechanical | motion of cars, planets, falling of a stone |
| Thermal | melting ice, boiling water, warming by the Sun |
| Electrical | lightning, current in a lamp, static on a sweater |
| Magnetic | compass needle, a magnet attracting iron |
| Optical | rainbow, reflection in a mirror, shadow |
| Sound | thunder, music, echo |

Physics explains, for instance, why the sky is blue, how a plane flies, and how a mobile phone transmits your voice.

## Body, substance, phenomenon

- A **physical body** is any object: a pencil, the Moon, a drop of water.
- A **substance** is what bodies are made of: wood, iron, water, air.
- Everything that *happens* with bodies is a **phenomenon**.

Example: a copper wire (body) made of copper (substance) heats up when current flows (phenomenon).

## How physicists learn about nature

1. **Observation** — we notice something: dew appears on grass in the morning.
2. **Hypothesis** — a guess at an explanation: water vapour from the air condenses when the grass cools.
3. **Experiment** — we check the guess under controlled conditions: cool a glass and watch droplets form.
4. **Law / theory** — a confirmed hypothesis becomes a rule we can use to predict.

Galileo Galilei (1564–1642) was among the first to put experiment at the centre of science. Legend says he dropped balls from the Leaning Tower of Pisa to show that heavy and light objects fall together.

### Think

- Name three phenomena you saw today and classify them.
- What is the body, the substance and the phenomenon in "a steel spoon warms up in hot tea"?
- Why is one experiment not enough to establish a law?`,
              hy: `## Բնությունը անընդհատ փոխվում է

Ձյունը հալվում է, կայծակը փայլատակում է, գնդակը գլորվում է բլուրից, մագնիսը բարձրացնում է մեխը, կիթառի լարը հնչում է։ Բնության այս բոլոր փոփոխությունները **երևույթներ** են։ **Ֆիզիկան** (հունարեն *physis* — բնություն) ուսումնասիրում է ամենաընդհանուր երևույթները և դրանց հիմքում ընկած օրենքները։

### Ֆիզիկական երևույթների տեսակները

| Տեսակ | Օրինակներ |
|---|---|
| Մեխանիկական | մեքենաների, մոլորակների շարժում, քարի անկում |
| Ջերմային | սառույցի հալում, ջրի եռում, Արևից տաքանալ |
| Էլեկտրական | կայծակ, հոսանք լամպում, ստատիկ լիցք սվիտերի վրա |
| Մագնիսական | կողմնացույցի սլաք, մագնիսի ձգում |
| Օպտիկական | ծիածան, անդրադարձում հայելում, ստվեր |
| Ձայնային | որոտ, երաժշտություն, արձագանք |

Ֆիզիկան բացատրում է, օրինակ, ինչու է երկինքը կապույտ, ինչպես է թռչում ինքնաթիռը և ինչպես է հեռախոսը փոխանցում ձայնդ։

## Մարմին, նյութ, երևույթ

- **Ֆիզիկական մարմին**՝ ցանկացած առարկա․ մատիտ, Լուսին, ջրի կաթիլ։
- **Նյութ**՝ այն, ինչից կազմված են մարմինները․ փայտ, երկաթ, ջուր, օդ։
- Ամեն ինչ, ինչ *կատարվում* է մարմինների հետ՝ **երևույթ** է։

Օրինակ․ պղնձե լարը (մարմին) պղնձից (նյութ) տաքանում է, երբ հոսանք է անցնում (երևույթ)։

## Ինչպես են ֆիզիկոսները ճանաչում բնությունը

1. **Դիտում**՝ նկատում ենք ինչ-որ բան․ առավոտյան խոտի վրա ցող է հայտնվում։
2. **Վարկած**՝ բացատրության ենթադրություն․ օդի ջրային գոլորշին խտանում է, երբ խոտը սառչում է։
3. **Փորձ**՝ ենթադրությունը ստուգում ենք վերահսկվող պայմաններում․ սառեցնում ենք բաժակը և դիտում կաթիլների առաջացումը։
4. **Օրենք / տեսություն**՝ հաստատված վարկածը դառնում է կանոն, որով կարելի է կանխատեսել։

Գալիլեո Գալիլեյը (1564–1642) առաջիններից էր, ով փորձը դրեց գիտության կենտրոնում։ Ավանդույթն ասում է, որ նա Պիզայի թեք աշտարակից գնդեր է նետել՝ ցույց տալու, որ ծանր և թեթև մարմինները միասին են ընկնում։

### Մտածիր

- Անվանիր երեք երևույթ, որ այսօր տեսել ես, և դասակարգիր դրանք։
- Ի՞նչն է մարմինը, նյութը և երևույթը «պողպատե գդալը տաքանում է տաք թեյի մեջ» նախադասության մեջ։
- Ինչու՞ մեկ փորձը բավական չէ օրենք հաստատելու համար։`,
              ru: `## Природа постоянно меняется

Снег тает, сверкает молния, мяч катится с горки, магнит поднимает гвоздь, звучит струна гитары. Все эти изменения в природе — **явления**. **Физика** (от греч. *физис* — природа) изучает самые общие явления и законы, которые за ними стоят.

### Виды физических явлений

| Вид | Примеры |
|---|---|
| Механические | движение машин, планет, падение камня |
| Тепловые | таяние льда, кипение воды, нагревание Солнцем |
| Электрические | молния, ток в лампе, статика на свитере |
| Магнитные | стрелка компаса, притяжение железа магнитом |
| Оптические | радуга, отражение в зеркале, тень |
| Звуковые | гром, музыка, эхо |

Физика объясняет, например, почему небо голубое, как летит самолёт и как телефон передаёт твой голос.

## Тело, вещество, явление

- **Физическое тело** — любой предмет: карандаш, Луна, капля воды.
- **Вещество** — то, из чего состоят тела: дерево, железо, вода, воздух.
- Всё, что *происходит* с телами, — **явление**.

Пример: медный провод (тело) из меди (вещество) нагревается, когда по нему идёт ток (явление).

## Как физики познают природу

1. **Наблюдение** — замечаем что-то: утром на траве появляется роса.
2. **Гипотеза** — предположение-объяснение: водяной пар из воздуха конденсируется, когда трава остывает.
3. **Опыт** — проверяем догадку в контролируемых условиях: охлаждаем стакан и смотрим, как появляются капли.
4. **Закон / теория** — подтверждённая гипотеза становится правилом, по которому можно предсказывать.

Галилео Галилей (1564–1642) одним из первых поставил опыт в центр науки. По легенде, он бросал шары с Пизанской башни, чтобы показать, что тяжёлые и лёгкие тела падают одновременно.

### Подумай

- Назови три явления, которые ты видел сегодня, и определи их вид.
- Что является телом, веществом и явлением в предложении «стальная ложка нагревается в горячем чае»?
- Почему одного опыта недостаточно, чтобы установить закон?`,
            },
            quiz: [
              q(t("A rainbow is a … phenomenon.", "Ծիածանը … երևույթ է։", "Радуга — это … явление."), [t("thermal", "ջերմային", "тепловое"), t("optical", "օպտիկական", "оптическое"), t("magnetic", "մագնիսական", "магнитное")], 1),
              q(t("Which is a substance?", "Ո՞րն է նյութ։", "Что из этого — вещество?"), [t("a spoon", "գդալ", "ложка"), t("aluminium", "ալյումին", "алюминий"), t("melting", "հալվելը", "таяние")], 1),
              q(t("A hypothesis becomes a law after it is…", "Վարկածը դառնում է օրենք, երբ այն…", "Гипотеза становится законом после того, как её…"), [t("written down", "գրվում է", "записали"), t("confirmed by experiments", "հաստատվում է փորձերով", "подтвердили опытами"), t("published", "հրապարակվում է", "опубликовали")], 1),
            ],
          },
          { slug: "physical-quantities", title: t("Physical quantities and units (SI)", "Ֆիզիկական մեծություններ և միավորներ (ՄՀ)", "Физические величины и единицы (СИ)") },
          { slug: "measurement-error", title: t("Measuring instruments and measurement error", "Չափիչ սարքեր և չափման սխալ", "Измерительные приборы и погрешность измерения") },
        ],
      },
      unit(t("Structure of matter", "Նյութի կառուցվածք", "Первоначальные сведения о строении вещества"), t("Molecules, diffusion, attraction and repulsion, three states of matter.", "Մոլեկուլներ, դիֆուզիա, ձգողություն և վանողություն, նյութի երեք վիճակ։", "Молекулы, диффузия, притяжение и отталкивание, три состояния вещества."), [
        ["molecules", "Molecules and atoms", "Մոլեկուլներ և ատոմներ", "Молекулы и атомы"],
        ["diffusion", "Diffusion in gases, liquids and solids", "Դիֆուզիա գազերում, հեղուկներում և պինդ մարմիններում", "Диффузия в газах, жидкостях и твёрдых телах"],
        ["molecular-forces", "Attraction and repulsion of molecules", "Մոլեկուլների ձգողություն և վանողություն", "Взаимное притяжение и отталкивание молекул"],
        ["states-of-matter", "Solids, liquids and gases", "Պինդ մարմիններ, հեղուկներ և գազեր", "Твёрдые тела, жидкости и газы"],
      ]),
      unit(t("Motion and interaction of bodies", "Մարմինների շարժում և փոխազդեցություն", "Взаимодействие тел"), t("Mechanical motion, speed, inertia, mass, density, force, gravity, elasticity, friction.", "Մեխանիկական շարժում, արագություն, իներցիա, զանգված, խտություն, ուժ, ծանրության ուժ, առաձգականություն, շփում։", "Механическое движение, скорость, инерция, масса, плотность, сила, тяжесть, упругость, трение."), [
        ["mechanical-motion", "Mechanical motion; uniform and non-uniform", "Մեխանիկական շարժում, հավասարաչափ և անհավասարաչափ", "Механическое движение; равномерное и неравномерное"],
        ["speed", "Speed; units of speed", "Արագություն, արագության միավորներ", "Скорость; единицы скорости"],
        ["distance-time-graphs", "Calculating distance and time; graphs", "Ուղու և ժամանակի հաշվարկ, գրաֆիկներ", "Расчёт пути и времени; графики движения"],
        ["inertia", "Inertia", "Իներցիա", "Инерция"],
        ["mass", "Interaction of bodies; mass", "Մարմինների փոխազդեցություն, զանգված", "Взаимодействие тел; масса"],
        ["density", "Density of a substance", "Նյութի խտություն", "Плотность вещества"],
        ["force", "Force; gravity", "Ուժ, ծանրության ուժ", "Сила; сила тяжести"],
        ["elastic-force", "Elastic force; Hooke's law; weight", "Առաձգականության ուժ, Հուկի օրենք, կշիռ", "Сила упругости; закон Гука; вес тела"],
        ["dynamometer-resultant", "Dynamometer; resultant of forces", "Դինամոմետր, ուժերի համազոր", "Динамометр; сложение сил"],
        ["friction", "Friction", "Շփման ուժ", "Сила трения"],
      ]),
      unit(t("Pressure", "Ճնշում", "Давление твёрдых тел, жидкостей и газов"), t("Pressure of solids, gases and liquids, Pascal's law, atmospheric pressure, Archimedes' force, floating.", "Պինդ մարմինների, գազերի և հեղուկների ճնշում, Պասկալի օրենք, մթնոլորտային ճնշում, Արքիմեդի ուժ, լողալ։", "Давление твёрдых тел, газов и жидкостей, закон Паскаля, атмосферное давление, сила Архимеда, плавание."), [
        ["pressure-solids", "Pressure and its units", "Ճնշում և նրա միավորները", "Давление и единицы давления"],
        ["pressure-gases", "Pressure of gases", "Գազի ճնշում", "Давление газа"],
        ["pascals-law", "Pascal's law; pressure in liquids", "Պասկալի օրենք, ճնշում հեղուկում", "Закон Паскаля; давление в жидкости"],
        ["communicating-vessels", "Communicating vessels", "Հաղորդակից անոթներ", "Сообщающиеся сосуды"],
        ["atmospheric-pressure", "Atmospheric pressure; Torricelli's experiment", "Մթնոլորտային ճնշում, Տորիչելիի փորձ", "Атмосферное давление; опыт Торричелли"],
        ["barometer-manometer", "Barometers, manometers, pumps, hydraulic press", "Բարոմետր, մանոմետր, պոմպեր, հիդրավլիկ մամլիչ", "Барометры, манометры, насосы, гидравлический пресс"],
        ["archimedes", "Archimedes' force", "Արքիմեդի ուժ", "Сила Архимеда"],
        ["floating", "Floating of bodies; ships and balloons", "Մարմինների լողալը, նավեր և օդապարիկներ", "Плавание тел; суда и воздухоплавание"],
      ]),
      unit(t("Work, power, energy", "Աշխատանք, հզորություն, էներգիա", "Работа и мощность. Энергия"), t("Mechanical work, power, simple machines, golden rule of mechanics, efficiency, energy and its conservation.", "Մեխանիկական աշխատանք, հզորություն, պարզ մեխանիզմներ, մեխանիկայի ոսկե կանոն, ՕԳԳ, էներգիա և նրա պահպանում։", "Механическая работа, мощность, простые механизмы, золотое правило механики, КПД, энергия и её сохранение."), [
        ["mechanical-work", "Mechanical work", "Մեխանիկական աշխատանք", "Механическая работа"],
        ["power", "Power", "Հզորություն", "Мощность"],
        ["levers", "Levers; equilibrium of a lever", "Լծակ, լծակի հավասարակշռություն", "Рычаги; равновесие рычага"],
        ["pulleys-golden-rule", "Pulleys; golden rule of mechanics", "Ճախարակներ, մեխանիկայի ոսկե կանոն", "Блоки; золотое правило механики"],
        ["efficiency", "Efficiency of a machine", "Մեխանիզմի ՕԳԳ", "КПД механизма"],
        ["energy", "Potential and kinetic energy", "Պոտենցիալ և կինետիկ էներգիա", "Потенциальная и кинетическая энергия"],
        ["energy-conservation", "Conversion and conservation of mechanical energy", "Մեխանիկական էներգիայի փոխակերպում և պահպանում", "Превращение и сохранение механической энергии"],
      ]),
    ],
  },
  {
    subject: "physics",
    grade: 8,
    title: t("Physics · Grade 8", "Ֆիզիկա · 8-րդ դասարան", "Физика · 8 класс"),
    description: t("Thermal phenomena, electricity, magnetism and light.", "Ջերմային երևույթներ, էլեկտրականություն, մագնիսականություն և լույս։", "Тепловые явления, электричество, магнетизм и свет."),
    curriculumNotes: notes(
      ["Armenia grade 8 (2 h/week): thermal phenomena (internal energy, heat transfer, specific heat, phase changes, heat engines), electric phenomena (charge, current, Ohm's law, series and parallel circuits, work and power of current), electromagnetic phenomena, light phenomena (reflection, refraction, lenses).", "Հայաստան, 8-րդ դասարան (2 ժ/շաբ.)՝ ջերմային երևույթներ (ներքին էներգիա, ջերմափոխանակում, տեսակարար ջերմունակություն, ֆազային անցումներ, ջերմային շարժիչներ), էլեկտրական երևույթներ (լիցք, հոսանք, Օհմի օրենք, հաջորդական և զուգահեռ միացում, հոսանքի աշխատանք և հզորություն), էլեկտրամագնիսական երևույթներ, լուսային երևույթներ (անդրադարձում, բեկում, ոսպնյակներ)։", "Армения, 8 класс (2 ч/нед.): тепловые явления (внутренняя энергия, теплопередача, удельная теплоёмкость, фазовые переходы, тепловые двигатели), электрические явления (заряд, ток, закон Ома, последовательное и параллельное соединение, работа и мощность тока), электромагнитные явления, световые явления (отражение, преломление, линзы)."],
      ["Russia grade 8 (ФГОС ООО, 70 h): thermal phenomena, electric phenomena, electromagnetic phenomena, light phenomena — the same four blocks.", "Ռուսաստան, 8-րդ դասարան (ФГОС ООО, 70 ժ)՝ ջերմային, էլեկտրական, էլեկտրամագնիսական, լուսային երևույթներ՝ նույն չորս բաժինը։", "Россия, 8 класс (ФГОС ООО, 70 ч): тепловые, электрические, электромагнитные и световые явления — те же четыре блока."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      unit(t("Thermal phenomena", "Ջերմային երևույթներ", "Тепловые явления"), t("Internal energy, heat transfer, specific heat, melting, vaporisation, heat engines.", "Ներքին էներգիա, ջերմափոխանակում, տեսակարար ջերմունակություն, հալում, գոլորշիացում, ջերմային շարժիչներ։", "Внутренняя энергия, теплопередача, удельная теплоёмкость, плавление, парообразование, тепловые двигатели."), [
        ["thermal-motion-temperature", "Thermal motion; temperature", "Ջերմային շարժում, ջերմաստիճան", "Тепловое движение; температура"],
        ["internal-energy", "Internal energy and ways to change it", "Ներքին էներգիա և նրա փոփոխման եղանակները", "Внутренняя энергия и способы её изменения"],
        ["heat-transfer", "Conduction, convection, radiation", "Ջերմահաղորդականություն, կոնվեկցիա, ճառագայթում", "Теплопроводность, конвекция, излучение"],
        ["specific-heat", "Quantity of heat; specific heat capacity", "Ջերմաքանակ, տեսակարար ջերմունակություն", "Количество теплоты; удельная теплоёмкость"],
        ["fuel-energy", "Energy of fuel; conservation of energy in thermal processes", "Վառելիքի էներգիա, էներգիայի պահպանում", "Энергия топлива; закон сохранения энергии в тепловых процессах"],
        ["melting-solidification", "Melting and solidification", "Հալում և պնդացում", "Плавление и отвердевание"],
        ["vaporisation-condensation", "Evaporation, boiling, condensation; humidity", "Գոլորշիացում, եռում, խտացում, խոնավություն", "Испарение, кипение, конденсация; влажность"],
        ["heat-engines", "Heat engines and efficiency", "Ջերմային շարժիչներ և ՕԳԳ", "Тепловые двигатели и КПД"],
      ]),
      unit(t("Electric phenomena", "Էլեկտրական երևույթներ", "Электрические явления"), t("Charge, electric field, current, voltage, resistance, Ohm's law, circuits, work and power.", "Լիցք, էլեկտրական դաշտ, հոսանք, լարում, դիմադրություն, Օհմի օրենք, շղթաներ, աշխատանք և հզորություն։", "Заряд, электрическое поле, ток, напряжение, сопротивление, закон Ома, цепи, работа и мощность."), [
        ["electrisation", "Electrisation; two kinds of charge", "Էլեկտրականացում, լիցքի երկու տեսակ", "Электризация тел; два рода зарядов"],
        ["electric-field-atom", "Electric field; structure of the atom", "Էլեկտրական դաշտ, ատոմի կառուցվածք", "Электрическое поле; строение атома"],
        ["electric-current", "Electric current; sources; circuit", "Էլեկտրական հոսանք, աղբյուրներ, շղթա", "Электрический ток; источники; электрическая цепь"],
        ["current-strength", "Current strength; ammeter", "Հոսանքի ուժ, ամպերաչափ", "Сила тока; амперметр"],
        ["voltage", "Voltage; voltmeter", "Լարում, վոլտաչափ", "Напряжение; вольтметр"],
        ["resistance-ohms-law", "Resistance; Ohm's law", "Դիմադրություն, Օհմի օրենք", "Сопротивление; закон Ома"],
        ["resistivity-rheostat", "Resistivity; rheostats", "Տեսակարար դիմադրություն, ռեոստատ", "Удельное сопротивление; реостаты"],
        ["series-parallel", "Series and parallel connection", "Հաջորդական և զուգահեռ միացում", "Последовательное и параллельное соединение"],
        ["electric-work-power", "Work and power of current; Joule–Lenz law", "Հոսանքի աշխատանք և հզորություն, Ջոուլ–Լենցի օրենք", "Работа и мощность тока; закон Джоуля–Ленца"],
        ["safety-short-circuit", "Fuses, short circuits and electrical safety", "Ապահովիչներ, կարճ միացում, անվտանգություն", "Предохранители, короткое замыкание и безопасность"],
      ]),
      unit(t("Electromagnetic phenomena", "Էլեկտրամագնիսական երևույթներ", "Электромагнитные явления"), t("Magnetic field of a current, electromagnets, permanent magnets, Earth's field, electric motor.", "Հոսանքի մագնիսական դաշտ, էլեկտրամագնիսներ, հաստատուն մագնիսներ, Երկրի դաշտ, էլեկտրաշարժիչ։", "Магнитное поле тока, электромагниты, постоянные магниты, поле Земли, электродвигатель."), [
        ["magnetic-field-current", "Magnetic field of a current; field lines", "Հոսանքի մագնիսական դաշտ, դաշտի գծեր", "Магнитное поле тока; магнитные линии"],
        ["electromagnets", "Electromagnets and their uses", "Էլեկտրամագնիսներ և դրանց կիրառումը", "Электромагниты и их применение"],
        ["permanent-magnets", "Permanent magnets; Earth's magnetic field", "Հաստատուն մագնիսներ, Երկրի մագնիսական դաշտ", "Постоянные магниты; магнитное поле Земли"],
        ["electric-motor", "Force on a current; electric motor", "Հոսանքի վրա ազդող ուժ, էլեկտրաշարժիչ", "Действие поля на проводник с током; электродвигатель"],
      ]),
      unit(t("Light phenomena", "Լուսային երևույթներ", "Световые явления"), t("Sources of light, rectilinear propagation, reflection, mirrors, refraction, lenses, the eye.", "Լույսի աղբյուրներ, ուղղագիծ տարածում, անդրադարձում, հայելիներ, բեկում, ոսպնյակներ, աչք։", "Источники света, прямолинейное распространение, отражение, зеркала, преломление, линзы, глаз."), [
        ["light-sources-propagation", "Light sources; rectilinear propagation; eclipses", "Լույսի աղբյուրներ, ուղղագիծ տարածում, խավարումներ", "Источники света; прямолинейное распространение; затмения"],
        ["reflection-mirrors", "Reflection of light; plane mirror", "Լույսի անդրադարձում, հարթ հայելի", "Отражение света; плоское зеркало"],
        ["refraction", "Refraction of light", "Լույսի բեկում", "Преломление света"],
        ["lenses", "Lenses; focal length; optical power", "Ոսպնյակներ, կիզակետային հեռավորություն, օպտիկական ուժ", "Линзы; фокусное расстояние; оптическая сила"],
        ["lens-images", "Images formed by lenses", "Ոսպնյակով ստացվող պատկերներ", "Изображения, даваемые линзой"],
        ["eye-vision", "The eye and vision; glasses", "Աչք և տեսողություն, ակնոց", "Глаз и зрение; очки"],
      ]),
    ],
  },
  {
    subject: "physics",
    grade: 9,
    title: t("Physics · Grade 9", "Ֆիզիկա · 9-րդ դասարան", "Физика · 9 класс"),
    description: t("Laws of motion (kinematics and Newton's laws), mechanical oscillations and waves, electromagnetic field, atomic and nuclear physics basics.", "Շարժման օրենքներ (կինեմատիկա և Նյուտոնի օրենքներ), մեխանիկական տատանումներ և ալիքներ, էլեկտրամագնիսական դաշտ, ատոմի և միջուկի ֆիզիկայի հիմունքներ։", "Законы движения (кинематика и законы Ньютона), механические колебания и волны, электромагнитное поле, основы атомной и ядерной физики."),
    curriculumNotes: notes(
      ["Armenia grade 9 (2 h/week; end of basic school): kinematics (uniform and uniformly accelerated motion, free fall, circular motion), dynamics (Newton's laws, gravitation, momentum), oscillations and waves, sound, electromagnetic induction and waves, structure of the atom and nucleus, radioactivity, elements of astronomy.", "Հայաստան, 9-րդ դասարան (2 ժ/շաբ., հիմնական դպրոցի ավարտ)՝ կինեմատիկա (հավասարաչափ և հավասարաչափ արագացող շարժում, ազատ անկում, շրջանագծով շարժում), դինամիկա (Նյուտոնի օրենքներ, տիեզերական ձգողություն, իմպուլս), տատանումներ և ալիքներ, ձայն, էլեկտրամագնիսական ինդուկցիա և ալիքներ, ատոմի և միջուկի կառուցվածք, ռադիոակտիվություն, աստղագիտության տարրեր։", "Армения, 9 класс (2 ч/нед.; окончание основной школы): кинематика (равномерное и равноускоренное движение, свободное падение, движение по окружности), динамика (законы Ньютона, тяготение, импульс), колебания и волны, звук, электромагнитная индукция и волны, строение атома и ядра, радиоактивность, элементы астрономии."],
      ["Russia grade 9 (ФГОС ООО, 68–102 h): laws of interaction and motion of bodies, mechanical oscillations and waves, sound, electromagnetic field, structure of atom and nucleus, use of nuclear energy, structure and evolution of the Universe.", "Ռուսաստան, 9-րդ դասարան (ФГОС ООО, 68–102 ժ)՝ մարմինների փոխազդեցության և շարժման օրենքներ, մեխանիկական տատանումներ և ալիքներ, ձայն, էլեկտրամագնիսական դաշտ, ատոմի և միջուկի կառուցվածք, միջուկային էներգիա, Տիեզերքի կառուցվածք և էվոլյուցիա։", "Россия, 9 класс (ФГОС ООО, 68–102 ч): законы взаимодействия и движения тел, механические колебания и волны, звук, электромагнитное поле, строение атома и атомного ядра, использование ядерной энергии, строение и эволюция Вселенной."],
    ),
    hoursPerWeek: { armenia: 2, russia: 3 },
    units: [
      unit(t("Kinematics", "Կինեմատիկա", "Кинематика"), t("Reference frame, displacement, uniform and uniformly accelerated motion, free fall, circular motion.", "Հաշվարկման համակարգ, տեղափոխություն, հավասարաչափ և հավասարաչափ արագացող շարժում, ազատ անկում, շրջանագծով շարժում։", "Система отсчёта, перемещение, равномерное и равноускоренное движение, свободное падение, движение по окружности."), [
        ["reference-frame-displacement", "Material point, reference frame, displacement", "Նյութական կետ, հաշվարկման համակարգ, տեղափոխություն", "Материальная точка, система отсчёта, перемещение"],
        ["uniform-motion-equations", "Uniform rectilinear motion; equations and graphs", "Հավասարաչափ ուղղագիծ շարժում, հավասարումներ և գրաֆիկներ", "Равномерное прямолинейное движение; уравнения и графики"],
        ["acceleration", "Uniformly accelerated motion; acceleration", "Հավասարաչափ արագացող շարժում, արագացում", "Равноускоренное движение; ускорение"],
        ["accelerated-displacement", "Displacement in uniformly accelerated motion", "Տեղափոխություն հավասարաչափ արագացող շարժման դեպքում", "Перемещение при равноускоренном движении"],
        ["free-fall", "Free fall; g", "Ազատ անկում, g", "Свободное падение; g"],
        ["circular-motion", "Uniform circular motion; centripetal acceleration", "Հավասարաչափ շարժում շրջանագծով, կենտրոնաձիգ արագացում", "Равномерное движение по окружности; центростремительное ускорение"],
        ["relativity-of-motion", "Relativity of motion", "Շարժման հարաբերականություն", "Относительность движения"],
      ]),
      unit(t("Dynamics", "Դինամիկա", "Динамика"), t("Newton's three laws, law of universal gravitation, artificial satellites, momentum, jet propulsion.", "Նյուտոնի երեք օրենք, տիեզերական ձգողության օրենք, արհեստական արբանյակներ, իմպուլս, ռեակտիվ շարժում։", "Три закона Ньютона, закон всемирного тяготения, искусственные спутники, импульс, реактивное движение."), [
        ["newton-first-law", "Inertial frames; Newton's first law", "Իներցիալ համակարգեր, Նյուտոնի առաջին օրենք", "Инерциальные системы отсчёта; первый закон Ньютона"],
        ["newton-second-law", "Newton's second law", "Նյուտոնի երկրորդ օրենք", "Второй закон Ньютона"],
        ["newton-third-law", "Newton's third law", "Նյուտոնի երրորդ օրենք", "Третий закон Ньютона"],
        ["universal-gravitation", "Law of universal gravitation", "Տիեզերական ձգողության օրենք", "Закон всемирного тяготения"],
        ["satellites", "Artificial satellites; orbital speed", "Արհեստական արբանյակներ, առաջին տիեզերական արագություն", "Искусственные спутники Земли; первая космическая скорость"],
        ["momentum", "Momentum; conservation of momentum", "Իմպուլս, իմպուլսի պահպանման օրենք", "Импульс тела; закон сохранения импульса"],
        ["jet-propulsion", "Jet propulsion; rockets", "Ռեակտիվ շարժում, հրթիռներ", "Реактивное движение; ракеты"],
        ["mechanical-energy-conservation", "Conservation of mechanical energy", "Մեխանիկական էներգիայի պահպանման օրենք", "Закон сохранения механической энергии"],
      ]),
      unit(t("Oscillations and waves", "Տատանումներ և ալիքներ", "Механические колебания и волны. Звук"), t("Pendulums, period, frequency, resonance, waves, sound characteristics.", "Ճոճանակներ, պարբերություն, հաճախություն, ռեզոնանս, ալիքներ, ձայնի բնութագրեր։", "Маятники, период, частота, резонанс, волны, характеристики звука."), [
        ["oscillations-basics", "Free oscillations; pendulums", "Ազատ տատանումներ, ճոճանակներ", "Свободные колебания; маятники"],
        ["period-frequency", "Amplitude, period, frequency; harmonic oscillations", "Ամպլիտուդ, պարբերություն, հաճախություն, հարմոնիկ տատանումներ", "Амплитуда, период, частота; гармонические колебания"],
        ["damped-forced-resonance", "Damped and forced oscillations; resonance", "Մարող և հարկադրական տատանումներ, ռեզոնանս", "Затухающие и вынужденные колебания; резонанс"],
        ["waves", "Longitudinal and transverse waves; wavelength", "Երկայնական և լայնական ալիքներ, ալիքի երկարություն", "Продольные и поперечные волны; длина волны"],
        ["sound", "Sound: pitch, loudness, speed, echo", "Ձայն․ բարձրություն, ուժգնություն, արագություն, արձագանք", "Звук: высота, громкость, скорость, эхо"],
      ]),
      unit(t("Electromagnetic field", "Էլեկտրամագնիսական դաշտ", "Электромагнитное поле"), t("Magnetic field, induction, Faraday's law, alternating current, transformer, electromagnetic waves, light as a wave.", "Մագնիսական դաշտ, ինդուկցիա, Ֆարադեյի օրենք, փոփոխական հոսանք, տրանսֆորմատոր, էլեկտրամագնիսական ալիքներ, լույսը որպես ալիք։", "Магнитное поле, индукция, закон Фарадея, переменный ток, трансформатор, электромагнитные волны, свет как волна."), [
        ["magnetic-field-induction", "Magnetic field; magnetic induction; Ampère force", "Մագնիսական դաշտ, մագնիսական ինդուկցիա, Ամպերի ուժ", "Магнитное поле; магнитная индукция; сила Ампера"],
        ["electromagnetic-induction", "Electromagnetic induction; Lenz's rule", "Էլեկտրամագնիսական ինդուկցիա, Լենցի կանոն", "Электромагнитная индукция; правило Ленца"],
        ["alternating-current", "Alternating current; generator; transformer", "Փոփոխական հոսանք, գեներատոր, տրանսֆորմատոր", "Переменный ток; генератор; трансформатор"],
        ["em-waves", "Electromagnetic waves; the spectrum", "Էլեկտրամագնիսական ալիքներ, սպեկտր", "Электромагнитные волны; шкала электромагнитных волн"],
        ["light-wave-dispersion", "Light as a wave; dispersion; spectra", "Լույսը որպես ալիք, դիսպերսիա, սպեկտրներ", "Свет как волна; дисперсия; спектры"],
      ]),
      unit(t("Atom and nucleus", "Ատոմ և միջուկ", "Строение атома и атомного ядра"), t("Radioactivity, models of the atom, nucleus, nuclear reactions, nuclear energy, the Universe.", "Ռադիոակտիվություն, ատոմի մոդելներ, միջուկ, միջուկային ռեակցիաներ, միջուկային էներգիա, Տիեզերք։", "Радиоактивность, модели атома, ядро, ядерные реакции, ядерная энергия, Вселенная."), [
        ["radioactivity", "Radioactivity; α, β, γ radiation", "Ռադիոակտիվություն, α, β, γ ճառագայթում", "Радиоактивность; α-, β-, γ-излучение"],
        ["rutherford-model", "Rutherford's experiment; planetary model", "Ռեզերֆորդի փորձ, մոլորակային մոդել", "Опыт Резерфорда; планетарная модель атома"],
        ["nucleus-structure", "Composition of the nucleus; isotopes; nuclear forces", "Միջուկի կազմություն, իզոտոպներ, միջուկային ուժեր", "Состав ядра; изотопы; ядерные силы"],
        ["nuclear-reactions-energy", "Fission, chain reaction, nuclear power; fusion", "Տրոհում, շղթայական ռեակցիա, միջուկային էներգետիկա, սինթեզ", "Деление ядер, цепная реакция, ядерная энергетика; синтез"],
        ["radiation-and-life", "Radiation and living organisms; dosimetry", "Ճառագայթում և կենդանի օրգանիզմներ, դոզիմետրիա", "Излучение и живые организмы; дозиметрия"],
        ["universe", "Solar system, stars, galaxies, Big Bang", "Արեգակնային համակարգ, աստղեր, գալակտիկաներ, Մեծ պայթյուն", "Солнечная система, звёзды, галактики, Большой взрыв"],
      ]),
    ],
  },
  {
    subject: "physics",
    grade: 10,
    title: t("Physics · Grade 10", "Ֆիզիկա · 10-րդ դասարան", "Физика · 10 класс"),
    description: t("Mechanics in depth, molecular physics and thermodynamics, electrostatics and direct current.", "Մեխանիկա խորությամբ, մոլեկուլային ֆիզիկա և թերմոդինամիկա, էլեկտրաստատիկա և հաստատուն հոսանք։", "Углублённая механика, молекулярная физика и термодинамика, электростатика и постоянный ток."),
    curriculumNotes: notes(
      ["Armenia grade 10 (2–4 h/week by stream): kinematics and dynamics with vectors, statics, conservation laws, molecular-kinetic theory, ideal gas laws, thermodynamics, electrostatics, direct current, current in different media.", "Հայաստան, 10-րդ դասարան (2–4 ժ/շաբ. հոսքից կախված)՝ կինեմատիկա և դինամիկա վեկտորներով, ստատիկա, պահպանման օրենքներ, մոլեկուլային-կինետիկ տեսություն, իդեալական գազի օրենքներ, թերմոդինամիկա, էլեկտրաստատիկա, հաստատուն հոսանք, հոսանքը տարբեր միջավայրերում։", "Армения, 10 класс (2–4 ч/нед. по потоку): кинематика и динамика с векторами, статика, законы сохранения, молекулярно-кинетическая теория, газовые законы, термодинамика, электростатика, постоянный ток, ток в различных средах."],
      ["Russia grade 10 (ФГОС СОО, base 2 h / advanced 5 h; Мякишев textbook tradition): mechanics, molecular physics and thermodynamics, electrodynamics (electrostatics, DC, current in media).", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, հիմնական 2 ժ / խորացված 5 ժ, Մյակիշևի դասագրքեր)՝ մեխանիկա, մոլեկուլային ֆիզիկա և թերմոդինամիկա, էլեկտրադինամիկա (էլեկտրաստատիկա, հաստատուն հոսանք, հոսանքը միջավայրերում)։", "Россия, 10 класс (ФГОС СОО, база 2 ч / углублённый 5 ч; учебники Мякишева): механика, молекулярная физика и термодинамика, электродинамика (электростатика, постоянный ток, ток в средах)."],
    ),
    hoursPerWeek: { armenia: 3, russia: 2 },
    units: [
      unit(t("Kinematics and dynamics", "Կինեմատիկա և դինամիկա", "Кинематика и динамика"), t("Vector description of motion, projectile motion, Newton's laws applied, forces in nature, statics.", "Շարժման վեկտորային նկարագրություն, նետված մարմնի շարժում, Նյուտոնի օրենքների կիրառում, ուժերը բնության մեջ, ստատիկա։", "Векторное описание движения, движение брошенного тела, применение законов Ньютона, силы в природе, статика."), [
        ["vector-kinematics", "Vectors in kinematics; projection method", "Վեկտորները կինեմատիկայում, պրոյեկցիաների եղանակ", "Векторы в кинематике; метод проекций"],
        ["projectile-motion", "Motion of a body thrown at an angle", "Անկյան տակ նետված մարմնի շարժում", "Движение тела, брошенного под углом к горизонту"],
        ["newtons-laws-problems", "Newton's laws: solving problems", "Նյուտոնի օրենքներ․ խնդիրների լուծում", "Законы Ньютона: решение задач"],
        ["forces-in-nature", "Gravitation, elasticity, friction in depth", "Ձգողություն, առաձգականություն, շփում խորությամբ", "Силы тяготения, упругости, трения углублённо"],
        ["statics", "Statics: equilibrium, moment of force", "Ստատիկա․ հավասարակշռություն, ուժի մոմենտ", "Статика: равновесие, момент силы"],
        ["conservation-laws-problems", "Momentum and energy conservation: problems", "Իմպուլսի և էներգիայի պահպանում․ խնդիրներ", "Законы сохранения импульса и энергии: задачи"],
      ]),
      unit(t("Molecular physics", "Մոլեկուլային ֆիզիկա", "Молекулярная физика"), t("Molecular-kinetic theory, ideal gas, temperature, gas laws, saturated vapour, liquids and solids.", "Մոլեկուլային-կինետիկ տեսություն, իդեալական գազ, ջերմաստիճան, գազի օրենքներ, հագեցած գոլորշի, հեղուկներ և պինդ մարմիններ։", "Молекулярно-кинетическая теория, идеальный газ, температура, газовые законы, насыщенный пар, жидкости и твёрдые тела."), [
        ["mkt-basics", "Basic statements of MKT; mass and size of molecules", "ՄԿՍ հիմնական դրույթներ, մոլեկուլների զանգված և չափ", "Основные положения МКТ; масса и размеры молекул"],
        ["ideal-gas-equation", "Ideal gas; basic MKT equation; temperature", "Իդեալական գազ, ՄԿՏ հիմնական հավասարում, ջերմաստիճան", "Идеальный газ; основное уравнение МКТ; температура"],
        ["gas-laws", "Equation of state; isoprocesses", "Վիճակի հավասարում, իզոպրոցեսներ", "Уравнение состояния; изопроцессы"],
        ["saturated-vapour-humidity", "Saturated vapour; boiling; humidity", "Հագեցած գոլորշի, եռում, խոնավություն", "Насыщенный пар; кипение; влажность"],
        ["liquids-solids", "Surface tension; crystalline and amorphous bodies", "Մակերևութային լարվածություն, բյուրեղային և ամորֆ մարմիններ", "Поверхностное натяжение; кристаллические и аморфные тела"],
      ]),
      unit(t("Thermodynamics", "Թերմոդինամիկա", "Термодинамика"), t("Internal energy, work, first law, adiabatic process, second law, heat engines.", "Ներքին էներգիա, աշխատանք, առաջին օրենք, ադիաբատ պրոցես, երկրորդ օրենք, ջերմային շարժիչներ։", "Внутренняя энергия, работа, первый закон, адиабатный процесс, второй закон, тепловые двигатели."), [
        ["internal-energy-work", "Internal energy of an ideal gas; work in thermodynamics", "Իդեալական գազի ներքին էներգիա, աշխատանքը թերմոդինամիկայում", "Внутренняя энергия идеального газа; работа в термодинамике"],
        ["first-law", "First law of thermodynamics; applications to isoprocesses", "Թերմոդինամիկայի առաջին օրենք, իզոպրոցեսներ", "Первый закон термодинамики; применение к изопроцессам"],
        ["second-law-engines", "Irreversibility; second law; Carnot efficiency", "Անդարձելիություն, երկրորդ օրենք, Կարնոյի ՕԳԳ", "Необратимость; второй закон; КПД Карно"],
      ]),
      unit(t("Electrostatics", "Էլեկտրաստատիկա", "Электростатика"), t("Coulomb's law, electric field strength, potential, capacitors.", "Կուլոնի օրենք, էլեկտրական դաշտի լարվածություն, պոտենցիալ, կոնդենսատորներ։", "Закон Кулона, напряжённость электрического поля, потенциал, конденсаторы."), [
        ["coulombs-law", "Charge conservation; Coulomb's law", "Լիցքի պահպանում, Կուլոնի օրենք", "Закон сохранения заряда; закон Кулона"],
        ["field-strength", "Electric field strength; field lines", "Էլեկտրական դաշտի լարվածություն, դաշտի գծեր", "Напряжённость электрического поля; силовые линии"],
        ["conductors-dielectrics", "Conductors and dielectrics in a field", "Հաղորդիչներ և դիէլեկտրիկներ դաշտում", "Проводники и диэлектрики в электрическом поле"],
        ["potential", "Potential and potential difference", "Պոտենցիալ և պոտենցիալների տարբերություն", "Потенциал и разность потенциалов"],
        ["capacitors", "Capacitance; capacitors; energy of a charged capacitor", "Ունակություն, կոնդենսատորներ, լիցքավորված կոնդենսատորի էներգիա", "Электроёмкость; конденсаторы; энергия заряженного конденсатора"],
      ]),
      unit(t("Direct current", "Հաստատուն հոսանք", "Законы постоянного тока"), t("Ohm's law for a complete circuit, EMF, Kirchhoff's rules basics, current in metals, electrolytes, gases, semiconductors.", "Օհմի օրենք լրիվ շղթայի համար, ԷլՇՈւ, Կիրխհոֆի կանոնների հիմունքներ, հոսանքը մետաղներում, էլեկտրոլիտներում, գազերում, կիսահաղորդիչներում։", "Закон Ома для полной цепи, ЭДС, основы правил Кирхгофа, ток в металлах, электролитах, газах, полупроводниках."), [
        ["ohm-full-circuit", "EMF; Ohm's law for a complete circuit", "ԷլՇՈւ, Օհմի օրենք լրիվ շղթայի համար", "ЭДС; закон Ома для полной цепи"],
        ["circuits-analysis", "Analysing circuits; measuring instruments", "Շղթաների վերլուծություն, չափիչ սարքեր", "Расчёт цепей; измерительные приборы"],
        ["current-in-metals", "Current in metals; superconductivity", "Հոսանքը մետաղներում, գերհաղորդականություն", "Электрический ток в металлах; сверхпроводимость"],
        ["semiconductors", "Semiconductors; diode and transistor", "Կիսահաղորդիչներ, դիոդ և տրանզիստոր", "Полупроводники; диод и транзистор"],
        ["current-electrolytes-gases", "Current in electrolytes, gases and vacuum", "Հոսանքը էլեկտրոլիտներում, գազերում և վակուումում", "Ток в электролитах, газах и вакууме"],
      ]),
    ],
  },
  {
    subject: "physics",
    grade: 11,
    title: t("Physics · Grade 11", "Ֆիզիկա · 11-րդ դասարան", "Физика · 11 класс"),
    description: t("Magnetism and induction, oscillations and waves (mechanical and electromagnetic), optics, special relativity, quantum physics.", "Մագնիսականություն և ինդուկցիա, տատանումներ և ալիքներ (մեխանիկական և էլեկտրամագնիսական), օպտիկա, հարաբերականության հատուկ տեսություն, քվանտային ֆիզիկա։", "Магнетизм и индукция, колебания и волны (механические и электромагнитные), оптика, специальная теория относительности, квантовая физика."),
    curriculumNotes: notes(
      ["Armenia grade 11 (2–4 h/week): magnetic field and electromagnetic induction, electromagnetic oscillations and AC, electromagnetic waves and radio, geometric and wave optics, elements of special relativity, light quanta and photoelectric effect, atomic physics.", "Հայաստան, 11-րդ դասարան (2–4 ժ/շաբ.)՝ մագնիսական դաշտ և էլեկտրամագնիսական ինդուկցիա, էլեկտրամագնիսական տատանումներ և փոփոխական հոսանք, էլեկտրամագնիսական ալիքներ և ռադիո, երկրաչափական և ալիքային օպտիկա, հարաբերականության հատուկ տեսության տարրեր, լույսի քվանտներ և ֆոտոէֆեկտ, ատոմի ֆիզիկա։", "Армения, 11 класс (2–4 ч/нед.): магнитное поле и электромагнитная индукция, электромагнитные колебания и переменный ток, электромагнитные волны и радио, геометрическая и волновая оптика, элементы СТО, кванты света и фотоэффект, физика атома."],
      ["Russia grade 11 (ФГОС СОО, final year): electrodynamics continued (magnetic field, induction), oscillations and waves, optics, relativity, quantum physics, atomic and nuclear physics, astronomy elements. Ends with ЕГЭ.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական)՝ էլեկտրադինամիկայի շարունակություն (մագնիսական դաշտ, ինդուկցիա), տատանումներ և ալիքներ, օպտիկա, հարաբերականություն, քվանտային ֆիզիկա, ատոմի և միջուկի ֆիզիկա, աստղագիտություն։ Ավարտվում է ЕГЭ-ով։", "Россия, 11 класс (ФГОС СОО, выпускной): продолжение электродинамики (магнитное поле, индукция), колебания и волны, оптика, СТО, квантовая физика, физика атома и ядра, элементы астрономии. Завершается ЕГЭ."],
    ),
    hoursPerWeek: { armenia: 3, russia: 2 },
    units: [
      unit(t("Magnetic field and induction", "Մագնիսական դաշտ և ինդուկցիա", "Магнитное поле и электромагнитная индукция"), t("Magnetic induction vector, Ampère and Lorentz forces, Faraday's law, self-induction, magnetic field energy.", "Մագնիսական ինդուկցիայի վեկտոր, Ամպերի և Լորենցի ուժեր, Ֆարադեյի օրենք, ինքնաինդուկցիա, մագնիսական դաշտի էներգիա։", "Вектор магнитной индукции, силы Ампера и Лоренца, закон Фарадея, самоиндукция, энергия магнитного поля."), [
        ["magnetic-induction-vector", "Magnetic induction vector; Ampère force", "Մագնիսական ինդուկցիայի վեկտոր, Ամպերի ուժ", "Вектор магнитной индукции; сила Ампера"],
        ["lorentz-force", "Lorentz force; charged particles in fields", "Լորենցի ուժ, լիցքավորված մասնիկները դաշտերում", "Сила Лоренца; движение заряженных частиц в полях"],
        ["faraday-law", "Magnetic flux; Faraday's law of induction", "Մագնիսական հոսք, Ֆարադեյի ինդուկցիայի օրենք", "Магнитный поток; закон электромагнитной индукции"],
        ["self-induction", "Self-induction; inductance; field energy", "Ինքնաինդուկցիա, ինդուկտիվություն, դաշտի էներգիա", "Самоиндукция; индуктивность; энергия магнитного поля"],
      ]),
      unit(t("Oscillations and alternating current", "Տատանումներ և փոփոխական հոսանք", "Колебания и переменный ток"), t("Harmonic oscillations, pendulums, oscillating circuit, AC, resonance, transformer, power transmission.", "Հարմոնիկ տատանումներ, ճոճանակներ, տատանողական կոնտուր, փոփոխական հոսանք, ռեզոնանս, տրանսֆորմատոր, էներգիայի հաղորդում։", "Гармонические колебания, маятники, колебательный контур, переменный ток, резонанс, трансформатор, передача энергии."), [
        ["harmonic-oscillations", "Harmonic oscillations: equation, energy", "Հարմոնիկ տատանումներ․ հավասարում, էներգիա", "Гармонические колебания: уравнение, энергия"],
        ["oscillating-circuit", "Oscillating circuit; Thomson's formula", "Տատանողական կոնտուր, Թոմսոնի բանաձև", "Колебательный контур; формула Томсона"],
        ["ac-circuit-elements", "AC; resistor, capacitor, inductor in AC circuit", "Փոփոխական հոսանք, ռեզիստոր, կոնդենսատոր, կոճ", "Переменный ток; резистор, конденсатор, катушка в цепи"],
        ["ac-resonance-power", "Resonance; power in AC; transformer; power lines", "Ռեզոնանս, հզորություն, տրանսֆորմատոր, հոսանքագծեր", "Резонанс; мощность переменного тока; трансформатор; ЛЭП"],
      ]),
      unit(t("Waves", "Ալիքներ", "Механические и электромагнитные волны"), t("Wave properties, sound, electromagnetic waves, radio, interference and diffraction.", "Ալիքների հատկություններ, ձայն, էլեկտրամագնիսական ալիքներ, ռադիո, ինտերֆերենց և դիֆրակցիա։", "Свойства волн, звук, электромагнитные волны, радио, интерференция и дифракция."), [
        ["wave-equation", "Wave equation; speed, wavelength, frequency", "Ալիքի հավասարում, արագություն, երկարություն, հաճախություն", "Уравнение волны; скорость, длина волны, частота"],
        ["em-waves-maxwell", "Electromagnetic waves; Maxwell and Hertz", "Էլեկտրամագնիսական ալիքներ, Մաքսվել և Հերց", "Электромагнитные волны; Максвелл и Герц"],
        ["radio", "Principles of radio; modulation; radar; mobile communication", "Ռադիոյի սկզբունքներ, մոդուլյացիա, ռադար, շարժական կապ", "Принципы радиосвязи; модуляция; радиолокация; мобильная связь"],
      ]),
      unit(t("Optics", "Օպտիկա", "Оптика"), t("Reflection and refraction laws, total internal reflection, lenses and optical instruments, dispersion, interference, diffraction, polarisation.", "Անդրադարձման և բեկման օրենքներ, լրիվ ներքին անդրադարձում, ոսպնյակներ և օպտիկական սարքեր, դիսպերսիա, ինտերֆերենց, դիֆրակցիա, բևեռացում։", "Законы отражения и преломления, полное внутреннее отражение, линзы и оптические приборы, дисперсия, интерференция, дифракция, поляризация."), [
        ["light-speed-reflection-refraction", "Speed of light; laws of reflection and refraction", "Լույսի արագություն, անդրադարձման և բեկման օրենքներ", "Скорость света; законы отражения и преломления"],
        ["total-internal-reflection", "Total internal reflection; optical fibre", "Լրիվ ներքին անդրադարձում, օպտիկամանրաթել", "Полное внутреннее отражение; световоды"],
        ["thin-lens-formula", "Thin lens formula; magnification; instruments", "Բարակ ոսպնյակի բանաձև, խոշորացում, սարքեր", "Формула тонкой линзы; увеличение; оптические приборы"],
        ["dispersion-interference", "Dispersion; interference of light", "Դիսպերսիա, լույսի ինտերֆերենց", "Дисперсия; интерференция света"],
        ["diffraction-polarisation", "Diffraction; diffraction grating; polarisation", "Դիֆրակցիա, դիֆրակցիոն ցանց, բևեռացում", "Дифракция; дифракционная решётка; поляризация"],
      ]),
      unit(t("Relativity and quantum physics", "Հարաբերականություն և քվանտային ֆիզիկա", "СТО и квантовая физика"), t("Postulates of special relativity, mass–energy, photoelectric effect, photons, Bohr's atom, lasers.", "Հարաբերականության հատուկ տեսության պոստուլատներ, զանգված–էներգիա, ֆոտոէֆեկտ, ֆոտոններ, Բորի ատոմ, լազերներ։", "Постулаты СТО, масса и энергия, фотоэффект, фотоны, атом Бора, лазеры."), [
        ["sto-postulates", "Postulates of special relativity; relativity of time and length", "ՀՏ պոստուլատներ, ժամանակի և երկարության հարաբերականություն", "Постулаты СТО; относительность времени и длины"],
        ["mass-energy", "Relativistic momentum and energy; E = mc²", "Ռելյատիվիստական իմպուլս և էներգիա, E = mc²", "Релятивистские импульс и энергия; E = mc²"],
        ["photoelectric-effect", "Photoelectric effect; Einstein's equation", "Ֆոտոէֆեկտ, Էյնշտեյնի հավասարում", "Фотоэффект; уравнение Эйнштейна"],
        ["photons", "Photons; pressure of light; wave–particle duality", "Ֆոտոններ, լույսի ճնշում, ալիք–մասնիկ երկվություն", "Фотоны; давление света; корпускулярно-волновой дуализм"],
        ["bohr-atom-lasers", "Bohr's postulates; spectra; lasers", "Բորի պոստուլատներ, սպեկտրներ, լազերներ", "Постулаты Бора; спектры; лазеры"],
      ]),
    ],
  },
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
