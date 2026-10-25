import { tip, type TipSeed } from "./types";

/** Physics, grades 7–12: estimation habits, unit tricks and memory aids beyond the textbook. */
export const physicsTips: TipSeed[] = [
  // ---------- Grade 7 ----------
  tip("physics", 7, "units-are-a-hint", "problemSolving", ["The unit tells you the formula", "Միավորը հուշում է բանաձևը", "Единица подсказывает формулу"], {
    en: `Speed is measured in **m/s**, metres *divided by* seconds, so $v = \\frac{s}{t}$. Density is **kg/m³**, so $\\rho = \\frac{m}{V}$. Pressure is **N/m²**, so $p = \\frac{F}{S}$.

Forgot a formula? Read the unit and it rebuilds itself. This never fails for the grade 7 quantities.`,
    hy: `Արագությունը չափվում է **մ/վ**-ով, մետր *բաժանած* վայրկյան, ուրեմն $v = \\frac{s}{t}$։ Խտությունը՝ **կգ/մ³**, ուրեմն $\\rho = \\frac{m}{V}$։ Ճնշումը՝ **Ն/մ²**, ուրեմն $p = \\frac{F}{S}$։

Մոռացե՞լ ես բանաձևը։ Կարդա միավորը, և բանաձևն ինքն իրեն կվերակառուցվի։ 7-րդ դասարանի մեծությունների համար սա երբեք չի ձախողում։`,
    ru: `Скорость измеряется в **м/с**, метры *делённые на* секунды, значит $v = \\frac{s}{t}$. Плотность в **кг/м³**, значит $\\rho = \\frac{m}{V}$. Давление в **Н/м²**, значит $p = \\frac{F}{S}$.

Забыл формулу? Прочитай единицу, и формула восстановится сама. Для величин 7 класса это не подводит никогда.`,
  }),
  tip("physics", 7, "kmh-to-ms", "mentalMath", ["km/h to m/s: divide by 3.6", "կմ/ժ-ից մ/վ․ բաժանիր 3,6-ի", "км/ч в м/с: дели на 3,6"], {
    en: `$1\\ \\text{km/h} = \\frac{1000\\ \\text{m}}{3600\\ \\text{s}} = \\frac{1}{3{.}6}\\ \\text{m/s}$. So $72\\ \\text{km/h} = 20\\ \\text{m/s}$, $36\\ \\text{km/h} = 10\\ \\text{m/s}$, $108\\ \\text{km/h} = 30\\ \\text{m/s}$.

Going the other way, multiply by $3{.}6$: a sprinter at $10\\ \\text{m/s}$ runs $36\\ \\text{km/h}$. Memorise the pairs 36, 72, 108 and most problems become mental.`,
    hy: `$1\\ \\text{կմ/ժ} = \\frac{1000\\ \\text{մ}}{3600\\ \\text{վ}} = \\frac{1}{3{,}6}\\ \\text{մ/վ}$։ Ուրեմն $72\\ \\text{կմ/ժ} = 20\\ \\text{մ/վ}$, $36\\ \\text{կմ/ժ} = 10\\ \\text{մ/վ}$, $108\\ \\text{կմ/ժ} = 30\\ \\text{մ/վ}$։

Հակառակ ուղղությամբ բազմապատկիր $3{,}6$-ով․ $10\\ \\text{մ/վ}$ վազորդը վազում է $36\\ \\text{կմ/ժ}$։ Անգիր սովորիր 36, 72, 108 զույգերը, և խնդիրների մեծ մասը մտքում է լուծվում։`,
    ru: `$1\\ \\text{км/ч} = \\frac{1000\\ \\text{м}}{3600\\ \\text{с}} = \\frac{1}{3{,}6}\\ \\text{м/с}$. Значит $72\\ \\text{км/ч} = 20\\ \\text{м/с}$, $36\\ \\text{км/ч} = 10\\ \\text{м/с}$, $108\\ \\text{км/ч} = 30\\ \\text{м/с}$.

Обратно умножай на $3{,}6$: спринтер при $10\\ \\text{м/с}$ бежит $36\\ \\text{км/ч}$. Запомни пары 36, 72, 108, и большинство задач решаются в уме.`,
  }),
  tip("physics", 7, "density-of-water", "memory", ["Water is the ruler: 1000 kg/m³", "Ջուրը չափանիշ է․ 1000 կգ/մ³", "Вода это эталон: 1000 кг/м³"], {
    en: `Water: $\\rho = 1000\\ \\text{kg/m}^3 = 1\\ \\text{g/cm}^3$, so one litre weighs one kilogram. Things that float are lighter than that (ice $900$, oil $800$, wood $500{-}700$), things that sink are heavier (aluminium $2700$, iron $7800$, gold $19300$).

When a problem gives a density, compare it with water first. If your calculated density for a stone is $0{.}3$, you have a unit error.`,
    hy: `Ջուր․ $\\rho = 1000\\ \\text{կգ/մ}^3 = 1\\ \\text{գ/սմ}^3$, ուրեմն մեկ լիտրը մեկ կիլոգրամ է։ Լողացող բաները դրանից թեթև են (սառույց $900$, ձեթ $800$, փայտ $500{-}700$), խորտակվողները՝ ծանր (ալյումին $2700$, երկաթ $7800$, ոսկի $19300$)։

Երբ խնդիրը խտություն է տալիս, սկզբում համեմատիր ջրի հետ։ Եթե քարի համար հաշվածդ խտությունը $0{,}3$ է, միավորների սխալ ունես։`,
    ru: `Вода: $\\rho = 1000\\ \\text{кг/м}^3 = 1\\ \\text{г/см}^3$, то есть литр весит килограмм. То, что плавает, легче (лёд $900$, масло $800$, дерево $500{-}700$), то, что тонет, тяжелее (алюминий $2700$, железо $7800$, золото $19300$).

Когда задача даёт плотность, сначала сравни её с водой. Если у тебя плотность камня вышла $0{,}3$, ошибка в единицах.`,
  }),
  tip("physics", 7, "g-equals-ten", "exam", ["Use $g = 10$ unless told otherwise", "Օգտագործիր $g = 10$, եթե այլ բան չի ասված", "Бери $g = 10$, если не сказано иное"], {
    en: `School problems almost always allow $g \\approx 10\\ \\text{N/kg}$. Weight of $5\\ \\text{kg}$ is $50\\ \\text{N}$, done. Using $9{.}8$ slows you down and the extra precision is not rewarded.

Read the problem header: if it says $g = 9{.}8$, use it. Otherwise 10.`,
    hy: `Դպրոցական խնդիրները գրեթե միշտ թույլ են տալիս $g \\approx 10\\ \\text{Ն/կգ}$։ $5\\ \\text{կգ}$-ի կշիռը $50\\ \\text{Ն}$ է, վերջ։ $9{,}8$ օգտագործելը դանդաղեցնում է, իսկ ավելորդ ճշտությունը չի գնահատվում։

Կարդա խնդրի վերնագիրը․ եթե ասում է $g = 9{,}8$, օգտագործիր այն։ Հակառակ դեպքում՝ 10։`,
    ru: `Школьные задачи почти всегда разрешают $g \\approx 10\\ \\text{Н/кг}$. Вес $5\\ \\text{кг}$ это $50\\ \\text{Н}$, готово. Использование $9{,}8$ замедляет, а лишняя точность не оценивается.

Читай шапку задачи: если там $g = 9{,}8$, бери его. Иначе 10.`,
  }),

  // ---------- Grade 8 ----------
  tip("physics", 8, "ohm-triangle", "memory", ["Ohm's law triangle", "Օհմի օրենքի եռանկյունը", "Треугольник закона Ома"], {
    en: `Draw a triangle: $U$ on top, $I$ and $R$ at the bottom. **Cover** the quantity you want and read the rest: cover $U$ → $I \\cdot R$; cover $I$ → $\\frac{U}{R}$; cover $R$ → $\\frac{U}{I}$.

The same triangle works for $P = UI$ (put $P$ on top), $m = \\rho V$, $s = vt$ and $Q = It$. One picture, five formulas.`,
    hy: `Նկարիր եռանկյուն․ վերևում $U$, ներքևում $I$ և $R$։ **Փակիր** փնտրած մեծությունը և կարդա մնացածը․ փակիր $U$ → $I \\cdot R$, փակիր $I$ → $\\frac{U}{R}$, փակիր $R$ → $\\frac{U}{I}$։

Նույն եռանկյունը գործում է $P = UI$-ի համար ($P$-ն վերևում), $m = \\rho V$, $s = vt$ և $Q = It$։ Մեկ նկար, հինգ բանաձև։`,
    ru: `Нарисуй треугольник: $U$ сверху, $I$ и $R$ внизу. **Закрой** искомую величину и прочитай остальное: закрой $U$ → $I \\cdot R$; закрой $I$ → $\\frac{U}{R}$; закрой $R$ → $\\frac{U}{I}$.

Тот же треугольник работает для $P = UI$ ($P$ сверху), $m = \\rho V$, $s = vt$ и $Q = It$. Одна картинка, пять формул.`,
  }),
  tip("physics", 8, "series-parallel-rule", "memory", ["Series adds resistance, parallel adds paths", "Հաջորդականը դիմադրություն է գումարում, զուգահեռը՝ ուղիներ", "Последовательно складывает сопротивления, параллельно складывает пути"], {
    en: `**Series**: one path, resistances add, total is bigger than any one. **Parallel**: more paths, total is smaller than the smallest.

Two equal resistors $R$ in parallel give $\\frac{R}{2}$; three give $\\frac{R}{3}$. For two different ones use "product over sum": $\\frac{R_1 R_2}{R_1 + R_2}$. $6\\ \\Omega$ and $3\\ \\Omega$ in parallel: $\\frac{18}{9} = 2\\ \\Omega$.

Sanity check: if your parallel total is bigger than one of the parts, you used the wrong rule.`,
    hy: `**Հաջորդական**․ մեկ ուղի, դիմադրությունները գումարվում են, ընդհանուրը մեծ է ցանկացած մեկից։ **Զուգահեռ**․ ավելի շատ ուղի, ընդհանուրը փոքր է ամենափոքրից։

Երկու հավասար $R$ զուգահեռ՝ $\\frac{R}{2}$, երեքը՝ $\\frac{R}{3}$։ Երկու տարբերի համար «արտադրյալը բաժանած գումարին»․ $\\frac{R_1 R_2}{R_1 + R_2}$։ $6\\ \\Omega$ և $3\\ \\Omega$ զուգահեռ․ $\\frac{18}{9} = 2\\ \\Omega$։

Ստուգում․ եթե զուգահեռ ընդհանուրը մեծ է մասերից մեկից, սխալ կանոն ես կիրառել։`,
    ru: `**Последовательно**: один путь, сопротивления складываются, общее больше любого из них. **Параллельно**: путей больше, общее меньше наименьшего.

Два одинаковых $R$ параллельно дают $\\frac{R}{2}$; три дают $\\frac{R}{3}$. Для двух разных «произведение на сумму»: $\\frac{R_1 R_2}{R_1 + R_2}$. $6\\ \\Omega$ и $3\\ \\Omega$ параллельно: $\\frac{18}{9} = 2\\ \\Omega$.

Проверка: если параллельное общее вышло больше одной из частей, ты применил не то правило.`,
  }),
  tip("physics", 8, "heat-balance-table", "problemSolving", ["Heat problems: one table, who gives, who takes", "Ջերմային խնդիրներ․ մեկ աղյուսակ, ով տալիս է, ով վերցնում", "Тепловые задачи: одна таблица, кто отдаёт, кто получает"], {
    en: `Write two columns, **gives heat** and **takes heat**, and list every process with its formula: heating $cm\\Delta t$, melting $\\lambda m$, boiling $Lm$. Then set the two column totals equal.

Hot iron into cold water: iron gives $c_{\\text{Fe}} m_{\\text{Fe}}(t_1 - t)$, water takes $c_{\\text{w}} m_{\\text{w}}(t - t_2)$. The table prevents the classic error of forgetting that ice must first melt before it warms.`,
    hy: `Գրիր երկու սյունակ՝ **ջերմություն տալիս է** և **ջերմություն վերցնում է**, և թվարկիր ամեն պրոցեսն իր բանաձևով․ տաքացում $cm\\Delta t$, հալում $\\lambda m$, եռում $Lm$։ Հետո երկու սյունակների գումարները հավասարեցրու։

Տաք երկաթը սառը ջրի մեջ․ երկաթը տալիս է $c_{\\text{Fe}} m_{\\text{Fe}}(t_1 - t)$, ջուրը վերցնում է $c_{\\text{ջ}} m_{\\text{ջ}}(t - t_2)$։ Աղյուսակը կանխում է դասական սխալը՝ մոռանալ, որ սառույցը տաքանալուց առաջ պետք է հալվի։`,
    ru: `Напиши два столбика, **отдаёт тепло** и **получает тепло**, и перечисли каждый процесс с формулой: нагрев $cm\\Delta t$, плавление $\\lambda m$, кипение $Lm$. Затем приравняй суммы столбиков.

Горячее железо в холодную воду: железо отдаёт $c_{\\text{Fe}} m_{\\text{Fe}}(t_1 - t)$, вода получает $c_{\\text{в}} m_{\\text{в}}(t - t_2)$. Таблица предотвращает классическую ошибку: забыть, что лёд сначала должен растаять, а потом нагреваться.`,
  }),
  tip("physics", 8, "estimate-order-of-magnitude", "problemSolving", ["Guess the power of ten before calculating", "Գուշակիր տասի աստիճանը հաշվելուց առաջ", "Прикинь порядок величины до расчёта"], {
    en: `Before you compute how much energy a kettle uses, guess: a kettle is about $2\\ \\text{kW}$, boiling takes about $3$ minutes, so about $2000 \\times 180 \\approx 4 \\times 10^5\\ \\text{J}$. If your exact answer is $4 \\times 10^8$, you slipped on a unit.

Physicists call this a Fermi estimate. It is the single most useful habit in the subject.`,
    hy: `Նախքան հաշվելը, թե որքան էներգիա է ծախսում թեյնիկը, գուշակիր․ թեյնիկը մոտ $2\\ \\text{կՎտ}$ է, եռալը մոտ $3$ րոպե, ուրեմն մոտ $2000 \\times 180 \\approx 4 \\times 10^5\\ \\text{Ջ}$։ Եթե ճշգրիտ պատասխանդ $4 \\times 10^8$ է, միավորի վրա սայթաքել ես։

Ֆիզիկոսները սա Ֆերմիի գնահատական են անվանում։ Սա առարկայի ամենաօգտակար սովորությունն է։`,
    ru: `Прежде чем считать, сколько энергии тратит чайник, прикинь: чайник около $2\\ \\text{кВт}$, кипит около $3$ минут, значит примерно $2000 \\cdot 180 \\approx 4 \\cdot 10^5\\ \\text{Дж}$. Если точный ответ $4 \\cdot 10^8$, ты ошибся в единицах.

Физики называют это оценкой Ферми. Это самая полезная привычка в предмете.`,
  }),

  // ---------- Grade 9 ----------
  tip("physics", 9, "free-body-diagram", "problemSolving", ["Draw every force before any formula", "Նկարիր ամեն ուժ՝ բանաձևից առաջ", "Рисуй все силы до любой формулы"], {
    en: `A dot for the body, an arrow for every force: gravity down, normal force perpendicular to the surface, friction along the surface against motion, tension along the rope. Then choose axes along the motion and write Newton's second law **per axis**.

Students who skip the drawing forget the normal force on an incline nine times out of ten.`,
    hy: `Կետ՝ մարմնի համար, սլաք՝ ամեն ուժի համար․ ծանրության ուժը ներքև, հենարանի ռեակցիան մակերևույթին ուղղահայաց, շփումը մակերևույթի երկայնքով՝ շարժմանը հակառակ, լարվածությունը պարանի երկայնքով։ Հետո առանցքներն ընտրիր շարժման երկայնքով և Նյուտոնի երկրորդ օրենքը գրիր **ամեն առանցքի համար**։

Նկարը բաց թողնող աշակերտները թեք հարթության վրա հենարանի ռեակցիան տասից ինն անգամ մոռանում են։`,
    ru: `Точка для тела, стрелка для каждой силы: тяжесть вниз, реакция опоры перпендикулярно поверхности, трение вдоль поверхности против движения, натяжение вдоль нити. Потом выбери оси вдоль движения и запиши второй закон Ньютона **по каждой оси**.

Кто пропускает рисунок, в девяти случаях из десяти забывает реакцию опоры на наклонной плоскости.`,
  }),
  tip("physics", 9, "energy-instead-of-kinematics", "problemSolving", ["No time given? Use energy", "Ժամանակ տրված չէ՞․ օգտագործիր էներգիա", "Время не дано? Используй энергию"], {
    en: `If the question mentions heights and speeds but **no time**, skip kinematics and write energy conservation: $mgh_1 + \\frac{mv_1^2}{2} = mgh_2 + \\frac{mv_2^2}{2}$. The mass cancels.

A ball dropped from $20\\ \\text{m}$: $v = \\sqrt{2gh} = \\sqrt{400} = 20\\ \\text{m/s}$. One line instead of three.`,
    hy: `Եթե հարցում բարձրություններ և արագություններ են, բայց **ժամանակ չկա**, շրջանցիր կինեմատիկան և գրիր էներգիայի պահպանում․ $mgh_1 + \\frac{mv_1^2}{2} = mgh_2 + \\frac{mv_2^2}{2}$։ Զանգվածը կրճատվում է։

$20\\ \\text{մ}$-ից գցած գնդակ․ $v = \\sqrt{2gh} = \\sqrt{400} = 20\\ \\text{մ/վ}$։ Մեկ տող երեքի փոխարեն։`,
    ru: `Если в вопросе есть высоты и скорости, но **нет времени**, пропусти кинематику и запиши закон сохранения энергии: $mgh_1 + \\frac{mv_1^2}{2} = mgh_2 + \\frac{mv_2^2}{2}$. Масса сокращается.

Мяч, упавший с $20\\ \\text{м}$: $v = \\sqrt{2gh} = \\sqrt{400} = 20\\ \\text{м/с}$. Одна строка вместо трёх.`,
  }),
  tip("physics", 9, "graph-area-slope", "memory", ["Slope and area of motion graphs", "Շարժման գրաֆիկների թեքություն և մակերես", "Наклон и площадь на графиках движения"], {
    en: `On a **$v$–$t$ graph**: slope is acceleration, area under the curve is distance. On an **$x$–$t$ graph**: slope is velocity.

So a triangle on the $v$–$t$ graph from $0$ to $10\\ \\text{m/s}$ over $4\\ \\text{s}$ means $a = 2{.}5\\ \\text{m/s}^2$ and $s = \\frac12 \\cdot 4 \\cdot 10 = 20\\ \\text{m}$. No formulas needed, just geometry.`,
    hy: `**$v$–$t$ գրաֆիկում**․ թեքությունը արագացում է, կորի տակի մակերեսը՝ անցած ճանապարհ։ **$x$–$t$ գրաֆիկում**․ թեքությունը արագություն է։

Ուրեմն $v$–$t$ գրաֆիկում եռանկյուն $0$-ից $10\\ \\text{մ/վ}$ $4\\ \\text{վ}$-ում նշանակում է $a = 2{,}5\\ \\text{մ/վ}^2$ և $s = \\frac12 \\cdot 4 \\cdot 10 = 20\\ \\text{մ}$։ Բանաձև պետք չէ, միայն երկրաչափություն։`,
    ru: `На **графике $v$–$t$**: наклон это ускорение, площадь под графиком это путь. На **графике $x$–$t$**: наклон это скорость.

Значит треугольник на графике $v$–$t$ от $0$ до $10\\ \\text{м/с}$ за $4\\ \\text{с}$ означает $a = 2{,}5\\ \\text{м/с}^2$ и $s = \\frac12 \\cdot 4 \\cdot 10 = 20\\ \\text{м}$. Формулы не нужны, только геометрия.`,
  }),
  tip("physics", 9, "dimensional-check", "exam", ["Check dimensions before the number", "Ստուգիր չափողականությունը թվից առաջ", "Проверь размерность до числа"], {
    en: `Derived $T = 2\\pi\\sqrt{\\frac{g}{l}}$ for a pendulum? Check units: $\\sqrt{\\frac{\\text{m/s}^2}{\\text{m}}} = \\frac{1}{\\text{s}}$, not seconds. So the fraction is upside down: $T = 2\\pi\\sqrt{\\frac{l}{g}}$.

Do this check on every final formula in an exam. It takes ten seconds and catches half of all algebra slips.`,
    hy: `Ճոճանակի համար արտածե՞լ ես $T = 2\\pi\\sqrt{\\frac{g}{l}}$։ Ստուգիր միավորները․ $\\sqrt{\\frac{\\text{մ/վ}^2}{\\text{մ}}} = \\frac{1}{\\text{վ}}$, ոչ թե վայրկյան։ Ուրեմն կոտորակը շրջված է․ $T = 2\\pi\\sqrt{\\frac{l}{g}}$։

Քննությանը ամեն վերջնական բանաձևի համար արա այս ստուգումը։ Տասը վայրկյան է տևում և բռնում է հանրահաշվական սխալների կեսը։`,
    ru: `Вывел для маятника $T = 2\\pi\\sqrt{\\frac{g}{l}}$? Проверь единицы: $\\sqrt{\\frac{\\text{м/с}^2}{\\text{м}}} = \\frac{1}{\\text{с}}$, а не секунды. Значит дробь перевёрнута: $T = 2\\pi\\sqrt{\\frac{l}{g}}$.

Делай эту проверку для каждой итоговой формулы на экзамене. Десять секунд, и половина алгебраических ошибок поймана.`,
  }),

  // ---------- Grade 10 ----------
  tip("physics", 10, "projectile-split", "problemSolving", ["Projectiles: split into two boring motions", "Նետած մարմին․ բաժանիր երկու պարզ շարժման", "Брошенное тело: раздели на два скучных движения"], {
    en: `Horizontal: constant speed, $x = v_x t$. Vertical: free fall, $y = v_y t - \\frac{gt^2}{2}$. They share only the **time**.

Flight time comes from the vertical motion alone; range is then horizontal speed times that time. Thrown horizontally from $45\\ \\text{m}$ at $10\\ \\text{m/s}$: $t = \\sqrt{\\frac{2 \\cdot 45}{10}} = 3\\ \\text{s}$, range $30\\ \\text{m}$.`,
    hy: `Հորիզոնական․ հաստատուն արագություն, $x = v_x t$։ Ուղղաձիգ․ ազատ անկում, $y = v_y t - \\frac{gt^2}{2}$։ Նրանց ընդհանուրը միայն **ժամանակն** է։

Թռիչքի ժամանակը գալիս է միայն ուղղաձիգ շարժումից, հեռահարությունը՝ հորիզոնական արագությունն անգամ այդ ժամանակը։ $45\\ \\text{մ}$-ից հորիզոնական նետած $10\\ \\text{մ/վ}$-ով․ $t = \\sqrt{\\frac{2 \\cdot 45}{10}} = 3\\ \\text{վ}$, հեռահարությունը $30\\ \\text{մ}$։`,
    ru: `По горизонтали: постоянная скорость, $x = v_x t$. По вертикали: свободное падение, $y = v_y t - \\frac{gt^2}{2}$. Общее у них только **время**.

Время полёта берётся только из вертикального движения; дальность это горизонтальная скорость, умноженная на это время. Брошено горизонтально с $45\\ \\text{м}$ со скоростью $10\\ \\text{м/с}$: $t = \\sqrt{\\frac{2 \\cdot 45}{10}} = 3\\ \\text{с}$, дальность $30\\ \\text{м}$.`,
  }),
  tip("physics", 10, "pv-nrt-ratios", "problemSolving", ["Gas laws: write the equation twice and divide", "Գազի օրենքներ․ գրիր հավասարումը երկու անգամ և բաժանիր", "Газовые законы: запиши уравнение дважды и подели"], {
    en: `Instead of memorising Boyle, Charles and Gay-Lussac separately, write $pV = nRT$ for state 1 and state 2 and **divide**: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$ for a fixed amount of gas. Cross out whatever is constant.

Temperature must be in **kelvin**: $t + 273$. Using $20°$ instead of $293\\ \\text{K}$ is the most common exam error in this topic.`,
    hy: `Բոյլը, Շառլը և Գեյ-Լյուսակը առանձին անգիր անելու փոխարեն գրիր $pV = nRT$ 1-ին և 2-րդ վիճակների համար և **բաժանիր**․ $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$ գազի հաստատուն քանակի դեպքում։ Ջնջիր այն, ինչ հաստատուն է։

Ջերմաստիճանը պետք է լինի **կելվինով**․ $t + 273$։ $293\\ \\text{Կ}$-ի փոխարեն $20°$ օգտագործելն այս թեմայի ամենատարածված քննական սխալն է։`,
    ru: `Вместо того чтобы отдельно заучивать Бойля, Шарля и Гей-Люссака, запиши $pV = nRT$ для состояния 1 и состояния 2 и **подели**: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$ для постоянного количества газа. Вычеркни то, что постоянно.

Температура должна быть в **кельвинах**: $t + 273$. Использовать $20°$ вместо $293\\ \\text{К}$ это самая частая экзаменационная ошибка в теме.`,
  }),
  tip("physics", 10, "momentum-vs-energy", "memory", ["Collision? Momentum always, energy only if elastic", "Բախո՞ւմ․ իմպուլսը միշտ, էներգիան՝ միայն առաձգականի դեպքում", "Удар? Импульс всегда, энергия только при упругом"], {
    en: `Momentum $\\sum m\\vec v$ is conserved in **every** collision, explosion or sticking together. Kinetic energy is conserved **only** in a perfectly elastic collision.

Two carts stick together: use momentum, never energy. The word "sticks" or "embeds" is the signal that kinetic energy is lost as heat.`,
    hy: `Իմպուլսը $\\sum m\\vec v$ պահպանվում է **ամեն** բախման, պայթյունի կամ կպչելու դեպքում։ Կինետիկ էներգիան պահպանվում է **միայն** բացարձակ առաձգական բախման դեպքում։

Երկու սայլակ կպչում են միմյանց․ օգտագործիր իմպուլս, երբեք էներգիա։ «Կպչում է» կամ «խրվում է» բառերը նշան են, որ կինետիկ էներգիան կորել է ջերմության տեսքով։`,
    ru: `Импульс $\\sum m\\vec v$ сохраняется при **любом** столкновении, взрыве или слипании. Кинетическая энергия сохраняется **только** при абсолютно упругом ударе.

Две тележки слипаются: используй импульс, никогда энергию. Слова «слипаются» или «застревает» это сигнал, что кинетическая энергия ушла в тепло.`,
  }),
  tip("physics", 10, "constants-card", "memory", ["Six constants worth knowing by heart", "Վեց հաստատուն, որ արժե անգիր գիտես", "Шесть констант, которые стоит знать наизусть"], {
    en: `- $g \\approx 10\\ \\text{m/s}^2$
- $c = 3 \\times 10^8\\ \\text{m/s}$
- $R = 8{.}31\\ \\text{J/(mol·K)}$
- $N_A = 6 \\times 10^{23}\\ \\text{mol}^{-1}$
- $k = 9 \\times 10^9\\ \\text{N·m}^2/\\text{C}^2$
- $e = 1{.}6 \\times 10^{-19}\\ \\text{C}$

Exams give them, but knowing them lets you sanity-check an answer in seconds and spot a copying mistake.`,
    hy: `- $g \\approx 10\\ \\text{մ/վ}^2$
- $c = 3 \\times 10^8\\ \\text{մ/վ}$
- $R = 8{,}31\\ \\text{Ջ/(մոլ·Կ)}$
- $N_A = 6 \\times 10^{23}\\ \\text{մոլ}^{-1}$
- $k = 9 \\times 10^9\\ \\text{Ն·մ}^2/\\text{Կլ}^2$
- $e = 1{,}6 \\times 10^{-19}\\ \\text{Կլ}$

Քննություններում դրանք տրվում են, բայց անգիր գիտենալը թույլ է տալիս վայրկյանների մեջ ստուգել պատասխանը և նկատել արտագրելու սխալ։`,
    ru: `- $g \\approx 10\\ \\text{м/с}^2$
- $c = 3 \\cdot 10^8\\ \\text{м/с}$
- $R = 8{,}31\\ \\text{Дж/(моль·К)}$
- $N_A = 6 \\cdot 10^{23}\\ \\text{моль}^{-1}$
- $k = 9 \\cdot 10^9\\ \\text{Н·м}^2/\\text{Кл}^2$
- $e = 1{,}6 \\cdot 10^{-19}\\ \\text{Кл}$

На экзамене их дают, но зная их, ты за секунды проверяешь ответ на разумность и замечаешь ошибку переписывания.`,
  }),

  // ---------- Grade 11 ----------
  tip("physics", 11, "right-hand-rules", "memory", ["One right hand for all magnetism", "Մեկ աջ ձեռք ամբողջ մագնիսականության համար", "Одна правая рука для всего магнетизма"], {
    en: `**Field of a wire**: thumb along the current, fingers curl along the field lines. **Force on a current** (Lorentz / Ampère): fingers along the current, field lines enter the palm, thumb shows the force.

Practise with a pencil as the wire until it is automatic. In the exam, do it under the desk if you must; it is faster than any mnemonic.`,
    hy: `**Հաղորդչի դաշտ**․ բթամատը հոսանքի ուղղությամբ, մատները ոլորվում են դաշտի գծերի երկայնքով։ **Ուժ հոսանքի վրա** (Լորենց / Ամպեր)․ մատները հոսանքի երկայնքով, դաշտի գծերը մտնում են ափի մեջ, բթամատը ցույց է տալիս ուժը։

Փորձիր մատիտը հաղորդիչ պատկերացնելով, մինչև ավտոմատ դառնա։ Քննությանը, եթե պետք է, սեղանի տակ արա․ ավելի արագ է, քան ցանկացած հուշաբառ։`,
    ru: `**Поле провода**: большой палец по току, пальцы загибаются вдоль линий поля. **Сила на ток** (Лоренц / Ампер): пальцы по току, линии поля входят в ладонь, большой палец показывает силу.

Тренируйся с карандашом вместо провода, пока не станет автоматическим. На экзамене делай под столом, если надо; это быстрее любой запоминалки.`,
  }),
  tip("physics", 11, "lenz-is-stubborn", "memory", ["Lenz's law: the loop is stubborn", "Լենցի օրենք․ կոնտուրը կամակոր է", "Правило Ленца: контур упрямый"], {
    en: `An induced current always acts to **oppose the change** that made it. Magnet approaching? The loop pushes it away. Magnet leaving? The loop pulls it back. Flux growing? Induced field points against it.

Think of the loop as a stubborn person who hates change. You will get the direction right every time without the minus sign in $\\mathcal{E} = -\\frac{\\Delta\\Phi}{\\Delta t}$.`,
    hy: `Ինդուկցիոն հոսանքը միշտ **հակազդում է այն փոփոխությանը**, որը նրան առաջացրել է։ Մագնիսը մոտենո՞ւմ է։ Կոնտուրը վանում է։ Հեռանո՞ւմ է։ Կոնտուրը ետ է քաշում։ Հոսքն աճո՞ւմ է։ Ինդուկցիոն դաշտն ուղղված է դրա դեմ։

Կոնտուրը պատկերացրու որպես կամակոր մարդ, որն ատում է փոփոխությունը։ Ուղղությունը ամեն անգամ ճիշտ կստանաս՝ առանց $\\mathcal{E} = -\\frac{\\Delta\\Phi}{\\Delta t}$-ի մինուսի մասին մտածելու։`,
    ru: `Индукционный ток всегда **противодействует изменению**, которое его вызвало. Магнит приближается? Контур отталкивает его. Удаляется? Контур тянет обратно. Поток растёт? Индуцированное поле направлено против.

Представь контур упрямым человеком, который ненавидит перемены. Направление будет верным каждый раз без минуса в $\\mathcal{E} = -\\frac{\\Delta\\Phi}{\\Delta t}$.`,
  }),
  tip("physics", 11, "lens-sign-sketch", "problemSolving", ["Lenses: draw two rays, then compute", "Ոսպնյակներ․ նկարիր երկու ճառագայթ, հետո հաշվիր", "Линзы: нарисуй два луча, потом считай"], {
    en: `Before using $\\frac1F = \\frac1d + \\frac1f$, sketch the ray through the centre (straight) and the ray parallel to the axis (through the focus). Where they meet is the image: this tells you **real or virtual, upright or inverted, bigger or smaller** before any algebra.

Then the formula only has to confirm the number, and a wrong sign is immediately visible.`,
    hy: `$\\frac1F = \\frac1d + \\frac1f$ օգտագործելուց առաջ նկարիր կենտրոնով անցնող ճառագայթը (ուղիղ) և առանցքին զուգահեռ ճառագայթը (կիզակետով)։ Նրանց հատման կետը պատկերն է․ սա ասում է՝ **իրական է կամ կեղծ, ուղիղ կամ շրջված, մեծ կամ փոքր**՝ նախքան հանրահաշիվը։

Հետո բանաձևը միայն թիվը պետք է հաստատի, իսկ սխալ նշանը միանգամից տեսանելի է։`,
    ru: `Прежде чем использовать $\\frac1F = \\frac1d + \\frac1f$, нарисуй луч через центр (прямой) и луч параллельно оси (через фокус). Где они пересекаются, там изображение: это говорит, **действительное или мнимое, прямое или перевёрнутое, больше или меньше**, до всякой алгебры.

Потом формула лишь подтверждает число, а неверный знак сразу виден.`,
  }),
  tip("physics", 11, "rms-vs-peak", "mentalMath", ["Peak is $\\sqrt2$ times the effective value", "Ամպլիտուդը $\\sqrt2$ անգամ գործող արժեքն է", "Амплитуда в $\\sqrt2$ раз больше действующего значения"], {
    en: `Mains voltage "220 V" is the effective (RMS) value; the peak is $220\\sqrt2 \\approx 311\\ \\text{V}$. The same ratio links peak and effective current.

Quick mental version: effective $\\approx 0{.}7 \\times$ peak, peak $\\approx 1{.}4 \\times$ effective. Capacitor ratings must survive the **peak**, which is why a 250 V capacitor is not enough for the mains.`,
    hy: `Ցանցի «220 Վ» լարումը գործող (RMS) արժեքն է, ամպլիտուդը $220\\sqrt2 \\approx 311\\ \\text{Վ}$ է։ Նույն հարաբերությունը կապում է հոսանքի ամպլիտուդն ու գործող արժեքը։

Արագ տարբերակ․ գործող $\\approx 0{,}7 \\times$ ամպլիտուդ, ամպլիտուդ $\\approx 1{,}4 \\times$ գործող։ Կոնդենսատորները պետք է դիմանան **ամպլիտուդին**, դրա համար 250 Վ կոնդենսատորը ցանցի համար բավարար չէ։`,
    ru: `Сетевое напряжение «220 В» это действующее значение; амплитуда равна $220\\sqrt2 \\approx 311\\ \\text{В}$. То же отношение связывает амплитуду и действующее значение тока.

Быстро в уме: действующее $\\approx 0{,}7 \\times$ амплитуда, амплитуда $\\approx 1{,}4 \\times$ действующее. Конденсатор должен выдерживать **амплитуду**, поэтому конденсатора на 250 В для сети мало.`,
  }),

  // ---------- Grade 12 ----------
  tip("physics", 12, "photon-energy-shortcut", "mentalMath", ["Photon energy in eV from wavelength in nm", "Ֆոտոնի էներգիան էՎ-ով՝ ալիքի երկարությունից նմ-ով", "Энергия фотона в эВ из длины волны в нм"], {
    en: `$$E\\,[\\text{eV}] \\approx \\frac{1240}{\\lambda\\,[\\text{nm}]}$$

Green light at $500\\ \\text{nm}$ carries about $2{.}5\\ \\text{eV}$; red at $620\\ \\text{nm}$ about $2\\ \\text{eV}$. Visible light is $1{.}6{-}3{.}2\\ \\text{eV}$.

This one number replaces $h$, $c$ and the conversion to electron-volts, and makes photoelectric problems mental arithmetic.`,
    hy: `$$E\\,[\\text{էՎ}] \\approx \\frac{1240}{\\lambda\\,[\\text{նմ}]}$$

Կանաչ լույսը $500\\ \\text{նմ}$-ում մոտ $2{,}5\\ \\text{էՎ}$ է կրում, կարմիրը $620\\ \\text{նմ}$-ում՝ մոտ $2\\ \\text{էՎ}$։ Տեսանելի լույսը $1{,}6{-}3{,}2\\ \\text{էՎ}$ է։

Այս մեկ թիվը փոխարինում է $h$-ին, $c$-ին և էլեկտրոն-վոլտի փոխարկմանը և ֆոտոէֆեկտի խնդիրները մտքի թվաբանություն է դարձնում։`,
    ru: `$$E\\,[\\text{эВ}] \\approx \\frac{1240}{\\lambda\\,[\\text{нм}]}$$

Зелёный свет при $500\\ \\text{нм}$ несёт около $2{,}5\\ \\text{эВ}$; красный при $620\\ \\text{нм}$ около $2\\ \\text{эВ}$. Видимый свет это $1{,}6{-}3{,}2\\ \\text{эВ}$.

Одно это число заменяет $h$, $c$ и перевод в электрон-вольты, превращая задачи на фотоэффект в устный счёт.`,
  }),
  tip("physics", 12, "half-life-halving", "mentalMath", ["Half-life: just keep halving", "Կիսատրոհման պարբերություն․ պարզապես կիսիր", "Период полураспада: просто дели пополам"], {
    en: `After $n$ half-lives, $\\frac{1}{2^n}$ remains. Three half-lives: $\\frac18 = 12{.}5\\%$. Ten half-lives: $\\frac{1}{1024} \\approx 0{.}1\\%$, effectively gone.

"How long until 1/16 remains?" → $16 = 2^4$ → four half-lives. Use the exponential formula only when $n$ is not a whole number.`,
    hy: `$n$ կիսատրոհման պարբերությունից հետո մնում է $\\frac{1}{2^n}$-ը։ Երեք պարբերություն․ $\\frac18 = 12{,}5\\%$։ Տասը պարբերություն․ $\\frac{1}{1024} \\approx 0{,}1\\%$, գործնականում վերջացել է։

«Որքա՞ն ժամանակ, մինչև մնա 1/16-ը» → $16 = 2^4$ → չորս պարբերություն։ Ցուցչային բանաձևն օգտագործիր միայն այն դեպքում, երբ $n$-ն ամբողջ չէ։`,
    ru: `После $n$ периодов полураспада остаётся $\\frac{1}{2^n}$. Три периода: $\\frac18 = 12{,}5\\%$. Десять периодов: $\\frac{1}{1024} \\approx 0{,}1\\%$, практически ничего.

«Через сколько останется 1/16?» → $16 = 2^4$ → четыре периода. Показательную формулу используй только когда $n$ не целое.`,
  }),
  tip("physics", 12, "nuclear-reaction-bookkeeping", "problemSolving", ["Balance a nuclear reaction like a sum", "Հավասարեցրու միջուկային ռեակցիան գումարի պես", "Уравнивай ядерную реакцию как сумму"], {
    en: `Top numbers (mass number $A$) must add up on both sides; bottom numbers (charge $Z$) must add up too. Alpha particle: $A = 4$, $Z = 2$. Beta-minus: $A = 0$, $Z = -1$. Neutron: $A = 1$, $Z = 0$.

Uranium-238 emits an alpha: $238 - 4 = 234$, $92 - 2 = 90$, so thorium-234. Two sums, done. Then check the element name in a periodic table by its $Z$.`,
    hy: `Վերևի թվերը (զանգվածային թիվ $A$) պետք է հավասար գումար տան երկու կողմում, ներքևի թվերը (լիցք $Z$)՝ նույնպես։ Ալֆա մասնիկ․ $A = 4$, $Z = 2$։ Բետա-մինուս․ $A = 0$, $Z = -1$։ Նեյտրոն․ $A = 1$, $Z = 0$։

Ուրան-238-ը ալֆա արձակում է․ $238 - 4 = 234$, $92 - 2 = 90$, ուրեմն թորիում-234։ Երկու գումար, վերջ։ Հետո տարրի անունը ստուգիր պարբերական աղյուսակում $Z$-ով։`,
    ru: `Верхние числа (массовое число $A$) должны сходиться с обеих сторон; нижние (заряд $Z$) тоже. Альфа-частица: $A = 4$, $Z = 2$. Бета-минус: $A = 0$, $Z = -1$. Нейтрон: $A = 1$, $Z = 0$.

Уран-238 испускает альфа: $238 - 4 = 234$, $92 - 2 = 90$, значит торий-234. Две суммы, готово. Потом сверь название элемента по $Z$ в таблице Менделеева.`,
  }),
  tip("physics", 12, "exam-answer-template", "exam", ["The four-line answer that always scores", "Չորս տողով պատասխան, որ միշտ բալ է բերում", "Ответ в четыре строки, который всегда оценивают"], {
    en: `1. **Law** in words and formula: "By energy conservation, $mgh = \\frac{mv^2}{2}$."
2. **Solve** symbolically: $v = \\sqrt{2gh}$.
3. **Substitute** with units: $v = \\sqrt{2 \\cdot 10 \\cdot 20}\\ \\text{m/s}$.
4. **Answer** with unit and a reasonableness word: $v = 20\\ \\text{m/s}$, about the speed of a car.

Examiners give points for steps 1 and 2 even if your arithmetic in step 3 fails.`,
    hy: `1. **Օրենք** բառերով և բանաձևով․ «Էներգիայի պահպանման օրենքով $mgh = \\frac{mv^2}{2}$»։
2. **Լուծիր** ընդհանուր տեսքով․ $v = \\sqrt{2gh}$։
3. **Տեղադրիր** միավորներով․ $v = \\sqrt{2 \\cdot 10 \\cdot 20}\\ \\text{մ/վ}$։
4. **Պատասխան** միավորով և խելամտության բառով․ $v = 20\\ \\text{մ/վ}$, մոտավորապես մեքենայի արագություն։

Քննողները բալ տալիս են 1-ին և 2-րդ քայլերի համար, եթե 3-րդ քայլի թվաբանությունն էլ ձախողվի։`,
    ru: `1. **Закон** словами и формулой: «По закону сохранения энергии $mgh = \\frac{mv^2}{2}$».
2. **Реши** в общем виде: $v = \\sqrt{2gh}$.
3. **Подставь** с единицами: $v = \\sqrt{2 \\cdot 10 \\cdot 20}\\ \\text{м/с}$.
4. **Ответ** с единицей и словом о разумности: $v = 20\\ \\text{м/с}$, примерно скорость автомобиля.

Экзаменаторы дают баллы за шаги 1 и 2, даже если арифметика в шаге 3 не удалась.`,
  }),
];
