import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The Earth in the Solar System, the globe, coordinates, plans, scale and maps.",
    "The Earth's interior, relief, earthquakes and volcanoes, the World Ocean, rivers, lakes, groundwater and glaciers.",
    "The structure of the atmosphere, temperature, pressure and wind, weather and climate, the biosphere and natural zones.",
  ],
  lessons: {
    "earth-in-space": {
      objectives: ["Show the Earth's place in the Solar System", "Explain the change of day and night", "Explain the change of seasons", "Describe the shape and size of the Earth"],
      content: `## The Solar System

The Earth is the **third** of the eight planets that orbit the Sun. The average distance from the Sun to the Earth is about **150 million km**. The Earth has one natural satellite, the **Moon**.

| Planet | Feature |
|---|---|
| Mercury, Venus, **Earth**, Mars | rocky planets, solid surface |
| Jupiter, Saturn, Uranus, Neptune | giant planets, made of gas |

## Shape and size

The Earth is almost a **sphere**, slightly flattened at the poles. Its average radius is about **6,371 km**, and the length of the equator is about **40,000 km**. The first person to calculate the size of the Earth was the ancient Greek scholar **Eratosthenes**, and the round shape of the Earth was proved by F. Magellan's expedition round the world (1519–1522).

## Rotation on its axis

The Earth rotates on its axis from west to east in about **24 hours**. This gives:

- **day and night**: it is day on the half facing the Sun and night on the other,
- the Sun "rising" in the east and "setting" in the west.

## Orbit around the Sun

The Earth makes one orbit around the Sun in **365 days 6 hours**. Over four years these 6 hours add up to a day, so every fourth year is a **leap year** with 366 days.

The Earth's axis is tilted to the plane of its orbit (66.5°). So during the year the Sun lights the hemispheres differently, and the **seasons** change.

| Date | Event in the Northern Hemisphere |
|---|---|
| 21 March | spring equinox, day equals night |
| 22 June | summer solstice, the longest day of the year |
| 23 September | autumn equinox |
| 22 December | winter solstice, the shortest day of the year |

## Exercises

1. Which planet from the Sun is the Earth?
2. Why does the Sun rise in the east?
3. Why is there a leap year?
4. Why do the seasons change?
5. What season is it in Australia in January?

## Answers

1. The third.
2. The Earth rotates from west to east.
3. A year lasts 365 days 6 hours, and over four years the extra hours make a day.
4. The Earth's axis is tilted, and the hemispheres are lit differently.
5. Summer, because it is in the Southern Hemisphere.`,
      quiz: [
        ["How many hours does the Earth take to turn once on its axis?", ["12", "24", "365", "48"]],
        ["What causes the change of day and night?", ["The Earth's orbit around the Sun", "The Earth's rotation on its axis", "The movement of the Moon", "Clouds"]],
        ["How many days are there in a leap year?", ["364", "365", "366", "367"]],
        ["When is the longest day of the year in the Northern Hemisphere?", ["21 March", "22 June", "23 September", "22 December"]],
        ["Roughly how long is the equator?", ["4,000 km", "40,000 km", "150,000 km", "6,371 km"]],
      ],
    },
    "globe-coordinates": {
      objectives: ["Name the lines of the grid", "Find geographical latitude", "Find geographical longitude", "Locate a point by its coordinates"],
      content: `## The globe

A **globe** is a small model of the Earth. It shows the shape of continents and oceans correctly but is too small for details.

## The grid

- **Parallels** are circles drawn from west to east. The largest is the **equator** (0°), which divides the Earth into the **Northern** and **Southern** Hemispheres.
- **Meridians** are half-circles drawn from pole to pole. The **prime** (Greenwich) meridian (0°) passes near London. It and the 180° meridian divide the Earth into the **Eastern** and **Western** Hemispheres.

## Latitude

**Geographical latitude** is the distance of a point from the equator in degrees. It ranges from 0° to 90° and is **north (N)** or **south (S)**. The latitude of the North Pole is 90° N.

## Longitude

**Geographical longitude** is the distance of a point from the prime meridian in degrees. It ranges from 0° to 180° and is **east (E)** or **west (W)**.

## Examples

| Place | Latitude | Longitude |
|---|---|---|
| Yerevan | about 40° N | about 44.5° E |
| Moscow | about 56° N | about 38° E |
| New York | about 41° N | about 74° W |
| Sydney | about 34° S | about 151° E |

Yerevan and New York are at almost the same latitude but in different hemispheres by longitude.

## Length of a degree

1° of a meridian is about **111 km**. So you can calculate the distance between two points on the same meridian.

**Example.** Point A is at 40° N and point B at 30° N, both on the same meridian. Distance: 10 · 111 = **1,110 km**.

## Exercises

1. Which line divides the Earth into the Northern and Southern Hemispheres?
2. What is geographical latitude?
3. Which hemispheres is Yerevan in?
4. What is the latitude of the South Pole?
5. Two points on the same meridian: 20° N and 10° S. What is the distance?

## Answers

1. The equator.
2. The distance of a point from the equator in degrees.
3. The Northern and Eastern.
4. 90° S.
5. 30° · 111 = 3,330 km.`,
      quiz: [
        ["What is the latitude of the equator?", ["0°", "45°", "90°", "180°"]],
        ["Where does the prime meridian pass?", ["Near Yerevan", "Near London (Greenwich)", "Near Moscow", "Near New York"]],
        ["Which hemisphere by latitude is Sydney in?", ["Northern", "Southern", "Western", "On the equator"]],
        ["Roughly how long is 1° of a meridian?", ["11 km", "111 km", "1,111 km", "40 km"]],
        ["Which lines are drawn from pole to pole?", ["Parallels", "Meridians", "The equator", "The tropics"]],
      ],
    },
    "plan-scale": {
      objectives: ["Tell a plan from a map", "Use a ratio scale, a written scale and a line scale", "Find directions with a compass and local signs", "Find a bearing (azimuth)"],
      content: `## The plan

A **plan** of an area is a detailed view of a small piece of land from above, drawn with symbols. It has a large scale and ignores the curvature of the Earth. A **map** shows large areas, has a small scale and has a grid of degrees.

## Scale

**Scale** shows how many times a distance has been reduced.

| Type | Example |
|---|---|
| **ratio** | 1 : 10,000 |
| **written** | 1 cm to 100 m |
| **line** | a line divided into sections |

1 : 10,000 means that 1 cm on the map equals 10,000 cm = **100 m** on the ground.

**Example 1.** Scale 1 : 50,000, distance on the map 4 cm. On the ground: 4 · 500 m = **2 km**.

**Example 2.** Distance on the ground 3 km, scale 1 : 100,000 (1 cm to 1 km). On the map: **3 cm**.

## Finding directions

To **orient yourself** means to find the cardinal directions: north, south, east, west.

- One end of a **compass** needle points north.
- At noon the Sun is in the south, and shadows fall to the north.
- At night the **Pole Star** points north.
- Moss on trees is usually thicker on the north side (this sign is not always reliable).

## Bearing

A **bearing** (azimuth) is the angle between the direction to the north and the direction to an object, measured clockwise.

| Direction | Bearing |
|---|---|
| north | 0° |
| east | 90° |
| south | 180° |
| west | 270° |

## Exercises

1. How does a plan differ from a map?
2. Write the scale 1 : 25,000 as a written scale.
3. Scale 1 : 200,000, 5 cm on the map. How much is that on the ground?
4. How can you find north at noon without a compass?
5. What is the bearing of south-west?

## Answers

1. A plan shows a small area at a large scale and without a grid of degrees.
2. 1 cm to 250 m.
3. 5 · 2 km = 10 km.
4. Shadows fall to the north.
5. 225°.`,
      quiz: [
        ["What does the scale 1 : 10,000 mean?", ["1 cm to 10 m", "1 cm to 100 m", "1 cm to 1 km", "1 cm to 10 km"]],
        ["Scale 1 : 100,000, 7 cm on the map. How much is that on the ground?", ["700 m", "7 km", "70 km", "0.7 km"]],
        ["What is the bearing of east?", ["0°", "90°", "180°", "270°"]],
        ["Which star points north?", ["Sirius", "The Pole Star", "Venus", "The Sun"]],
        ["Which image has a grid of degrees?", ["A plan", "A map", "A photograph", "A drawing"]],
      ],
    },
    maps: {
      objectives: ["Classify maps by scale, area covered and content", "Read map symbols", "Find heights and depths from the colour scale", "Use digital maps and GPS"],
      content: `## Types of maps

| By | Types |
|---|---|
| scale | large-scale (up to 1 : 200,000), medium-scale, small-scale (smaller than 1 : 1,000,000) |
| area covered | world, continents, countries, regions |
| content | **general** (physical) and **thematic** (climate, political, population, economic) |

A collection of maps is called an **atlas**.

## Map symbols

The symbols on a map are explained in the **key** (legend). There are **point** symbols (cities, mineral deposits), **line** symbols (rivers, roads, borders) and **area** symbols (forest, swamp, lake).

## Heights and depths

On a physical map relief is shown by colour using a **scale of heights and depths**.

| Colour | Meaning |
|---|---|
| green | lowlands (up to 200 m) |
| yellow | uplands (200–500 m) |
| brown | mountains: the darker, the higher |
| blue | water: the darker, the deeper |

**Contour lines** join points of the same height. Where they are close together, the slope is steep.

**Absolute height** is measured from sea level. For example, the absolute height of the northern summit of Aragats is 4,090 m. **Relative height** is the height of one point above another.

**Example.** The summit of Aragats is 4,090 m and Yerevan is about 1,000 m. The relative height of the summit above Yerevan is about **3,090 m**.

## Modern maps

Today maps are made from **satellite images** and with **geographic information systems** (GIS). **GPS** uses satellite signals to find the coordinates of a phone or navigator to within a few metres.

## Exercises

1. What is an atlas?
2. What type of map by content is a political map?
3. What colour shows lowlands?
4. What is a contour line?
5. Lake Sevan is at about 1,900 m and Yerevan at 1,000 m. What is the relative height of Sevan above Yerevan?

## Answers

1. A collection of maps.
2. Thematic.
3. Green.
4. A line joining points of the same height.
5. About 900 m.`,
      quiz: [
        ["How are mountains shown on a physical map?", ["In green", "In brown", "In blue", "In red"]],
        ["Where are map symbols explained?", ["In the key", "In the scale", "In the bearing", "On the globe"]],
        ["What is absolute height measured from?", ["The nearest river", "Sea level", "The centre of the Earth", "The nearest city"]],
        ["What do contour lines close together show?", ["Flat ground", "A steep slope", "A body of water", "A forest"]],
        ["Which map is thematic?", ["A physical map", "A climate map", "A general map", "A globe"]],
      ],
    },
    "earth-structure-relief": {
      objectives: ["Describe the Earth's inner layers", "Distinguish continental and oceanic crust", "Explain how earthquakes and volcanoes happen", "Classify mountains and plains"],
      content: `## The Earth's interior

| Layer | Thickness | Feature |
|---|---|---|
| **crust** | 5–70 km | solid, we live on it |
| **mantle** | about 2,900 km | hot, partly plastic |
| **core** | radius about 3,500 km | the outer core is liquid, the inner core solid, up to 5,000–6,000 °C |

The **lithosphere** is the crust together with the upper part of the mantle. It is divided into large **plates**, which move slowly, a few centimetres a year.

The crust can be **continental** (thick, 30–70 km, with a granite layer) or **oceanic** (thin, 5–10 km, basalt).

## Earthquakes and volcanoes

Stress builds up at plate boundaries and is suddenly released, causing an **earthquake**. The strength of an earthquake is measured in **intensity points** or by **magnitude** (the Richter scale). The **Spitak earthquake** of 7 December 1988 destroyed Spitak, Leninakan (Gyumri) and many villages, and more than 25 thousand people died.

A **volcano** is a mountain from whose vent molten rock, **magma** (called **lava** at the surface), gases and ash come out. Many of Armenia's mountains, for example Aragats and Ararat, are ancient volcanoes.

During an earthquake, keep away from windows, shelter under a sturdy table or in a doorway, and outdoors move away from buildings.

## Relief

**Relief** is the set of all the uneven features of the Earth's surface.

| Landform | Height | Examples |
|---|---|---|
| **lowland** | up to 200 m | the Amazon lowland, most of the East European Plain |
| **upland** | 200–500 m | the Central Russian Upland |
| **plateau** | above 500 m | the plateaus of the Armenian Highlands |
| **low mountains** | up to 1,000 m | parts of the Urals |
| **medium mountains** | 1,000–2,000 m | |
| **high mountains** | above 2,000 m | the Himalayas (Everest, 8,849 m), the Caucasus |

Relief is changed by **internal** forces (plate movement, volcanism) and **external** forces (wind, water, glaciers, weathering).

## Exercises

1. Name the three inner layers of the Earth.
2. How does oceanic crust differ from continental crust?
3. Why do earthquakes often happen at plate boundaries?
4. What is magma called when it reaches the surface?
5. What landform is a flat area 150 m high?

## Answers

1. The crust, the mantle, the core.
2. It is thinner and has no granite layer.
3. The plates move against each other there, and stress builds up.
4. Lava.
5. A lowland.`,
      quiz: [
        ["Which layer of the Earth is the thickest?", ["The crust", "The mantle", "The outer core", "The atmosphere"]],
        ["When did the Spitak earthquake happen?", ["1968", "1988", "1998", "2008"]],
        ["How high are lowlands?", ["Up to 200 m", "500–1,000 m", "1,000–2,000 m", "Above 2,000 m"]],
        ["Which peak is the highest in the world?", ["Ararat", "Elbrus", "Everest (Chomolungma)", "Aragats"]],
        ["Which is an external force shaping relief?", ["Plate movement", "Volcanism", "River water", "An earthquake"]],
      ],
    },
    "world-ocean": {
      objectives: ["List the oceans and their features", "Explain the salinity and temperature of water", "Describe waves, tides and currents", "Explain the global water cycle"],
      content: `## The hydrosphere

The **hydrosphere** is the Earth's water layer. About **96.5%** of the water is in the World Ocean, and the rest is in glaciers, groundwater, rivers, lakes and the atmosphere. Fresh water makes up only about **2.5%**, and most of it is in glaciers.

## The oceans

| Ocean | Feature |
|---|---|
| **Pacific** | the largest and deepest, the Mariana Trench is about 11,000 m |
| **Atlantic** | the second largest, has the most seas |
| **Indian** | the warmest, mainly in the Southern Hemisphere |
| **Arctic** | the smallest and coldest, mostly covered with ice |
| **Southern** | surrounds Antarctica |

Parts of an ocean that reach into the land are called **seas** and **bays** (gulfs). A narrow stretch of water between two pieces of land is called a **strait** (for example, the Bosphorus, Gibraltar).

## Salinity and temperature

**Salinity** is the number of grams of salts dissolved in 1 l of water, measured in **parts per thousand** (‰). The average salinity of the ocean is about **35‰**. The Red Sea is very salty (up to 41‰), and the Baltic is only slightly salty (about 7‰) because many rivers flow into it. The Dead Sea is actually a salt lake with a salinity of about 300‰.

Water temperature falls from the equator to the poles and from the surface downwards.

## Movement of water

- **Waves**: mostly caused by wind. Underwater earthquakes cause dangerous **tsunamis**.
- **Tides**: because of the Moon's pull, the ocean level rises and falls twice a day.
- **Currents**: huge "rivers" in the ocean. The **Gulf Stream** is a warm current that warms Europe's climate. There are also cold currents (the Labrador, the Peru).

## The water cycle

The Sun's heat makes water **evaporate** from the ocean; the vapour rises, cools and forms **clouds**; winds carry the clouds over land, where **precipitation** falls. The water returns to the ocean through rivers and underground. In this way the supply of fresh water is constantly renewed.

## Exercises

1. Which ocean is the largest?
2. Why is the water of the Baltic Sea only slightly salty?
3. How many grams of salt are in 2 l of water if the salinity is 35‰?
4. What is a strait? Give an example.
5. Why is winter in Western Europe warmer than in Canada at the same latitude?

## Answers

1. The Pacific Ocean.
2. Many rivers flow into it, and evaporation is low.
3. 70 g.
4. A narrow stretch of water between two pieces of land, for example the Bosphorus.
5. Because of the warm Gulf Stream current.`,
      quiz: [
        ["Which ocean is the deepest?", ["The Atlantic", "The Indian", "The Pacific", "The Arctic"]],
        ["What is the average salinity of the ocean?", ["7‰", "35‰", "100‰", "300‰"]],
        ["What causes tides?", ["Wind", "The Moon's pull", "An earthquake", "Rivers"]],
        ["Which current is warm?", ["The Labrador", "The Peru", "The Gulf Stream", "The California"]],
        ["Roughly what percentage of the Earth's water is fresh?", ["2.5%", "25%", "50%", "96.5%"]],
      ],
    },
    "land-waters": {
      objectives: ["Describe the parts of a river and its basin", "Distinguish mountain and lowland rivers", "Classify lakes by origin", "Explain the importance of groundwater and glaciers"],
      content: `## The river

A **river** is a natural stream of water flowing in its own channel.

- **Source**: the start of a river (a spring, a lake, a glacier).
- **Mouth**: where the river flows into a sea, a lake or another river.
- **Tributaries**: smaller rivers that flow into the river.
- **River system**: the main river with its tributaries.
- **Basin**: the area from which a river collects water.
- **Watershed**: the boundary between two basins.

| River | Feature |
|---|---|
| mountain (for example, the Vorotan, the Debed) | fast, narrow valley, waterfalls, a source of energy |
| lowland (for example, the Volga) | slow, wide valley, navigable |

The longest rivers in the world are the **Nile** and the **Amazon** (about 6,500–7,000 km), and the one with the most water is the **Amazon**. Armenia's largest river is the **Araks**.

## Lakes

| Origin | Example |
|---|---|
| **tectonic** (in cracks of the Earth's crust) | Baikal (the deepest, 1,642 m) |
| **volcanic** (in craters or in valleys dammed by lava) | **Sevan**, a basin dammed by lava |
| **glacial** | the lakes of Finland and Canada |
| **artificial** (reservoirs) | the Akhuryan reservoir |

Lakes can have an **outflow** (fresh) or **no outflow** (often salty, for example the Caspian Sea). The Caspian Sea is the largest lake in the world.

## Groundwater

Part of the precipitation soaks into the soil and collects in **permeable** layers (sand, gravel) above **impermeable** layers (clay). Groundwater comes out at the surface as **springs**. Armenia's mineral waters, **Jermuk**, **Arzni**, **Bjni** and **Dilijan**, are known all over the world.

## Glaciers

**Glaciers** form where more snow falls in a year than melts. They hold about 70% of fresh water. The largest glaciers are in **Antarctica** and **Greenland**. Mountain glaciers feed rivers in summer.

## Exercises

1. What is a river basin?
2. Why are mountain rivers used for power stations?
3. What is the origin of Lake Sevan?
4. Why are lakes with no outflow often salty?
5. Where is most fresh water held?

## Answers

1. The area from which a river collects water.
2. They are fast and drop a long way.
3. Volcanic-tectonic: the basin was dammed by lava.
4. The water only evaporates, and the salts stay behind.
5. In glaciers.`,
      quiz: [
        ["What is the start of a river called?", ["The mouth", "The source", "A tributary", "A watershed"]],
        ["Which lake is the deepest in the world?", ["Sevan", "The Caspian Sea", "Baikal", "Victoria"]],
        ["Which river is the largest in Armenia?", ["The Hrazdan", "The Araks", "The Debed", "The Vorotan"]],
        ["Which layer is impermeable?", ["Sand", "Gravel", "Clay", "Pebbles"]],
        ["Which Armenian mineral water is well known?", ["Jermuk", "Borjomi", "Narzan", "Essentuki"]],
      ],
    },
    atmosphere: {
      objectives: ["Name the composition and layers of the atmosphere", "Explain how temperature changes with height", "Calculate the average temperature and the range", "Explain how wind arises"],
      content: `## Composition and layers

The **atmosphere** is the Earth's layer of air. Dry air contains about **78% nitrogen**, **21% oxygen**, about 1% argon and 0.04% carbon dioxide, plus water vapour.

| Layer | Height | Feature |
|---|---|---|
| **troposphere** | up to 8–18 km | most of the air, clouds, weather |
| **stratosphere** | up to 50 km | the **ozone layer**, which absorbs ultraviolet rays |
| upper layers | up to thousands of km | very thin air, auroras |

## Temperature

The Sun's rays first heat the Earth's surface, and the surface heats the air. That is why in the troposphere the temperature **falls by about 6 °C for every 1 km** of height.

**Example.** It is +24 °C in Yerevan (1,000 m). Roughly what is the temperature on the summit of Aragats (4,000 m)?

Solution: the height difference is 3 km, 3 · 6 = 18 °C, 24 − 18 = **+6 °C**.

The **average daily temperature** is the sum of the readings divided by their number. The **range** is the difference between the highest and lowest temperatures.

**Example.** Readings: +2, +8, +14, +4 °C. Average: (2 + 8 + 14 + 4) / 4 = **+7 °C**. Range: 14 − 2 = **12 °C**.

## Air pressure

Air has weight and presses on the surface. At sea level **normal pressure is 760 mm of mercury**. Pressure is measured with a **barometer**. Pressure falls with height, by about **1 mm for every 10.5 m** (in the lower layers). In Yerevan normal pressure is about 680 mm.

## Wind

**Wind** is the movement of air from an area of **high** pressure to an area of **low** pressure. The bigger the pressure difference, the stronger the wind.

- **Breeze**: on the seashore. By day the land warms faster and the wind blows from the sea to the land; at night the reverse.
- **Monsoon**: a seasonal wind that blows from the ocean in summer and from the continent in winter.
- **Trade winds**: steady winds blowing from the tropics towards the equator.

## Exercises

1. Which gas is most common in air?
2. Why is it colder in the mountains?
3. It is +18 °C in Gyumri (1,500 m). Roughly what is the temperature on a summit 3,500 m high?
4. Find the average and the range: −4, +2, +6, 0 °C.
5. Why does the daytime breeze blow from the sea?

## Answers

1. Nitrogen.
2. In the troposphere temperature falls with height, because the air is heated from the surface.
3. 2 km · 6 = 12 °C, 18 − 12 = +6 °C.
4. Average: (−4 + 2 + 6 + 0) / 4 = +1 °C, range: 6 − (−4) = 10 °C.
5. The land warms faster, the pressure above it is lower, and air moves in from the sea.`,
      quiz: [
        ["In which layer of the atmosphere does weather form?", ["The stratosphere", "The troposphere", "The ionosphere", "The exosphere"]],
        ["What is normal pressure at sea level?", ["680 mm", "760 mm", "800 mm", "1,000 mm"]],
        ["By how many degrees does temperature fall for every 1 km of height?", ["1 °C", "6 °C", "10 °C", "20 °C"]],
        ["In which direction does wind blow?", ["From low pressure to high", "From high pressure to low", "Always from the north", "Always from the west"]],
        ["What protects against ultraviolet rays?", ["Nitrogen", "The ozone layer", "Clouds", "Argon"]],
      ],
    },
    "weather-climate": {
      objectives: ["Distinguish weather and climate", "Describe how clouds and precipitation form", "List the factors that shape climate", "Describe the climate zones"],
      content: `## Weather and climate

**Weather** is the state of the lower layer of the atmosphere in a given place at a given moment. It changes over hours. **Climate** is the long-term average pattern of weather that repeats from year to year. Weather is forecast by **meteorologists**.

## Humidity, clouds, precipitation

Warm air can hold more water vapour than cold air. When air rises and cools, the vapour **condenses**: droplets and clouds form. The droplets grow larger and fall as **precipitation**: rain, snow, hail. Precipitation is measured with a **rain gauge** in millimetres.

| Clouds | Weather |
|---|---|
| cirrus (high, thin) | the weather may change |
| cumulus (white "cotton wool") | fine weather; in summer they can grow into rain clouds |
| stratus (a grey sheet) | drizzle, fog |

## Factors that shape climate

1. **Latitude**: the closer to the equator, the warmer.
2. **Distance from the ocean**: by the sea the climate is mild, deep inside a continent it is **continental** (hot summers, cold winters).
3. **Relief and height**: it is colder in the mountains, and windward slopes get more precipitation.
4. **Prevailing winds and currents**.

## Climate zones

| Zone | Feature |
|---|---|
| **equatorial** | hot and wet all year |
| **subequatorial** | dry winter, rainy summer |
| **tropical** | hot and dry (deserts) |
| **subtropical** | warm summer, mild winter |
| **temperate** | four distinct seasons |
| **subpolar** and **polar** | long cold winter, short cool summer |

Armenia is in the **subtropical** zone, but because of its height its climate is mostly **dry continental**, and colder in the mountains.

## Exercises

1. How does weather differ from climate?
2. Why does a cloud form when air rises?
3. Why is winter milder in London than in Moscow?
4. Which climate zone is the Sahara in?
5. Why does Yerevan have hot summers and cold winters?

## Answers

1. Weather is a short-term state, climate is the long-term average pattern.
2. The air cools and the vapour condenses.
3. London is close to the ocean and the warm Gulf Stream.
4. The tropical zone.
5. Yerevan is deep inside the continent and surrounded by mountains; its climate is dry continental.`,
      quiz: [
        ["What is climate?", ["Today's weather", "The long-term average pattern of weather", "Wind direction", "The day's temperature"]],
        ["What is precipitation measured with?", ["A barometer", "A thermometer", "A rain gauge", "A compass"]],
        ["Where is the climate continental?", ["On the seashore", "Deep inside a continent", "On islands", "On the equator"]],
        ["Which climate zone is Armenia in?", ["Equatorial", "Tropical", "Subtropical", "Polar"]],
        ["Which clouds are usually a sign of fine weather?", ["Cumulus", "Cumulonimbus", "Stratus", "Dark thunderclouds"]],
      ],
    },
    "biosphere-natural-zones": {
      objectives: ["Define the biosphere and its boundaries", "Explain how soil forms", "Describe the natural zones of the world", "Explain altitudinal zones in mountains"],
      content: `## The biosphere

The **biosphere** is the layer of the Earth where there is life. It includes the lower part of the atmosphere, the whole hydrosphere and the upper part of the lithosphere. Living organisms change the other layers: plants produce oxygen, and **soil** forms from the remains of organisms.

## Soil

**Soil** is the fertile top layer of the Earth's crust. It forms over hundreds and thousands of years from broken-down rock and the remains of plants and animals, which microbes turn into **humus**. The most fertile type of soil is **chernozem** (black earth). In Armenia there are chernozems in Shirak and Lori.

## Natural zones

Climate changes from the equator to the poles, and plants, animals and soils change with it. This is how **natural zones** arise.

| Zone | Climate | Plants | Animals |
|---|---|---|---|
| **equatorial rainforests** | hot, wet | forest with many layers | monkeys, parrots |
| **savannas** | hot, dry and rainy seasons | grasses, scattered trees (baobab) | elephants, giraffes, lions |
| **deserts** | hot, very dry | cacti, camelthorn | camels, lizards |
| **steppes** | warm summer, cold winter | grasses | rodents, eagles |
| **mixed and broadleaf forests** | temperate | oak, beech | deer, bear |
| **taiga** | cold winter | spruce, pine, larch | brown bear, sable |
| **tundra** | very cold | mosses, lichens | reindeer |
| **ice deserts** | ice | almost none | polar bear, penguin |

## Altitudinal zones

As you climb a mountain, natural zones change just as they do when you travel from the equator to the pole. This is called **altitudinal zonation**. In Armenia: semi-desert (the Ararat Valley) → steppe → forest (Lori, Tavush, Syunik) → alpine meadows → rock and snow (the summit of Aragats).

## Exercises

1. What is humus?
2. Why do natural zones change from the equator to the poles?
3. In which zone do giraffes live?
4. Which trees dominate the taiga?
5. List Armenia's altitudinal zones from bottom to top.

## Answers

1. The organic matter of soil, formed from the remains of plants and animals.
2. The climate, warmth and moisture, changes.
3. In the savannas.
4. Conifers: spruce, pine, larch.
5. Semi-desert, steppe, forest, alpine meadows, rock and snow.`,
      quiz: [
        ["Which soil is the most fertile?", ["Sand", "Chernozem", "Clay", "Bog soil"]],
        ["Which zone is the baobab typical of?", ["The taiga", "The savanna", "The tundra", "The steppe"]],
        ["What is typical of the tundra?", ["Mosses and lichens", "Palm trees", "Cacti", "Oaks"]],
        ["What is the change of natural zones as you climb a mountain called?", ["Latitudinal zonation", "Altitudinal zonation", "Erosion", "Succession"]],
        ["Which zone is in the Ararat Valley?", ["Taiga", "Semi-desert", "Tundra", "Rainforest"]],
      ],
    },
  },
};
