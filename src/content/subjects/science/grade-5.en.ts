import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The scientific method, measurement, particles, mixtures, forces, energy.",
    "The cell and the microscope, classifying living things.",
  ],
  lessons: {
    "how-science-works": {
      objectives: ["Name the natural sciences", "Tell observation and experiment apart", "Measure length, mass, time and temperature", "Follow safety rules in the laboratory"],
      content: `## The natural sciences

| Science | What it studies |
|---|---|
| **Physics** | motion, forces, light, sound, electricity |
| **Chemistry** | substances and how they change |
| **Biology** | living things |
| **Geography** | the Earth, its nature and its people |
| **Astronomy** | stars, planets, the Universe |
| **Geology** | rocks, minerals, the structure of the Earth |

Outstanding Armenian scientists include the astrophysicist **Viktor Ambartsumian**, who founded the Byurakan Observatory (1946), and the physicist brothers **Abram** and **Artem Alikhanian**.

## How we study

- **Observation**: we look carefully at something without changing it (how a seed sprouts),
- **Experiment**: we set up conditions and test (we put seeds in the light and in the dark),
- **Measurement**: we describe the result with numbers,
- **Model**: a simplified picture (a globe, a model of an atom).

In a good experiment we change **only one condition** and keep the others the same. Otherwise we will not know which condition made the difference.

## Measurement

| Quantity | Unit | Instrument |
|---|---|---|
| Length | metre (m), centimetre (cm), millimetre (mm) | ruler, tape measure |
| Mass | kilogram (kg), gram (g) | scales |
| Time | second (s), minute, hour | clock, stopwatch |
| Temperature | degree Celsius (°C) | thermometer |
| Volume | litre (l), millilitre (ml) | measuring cylinder |

1 m = 100 cm, 1 cm = 10 mm, 1 kg = 1,000 g, 1 l = 1,000 ml.

## Safety in the laboratory

- Work only with the teacher's permission,
- Never taste anything or sniff it directly,
- Wear safety goggles when required,
- Tell the teacher at once about broken glass or a spilt substance,
- Wash your hands after the work.

## Exercises

1. Which science studies living things?
2. How is observation different from experiment?
3. How many centimetres are there in 2 metres?
4. Which instrument measures mass?
5. Why should you change only one condition in an experiment?

## Answers

1. Biology.
2. In observation we do not change what we watch; in an experiment we set up conditions and test.
3. 200 cm.
4. Scales.
5. To know exactly which condition affected the result.`,
      quiz: [
        ["Which science studies how substances change?", ["Chemistry", "Astronomy", "Geography", "Biology"]],
        ["Who founded the Byurakan Observatory?", ["Viktor Ambartsumian", "Mesrop Mashtots", "Alexander Tamanian", "Komitas"]],
        ["How many grams are there in 1 kilogram?", ["1,000", "100", "10", "10,000"]],
        ["Which instrument measures time?", ["A stopwatch", "A ruler", "A thermometer", "Scales"]],
        ["What should you do if something is spilt in the laboratory?", ["Tell the teacher at once", "Taste it", "Hide it", "Carry on working"]],
      ],
    },
    "particles-and-states": {
      objectives: ["Explain that substances are made of particles", "Describe how particles are arranged in solids, liquids and gases", "Explain diffusion", "Explain why objects expand when heated"],
      content: `## Everything is made of particles

All substances are made of very small **particles**: **molecules** and **atoms**. They are so small that they cannot be seen even with an ordinary microscope. One drop of water contains billions of billions of molecules.

Particles:

- are always **moving**,
- have **gaps** between them,
- **attract** one another.

## Three states

| State | Arrangement of particles | Movement | Shape and volume |
|---|---|---|---|
| **Solid** | very close, in order | vibrate in place | has its own shape and volume |
| **Liquid** | close, but not in order | slide past one another | keeps its volume; shape of the container |
| **Gas** | very far apart | move freely and fast | fills the whole container |

That is why a gas is easy to **compress** (an air pump), while a liquid or a solid is almost impossible to compress.

## Diffusion

**Diffusion** is the particles of one substance spreading out among the particles of another on their own.

- The smell of perfume spreads through the whole room,
- The colour from a tea bag spreads through the glass,
- In hot water diffusion is **faster** than in cold water, because the particles move faster.

**Experiment**. Pour hot water into one glass and cold water into another, and add a drop of paint to each. Where does it spread faster?

## Expansion

When heated, particles move faster and **move apart**: the object **expands**. When cooled, it **contracts**.

- In summer power lines sag lower,
- Small **gaps** are left between railway rails,
- The liquid in a thermometer rises when heated.

**Exception**: water **expands** when it freezes. That is why ice floats on water, and in winter a bottle of water in the freezer can burst.

## Exercises

1. What are all substances made of?
2. Why is a gas easy to compress?
3. What is diffusion? Give an example.
4. Why are gaps left between rails?
5. Why does ice float on water?

## Answers

1. Very small particles: molecules and atoms.
2. There are large gaps between its particles.
3. The particles of one substance spreading among the particles of another, for example the smell of perfume spreading.
4. In summer the rails expand, and without gaps they would buckle.
5. Water expands when it freezes, and ice becomes lighter than the same volume of water.`,
      quiz: [
        ["In which state are the particles furthest apart?", ["Gas", "Solid", "Liquid", "The same in all"]],
        ["What is diffusion?", ["Particles mixing on their own", "A substance melting", "A substance burning", "Sound spreading"]],
        ["Where is diffusion faster?", ["In hot water", "In cold water", "In ice", "The same everywhere"]],
        ["What happens to objects when they are heated?", ["They expand", "They contract", "They disappear", "They always change colour"]],
        ["Which substance expands when it freezes?", ["Water", "Iron", "Air", "Glass"]],
      ],
    },
    "mixtures-and-separation": {
      objectives: ["Tell a pure substance from a mixture", "Explain what a solution is", "Choose a way to separate a mixture", "Describe how water is purified"],
      content: `## Pure substance and mixture

- A **pure substance** is made of one kind of particle: distilled water, sugar, iron.
- A **mixture** is made of several substances: air, sea water, a salad, soil.

In nature substances are almost always **mixtures**.

## Solutions

When we mix sugar or salt with water, they **dissolve**: they disappear from view but stay in the water (the water is sweet or salty). Such a mixture is called a **solution**.

- Sugar dissolves **faster** in hot water,
- Sand, chalk and oil **do not dissolve** in water.

## Ways of separating

| Method | How it works | Example |
|---|---|---|
| **Picking out by hand** | we take the bits out by hand | stones from rice |
| **Sieving** | small particles pass through a sieve | sifting flour |
| **Using a magnet** | a magnet attracts iron | iron filings from sand |
| **Settling** | heavy particles sink to the bottom | clay from water |
| **Filtering** | a filter holds back undissolved particles | sand from water |
| **Evaporating** | the water evaporates; the dissolved substance is left | salt from sea water |
| **Distilling** | the vapour is collected and cooled | getting pure water |

**Problem**. How can you separate a mixture of **salt and sand**?

1. Add water: the salt dissolves, the sand does not,
2. **Filter** it: the sand stays on the filter,
3. **Evaporate** the salt solution: the salt is left.

## Purifying drinking water

Water from a river or lake is purified by **settling**, **filtering** and **disinfecting** (chlorine or ultraviolet light). In Armenia most drinking water comes from mountain **springs**, which are naturally clean.

## Exercises

1. Pure substance or mixture: air, sugar, soil?
2. What is a solution?
3. How can you separate iron nails from sand?
4. How can you get salt from sea water?
5. Write the steps for separating a mixture of salt and sand.

## Answers

1. Air is a mixture, sugar is a pure substance, soil is a mixture.
2. A mixture in which one substance is dissolved in another (for example, salt in water).
3. With a magnet.
4. By evaporating.
5. Dissolve in water, filter, evaporate.`,
      quiz: [
        ["Which is a mixture?", ["Air", "Distilled water", "Sugar", "Gold"]],
        ["Which substance does not dissolve in water?", ["Sand", "Salt", "Sugar", "Instant coffee"]],
        ["How do you separate flour from large bits?", ["By sieving", "With a magnet", "By evaporating", "By burning"]],
        ["How is salt obtained from sea water?", ["By evaporating", "By sieving", "With a magnet", "By hand"]],
        ["How does filtering separate a mixture?", ["It holds back undissolved particles", "It attracts iron", "It boils the water", "It freezes it"]],
      ],
    },
    "forces-and-motion": {
      objectives: ["Explain what a force is", "Describe gravity and weight", "Explain friction", "Calculate speed"],
      content: `## Motion

An object is **moving** if it changes its position relative to other objects. A passenger sitting in a bus is moving relative to the road but not relative to the bus.

**Speed** shows how far an object travels in a unit of time:

**speed = distance / time**

For example, a car travelled 120 km in 2 hours: its speed is 60 km/h.

| Who | Approximate speed |
|---|---|
| A person walking | 5 km/h |
| A cyclist | 15–20 km/h |
| A cheetah | up to 100 km/h |
| An aeroplane | about 900 km/h |
| Light | 300,000 km/s |

## Force

A **force** is the action of one object on another: a **push** or a **pull**. A force can:

- set an object moving (kicking a ball),
- stop it (catching a ball),
- change its direction,
- change its shape (squeezing plasticine).

Force is measured in **newtons** (N), named after Isaac Newton, with an instrument called a **force meter**.

## Gravity

The **Earth** pulls all objects towards its centre. That is why a ball thrown upwards falls down. This force is called **gravity**.

On the Moon gravity is about **6 times** weaker than on the Earth: astronauts can jump very high there.

## Friction

**Friction** works against motion when objects rub against each other.

| Friction is useful | Friction is harmful |
|---|---|
| we do not slip when walking | machine parts wear out |
| a car's brakes work | it is hard to move a heavy box |
| we can write with a pencil | |

- Friction is **increased** with sand (on pavements in winter), rubber soles, tyre tread,
- It is **reduced** with oil or grease, wheels, a smooth surface.

## Exercises

1. A person walked 15 km in 3 hours. What was their speed?
2. How can a force change the state of an object?
3. Why does a stone thrown upwards fall?
4. Why is sand spread on pavements in winter?
5. Give an example of harmful friction.

## Answers

1. 5 km/h.
2. It can set it moving, stop it, change its direction or its shape.
3. The Earth pulls it (gravity).
4. To increase friction so that people do not slip.
5. The wearing out of machine parts.`,
      quiz: [
        ["What is the formula for speed?", ["Distance / time", "Time / distance", "Distance × time", "Distance + time"]],
        ["What is force measured in?", ["Newtons", "Kilograms", "Metres", "Litres"]],
        ["Which force pulls a ball towards the Earth?", ["Gravity", "Friction", "Magnetic force", "Wind"]],
        ["How can friction be reduced?", ["With oil or grease", "With sand", "With rubber soles", "With a rough surface"]],
        ["A car travelled 100 km in 2 hours. What was its speed?", ["50 km/h", "200 km/h", "100 km/h", "25 km/h"]],
      ],
    },
    "forms-of-energy": {
      objectives: ["Explain what energy is", "Name forms of energy", "Describe energy changes", "Tell renewable and non-renewable sources apart"],
      content: `## What is energy

**Energy** is the ability to do work. Without energy nothing would move, get warm or give light. Energy is measured in **joules** (J).

## Forms

| Form | Example |
|---|---|
| **Movement energy** (kinetic) | a running person, a flowing river, the wind |
| **Stored energy of position** (potential) | a raised stone, water in a reservoir, a stretched rope |
| **Thermal** | hot tea, a stove |
| **Light** | the Sun, a lamp |
| **Sound** | music |
| **Electrical** | a battery, the mains |
| **Chemical** | food, fuel, a battery |
| **Nuclear** | a nuclear power station |

## Energy changes

Energy is **not created and does not disappear**; it only **changes** from one form to another.

| Device or event | Change |
|---|---|
| lamp | electrical → light + thermal |
| loudspeaker | electrical → sound |
| solar panel | light → electrical |
| hydroelectric power station | movement energy of water → electrical |
| a person running | chemical (food) → movement energy + thermal |
| car | chemical (petrol) → movement energy + thermal |

## Energy sources

- **Renewable** (do not run out): the Sun, wind, water (rivers), the Earth's inner heat,
- **Non-renewable** (run out): oil, gas, coal, uranium.

Burning fuel pollutes the air and strengthens the **greenhouse effect**.

In Armenia electricity is produced at the **Armenian Nuclear Power Plant** (Metsamor), at **thermal power stations** (on gas), at **hydroelectric power stations** (the Sevan–Hrazdan and Vorotan cascades) and at a growing number of **solar** stations.

## Saving energy

- Switch off the light when you leave a room,
- Use LED lamps,
- Do not leave devices on standby all night,
- Close the windows when the heating is on.

## Exercises

1. What is energy?
2. What energy does a stone lying on a high cliff have?
3. What change happens in a solar panel?
4. Give examples of renewable and non-renewable sources.
5. Name two ways to save energy.

## Answers

1. The ability to do work.
2. Stored energy of position (potential energy).
3. Light energy changes into electrical energy.
4. Renewable: the Sun, wind; non-renewable: oil, gas.
5. Switching off the light, using LED lamps.`,
      quiz: [
        ["What is energy measured in?", ["Joules", "Newtons", "Metres", "Degrees"]],
        ["Which source is renewable?", ["Wind", "Oil", "Coal", "Gas"]],
        ["What change happens in a lamp?", ["Electrical → light and heat", "Light → electrical", "Sound → light", "Chemical → sound"]],
        ["What energy is there in food?", ["Chemical", "Nuclear", "Sound", "Magnetic"]],
        ["Where is the Armenian Nuclear Power Plant?", ["In Metsamor", "At Sevan", "In Gyumri", "In Kapan"]],
      ],
    },
    "cell-and-microscope": {
      objectives: ["Describe how a microscope is built", "Explain that all living things are made of cells", "Name the main parts of a cell", "Tell plant and animal cells apart"],
      content: `## The microscope

A **microscope** is an instrument that makes very small objects look bigger. The first microscopes appeared in the 17th century. In 1665 the Englishman **Robert Hooke** saw small "compartments" in a slice of cork and called them **cells**. The Dutchman **Antonie van Leeuwenhoek** was the first to see microbes.

| Part | Role |
|---|---|
| **Eyepiece** | we look through it |
| **Objective lens** | the magnifying lens near the object |
| **Stage** | the slide with the sample is placed on it |
| **Mirror** or lamp | lights up the sample |
| **Focusing knobs** | to get a sharp image |

**Magnification** = eyepiece magnification × objective magnification. For example, 10 × 40 = 400 times.

## The cell

All living things are made of **cells**. Some consist of a single cell (**single-celled**: bacteria, amoeba), others of billions of cells (**multicellular**: plants, animals, people).

The main parts of a cell:

- **Membrane**: separates the cell and lets substances in and out,
- **Cytoplasm**: the jelly-like inside of the cell,
- **Nucleus**: stores the hereditary information and controls the cell.

## Plant and animal cells

| | Plant | Animal |
|---|---|---|
| Membrane | yes | yes |
| Nucleus | yes | yes |
| Strong **cell wall** | yes | no |
| **Chloroplasts** (green) | yes | no |
| Large **vacuole** with cell sap | yes | usually no |

In the chloroplasts food is made using sunlight. That is why plants are green.

**Experiment**. Put a thin piece of onion skin on a slide, add a drop of iodine solution and look at it under a microscope. You will see the onion cells and their nuclei.

## Exercises

1. Who first saw and named cells?
2. How do you work out the magnification of a microscope?
3. What are all living things made of?
4. What does the nucleus do?
5. Which parts does a plant cell have that an animal cell does not?

## Answers

1. Robert Hooke (1665).
2. Multiply the magnifications of the eyepiece and the objective lens.
3. Cells.
4. It stores the hereditary information and controls the life of the cell.
5. A cell wall, chloroplasts, a large vacuole.`,
      quiz: [
        ["What does a microscope do?", ["Makes small objects look bigger", "Measures temperature", "Weighs things", "Lights up a room"]],
        ["Which part of a cell controls its life?", ["The nucleus", "The membrane", "The cytoplasm", "The vacuole"]],
        ["Which living thing is single-celled?", ["An amoeba", "A cat", "An oak", "A person"]],
        ["What is found only in a plant cell?", ["Chloroplasts", "A nucleus", "A membrane", "Cytoplasm"]],
        ["What is the magnification if the eyepiece is 10× and the objective lens is 20×?", ["200", "30", "10", "2,000"]],
      ],
    },
    "kingdoms-of-life": {
      objectives: ["Name the features of living things", "Name the kingdoms of living things", "Describe the features of fungi and bacteria", "Use a simple identification key"],
      content: `## Features of living things

Living things:

1. **feed**,
2. **breathe**,
3. **grow** and **develop**,
4. **reproduce**,
5. **respond** to their surroundings,
6. **get rid of** waste substances,
7. are made of **cells**.

## Kingdoms

Scientists divide living things into groups called **kingdoms**. At school these are usually:

| Kingdom | Features | Examples |
|---|---|---|
| **Bacteria** | single-celled, no nucleus, very small | lactic acid bacteria (matsun), disease-causing bacteria |
| **Fungi** | no chlorophyll; feed on ready-made substances | mushrooms, yeast, mould |
| **Plants** | have chlorophyll; make food using light; do not move about | moss, ferns, trees, flowering plants |
| **Animals** | eat ready-made food; most move about | insects, fish, birds, mammals |

There are also **viruses**, which have no cells and can reproduce only inside other cells. Scientists argue about whether they are alive.

## Fungi

Fungi are neither plants nor animals:

- **Mushrooms** with caps: the button mushroom, the birch bolete. Some mushrooms are **poisonous**, so never pick or eat mushrooms you do not know,
- **Yeast**: used for baking bread,
- **Mould**: appears on old bread, and the first antibiotic, **penicillin**, was obtained from a mould (Alexander Fleming, 1928).

## Bacteria

Bacteria are everywhere: in the air, water, soil and our bodies.

- **Useful**: for making matsun, cheese and pickled vegetables; in the gut they help digestion; in the soil they break down remains,
- **Harmful**: they cause diseases (tonsillitis, tuberculosis).

## Identification key

How to work out which group a living thing belongs to:

1. Is it green and does it make food using light? → **plant**,
2. No: does it eat ready-made food and move about? → **animal**,
3. No: does it grow in soil or on food and have threads? → **fungus**,
4. Can it be seen only with a microscope, as one cell with no nucleus? → **bacterium**.

## Exercises

1. Name five features of living things.
2. Which kingdoms are living things divided into?
3. How are fungi different from plants?
4. Who discovered penicillin?
5. Give an example of useful bacteria.

## Answers

1. They feed, breathe, grow, reproduce, respond.
2. Bacteria, fungi, plants, animals.
3. Fungi have no chlorophyll and do not make food using light.
4. Alexander Fleming (1928).
5. Lactic acid bacteria, which are used to make matsun.`,
      quiz: [
        ["Which kingdom does yeast belong to?", ["Fungi", "Plants", "Animals", "Bacteria"]],
        ["Which is a feature of a living thing?", ["Reproduction", "Brittleness", "Shine", "Melting"]],
        ["Which living things make food using sunlight?", ["Plants", "Fungi", "Animals", "Viruses"]],
        ["What was penicillin obtained from?", ["A mould", "An oak", "A fish", "Sand"]],
        ["Which food is made with the help of bacteria?", ["Matsun", "Sugar", "Salt", "Water"]],
      ],
    },
  },
};
