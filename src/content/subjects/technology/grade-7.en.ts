import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "3D modelling and printing, electronics, robotics, energy.",
    "Armenian crafts, careers, a mini-enterprise, the final project.",
  ],
  lessons: {
    "cad-and-3d-printing": {
      objectives: ["Explain what CAD is", "Create a simple 3D model from basic shapes", "Explain how a 3D printer works", "Prepare a model for printing"],
      content: `## CAD

With **CAD** programs (Computer-Aided Design), engineers and designers create **digital** models of things. A computer model can be **rotated**, **resized**, **tested** and sent into **production**.

For beginners there are simple **online** programs in which a model is built from ready-made **shapes**.

## Modelling with basic shapes

| Action | What it does |
|---|---|
| Add a shape | Cube, cylinder, sphere, cone, prism |
| Move, rotate | Put the shape where it is needed |
| Resize | Enter the length, width and height in millimetres |
| "Hole" | The shape becomes empty space that "cuts" another shape |
| Group | Joins shapes into a single whole |

**Example**: a **keyring**: a long flat block (40 × 15 × 3 mm) + a "hole" cylinder at one end + letters spelling a name.

## The 3D printer

Schools usually use **FDM** printers:

1. Plastic **filament** (PLA) goes into a **hot nozzle** and **melts**,
2. The nozzle moves and lays down the molten plastic **layer by layer**,
3. Each layer is about **0.1-0.3 mm** thick,
4. The layers **cool** and bond to each other.

**PLA** plastic is made from **maize** starch and is **biodegradable**.

## Preparation

1. Save the model in **STL** format,
2. In a **slicer** program choose the **layer height** and the **infill** (density inside, usually 15-20%),
3. Add **supports** for overhanging parts,
4. The program creates **G-code**: the commands for the printer.

**Safety**: the printer nozzle heats up to about **200** degrees, so do not touch it during printing.

## Exercises

1. What is CAD?
2. What does the "hole" operation do?
3. How does an FDM printer work?
4. What is PLA plastic made from?
5. What is infill?

## Answers

1. Computer-aided design.
2. The shape becomes empty space that cuts another shape.
3. It lays down molten plastic layer by layer.
4. From maize starch.
5. The density inside the model.`,
      quiz: [
        ["How does an FDM printer make an object?", ["Layer by layer", "All at once", "By cutting it out of wood", "By colouring paper"]],
        ["What format is a model saved in for printing?", ["STL", "MP3", "JPG", "TXT"]],
        ["What is PLA plastic made from?", ["Maize starch", "Only oil", "Glass", "Metal"]],
        ["What are supports for?", ["Overhanging parts", "Colour", "Speed", "They are not needed"]],
        ["To about how many degrees does the printer nozzle heat up?", ["200", "20", "1,000", "50"]],
      ],
    },
    "electronics-basics": {
      objectives: ["Recognise electronic components", "Apply Ohm's law in a simple calculation", "Build an LED circuit on a breadboard", "Get to know a microcontroller"],
      content: `## Components

| Component | What it does |
|---|---|
| Resistor | Limits the current |
| Light-emitting diode (LED) | Lights up; lets current through in one direction only |
| Push button | Closes the circuit when pressed |
| Capacitor | Stores charge |
| Light-dependent resistor | Its resistance changes with light |
| Buzzer | Makes a sound |
| Microcontroller | A tiny computer that controls other components |

## Voltage, current, resistance

- **Voltage** (V, volt, V): the "pressure" that pushes the current,
- **Current** (I, ampere, A): the flow of charge,
- **Resistance** (R, ohm, Ω): how much a material "resists" the current.

**Ohm's law**: **I = U / R** (here U stands for voltage).

**Example**: an LED needs a current of about **0.02 A** (20 mA). If the supply is 5 V and the LED "takes" 2 V, 3 V is left for the resistor. R = 3 / 0.02 = **150 Ω**. We choose the nearest standard value, **220 Ω**, so that the current is a little lower and safe.

## The breadboard

A **breadboard** lets you build a circuit **without soldering**. Inside, the holes are connected in **rows**.

**Circuit**: supply "+" → 220 Ω resistor → **long** leg of the LED (anode) → **short** leg of the LED (cathode) → supply "-". If you turn the LED round, it **will not light**.

## The microcontroller

A **microcontroller** (for example, the **Arduino** platform) can be **programmed**. A simple program:

\`\`\`
repeat forever:
    turn LED on
    wait 1 second
    turn LED off
    wait 1 second
\`\`\`

With this program the LED will **blink**. By adding a **light-dependent resistor**, you can make a lamp that **switches on** by itself when it gets dark.

## Exercises

1. What does a resistor do?
2. Write down Ohm's law.
3. What is a breadboard for?
4. Which leg of the LED is connected to "+"?
5. What is a microcontroller?

## Answers

1. It limits the current.
2. I = U / R.
3. For building circuits without soldering.
4. The long leg (anode).
5. A tiny programmable computer that controls components.`,
      quiz: [
        ["How is Ohm's law written?", ["I = U / R", "U = I / R", "R = U × I", "I = U × R"]],
        ["What does an LED do?", ["Lights up", "Makes a sound", "Stores charge", "Measures temperature"]],
        ["Which leg of an LED is the anode?", ["The long one", "The short one", "Both", "Neither"]],
        ["What is resistance measured in?", ["Ohms", "Volts", "Amperes", "Watts"]],
        ["What happens if you turn an LED round in a circuit?", ["It will not light", "It will shine brighter", "It will make a sound", "It will sing"]],
      ],
    },
    robotics: {
      objectives: ["List the main parts of a robot", "Tell sensors from actuators", "Write an algorithm for a line-following robot", "Get to know robotics in Armenia"],
      content: `## What is a robot

A **robot** is a machine that **senses** its surroundings, **makes** decisions and **acts**, either on its own or under human control.

## Parts of a robot

| Part | Human equivalent | Examples |
|---|---|---|
| Sensors | Sense organs | Light, distance (ultrasonic), touch and temperature sensors, camera |
| Controller | Brain | A microcontroller with a program |
| Actuators | Muscles | Motors, servos, wheels, a gripper |
| Power source | Food | A rechargeable battery |
| Frame | Skeleton | Chassis, construction kit |

## A line-following robot

The robot must follow a **black line** on a white floor. Underneath it has **two** light sensors, a right one and a left one. Black **absorbs** light; white **reflects** it.

**Algorithm**:

\`\`\`
repeat forever:
    if both sensors see white:
        drive straight on
    if the left sensor sees black:
        turn left
    if the right sensor sees black:
        turn right
\`\`\`

To turn, the robot stops or slows down **one** wheel while the other keeps turning.

## Where robots work

- In **factories**: assembling cars, welding,
- In **medicine**: surgical robots,
- In **space**: Mars rovers,
- **At home**: robot vacuum cleaners,
- In **farming**: drones for the fields.

## Robotics in Armenia

Schools in Armenia have **Armath** engineering labs, where pupils learn robotics, electronics and programming. Armenian schoolchildren take part in **international** robotics competitions.

## Exercises

1. What is a robot?
2. Which part is the robot's "brain"?
3. Name two sensors.
4. How does a line-following robot tell black from white?
5. How does the robot turn?

## Answers

1. A machine that senses its surroundings, makes decisions and acts.
2. The controller.
3. For example, light and distance sensors.
4. Black absorbs light and white reflects it.
5. It slows down one wheel while the other keeps turning.`,
      quiz: [
        ["Which of these is a robot actuator?", ["A motor", "A light sensor", "A camera", "A program"]],
        ["What does the colour black do to light?", ["Absorbs it", "Reflects all of it", "Amplifies it", "Nothing"]],
        ["What are the engineering labs in Armenian schools called?", ["Armath", "Tumo", "Matenadaran", "Ararat"]],
        ["Which device is a home robot?", ["A robot vacuum cleaner", "A fridge", "An iron", "A kettle"]],
        ["How does the robot turn left?", ["It slows down the left wheel", "It slows down the right wheel", "It stops", "It reverses"]],
      ],
    },
    "energy-and-sustainability": {
      objectives: ["Tell renewable energy sources from non-renewable ones", "Describe Armenia's energy system", "Calculate energy savings at home", "Explain the idea of sustainable development"],
      content: `## Energy sources

| Non-renewable | Renewable |
|---|---|
| Oil | Sun |
| Natural gas | Wind |
| Coal | Water (hydroelectric) |
| Uranium (nuclear energy) | Geothermal energy |
| | Biomass |

**Non-renewable** sources will one day **run out**, and burning them releases **carbon dioxide**, which contributes to **climate change**. **Renewable** sources do not run out and cause little pollution.

## Armenia's energy

- The **Armenian Nuclear Power Plant** (Metsamor) produces a large share of Armenia's electricity,
- **Thermal** power stations run on **natural gas**,
- **Hydroelectric** power: the **Sevan-Hrazdan** and **Vorotan** cascades, and many small hydro plants,
- **Solar** power is growing fast: Armenia has many **sunny** days a year, and many homes and businesses are installing **solar panels**,
- There is a **wind** farm on the **Pushkin Pass** (Lori).

## The solar panel

A **solar panel** is made of **photovoltaic cells**, which turn light **directly** into electricity. Panels are installed facing **south**, at a certain **tilt**, so that they get more light. **Solar water heaters** use light to heat **water**.

## Sustainable development

**Sustainable development** means meeting the needs of **today** without harming the ability of **future** generations to meet theirs. A designer can help by:

- Choosing **recyclable** materials,
- Designing things that are **long-lasting** and **repairable**,
- Using **less** energy and water,
- Thinking about the **whole life cycle** of a product, from production to recycling.

## Exercises

1. Name three renewable energy sources.
2. Why are non-renewable sources a problem?
3. Where is Armenia's nuclear power plant?
4. Why are solar panels installed facing south?
5. What is sustainable development?

## Answers

1. For example, the sun, wind, water.
2. They will run out and they pollute the atmosphere.
3. At Metsamor.
4. So that they get more light.
5. Meeting today's needs without harming future generations.`,
      quiz: [
        ["Which source is renewable?", ["The sun", "Coal", "Oil", "Natural gas"]],
        ["Where is Armenia's wind farm?", ["On the Pushkin Pass", "At Sevan", "In Yerevan", "In Meghri"]],
        ["What do photovoltaic cells do?", ["Turn light into electricity", "Heat water with gas", "Make wind", "Burn coal"]],
        ["Which hydroelectric cascade is in Armenia?", ["Sevan-Hrazdan", "Niagara", "Volga-Don", "Nile"]],
        ["Which principle belongs to sustainable design?", ["Designing repairable things", "Use once and throw away", "Wasting energy", "Not thinking about recycling"]],
      ],
    },
    "armenian-crafts": {
      objectives: ["List traditional Armenian crafts", "Describe metal chasing and carving", "Explain the role of crafts in culture and the economy", "Make an object with a traditional pattern"],
      content: `## Crafts

A **craft** is making things by **hand skill**. The knowledge of Armenian craftsmen was passed down **from generation to generation**: from father to son, from mother to daughter, from master to **apprentice**.

## Traditional crafts

| Craft | Craftsperson | What they make |
|---|---|---|
| Carpet weaving | Carpet weaver | Carpets, flat-weave rugs |
| Pottery | Potter | Karases, jugs, tableware |
| Stone carving | Stonemason | Khachkars, church decoration |
| Woodcarving | Woodcarver | Doors, furniture, caskets |
| Metal chasing | Chaser | Copper trays, jugs |
| Jewellery making | Jeweller | Jewellery |
| Embroidery, lacemaking | Embroiderer | Tablecloths, clothes |
| Blacksmithing | Blacksmith | Tools, gates |

## Chasing

**Chasing** is making **raised** patterns on a sheet of metal. The craftsman lays the sheet on a soft **bed** (for example, pitch) and strikes it with a **hammer** and **punches** from the **back**. This is how copper **trays** and **jugs** decorated with pomegranates, grapes and birds were made.

**At school** you can try chasing on **aluminium** foil, pressing into it with a pen or a wooden stick on **cardboard**.

## Stone carving

Armenian **stonemasons** are famous for their **khachkars** and the **reliefs** of churches. They most often use **tuff**, a soft stone that is easy to work and comes in different **colours** (pink, black, yellow). Yerevan is called the "**Pink City**" because of its tuff buildings.

## Crafts today

Today crafts are **preserved** and **developing**. At Yerevan's **Vernissage** market, craftspeople sell their work. Handmade objects are **unique** and help tourists get to know Armenian **culture**.

## Exercises

1. What is a craft?
2. How was knowledge of crafts passed on?
3. What is chasing?
4. Why is Yerevan called the "Pink City"?
5. Where in Yerevan do craftspeople sell their work?

## Answers

1. Making things by hand skill.
2. From generation to generation, from master to apprentice.
3. Making raised patterns on a sheet of metal.
4. Because of its tuff buildings.
5. At the Vernissage market.`,
      quiz: [
        ["What is chasing?", ["Making raised patterns on metal", "Weaving a carpet", "Making clay pots", "Painting wood"]],
        ["What stone are many of Yerevan's buildings made of?", ["Tuff", "Marble", "Granite", "Chalk"]],
        ["What is Yerevan's craft market called?", ["Vernissage", "Tumo", "Matenadaran", "Cascade"]],
        ["Who makes tools and gates?", ["A blacksmith", "A potter", "A jeweller", "A carpet weaver"]],
        ["What is Yerevan called because of its tuff buildings?", ["The \"Pink City\"", "The \"White City\"", "The \"Green City\"", "The \"Blue City\""]],
      ],
    },
    "careers-in-technology": {
      objectives: ["Recognise careers in technology", "Match careers to personal interests", "Get to know Armenia's technology sector", "Draw up a personal development plan"],
      content: `## The world of careers

Technology is linked to **thousands** of careers. Here are some of them:

| Career | What they do | What is needed |
|---|---|---|
| Design engineer | Designs machines, bridges, devices | Maths, physics, technical drawing |
| Programmer | Writes programs and apps | Logic, maths, English |
| Designer | Creates the look of things, clothes, websites | Creativity, drawing |
| Electrician | Installs and repairs electrical systems | Physics, precision, safety |
| Architect | Designs buildings | Drawing, maths, history |
| Chef | Cooks dishes | Creativity, hygiene |
| Tailor, fashion designer | Cuts and sews clothes | Precision, taste |
| Robotics specialist | Builds robots | Electronics, programming, mechanics |

## How to choose

Think about:

- What do I **like** doing?
- What am I **good** at?
- What **setting** do I want to work in: an office, a workshop, outdoors, with people?
- Which careers will be in **demand** in the future?

## Technology in Armenia

In Armenia the **information technology** (IT) sector is one of the fastest-growing. Many **software** companies and **start-ups** work here.

- The **Tumo Center for Creative Technologies** (founded in 2011 in Yerevan) teaches teenagers **programming**, **animation**, **design**, **robotics**, **film** and **music** free of charge. It has branches in Armenia and in other countries,
- Schools have **Armath** engineering labs,
- Universities have **engineering** and **IT** faculties.

## Skills for the future

In any career these matter:

- **Critical** thinking,
- **Creativity**,
- **Teamwork**,
- **Communication**,
- Willingness to **keep learning**.

## Exercises

1. What does a design engineer do?
2. Which subjects matter for a programmer?
3. What questions should you ask yourself when choosing a career?
4. When was Tumo founded?
5. Name three skills for the future.

## Answers

1. Designs machines, bridges, devices.
2. Logic, maths, English.
3. What do I like doing, what am I good at, where do I want to work.
4. In 2011.
5. For example, critical thinking, creativity, teamwork.`,
      quiz: [
        ["Who designs buildings?", ["An architect", "A chef", "A tailor", "An electrician"]],
        ["When was the Tumo centre founded?", ["In 2011", "In 1991", "In 2001", "In 2020"]],
        ["What does a programmer do?", ["Writes programs", "Sews clothes", "Cooks dishes", "Builds houses by hand"]],
        ["Which of these is a skill for the future?", ["Teamwork", "Never learning", "Only ever working alone", "Avoiding anything new"]],
        ["What is a start-up?", ["A new, fast-growing company", "A sports competition", "A school subject", "A music genre"]],
      ],
    },
    "mini-enterprise": {
      objectives: ["Calculate the cost of making a product", "Set a price and work out the profit", "Write a simple advert", "Work in a team, sharing out roles"],
      content: `## The idea

Imagine that the class sets up a **mini-enterprise**: it makes **handmade** products and sells them at the school **fair**, and the money raised goes to **charity** or to a class trip.

## Roles in the team

| Role | Responsibilities |
|---|---|
| Director | Coordinates the work, keeps track of deadlines |
| Finance officer | Works out costs, price, profit |
| Designer | Designs the product and the packaging |
| Production manager | Organises making and quality |
| Marketing officer | Advertising, posters, sales |

## Cost, price, profit

The **unit cost** is what it **costs** to make one product.

**Example**: we make **20 keyrings**.

- Materials (wood, paint, rings) cost **6,000 drams** in total,
- The cost of one keyring: 6,000 / 20 = **300 drams**,
- We decide to sell them at **500 drams**,
- Profit on one keyring: 500 - 300 = **200 drams**,
- If we sell them all, the total profit is 20 × 200 = **4,000 drams**.

When setting the **price** we take into account:

- The unit cost,
- How much customers are willing to **pay**,
- The prices of similar **products**.

## Advertising

A good advert:

- Has a **short**, memorable **slogan**,
- Shows the **advantage** of the product,
- Has an **attractive** picture,
- Tells the **truth**: it does not promise what the product cannot deliver.

## Reviewing the results

After the fair the team **analyses**: how many products were sold, what went well, what could have been done **better**.

## Exercises

1. What is unit cost?
2. How do you work out the profit on one product?
3. If materials for 10 products cost 4,000 drams and the price is 600 drams, what is the profit on one product?
4. What is taken into account when setting the price?
5. What should a good advert be like?

## Answers

1. What it costs to make one product.
2. Subtract the unit cost from the price.
3. 600 - 400 = 200 drams.
4. The unit cost, what customers are willing to pay, the prices of similar products.
5. It has a short slogan, shows the advantage, and tells the truth.`,
      quiz: [
        ["What is unit cost?", ["What it costs to make one product", "The selling price", "The profit", "The cost of advertising"]],
        ["How do you work out the profit on one product?", ["Price - unit cost", "Price + unit cost", "Price × unit cost", "Unit cost - price"]],
        ["If the unit cost is 300 drams and the price is 500, what is the profit?", ["200 drams", "800 drams", "300 drams", "500 drams"]],
        ["Who in the team works out the costs?", ["The finance officer", "The designer", "The marketing officer", "Nobody"]],
        ["What should an advert be like?", ["Truthful", "Misleading", "Very long", "Without a picture"]],
      ],
    },
    "final-project": {
      objectives: ["Choose a project topic and state the problem", "Draw up a project plan and timetable", "Create a portfolio", "Present and evaluate the project"],
      content: `## The project

At the end of the year each pupil or team carries out a **final project**, using everything learnt in grades **1-7**. The project can be:

- An object made of **wood** or **metal** (a shelf, a birdhouse, a lamp),
- An object made of **fabric** (a bag, a cushion, clothing),
- An **electronic** device or a **robot**,
- A **model** printed on a 3D printer,
- A **cookery** project (a book of traditional dishes),
- A **craft** object with traditional patterns.

## Stages of the project

| Stage | What we do |
|---|---|
| 1. Research | State the problem, study similar products |
| 2. Requirements | Write down what the product must be like |
| 3. Ideas | At least three sketches |
| 4. Choice and drawing | A drawing of the best idea, with dimensions |
| 5. Plan | Materials, tools, process plan, timetable, costs |
| 6. Making | Work following the safety rules |
| 7. Testing | Check that it meets the requirements |
| 8. Evaluation | What went well, what we would improve |

## The portfolio

A **portfolio** is a collection of the project's **documents**: a paper folder or a digital presentation. It contains:

- The **problem** and the **requirements**,
- **Sketches** and **drawings**,
- **Photographs** of different stages of the work,
- The **process plan** and the **cost** calculation,
- The results of **testing**,
- A **self-assessment**.

## The presentation

In a **3-5-minute** presentation, explain:

1. What **problem** did you solve?
2. How did you **choose** the solution?
3. What **difficulties** were there and how did you overcome them?
4. Show the **result**,
5. What did you **learn**?

## Assessment criteria

- **Originality** and usefulness of the idea,
- Quality and accuracy of the **work**,
- Completeness of the **portfolio**,
- Clarity of the **presentation**,
- Following the **safety** rules.

## Exercises

1. Where does a project begin?
2. How many sketches must be made at least?
3. What is a portfolio?
4. What should you talk about in the presentation?
5. Name three assessment criteria.

## Answers

1. With research and stating the problem.
2. Three.
3. A collection of the project's documents.
4. The problem, the choice, the difficulties, the result, and what you learnt.
5. For example, originality of the idea, quality of the work, clarity of the presentation.`,
      quiz: [
        ["What is a portfolio?", ["A collection of the project's documents", "A toolbox", "The selling price", "A kind of material"]],
        ["What is the first stage of a project?", ["Research", "Making", "Presentation", "Selling"]],
        ["How many sketches must be made at least?", ["Three", "One", "Ten", "None"]],
        ["How long should the presentation last?", ["3-5 minutes", "1 hour", "10 seconds", "One day"]],
        ["What does a portfolio contain?", ["Sketches, drawings, photographs, a self-assessment", "Only the finished product", "Only the price", "Only the materials"]],
      ],
    },
  },
};
