import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Cylinder, cone and ball", "Գլան, կոն և գունդ", "Цилиндр, конус и шар"),
  summary: t("Round bodies, their sections and surface areas.", "Պտտման մարմիններ, դրանց հատույթներ և մակերևույթների մակերեսներ։", "Тела вращения, их сечения и площади поверхностей."),
  lessons: [
    lesson(
      "cylinder",
      ["Cylinder", "Գլան", "Цилиндр"],
      {
        en: ["Define the cylinder as a body of revolution and name its bases, axis, generators, radius and height", "Describe the axial section and the sections parallel and perpendicular to the axis", "Derive and apply the formulas for the lateral and total surface area of a cylinder"],
        hy: ["Սահմանել գլանը որպես պտտման մարմին և անվանել նրա հիմքերը, առանցքը, ծնորդները, շառավիղը և բարձրությունը", "Նկարագրել առանցքային հատույթը և առանցքին զուգահեռ ու ուղղահայաց հատույթները", "Արտածել և կիրառել գլանի կողմնային և լրիվ մակերևույթների մակերեսների բանաձևերը"],
        ru: ["Определять цилиндр как тело вращения и называть его основания, ось, образующие, радиус и высоту", "Описывать осевое сечение и сечения, параллельные и перпендикулярные оси", "Выводить и применять формулы площадей боковой и полной поверхности цилиндра"],
      },
      {
        en: `## Definition

Rotate a rectangle $OO_1A_1A$ about the line $OO_1$ of one of its sides. The solid swept out is a **cylinder** (more precisely, a right circular cylinder). The sides $OA$ and $O_1A_1$ sweep two equal discs, the **bases**, lying in parallel planes; the side $AA_1$ sweeps the **lateral surface**. The line $OO_1$ is the **axis**, every segment of the lateral surface parallel to the axis joining the two base circles is a **generator**, the base radius $r$ is the **radius** of the cylinder, and $h = OO_1$ is its **height**. All generators are parallel, equal to the height, and perpendicular to the bases.

Equivalently, a cylinder is the body bounded by two equal circles in parallel planes and the segments joining their corresponding points.

## Sections

- A plane through the axis cuts the cylinder in the **axial section**, a rectangle with sides $2r$ and $h$. All axial sections are equal.
- A plane parallel to the axis cuts a rectangle whose base is a chord of the base circle and whose height is $h$.
- A plane perpendicular to the axis cuts a circle equal to the base.

**Example 1.** A cylinder has radius $5$ and height $7$. A plane parallel to the axis at distance $3$ from it cuts the base circle in a chord of length $2\\sqrt{25 - 9} = 8$, so the section is a rectangle $8 \\times 7$ of area $56$.

**Example 2.** The axial section is a square of area $16$. Its side is $4$, so $h = 4$ and $2r = 4$, $r = 2$. A cylinder whose axial section is a square is called **equilateral**: $h = 2r$.

**Example 3.** The diagonal of the axial section is $10$ and makes $60^\\circ$ with the base. Then $h = 10\\sin 60^\\circ = 5\\sqrt3$ and $2r = 10\\cos 60^\\circ = 5$, so $r = \\dfrac52$.

## Surface area

Cut the lateral surface along a generator and unroll it: the result (the **development**) is a rectangle with sides $2\\pi r$ (the base circumference) and $h$. Hence
$$S_{\\text{lat}} = 2\\pi r h, \\qquad S = S_{\\text{lat}} + 2S_{\\text{base}} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(r + h).$$

**Example 4.** $r = 3$, $h = 5$: $S_{\\text{lat}} = 30\\pi$, $S = 30\\pi + 18\\pi = 48\\pi$.

**Example 5.** For the cylinder of Example 3, $S_{\\text{lat}} = 2\\pi \\cdot \\dfrac52 \\cdot 5\\sqrt3 = 25\\sqrt3\\,\\pi$.

**Example 6.** The lateral surface of a cylinder is $36\\pi$ and the height is $6$. Then $2\\pi r \\cdot 6 = 36\\pi$, $r = 3$. If instead the development of the lateral surface is a square, then $h = 2\\pi r$; with $r = 2$ this gives $h = 4\\pi$.

**Example 7.** An equilateral cylinder has total surface area $54\\pi$. From $2\\pi r(r + 2r) = 6\\pi r^2 = 54\\pi$ we get $r = 3$, $h = 6$.

**Example 8.** A regular triangular prism is inscribed in a cylinder with $r = 2$ and $h = 5$ (its bases are inscribed in the base circles). The base side is $a = r\\sqrt3 = 2\\sqrt3$, so the lateral surface of the prism is $3 \\cdot 2\\sqrt3 \\cdot 5 = 30\\sqrt3$, while that of the cylinder is $20\\pi$.

### Exercises

1. $r = 4$, $h = 9$. Find $S_{\\text{lat}}$ and $S$.
2. The axial section of a cylinder is a square of area $36$. Find $r$, $h$ and $S$.
3. $r = 10$, $h = 4$. Find the area of the section by a plane parallel to the axis at distance $6$ from it.
4. $S_{\\text{lat}} = 40\\pi$ and $r = 4$; find $h$. The development of the lateral surface of another cylinder is a square and $h = 6\\pi$; find $r$.
5. The diagonal of the axial section is $2\\sqrt{13}$ and the height is $4$. Find $r$ and $S_{\\text{lat}}$.
6. An equilateral cylinder has $S_{\\text{lat}} = 32\\pi$. Find $r$ and $h$.
7. A regular quadrilateral prism with base side $6$ and height $10$ is inscribed in a cylinder. Find the lateral surface area of the cylinder.
8. Prove that a section of a cylinder by a plane parallel to the axis is a rectangle.

### Answers

1. $72\\pi$; $72\\pi + 32\\pi = 104\\pi$. 2. Side $6$: $r = 3$, $h = 6$, $S = 2\\pi \\cdot 3 \\cdot 9 = 54\\pi$. 3. Chord $2\\sqrt{100 - 36} = 16$, area $64$. 4. $h = 5$; $2\\pi r = 6\\pi$, $r = 3$. 5. $2r = \\sqrt{52 - 16} = 6$, $r = 3$, $S_{\\text{lat}} = 24\\pi$. 6. $2\\pi r \\cdot 2r = 32\\pi$, $r = 2\\sqrt2$, $h = 4\\sqrt2$. 7. $r = \\dfrac{6\\sqrt2}{2} = 3\\sqrt2$, $S_{\\text{lat}} = 2\\pi \\cdot 3\\sqrt2 \\cdot 10 = 60\\sqrt2\\,\\pi$. 8. The plane meets the parallel base planes along parallel chords; the generators through the chord endpoints lie in the section plane (they are parallel to the axis, hence to the plane, and pass through its points), are perpendicular to the bases and equal to $h$. So the section is a parallelogram with right angles.`,
        hy: `## Սահմանում

Պտտենք $OO_1A_1A$ ուղղանկյունը նրա կողմերից մեկի՝ $OO_1$ ուղղի շուրջ։ Առաջացած մարմինը **գլան** է (ավելի ճիշտ՝ ուղիղ շրջանային գլան)։ $OA$ և $O_1A_1$ կողմերը գծում են երկու հավասար շրջաններ՝ **հիմքերը**, որոնք ընկած են զուգահեռ հարթություններում, $AA_1$ կողմը գծում է **կողմնային մակերևույթը**։ $OO_1$ ուղիղն **առանցքն** է, կողմնային մակերևույթի՝ առանցքին զուգահեռ և հիմքերի շրջանագծերը միացնող յուրաքանչյուր հատված **ծնորդ** է, հիմքի $r$ շառավիղը գլանի **շառավիղն** է, իսկ $h = OO_1$-ը՝ նրա **բարձրությունը**։ Բոլոր ծնորդները զուգահեռ են, հավասար են բարձրությանը և ուղղահայաց են հիմքերին։

Համարժեքորեն՝ գլանը զուգահեռ հարթություններում ընկած երկու հավասար շրջաններով և դրանց համապատասխան կետերը միացնող հատվածներով սահմանափակված մարմինն է։

## Հատույթներ

- Առանցքով անցնող հարթությունը գլանը հատում է **առանցքային հատույթով**՝ $2r$ և $h$ կողմերով ուղղանկյունով։ Բոլոր առանցքային հատույթները հավասար են։
- Առանցքին զուգահեռ հարթությունը հատում է ուղղանկյուն, որի հիմքը հիմքի շրջանագծի լար է, իսկ բարձրությունը՝ $h$։
- Առանցքին ուղղահայաց հարթությունը հատում է հիմքին հավասար շրջան։

**Օրինակ 1։** Գլանի շառավիղը $5$ է, բարձրությունը՝ $7$։ Առանցքից $3$ հեռավորության վրա առանցքին զուգահեռ հարթությունը հիմքի շրջանագիծը հատում է $2\\sqrt{25 - 9} = 8$ երկարությամբ լարով, ուստի հատույթը $8 \\times 7$ ուղղանկյուն է՝ $56$ մակերեսով։

**Օրինակ 2։** Առանցքային հատույթը $16$ մակերեսով քառակուսի է։ Նրա կողմը $4$ է, ուստի $h = 4$ և $2r = 4$, $r = 2$։ Գլանը, որի առանցքային հատույթը քառակուսի է, կոչվում է **հավասարակողմ**․ $h = 2r$։

**Օրինակ 3։** Առանցքային հատույթի անկյունագիծը $10$ է և հիմքի հետ կազմում է $60^\\circ$։ Այդ դեպքում $h = 10\\sin 60^\\circ = 5\\sqrt3$ և $2r = 10\\cos 60^\\circ = 5$, ուստի $r = \\dfrac52$։

## Մակերևույթի մակերես

Կտրենք կողմնային մակերևույթը ծնորդով և փռենք․ արդյունքը (**փռվածքը**) $2\\pi r$ (հիմքի շրջանագծի երկարություն) և $h$ կողմերով ուղղանկյուն է։ Հետևաբար
$$S_{\\text{կողմ}} = 2\\pi r h, \\qquad S = S_{\\text{կողմ}} + 2S_{\\text{հիմք}} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(r + h).$$

**Օրինակ 4։** $r = 3$, $h = 5$․ $S_{\\text{կողմ}} = 30\\pi$, $S = 30\\pi + 18\\pi = 48\\pi$։

**Օրինակ 5։** Օրինակ 3-ի գլանի համար $S_{\\text{կողմ}} = 2\\pi \\cdot \\dfrac52 \\cdot 5\\sqrt3 = 25\\sqrt3\\,\\pi$։

**Օրինակ 6։** Գլանի կողմնային մակերևույթը $36\\pi$ է, բարձրությունը՝ $6$։ Այդ դեպքում $2\\pi r \\cdot 6 = 36\\pi$, $r = 3$։ Եթե փոխարենը կողմնային մակերևույթի փռվածքը քառակուսի է, ապա $h = 2\\pi r$, $r = 2$-ի դեպքում սա տալիս է $h = 4\\pi$։

**Օրինակ 7։** Հավասարակողմ գլանի լրիվ մակերևույթի մակերեսը $54\\pi$ է։ $2\\pi r(r + 2r) = 6\\pi r^2 = 54\\pi$-ից ստանում ենք $r = 3$, $h = 6$։

**Օրինակ 8։** $r = 2$ և $h = 5$ գլանում ներգծված է կանոնավոր եռանկյուն պրիզմա (նրա հիմքերը ներգծված են հիմքերի շրջանագծերում)։ Հիմքի կողմը $a = r\\sqrt3 = 2\\sqrt3$ է, ուստի պրիզմայի կողմնային մակերևույթը $3 \\cdot 2\\sqrt3 \\cdot 5 = 30\\sqrt3$ է, իսկ գլանինը՝ $20\\pi$։

### Վարժություններ

1. $r = 4$, $h = 9$։ Գտեք $S_{\\text{կողմ}}$-ը և $S$-ը։
2. Գլանի առանցքային հատույթը $36$ մակերեսով քառակուսի է։ Գտեք $r$-ը, $h$-ը և $S$-ը։
3. $r = 10$, $h = 4$։ Գտեք առանցքից $6$ հեռավորության վրա առանցքին զուգահեռ հարթությամբ հատույթի մակերեսը։
4. $S_{\\text{կողմ}} = 40\\pi$ և $r = 4$, գտեք $h$-ը։ Մեկ այլ գլանի կողմնային մակերևույթի փռվածքը քառակուսի է, և $h = 6\\pi$, գտեք $r$-ը։
5. Առանցքային հատույթի անկյունագիծը $2\\sqrt{13}$ է, բարձրությունը՝ $4$։ Գտեք $r$-ը և $S_{\\text{կողմ}}$-ը։
6. Հավասարակողմ գլանի $S_{\\text{կողմ}} = 32\\pi$։ Գտեք $r$-ը և $h$-ը։
7. Գլանում ներգծված է $6$ հիմքի կողմով և $10$ բարձրությամբ կանոնավոր քառանկյուն պրիզմա։ Գտեք գլանի կողմնային մակերևույթի մակերեսը։
8. Ապացուցեք, որ գլանի՝ առանցքին զուգահեռ հարթությամբ հատույթն ուղղանկյուն է։

### Պատասխաններ

1. $72\\pi$, $72\\pi + 32\\pi = 104\\pi$։ 2. Կողմը $6$․ $r = 3$, $h = 6$, $S = 2\\pi \\cdot 3 \\cdot 9 = 54\\pi$։ 3. Լարը $2\\sqrt{100 - 36} = 16$, մակերեսը $64$։ 4. $h = 5$, $2\\pi r = 6\\pi$, $r = 3$։ 5. $2r = \\sqrt{52 - 16} = 6$, $r = 3$, $S_{\\text{կողմ}} = 24\\pi$։ 6. $2\\pi r \\cdot 2r = 32\\pi$, $r = 2\\sqrt2$, $h = 4\\sqrt2$։ 7. $r = \\dfrac{6\\sqrt2}{2} = 3\\sqrt2$, $S_{\\text{կողմ}} = 2\\pi \\cdot 3\\sqrt2 \\cdot 10 = 60\\sqrt2\\,\\pi$։ 8. Հարթությունը զուգահեռ հիմքերի հարթությունները հատում է զուգահեռ լարերով, լարերի ծայրակետերով ծնորդներն ընկած են հատող հարթության մեջ (դրանք զուգահեռ են առանցքին, հետևաբար՝ հարթությանը, և անցնում են նրա կետերով), ուղղահայաց են հիմքերին և հավասար են $h$-ի։ Ուրեմն հատույթն ուղիղ անկյուններով զուգահեռագիծ է։`,
        ru: `## Определение

Повернём прямоугольник $OO_1A_1A$ вокруг прямой $OO_1$, содержащей одну из его сторон. Заметаемое тело — **цилиндр** (точнее, прямой круговой цилиндр). Стороны $OA$ и $O_1A_1$ заметают два равных круга — **основания**, лежащие в параллельных плоскостях; сторона $AA_1$ заметает **боковую поверхность**. Прямая $OO_1$ — **ось**, каждый отрезок боковой поверхности, параллельный оси и соединяющий окружности оснований, — **образующая**, радиус основания $r$ — **радиус** цилиндра, а $h = OO_1$ — его **высота**. Все образующие параллельны, равны высоте и перпендикулярны основаниям.

Равносильно, цилиндр — тело, ограниченное двумя равными кругами в параллельных плоскостях и отрезками, соединяющими их соответственные точки.

## Сечения

- Плоскость, проходящая через ось, пересекает цилиндр по **осевому сечению** — прямоугольнику со сторонами $2r$ и $h$. Все осевые сечения равны.
- Плоскость, параллельная оси, вырезает прямоугольник, основание которого — хорда окружности основания, а высота $h$.
- Плоскость, перпендикулярная оси, вырезает круг, равный основанию.

**Пример 1.** Цилиндр имеет радиус $5$ и высоту $7$. Плоскость, параллельная оси и отстоящая от неё на $3$, пересекает окружность основания по хорде длины $2\\sqrt{25 - 9} = 8$, поэтому сечение — прямоугольник $8 \\times 7$ площади $56$.

**Пример 2.** Осевое сечение — квадрат площади $16$. Его сторона $4$, поэтому $h = 4$ и $2r = 4$, $r = 2$. Цилиндр, осевое сечение которого — квадрат, называют **равносторонним**: $h = 2r$.

**Пример 3.** Диагональ осевого сечения равна $10$ и образует с основанием $60^\\circ$. Тогда $h = 10\\sin 60^\\circ = 5\\sqrt3$ и $2r = 10\\cos 60^\\circ = 5$, поэтому $r = \\dfrac52$.

## Площадь поверхности

Разрежем боковую поверхность по образующей и развернём: результат (**развёртка**) — прямоугольник со сторонами $2\\pi r$ (длина окружности основания) и $h$. Значит,
$$S_{\\text{бок}} = 2\\pi r h, \\qquad S = S_{\\text{бок}} + 2S_{\\text{осн}} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(r + h).$$

**Пример 4.** $r = 3$, $h = 5$: $S_{\\text{бок}} = 30\\pi$, $S = 30\\pi + 18\\pi = 48\\pi$.

**Пример 5.** Для цилиндра из примера 3 $S_{\\text{бок}} = 2\\pi \\cdot \\dfrac52 \\cdot 5\\sqrt3 = 25\\sqrt3\\,\\pi$.

**Пример 6.** Боковая поверхность цилиндра равна $36\\pi$, высота $6$. Тогда $2\\pi r \\cdot 6 = 36\\pi$, $r = 3$. Если же развёртка боковой поверхности — квадрат, то $h = 2\\pi r$; при $r = 2$ это даёт $h = 4\\pi$.

**Пример 7.** Площадь полной поверхности равностороннего цилиндра равна $54\\pi$. Из $2\\pi r(r + 2r) = 6\\pi r^2 = 54\\pi$ получаем $r = 3$, $h = 6$.

**Пример 8.** В цилиндр с $r = 2$ и $h = 5$ вписана правильная треугольная призма (её основания вписаны в окружности оснований). Сторона основания $a = r\\sqrt3 = 2\\sqrt3$, поэтому боковая поверхность призмы $3 \\cdot 2\\sqrt3 \\cdot 5 = 30\\sqrt3$, а цилиндра — $20\\pi$.

### Упражнения

1. $r = 4$, $h = 9$. Найдите $S_{\\text{бок}}$ и $S$.
2. Осевое сечение цилиндра — квадрат площади $36$. Найдите $r$, $h$ и $S$.
3. $r = 10$, $h = 4$. Найдите площадь сечения плоскостью, параллельной оси и отстоящей от неё на $6$.
4. $S_{\\text{бок}} = 40\\pi$ и $r = 4$; найдите $h$. Развёртка боковой поверхности другого цилиндра — квадрат, и $h = 6\\pi$; найдите $r$.
5. Диагональ осевого сечения равна $2\\sqrt{13}$, высота $4$. Найдите $r$ и $S_{\\text{бок}}$.
6. У равностороннего цилиндра $S_{\\text{бок}} = 32\\pi$. Найдите $r$ и $h$.
7. В цилиндр вписана правильная четырёхугольная призма со стороной основания $6$ и высотой $10$. Найдите площадь боковой поверхности цилиндра.
8. Докажите, что сечение цилиндра плоскостью, параллельной оси, — прямоугольник.

### Ответы

1. $72\\pi$; $72\\pi + 32\\pi = 104\\pi$. 2. Сторона $6$: $r = 3$, $h = 6$, $S = 2\\pi \\cdot 3 \\cdot 9 = 54\\pi$. 3. Хорда $2\\sqrt{100 - 36} = 16$, площадь $64$. 4. $h = 5$; $2\\pi r = 6\\pi$, $r = 3$. 5. $2r = \\sqrt{52 - 16} = 6$, $r = 3$, $S_{\\text{бок}} = 24\\pi$. 6. $2\\pi r \\cdot 2r = 32\\pi$, $r = 2\\sqrt2$, $h = 4\\sqrt2$. 7. $r = \\dfrac{6\\sqrt2}{2} = 3\\sqrt2$, $S_{\\text{бок}} = 2\\pi \\cdot 3\\sqrt2 \\cdot 10 = 60\\sqrt2\\,\\pi$. 8. Плоскость пересекает параллельные плоскости оснований по параллельным хордам; образующие через концы хорд лежат в секущей плоскости (они параллельны оси, значит, и плоскости, и проходят через её точки), перпендикулярны основаниям и равны $h$. Значит, сечение — параллелограмм с прямыми углами.`,
      },
      [
        q(t("The axial section of a cylinder is…", "Գլանի առանցքային հատույթը…", "Осевое сечение цилиндра —"), [t("a circle", "շրջան է", "круг"), t("a rectangle", "ուղղանկյուն է", "прямоугольник"), t("a triangle", "եռանկյուն է", "треугольник")], 1),
        q(t("The lateral surface area of a cylinder equals…", "Գլանի կողմնային մակերևույթի մակերեսը հավասար է…", "Площадь боковой поверхности цилиндра равна…"), [t("πr²h", "πr²h", "πr²h"), t("2πrh", "2πrh", "2πrh"), t("πrh", "πrh", "πrh")], 1),
        q(t("A cylinder with r = 1 and h = 1 has total surface area…", "r = 1 և h = 1 գլանի լրիվ մակերևույթի մակերեսը…", "Площадь полной поверхности цилиндра с r = 1 и h = 1 равна…"), [t("2π", "2π", "2π"), t("3π", "3π", "3π"), t("4π", "4π", "4π")], 2),
        q(t("A section of a cylinder perpendicular to the axis is…", "Գլանի՝ առանցքին ուղղահայաց հատույթը…", "Сечение цилиндра, перпендикулярное оси, —"), [t("a circle equal to the base", "հիմքին հավասար շրջան է", "круг, равный основанию"), t("a rectangle", "ուղղանկյուն է", "прямоугольник"), t("an ellipse", "էլիպս է", "эллипс")], 0),
        q(t("A cylinder is obtained by rotating…", "Գլանը ստացվում է պտտելով…", "Цилиндр получается вращением…"), [t("a rectangle about its side", "ուղղանկյունը նրա կողմի շուրջ", "прямоугольника вокруг его стороны"), t("a triangle about its leg", "եռանկյունը նրա էջի շուրջ", "треугольника вокруг катета"), t("a circle about its diameter", "շրջանը նրա տրամագծի շուրջ", "круга вокруг диаметра")], 0),
        q(t("The axial section of a cylinder is a square with side 4. Its radius is…", "Գլանի առանցքային հատույթը 4 կողմով քառակուսի է։ Շառավիղը…", "Осевое сечение цилиндра — квадрат со стороной 4. Его радиус равен…"), [t("4", "4", "4"), t("2", "2", "2"), t("1", "1", "1")], 1),
      ],
    ),
    lesson(
      "cone",
      ["Cone and truncated cone", "Կոն և հատած կոն", "Конус и усечённый конус"],
      {
        en: ["Define the cone as a body of revolution, name its apex, base, axis, generators, height and radius, and relate them by l² = h² + r²", "Describe the axial section and the sections parallel to the base, and derive the lateral surface area πrl from the development", "Define the truncated cone and compute its slant height and surface areas with S_lat = π(R + r)l"],
        hy: ["Սահմանել կոնը որպես պտտման մարմին, անվանել նրա գագաթը, հիմքը, առանցքը, ծնորդները, բարձրությունը և շառավիղը և կապել դրանք l² = h² + r² առնչությամբ", "Նկարագրել առանցքային հատույթը և հիմքին զուգահեռ հատույթները, փռվածքից արտածել կողմնային մակերևույթի πrl մակերեսը", "Սահմանել հատած կոնը և հաշվել նրա ծնորդը և մակերևույթների մակերեսները π(R + r)l բանաձևով"],
        ru: ["Определять конус как тело вращения, называть его вершину, основание, ось, образующие, высоту и радиус и связывать их соотношением l² = h² + r²", "Описывать осевое сечение и сечения, параллельные основанию, и выводить площадь боковой поверхности πrl из развёртки", "Определять усечённый конус и вычислять его образующую и площади поверхностей по формуле π(R + r)l"],
      },
      {
        en: `## Cone

Rotate a right triangle $POA$ with the right angle at $O$ about the leg $PO$. The solid swept out is a **cone** (a right circular cone). The point $P$ is the **apex**, the leg $OA$ sweeps the **base**, a disc of **radius** $r = OA$, the hypotenuse $PA$ sweeps the **lateral surface**, and the line $PO$ is the **axis**. Every segment joining the apex to a point of the base circle is a **generator**; all generators are equal to $l = PA$. The **height** is $h = PO$. From the right triangle
$$l^2 = h^2 + r^2.$$

## Sections

- A plane through the axis cuts the **axial section**: an isosceles triangle with lateral sides $l$ and base $2r$. The angle at the apex of this triangle is the **apex angle** of the cone.
- A plane parallel to the base at distance $h_1$ from the apex cuts a circle of radius $r_1 = r \\cdot \\dfrac{h_1}{h}$ (the homothety with centre $P$ and ratio $\\dfrac{h_1}{h}$ maps the base onto the section). It cuts off a cone similar to the original one.

**Example 1.** $r = 3$, $h = 4$: $l = 5$. The axial section is an isosceles triangle with sides $5$, $5$, $6$.

**Example 2.** The axial section is an equilateral triangle with side $6$. Then $l = 6$, $r = 3$, $h = 3\\sqrt3$. Such a cone is called **equilateral**.

**Example 3.** A cone has height $12$ and radius $5$. A plane parallel to the base at distance $4$ from the apex cuts a circle of radius $5 \\cdot \\dfrac{4}{12} = \\dfrac53$ and area $\\dfrac{25\\pi}{9}$.

**Example 4.** A generator of length $10$ is inclined at $30^\\circ$ to the base. Then $h = 10\\sin 30^\\circ = 5$ and $r = 10\\cos 30^\\circ = 5\\sqrt3$.

## Lateral surface area

Cut the lateral surface along a generator and unroll it: the **development** is a circular sector of radius $l$ whose arc has the length of the base circle, $2\\pi r$. The area of a sector is half the product of the arc and the radius, so
$$S_{\\text{lat}} = \\frac12 \\cdot 2\\pi r \\cdot l = \\pi r l, \\qquad S = \\pi r l + \\pi r^2 = \\pi r(r + l).$$
The angle of the sector is $\\alpha = 360^\\circ \\cdot \\dfrac{r}{l}$.

**Example 5.** For $r = 3$, $l = 5$: $S_{\\text{lat}} = 15\\pi$, $S = 24\\pi$, and the development is a sector of $360^\\circ \\cdot \\dfrac35 = 216^\\circ$.

**Example 6.** The development of the lateral surface is a semicircle. Then $\\dfrac rl = \\dfrac12$, $l = 2r$, so the axial section is an equilateral triangle. For the cone of Example 4, $S_{\\text{lat}} = \\pi \\cdot 5\\sqrt3 \\cdot 10 = 50\\sqrt3\\,\\pi$.

## Truncated cone

The part of a cone between the base and a section parallel to it is a **truncated cone**. Its **bases** are discs of radii $R$ and $r$ ($R > r$), its **height** $h$ is the distance between them, and its **generators** are the pieces of the generators of the cone; all are equal to the slant height $l$. In the axial section (an isosceles trapezoid with bases $2R$, $2r$ and legs $l$)
$$l^2 = h^2 + (R - r)^2.$$
The lateral surface area is the difference of the lateral areas of two cones; it equals
$$S_{\\text{lat}} = \\pi (R + r)\\, l, \\qquad S = \\pi(R + r)l + \\pi R^2 + \\pi r^2.$$

**Example 7.** $R = 7$, $r = 2$, $h = 12$: $l = \\sqrt{144 + 25} = 13$, $S_{\\text{lat}} = \\pi \\cdot 9 \\cdot 13 = 117\\pi$, $S = 117\\pi + 49\\pi + 4\\pi = 170\\pi$.

**Example 8.** A cone with radius $6$ and height $9$ is cut by a plane parallel to the base at height $6$ above it. The small cone has height $3$ and radius $6 \\cdot \\dfrac39 = 2$. The truncated cone has $R = 6$, $r = 2$, $h = 6$, $l = \\sqrt{36 + 16} = 2\\sqrt{13}$ and $S_{\\text{lat}} = 16\\sqrt{13}\\,\\pi$. Check by subtraction: the big cone has $l = \\sqrt{81 + 36} = 3\\sqrt{13}$ and $S_{\\text{lat}} = 18\\sqrt{13}\\,\\pi$, the small one $l = \\sqrt{13}$ and $S_{\\text{lat}} = 2\\sqrt{13}\\,\\pi$; the difference is $16\\sqrt{13}\\,\\pi$.

### Exercises

1. $r = 6$, $h = 8$. Find the generator, $S_{\\text{lat}}$ and $S$.
2. The axial section of a cone is an equilateral triangle with side $10$. Find $r$, $h$ and $S_{\\text{lat}}$.
3. A cone has $h = 10$ and $r = 4$. Find the area of the section by a plane parallel to the base at distance $5$ from the apex.
4. Find the angle of the development of the lateral surface for $l = 9$, $r = 3$. For another cone the development is a quarter of a disc and $r = 2$; find $l$ and $h$.
5. A generator of length $8$ makes $60^\\circ$ with the base. Find $h$, $r$ and $S_{\\text{lat}}$.
6. A truncated cone has $R = 10$, $r = 4$, $h = 8$. Find $l$, $S_{\\text{lat}}$ and $S$.
7. A truncated cone has $l = 13$, $R = 9$, $r = 4$. Find $h$.
8. Prove that the sections of a cone by planes parallel to the base are circles whose radii are proportional to their distances from the apex.

### Answers

1. $l = 10$, $S_{\\text{lat}} = 60\\pi$, $S = 96\\pi$. 2. $r = 5$, $l = 10$, $h = 5\\sqrt3$, $S_{\\text{lat}} = 50\\pi$. 3. Radius $4 \\cdot \\dfrac{5}{10} = 2$, area $4\\pi$. 4. $360^\\circ \\cdot \\dfrac39 = 120^\\circ$; $\\dfrac rl = \\dfrac14$, $l = 8$, $h = \\sqrt{64 - 4} = 2\\sqrt{15}$. 5. $h = 4\\sqrt3$, $r = 4$, $S_{\\text{lat}} = 32\\pi$. 6. $l = \\sqrt{64 + 36} = 10$, $S_{\\text{lat}} = 140\\pi$, $S = 140\\pi + 100\\pi + 16\\pi = 256\\pi$. 7. $h = \\sqrt{169 - 25} = 12$. 8. The homothety with centre at the apex and ratio $\\dfrac{h_1}{h}$ maps the base plane onto the parallel plane at distance $h_1$ and the base circle onto the section, so the section is a circle of radius $r \\cdot \\dfrac{h_1}{h}$.`,
        hy: `## Կոն

Պտտենք $O$ գագաթում ուղիղ անկյունով $POA$ ուղղանկյուն եռանկյունը $PO$ էջի շուրջ։ Առաջացած մարմինը **կոն** է (ուղիղ շրջանային կոն)։ $P$ կետը **գագաթն** է, $OA$ էջը գծում է **հիմքը**՝ $r = OA$ **շառավղով** շրջան, $PA$ ներքնաձիգը գծում է **կողմնային մակերևույթը**, իսկ $PO$ ուղիղն **առանցքն** է։ Գագաթը հիմքի շրջանագծի կետի հետ միացնող յուրաքանչյուր հատված **ծնորդ** է, բոլոր ծնորդները հավասար են $l = PA$-ի։ **Բարձրությունը** $h = PO$ է։ Ուղղանկյուն եռանկյունից
$$l^2 = h^2 + r^2.$$

## Հատույթներ

- Առանցքով անցնող հարթությունը հատում է **առանցքային հատույթը**․ $l$ սրունքներով և $2r$ հիմքով հավասարասրուն եռանկյուն։ Այս եռանկյան գագաթի անկյունը կոնի **գագաթի անկյունն** է։
- Գագաթից $h_1$ հեռավորության վրա հիմքին զուգահեռ հարթությունը հատում է $r_1 = r \\cdot \\dfrac{h_1}{h}$ շառավղով շրջան ($P$ կենտրոնով և $\\dfrac{h_1}{h}$ գործակցով հոմոթետիան հիմքն արտապատկերում է հատույթի վրա)։ Այն անջատում է սկզբնականին նման կոն։

**Օրինակ 1։** $r = 3$, $h = 4$․ $l = 5$։ Առանցքային հատույթը $5$, $5$, $6$ կողմերով հավասարասրուն եռանկյուն է։

**Օրինակ 2։** Առանցքային հատույթը $6$ կողմով հավասարակողմ եռանկյուն է։ Այդ դեպքում $l = 6$, $r = 3$, $h = 3\\sqrt3$։ Այդպիսի կոնը կոչվում է **հավասարակողմ**։

**Օրինակ 3։** Կոնի բարձրությունը $12$ է, շառավիղը՝ $5$։ Գագաթից $4$ հեռավորության վրա հիմքին զուգահեռ հարթությունը հատում է $5 \\cdot \\dfrac{4}{12} = \\dfrac53$ շառավղով և $\\dfrac{25\\pi}{9}$ մակերեսով շրջան։

**Օրինակ 4։** $10$ երկարությամբ ծնորդը հիմքի հետ կազմում է $30^\\circ$։ Այդ դեպքում $h = 10\\sin 30^\\circ = 5$ և $r = 10\\cos 30^\\circ = 5\\sqrt3$։

## Կողմնային մակերևույթի մակերես

Կտրենք կողմնային մակերևույթը ծնորդով և փռենք․ **փռվածքը** $l$ շառավղով շրջանային սեկտոր է, որի աղեղի երկարությունը հիմքի շրջանագծի երկարությունն է՝ $2\\pi r$։ Սեկտորի մակերեսն աղեղի և շառավղի արտադրյալի կեսն է, ուստի
$$S_{\\text{կողմ}} = \\frac12 \\cdot 2\\pi r \\cdot l = \\pi r l, \\qquad S = \\pi r l + \\pi r^2 = \\pi r(r + l).$$
Սեկտորի անկյունը $\\alpha = 360^\\circ \\cdot \\dfrac{r}{l}$ է։

**Օրինակ 5։** $r = 3$, $l = 5$-ի դեպքում $S_{\\text{կողմ}} = 15\\pi$, $S = 24\\pi$, իսկ փռվածքը $360^\\circ \\cdot \\dfrac35 = 216^\\circ$ սեկտոր է։

**Օրինակ 6։** Կողմնային մակերևույթի փռվածքը կիսաշրջան է։ Այդ դեպքում $\\dfrac rl = \\dfrac12$, $l = 2r$, ուստի առանցքային հատույթը հավասարակողմ եռանկյուն է։ Օրինակ 4-ի կոնի համար $S_{\\text{կողմ}} = \\pi \\cdot 5\\sqrt3 \\cdot 10 = 50\\sqrt3\\,\\pi$։

## Հատած կոն

Կոնի՝ հիմքի և նրան զուգահեռ հատույթի միջև ընկած մասը **հատած կոն** է։ Նրա **հիմքերը** $R$ և $r$ ($R > r$) շառավիղներով շրջաններ են, **բարձրությունը**՝ $h$, դրանց հեռավորությունն է, իսկ **ծնորդները** կոնի ծնորդների մասերն են, բոլորը հավասար են $l$-ի։ Առանցքային հատույթում ($2R$, $2r$ հիմքերով և $l$ սրունքներով հավասարասրուն սեղան)
$$l^2 = h^2 + (R - r)^2.$$
Կողմնային մակերևույթի մակերեսն երկու կոնների կողմնային մակերեսների տարբերությունն է, այն հավասար է
$$S_{\\text{կողմ}} = \\pi (R + r)\\, l, \\qquad S = \\pi(R + r)l + \\pi R^2 + \\pi r^2.$$

**Օրինակ 7։** $R = 7$, $r = 2$, $h = 12$․ $l = \\sqrt{144 + 25} = 13$, $S_{\\text{կողմ}} = \\pi \\cdot 9 \\cdot 13 = 117\\pi$, $S = 117\\pi + 49\\pi + 4\\pi = 170\\pi$։

**Օրինակ 8։** $6$ շառավղով և $9$ բարձրությամբ կոնը հատված է հիմքին զուգահեռ հարթությամբ՝ հիմքից $6$ բարձրության վրա։ Փոքր կոնի բարձրությունը $3$ է, շառավիղը՝ $6 \\cdot \\dfrac39 = 2$։ Հատած կոնի համար $R = 6$, $r = 2$, $h = 6$, $l = \\sqrt{36 + 16} = 2\\sqrt{13}$ և $S_{\\text{կողմ}} = 16\\sqrt{13}\\,\\pi$։ Ստուգում հանումով․ մեծ կոնի $l = \\sqrt{81 + 36} = 3\\sqrt{13}$ և $S_{\\text{կողմ}} = 18\\sqrt{13}\\,\\pi$, փոքրի՝ $l = \\sqrt{13}$ և $S_{\\text{կողմ}} = 2\\sqrt{13}\\,\\pi$, տարբերությունը $16\\sqrt{13}\\,\\pi$ է։

### Վարժություններ

1. $r = 6$, $h = 8$։ Գտեք ծնորդը, $S_{\\text{կողմ}}$-ը և $S$-ը։
2. Կոնի առանցքային հատույթը $10$ կողմով հավասարակողմ եռանկյուն է։ Գտեք $r$-ը, $h$-ը և $S_{\\text{կողմ}}$-ը։
3. Կոնի $h = 10$ և $r = 4$։ Գտեք գագաթից $5$ հեռավորության վրա հիմքին զուգահեռ հարթությամբ հատույթի մակերեսը։
4. Գտեք կողմնային մակերևույթի փռվածքի անկյունը $l = 9$, $r = 3$-ի դեպքում։ Մեկ այլ կոնի փռվածքը շրջանի քառորդ է, և $r = 2$, գտեք $l$-ը և $h$-ը։
5. $8$ երկարությամբ ծնորդը հիմքի հետ կազմում է $60^\\circ$։ Գտեք $h$-ը, $r$-ը և $S_{\\text{կողմ}}$-ը։
6. Հատած կոնի $R = 10$, $r = 4$, $h = 8$։ Գտեք $l$-ը, $S_{\\text{կողմ}}$-ը և $S$-ը։
7. Հատած կոնի $l = 13$, $R = 9$, $r = 4$։ Գտեք $h$-ը։
8. Ապացուցեք, որ կոնի՝ հիմքին զուգահեռ հարթություններով հատույթները շրջաններ են, որոնց շառավիղները համեմատական են գագաթից դրանց հեռավորություններին։

### Պատասխաններ

1. $l = 10$, $S_{\\text{կողմ}} = 60\\pi$, $S = 96\\pi$։ 2. $r = 5$, $l = 10$, $h = 5\\sqrt3$, $S_{\\text{կողմ}} = 50\\pi$։ 3. Շառավիղը $4 \\cdot \\dfrac{5}{10} = 2$, մակերեսը $4\\pi$։ 4. $360^\\circ \\cdot \\dfrac39 = 120^\\circ$, $\\dfrac rl = \\dfrac14$, $l = 8$, $h = \\sqrt{64 - 4} = 2\\sqrt{15}$։ 5. $h = 4\\sqrt3$, $r = 4$, $S_{\\text{կողմ}} = 32\\pi$։ 6. $l = \\sqrt{64 + 36} = 10$, $S_{\\text{կողմ}} = 140\\pi$, $S = 140\\pi + 100\\pi + 16\\pi = 256\\pi$։ 7. $h = \\sqrt{169 - 25} = 12$։ 8. Գագաթում կենտրոնով և $\\dfrac{h_1}{h}$ գործակցով հոմոթետիան հիմքի հարթությունն արտապատկերում է $h_1$ հեռավորության վրա գտնվող զուգահեռ հարթության վրա, իսկ հիմքի շրջանագիծը՝ հատույթի վրա, ուստի հատույթը $r \\cdot \\dfrac{h_1}{h}$ շառավղով շրջան է։`,
        ru: `## Конус

Повернём прямоугольный треугольник $POA$ с прямым углом $O$ вокруг катета $PO$. Заметаемое тело — **конус** (прямой круговой конус). Точка $P$ — **вершина**, катет $OA$ заметает **основание** — круг **радиуса** $r = OA$, гипотенуза $PA$ заметает **боковую поверхность**, а прямая $PO$ — **ось**. Каждый отрезок, соединяющий вершину с точкой окружности основания, — **образующая**; все образующие равны $l = PA$. **Высота** $h = PO$. Из прямоугольного треугольника
$$l^2 = h^2 + r^2.$$

## Сечения

- Плоскость через ось даёт **осевое сечение** — равнобедренный треугольник с боковыми сторонами $l$ и основанием $2r$. Угол при вершине этого треугольника — **угол при вершине** конуса.
- Плоскость, параллельная основанию и отстоящая от вершины на $h_1$, даёт круг радиуса $r_1 = r \\cdot \\dfrac{h_1}{h}$ (гомотетия с центром $P$ и коэффициентом $\\dfrac{h_1}{h}$ переводит основание в сечение). Она отсекает конус, подобный исходному.

**Пример 1.** $r = 3$, $h = 4$: $l = 5$. Осевое сечение — равнобедренный треугольник со сторонами $5$, $5$, $6$.

**Пример 2.** Осевое сечение — равносторонний треугольник со стороной $6$. Тогда $l = 6$, $r = 3$, $h = 3\\sqrt3$. Такой конус называют **равносторонним**.

**Пример 3.** Конус имеет высоту $12$ и радиус $5$. Плоскость, параллельная основанию и отстоящая от вершины на $4$, вырезает круг радиуса $5 \\cdot \\dfrac{4}{12} = \\dfrac53$ и площади $\\dfrac{25\\pi}{9}$.

**Пример 4.** Образующая длины $10$ наклонена к основанию под углом $30^\\circ$. Тогда $h = 10\\sin 30^\\circ = 5$ и $r = 10\\cos 30^\\circ = 5\\sqrt3$.

## Площадь боковой поверхности

Разрежем боковую поверхность по образующей и развернём: **развёртка** — круговой сектор радиуса $l$, дуга которого имеет длину окружности основания $2\\pi r$. Площадь сектора равна половине произведения дуги на радиус, поэтому
$$S_{\\text{бок}} = \\frac12 \\cdot 2\\pi r \\cdot l = \\pi r l, \\qquad S = \\pi r l + \\pi r^2 = \\pi r(r + l).$$
Угол сектора $\\alpha = 360^\\circ \\cdot \\dfrac{r}{l}$.

**Пример 5.** Для $r = 3$, $l = 5$: $S_{\\text{бок}} = 15\\pi$, $S = 24\\pi$, а развёртка — сектор в $360^\\circ \\cdot \\dfrac35 = 216^\\circ$.

**Пример 6.** Развёртка боковой поверхности — полукруг. Тогда $\\dfrac rl = \\dfrac12$, $l = 2r$, поэтому осевое сечение — равносторонний треугольник. Для конуса из примера 4 $S_{\\text{бок}} = \\pi \\cdot 5\\sqrt3 \\cdot 10 = 50\\sqrt3\\,\\pi$.

## Усечённый конус

Часть конуса между основанием и параллельным ему сечением — **усечённый конус**. Его **основания** — круги радиусов $R$ и $r$ ($R > r$), **высота** $h$ — расстояние между ними, а **образующие** — части образующих конуса; все они равны $l$. В осевом сечении (равнобедренная трапеция с основаниями $2R$, $2r$ и боковыми сторонами $l$)
$$l^2 = h^2 + (R - r)^2.$$
Площадь боковой поверхности — разность боковых поверхностей двух конусов; она равна
$$S_{\\text{бок}} = \\pi (R + r)\\, l, \\qquad S = \\pi(R + r)l + \\pi R^2 + \\pi r^2.$$

**Пример 7.** $R = 7$, $r = 2$, $h = 12$: $l = \\sqrt{144 + 25} = 13$, $S_{\\text{бок}} = \\pi \\cdot 9 \\cdot 13 = 117\\pi$, $S = 117\\pi + 49\\pi + 4\\pi = 170\\pi$.

**Пример 8.** Конус с радиусом $6$ и высотой $9$ рассечён плоскостью, параллельной основанию, на высоте $6$ над ним. Малый конус имеет высоту $3$ и радиус $6 \\cdot \\dfrac39 = 2$. У усечённого конуса $R = 6$, $r = 2$, $h = 6$, $l = \\sqrt{36 + 16} = 2\\sqrt{13}$ и $S_{\\text{бок}} = 16\\sqrt{13}\\,\\pi$. Проверка вычитанием: у большого конуса $l = \\sqrt{81 + 36} = 3\\sqrt{13}$ и $S_{\\text{бок}} = 18\\sqrt{13}\\,\\pi$, у малого $l = \\sqrt{13}$ и $S_{\\text{бок}} = 2\\sqrt{13}\\,\\pi$; разность равна $16\\sqrt{13}\\,\\pi$.

### Упражнения

1. $r = 6$, $h = 8$. Найдите образующую, $S_{\\text{бок}}$ и $S$.
2. Осевое сечение конуса — равносторонний треугольник со стороной $10$. Найдите $r$, $h$ и $S_{\\text{бок}}$.
3. У конуса $h = 10$ и $r = 4$. Найдите площадь сечения плоскостью, параллельной основанию и отстоящей от вершины на $5$.
4. Найдите угол развёртки боковой поверхности при $l = 9$, $r = 3$. У другого конуса развёртка — четверть круга и $r = 2$; найдите $l$ и $h$.
5. Образующая длины $8$ образует с основанием $60^\\circ$. Найдите $h$, $r$ и $S_{\\text{бок}}$.
6. У усечённого конуса $R = 10$, $r = 4$, $h = 8$. Найдите $l$, $S_{\\text{бок}}$ и $S$.
7. У усечённого конуса $l = 13$, $R = 9$, $r = 4$. Найдите $h$.
8. Докажите, что сечения конуса плоскостями, параллельными основанию, — круги, радиусы которых пропорциональны их расстояниям от вершины.

### Ответы

1. $l = 10$, $S_{\\text{бок}} = 60\\pi$, $S = 96\\pi$. 2. $r = 5$, $l = 10$, $h = 5\\sqrt3$, $S_{\\text{бок}} = 50\\pi$. 3. Радиус $4 \\cdot \\dfrac{5}{10} = 2$, площадь $4\\pi$. 4. $360^\\circ \\cdot \\dfrac39 = 120^\\circ$; $\\dfrac rl = \\dfrac14$, $l = 8$, $h = \\sqrt{64 - 4} = 2\\sqrt{15}$. 5. $h = 4\\sqrt3$, $r = 4$, $S_{\\text{бок}} = 32\\pi$. 6. $l = \\sqrt{64 + 36} = 10$, $S_{\\text{бок}} = 140\\pi$, $S = 140\\pi + 100\\pi + 16\\pi = 256\\pi$. 7. $h = \\sqrt{169 - 25} = 12$. 8. Гомотетия с центром в вершине и коэффициентом $\\dfrac{h_1}{h}$ переводит плоскость основания в параллельную плоскость на расстоянии $h_1$, а окружность основания — в сечение, поэтому сечение — круг радиуса $r \\cdot \\dfrac{h_1}{h}$.`,
      },
      [
        q(t("The axial section of a cone is…", "Կոնի առանցքային հատույթը…", "Осевое сечение конуса —"), [t("an isosceles triangle", "հավասարասրուն եռանկյուն է", "равнобедренный треугольник"), t("a rectangle", "ուղղանկյուն է", "прямоугольник"), t("a circle", "շրջան է", "круг")], 0),
        q(t("The lateral surface area of a cone with radius r and generator l is…", "r շառավղով և l ծնորդով կոնի կողմնային մակերևույթի մակերեսը…", "Площадь боковой поверхности конуса с радиусом r и образующей l равна…"), [t("2πrl", "2πrl", "2πrl"), t("πrl", "πrl", "πrl"), t("πr²l", "πr²l", "πr²l")], 1),
        q(t("A cone with r = 3 and l = 5 has total surface area…", "r = 3 և l = 5 կոնի լրիվ մակերևույթի մակերեսը…", "Площадь полной поверхности конуса с r = 3 и l = 5 равна…"), [t("15π", "15π", "15π"), t("24π", "24π", "24π"), t("30π", "30π", "30π")], 1),
        q(t("A cone with r = 3 and h = 4 has generator…", "r = 3 և h = 4 կոնի ծնորդը…", "Образующая конуса с r = 3 и h = 4 равна…"), [t("5", "5", "5"), t("7", "7", "7"), t("√7", "√7", "√7")], 0),
        q(t("The development of the lateral surface of a cone is…", "Կոնի կողմնային մակերևույթի փռվածքը…", "Развёртка боковой поверхности конуса —"), [t("a rectangle", "ուղղանկյուն է", "прямоугольник"), t("a circular sector", "շրջանային սեկտոր է", "круговой сектор"), t("a triangle", "եռանկյուն է", "треугольник")], 1),
        q(t("The lateral surface area of a truncated cone with radii R, r and generator l is…", "R, r շառավիղներով և l ծնորդով հատած կոնի կողմնային մակերևույթի մակերեսը…", "Площадь боковой поверхности усечённого конуса с радиусами R, r и образующей l равна…"), [t("π(R + r)l", "π(R + r)l", "π(R + r)l"), t("π(R − r)l", "π(R − r)l", "π(R − r)l"), t("πRrl", "πRrl", "πRrl")], 0),
      ],
    ),
    lesson(
      "sphere-ball",
      ["Sphere and ball; equation of a sphere", "Սֆերա և գունդ, սֆերայի հավասարում", "Сфера и шар; уравнение сферы"],
      {
        en: ["Define the sphere and the ball, their centre, radius, diameter and chords, and the sphere as a body of revolution", "Derive the equation (x − a)² + (y − b)² + (z − c)² = R² and bring a general equation to this form by completing squares", "Write equations of spheres from given data, locate points relative to a sphere and find sections by coordinate planes"],
        hy: ["Սահմանել սֆերան և գունդը, դրանց կենտրոնը, շառավիղը, տրամագիծը և լարերը, սֆերան որպես պտտման մարմին", "Արտածել (x − a)² + (y − b)² + (z − c)² = R² հավասարումը և ընդհանուր հավասարումը բերել այս տեսքի՝ լրացնելով քառակուսիները", "Գրել սֆերաների հավասարումներ տրված տվյալներով, որոշել կետերի դիրքը սֆերայի նկատմամբ և գտնել կոորդինատային հարթություններով հատույթները"],
        ru: ["Определять сферу и шар, их центр, радиус, диаметр и хорды, сферу как тело вращения", "Выводить уравнение (x − a)² + (y − b)² + (z − c)² = R² и приводить общее уравнение к этому виду выделением полных квадратов", "Записывать уравнения сфер по данным, определять положение точек относительно сферы и находить сечения координатными плоскостями"],
      },
      {
        en: `## Sphere and ball

The **sphere** with centre $O$ and radius $R$ is the set of all points of space at distance $R$ from $O$. The **ball** is the set of points at distance at most $R$ from $O$; the sphere is its surface. A segment joining the centre to a point of the sphere is a **radius**, a segment joining two points of the sphere is a **chord**, and a chord through the centre is a **diameter** (of length $2R$).

The sphere is a body of revolution: rotating a semicircle about its diameter sweeps the sphere, and rotating a half-disc sweeps the ball. The sphere is symmetric with respect to its centre, every diameter and every plane through the centre.

## Equation of a sphere

**Theorem.** In rectangular coordinates the sphere with centre $C(a; b; c)$ and radius $R$ has the equation
$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2.$$

*Proof.* A point $M(x; y; z)$ lies on the sphere exactly when $MC = R$, that is, $MC^2 = R^2$; by the distance formula $MC^2 = (x - a)^2 + (y - b)^2 + (z - c)^2$. $\\blacksquare$

The ball is given by the inequality $(x - a)^2 + (y - b)^2 + (z - c)^2 \\le R^2$. A point is inside the ball, on the sphere or outside according as the left side is less than, equal to or greater than $R^2$.

**Example 1.** Centre $(1; -2; 3)$, $R = 4$: $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$. The point $(1; 2; 3)$ gives $0 + 16 + 0 = 16$, so it lies on the sphere; the origin gives $1 + 4 + 9 = 14 < 16$, so it lies inside the ball.

**Example 2.** Bring $x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$ to standard form. Completing squares: $(x - 1)^2 - 1 + (y + 2)^2 - 4 + (z - 3)^2 - 9 + 5 = 0$, so $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$: centre $(1; -2; 3)$, $R = 3$. An equation $x^2 + y^2 + z^2 + 2px + 2qy + 2sz + d = 0$ defines a sphere only if $p^2 + q^2 + s^2 - d > 0$.

**Example 3.** The sphere with diameter $AB$, $A(1; 2; 3)$, $B(5; -2; 7)$. The centre is the midpoint $(3; 0; 5)$ and $R = \\dfrac12 AB = \\dfrac12\\sqrt{16 + 16 + 16} = 2\\sqrt3$: $(x - 3)^2 + y^2 + (z - 5)^2 = 12$.

**Example 4.** The sphere with centre $(2; 1; -1)$ through $(4; 3; 0)$: $R^2 = 4 + 4 + 1 = 9$, so $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 9$.

**Example 5.** The sphere through the origin and the points $(2; 0; 0)$, $(0; 4; 0)$, $(0; 0; 6)$. Try $x^2 + y^2 + z^2 + 2px + 2qy + 2sz + d = 0$: the origin gives $d = 0$; $(2; 0; 0)$ gives $4 + 4p = 0$, $p = -1$; similarly $q = -2$, $s = -3$. So $x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$, i.e. $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 14$: centre $(1; 2; 3)$, $R = \\sqrt{14}$.

## Sections by coordinate planes

Substituting $z = 0$ into the equation of a sphere gives the equation of its section by the plane $Oxy$: a circle (or a point, or nothing).

**Example 6.** The sphere $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 25$ and the plane $z = 0$: $(x - 1)^2 + (y + 2)^2 = 25 - 9 = 16$, a circle with centre $(1; -2; 0)$ and radius $4$. The plane $z = 3$ through the centre gives the **great circle** of radius $5$. The plane $z = 8$ touches the sphere at the single point $(1; -2; 8)$, and $z = 9$ does not meet it.

**Example 7.** Where is the point $(3; 4; 1)$ relative to the sphere $x^2 + y^2 + z^2 = 25$? $9 + 16 + 1 = 26 > 25$: outside. The point $(3; 4; 0)$ lies on the sphere.

**Example 8.** Prove that the points $M$ from which a segment $AB$ is seen at a right angle ($\\angle AMB = 90^\\circ$) form the sphere with diameter $AB$ (without $A$ and $B$). Let $O$ be the midpoint of $AB$. Then $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{OA} - \\overrightarrow{OM}) \\cdot (\\overrightarrow{OB} - \\overrightarrow{OM}) = (\\overrightarrow{OA} - \\overrightarrow{OM}) \\cdot (-\\overrightarrow{OA} - \\overrightarrow{OM}) = OM^2 - OA^2$, which is $0$ exactly when $OM = OA$. $\\blacksquare$

### Exercises

1. Write the equation of the sphere with centre $(-1; 0; 2)$ and radius $5$. Where are the points $(2; 4; 2)$ and $(0; 0; 0)$ relative to it?
2. Find the centre and radius of the sphere $x^2 + y^2 + z^2 + 4x - 2y - 8z + 5 = 0$.
3. Write the equation of the sphere with diameter $AB$, $A(-1; 3; 2)$, $B(3; -1; 6)$.
4. Write the equation of the sphere with centre $(0; 3; -4)$ passing through the origin.
5. Find the radius of the circle in which the plane $z = 12$ cuts the sphere $x^2 + y^2 + z^2 = 169$.
6. Find the centre and radius of the sphere through the origin and the points $(6; 0; 0)$, $(0; 8; 0)$, $(0; 0; 10)$.
7. Does the sphere $x^2 + y^2 + z^2 - 2x + 2y = 7$ pass through $(2; 1; 2)$? Where is the origin relative to it?
8. For which values of $d$ does $x^2 + y^2 + z^2 - 6x + 2y + d = 0$ define a sphere? Find its radius for $d = 1$.

### Answers

1. $(x + 1)^2 + y^2 + (z - 2)^2 = 25$; $9 + 16 + 0 = 25$, on the sphere; $1 + 0 + 4 = 5 < 25$, inside. 2. $(x + 2)^2 + (y - 1)^2 + (z - 4)^2 = 16$: centre $(-2; 1; 4)$, $R = 4$. 3. Centre $(1; 1; 4)$, $R = 2\\sqrt3$: $(x - 1)^2 + (y - 1)^2 + (z - 4)^2 = 12$. 4. $R = 5$: $x^2 + (y - 3)^2 + (z + 4)^2 = 25$. 5. $x^2 + y^2 = 169 - 144 = 25$, radius $5$. 6. $x^2 + y^2 + z^2 - 6x - 8y - 10z = 0$: centre $(3; 4; 5)$, $R = \\sqrt{50} = 5\\sqrt2$. 7. $4 + 1 + 4 - 4 + 2 = 7$, yes; $(x - 1)^2 + (y + 1)^2 + z^2 = 9$, the origin is at distance $\\sqrt2 < 3$ from the centre, inside. 8. $(x - 3)^2 + (y + 1)^2 + z^2 = 10 - d$, so $d < 10$; for $d = 1$, $R = 3$.`,
        hy: `## Սֆերա և գունդ

$O$ կենտրոնով և $R$ շառավղով **սֆերան** տարածության այն բոլոր կետերի բազմությունն է, որոնք $O$-ից $R$ հեռավորության վրա են։ **Գունդը** $O$-ից առավելագույնը $R$ հեռավորության վրա գտնվող կետերի բազմությունն է, սֆերան նրա մակերևույթն է։ Կենտրոնը սֆերայի կետի հետ միացնող հատվածը **շառավիղ** է, սֆերայի երկու կետ միացնող հատվածը՝ **լար**, իսկ կենտրոնով անցնող լարը՝ **տրամագիծ** ($2R$ երկարությամբ)։

Սֆերան պտտման մարմին է․ կիսաշրջանագիծը տրամագծի շուրջ պտտելիս գծվում է սֆերան, իսկ կիսաշրջանը պտտելիս՝ գունդը։ Սֆերան համաչափ է իր կենտրոնի, յուրաքանչյուր տրամագծի և կենտրոնով անցնող յուրաքանչյուր հարթության նկատմամբ։

## Սֆերայի հավասարումը

**Թեորեմ։** Ուղղանկյուն կոորդինատներում $C(a; b; c)$ կենտրոնով և $R$ շառավղով սֆերան ունի
$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$
հավասարումը։

*Ապացույց։* $M(x; y; z)$ կետն ընկած է սֆերայի վրա ճիշտ այն դեպքում, երբ $MC = R$, այսինքն՝ $MC^2 = R^2$, իսկ հեռավորության բանաձևով $MC^2 = (x - a)^2 + (y - b)^2 + (z - c)^2$։ $\\blacksquare$

Գունդը տրվում է $(x - a)^2 + (y - b)^2 + (z - c)^2 \\le R^2$ անհավասարությամբ։ Կետը գնդի ներսում է, սֆերայի վրա կամ դրսում՝ կախված նրանից, թե ձախ մասը փոքր է, հավասար է, թե մեծ է $R^2$-ից։

**Օրինակ 1։** Կենտրոնը $(1; -2; 3)$, $R = 4$․ $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$։ $(1; 2; 3)$ կետը տալիս է $0 + 16 + 0 = 16$, ուստի այն սֆերայի վրա է, սկզբնակետը տալիս է $1 + 4 + 9 = 14 < 16$, ուստի այն գնդի ներսում է։

**Օրինակ 2։** Բերենք $x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$-ն կանոնական տեսքի։ Լրացնելով քառակուսիները՝ $(x - 1)^2 - 1 + (y + 2)^2 - 4 + (z - 3)^2 - 9 + 5 = 0$, ուստի $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$․ կենտրոնը $(1; -2; 3)$, $R = 3$։ $x^2 + y^2 + z^2 + 2px + 2qy + 2sz + d = 0$ հավասարումը սֆերա է որոշում միայն այն դեպքում, երբ $p^2 + q^2 + s^2 - d > 0$։

**Օրինակ 3։** $AB$ տրամագծով սֆերան, $A(1; 2; 3)$, $B(5; -2; 7)$։ Կենտրոնը $(3; 0; 5)$ միջնակետն է, և $R = \\dfrac12 AB = \\dfrac12\\sqrt{16 + 16 + 16} = 2\\sqrt3$․ $(x - 3)^2 + y^2 + (z - 5)^2 = 12$։

**Օրինակ 4։** $(2; 1; -1)$ կենտրոնով և $(4; 3; 0)$-ով անցնող սֆերան․ $R^2 = 4 + 4 + 1 = 9$, ուստի $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 9$։

**Օրինակ 5։** Սկզբնակետով և $(2; 0; 0)$, $(0; 4; 0)$, $(0; 0; 6)$ կետերով անցնող սֆերան։ Փորձենք $x^2 + y^2 + z^2 + 2px + 2qy + 2sz + d = 0$․ սկզբնակետը տալիս է $d = 0$, $(2; 0; 0)$-ն՝ $4 + 4p = 0$, $p = -1$, նմանապես $q = -2$, $s = -3$։ Ուրեմն $x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$, այսինքն՝ $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 14$․ կենտրոնը $(1; 2; 3)$, $R = \\sqrt{14}$։

## Հատույթներ կոորդինատային հարթություններով

Սֆերայի հավասարման մեջ $z = 0$ տեղադրելը տալիս է $Oxy$ հարթությամբ հատույթի հավասարումը․ շրջանագիծ (կամ կետ, կամ ոչինչ)։

**Օրինակ 6։** $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 25$ սֆերան և $z = 0$ հարթությունը․ $(x - 1)^2 + (y + 2)^2 = 25 - 9 = 16$՝ $(1; -2; 0)$ կենտրոնով և $4$ շառավղով շրջանագիծ։ Կենտրոնով անցնող $z = 3$ հարթությունը տալիս է $5$ շառավղով **մեծ շրջանագիծը**։ $z = 8$ հարթությունը սֆերային շոշափում է միակ $(1; -2; 8)$ կետում, իսկ $z = 9$-ը նրան չի հատում։

**Օրինակ 7։** Որտե՞ղ է $(3; 4; 1)$ կետը $x^2 + y^2 + z^2 = 25$ սֆերայի նկատմամբ։ $9 + 16 + 1 = 26 > 25$․ դրսում։ $(3; 4; 0)$ կետը սֆերայի վրա է։

**Օրինակ 8։** Ապացուցենք, որ այն $M$ կետերը, որոնցից $AB$ հատվածն երևում է ուղիղ անկյան տակ ($\\angle AMB = 90^\\circ$), կազմում են $AB$ տրամագծով սֆերան (առանց $A$-ի և $B$-ի)։ $O$-ն լինի $AB$-ի միջնակետը։ Այդ դեպքում $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{OA} - \\overrightarrow{OM}) \\cdot (\\overrightarrow{OB} - \\overrightarrow{OM}) = (\\overrightarrow{OA} - \\overrightarrow{OM}) \\cdot (-\\overrightarrow{OA} - \\overrightarrow{OM}) = OM^2 - OA^2$, որը $0$ է ճիշտ այն դեպքում, երբ $OM = OA$։ $\\blacksquare$

### Վարժություններ

1. Գրեք $(-1; 0; 2)$ կենտրոնով և $5$ շառավղով սֆերայի հավասարումը։ Որտե՞ղ են $(2; 4; 2)$ և $(0; 0; 0)$ կետերը նրա նկատմամբ։
2. Գտեք $x^2 + y^2 + z^2 + 4x - 2y - 8z + 5 = 0$ սֆերայի կենտրոնը և շառավիղը։
3. Գրեք $AB$ տրամագծով սֆերայի հավասարումը, $A(-1; 3; 2)$, $B(3; -1; 6)$։
4. Գրեք $(0; 3; -4)$ կենտրոնով և սկզբնակետով անցնող սֆերայի հավասարումը։
5. Գտեք այն շրջանագծի շառավիղը, որով $z = 12$ հարթությունը հատում է $x^2 + y^2 + z^2 = 169$ սֆերան։
6. Գտեք սկզբնակետով և $(6; 0; 0)$, $(0; 8; 0)$, $(0; 0; 10)$ կետերով անցնող սֆերայի կենտրոնը և շառավիղը։
7. Անցնո՞ւմ է արդյոք $x^2 + y^2 + z^2 - 2x + 2y = 7$ սֆերան $(2; 1; 2)$ կետով։ Որտե՞ղ է սկզբնակետը նրա նկատմամբ։
8. $d$-ի ո՞ր արժեքների դեպքում է $x^2 + y^2 + z^2 - 6x + 2y + d = 0$-ն սֆերա որոշում։ Գտեք նրա շառավիղը $d = 1$-ի դեպքում։

### Պատասխաններ

1. $(x + 1)^2 + y^2 + (z - 2)^2 = 25$, $9 + 16 + 0 = 25$՝ սֆերայի վրա, $1 + 0 + 4 = 5 < 25$՝ ներսում։ 2. $(x + 2)^2 + (y - 1)^2 + (z - 4)^2 = 16$․ կենտրոնը $(-2; 1; 4)$, $R = 4$։ 3. Կենտրոնը $(1; 1; 4)$, $R = 2\\sqrt3$․ $(x - 1)^2 + (y - 1)^2 + (z - 4)^2 = 12$։ 4. $R = 5$․ $x^2 + (y - 3)^2 + (z + 4)^2 = 25$։ 5. $x^2 + y^2 = 169 - 144 = 25$, շառավիղը $5$։ 6. $x^2 + y^2 + z^2 - 6x - 8y - 10z = 0$․ կենտրոնը $(3; 4; 5)$, $R = \\sqrt{50} = 5\\sqrt2$։ 7. $4 + 1 + 4 - 4 + 2 = 7$, այո, $(x - 1)^2 + (y + 1)^2 + z^2 = 9$, սկզբնակետը կենտրոնից $\\sqrt2 < 3$ հեռավորության վրա է՝ ներսում։ 8. $(x - 3)^2 + (y + 1)^2 + z^2 = 10 - d$, ուստի $d < 10$, $d = 1$-ի դեպքում $R = 3$։`,
        ru: `## Сфера и шар

**Сфера** с центром $O$ и радиусом $R$ — множество всех точек пространства, удалённых от $O$ на расстояние $R$. **Шар** — множество точек, удалённых от $O$ не более чем на $R$; сфера — его поверхность. Отрезок, соединяющий центр с точкой сферы, — **радиус**, отрезок, соединяющий две точки сферы, — **хорда**, а хорда через центр — **диаметр** (длины $2R$).

Сфера — тело вращения: при вращении полуокружности вокруг диаметра заметается сфера, а при вращении полукруга — шар. Сфера симметрична относительно своего центра, любого диаметра и любой плоскости через центр.

## Уравнение сферы

**Теорема.** В прямоугольных координатах сфера с центром $C(a; b; c)$ и радиусом $R$ имеет уравнение
$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2.$$

*Доказательство.* Точка $M(x; y; z)$ лежит на сфере ровно тогда, когда $MC = R$, то есть $MC^2 = R^2$; по формуле расстояния $MC^2 = (x - a)^2 + (y - b)^2 + (z - c)^2$. $\\blacksquare$

Шар задаётся неравенством $(x - a)^2 + (y - b)^2 + (z - c)^2 \\le R^2$. Точка лежит внутри шара, на сфере или вне её в зависимости от того, меньше ли левая часть $R^2$, равна ему или больше.

**Пример 1.** Центр $(1; -2; 3)$, $R = 4$: $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$. Точка $(1; 2; 3)$ даёт $0 + 16 + 0 = 16$, поэтому лежит на сфере; начало координат даёт $1 + 4 + 9 = 14 < 16$, поэтому лежит внутри шара.

**Пример 2.** Приведём $x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$ к каноническому виду. Выделяя полные квадраты: $(x - 1)^2 - 1 + (y + 2)^2 - 4 + (z - 3)^2 - 9 + 5 = 0$, поэтому $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$: центр $(1; -2; 3)$, $R = 3$. Уравнение $x^2 + y^2 + z^2 + 2px + 2qy + 2sz + d = 0$ задаёт сферу, только если $p^2 + q^2 + s^2 - d > 0$.

**Пример 3.** Сфера с диаметром $AB$, $A(1; 2; 3)$, $B(5; -2; 7)$. Центр — середина $(3; 0; 5)$, и $R = \\dfrac12 AB = \\dfrac12\\sqrt{16 + 16 + 16} = 2\\sqrt3$: $(x - 3)^2 + y^2 + (z - 5)^2 = 12$.

**Пример 4.** Сфера с центром $(2; 1; -1)$, проходящая через $(4; 3; 0)$: $R^2 = 4 + 4 + 1 = 9$, поэтому $(x - 2)^2 + (y - 1)^2 + (z + 1)^2 = 9$.

**Пример 5.** Сфера через начало координат и точки $(2; 0; 0)$, $(0; 4; 0)$, $(0; 0; 6)$. Ищем $x^2 + y^2 + z^2 + 2px + 2qy + 2sz + d = 0$: начало координат даёт $d = 0$; $(2; 0; 0)$ даёт $4 + 4p = 0$, $p = -1$; аналогично $q = -2$, $s = -3$. Итак, $x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$, то есть $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 14$: центр $(1; 2; 3)$, $R = \\sqrt{14}$.

## Сечения координатными плоскостями

Подстановка $z = 0$ в уравнение сферы даёт уравнение её сечения плоскостью $Oxy$: окружность (или точка, или пустое множество).

**Пример 6.** Сфера $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 25$ и плоскость $z = 0$: $(x - 1)^2 + (y + 2)^2 = 25 - 9 = 16$ — окружность с центром $(1; -2; 0)$ и радиусом $4$. Плоскость $z = 3$ через центр даёт **большую окружность** радиуса $5$. Плоскость $z = 8$ касается сферы в единственной точке $(1; -2; 8)$, а $z = 9$ её не пересекает.

**Пример 7.** Где находится точка $(3; 4; 1)$ относительно сферы $x^2 + y^2 + z^2 = 25$? $9 + 16 + 1 = 26 > 25$: вне. Точка $(3; 4; 0)$ лежит на сфере.

**Пример 8.** Докажем, что точки $M$, из которых отрезок $AB$ виден под прямым углом ($\\angle AMB = 90^\\circ$), образуют сферу с диаметром $AB$ (без $A$ и $B$). Пусть $O$ — середина $AB$. Тогда $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{OA} - \\overrightarrow{OM}) \\cdot (\\overrightarrow{OB} - \\overrightarrow{OM}) = (\\overrightarrow{OA} - \\overrightarrow{OM}) \\cdot (-\\overrightarrow{OA} - \\overrightarrow{OM}) = OM^2 - OA^2$, что равно $0$ ровно тогда, когда $OM = OA$. $\\blacksquare$

### Упражнения

1. Напишите уравнение сферы с центром $(-1; 0; 2)$ и радиусом $5$. Где находятся точки $(2; 4; 2)$ и $(0; 0; 0)$ относительно неё?
2. Найдите центр и радиус сферы $x^2 + y^2 + z^2 + 4x - 2y - 8z + 5 = 0$.
3. Напишите уравнение сферы с диаметром $AB$, $A(-1; 3; 2)$, $B(3; -1; 6)$.
4. Напишите уравнение сферы с центром $(0; 3; -4)$, проходящей через начало координат.
5. Найдите радиус окружности, по которой плоскость $z = 12$ пересекает сферу $x^2 + y^2 + z^2 = 169$.
6. Найдите центр и радиус сферы, проходящей через начало координат и точки $(6; 0; 0)$, $(0; 8; 0)$, $(0; 0; 10)$.
7. Проходит ли сфера $x^2 + y^2 + z^2 - 2x + 2y = 7$ через точку $(2; 1; 2)$? Где находится начало координат относительно неё?
8. При каких $d$ уравнение $x^2 + y^2 + z^2 - 6x + 2y + d = 0$ задаёт сферу? Найдите её радиус при $d = 1$.

### Ответы

1. $(x + 1)^2 + y^2 + (z - 2)^2 = 25$; $9 + 16 + 0 = 25$ — на сфере; $1 + 0 + 4 = 5 < 25$ — внутри. 2. $(x + 2)^2 + (y - 1)^2 + (z - 4)^2 = 16$: центр $(-2; 1; 4)$, $R = 4$. 3. Центр $(1; 1; 4)$, $R = 2\\sqrt3$: $(x - 1)^2 + (y - 1)^2 + (z - 4)^2 = 12$. 4. $R = 5$: $x^2 + (y - 3)^2 + (z + 4)^2 = 25$. 5. $x^2 + y^2 = 169 - 144 = 25$, радиус $5$. 6. $x^2 + y^2 + z^2 - 6x - 8y - 10z = 0$: центр $(3; 4; 5)$, $R = \\sqrt{50} = 5\\sqrt2$. 7. $4 + 1 + 4 - 4 + 2 = 7$, да; $(x - 1)^2 + (y + 1)^2 + z^2 = 9$, начало координат удалено от центра на $\\sqrt2 < 3$ — внутри. 8. $(x - 3)^2 + (y + 1)^2 + z^2 = 10 - d$, поэтому $d < 10$; при $d = 1$ $R = 3$.`,
      },
      [
        q(t("A sphere is the set of points…", "Սֆերան այն կետերի բազմությունն է, որոնք…", "Сфера — множество точек…"), [t("at a given distance from the centre", "կենտրոնից տրված հեռավորության վրա են", "удалённых от центра на данное расстояние"), t("at distance at most R from the centre", "կենտրոնից առավելագույնը R հեռավորության վրա են", "удалённых от центра не более чем на R"), t("in one plane", "մեկ հարթության մեջ են", "лежащих в одной плоскости")], 0),
        q(t("The sphere (x − 1)² + (y + 2)² + z² = 9 has centre…", "(x − 1)² + (y + 2)² + z² = 9 սֆերայի կենտրոնը…", "Сфера (x − 1)² + (y + 2)² + z² = 9 имеет центр…"), [t("(1; −2; 0)", "(1; −2; 0)", "(1; −2; 0)"), t("(−1; 2; 0)", "(−1; 2; 0)", "(−1; 2; 0)"), t("(1; 2; 9)", "(1; 2; 9)", "(1; 2; 9)")], 0),
        q(t("The radius of the sphere x² + y² + z² = 4 is…", "x² + y² + z² = 4 սֆերայի շառավիղը…", "Радиус сферы x² + y² + z² = 4 равен…"), [t("4", "4", "4"), t("2", "2", "2"), t("16", "16", "16")], 1),
        q(t("Does (1; 2; 2) lie on the sphere x² + y² + z² = 9?", "Ընկա՞ծ է արդյոք (1; 2; 2)-ը x² + y² + z² = 9 սֆերայի վրա։", "Лежит ли (1; 2; 2) на сфере x² + y² + z² = 9?"), [t("yes", "այո", "да"), t("no, it is inside", "ոչ, այն ներսում է", "нет, внутри"), t("no, it is outside", "ոչ, այն դրսում է", "нет, снаружи")], 0),
        q(t("The ball with centre C and radius R is given by…", "C կենտրոնով և R շառավղով գունդը տրվում է…", "Шар с центром C и радиусом R задаётся…"), [t("MC = R", "MC = R", "MC = R"), t("MC ≤ R", "MC ≤ R", "MC ≤ R"), t("MC ≥ R", "MC ≥ R", "MC ≥ R")], 1),
        q(t("A plane through the centre of a sphere of radius R cuts it in…", "R շառավղով սֆերայի կենտրոնով անցնող հարթությունը նրան հատում է…", "Плоскость через центр сферы радиуса R пересекает её по…"), [t("a circle of radius R", "R շառավղով շրջանագծով", "окружности радиуса R"), t("a circle of radius R/2", "R/2 շառավղով շրջանագծով", "окружности радиуса R/2"), t("a single point", "մեկ կետով", "одной точке")], 0),
      ],
    ),
    lesson(
      "sphere-plane",
      ["Sphere and plane; tangent plane", "Սֆերա և հարթություն, շոշափող հարթություն", "Взаимное расположение сферы и плоскости; касательная плоскость"],
      {
        en: ["Describe the three mutual positions of a sphere and a plane by comparing the distance from the centre with the radius", "Prove that a plane cuts a sphere in a circle of radius √(R² − d²) and that the radius to the point of tangency is perpendicular to the tangent plane", "Solve problems about sections, tangent planes in coordinates and spheres inscribed in or circumscribed about a cube or box"],
        hy: ["Նկարագրել սֆերայի և հարթության երեք փոխադարձ դիրքերը՝ կենտրոնից հեռավորությունը համեմատելով շառավղի հետ", "Ապացուցել, որ հարթությունը սֆերան հատում է √(R² − d²) շառավղով շրջանագծով, և որ շոշափման կետին տարված շառավիղն ուղղահայաց է շոշափող հարթությանը", "Լուծել հատույթների, կոորդինատներով շոշափող հարթությունների և խորանարդում կամ ուղղանկյունանիստում ներգծած ու արտագծած սֆերաների խնդիրներ"],
        ru: ["Описывать три случая взаимного расположения сферы и плоскости, сравнивая расстояние от центра с радиусом", "Доказывать, что плоскость пересекает сферу по окружности радиуса √(R² − d²) и что радиус, проведённый в точку касания, перпендикулярен касательной плоскости", "Решать задачи о сечениях, касательных плоскостях в координатах и сферах, вписанных в куб или параллелепипед и описанных около них"],
      },
      {
        en: `## Three cases

Let a sphere have centre $O$ and radius $R$, and let a plane $\\alpha$ be at distance $d$ from $O$; $H$ is the foot of the perpendicular from $O$ to $\\alpha$.

**Theorem.** If $d < R$, the plane cuts the sphere in a circle with centre $H$ and radius $r = \\sqrt{R^2 - d^2}$. If $d = R$, they have exactly one common point $H$. If $d > R$, they have no common points.

*Proof.* For a point $M$ of the plane, $OM^2 = OH^2 + HM^2 = d^2 + HM^2$ (the triangle $OHM$ is right-angled at $H$). So $M$ is on the sphere, that is $OM = R$, exactly when $HM^2 = R^2 - d^2$. If $d < R$ this means $HM = \\sqrt{R^2 - d^2}$: a circle with centre $H$. If $d = R$ it means $HM = 0$, $M = H$. If $d > R$ there is no such $M$. $\\blacksquare$

A plane through the centre ($d = 0$) cuts the sphere in a **great circle** of radius $R$; any other section is a **small circle**.

**Example 1.** $R = 13$, $d = 5$: the section is a circle of radius $\\sqrt{169 - 25} = 12$ and area $144\\pi$.

**Example 2.** A plane cuts a sphere in a circle of radius $8$ at distance $6$ from the centre. Then $R = \\sqrt{64 + 36} = 10$.

**Example 3.** A sphere of radius $10$ is cut by two parallel planes on the same side of the centre at distances $6$ and $8$. The sections have radii $8$ and $6$. If the planes were on opposite sides, the radii would be the same but the distance between the planes would be $14$ instead of $2$.

## Tangent plane

A plane with exactly one common point with a sphere is a **tangent plane**, and the common point is the **point of tangency**.

**Theorem.** The radius drawn to the point of tangency is perpendicular to the tangent plane. Conversely, a plane through an endpoint of a radius perpendicular to it is tangent to the sphere.

*Proof.* If the plane is tangent, $d = R$ by the theorem above, so the foot $H$ of the perpendicular is at distance $R$ from $O$ and is the unique common point: the radius $OH$ is the perpendicular. Conversely, if the plane passes through the endpoint $A$ of a radius and is perpendicular to $OA$, then $d = OA = R$, so the plane is tangent. $\\blacksquare$

In coordinates: the tangent plane to the sphere with centre $C$ at its point $A$ has normal vector $\\overrightarrow{CA}$ and passes through $A$.

**Example 4.** The tangent plane to $x^2 + y^2 + z^2 = 9$ at $A(1; 2; 2)$: normal $\\overrightarrow{OA}\\{1; 2; 2\\}$, so $1(x - 1) + 2(y - 2) + 2(z - 2) = 0$, that is $x + 2y + 2z = 9$. Check: the distance from the origin to this plane is $\\dfrac{9}{3} = 3 = R$.

**Example 5.** The sphere $(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$ ($C(1; -1; 2)$, $R = 3$) and the planes $2x - y + 2z + c = 0$. The distance from $C$ is $\\dfrac{\\lvert 2 + 1 + 4 + c\\rvert}{3} = \\dfrac{\\lvert 7 + c\\rvert}{3}$. For $c = 4$ it is $\\dfrac{11}{3} > 3$: no common points. For $c = -5$ it is $\\dfrac23 < 3$: a circle of radius $\\sqrt{9 - \\dfrac49} = \\dfrac{\\sqrt{77}}{3}$. The plane is tangent when $\\lvert 7 + c\\rvert = 9$, i.e. $c = 2$ or $c = -16$.

**Example 6.** A section has area $9\\pi$ and lies at distance $4$ from the centre. Its radius is $3$, so $R = 5$. The tangent plane parallel to this section is at distance $5 - 4 = 1$ from it on the far side from the centre and $9$ on the near side.

## Spheres and polyhedra

A sphere is **inscribed** in a polyhedron if it touches all its faces, and **circumscribed** about it if it passes through all its vertices.

**Example 7.** For a cube with edge $a$ and centre $O$: the inscribed sphere touches each face at its centre, $R = \\dfrac a2$; the circumscribed sphere has $R = \\dfrac{a\\sqrt3}{2}$ (half the diagonal); the sphere through the midpoints of all edges has $R = \\dfrac{a\\sqrt2}{2}$ (the distance from $O$ to the midpoint of an edge).

**Example 8.** A sphere is circumscribed about a rectangular box $3 \\times 4 \\times 12$. Its centre is the centre of the box and its diameter is the diagonal $\\sqrt{9 + 16 + 144} = 13$, so $R = \\dfrac{13}{2}$.

### Exercises

1. $R = 10$, $d = 6$. Find the radius and area of the section.
2. A section has radius $12$ and lies at distance $9$ from the centre. Find $R$.
3. A section of area $16\\pi$ lies at distance $3$ from the centre. Find $R$ and the radius of the section by a parallel plane at distance $4$ on the other side of the centre, and the distance between the two planes.
4. Write the equation of the tangent plane to $x^2 + y^2 + z^2 = 9$ at $(2; -1; 2)$.
5. The sphere $(x - 2)^2 + y^2 + (z + 1)^2 = 16$ and the plane $x + 2y - 2z - 10 = 0$: find the radius of the section. For which $c$ is the plane $x + 2y - 2z + c = 0$ tangent to the sphere?
6. A sphere of radius $5$ is cut by two parallel planes on the same side of the centre at distances $3$ and $4$. Find the radii of the sections.
7. A cube has edge $6$. Find the radii of the inscribed sphere, the circumscribed sphere and the sphere touching all edges.
8. Prove: if a plane is tangent to a sphere, the radius to the point of tangency is perpendicular to the plane (without using the first theorem).

### Answers

1. $r = 8$, area $64\\pi$. 2. $R = 15$. 3. $r = 4$, $R = 5$; the other radius is $3$; the planes are $7$ apart. 4. Normal $\\{2; -1; 2\\}$: $2x - y + 2z = 9$. 5. Distance $\\dfrac{\\lvert 2 + 0 + 2 - 10\\rvert}{3} = 2$, $r = \\sqrt{16 - 4} = 2\\sqrt3$; tangent when $\\dfrac{\\lvert 4 + c\\rvert}{3} = 4$, $c = 8$ or $c = -16$. 6. $4$ and $3$. 7. $3$, $3\\sqrt3$, $3\\sqrt2$. 8. Let $A$ be the point of tangency and suppose $OA$ is not perpendicular to the plane; let $H \\ne A$ be the foot of the perpendicular. Then $OH < OA = R$, so $H$ is inside the ball, and by the first part of the lesson the plane would cut the sphere in a circle, not a single point. Contradiction.`,
        hy: `## Երեք դեպք

Սֆերան ունենա $O$ կենտրոն և $R$ շառավիղ, իսկ $\\alpha$ հարթությունը լինի $O$-ից $d$ հեռավորության վրա, $H$-ը $O$-ից $\\alpha$-ին տարված ուղղահայացի հիմքն է։

**Թեորեմ։** Եթե $d < R$, հարթությունը սֆերան հատում է $H$ կենտրոնով և $r = \\sqrt{R^2 - d^2}$ շառավղով շրջանագծով։ Եթե $d = R$, դրանք ունեն ճիշտ մեկ ընդհանուր կետ՝ $H$։ Եթե $d > R$, ընդհանուր կետեր չունեն։

*Ապացույց։* Հարթության $M$ կետի համար $OM^2 = OH^2 + HM^2 = d^2 + HM^2$ ($OHM$ եռանկյունն ուղղանկյուն է $H$-ում)։ Ուստի $M$-ը սֆերայի վրա է, այսինքն՝ $OM = R$, ճիշտ այն դեպքում, երբ $HM^2 = R^2 - d^2$։ Եթե $d < R$, սա նշանակում է $HM = \\sqrt{R^2 - d^2}$․ $H$ կենտրոնով շրջանագիծ։ Եթե $d = R$, նշանակում է $HM = 0$, $M = H$։ Եթե $d > R$, այդպիսի $M$ չկա։ $\\blacksquare$

Կենտրոնով անցնող հարթությունը ($d = 0$) սֆերան հատում է $R$ շառավղով **մեծ շրջանագծով**, ցանկացած այլ հատույթ **փոքր շրջանագիծ** է։

**Օրինակ 1։** $R = 13$, $d = 5$․ հատույթը $\\sqrt{169 - 25} = 12$ շառավղով և $144\\pi$ մակերեսով շրջան է։

**Օրինակ 2։** Հարթությունը սֆերան հատում է $8$ շառավղով շրջանագծով կենտրոնից $6$ հեռավորության վրա։ Այդ դեպքում $R = \\sqrt{64 + 36} = 10$։

**Օրինակ 3։** $10$ շառավղով սֆերան հատված է կենտրոնի նույն կողմում գտնվող երկու զուգահեռ հարթություններով՝ $6$ և $8$ հեռավորությունների վրա։ Հատույթների շառավիղները $8$ և $6$ են։ Եթե հարթությունները տարբեր կողմերում լինեին, շառավիղները նույնը կլինեին, բայց հարթությունների հեռավորությունը $2$-ի փոխարեն $14$ կլիներ։

## Շոշափող հարթություն

Սֆերայի հետ ճիշտ մեկ ընդհանուր կետ ունեցող հարթությունը **շոշափող հարթություն** է, իսկ ընդհանուր կետը՝ **շոշափման կետ**։

**Թեորեմ։** Շոշափման կետին տարված շառավիղն ուղղահայաց է շոշափող հարթությանը։ Հակառակը՝ շառավղի ծայրակետով անցնող և նրան ուղղահայաց հարթությունը շոշափում է սֆերան։

*Ապացույց։* Եթե հարթությունը շոշափող է, վերևի թեորեմով $d = R$, ուստի ուղղահայացի $H$ հիմքը $O$-ից $R$ հեռավորության վրա է և միակ ընդհանուր կետն է․ $OH$ շառավիղն ուղղահայացն է։ Հակառակը, եթե հարթությունն անցնում է շառավղի $A$ ծայրակետով և ուղղահայաց է $OA$-ին, ապա $d = OA = R$, ուստի հարթությունը շոշափող է։ $\\blacksquare$

Կոորդինատներով․ $C$ կենտրոնով սֆերային նրա $A$ կետում շոշափող հարթությունն ունի $\\overrightarrow{CA}$ նորմալ վեկտոր և անցնում է $A$-ով։

**Օրինակ 4։** $x^2 + y^2 + z^2 = 9$ սֆերային $A(1; 2; 2)$ կետում շոշափող հարթությունը․ նորմալը $\\overrightarrow{OA}\\{1; 2; 2\\}$, ուստի $1(x - 1) + 2(y - 2) + 2(z - 2) = 0$, այսինքն՝ $x + 2y + 2z = 9$։ Ստուգում․ սկզբնակետից այս հարթության հեռավորությունը $\\dfrac{9}{3} = 3 = R$ է։

**Օրինակ 5։** $(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$ սֆերան ($C(1; -1; 2)$, $R = 3$) և $2x - y + 2z + c = 0$ հարթությունները։ $C$-ից հեռավորությունը $\\dfrac{\\lvert 2 + 1 + 4 + c\\rvert}{3} = \\dfrac{\\lvert 7 + c\\rvert}{3}$ է։ $c = 4$-ի դեպքում այն $\\dfrac{11}{3} > 3$ է․ ընդհանուր կետեր չկան։ $c = -5$-ի դեպքում՝ $\\dfrac23 < 3$․ $\\sqrt{9 - \\dfrac49} = \\dfrac{\\sqrt{77}}{3}$ շառավղով շրջանագիծ։ Հարթությունը շոշափող է, երբ $\\lvert 7 + c\\rvert = 9$, այսինքն՝ $c = 2$ կամ $c = -16$։

**Օրինակ 6։** Հատույթի մակերեսը $9\\pi$ է, և այն կենտրոնից $4$ հեռավորության վրա է։ Նրա շառավիղը $3$ է, ուստի $R = 5$։ Այս հատույթին զուգահեռ շոշափող հարթությունը նրանից $5 - 4 = 1$ հեռավորության վրա է կենտրոնից հեռու կողմում և $9$՝ մոտ կողմում։

## Սֆերաներ և բազմանիստներ

Սֆերան **ներգծված** է բազմանիստում, եթե շոշափում է նրա բոլոր նիստերը, և **արտագծված** է նրա շուրջ, եթե անցնում է նրա բոլոր գագաթներով։

**Օրինակ 7։** $a$ կողով և $O$ կենտրոնով խորանարդի համար․ ներգծված սֆերան յուրաքանչյուր նիստ շոշափում է նրա կենտրոնում, $R = \\dfrac a2$, արտագծված սֆերայի $R = \\dfrac{a\\sqrt3}{2}$ (անկյունագծի կեսը), բոլոր կողերի միջնակետերով անցնող սֆերայի $R = \\dfrac{a\\sqrt2}{2}$ ($O$-ից կողի միջնակետի հեռավորությունը)։

**Օրինակ 8։** Սֆերան արտագծված է $3 \\times 4 \\times 12$ ուղղանկյունանիստի շուրջ։ Նրա կենտրոնն ուղղանկյունանիստի կենտրոնն է, իսկ տրամագիծը՝ $\\sqrt{9 + 16 + 144} = 13$ անկյունագիծը, ուստի $R = \\dfrac{13}{2}$։

### Վարժություններ

1. $R = 10$, $d = 6$։ Գտեք հատույթի շառավիղը և մակերեսը։
2. Հատույթի շառավիղը $12$ է, և այն կենտրոնից $9$ հեռավորության վրա է։ Գտեք $R$-ը։
3. $16\\pi$ մակերեսով հատույթը կենտրոնից $3$ հեռավորության վրա է։ Գտեք $R$-ը, կենտրոնի մյուս կողմում $4$ հեռավորության վրա զուգահեռ հարթությամբ հատույթի շառավիղը և երկու հարթությունների հեռավորությունը։
4. Գրեք $x^2 + y^2 + z^2 = 9$ սֆերային $(2; -1; 2)$ կետում շոշափող հարթության հավասարումը։
5. $(x - 2)^2 + y^2 + (z + 1)^2 = 16$ սֆերան և $x + 2y - 2z - 10 = 0$ հարթությունը․ գտեք հատույթի շառավիղը։ $c$-ի ո՞ր արժեքների դեպքում է $x + 2y - 2z + c = 0$ հարթությունը շոշափում սֆերան։
6. $5$ շառավղով սֆերան հատված է կենտրոնի նույն կողմում $3$ և $4$ հեռավորությունների վրա գտնվող երկու զուգահեռ հարթություններով։ Գտեք հատույթների շառավիղները։
7. Խորանարդի կողը $6$ է։ Գտեք ներգծված սֆերայի, արտագծված սֆերայի և բոլոր կողերը շոշափող սֆերայի շառավիղները։
8. Ապացուցեք․ եթե հարթությունը շոշափում է սֆերան, ապա շոշափման կետին տարված շառավիղն ուղղահայաց է հարթությանը (առանց առաջին թեորեմն օգտագործելու)։

### Պատասխաններ

1. $r = 8$, մակերեսը $64\\pi$։ 2. $R = 15$։ 3. $r = 4$, $R = 5$, մյուս շառավիղը $3$ է, հարթությունների հեռավորությունը $7$ է։ 4. Նորմալը $\\{2; -1; 2\\}$․ $2x - y + 2z = 9$։ 5. Հեռավորությունը $\\dfrac{\\lvert 2 + 0 + 2 - 10\\rvert}{3} = 2$, $r = \\sqrt{16 - 4} = 2\\sqrt3$, շոշափող է, երբ $\\dfrac{\\lvert 4 + c\\rvert}{3} = 4$, $c = 8$ կամ $c = -16$։ 6. $4$ և $3$։ 7. $3$, $3\\sqrt3$, $3\\sqrt2$։ 8. $A$-ն լինի շոշափման կետը, և ենթադրենք, թե $OA$-ն ուղղահայաց չէ հարթությանը, $H \\ne A$-ն լինի ուղղահայացի հիմքը։ Այդ դեպքում $OH < OA = R$, ուստի $H$-ը գնդի ներսում է, և դասի առաջին մասի համաձայն հարթությունը սֆերան կհատեր շրջանագծով, ոչ թե մեկ կետով։ Հակասություն։`,
        ru: `## Три случая

Пусть сфера имеет центр $O$ и радиус $R$, а плоскость $\\alpha$ удалена от $O$ на расстояние $d$; $H$ — основание перпендикуляра из $O$ на $\\alpha$.

**Теорема.** Если $d < R$, плоскость пересекает сферу по окружности с центром $H$ и радиусом $r = \\sqrt{R^2 - d^2}$. Если $d = R$, у них ровно одна общая точка $H$. Если $d > R$, общих точек нет.

*Доказательство.* Для точки $M$ плоскости $OM^2 = OH^2 + HM^2 = d^2 + HM^2$ (треугольник $OHM$ прямоугольный с прямым углом $H$). Значит, $M$ лежит на сфере, то есть $OM = R$, ровно тогда, когда $HM^2 = R^2 - d^2$. При $d < R$ это означает $HM = \\sqrt{R^2 - d^2}$: окружность с центром $H$. При $d = R$ это означает $HM = 0$, $M = H$. При $d > R$ такой $M$ нет. $\\blacksquare$

Плоскость через центр ($d = 0$) пересекает сферу по **большой окружности** радиуса $R$; любое другое сечение — **малая окружность**.

**Пример 1.** $R = 13$, $d = 5$: сечение — круг радиуса $\\sqrt{169 - 25} = 12$ и площади $144\\pi$.

**Пример 2.** Плоскость пересекает сферу по окружности радиуса $8$ на расстоянии $6$ от центра. Тогда $R = \\sqrt{64 + 36} = 10$.

**Пример 3.** Сфера радиуса $10$ рассечена двумя параллельными плоскостями по одну сторону от центра на расстояниях $6$ и $8$. Сечения имеют радиусы $8$ и $6$. Если бы плоскости были по разные стороны, радиусы остались бы теми же, но расстояние между плоскостями было бы $14$, а не $2$.

## Касательная плоскость

Плоскость, имеющая со сферой ровно одну общую точку, — **касательная плоскость**, а общая точка — **точка касания**.

**Теорема.** Радиус, проведённый в точку касания, перпендикулярен касательной плоскости. Обратно, плоскость, проходящая через конец радиуса перпендикулярно ему, касается сферы.

*Доказательство.* Если плоскость касательная, то по предыдущей теореме $d = R$, поэтому основание перпендикуляра $H$ удалено от $O$ на $R$ и является единственной общей точкой: радиус $OH$ и есть перпендикуляр. Обратно, если плоскость проходит через конец $A$ радиуса и перпендикулярна $OA$, то $d = OA = R$, поэтому плоскость касательная. $\\blacksquare$

В координатах: касательная плоскость к сфере с центром $C$ в её точке $A$ имеет нормальный вектор $\\overrightarrow{CA}$ и проходит через $A$.

**Пример 4.** Касательная плоскость к $x^2 + y^2 + z^2 = 9$ в точке $A(1; 2; 2)$: нормаль $\\overrightarrow{OA}\\{1; 2; 2\\}$, поэтому $1(x - 1) + 2(y - 2) + 2(z - 2) = 0$, то есть $x + 2y + 2z = 9$. Проверка: расстояние от начала координат до этой плоскости $\\dfrac{9}{3} = 3 = R$.

**Пример 5.** Сфера $(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$ ($C(1; -1; 2)$, $R = 3$) и плоскости $2x - y + 2z + c = 0$. Расстояние от $C$ равно $\\dfrac{\\lvert 2 + 1 + 4 + c\\rvert}{3} = \\dfrac{\\lvert 7 + c\\rvert}{3}$. При $c = 4$ оно равно $\\dfrac{11}{3} > 3$: общих точек нет. При $c = -5$ оно равно $\\dfrac23 < 3$: окружность радиуса $\\sqrt{9 - \\dfrac49} = \\dfrac{\\sqrt{77}}{3}$. Плоскость касательная, когда $\\lvert 7 + c\\rvert = 9$, то есть $c = 2$ или $c = -16$.

**Пример 6.** Сечение имеет площадь $9\\pi$ и удалено от центра на $4$. Его радиус $3$, поэтому $R = 5$. Касательная плоскость, параллельная этому сечению, удалена от него на $5 - 4 = 1$ с дальней от центра стороны и на $9$ с ближней.

## Сферы и многогранники

Сфера **вписана** в многогранник, если касается всех его граней, и **описана** около него, если проходит через все его вершины.

**Пример 7.** Для куба с ребром $a$ и центром $O$: вписанная сфера касается каждой грани в её центре, $R = \\dfrac a2$; описанная сфера имеет $R = \\dfrac{a\\sqrt3}{2}$ (половина диагонали); сфера через середины всех рёбер имеет $R = \\dfrac{a\\sqrt2}{2}$ (расстояние от $O$ до середины ребра).

**Пример 8.** Сфера описана около прямоугольного параллелепипеда $3 \\times 4 \\times 12$. Её центр — центр параллелепипеда, а диаметр — диагональ $\\sqrt{9 + 16 + 144} = 13$, поэтому $R = \\dfrac{13}{2}$.

### Упражнения

1. $R = 10$, $d = 6$. Найдите радиус и площадь сечения.
2. Сечение имеет радиус $12$ и удалено от центра на $9$. Найдите $R$.
3. Сечение площади $16\\pi$ удалено от центра на $3$. Найдите $R$, радиус сечения параллельной плоскостью на расстоянии $4$ по другую сторону от центра и расстояние между двумя плоскостями.
4. Напишите уравнение касательной плоскости к $x^2 + y^2 + z^2 = 9$ в точке $(2; -1; 2)$.
5. Сфера $(x - 2)^2 + y^2 + (z + 1)^2 = 16$ и плоскость $x + 2y - 2z - 10 = 0$: найдите радиус сечения. При каких $c$ плоскость $x + 2y - 2z + c = 0$ касается сферы?
6. Сфера радиуса $5$ рассечена двумя параллельными плоскостями по одну сторону от центра на расстояниях $3$ и $4$. Найдите радиусы сечений.
7. Ребро куба равно $6$. Найдите радиусы вписанной сферы, описанной сферы и сферы, касающейся всех рёбер.
8. Докажите: если плоскость касается сферы, то радиус, проведённый в точку касания, перпендикулярен плоскости (не используя первую теорему).

### Ответы

1. $r = 8$, площадь $64\\pi$. 2. $R = 15$. 3. $r = 4$, $R = 5$; другой радиус $3$; плоскости удалены друг от друга на $7$. 4. Нормаль $\\{2; -1; 2\\}$: $2x - y + 2z = 9$. 5. Расстояние $\\dfrac{\\lvert 2 + 0 + 2 - 10\\rvert}{3} = 2$, $r = \\sqrt{16 - 4} = 2\\sqrt3$; касание при $\\dfrac{\\lvert 4 + c\\rvert}{3} = 4$, $c = 8$ или $c = -16$. 6. $4$ и $3$. 7. $3$, $3\\sqrt3$, $3\\sqrt2$. 8. Пусть $A$ — точка касания, и предположим, что $OA$ не перпендикулярен плоскости; пусть $H \\ne A$ — основание перпендикуляра. Тогда $OH < OA = R$, поэтому $H$ внутри шара, и по первой части урока плоскость пересекала бы сферу по окружности, а не в одной точке. Противоречие.`,
      },
      [
        q(t("A plane at distance d < R from the centre cuts the sphere in a circle of radius…", "Կենտրոնից d < R հեռավորության վրա հարթությունը սֆերան հատում է շրջանագծով, որի շառավիղը…", "Плоскость на расстоянии d < R от центра пересекает сферу по окружности радиуса…"), [t("R − d", "R − d", "R − d"), t("√(R² − d²)", "√(R² − d²)", "√(R² − d²)"), t("√(R² + d²)", "√(R² + d²)", "√(R² + d²)")], 1),
        q(t("A plane is tangent to a sphere exactly when its distance from the centre is…", "Հարթությունը շոշափում է սֆերան ճիշտ այն դեպքում, երբ կենտրոնից նրա հեռավորությունը…", "Плоскость касается сферы ровно тогда, когда её расстояние от центра…"), [t("0", "0", "0"), t("equal to R", "հավասար է R-ի", "равно R"), t("greater than R", "մեծ է R-ից", "больше R")], 1),
        q(t("R = 5 and d = 3. The radius of the section is…", "R = 5 և d = 3։ Հատույթի շառավիղը…", "R = 5 и d = 3. Радиус сечения равен…"), [t("2", "2", "2"), t("4", "4", "4"), t("√34", "√34", "√34")], 1),
        q(t("The radius drawn to the point of tangency is…", "Շոշափման կետին տարված շառավիղը…", "Радиус, проведённый в точку касания, …"), [t("perpendicular to the tangent plane", "ուղղահայաց է շոշափող հարթությանը", "перпендикулярен касательной плоскости"), t("parallel to the tangent plane", "զուգահեռ է շոշափող հարթությանը", "параллелен касательной плоскости"), t("inclined at 45° to the tangent plane", "շոշափող հարթության հետ կազմում է 45°", "наклонён к касательной плоскости под 45°")], 0),
        q(t("The sphere inscribed in a cube with edge a has radius…", "a կողով խորանարդում ներգծված սֆերայի շառավիղը…", "Сфера, вписанная в куб с ребром a, имеет радиус…"), [t("a", "a", "a"), t("a/2", "a/2", "a/2"), t("a√3/2", "a√3/2", "a√3/2")], 1),
        q(t("R = 5 and the plane is at distance 7 from the centre. The sphere and the plane…", "R = 5, իսկ հարթությունը կենտրոնից 7 հեռավորության վրա է։ Սֆերան և հարթությունը…", "R = 5, а плоскость удалена от центра на 7. Сфера и плоскость…"), [t("have no common points", "ընդհանուր կետեր չունեն", "не имеют общих точек"), t("touch", "շոշափվում են", "касаются"), t("meet in a circle", "հատվում են շրջանագծով", "пересекаются по окружности")], 0),
      ],
    ),
    lesson(
      "sphere-area",
      ["Area of a sphere", "Սֆերայի մակերեսը", "Площадь сферы"],
      {
        en: ["State the formula S = 4πR² for the area of a sphere and explain how the area of a curved surface is defined through circumscribed polyhedra", "Use Archimedes' theorem comparing the sphere with its circumscribed cylinder and the formula 2πRh for a spherical cap", "Solve problems on areas of spheres inscribed in or circumscribed about cubes and on how the area changes with the radius"],
        hy: ["Ձևակերպել սֆերայի մակերեսի S = 4πR² բանաձևը և բացատրել, թե ինչպես է կոր մակերևույթի մակերեսը սահմանվում արտագծած բազմանիստներով", "Կիրառել Արքիմեդի թեորեմը, որը սֆերան համեմատում է արտագծած գլանի հետ, և սֆերիկ սեգմենտի 2πRh բանաձևը", "Լուծել խորանարդում ներգծած և արտագծած սֆերաների մակերեսների և շառավղից մակերեսի կախման խնդիրներ"],
        ru: ["Формулировать формулу площади сферы S = 4πR² и объяснять, как площадь кривой поверхности определяется через описанные многогранники", "Применять теорему Архимеда, сравнивающую сферу с описанным цилиндром, и формулу 2πRh для сферического сегмента", "Решать задачи о площадях сфер, вписанных в куб и описанных около него, и о зависимости площади от радиуса"],
      },
      {
        en: `## What the area of a sphere means

A sphere cannot be unrolled onto a plane like a cylinder or a cone, so its area must be defined differently. Take polyhedra **circumscribed** about the sphere (every face touches it) and let the largest face shrink to zero. Their surface areas approach one number; this number is the **area of the sphere**.

**Theorem.** The area of a sphere of radius $R$ is
$$S = 4\\pi R^2.$$

The proof uses volumes and is given in the next unit: the volume of a circumscribed polyhedron is $\\dfrac13 R \\cdot S_{\\text{polyhedron}}$ (it splits into pyramids with apex at the centre and height $R$), and in the limit $V_{\\text{ball}} = \\dfrac13 R \\cdot S$, so $S = \\dfrac{3V_{\\text{ball}}}{R} = \\dfrac{3}{R} \\cdot \\dfrac43\\pi R^3 = 4\\pi R^2$.

**Archimedes' theorem.** The area of a sphere equals the lateral area of the circumscribed cylinder (radius $R$, height $2R$): $2\\pi R \\cdot 2R = 4\\pi R^2$. More generally, a plane at distance $d$ from the centre cuts off a **spherical cap** of height $h = R - d$, and its area is $2\\pi R h$, the same as the lateral area of the corresponding slice of the cylinder. Two caps cut by the same plane have heights $R - d$ and $R + d$ and total area $2\\pi R \\cdot 2R = 4\\pi R^2$.

**Example 1.** $R = 3$: $S = 36\\pi$. The great circle has area $9\\pi$, so the area of a sphere is four times the area of its great circle.

**Example 2.** $S = 100\\pi$: $R^2 = 25$, $R = 5$, the diameter is $10$. If the great circle has circumference $10\\pi$, then $R = 5$ and again $S = 100\\pi$.

**Example 3.** A sphere is inscribed in a cube with edge $6$: $R = 3$, $S = 36\\pi \\approx 113$; the surface of the cube is $216$. The ratio is $\\dfrac{36\\pi}{216} = \\dfrac{\\pi}{6}$ for every cube.

**Example 4.** A sphere is circumscribed about a cube with edge $2$: $R = \\dfrac{2\\sqrt3}{2} = \\sqrt3$, $S = 12\\pi$. In general $S = 4\\pi \\cdot \\dfrac{3a^2}{4} = 3\\pi a^2$.

**Example 5.** A sphere of radius $10$ is cut by a plane at distance $6$ from the centre. The caps have heights $4$ and $16$ and areas $2\\pi \\cdot 10 \\cdot 4 = 80\\pi$ and $320\\pi$; the sum is $400\\pi = 4\\pi \\cdot 10^2$.

**Example 6.** The area is proportional to $R^2$: doubling the radius multiplies the area by $4$, increasing the radius by $10\\%$ multiplies it by $1{,}1^2 = 1{,}21$. For the Earth, $R \\approx 6400$ km, $S \\approx 4\\pi \\cdot 6400^2 \\approx 5{,}1 \\cdot 10^8$ km$^2$.

**Example 7.** The total surface of a hemisphere (the curved part plus the base disc) is $2\\pi R^2 + \\pi R^2 = 3\\pi R^2$; for $R = 2$ it is $12\\pi$.

**Example 8.** The circumscribed cylinder of a sphere has total surface $2\\pi R \\cdot 2R + 2\\pi R^2 = 6\\pi R^2$, so the surfaces of the sphere and the cylinder are in the ratio $4 : 6 = 2 : 3$. Archimedes found the same ratio $2 : 3$ for the volumes and valued this result so much that he asked for a sphere and a cylinder to be carved on his tomb.

### Exercises

1. Find the area of a sphere with $R = 6$ and with $R = \\dfrac12$.
2. The area of a sphere is $64\\pi$. Find its radius and diameter.
3. Find the areas of the spheres inscribed in and circumscribed about a cube with edge $10$.
4. A sphere of radius $13$ is cut by a plane at distance $5$ from the centre. Find the areas of the two caps.
5. The circumference of a great circle is $14\\pi$. Find the area of the sphere.
6. Find the total surface of a hemisphere of radius $3$, including its base.
7. By what percent does the area of a sphere grow when the radius grows by $20\\%$? By what factor does the radius grow when the area grows $9$ times?
8. A sphere and a cube with edge $2$ have equal surface areas. Find the radius of the sphere.

### Answers

1. $144\\pi$; $\\pi$. 2. $R = 4$, $d = 8$. 3. $R = 5$, $S = 100\\pi$; $R = 5\\sqrt3$, $S = 300\\pi$. 4. Heights $8$ and $18$: $208\\pi$ and $468\\pi$. 5. $R = 7$, $S = 196\\pi$. 6. $2\\pi \\cdot 9 + 9\\pi = 27\\pi$. 7. $1{,}2^2 = 1{,}44$, by $44\\%$; $3$ times. 8. $4\\pi R^2 = 24$, $R = \\sqrt{\\dfrac{6}{\\pi}}$.`,
        hy: `## Ի՞նչ է նշանակում սֆերայի մակերեսը

Սֆերան չի կարելի փռել հարթության վրա գլանի կամ կոնի նման, ուստի նրա մակերեսը պետք է այլ կերպ սահմանել։ Վերցնենք սֆերայի շուրջ **արտագծած** բազմանիստներ (յուրաքանչյուր նիստ շոշափում է այն) և ամենամեծ նիստը ձգտեցնենք զրոյի։ Դրանց մակերևույթների մակերեսները մոտենում են մեկ թվի, այդ թիվը **սֆերայի մակերեսն** է։

**Թեորեմ։** $R$ շառավղով սֆերայի մակերեսը
$$S = 4\\pi R^2$$
է։

Ապացույցն օգտագործում է ծավալներ և տրվում է հաջորդ բաժնում․ արտագծած բազմանիստի ծավալը $\\dfrac13 R \\cdot S_{\\text{բազմանիստ}}$ է (այն տրոհվում է կենտրոնում գագաթով և $R$ բարձրությամբ բուրգերի), և սահմանում $V_{\\text{գունդ}} = \\dfrac13 R \\cdot S$, ուստի $S = \\dfrac{3V_{\\text{գունդ}}}{R} = \\dfrac{3}{R} \\cdot \\dfrac43\\pi R^3 = 4\\pi R^2$։

**Արքիմեդի թեորեմ։** Սֆերայի մակերեսը հավասար է արտագծած գլանի ($R$ շառավիղ, $2R$ բարձրություն) կողմնային մակերեսին․ $2\\pi R \\cdot 2R = 4\\pi R^2$։ Ավելի ընդհանուր՝ կենտրոնից $d$ հեռավորության վրա հարթությունն անջատում է $h = R - d$ բարձրությամբ **սֆերիկ սեգմենտ**, որի մակերեսը $2\\pi R h$ է՝ նույնը, ինչ գլանի համապատասխան շերտի կողմնային մակերեսը։ Նույն հարթությամբ անջատված երկու սեգմենտներն ունեն $R - d$ և $R + d$ բարձրություններ և $2\\pi R \\cdot 2R = 4\\pi R^2$ ընդհանուր մակերես։

**Օրինակ 1։** $R = 3$․ $S = 36\\pi$։ Մեծ շրջանի մակերեսը $9\\pi$ է, ուստի սֆերայի մակերեսը նրա մեծ շրջանի մակերեսի քառապատիկն է։

**Օրինակ 2։** $S = 100\\pi$․ $R^2 = 25$, $R = 5$, տրամագիծը $10$ է։ Եթե մեծ շրջանագծի երկարությունը $10\\pi$ է, ապա $R = 5$ և նորից $S = 100\\pi$։

**Օրինակ 3։** Սֆերան ներգծված է $6$ կողով խորանարդում․ $R = 3$, $S = 36\\pi \\approx 113$, խորանարդի մակերևույթը $216$ է։ Հարաբերությունը $\\dfrac{36\\pi}{216} = \\dfrac{\\pi}{6}$ է ցանկացած խորանարդի համար։

**Օրինակ 4։** Սֆերան արտագծված է $2$ կողով խորանարդի շուրջ․ $R = \\dfrac{2\\sqrt3}{2} = \\sqrt3$, $S = 12\\pi$։ Ընդհանրապես $S = 4\\pi \\cdot \\dfrac{3a^2}{4} = 3\\pi a^2$։

**Օրինակ 5։** $10$ շառավղով սֆերան հատված է կենտրոնից $6$ հեռավորության վրա հարթությամբ։ Սեգմենտների բարձրությունները $4$ և $16$ են, մակերեսները՝ $2\\pi \\cdot 10 \\cdot 4 = 80\\pi$ և $320\\pi$, գումարը $400\\pi = 4\\pi \\cdot 10^2$ է։

**Օրինակ 6։** Մակերեսը համեմատական է $R^2$-ին․ շառավիղը կրկնապատկելիս մակերեսը բազմապատկվում է $4$-ով, շառավիղը $10\\%$-ով մեծացնելիս՝ $1{,}1^2 = 1{,}21$-ով։ Երկրի համար $R \\approx 6400$ կմ, $S \\approx 4\\pi \\cdot 6400^2 \\approx 5{,}1 \\cdot 10^8$ կմ$^2$։

**Օրինակ 7։** Կիսագնդի լրիվ մակերևույթը (կոր մասը և հիմքի շրջանը) $2\\pi R^2 + \\pi R^2 = 3\\pi R^2$ է, $R = 2$-ի դեպքում՝ $12\\pi$։

**Օրինակ 8։** Սֆերայի արտագծած գլանի լրիվ մակերևույթը $2\\pi R \\cdot 2R + 2\\pi R^2 = 6\\pi R^2$ է, ուստի սֆերայի և գլանի մակերևույթների հարաբերությունը $4 : 6 = 2 : 3$ է։ Արքիմեդը նույն $2 : 3$ հարաբերությունը գտավ ծավալների համար և այնքան էր գնահատում այս արդյունքը, որ խնդրեց իր տապանաքարին փորագրել սֆերա և գլան։

### Վարժություններ

1. Գտեք սֆերայի մակերեսը $R = 6$-ի և $R = \\dfrac12$-ի դեպքում։
2. Սֆերայի մակերեսը $64\\pi$ է։ Գտեք նրա շառավիղը և տրամագիծը։
3. Գտեք $10$ կողով խորանարդում ներգծած և նրա շուրջ արտագծած սֆերաների մակերեսները։
4. $13$ շառավղով սֆերան հատված է կենտրոնից $5$ հեռավորության վրա հարթությամբ։ Գտեք երկու սեգմենտների մակերեսները։
5. Մեծ շրջանագծի երկարությունը $14\\pi$ է։ Գտեք սֆերայի մակերեսը։
6. Գտեք $3$ շառավղով կիսագնդի լրիվ մակերևույթը՝ հիմքի հետ միասին։
7. Քանի՞ տոկոսով է աճում սֆերայի մակերեսը, երբ շառավիղն աճում է $20\\%$-ով։ Քանի՞ անգամ է աճում շառավիղը, երբ մակերեսն աճում է $9$ անգամ։
8. Սֆերան և $2$ կողով խորանարդն ունեն հավասար մակերևույթներ։ Գտեք սֆերայի շառավիղը։

### Պատասխաններ

1. $144\\pi$, $\\pi$։ 2. $R = 4$, $d = 8$։ 3. $R = 5$, $S = 100\\pi$, $R = 5\\sqrt3$, $S = 300\\pi$։ 4. Բարձրությունները $8$ և $18$․ $208\\pi$ և $468\\pi$։ 5. $R = 7$, $S = 196\\pi$։ 6. $2\\pi \\cdot 9 + 9\\pi = 27\\pi$։ 7. $1{,}2^2 = 1{,}44$, $44\\%$-ով, $3$ անգամ։ 8. $4\\pi R^2 = 24$, $R = \\sqrt{\\dfrac{6}{\\pi}}$։`,
        ru: `## Что означает площадь сферы

Сферу нельзя развернуть на плоскость, как цилиндр или конус, поэтому её площадь приходится определять иначе. Возьмём многогранники, **описанные** около сферы (каждая грань касается её), и будем уменьшать наибольшую грань до нуля. Площади их поверхностей приближаются к одному числу; это число — **площадь сферы**.

**Теорема.** Площадь сферы радиуса $R$ равна
$$S = 4\\pi R^2.$$

Доказательство использует объёмы и даётся в следующем разделе: объём описанного многогранника равен $\\dfrac13 R \\cdot S_{\\text{мн}}$ (он разбивается на пирамиды с вершиной в центре и высотой $R$), и в пределе $V_{\\text{шара}} = \\dfrac13 R \\cdot S$, поэтому $S = \\dfrac{3V_{\\text{шара}}}{R} = \\dfrac{3}{R} \\cdot \\dfrac43\\pi R^3 = 4\\pi R^2$.

**Теорема Архимеда.** Площадь сферы равна площади боковой поверхности описанного цилиндра (радиус $R$, высота $2R$): $2\\pi R \\cdot 2R = 4\\pi R^2$. Более общо, плоскость на расстоянии $d$ от центра отсекает **сферический сегмент** высоты $h = R - d$, и его площадь равна $2\\pi R h$ — такая же, как боковая поверхность соответствующего слоя цилиндра. Два сегмента, отсечённые одной плоскостью, имеют высоты $R - d$ и $R + d$ и общую площадь $2\\pi R \\cdot 2R = 4\\pi R^2$.

**Пример 1.** $R = 3$: $S = 36\\pi$. Большой круг имеет площадь $9\\pi$, поэтому площадь сферы в четыре раза больше площади её большого круга.

**Пример 2.** $S = 100\\pi$: $R^2 = 25$, $R = 5$, диаметр $10$. Если длина большой окружности $10\\pi$, то $R = 5$ и снова $S = 100\\pi$.

**Пример 3.** Сфера вписана в куб с ребром $6$: $R = 3$, $S = 36\\pi \\approx 113$; поверхность куба $216$. Отношение $\\dfrac{36\\pi}{216} = \\dfrac{\\pi}{6}$ одинаково для любого куба.

**Пример 4.** Сфера описана около куба с ребром $2$: $R = \\dfrac{2\\sqrt3}{2} = \\sqrt3$, $S = 12\\pi$. В общем случае $S = 4\\pi \\cdot \\dfrac{3a^2}{4} = 3\\pi a^2$.

**Пример 5.** Сфера радиуса $10$ рассечена плоскостью на расстоянии $6$ от центра. Сегменты имеют высоты $4$ и $16$ и площади $2\\pi \\cdot 10 \\cdot 4 = 80\\pi$ и $320\\pi$; сумма $400\\pi = 4\\pi \\cdot 10^2$.

**Пример 6.** Площадь пропорциональна $R^2$: удвоение радиуса умножает площадь на $4$, увеличение радиуса на $10\\%$ умножает её на $1{,}1^2 = 1{,}21$. Для Земли $R \\approx 6400$ км, $S \\approx 4\\pi \\cdot 6400^2 \\approx 5{,}1 \\cdot 10^8$ км$^2$.

**Пример 7.** Полная поверхность полушара (кривая часть плюс круг основания) равна $2\\pi R^2 + \\pi R^2 = 3\\pi R^2$; при $R = 2$ это $12\\pi$.

**Пример 8.** Описанный около сферы цилиндр имеет полную поверхность $2\\pi R \\cdot 2R + 2\\pi R^2 = 6\\pi R^2$, поэтому поверхности сферы и цилиндра относятся как $4 : 6 = 2 : 3$. Архимед нашёл то же отношение $2 : 3$ для объёмов и так ценил этот результат, что просил высечь на своей могиле сферу и цилиндр.

### Упражнения

1. Найдите площадь сферы при $R = 6$ и при $R = \\dfrac12$.
2. Площадь сферы равна $64\\pi$. Найдите её радиус и диаметр.
3. Найдите площади сфер, вписанной в куб с ребром $10$ и описанной около него.
4. Сфера радиуса $13$ рассечена плоскостью на расстоянии $5$ от центра. Найдите площади двух сегментов.
5. Длина большой окружности равна $14\\pi$. Найдите площадь сферы.
6. Найдите полную поверхность полушара радиуса $3$ вместе с основанием.
7. На сколько процентов растёт площадь сферы, когда радиус растёт на $20\\%$? Во сколько раз растёт радиус, когда площадь растёт в $9$ раз?
8. Сфера и куб с ребром $2$ имеют равные площади поверхности. Найдите радиус сферы.

### Ответы

1. $144\\pi$; $\\pi$. 2. $R = 4$, $d = 8$. 3. $R = 5$, $S = 100\\pi$; $R = 5\\sqrt3$, $S = 300\\pi$. 4. Высоты $8$ и $18$: $208\\pi$ и $468\\pi$. 5. $R = 7$, $S = 196\\pi$. 6. $2\\pi \\cdot 9 + 9\\pi = 27\\pi$. 7. $1{,}2^2 = 1{,}44$, на $44\\%$; в $3$ раза. 8. $4\\pi R^2 = 24$, $R = \\sqrt{\\dfrac{6}{\\pi}}$.`,
      },
      [
        q(t("The area of a sphere of radius R is…", "R շառավղով սֆերայի մակերեսը…", "Площадь сферы радиуса R равна…"), [t("πR²", "πR²", "πR²"), t("4πR²", "4πR²", "4πR²"), t("4/3·πR³", "4/3·πR³", "4/3·πR³")], 1),
        q(t("A sphere with R = 2 has area…", "R = 2 սֆերայի մակերեսը…", "Сфера с R = 2 имеет площадь…"), [t("8π", "8π", "8π"), t("16π", "16π", "16π"), t("4π", "4π", "4π")], 1),
        q(t("The area of a sphere is 36π. Its radius is…", "Սֆերայի մակերեսը 36π է։ Շառավիղը…", "Площадь сферы равна 36π. Её радиус…"), [t("3", "3", "3"), t("6", "6", "6"), t("9", "9", "9")], 0),
        q(t("The area of a sphere equals the area of its great circle multiplied by…", "Սֆերայի մակերեսը հավասար է նրա մեծ շրջանի մակերեսին՝ բազմապատկած…", "Площадь сферы равна площади её большого круга, умноженной на…"), [t("2", "2", "2"), t("4", "4", "4"), t("π", "π", "π")], 1),
        q(t("If the radius of a sphere is doubled, its area…", "Եթե սֆերայի շառավիղը կրկնապատկվի, նրա մակերեսը…", "Если радиус сферы удвоить, её площадь…"), [t("doubles", "կկրկնապատկվի", "удвоится"), t("is multiplied by 4", "կբազմապատկվի 4-ով", "увеличится в 4 раза"), t("is multiplied by 8", "կբազմապատկվի 8-ով", "увеличится в 8 раз")], 1),
        q(t("The area of a spherical cap of height h on a sphere of radius R is…", "R շառավղով սֆերայի h բարձրությամբ սֆերիկ սեգմենտի մակերեսը…", "Площадь сферического сегмента высоты h на сфере радиуса R равна…"), [t("πRh", "πRh", "πRh"), t("2πRh", "2πRh", "2πRh"), t("πh²", "πh²", "πh²")], 1),
      ],
    ),
  ],
};
