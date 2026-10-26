import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The binary system, bits and bytes, encoding text, images and sound.",
    "Spreadsheets, presentations, branching, variables in Scratch.",
  ],
  lessons: {
    "binary-numbers": {
      objectives: ["Explain why a computer uses the binary system", "Convert a binary number to decimal", "Convert a decimal number to binary", "Compare numbers written in different systems"],
      content: `## Why 0 and 1?

Inside a computer there are billions of tiny **switches** (transistors). A switch has two states: **off** (0) and **on** (1). So a computer uses the **binary** system, with only the digits 0 and 1.

## Decimal and binary

The **decimal** system has 10 digits (0–9), and each place is worth 10 times the one before: units, tens, hundreds.

In the **binary** system each place is worth **2 times** the one before:

| Place | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

## From binary to decimal

Add up the values of the places that contain a 1.

**Example**: 1101₂ = 8 + 4 + 0 + 1 = **13**

**Example**: 101010₂ = 32 + 8 + 2 = **42**

## From decimal to binary

**Divide** the number **by 2** and write down the **remainder**, until the quotient becomes 0. Read the remainders **from bottom to top**.

**Example**: 13

| Division | Quotient | Remainder |
|---|---|---|
| 13 / 2 | 6 | 1 |
| 6 / 2 | 3 | 0 |
| 3 / 2 | 1 | 1 |
| 1 / 2 | 0 | 1 |

From bottom to top: **1101₂**.

## Counting to 8

| Decimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| Binary | 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 |

## Exercises

1. Why does a computer use the binary system?
2. Convert 1011₂ to decimal.
3. Convert 10 to binary.
4. Convert 25 to binary.
5. Which is greater: 1111₂ or 14?

## Answers

1. Switches have two states, 0 and 1.
2. 8 + 2 + 1 = 11.
3. 1010₂.
4. 11001₂ (16 + 8 + 1).
5. 1111₂ = 15, so 1111₂ is greater.`,
      quiz: [
        ["What is 110₂ equal to?", ["3", "6", "110", "12"]],
        ["How is 5 written in binary?", ["101", "110", "111", "100"]],
        ["How many digits does the binary system have?", ["1", "2", "8", "10"]],
        ["What is 10000₂ equal to?", ["8", "16", "32", "10000"]],
        ["How is 7 written in binary?", ["111", "1000", "110", "101"]],
      ],
    },
    "units-and-text-encoding": {
      objectives: ["Name the units for measuring information", "Convert between units", "Explain how text is encoded", "Calculate the size of a text"],
      content: `## Bits and bytes

- A **bit** is the smallest unit of information: a single 0 or 1.
- A **byte** is 8 bits. One byte can represent 2⁸ = **256** different values (from 0 to 255).

## Larger units

| Unit | Size |
|---|---|
| 1 kilobyte (KB) | 1,024 bytes |
| 1 megabyte (MB) | 1,024 KB |
| 1 gigabyte (GB) | 1,024 MB |
| 1 terabyte (TB) | 1,024 GB |

In everyday use these are often rounded to 1,000 (disk makers do this, for example).

**Examples**: one page of text is about 2–4 KB, one photo is 2–5 MB, one film is 1–5 GB.

## Encoding text

A computer gives every **character** (letter, digit, symbol) a **number code**.

- **ASCII** (1963): 128 characters, only Latin letters, digits and symbols. For example, "A" = 65, "a" = 97, "0" = 48.
- **Unicode**: almost all the world's writing systems, including **Armenian**, Russian and Chinese, as well as emoji. For example, the code of the Russian letter "А" is **1040** (U+0410), and of "а" is **1072** (U+0430).

The most widely used Unicode encoding is **UTF-8**. In it a Latin letter takes **1 byte**, while a Russian or Armenian letter takes **2 bytes**.

## The size of a text

**Size = number of characters × size of one character**

**Example**: the word "Hello" in ASCII: 5 characters × 1 byte = **5 bytes**.

**Example**: the Russian word "Мир" ("world") in UTF-8: 3 characters × 2 bytes = **6 bytes**.

## Exercises

1. How many bits are there in 1 byte?
2. How many kilobytes are there in 2 megabytes?
3. What is Unicode?
4. How many bytes does the Armenian word "Արարատ" (Ararat) take in UTF-8?
5. How many bits are there in 3 bytes?

## Answers

1. 8.
2. 2,048 KB.
3. An encoding standard that includes almost all the world's writing systems.
4. 6 characters × 2 bytes = 12 bytes.
5. 24 bits.`,
      quiz: [
        ["How many values can one byte represent?", ["8", "16", "256", "1024"]],
        ["How many MB are there in 1 GB?", ["100", "1000", "1024", "8"]],
        ["Which encoding includes Armenian and Russian letters?", ["Unicode", "Only ASCII", "Binary", "Morse"]],
        ["Which unit of information is the smallest?", ["The bit", "The byte", "The kilobyte", "The character"]],
        ["How many bytes does the word \"Hi\" take in ASCII?", ["1", "2", "8", "16"]],
      ],
    },
    "images-and-sound": {
      objectives: ["Explain what a pixel and resolution are", "Describe the RGB colour model", "Calculate the size of an image", "Explain how sound is digitised"],
      content: `## The pixel

A picture on a screen is made of tiny dots called **pixels**. **Resolution** gives the number of pixels **across × down**, for example 1920 × 1080 (Full HD). The more pixels, the **sharper** the picture.

## RGB

The colour of each pixel is made by mixing three beams of light:

- **R** (Red),
- **G** (Green),
- **B** (Blue).

Each has a value from 0 to 255 (1 byte).

| Colour | R | G | B |
|---|---|---|---|
| black | 0 | 0 | 0 |
| white | 255 | 255 | 255 |
| red | 255 | 0 | 0 |
| yellow | 255 | 255 | 0 |
| apricot (approximately) | 242 | 168 | 0 |

The total number of possible colours is 256 × 256 × 256 ≈ **16.7 million**.

## The size of an image

**Size = width × height × size of one pixel**

**Example**: 100 × 100 pixels, 3 bytes per pixel: 100 × 100 × 3 = 30,000 bytes ≈ **29 KB**.

In practice the **JPG** and **PNG** formats **compress** the image, so the file is smaller.

## Sound

Sound is a **wave**. A computer **digitises** it: many times a second it **measures** the height of the wave and stores the numbers.

- The **sampling rate** is how many measurements are made per second. CD quality is **44,100** measurements (44.1 kHz).
- The more measurements, the better the quality, but the bigger the file.
- **MP3** compresses sound by removing what the ear can hardly hear.

## Exercises

1. What is a pixel?
2. What determines the colour of a pixel in the RGB model?
3. What are the RGB values of green?
4. Calculate the size of a 200 × 100 pixel image if each pixel takes 3 bytes.
5. What is the sampling rate?

## Answers

1. The smallest dot of an image.
2. The values of its red, green and blue components (0–255).
3. R = 0, G = 255, B = 0.
4. 200 × 100 × 3 = 60,000 bytes.
5. The number of sound measurements in one second.`,
      quiz: [
        ["What does the letter \"B\" in RGB stand for?", ["Blue", "Black", "Brown", "Brightness"]],
        ["Which colour is R=255, G=255, B=255?", ["White", "Black", "Red", "Grey"]],
        ["About how many pixels does a 1920 × 1080 screen have?", ["2 thousand", "200 thousand", "2 million", "2 billion"]],
        ["Which format compresses sound?", ["MP3", "TXT", "DOCX", "EXE"]],
        ["How does quality change when there are many pixels?", ["The picture is sharper", "The picture is darker", "The picture is black and white", "Nothing changes"]],
      ],
    },
    "spreadsheets-intro": {
      objectives: ["Recognise the elements of a spreadsheet", "Enter data and simple formulas", "Use the SUM and AVERAGE functions", "Make a chart"],
      content: `## What is a spreadsheet?

A **spreadsheet** is a program for calculating with numbers: **Microsoft Excel**, **Google Sheets**, **LibreOffice Calc**.

| Element | Explanation |
|---|---|
| a **column** | vertical, labelled with a letter: A, B, C... |
| a **row** | horizontal, labelled with a number: 1, 2, 3... |
| a **cell** | where a column and a row cross; it has an **address**, for example **B3** |
| a **range** | a group of cells, for example **A1:A5** |

## Formulas

A formula always starts with the **=** sign.

| Formula | What it does |
|---|---|
| \`=A1+B1\` | adds cells A1 and B1 |
| \`=A1*3\` | multiplies A1 by 3 |
| \`=SUM(A1:A5)\` | the sum of cells A1 to A5 |
| \`=AVERAGE(B1:B5)\` | the mean |
| \`=MAX(C1:C10)\`, \`=MIN(C1:C10)\` | the largest and smallest values |

If you change the value in A1, the formula recalculates the result **automatically**.

## Example: marks

| | A | B | C | D |
|---|---|---|---|---|
| 1 | **Subject** | **1st half-year** | **2nd half-year** | **Average** |
| 2 | Maths | 8 | 9 | \`=AVERAGE(B2:C2)\` → 8.5 |
| 3 | Armenian | 9 | 9 | 9 |
| 4 | History | 7 | 9 | 8 |

## Charts

Select the data and click **Insert → Chart**. Kinds:

- a **bar chart**: for comparing,
- a **pie chart**: to show parts of a whole,
- a **line chart**: for changes over time.

## Exercises

1. What is a cell address?
2. What does a formula start with?
3. Write a formula that adds cells B1 to B10.
4. What result does \`=AVERAGE(4,6,8)\` give?
5. Which chart is suitable for showing how the air temperature changed over a week?

## Answers

1. The column letter and row number, for example B3.
2. The = sign.
3. \`=SUM(B1:B10)\`
4. 6.
5. A line chart.`,
      quiz: [
        ["What does a formula start with?", ["=", "+", "#", "$"]],
        ["Which function calculates the mean?", ["AVERAGE", "SUM", "MAX", "MIN"]],
        ["What is A1:A5?", ["A range", "A single cell", "A chart", "A file"]],
        ["Which chart shows parts of a whole?", ["A pie chart", "A line chart", "A bar chart", "A scatter chart"]],
        ["What happens if you change the value of a cell used in a formula?", ["The result is recalculated automatically", "The formula is deleted", "The file closes", "Nothing changes"]],
      ],
    },
    "presentations": {
      objectives: ["Create a presentation from slides", "Apply the rules of a good slide", "Insert images and sources", "Present your work to the class"],
      content: `## Programs

Presentations are made in **PowerPoint**, **Google Slides**, **Keynote** or **LibreOffice Impress**. A presentation is made of **slides**.

## Structure

1. **Title slide**: topic, author, date.
2. **Contents**: what the talk will be about.
3. **Main slides**: one idea per slide.
4. **Conclusion**.
5. **Sources**: where you got your information and images.

## Rules of a good slide

| Do | Don't |
|---|---|
| a large font (at least 24 points) | long text in a small font |
| 3–5 short points per slide | your whole essay on a slide |
| contrasting colours (dark text on a light background) | yellow text on a white background |
| good-quality images, charts | lots of animations and sounds |
| one style throughout the presentation | a different font on every slide |

The "**10–20–30 rule**": about 10 slides, 20 minutes, a 30-point font (for adult presentations). At school 5–8 slides are often enough.

## Copyright

Images on the internet belong to their **authors**. Use images with a **free licence** (for example, Wikimedia Commons) and give the source.

## When presenting

- Don't read from the slide: **tell** your audience.
- Look at your **listeners**.
- **Prepare** in advance and rehearse, keeping an eye on the time.

## Exercises

1. In which programs can you make a presentation?
2. What should be on the title slide?
3. How many points are recommended on one slide?
4. Why should you give your sources?
5. Plan a 5-slide presentation on "My town".

## Answers

1. PowerPoint, Google Slides, Keynote, LibreOffice Impress.
2. Topic, author, date.
3. 3–5.
4. To respect authors' rights and show that the information is reliable.
5. For example: title, history, sights, famous people, sources.`,
      quiz: [
        ["How many ideas should there be on one slide?", ["One", "Five", "Ten", "The more the better"]],
        ["Which colour combination is easy to read?", ["Dark text on a light background", "Yellow text on a white background", "Blue text on a black background", "Red text on a green background"]],
        ["Where can you find images with a free licence?", ["Wikimedia Commons", "On any website", "On a friend's phone", "In films"]],
        ["How should you present?", ["Talk and look at your listeners", "Read from the slide", "Stand with your back to the listeners", "Speak very fast"]],
        ["Which slide comes at the end?", ["Sources", "Title", "Contents", "Introduction"]],
      ],
    },
    "branching-algorithms": {
      objectives: ["Tell apart linear, branching and looping algorithms", "Write a condition in the form \"if – then – else\"", "Draw a flowchart with a branch", "Solve problems with comparison operators"],
      content: `## Kinds of algorithms

| Kind | How it works | Example |
|---|---|---|
| **linear** | the steps are carried out one after another | make tea |
| **branching** | a path is chosen depending on a **condition** | if it is raining, take an umbrella |
| **looping** | steps are **repeated** | jump 10 times |

## Conditions

A **condition** is a question whose answer is **yes** (true) or **no** (false).

\`\`\`
if temperature < 0 then
    say "It's cold, put on a coat"
else
    say "You don't need a coat"
\`\`\`

## Comparisons

| Sign | Meaning | Example (true) |
|---|---|---|
| = | equal to | 5 = 5 |
| ≠ | not equal to | 3 ≠ 7 |
| < | less than | 2 < 9 |
| > | greater than | 10 > 4 |
| ≤ | less than or equal to | 5 ≤ 5 |
| ≥ | greater than or equal to | 8 ≥ 3 |

## Flowcharts

A condition is drawn as a **diamond**, with two arrows coming out of it: **yes** and **no**.

## Example: even or odd?

\`\`\`
input the number n
if the remainder of n divided by 2 is 0 then
    output "even"
else
    output "odd"
\`\`\`

## Several conditions

You can check several conditions in a row:

\`\`\`
if mark ≥ 9 then "excellent"
else if mark ≥ 7 then "good"
else if mark ≥ 4 then "satisfactory"
else "unsatisfactory"
\`\`\`

## Exercises

1. How does a branching algorithm differ from a linear one?
2. Which shape shows a condition?
3. True or false: 7 ≥ 7?
4. What does the "even/odd" algorithm output for n = 15?
5. What does the marks algorithm say for 8?

## Answers

1. A different path is chosen depending on a condition.
2. A diamond.
3. True.
4. "odd".
5. "good".`,
      quiz: [
        ["Which algorithm is branching?", ["If it is raining, take an umbrella", "Jump 10 times", "Wash your hands and eat", "Read a book"]],
        ["What value can a condition have?", ["True or false", "Any number", "Only text", "A colour"]],
        ["Is the condition 3 > 5 true?", ["No", "Yes", "It depends", "Unknown"]],
        ["What does the marks algorithm say for 9?", ["excellent", "good", "satisfactory", "unsatisfactory"]],
        ["What does the sign ≠ mean?", ["Not equal to", "Equal to", "Greater than", "Less than"]],
      ],
    },
    "scratch-variables-conditions": {
      objectives: ["Create and use a variable in Scratch", "Use the \"if – then\" block", "Use Sensing blocks (touching, key pressed)", "Create a simple game with a score"],
      content: `## Variables

A **variable** is a "box" that holds a value, and the value can **change** while the program runs. For example, **points**, **lives**, **time**.

In Scratch: the **Variables** group → "Make a Variable" → give it a name, for example \`score\`.

| Block | What it does |
|---|---|
| "set score to 0" | makes the value equal to 0 |
| "change score by 1" | adds 1 |
| "show variable" | shows it on the stage |

## Conditions

The **Control** group has:

- "**if** <condition> **then**",
- "**if** <condition> **then** ... **else** ...".

The conditions are blocks from the **Sensing** group:

- "touching [mouse-pointer / edge / sprite]?",
- "key [space] pressed?",
- "touching colour [red]?".

## The game "Catch the apple"

The **Apple** sprite:

\`\`\`
when green flag clicked
set score to 0
go to x: (pick random -200 to 200) y: 180
forever
    change y by -5
    if touching [Basket]? then
        change score by 1
        go to x: (pick random -200 to 200) y: 180
    if y < -170 then
        go to x: (pick random -200 to 200) y: 180
\`\`\`

The **Basket** sprite:

\`\`\`
when green flag clicked
forever
    if key [right arrow] pressed? then change x by 10
    if key [left arrow] pressed? then change x by -10
\`\`\`

## Coordinates

The Scratch stage has an **x** coordinate (across, from -240 to 240) and a **y** coordinate (up and down, from -180 to 180). The centre is (0, 0).

## Exercises

1. What is a variable?
2. Which block increases the value of a variable?
3. Which group are the "touching?" blocks in?
4. What does the apple do when it falls to the bottom (y < -170)?
5. How could you add "lives" to the game?

## Answers

1. A "box" holding a value that can change.
2. "change [variable] by 1".
3. Sensing.
4. It goes back to the top with a random x coordinate.
5. Create a variable "lives" = 3, reduce it by 1 for every missed apple, and stop the game at 0.`,
      quiz: [
        ["What does a variable hold?", ["A value", "A sprite", "A sound", "A stage"]],
        ["Which coordinate is the centre of the Scratch stage?", ["(0, 0)", "(240, 180)", "(100, 100)", "(-240, -180)"]],
        ["Which block checks a condition?", ["\"if – then\"", "\"move 10 steps\"", "\"say Hello\"", "\"start sound\""]],
        ["How does y change when a sprite moves down?", ["It decreases", "It increases", "It does not change", "It becomes 0"]],
        ["Which group is the block \"key [space] pressed?\" from?", ["Sensing", "Motion", "Looks", "Sound"]],
      ],
    },
  },
};
