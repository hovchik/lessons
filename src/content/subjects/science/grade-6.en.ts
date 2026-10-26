import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The structure of the Earth, volcanoes and earthquakes, rocks, the atmosphere, the Universe.",
    "Heat transfer, electric circuits, ecosystems and human impact.",
  ],
  lessons: {
    "earth-structure-volcanoes": {
      objectives: ["Describe the inner structure of the Earth", "Explain the movement of tectonic plates", "Explain how volcanoes and earthquakes happen", "Know what to do during an earthquake"],
      content: `## Layers of the Earth

| Layer | Feature |
|---|---|
| **Crust** | solid, thin (5–70 km); we live on it |
| **Mantle** | very hot, slowly flowing rock, about 2,900 km thick |
| **Outer core** | liquid iron and nickel |
| **Inner core** | solid, about 5,000–6,000 °C |

If you compare the Earth with an egg, the crust is the shell.

## Tectonic plates

The crust and the upper part of the mantle (the **lithosphere**) are split into large **plates**, which move slowly, a few centimetres a year. Where plates **collide**, mountains form (the Himalayas, the Caucasus); where they **move apart**, oceans and rifts form.

The Armenian Highlands lie in the zone where the **Arabian** and **Eurasian** plates collide. That is why there are extinct volcanoes here and earthquakes are frequent.

## Volcanoes

Molten rock from the mantle, **magma**, rises through cracks to the surface. Magma that reaches the surface is called **lava**. As it cools, lava turns into rock (for example, basalt, tuff).

- **Active** volcanoes: Etna (Italy), Kilauea (Hawaii),
- **Extinct** volcanoes: Ararat, Aragats, Azhdahak.

The famous Armenian **pink tuff**, from which many of Yerevan's buildings are built, is volcanic in origin. People were already using **obsidian** (volcanic glass) in the Stone Age.

## Earthquakes

An **earthquake** is a shaking of the Earth's crust caused by a sudden shift of rocks. Its strength is measured by **magnitude** (the Richter scale), and the instrument that records the shaking is called a **seismograph**.

On **7 December 1988** the **Spitak earthquake** (magnitude about 6.8) destroyed Spitak and did enormous damage to Gyumri (then Leninakan), Vanadzor (Kirovakan) and the villages around. About 25,000 people died (more, by some estimates). Many countries around the world came to help.

## What to do in an earthquake

- **Drop, cover, hold on**: get down on the floor, hide under a strong table and hold on to its leg,
- Keep away from windows and hanging objects,
- Do not use the lift,
- Outside, keep away from buildings, poles and trees,
- After the shaking stops, leave calmly, without pushing.

## Exercises

1. Name the layers of the Earth.
2. Why are earthquakes frequent in Armenia?
3. How is magma different from lava?
4. When did the Spitak earthquake happen?
5. What should you do if an earthquake starts while you are in class?

## Answers

1. The crust, the mantle, the outer core, the inner core.
2. Armenia lies in the zone where the Arabian and Eurasian plates collide.
3. Magma is molten rock inside the Earth; lava is magma that has reached the surface.
4. On 7 December 1988.
5. Get down on the floor, hide under a table, hold on to its leg, keep away from windows.`,
      quiz: [
        ["Which layer of the Earth is the outermost?", ["The crust", "The mantle", "The core", "The atmosphere"]],
        ["What is magma called when it reaches the surface?", ["Lava", "Tuff", "Basalt", "Granite"]],
        ["Which volcano is extinct?", ["Ararat", "Etna", "Kilauea", "Vesuvius"]],
        ["Which instrument records earthquakes?", ["A seismograph", "A thermometer", "A barometer", "A compass"]],
        ["Which town was completely destroyed by the 1988 earthquake?", ["Spitak", "Yerevan", "Dilijan", "Kapan"]],
      ],
    },
    "rocks-and-minerals": {
      objectives: ["Tell a rock from a mineral", "Describe the three groups of rocks", "Explain weathering", "Name Armenia's mineral resources"],
      content: `## Rock and mineral

- A **mineral** is a natural solid substance with a definite composition and structure (quartz, rock salt, diamond),
- A **rock** is made of one or more minerals (granite is made of quartz, feldspar and mica).

## Three groups of rocks

| Group | How it forms | Examples |
|---|---|---|
| **Igneous** (volcanic) | from cooled magma or lava | basalt, granite, tuff, obsidian |
| **Sedimentary** | from sediments that build up and are pressed together under water | limestone, sandstone, clay, salt, coal |
| **Metamorphic** | from other rocks under great pressure and high temperature | marble (from limestone) |

Sedimentary rocks often preserve **fossils**, traces and remains of ancient living things.

## Weathering

Rocks slowly **break down**:

- **Physical** weathering: changes in temperature, water freezing in cracks,
- **Chemical** weathering: water and air,
- **Biological** weathering: plant roots, lichens.

Weathering produces sand, clay and, over time, **soil**. In the Garni gorge you can see basalt columns, the "**Symphony of Stones**". They formed when lava cooled and cracked, and the river laid them bare.

## Mineral resources

| Kind | Examples |
|---|---|
| **Metallic** | iron, copper, molybdenum, gold |
| **Non-metallic** | salt, limestone, tuff, perlite, basalt |
| **Fuels** | oil, gas, coal |

In Armenia people mine **copper** and **molybdenum** (Kajaran, Agarak), **gold** (Sotk), **tuff**, **basalt**, **perlite** and **rock salt** (Avan). Mining is important for the economy, but it can pollute soil and water, so it needs environmental control.

## Exercises

1. How is a rock different from a mineral?
2. How do sedimentary rocks form?
3. Which rock does marble form from?
4. What is weathering?
5. Which metals are mined in Kajaran?

## Answers

1. A mineral is a natural substance with a definite composition; a rock is made of one or more minerals.
2. From sediments that build up and are pressed together under water.
3. From limestone.
4. The slow breaking down of rocks by temperature, water, air and living things.
5. Copper and molybdenum.`,
      quiz: [
        ["Which rock is volcanic?", ["Basalt", "Limestone", "Sandstone", "Marble"]],
        ["Where are fossils often preserved?", ["In sedimentary rocks", "In lava", "In obsidian", "In diamond"]],
        ["What is the \"Symphony of Stones\"?", ["Basalt columns in the Garni gorge", "A piece of music", "A cave", "A lake"]],
        ["Which resource is a fuel?", ["Coal", "Copper", "Tuff", "Salt"]],
        ["What does weathering produce?", ["Sand, clay and soil", "Lava", "Magma", "Oil"]],
      ],
    },
    "atmosphere-and-weather": {
      objectives: ["Describe the composition and layers of the atmosphere", "Explain air pressure", "Describe the elements of weather and how they are measured", "Tell weather from climate"],
      content: `## The atmosphere

The **atmosphere** is the layer of air around the Earth. It:

- gives us **oxygen** to breathe,
- protects us from the Sun's harmful **ultraviolet** rays (the **ozone layer**),
- keeps in **heat**,
- burns up most of the meteors flying towards the Earth.

**Composition**: nitrogen about 78%, oxygen about 21%, other gases (argon, carbon dioxide, water vapour) about 1%.

## Layers

| Layer | Height (approx.) | Feature |
|---|---|---|
| **Troposphere** | up to 10–15 km | clouds and weather are here; it gets colder with height |
| **Stratosphere** | up to 50 km | the ozone layer; aeroplanes fly here (in the lower part) |
| **Mesosphere** | up to 80–85 km | meteors burn up |
| **Thermosphere** and above | higher still | the northern lights, satellites |

In the troposphere the temperature falls by about **6 °C** for every **1 km** of height.

## Air pressure

Air has **weight** and presses on the Earth's surface. At sea level normal pressure is about **760 millimetres of mercury**. Pressure **falls** with height. Pressure is measured with a **barometer**.

In Yerevan (about 1,000 m) the pressure is lower than at the seaside. That is why water here boils a little below 100 °C.

## Elements of weather

| Element | Instrument |
|---|---|
| Temperature | thermometer |
| Pressure | barometer |
| Humidity | hygrometer |
| Wind direction | weather vane |
| Wind speed | anemometer |
| Precipitation | rain gauge |

**Wind** happens because air moves from an area of **high** pressure to an area of **low** pressure.

## Weather and climate

- **Weather** is the state of the atmosphere in a place **now** or over a short time,
- **Climate** is the usual pattern of weather in an area over **many years**.

The Ararat plain has a **dry continental** climate: hot summers, cold winters, little precipitation. In the northern forested areas it is wetter and milder.

## Exercises

1. Which gas is there most of in the atmosphere?
2. In which layer does weather form?
3. At the foot of a mountain it is 20 °C. Roughly what will the temperature be at a height of 2 km?
4. Why does wind happen?
5. How is weather different from climate?

## Answers

1. Nitrogen.
2. In the troposphere.
3. About 8 °C (20 − 2 × 6).
4. Air moves from an area of high pressure to an area of low pressure.
5. Weather is the state of the atmosphere now; climate is the usual pattern over many years.`,
      quiz: [
        ["Which layer protects us from ultraviolet rays?", ["The ozone layer", "The troposphere", "The crust", "The mantle"]],
        ["Roughly what percentage of the air is oxygen?", ["21%", "78%", "1%", "50%"]],
        ["Which instrument measures air pressure?", ["A barometer", "A thermometer", "A weather vane", "A seismograph"]],
        ["What is climate?", ["The pattern of weather over many years", "Today's weather", "The direction of the wind", "A single shower"]],
        ["How does pressure change with height?", ["It falls", "It rises", "It does not change", "It doubles"]],
      ],
    },
    "the-universe": {
      objectives: ["Describe the structure of the Universe, from planets to galaxies", "Tell a star, a planet, a moon, a comet and a meteor apart", "Explain what a light year is", "Tell about important events in space exploration"],
      content: `## The scale of the Universe

The **Solar System** → the **Milky Way** galaxy → clusters of galaxies → the **Universe**.

- The **Milky Way** has about **100–400 billion** stars. In a clear dark sky it can be seen as a pale band.
- There are **billions** of galaxies in the Universe.
- Scientists estimate the age of the Universe at about **13.8 billion years**.

## Heavenly bodies

| Body | What it is |
|---|---|
| **Star** | a ball of hot gas that gives off its own light (the Sun, Sirius) |
| **Planet** | a large body that goes round a star and does not shine by itself |
| **Moon** (satellite) | goes round a planet (the Moon) |
| **Comet** | a "snowball" of ice and dust that grows a tail as it nears the Sun |
| **Asteroid** | a small rocky or metal body |
| **Meteor** | a body that burns up in the atmosphere (a "shooting star"); a piece that reaches the ground is a **meteorite** |

**Constellations** are groups of stars that form shapes in the sky: the Great Bear, Orion, Cassiopeia.

## The light year

Distances in space are very large, so we use the **light year**: the distance light travels in one year (about 9.5 trillion km).

- Light from the Sun reaches us in about **8 minutes**,
- The nearest star (Proxima Centauri) is about **4.2 light years** away.

When we look at distant stars, we see them as they were **many years ago**.

## Space exploration

| Year | Event |
|---|---|
| 1957 | the first artificial satellite (USSR) |
| 1961 | **Yuri Gagarin**, the first person in space |
| 1969 | **Neil Armstrong** and Buzz Aldrin on the Moon (USA) |
| 1990 | the Hubble Space Telescope |
| from 1998 | the International Space Station |
| 2021 | the James Webb Space Telescope |

The Armenian astronomer **Viktor Ambartsumian** discovered stellar **associations** (groups of young stars), and at the **Byurakan Observatory** Benjamin Markarian compiled a famous list of active galaxies ("Markarian galaxies").

## Exercises

1. What is our galaxy called?
2. How is a star different from a planet?
3. What is a light year?
4. Who was the first person in space, and in which year?
5. Which observatory is in Armenia, and who founded it?

## Answers

1. The Milky Way.
2. A star gives off its own light; a planet goes round a star and does not shine.
3. The distance light travels in one year.
4. Yuri Gagarin, 1961.
5. The Byurakan Observatory, founded by Viktor Ambartsumian.`,
      quiz: [
        ["What is the Sun?", ["A star", "A planet", "A comet", "A galaxy"]],
        ["How long does sunlight take to reach the Earth?", ["About 8 minutes", "One year", "One second", "One day"]],
        ["What is a comet?", ["A body of ice and dust with a tail", "A planet's moon", "A galaxy", "A group of stars"]],
        ["Who first stepped onto the Moon?", ["Neil Armstrong", "Yuri Gagarin", "Galileo", "Copernicus"]],
        ["What is a constellation?", ["A group of stars forming a shape in the sky", "A kind of planet", "A spacecraft", "A piece of a meteorite"]],
      ],
    },
    "heat-transfer": {
      objectives: ["Tell heat from temperature", "Describe conduction, convection and radiation", "Tell heat conductors from insulators", "Apply this knowledge in everyday life"],
      content: `## Heat and temperature

- **Temperature** shows how warm or cold an object is (measured in °C),
- **Heat** is energy that always passes from a **warmer** object to a **colder** one until their temperatures are equal.

Hot tea cools down because heat passes into the air.

## Three ways of heat transfer

| Way | How it happens | Example |
|---|---|---|
| **Conduction** | heat passes from particle to particle in a solid | a metal spoon gets hot in hot tea |
| **Convection** | warm liquid or gas rises, cold sinks | water heating in a pan, a radiator warming a room |
| **Radiation** | heat travels as rays, even through empty space | the Sun's heat, the heat you feel near a campfire |

## Conductors and insulators

- **Good conductors of heat**: metals (copper, aluminium, iron),
- **Poor conductors of heat** (insulators): wood, plastic, wool, air, polystyrene.

**Air** is a good insulator. That is why:

- A woollen jumper is warm: there is air between the fibres,
- Birds fluff up their feathers in winter,
- Windows have **double glazing** with a layer of air,
- There is almost no air between the walls of a **vacuum flask**, so it keeps things hot for a long time.

## Colour and radiation

**Dark** surfaces absorb radiation more and get hotter; **light** surfaces reflect it. In summer it is better to wear light-coloured clothes.

## Exercises

1. In which direction does heat always pass?
2. Why is the handle of a frying pan made of plastic?
3. By which kind of heat transfer does the Sun warm the Earth?
4. Why is a woollen jumper warm?
5. Why is a radiator put under a window rather than near the ceiling?

## Answers

1. From a warmer object to a colder one.
2. Plastic is a poor conductor of heat, so the handle does not get hot.
3. Radiation.
4. There is air between the fibres, and air is a good insulator.
5. Warm air rises (convection) and heats the whole room, and it also "stops" the cold air from the window.`,
      quiz: [
        ["Which is a good conductor of heat?", ["Copper", "Wood", "Wool", "Polystyrene"]],
        ["What is the heat transfer in which warm air rises called?", ["Convection", "Conduction", "Radiation", "Evaporation"]],
        ["How does the Sun's heat reach the Earth?", ["By radiation", "By conduction", "By convection", "With the wind"]],
        ["Clothes of which colour get less hot in the sun?", ["White", "Black", "Dark blue", "Dark brown"]],
        ["Why does a vacuum flask keep things hot for a long time?", ["There is almost no air between its walls", "It is made of metal", "It is black", "It is big"]],
      ],
    },
    "simple-circuits": {
      objectives: ["Name the parts of an electric circuit", "Build and draw a simple circuit", "Tell conductors from insulators", "Follow electrical safety rules"],
      content: `## Electric current

An **electric current** is the flow of charged particles (electrons) in one direction through a conductor. For a current to flow, a **closed circuit** is needed.

## Parts of a circuit

| Part | Role | Symbol |
|---|---|---|
| **Power source** (battery) | gives energy | a long and a short line |
| **Wires** | connect the parts | a line |
| **Lamp** | uses energy, gives light | a circle with a cross |
| **Switch** | closes and opens the circuit | a broken line |

When the switch is **closed**, current flows and the lamp lights. When it is **open**, the circuit is broken.

## Series and parallel circuits

- **Series** circuit: the lamps are one after another. If one blows, the others go out too (as in old Christmas tree lights),
- **Parallel** circuit: each lamp has its own branch. If one blows, the others stay on. The mains wiring at home is connected in **parallel**.

## Conductors and insulators

**Experiment**: put different objects into the circuit and see whether the lamp lights.

| Conductors (the lamp lights) | Insulators (the lamp does not light) |
|---|---|
| copper wire, iron nail, aluminium foil, graphite (pencil lead) | plastic, rubber, wood, glass, paper |

Pure water conducts electricity poorly, but tap water and the human body **do conduct** it. That is why electricity is **dangerous**.

## Safety

- Never put anything into a **socket**,
- Do not touch electrical appliances with **wet** hands,
- Do not use **damaged** wires,
- Do not climb electricity poles or go near fallen wires,
- Do not fly a kite near power lines.

For school experiments use only **small batteries** (1.5–9 volts), never the mains (220 volts).

## Exercises

1. What is an electric current?
2. Name the four parts of a simple circuit.
3. Why is the mains wiring at home connected in parallel?
4. Which objects are conductors: copper wire, rubber, pencil graphite, wood?
5. Why must you not touch appliances with wet hands?

## Answers

1. The flow of charged particles in one direction.
2. A power source, wires, a lamp, a switch.
3. So that each appliance works independently, and when one is switched off the others keep working.
4. The copper wire and the graphite.
5. Water conducts electricity, and you could get an electric shock.`,
      quiz: [
        ["What is needed for a current to flow in a circuit?", ["A closed circuit", "An open circuit", "Only a lamp", "Only a wire"]],
        ["Which is an insulator?", ["Rubber", "Copper", "Iron", "Aluminium"]],
        ["How is the mains wiring at home connected?", ["In parallel", "In series", "It is not connected", "With one lamp"]],
        ["What does a switch do?", ["Closes and opens the circuit", "Produces current", "Gives light", "Stores energy"]],
        ["Which is dangerous?", ["Touching an appliance with wet hands", "Using a 1.5 V battery for an experiment", "Switching off the light", "Charging a phone with an undamaged cable"]],
      ],
    },
    "ecosystems-and-human-impact": {
      objectives: ["Define an ecosystem and its parts", "Build a food web", "Explain why biodiversity matters", "Analyse the example of Lake Sevan"],
      content: `## Ecosystem

An **ecosystem** is a community of living things together with their non-living surroundings (water, air, soil, light, temperature), all interacting with one another.

Examples: a forest, a lake, a meadow, a desert, even a small puddle.

## Parts

| Group | Role | Examples |
|---|---|---|
| **Producers** | make organic substances using light | plants, algae |
| **Primary consumers** | eat plants | hare, grasshopper, deer |
| **Secondary and higher consumers** | eat other animals | fox, frog, eagle |
| **Decomposers** | break down remains | fungi, bacteria, earthworms |

## Food web

In nature food chains are **interwoven**. For example, a mouse is food for a fox, a snake and an owl, and a fox eats mice, hares and berries. Such interwoven chains form a **food web**.

A web is **more stable** than a single chain: if one species becomes scarce, a predator can feed on another.

## Biodiversity

**Biodiversity** is the variety of species of living things. The more species there are, the **more stable** the ecosystem.

Armenia is a small country but very rich in biodiversity: about **3,500** species of plants grow here, many of them **endemic** (growing only here). Armenia is one of the homelands of the wild ancestors of wheat.

## Human impact: the example of Sevan

In the 20th century Sevan's water was used heavily for **irrigation** and for making **electricity**. The level of the lake fell by about **19–20 metres**.

The consequences:

- the lake began to **bloom** (algae grew fast), and the water quality got worse,
- the numbers of **Sevan trout (ishkhan)** fell,
- new areas of shore were exposed.

To save the lake, the **Arpa–Sevan** tunnel (1981) and the **Vorotan–Arpa** tunnel were built to bring in water from other rivers, and the amount of water taken out was limited. In recent years the lake level has been slowly rising, but the problem has not yet been solved.

## What we can do

- Look after nature reserves and national parks,
- Not pollute water and soil,
- Plant trees,
- Not buy products of illegal hunting,
- Save water and energy.

## Exercises

1. What is an ecosystem?
2. What is the role of producers?
3. Why is a food web more stable than a single chain?
4. What is an endemic species?
5. What was done to save Lake Sevan?

## Answers

1. A community of living things and their non-living surroundings, interacting with one another.
2. Using light, they make the organic substances that everything else feeds on.
3. If one species becomes scarce, predators can feed on other species.
4. A species found only in a particular area.
5. Tunnels were built (Arpa–Sevan, Vorotan–Arpa) to bring in water, and the amount of water taken out was limited.`,
      quiz: [
        ["Who are the producers in an ecosystem?", ["Plants", "Predators", "Fungi", "Bacteria"]],
        ["What is a food web?", ["Interwoven food chains", "A fishing net", "The internet", "A single chain"]],
        ["What is biodiversity?", ["The variety of species", "Animals of one species", "Kinds of rock", "A change in the weather"]],
        ["By how much did the level of Sevan fall in the 20th century?", ["By about 19–20 metres", "By about 1 metre", "By about 100 metres", "It did not fall"]],
        ["Which tunnel brings water to Sevan?", ["Arpa–Sevan", "The Channel Tunnel", "Simplon", "Gotthard"]],
      ],
    },
  },
};
