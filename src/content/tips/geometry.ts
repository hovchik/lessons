import { tip, type TipSeed } from "./types";

/** Geometry, grades 7–12: drawing habits, memory aids and shortcuts beyond the textbook. */
export const geometryTips: TipSeed[] = [
  // ---------- Grade 7 ----------
  tip("geometry", 7, "big-clean-drawing", "study", ["Draw big, draw twice", "Նկարիր մեծ, նկարիր երկու անգամ", "Рисуй крупно, рисуй дважды"], {
    en: `A tiny sketch in the corner hides what you need to see. Take **half a page**, use a ruler, mark every given length and angle on the figure in colour.

If the problem stalls, **redraw** it differently: a triangle that looked isosceles may not be, and the second drawing often shows the missing line.`,
    hy: `Անկյունում արված փոքրիկ նկարը թաքցնում է այն, ինչ պետք է տեսնել։ Վերցրու **կես էջ**, օգտագործիր քանոն, գույնով նշիր նկարի վրա ամեն տրված երկարություն և անկյուն։

Եթե խնդիրը կանգ է առնում, **նորից նկարիր** այլ կերպ․ հավասարասրուն թվացող եռանկյունը կարող է այդպիսին չլինել, և երկրորդ նկարը հաճախ ցույց է տալիս բացակայող գիծը։`,
    ru: `Крошечный набросок в углу скрывает то, что надо увидеть. Возьми **половину страницы**, пользуйся линейкой, отметь на рисунке цветом каждую данную длину и угол.

Если задача застопорилась, **перерисуй** её иначе: треугольник, казавшийся равнобедренным, может таким не быть, и второй рисунок часто показывает недостающую линию.`,
  }),
  tip("geometry", 7, "angle-sum-fold", "memory", ["Why a triangle's angles make 180°: fold it", "Ինչու է եռանկյան անկյունների գումարը 180°․ ծալիր", "Почему сумма углов треугольника 180°: сложи его"], {
    en: `Cut any paper triangle. Fold the top vertex down to the base, then fold the two side vertices in to meet it. The three angles line up along the base into a **straight line**, which is $180°$.

Once you have felt it with paper, the fact is yours forever, and the proof with a parallel line through a vertex becomes obvious.`,
    hy: `Կտրիր թղթե որևէ եռանկյուն։ Ծալիր վերևի գագաթը դեպի հիմքը, հետո երկու կողմնային գագաթները ծալիր դեպի այն։ Երեք անկյունները հիմքի երկայնքով շարվում են **ուղիղ գծի** վրա, որը $180°$ է։

Երբ թղթով զգացել ես, փաստը ընդմիշտ քոնն է, իսկ գագաթով զուգահեռ գծով ապացույցն ակնհայտ է դառնում։`,
    ru: `Вырежи любой бумажный треугольник. Согни верхнюю вершину к основанию, потом подогни к ней две боковые вершины. Три угла выстраиваются вдоль основания в **развёрнутый угол**, то есть $180°$.

Когда ты это почувствовал руками, факт твой навсегда, а доказательство через параллельную прямую к вершине становится очевидным.`,
  }),
  tip("geometry", 7, "mark-equal-things", "problemSolving", ["Mark equal parts with the same tick", "Հավասար մասերը նշիր նույն գծիկով", "Отмечай равные части одинаковыми штрихами"], {
    en: `Put one tick on equal segments, two ticks on another equal pair, arcs on equal angles. Then look: do two triangles have **three matching marks**? That is a congruence criterion waiting to be used.

Most grade 7 proofs are "find the two triangles, name the criterion, read off the equal parts". The marks make the triangles jump out.`,
    hy: `Հավասար հատվածների վրա մեկ գծիկ դիր, մեկ այլ հավասար զույգի վրա՝ երկու գծիկ, հավասար անկյունների վրա՝ աղեղներ։ Հետո նայիր․ երկու եռանկյուն ունե՞ն **երեք համապատասխան նշան**։ Դա հավասարության հայտանիշ է, որ սպասում է օգտագործման։

7-րդ դասարանի ապացույցների մեծ մասը «գտիր երկու եռանկյունը, նշիր հայտանիշը, գրիր հավասար մասերը» սխեման է։ Նշանները եռանկյուններն աչքի են գցում։`,
    ru: `Ставь один штрих на равных отрезках, два штриха на другой равной паре, дужки на равных углах. Потом смотри: есть ли два треугольника с **тремя совпадающими пометками**? Это признак равенства, который ждёт, чтобы его применили.

Большинство доказательств в 7 классе это «найди два треугольника, назови признак, выпиши равные элементы». Пометки заставляют треугольники бросаться в глаза.`,
  }),
  tip("geometry", 7, "exterior-angle-shortcut", "mentalMath", ["Exterior angle = sum of the two far angles", "Արտաքին անկյուն = երկու հեռավոր անկյունների գումար", "Внешний угол = сумма двух дальних"], {
    en: `In a triangle, an exterior angle equals the sum of the two interior angles **not next to it**. If the base angles are $40°$ and $65°$, the exterior angle at the top is $105°$ straight away, no need to find the third angle first.

This saves a step in almost every angle-chasing problem.`,
    hy: `Եռանկյան արտաքին անկյունը հավասար է նրան **կից չլինող** երկու ներքին անկյունների գումարին։ Եթե հիմքի անկյունները $40°$ և $65°$ են, գագաթի արտաքին անկյունը միանգամից $105°$ է, երրորդ անկյունը նախապես գտնել պետք չէ։

Սա մեկ քայլ է խնայում անկյուններ հաշվելու գրեթե ամեն խնդրում։`,
    ru: `В треугольнике внешний угол равен сумме двух внутренних, **не смежных с ним**. Если углы при основании $40°$ и $65°$, внешний угол при вершине сразу $105°$, не нужно сначала искать третий угол.

Это экономит шаг почти в каждой задаче на вычисление углов.`,
  }),

  // ---------- Grade 8 ----------
  tip("geometry", 8, "pythagorean-triples", "memory", ["Know the Pythagorean triples", "Գիտես Պյութագորասի եռյակները", "Знай пифагоровы тройки"], {
    en: `Learn $3{-}4{-}5$, $5{-}12{-}13$, $8{-}15{-}17$, $7{-}24{-}25$ and their multiples ($6{-}8{-}10$, $9{-}12{-}15$, $10{-}24{-}26$).

A right triangle with legs 9 and 12 has hypotenuse 15, no squaring needed. Test writers use these triples constantly, so a quick recognition saves a minute each time.`,
    hy: `Սովորիր $3{-}4{-}5$, $5{-}12{-}13$, $8{-}15{-}17$, $7{-}24{-}25$ և դրանց պատիկները ($6{-}8{-}10$, $9{-}12{-}15$, $10{-}24{-}26$)։

9 և 12 էջերով ուղղանկյուն եռանկյան ներքնաձիգը 15 է, քառակուսի բարձրացնել պետք չէ։ Թեստ կազմողները անընդհատ այս եռյակներն են օգտագործում, արագ ճանաչելը ամեն անգամ մեկ րոպե է խնայում։`,
    ru: `Выучи $3{-}4{-}5$, $5{-}12{-}13$, $8{-}15{-}17$, $7{-}24{-}25$ и их кратные ($6{-}8{-}10$, $9{-}12{-}15$, $10{-}24{-}26$).

У прямоугольного треугольника с катетами 9 и 12 гипотенуза 15, возводить в квадрат не надо. Составители заданий постоянно используют эти тройки, и быстрое узнавание экономит минуту каждый раз.`,
  }),
  tip("geometry", 8, "special-triangles", "memory", ["The two special right triangles", "Երկու հատուկ ուղղանկյուն եռանկյունները", "Два особых прямоугольных треугольника"], {
    en: `$45°{-}45°{-}90°$: sides $1, 1, \\sqrt2$. $30°{-}60°{-}90°$: sides $1, \\sqrt3, 2$, where the short leg is opposite $30°$ and is **half the hypotenuse**.

Any problem with these angles is just scaling one of these two triangles. A hypotenuse of 10 with a $30°$ angle gives legs 5 and $5\\sqrt3$ instantly.`,
    hy: `$45°{-}45°{-}90°$․ կողմերը $1, 1, \\sqrt2$։ $30°{-}60°{-}90°$․ կողմերը $1, \\sqrt3, 2$, որտեղ կարճ էջը $30°$-ի դիմաց է և **ներքնաձիգի կեսն է**։

Այս անկյուններով ամեն խնդիր պարզապես այս երկու եռանկյուններից մեկի մասշտաբավորումն է։ 10 ներքնաձիգ և $30°$ անկյուն՝ էջերը միանգամից 5 և $5\\sqrt3$ են։`,
    ru: `$45°{-}45°{-}90°$: стороны $1, 1, \\sqrt2$. $30°{-}60°{-}90°$: стороны $1, \\sqrt3, 2$, где короткий катет лежит против $30°$ и равен **половине гипотенузы**.

Любая задача с этими углами это просто масштабирование одного из двух треугольников. Гипотенуза 10 и угол $30°$ сразу дают катеты 5 и $5\\sqrt3$.`,
  }),
  tip("geometry", 8, "area-by-subtraction", "problemSolving", ["Find an odd area by subtracting", "Գտիր անսովոր մակերեսը հանելով", "Находи странную площадь вычитанием"], {
    en: `A shaded shape with no formula is usually a **rectangle minus triangles** or a **square minus a circle**. Enclose it in the simplest big shape you can, then subtract the white parts.

A quadrilateral on a grid: draw the bounding rectangle, subtract the four corner right triangles. Works every time.`,
    hy: `Ստվերած պատկերը, որի համար բանաձև չկա, սովորաբար **ուղղանկյուն հանած եռանկյուններ** է կամ **քառակուսի հանած շրջան**։ Պարփակիր այն ամենապարզ մեծ պատկերի մեջ, հետո հանիր սպիտակ մասերը։

Վանդակավոր թղթի վրա քառանկյուն․ նկարիր պարփակող ուղղանկյունը, հանիր չորս անկյունային ուղղանկյուն եռանկյունները։ Միշտ աշխատում է։`,
    ru: `Заштрихованная фигура без формулы это обычно **прямоугольник минус треугольники** или **квадрат минус круг**. Заключи её в самую простую большую фигуру, потом вычти белые части.

Четырёхугольник на клетчатой бумаге: нарисуй описанный прямоугольник, вычти четыре угловых прямоугольных треугольника. Работает всегда.`,
  }),
  tip("geometry", 8, "parallelogram-diagonals", "memory", ["Which quadrilateral? Ask the diagonals", "Ո՞ր քառանկյունն է․ հարցրու անկյունագծերին", "Какой четырёхугольник? Спроси диагонали"], {
    en: `| diagonals | shape |
|---|---|
| bisect each other | parallelogram |
| … and equal | rectangle |
| … and perpendicular | rhombus |
| … equal and perpendicular | square |

Memorise the table instead of six separate theorems. In a problem, check the diagonals first; they decide the shape faster than the sides do.`,
    hy: `| անկյունագծեր | պատկեր |
|---|---|
| կիսում են միմյանց | զուգահեռագիծ |
| … և հավասար են | ուղղանկյուն |
| … և ուղղահայաց են | շեղանկյուն |
| … հավասար և ուղղահայաց | քառակուսի |

Անգիր սովորիր աղյուսակը վեց առանձին թեորեմի փոխարեն։ Խնդրում սկզբում ստուգիր անկյունագծերը․ նրանք պատկերը որոշում են ավելի արագ, քան կողմերը։`,
    ru: `| диагонали | фигура |
|---|---|
| делятся пополам точкой пересечения | параллелограмм |
| … и равны | прямоугольник |
| … и перпендикулярны | ромб |
| … равны и перпендикулярны | квадрат |

Запомни таблицу вместо шести отдельных теорем. В задаче сначала проверяй диагонали: они определяют фигуру быстрее, чем стороны.`,
  }),

  // ---------- Grade 9 ----------
  tip("geometry", 9, "vector-tip-to-tail", "memory", ["Vectors: tip to tail, then shortcut", "Վեկտորներ․ ծայրը սկզբին, հետո կարճ ճանապարհ", "Векторы: конец к началу, потом короткий путь"], {
    en: `To add vectors, walk them one after another and the sum is the **shortcut** from where you started to where you ended: $\\vec{AB} + \\vec{BC} = \\vec{AC}$. The middle letter disappears.

So in any chain $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$: you came back home. This collapses long vector expressions in one line.`,
    hy: `Վեկտորները գումարելու համար անցիր դրանք մեկը մյուսի հետևից, և գումարը **կարճ ճանապարհն** է սկսած տեղից մինչև վերջացրած տեղը․ $\\vec{AB} + \\vec{BC} = \\vec{AC}$։ Միջին տառն անհետանում է։

Ուրեմն ցանկացած շղթայում $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$․ տուն ես վերադարձել։ Սա երկար վեկտորային արտահայտությունները մեկ տողով փլուզում է։`,
    ru: `Чтобы сложить векторы, пройди их один за другим, и сумма это **короткий путь** от старта к финишу: $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Средняя буква исчезает.

Поэтому в любой цепочке $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$: ты вернулся домой. Это сворачивает длинные векторные выражения в одну строку.`,
  }),
  tip("geometry", 9, "law-of-cosines-is-pythagoras", "memory", ["Law of cosines = Pythagoras with a correction", "Կոսինուսների թեորեմը = Պյութագորաս ուղղումով", "Теорема косинусов = Пифагор с поправкой"], {
    en: `$c^2 = a^2 + b^2 - 2ab\\cos C$. When $C = 90°$, $\\cos C = 0$ and it **is** Pythagoras. Acute angle: subtract something, $c$ is shorter. Obtuse angle: $\\cos C$ is negative, so you add, $c$ is longer.

Check your answer with this: if the angle is obtuse and your $c^2$ came out smaller than $a^2 + b^2$, you dropped a sign.`,
    hy: `$c^2 = a^2 + b^2 - 2ab\\cos C$։ Երբ $C = 90°$, $\\cos C = 0$, և սա **հենց** Պյութագորասն է։ Սուր անկյուն․ ինչ-որ բան հանում ես, $c$-ն ավելի կարճ է։ Բութ անկյուն․ $\\cos C$-ն բացասական է, ուրեմն գումարում ես, $c$-ն ավելի երկար է։

Ստուգիր պատասխանդ սրանով․ եթե անկյունը բութ է, իսկ $c^2$-ը $a^2 + b^2$-ից փոքր ստացվեց, նշան ես կորցրել։`,
    ru: `$c^2 = a^2 + b^2 - 2ab\\cos C$. При $C = 90°$ $\\cos C = 0$, и это **и есть** Пифагор. Острый угол: что-то вычитаем, $c$ короче. Тупой угол: $\\cos C$ отрицателен, значит прибавляем, $c$ длиннее.

Проверяй ответ этим: если угол тупой, а $c^2$ получилось меньше $a^2 + b^2$, ты потерял знак.`,
  }),
  tip("geometry", 9, "inscribed-angle-half", "mentalMath", ["Inscribed angle is half the arc", "Ներգծյալ անկյունը աղեղի կեսն է", "Вписанный угол это половина дуги"], {
    en: `An inscribed angle equals **half** the arc it opens onto. Two inscribed angles on the same arc are equal. An angle on a diameter is $90°$.

Circle problems: mark every arc, write its degree measure, and halve. Most "find the angle" questions with a circle become arithmetic.`,
    hy: `Ներգծյալ անկյունը հավասար է այն աղեղի **կեսին**, որի վրա հենվում է։ Նույն աղեղի վրա հենվող երկու ներգծյալ անկյուններ հավասար են։ Տրամագծի վրա հենվող անկյունը $90°$ է։

Շրջանագծի խնդիրներ․ նշիր ամեն աղեղ, գրիր նրա աստիճանային չափը և կիսիր։ «Գտիր անկյունը» հարցերի մեծ մասը շրջանագծով դառնում է թվաբանություն։`,
    ru: `Вписанный угол равен **половине** дуги, на которую он опирается. Два вписанных угла на одной дуге равны. Угол, опирающийся на диаметр, равен $90°$.

Задачи с окружностью: отметь каждую дугу, подпиши её градусную меру и подели пополам. Большинство вопросов «найди угол» с окружностью превращаются в арифметику.`,
  }),
  tip("geometry", 9, "coordinates-when-stuck", "problemSolving", ["Stuck? Put the figure on coordinates", "Խրվե՞լ ես․ դիր պատկերը կոորդինատների վրա", "Застрял? Положи фигуру на координаты"], {
    en: `When a synthetic proof will not come, place the figure on axes: a vertex at the origin, a side along the $x$-axis. Then lengths are distances, midpoints are averages, and perpendicularity is a product of slopes equal to $-1$.

It is longer but **mechanical**, and on an exam a long correct method beats a short idea you cannot find.`,
    hy: `Երբ դասական ապացույցը չի ստացվում, դիր պատկերը առանցքների վրա․ գագաթը սկզբնակետում, կողմը $x$ առանցքի երկայնքով։ Հետո երկարությունները հեռավորություններ են, միջնակետերը՝ միջիններ, իսկ ուղղահայացությունը՝ անկյունային գործակիցների $-1$ արտադրյալ։

Ավելի երկար է, բայց **մեխանիկական**, իսկ քննությանը երկար ճիշտ մեթոդն ավելի լավ է, քան կարճ գաղափարը, որը չես գտնում։`,
    ru: `Когда синтетическое доказательство не идёт, положи фигуру на оси: вершина в начале координат, сторона вдоль оси $x$. Тогда длины это расстояния, середины это средние, а перпендикулярность это произведение угловых коэффициентов, равное $-1$.

Это дольше, но **механически**, а на экзамене длинный верный метод лучше короткой идеи, которую не удаётся найти.`,
  }),

  // ---------- Grade 10 ----------
  tip("geometry", 10, "see-3d-in-a-box", "study", ["Build the box around the solid", "Կառուցիր տուփը մարմնի շուրջ", "Построй коробку вокруг тела"], {
    en: `Most 3D problems become easy inside a **rectangular box**. A pyramid, a tetrahedron, a slanted prism: find the box whose edges hold the vertices, then every distance is a diagonal of a box face or of the box itself, $\\sqrt{a^2 + b^2 + c^2}$.

Carry a real matchbox to your desk for the first month. Seeing the box is a skill, and it comes fast.`,
    hy: `Տարածաչափական խնդիրների մեծ մասը հեշտանում է **ուղղանկյունանիստ տուփի** մեջ։ Բուրգ, քառանիստ, շեղ պրիզմա․ գտիր տուփը, որի կողերը պահում են գագաթները, հետո ամեն հեռավորություն տուփի նիստի կամ հենց տուփի անկյունագիծ է՝ $\\sqrt{a^2 + b^2 + c^2}$։

Առաջին ամիսը իսկական լուցկու տուփ պահիր սեղանիդ։ Տուփը տեսնելը հմտություն է և արագ է գալիս։`,
    ru: `Большинство стереометрических задач становятся лёгкими внутри **прямоугольного параллелепипеда**. Пирамида, тетраэдр, наклонная призма: найди коробку, на рёбрах которой лежат вершины, и каждое расстояние станет диагональю грани или самой коробки, $\\sqrt{a^2 + b^2 + c^2}$.

Первый месяц держи на столе настоящий спичечный коробок. Видеть коробку это навык, и он приходит быстро.`,
  }),
  tip("geometry", 10, "three-perpendiculars", "memory", ["The three-perpendiculars theorem in one picture", "Երեք ուղղահայացների թեորեմը մեկ նկարում", "Теорема о трёх перпендикулярах в одной картинке"], {
    en: `A pole stands on the floor. Its shadow lies on the floor. If a line on the floor is perpendicular to the **shadow**, it is perpendicular to the **pole-to-line slant** as well, and the other way round.

Remember *pole, shadow, floor line*. Whenever a problem asks for a distance from a point to a line in space, you are being asked to use this theorem.`,
    hy: `Հատակին սյուն է կանգնած։ Նրա ստվերը հատակին է։ Եթե հատակի գիծն ուղղահայաց է **ստվերին**, ուղղահայաց է նաև **սյունից դեպի գիծ տարված թեքին**, և հակառակը։

Հիշիր․ *սյուն, ստվեր, հատակի գիծ*։ Երբ խնդիրը հարցնում է տարածության մեջ կետից գիծ հեռավորություն, քեզնից պահանջում են հենց այս թեորեմը։`,
    ru: `На полу стоит шест. Его тень лежит на полу. Если прямая на полу перпендикулярна **тени**, она перпендикулярна и **наклонной от шеста к прямой**, и наоборот.

Запомни: *шест, тень, прямая на полу*. Когда задача просит расстояние от точки до прямой в пространстве, от тебя хотят именно эту теорему.`,
  }),
  tip("geometry", 10, "cross-section-trace", "problemSolving", ["Cross-sections: extend lines in one face", "Հատույթներ․ երկարացրու գծերը մեկ նիստում", "Сечения: продлевай прямые в одной грани"], {
    en: `To draw a cross-section through three points, connect any two that lie in the **same face**. Extend that segment until it meets an edge of the solid; now you have a new point in the neighbouring face. Repeat.

Never connect two points that are not in one face: that line passes through the inside and is not an edge of the section.`,
    hy: `Երեք կետով հատույթ կառուցելու համար միացրու երկու այնպիսի կետ, որոնք **նույն նիստում** են։ Երկարացրու այդ հատվածը, մինչև հատի մարմնի կողը․ հիմա հարևան նիստում նոր կետ ունես։ Կրկնիր։

Երբեք մի միացրու երկու կետ, որոնք մեկ նիստում չեն․ այդ գիծն անցնում է մարմնի միջով և հատույթի կողմ չէ։`,
    ru: `Чтобы построить сечение через три точки, соедини любые две, лежащие в **одной грани**. Продли этот отрезок до пересечения с ребром тела: теперь у тебя есть новая точка в соседней грани. Повтори.

Никогда не соединяй две точки, не лежащие в одной грани: эта прямая проходит внутри тела и не является стороной сечения.`,
  }),
  tip("geometry", 10, "units-of-volume", "exam", ["Convert volume units before you start", "Ծավալի միավորները փոխարկիր սկսելուց առաջ", "Переводи единицы объёма до решения"], {
    en: `$1\\ \\text{m}^3 = 1000\\ \\text{dm}^3 = 1000\\ \\text{litres}$, and $1\\ \\text{m}^3 = 10^6\\ \\text{cm}^3$. Students lose points not on geometry but on writing $100$ instead of $10^6$.

Convert all lengths to one unit **before** computing, and write the unit cubed on the answer: $48\\ \\text{cm}^3$.`,
    hy: `$1\\ \\text{մ}^3 = 1000\\ \\text{դմ}^3 = 1000\\ \\text{լիտր}$, և $1\\ \\text{մ}^3 = 10^6\\ \\text{սմ}^3$։ Աշակերտները բալ կորցնում են ոչ երկրաչափության, այլ $10^6$-ի փոխարեն $100$ գրելու պատճառով։

Բոլոր երկարությունները **հաշվելուց առաջ** բեր մեկ միավորի, իսկ պատասխանին գրիր միավորը խորանարդով․ $48\\ \\text{սմ}^3$։`,
    ru: `$1\\ \\text{м}^3 = 1000\\ \\text{дм}^3 = 1000\\ \\text{литров}$, и $1\\ \\text{м}^3 = 10^6\\ \\text{см}^3$. Баллы теряют не на геометрии, а на том, что пишут $100$ вместо $10^6$.

Переводи все длины в одну единицу **до** вычислений и пиши единицу в кубе в ответе: $48\\ \\text{см}^3$.`,
  }),

  // ---------- Grade 11 ----------
  tip("geometry", 11, "pyramid-one-third", "memory", ["Pyramids and cones are one third", "Բուրգերն ու կոները մեկ երրորդ են", "Пирамиды и конусы это одна треть"], {
    en: `Every "pointed" solid has volume **one third** of the prism or cylinder with the same base and height: $V = \\frac13 S h$. Fill a paper cone with rice three times to fill the matching cylinder.

Sphere: $V = \\frac43 \\pi r^3$, surface $4\\pi r^2$, which is exactly four great circles. Picture an orange peel cut into four circles.`,
    hy: `Ամեն «սրածայր» մարմնի ծավալը նույն հիմքով և բարձրությամբ պրիզմայի կամ գլանի **մեկ երրորդն** է․ $V = \\frac13 S h$։ Թղթե կոնը բրնձով երեք անգամ լցրու, որ լցվի համապատասխան գլանը։

Գունդ․ $V = \\frac43 \\pi r^3$, մակերևույթը՝ $4\\pi r^2$, որը ճիշտ չորս մեծ շրջան է։ Պատկերացրու նարնջի կեղևը չորս շրջանի կտրած։`,
    ru: `Любое «остроконечное» тело имеет объём **одну треть** от призмы или цилиндра с тем же основанием и высотой: $V = \\frac13 S h$. Наполни бумажный конус рисом три раза, чтобы заполнить соответствующий цилиндр.

Шар: $V = \\frac43 \\pi r^3$, поверхность $4\\pi r^2$, ровно четыре больших круга. Представь кожуру апельсина, разрезанную на четыре круга.`,
  }),
  tip("geometry", 11, "similar-solids-scale", "mentalMath", ["Scale k: lengths k, areas k², volumes k³", "Մասշտաբ k․ երկարությունը k, մակերեսը k², ծավալը k³", "Масштаб k: длины k, площади k², объёмы k³"], {
    en: `If a model is scaled by $k = 2$, its surface area grows $4$ times and its volume $8$ times. A cone cut by a plane halfway up: the small cone has $\\frac18$ of the volume, so the frustum has $\\frac78$.

This one rule replaces a page of computation in "part of a pyramid" problems.`,
    hy: `Եթե մոդելը մասշտաբավորված է $k = 2$-ով, մակերևույթը $4$ անգամ է աճում, ծավալը՝ $8$ անգամ։ Կոնը բարձրության կեսից հարթությամբ կտրած․ փոքր կոնը ծավալի $\\frac18$-ն է, ուրեմն հատած կոնը՝ $\\frac78$-ը։

Այս մեկ կանոնը «բուրգի մաս» խնդիրներում մեկ էջ հաշվարկ է փոխարինում։`,
    ru: `Если модель увеличена в $k = 2$ раза, её поверхность растёт в $4$ раза, а объём в $8$. Конус, разрезанный плоскостью на половине высоты: малый конус имеет $\\frac18$ объёма, значит усечённый конус $\\frac78$.

Это одно правило заменяет страницу вычислений в задачах про «часть пирамиды».`,
  }),
  tip("geometry", 11, "dot-product-angle", "problemSolving", ["Angle between lines? Dot product, absolute value", "Գծերի միջև անկյո՞ւն․ սկալյար արտադրյալ, մոդուլ", "Угол между прямыми? Скалярное произведение, модуль"], {
    en: `In coordinates, the angle between two lines in space is

$$\\cos\\varphi = \\frac{\\lvert \\vec a \\cdot \\vec b \\rvert}{\\lvert \\vec a\\rvert\\,\\lvert \\vec b\\rvert}$$

The **absolute value** matters: the angle between lines is never obtuse, so if your cosine is negative, drop the sign. Place the solid on axes with the origin at a vertex and most exam angle problems take five lines.`,
    hy: `Կոորդինատներում տարածության երկու գծերի միջև անկյունը․

$$\\cos\\varphi = \\frac{\\lvert \\vec a \\cdot \\vec b \\rvert}{\\lvert \\vec a\\rvert\\,\\lvert \\vec b\\rvert}$$

**Մոդուլը** կարևոր է․ գծերի միջև անկյունը երբեք բութ չէ, ուրեմն եթե կոսինուսդ բացասական է, նշանը դեն գցիր։ Դիր մարմինը առանցքների վրա՝ սկզբնակետը գագաթում, և քննական անկյան խնդիրների մեծ մասը հինգ տող է տևում։`,
    ru: `В координатах угол между двумя прямыми в пространстве:

$$\\cos\\varphi = \\frac{\\lvert \\vec a \\cdot \\vec b \\rvert}{\\lvert \\vec a\\rvert\\,\\lvert \\vec b\\rvert}$$

**Модуль** важен: угол между прямыми никогда не тупой, так что отрицательный косинус означает «отбрось знак». Положи тело на оси с началом в вершине, и большинство экзаменационных задач на угол занимают пять строк.`,
  }),
  tip("geometry", 11, "answer-form-exam", "exam", ["Leave π and roots in the answer", "Թող π-ն և արմատները պատասխանում", "Оставляй π и корни в ответе"], {
    en: `Unless the question says "to two decimal places", the expected answer is **exact**: $12\\pi$, $\\frac{\\sqrt3}{4}a^2$, $\\frac{a^3\\sqrt2}{12}$. Writing $37{.}7$ for $12\\pi$ can lose the mark, and takes longer.

Also, if the problem says "a cube with edge $a$", the answer must contain $a$. An answer of "48" means you invented a number.`,
    hy: `Եթե հարցը չի ասում «երկու տասնորդական նիշով», սպասվող պատասխանը **ճշգրիտ** է․ $12\\pi$, $\\frac{\\sqrt3}{4}a^2$, $\\frac{a^3\\sqrt2}{12}$։ $12\\pi$-ի փոխարեն $37{,}7$ գրելը կարող է բալ կորցնել և ավելի երկար է։

Նաև, եթե խնդիրն ասում է «$a$ կողով խորանարդ», պատասխանը պետք է $a$ պարունակի։ «48» պատասխանը նշանակում է՝ թիվ ես հնարել։`,
    ru: `Если в вопросе не сказано «с точностью до сотых», ожидается **точный** ответ: $12\\pi$, $\\frac{\\sqrt3}{4}a^2$, $\\frac{a^3\\sqrt2}{12}$. Написать $37{,}7$ вместо $12\\pi$ значит рисковать баллом и тратить время.

И если в задаче «куб с ребром $a$», ответ должен содержать $a$. Ответ «48» означает, что ты придумал число.`,
  }),

  // ---------- Grade 12 ----------
  tip("geometry", 12, "formula-sheet-solids", "memory", ["One card for all solids", "Մեկ քարտ բոլոր մարմինների համար", "Одна карточка для всех тел"], {
    en: `| solid | volume | lateral area |
|---|---|---|
| prism | $Sh$ | $P_{\\text{base}} \\cdot h$ (right prism) |
| cylinder | $\\pi r^2 h$ | $2\\pi r h$ |
| pyramid | $\\frac13 Sh$ | $\\frac12 P \\cdot l$ (regular) |
| cone | $\\frac13 \\pi r^2 h$ | $\\pi r l$ |
| sphere | $\\frac43 \\pi r^3$ | $4\\pi r^2$ |

Notice the pattern: $\\frac13$ for every pointed solid, $l$ for every slant surface. Rewrite the card from memory once a week.`,
    hy: `| մարմին | ծավալ | կողմնային մակերևույթ |
|---|---|---|
| պրիզմա | $Sh$ | $P_{\\text{հիմք}} \\cdot h$ (ուղիղ) |
| գլան | $\\pi r^2 h$ | $2\\pi r h$ |
| բուրգ | $\\frac13 Sh$ | $\\frac12 P \\cdot l$ (կանոնավոր) |
| կոն | $\\frac13 \\pi r^2 h$ | $\\pi r l$ |
| գունդ | $\\frac43 \\pi r^3$ | $4\\pi r^2$ |

Նկատիր օրինաչափությունը․ $\\frac13$ ամեն սրածայր մարմնի համար, $l$ ամեն թեք մակերևույթի համար։ Շաբաթը մեկ քարտը հիշողությամբ նորից գրիր։`,
    ru: `| тело | объём | боковая поверхность |
|---|---|---|
| призма | $Sh$ | $P_{\\text{осн}} \\cdot h$ (прямая) |
| цилиндр | $\\pi r^2 h$ | $2\\pi r h$ |
| пирамида | $\\frac13 Sh$ | $\\frac12 P \\cdot l$ (правильная) |
| конус | $\\frac13 \\pi r^2 h$ | $\\pi r l$ |
| шар | $\\frac43 \\pi r^3$ | $4\\pi r^2$ |

Заметь закономерность: $\\frac13$ у каждого остроконечного тела, $l$ у каждой наклонной поверхности. Раз в неделю переписывай карточку по памяти.`,
  }),
  tip("geometry", 12, "inscribed-sphere-radius", "problemSolving", ["Inscribed sphere: r = 3V / S", "Ներգծյալ գունդ․ r = 3V / S", "Вписанный шар: r = 3V / S"], {
    en: `For any polyhedron that has an inscribed sphere, join the centre to every face: you get pyramids of height $r$, so $V = \\frac13 r S_{\\text{total}}$ and

$$r = \\frac{3V}{S_{\\text{total}}}$$

This avoids the cross-section drawing entirely. It is the 3D cousin of $r = \\frac{2S}{P}$ for a triangle's incircle.`,
    hy: `Ներգծյալ գունդ ունեցող ցանկացած բազմանիստի համար կենտրոնը միացրու ամեն նիստին․ ստանում ես $r$ բարձրությամբ բուրգեր, ուրեմն $V = \\frac13 r S_{\\text{լրիվ}}$ և

$$r = \\frac{3V}{S_{\\text{լրիվ}}}$$

Սա ամբողջովին խուսափում է հատույթի նկարից։ Սա եռանկյան ներգծյալ շրջանի $r = \\frac{2S}{P}$ բանաձևի տարածական զարմիկն է։`,
    ru: `Для любого многогранника с вписанным шаром соедини центр с каждой гранью: получатся пирамиды высоты $r$, значит $V = \\frac13 r S_{\\text{полн}}$ и

$$r = \\frac{3V}{S_{\\text{полн}}}$$

Это полностью избавляет от чертежа сечения. Пространственный родственник формулы $r = \\frac{2S}{P}$ для вписанной окружности треугольника.`,
  }),
  tip("geometry", 12, "check-with-extreme-case", "problemSolving", ["Test your formula on an extreme case", "Ստուգիր բանաձևդ ծայրահեղ դեպքով", "Проверь формулу на крайнем случае"], {
    en: `Derived the volume of a frustum as some expression in $R, r, h$? Set $r = 0$: it must turn into a cone, $\\frac13 \\pi R^2 h$. Set $r = R$: it must become a cylinder, $\\pi R^2 h$.

Every parametric answer can be tested this way in ten seconds. Examiners' own answer keys are checked exactly like this.`,
    hy: `Հատած կոնի ծավալը արտածե՞լ ես որպես $R, r, h$-ի արտահայտություն։ Դիր $r = 0$․ պետք է դառնա կոն՝ $\\frac13 \\pi R^2 h$։ Դիր $r = R$․ պետք է դառնա գլան՝ $\\pi R^2 h$։

Ամեն պարամետրային պատասխան կարելի է այսպես ստուգել տասը վայրկյանում։ Քննողների սեփական պատասխանների թերթիկները ճիշտ այսպես են ստուգվում։`,
    ru: `Вывел объём усечённого конуса как выражение от $R, r, h$? Положи $r = 0$: должен получиться конус, $\\frac13 \\pi R^2 h$. Положи $r = R$: должен получиться цилиндр, $\\pi R^2 h$.

Любой параметрический ответ проверяется так за десять секунд. Ключи самих экзаменаторов проверяют именно так.`,
  }),
  tip("geometry", 12, "exam-geometry-order", "exam", ["Start the geometry problem with a given-wanted list", "Երկրաչափության խնդիրը սկսիր «տրված է, պահանջվում է» ցուցակով", "Начинай задачу по геометрии со списка «дано, найти»"], {
    en: `Before any drawing, write two short columns: **Given** (every number and relation from the text) and **Wanted**. Then draw and label.

In the final exam, this costs one minute and earns partial credit even when you do not finish: examiners can see you understood the problem. It also stops you from solving for the wrong quantity.`,
    hy: `Նկարելուց առաջ գրիր երկու կարճ սյունակ․ **Տրված է** (տեքստի ամեն թիվ և առնչություն) և **Պահանջվում է**։ Հետո նկարիր և նշանակիր։

Ավարտական քննության ժամանակ սա մեկ րոպե է արժենում և մասնակի բալ է բերում, եթե չավարտես էլ․ քննողները տեսնում են, որ խնդիրը հասկացել ես։ Նաև կանխում է սխալ մեծություն գտնելը։`,
    ru: `До любого чертежа напиши два коротких столбика: **Дано** (каждое число и отношение из текста) и **Найти**. Потом рисуй и подписывай.

На выпускном экзамене это стоит одну минуту и приносит частичный балл, даже если не дорешал: экзаменатор видит, что задачу ты понял. И это не даёт искать не ту величину.`,
  }),
];
