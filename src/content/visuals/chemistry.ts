import type { VisualMap } from ".";
import { ask } from "./ask";

export const chemistryVisuals: VisualMap = {
  7: {
    "what-is-chemistry": ["diagram lab", "diagram hazards", "diagram burner"],
    "properties-of-substances": [
      "measure mode=density",
      ask(3, {
        en: ["Which of these is a property of a substance, not of a body?", ["Shape", "Size", "Density"], "Shape and size belong to a particular object. Density is the same for every piece of the substance."],
        hy: ["Սրանցից ո՞րն է նյութի, այլ ոչ թե մարմնի հատկություն։", ["Ձևը", "Չափսը", "Խտությունը"], "Ձևն ու չափսը տվյալ առարկայի հատկություններ են։ Խտությունը նյութի ցանկացած կտորի համար նույնն է։"],
        ru: ["Что из этого — свойство вещества, а не тела?", ["Форма", "Размер", "Плотность"], "Форма и размер относятся к конкретному предмету. Плотность одинакова для любого кусочка вещества."],
      }),
    ],
    "mixtures-and-separation": ["mechanism filtration", "mechanism distillation", "mechanism separate"],
    "physical-and-chemical-changes": [
      ask(2, {
        en: ["Which of these is a chemical change?", ["Ice melts", "Iron rusts", "Sugar dissolves in tea"], "Rust is a new substance, iron oxide. Melting and dissolving do not make new substances."],
        hy: ["Սրանցից ո՞րն է քիմիական երևույթ։", ["Սառույցը հալվում է", "Երկաթը ժանգոտում է", "Շաքարը լուծվում է թեյի մեջ"], "Ժանգը նոր նյութ է՝ երկաթի օքսիդ։ Հալվելն ու լուծվելը նոր նյութեր չեն առաջացնում։"],
        ru: ["Что из этого — химическое явление?", ["Лёд тает", "Железо ржавеет", "Сахар растворяется в чае"], "Ржавчина — новое вещество, оксид железа. При плавлении и растворении новые вещества не образуются."],
      }, true),
      "mechanism combustion",
      "mechanism corrosion",
    ],
    "atoms-molecules-elements": ["ptable", "molecule set=h2,o2,h2o,co2"],
    "relative-masses": ["mole"],
    "simple-complex-valence": ["molecule set=o2,n2,h2o,nh3,ch4"],
    "mass-fraction-of-element": [
      "mole set=H2O,CO2,Fe2O3,CuSO4",
      ask(1, {
        en: ["What is the mass fraction of oxygen in water, H₂O (Mr = 18)?", ["About 89%", "About 33%", "About 11%"], "w(O) = 16 / 18 ≈ 0.89, so about 89%."],
        hy: ["Որքա՞ն է թթվածնի զանգվածային բաժինը ջրում՝ H₂O (Mr = 18)։", ["Մոտ 89%", "Մոտ 33%", "Մոտ 11%"], "w(O) = 16 / 18 ≈ 0,89, այսինքն՝ մոտ 89%։"],
        ru: ["Какова массовая доля кислорода в воде H₂O (Mr = 18)?", ["Около 89%", "Около 33%", "Около 11%"], "w(O) = 16 / 18 ≈ 0,89, то есть около 89%."],
      }),
    ],
    "chemical-equations": ["balance"],
    "types-of-reactions": [
      "balance set=water,limestone,zinc,neutral",
      ask(2, {
        en: ["CaCO₃ → CaO + CO₂. What type of reaction is this?", ["Combination", "Decomposition", "Exchange"], "One substance breaks into two simpler ones: a decomposition."],
        hy: ["CaCO₃ → CaO + CO₂։ Ո՞ր տեսակի ռեակցիա է սա։", ["Միացման", "Քայքայման", "Փոխանակման"], "Մեկ նյութը քայքայվում է երկու ավելի պարզ նյութերի․ սա քայքայման ռեակցիա է։"],
        ru: ["CaCO₃ → CaO + CO₂. Какой это тип реакции?", ["Соединения", "Разложения", "Обмена"], "Одно вещество распадается на два более простых: это разложение."],
      }),
    ],
    "oxygen-and-combustion": ["mechanism combustion", "balance set=methane,rust,phosphorus,magnetite"],
    "hydrogen-and-water": ["balance set=water,zinc,sodium,copper", "molecule set=h2,h2o,h2o2"],
  },
  8: {
    "amount-of-substance": ["mole mode=amount kind=solid", "mole"],
    "molar-volume-of-gases": [
      "mole mode=amount kind=gas",
      ask(3, {
        en: ["Which takes up more space at normal conditions: 1 mol of hydrogen or 1 mol of carbon dioxide?", ["Hydrogen", "Carbon dioxide", "The same, 22.4 L each"], "By Avogadro's law a mole of any gas takes 22.4 L at normal conditions, however heavy its molecules are."],
        hy: ["Նորմալ պայմաններում ի՞նչն է ավելի շատ տեղ զբաղեցնում՝ 1 մոլ ջրածի՞նը, թե՞ 1 մոլ ածխաթթու գազը։", ["Ջրածինը", "Ածխաթթու գազը", "Նույնը, յուրաքանչյուրը 22,4 լ"], "Ավոգադրոյի օրենքով ցանկացած գազի մեկ մոլը նորմալ պայմաններում զբաղեցնում է 22,4 լ՝ անկախ մոլեկուլների զանգվածից։"],
        ru: ["Что занимает больше места при нормальных условиях: 1 моль водорода или 1 моль углекислого газа?", ["Водород", "Углекислый газ", "Одинаково, по 22,4 л"], "По закону Авогадро моль любого газа при н. у. занимает 22,4 л, как бы тяжелы ни были его молекулы."],
      }, true),
    ],
    "solutions-mass-fraction": ["solution mode=fraction", "solution mode=dilute"],
    oxides: [
      "molecule set=co2,so2,so3,co",
      ask(1, {
        en: ["CO₂ dissolves in water and turns litmus slightly red. What kind of oxide is it?", ["Acidic", "Basic", "Amphoteric"], "Non-metal oxides like CO₂ and SO₂ are acidic: with water they give acids."],
        hy: ["CO₂-ը լուծվում է ջրում, և լակմուսը թեթևակի կարմրում է։ Ինչպիսի՞ օքսիդ է այն։", ["Թթվային", "Հիմնային", "Երկդիմի"], "Ոչ մետաղների օքսիդները, ինչպես CO₂-ն ու SO₂-ը, թթվային են․ ջրի հետ առաջացնում են թթուներ։"],
        ru: ["CO₂ растворяется в воде, и лакмус слегка краснеет. Какой это оксид?", ["Кислотный", "Основный", "Амфотерный"], "Оксиды неметаллов, как CO₂ и SO₂, кислотные: с водой они дают кислоты."],
      }),
    ],
    bases: ["ph ind=phph", "balance set=hydroxide,sodium"],
    acids: ["ph ind=litmus", "activity mode=acid"],
    salts: ["ions set=barium,silver,copper", "activity mode=salt"],
    "genetic-relationships": [
      "balance set=sodium,neutral,hydroxide",
      ask(2, {
        en: ["Which chain is correct? Metal → … → salt", ["Na → NaCl → NaOH", "Na → Na₂O → NaOH → NaCl", "Na → H₂O → NaCl"], "A metal gives a basic oxide, the oxide with water gives a base, and the base with an acid gives a salt."],
        hy: ["Ո՞ր շղթան է ճիշտ։ Մետաղ → … → աղ", ["Na → NaCl → NaOH", "Na → Na₂O → NaOH → NaCl", "Na → H₂O → NaCl"], "Մետաղից ստացվում է հիմնային օքսիդ, օքսիդը ջրի հետ տալիս է հիմք, իսկ հիմքը թթվի հետ՝ աղ։"],
        ru: ["Какая цепочка верна? Металл → … → соль", ["Na → NaCl → NaOH", "Na → Na₂O → NaOH → NaCl", "Na → H₂O → NaCl"], "Металл даёт основный оксид, оксид с водой — основание, основание с кислотой — соль."],
      }),
    ],
    "periodic-law": ["ptable", "ptable mode=metal"],
    "atomic-structure": ["atom mode=shells", "atom"],
    "chemical-bond-oxidation-state": ["mechanism ionic", "mechanism covalent", "ptable mode=en"],
  },
  9: {
    "electrolytic-dissociation": ["mechanism dissolve", "ions mode=dissolve"],
    "ionic-equations": [
      ask(1, {
        en: ["You pour BaCl₂ into Na₂SO₄. Which ions leave the solution?", ["Ba²⁺ and SO₄²⁻, as a white precipitate", "Na⁺ and Cl⁻", "None: nothing happens"], "Barium sulfate does not dissolve, so Ba²⁺ and SO₄²⁻ fall out as BaSO₄. Na⁺ and Cl⁻ stay as spectators."],
        hy: ["BaCl₂-ը լցնում ես Na₂SO₄-ի մեջ։ Ո՞ր իոններն են դուրս գալիս լուծույթից։", ["Ba²⁺ և SO₄²⁻, սպիտակ նստվածքի տեսքով", "Na⁺ և Cl⁻", "Ոչ մեկը․ ոչինչ չի կատարվում"], "Բարիումի սուլֆատը չի լուծվում, ուստի Ba²⁺-ն ու SO₄²⁻-ը նստում են BaSO₄-ի տեսքով։ Na⁺-ն ու Cl⁻-ը մնում են լուծույթում։"],
        ru: ["Ты наливаешь BaCl₂ в Na₂SO₄. Какие ионы уходят из раствора?", ["Ba²⁺ и SO₄²⁻ — в белый осадок", "Na⁺ и Cl⁻", "Никакие: ничего не происходит"], "Сульфат бария не растворяется, поэтому Ba²⁺ и SO₄²⁻ выпадают в осадок BaSO₄. Na⁺ и Cl⁻ остаются в растворе."],
      }, true),
      "ions",
    ],
    "redox-reactions": ["mechanism redox", "activity mode=salt"],
    halogens: ["molecule set=cl2,hcl", "ions set=silver"],
    "sulfur-and-compounds": ["molecule set=h2s,so2,so3,h2so4", "mechanism contact"],
    "nitrogen-ammonia": ["molecule set=n2,nh3,nh4", "mechanism haber"],
    "nitric-acid-phosphorus": ["molecule set=hno3,h3po4", "ions set=ammonium", "flame K"],
    "carbon-silicon": ["lattice set=diamond,graphite", "ions set=carbonate", "mechanism greenhouse"],
    "metals-general": ["mechanism metallic", "activity", "mechanism corrosion"],
    "alkali-alkaline-earth": ["activity mode=water", "flame Na", "mechanism hardness"],
    aluminium: ["balance set=aluminium,alumina,thermite"],
    iron: ["mechanism blastfurnace", "ions set=iron", "balance set=rust,magnetite,blast"],
  },
  10: {
    "structure-theory": [
      "molecule set=c4h10,isobutane",
      ask(2, {
        en: ["Butane and isobutane are both C₄H₁₀. What makes them different substances?", ["Different numbers of atoms", "A different order of joining the atoms", "Different elements"], "They are isomers: the same formula, but the atoms are joined in a different order, as Butlerov's theory says."],
        hy: ["Բութանը և իզոբութանը երկուսն էլ C₄H₁₀ են։ Ինչո՞վ են դրանք տարբեր նյութեր։", ["Ատոմների տարբեր թվով", "Ատոմների միացման տարբեր հաջորդականությամբ", "Տարբեր տարրերով"], "Դրանք իզոմերներ են՝ նույն բանաձևով, բայց ատոմները միացած են տարբեր հաջորդականությամբ, ինչպես ասում է Բուտլերովի տեսությունը։"],
        ru: ["Бутан и изобутан — оба C₄H₁₀. Почему это разные вещества?", ["Разное число атомов", "Разный порядок соединения атомов", "Разные элементы"], "Это изомеры: формула одна, но атомы соединены в разном порядке, как и говорит теория Бутлерова."],
      }),
    ],
    alkanes: ["molecule set=ch4,c2h6,c3h8,c4h10", "balance set=methane,ethane,propane"],
    alkenes: ["molecule set=c2h4,c3h6", "mechanism polymer"],
    "alkynes-dienes-rubber": ["molecule set=c2h2,butadiene,isoprene"],
    "benzene-arenes": ["molecule set=benzene,toluene,styrene"],
    "oil-gas-coal": ["diagram oilcolumn"],
    alcohols: ["molecule set=methanol,ethanol", "balance set=ethanol"],
    "polyols-phenol": ["molecule set=glycol,glycerol,phenol"],
    aldehydes: ["molecule set=formaldehyde,acetaldehyde,acetone"],
    "carboxylic-acids": ["molecule set=formicacid,aceticacid", "ph set=home"],
    "esters-fats-soap": ["mechanism ester", "mechanism soap"],
    carbohydrates: ["molecule set=glucose", "balance set=photosynthesis"],
  },
  11: {
    amines: ["molecule set=methylamine,aniline"],
    "amino-acids-proteins": ["molecule set=glycine,alanine,urea"],
    "nucleic-acids": ["mechanism dna"],
    polymers: ["mechanism polymer", "molecule set=c2h4,vinylchloride,styrene"],
    "electron-configurations": ["atom mode=config", "ptable mode=block"],
    "bonding-and-crystals": ["lattice", "mechanism ionic", "mechanism covalent", "mechanism metallic"],
    "reaction-rate": [
      ask(3, {
        en: ["Why does a powder react faster than one lump of the same substance?", ["The powder is hotter", "The powder has more molecules", "The powder has a much larger surface for collisions"], "Particles react where they meet. Grinding a lump opens much more surface, so more collisions happen every second."],
        hy: ["Ինչու՞ է փոշին ավելի արագ փոխազդում, քան նույն նյութի մեկ կտորը։", ["Փոշին ավելի տաք է", "Փոշին ավելի շատ մոլեկուլներ ունի", "Փոշին բախումների համար շատ ավելի մեծ մակերես ունի"], "Մասնիկները փոխազդում են այնտեղ, որտեղ հանդիպում են։ Մանրացնելը բացում է շատ ավելի մեծ մակերես, ուստի ամեն վայրկյան ավելի շատ բախումներ են տեղի ունենում։"],
        ru: ["Почему порошок реагирует быстрее, чем кусок того же вещества?", ["Порошок горячее", "В порошке больше молекул", "У порошка гораздо больше поверхность для столкновений"], "Частицы реагируют там, где встречаются. Измельчение открывает гораздо большую поверхность, и столкновений за секунду становится больше."],
      }, true),
      "rate",
      "mechanism catalyst",
    ],
    "chemical-equilibrium": ["rate mode=equilibrium", "mechanism haber"],
    "ph-and-hydrolysis": ["ph", "ph set=salts", "ph mode=titration"],
    electrolysis: ["mechanism electrolysis"],
  },
  12: {
    "transition-metals": ["flame Cu", "ions set=copper,iron"],
    "chemistry-environment": ["mechanism acidrain", "mechanism greenhouse"],
    "chemistry-daily-life": ["ph set=home", "mechanism soap"],
    "calculations-by-equation": [
      "balance",
      ask(2, {
        en: ["2H₂ + O₂ → 2H₂O. How many moles of water come from 4 mol of hydrogen?", ["2 mol", "4 mol", "8 mol"], "The coefficients of H₂ and H₂O are equal, so 4 mol H₂ give 4 mol H₂O."],
        hy: ["2H₂ + O₂ → 2H₂O։ Քանի՞ մոլ ջուր կստացվի 4 մոլ ջրածնից։", ["2 մոլ", "4 մոլ", "8 մոլ"], "H₂-ի և H₂O-ի գործակիցները հավասար են, ուստի 4 մոլ H₂-ից ստացվում է 4 մոլ H₂O։"],
        ru: ["2H₂ + O₂ → 2H₂O. Сколько моль воды получится из 4 моль водорода?", ["2 моль", "4 моль", "8 моль"], "Коэффициенты H₂ и H₂O равны, поэтому из 4 моль H₂ получается 4 моль H₂O."],
      }),
    ],
    "excess-and-limiting": [
      "balance set=water,ammonia",
      ask(1, {
        en: ["3 mol of H₂ react with 3 mol of O₂ (2H₂ + O₂ → 2H₂O). Which one runs out first?", ["Hydrogen", "Oxygen", "Both at once"], "3 mol H₂ need only 1.5 mol O₂, so hydrogen is the limiting reactant and 1.5 mol O₂ is left over."],
        hy: ["3 մոլ H₂-ը փոխազդում է 3 մոլ O₂-ի հետ (2H₂ + O₂ → 2H₂O)։ Ո՞րն է առաջինը սպառվում։", ["Ջրածինը", "Թթվածինը", "Երկուսը միաժամանակ"], "3 մոլ H₂-ին անհրաժեշտ է ընդամենը 1,5 մոլ O₂, ուստի ջրածինը պակասորդով է, իսկ 1,5 մոլ O₂-ը մնում է ավելցուկում։"],
        ru: ["3 моль H₂ реагируют с 3 моль O₂ (2H₂ + O₂ → 2H₂O). Что закончится первым?", ["Водород", "Кислород", "Оба сразу"], "3 моль H₂ нужно лишь 1,5 моль O₂, поэтому водород в недостатке, а 1,5 моль O₂ остаётся в избытке."],
      }),
    ],
    "yield-and-impurities": [
      ask(2, {
        en: ["In theory a reaction gives 50 g of product, but you get 40 g. What is the yield?", ["40%", "80%", "125%"], "Yield = practical / theoretical = 40 / 50 = 0.8, so 80%."],
        hy: ["Տեսականորեն ռեակցիան պետք է տա 50 գ արգասիք, բայց ստանում ես 40 գ։ Որքա՞ն է ելքը։", ["40%", "80%", "125%"], "Ելք = գործնական / տեսական = 40 / 50 = 0,8, այսինքն՝ 80%։"],
        ru: ["По расчёту реакция даёт 50 г продукта, а получили 40 г. Каков выход?", ["40%", "80%", "125%"], "Выход = практический / теоретический = 40 / 50 = 0,8, то есть 80%."],
      }),
      "mole",
    ],
    "solution-problems": ["solution mode=mix", "solution mode=molar"],
    "deriving-formulas": [
      "mole set=CH4,C2H6,C2H4,C2H2",
      ask(3, {
        en: ["A hydrocarbon is 80% carbon and 20% hydrogen by mass, and its molar mass is 30 g/mol. What is it?", ["CH₄", "C₂H₄", "C₂H₆"], "C : H = 80/12 : 20/1 ≈ 6.7 : 20 = 1 : 3, so the simplest formula is CH₃ (15 g/mol). Doubling it gives 30 g/mol: C₂H₆."],
        hy: ["Ածխաջրածինը զանգվածով 80% ածխածին է և 20% ջրածին, իսկ մոլային զանգվածը 30 գ/մոլ է։ Ո՞րն է այն։", ["CH₄", "C₂H₄", "C₂H₆"], "C : H = 80/12 : 20/1 ≈ 6,7 : 20 = 1 : 3, ուստի պարզագույն բանաձևը CH₃ է (15 գ/մոլ)։ Կրկնապատկելով՝ ստանում ենք 30 գ/մոլ՝ C₂H₆։"],
        ru: ["Углеводород содержит по массе 80% углерода и 20% водорода, молярная масса 30 г/моль. Что это?", ["CH₄", "C₂H₄", "C₂H₆"], "C : H = 80/12 : 20/1 ≈ 6,7 : 20 = 1 : 3, простейшая формула CH₃ (15 г/моль). Удвоив, получаем 30 г/моль: C₂H₆."],
      }),
    ],
    "inorganic-review": ["ions", "activity"],
    "organic-review": ["molecule set=ethanol,aceticacid,ethylacetate", "mechanism ester"],
  },
};
