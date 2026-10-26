import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Major and minor, melody and accompaniment, form, variations.",
    "The symphony orchestra, voices, Armenian dances, music that tells a story.",
  ],
  lessons: {
    "major-and-minor": {
      objectives: ["Tell major from minor by ear", "Link a key with a mood", "Know what a mode is", "Sing major and minor triads"],
      content: `## The "colours" of music

Just as an artist can paint with **bright** or **dark** colours, a composer can write in a **major** or a **minor** mode.

| Mode | How it sounds | What it is like |
|---|---|---|
| Major | bright, cheerful, confident | a sunny day |
| Minor | sad, thoughtful, tender, sometimes mysterious | a cloudy evening |

## What a mode is

A **mode** is a system of sounds with one **main** sound that all the others "live" around. The main sound is called the **tonic**. A song usually **ends** on the tonic, and then we feel that the song has **finished**.

## Let's listen

Sing "**do-mi-sol**" (C-E-G). This is a **major** triad: bright.

Now sing "**la-do-mi**" (A-C-E). This is a **minor** triad: sadder.

A triad is three notes that sound beautiful together.

## In folk songs

Many Armenian folk songs are written in modes that are not quite major and not quite minor. Komitas studied these **Armenian modes**, which give a song its **special** sound. For example, the song "**Krunk**" ("The Crane") is very **sad** and moving.

## The "Sun and Cloud" game

The teacher plays short melodies. If it is major, we hold up the "**sun**" card; if it is minor, we hold up the "**cloud**" card.

## Exercises

1. How does major sound?
2. How does minor sound?
3. What is the tonic?
4. Which triad is major: do-mi-sol or la-do-mi?
5. Who studied the Armenian modes?

## Answers

1. Bright and cheerful.
2. Sad and thoughtful.
3. The main sound of a mode.
4. Do-mi-sol.
5. Komitas.`,
      quiz: [
        ["How does major sound?", ["Bright, cheerful", "Sad, gloomy", "Scary", "Silent"]],
        ["What is the tonic?", ["The main sound of a mode", "The highest sound", "An instrument", "A tempo"]],
        ["Which triad is minor?", ["La-do-mi", "Do-mi-sol", "Fa-la-do", "Sol-ti-re"]],
        ["What is the character of the song \"Krunk\"?", ["Sad and moving", "Cheerful and dancing", "Military", "Joking"]],
        ["How many notes are there in a triad?", ["Three", "Two", "Four", "Seven"]],
      ],
    },
    "melody-and-accompaniment": {
      objectives: ["Know what a melody is", "Describe how a melody moves", "Tell a melody from its accompaniment", "Make a simple accompaniment"],
      content: `## Melody

A **melody** is the **soul** of music. It is a row of sounds that you can **sing** or **whistle**. When we say "this song is beautiful", we often mean its melody.

## How a melody moves

| Movement | Description |
|---|---|
| Up | the notes rise |
| Down | the notes fall |
| On the spot | the same note is repeated |
| By step | the notes move to neighbouring notes |
| By leap | the melody "jumps" to a note far away |

You can **draw** a melody as a line going up and down, like the outline of mountains.

## Accompaniment

**Accompaniment** is music that is played **together** with the melody and **supports** it. For example, a singer sings the melody, and a pianist or guitarist **accompanies** them.

Accompaniment can be:

- **chords**: several notes together,
- **rhythm**: a drum or clapping,
- a **dam**: one long, unbroken note, as in duduk accompaniment.

## How to tell them apart

- The **melody** is usually easier to hear, and it is what we remember,
- The **accompaniment** is the "background", like the **background** of a painting.

## Let's make one

Half the class sings the melody of a song they know, and the other half claps or stamps the **beats**. Now you have a melody with accompaniment.

## Exercises

1. What is a melody?
2. How can a melody move?
3. What is accompaniment?
4. Name two kinds of accompaniment.
5. How is a melody different from its accompaniment?

## Answers

1. A row of sounds that you can sing.
2. Up, down, on the spot, by step or by leap.
3. Music played together with the melody that supports it.
4. For example, chords and rhythm.
5. The melody is easier to hear and to remember; the accompaniment is the background.`,
      quiz: [
        ["What is called the soul of music?", ["The melody", "A rest", "A bar line", "A clef"]],
        ["What is accompaniment?", ["Music that supports the melody", "The words of a song", "The title of a piece", "Silence"]],
        ["What is a chord?", ["Several notes together", "One long note", "Silence", "A fast tempo"]],
        ["What do we call a melody's \"jump\" to a faraway note?", ["A leap", "A rest", "A tempo", "A repeat"]],
        ["Who usually accompanies a singer?", ["A pianist or guitarist", "The audience", "Only the conductor", "Nobody"]],
      ],
    },
    "musical-form": {
      objectives: ["Know what musical form is", "Recognise repetition and contrast", "Tell one-part, two-part and three-part forms apart", "Recognise verse and chorus"],
      content: `## What form is

Just as a house has **foundations**, **walls** and a **roof**, music has a **structure**. It is called its **form**. Form shows which **parts** a piece is made of and in what order they come.

## Repetition and contrast

Musical form is built on two ideas:

- **Repetition**: the same part is heard again, and we **recognise** it,
- **Contrast**: a **new**, different part is heard.

We label the parts with **letters**: A, B, C.

## Kinds of form

| Form | Plan | Description |
|---|---|---|
| One-part | A | one part, one idea |
| Two-part (binary) | A B | two different parts |
| Three-part (ternary) | A B A | the first part comes back at the end |
| Rondo | A B A C A | the main part comes back many times |

**Ternary** form is like a **sandwich**: bread, cheese, bread.

## Verse and chorus

Many songs have **verses** and a **chorus**:

- **Verse**: the melody stays the same, but the **words** are new each time,
- **Chorus**: both the melody and the words **repeat**. The chorus is usually the easiest part to remember.

## Let's listen

Listen to a piece and put your hand up when a **new** part begins. Write down the plan with letters.

## Exercises

1. What is musical form?
2. What is contrast in music?
3. What is the plan of ternary form?
4. What is repeated in a chorus?
5. In which form does the main part come back many times?

## Answers

1. The structure of a piece: its parts and their order.
2. A new, different part.
3. A B A.
4. The melody and the words.
5. In a rondo.`,
      quiz: [
        ["What is the plan of ternary form?", ["A B A", "A B", "A", "A B C D"]],
        ["What is repeated in a chorus?", ["The melody and the words", "Only the words", "Only the rhythm", "Nothing"]],
        ["What is the plan of a rondo?", ["A B A C A", "A B", "A A A", "B C D"]],
        ["What changes from verse to verse in a song?", ["The words", "The melody", "The instrument", "Always the tempo"]],
        ["What is musical form built on?", ["Repetition and contrast", "Only silence", "Only speed", "Only loudness"]],
      ],
    },
    variations: {
      objectives: ["Know what a theme and a variation are", "List what can be changed in a variation", "Recognise the theme in variations", "Make a rhythmic variation"],
      content: `## The theme

A **theme** is the main musical **idea**: a short, memorable melody that a piece begins with.

## Variation

A **variation** is a **changed** version of the theme. The composer takes the same theme and "**dresses**" it in a new outfit each time. The theme can always be **recognised**, but it sounds new.

Imagine the same girl going to school in her **school uniform**, to a party in a **party** dress and to the mountains in **sports** clothes. She is always the same girl, but she looks different.

## What can be changed

| What we change | Example |
|---|---|
| Tempo | a slow theme becomes fast |
| Mode | major becomes minor |
| Rhythm | even notes become bouncy |
| Instrument | the violin's theme is played by a trumpet |
| Loudness | a quiet theme becomes powerful |
| Decorations | new notes are added to the melody |

## A famous example

On the French song "**Ah, vous dirai-je, maman**", which many people know as the tune of "Twinkle, Twinkle, Little Star", **Mozart** wrote **12 variations** for piano. Listen and try to find the theme in each variation.

## In folk music

Folk musicians, such as duduk and kamancha players, always make **variations**: they never play a melody the same way twice, but **improvise**.

## Let's make one

Take the rhythm "**ta, ta, ti-ti, ta**". Make up three variations: a fast one, a slow one and one with your feet.

## Exercises

1. What is a theme?
2. What is a variation?
3. Name three things that can be changed in a variation.
4. How many variations did Mozart write on "Ah, vous dirai-je, maman"?
5. What is improvisation?

## Answers

1. The main musical idea.
2. A changed version of the theme.
3. For example, the tempo, the mode and the instrument.
4. 12.
5. Making up music while you are playing.`,
      quiz: [
        ["What is a variation?", ["A changed version of the theme", "A new instrument", "Silence", "The title of a song"]],
        ["Who wrote 12 variations for piano on \"Ah, vous dirai-je, maman\"?", ["Mozart", "Komitas", "Khachaturian", "Tchaikovsky"]],
        ["What is a theme?", ["The main musical idea", "The last chord", "The conductor's baton", "Only the chorus of a song"]],
        ["What stays the same in all the variations?", ["The theme can be recognised", "The tempo", "The instrument", "The loudness"]],
        ["What does a folk musician do when playing the same melody in a new way?", ["Improvises", "Keeps silent", "Reads from music", "Stops"]],
      ],
    },
    "symphony-orchestra": {
      objectives: ["List the four sections of the orchestra", "Name the instruments of each section", "Explain the role of the conductor", "Describe how the orchestra is seated"],
      content: `## What a symphony orchestra is

A **symphony orchestra** is a large group in which **fifty to a hundred** or more musicians play together. The instruments are divided into **four** sections.

## The four sections

| Section | Instruments | How they sound |
|---|---|---|
| Strings | violin, viola, cello, double bass | played with a bow; the largest section |
| Woodwind | flute, oboe, clarinet, bassoon | you blow into them; they sound soft and songlike |
| Brass | trumpet, French horn, trombone, tuba | you blow into them; they sound powerful and bright |
| Percussion | timpani, drum, cymbals, triangle, xylophone | you hit them; they give rhythm and colour |

Sometimes the orchestra also has a **harp** and a **piano**.

## The string family

The string instruments are like a **family**:

- the **violin** is the smallest, with the highest voice, like a **child**,
- the **viola** is a little bigger, like **Mum**,
- the **cello** is big and is played sitting down, held between the knees, like **Dad**,
- the **double bass** is the biggest, as tall as a person, like **Grandad**.

## The conductor

The **conductor** stands **in front of** the orchestra, holds a **baton** and shows:

- when to **start** and **stop**,
- the **tempo**,
- which section should play **loudly** or **quietly**.

Armenia has the **Armenian National Philharmonic Orchestra**, which performs in Yerevan's **Aram Khachaturian Concert Hall**.

## Exercises

1. How many sections are the instruments of the orchestra divided into?
2. Which section is the largest?
3. Name two brass instruments.
4. Which string instrument is the biggest?
5. What does the conductor do?

## Answers

1. Four.
2. The strings.
3. For example, the trumpet and the trombone.
4. The double bass.
5. Shows the start, the end, the tempo and the loudness.`,
      quiz: [
        ["Which instrument is a woodwind instrument?", ["Clarinet", "Trumpet", "Violin", "Timpani"]],
        ["Which instrument is the smallest in the string section?", ["Violin", "Cello", "Double bass", "Viola"]],
        ["Which instrument is a brass instrument?", ["Tuba", "Bassoon", "Flute", "Oboe"]],
        ["What does the conductor hold?", ["A baton", "A bow", "A plectrum", "A hammer"]],
        ["How is the cello played?", ["Sitting down, held between the knees", "Standing up, resting on the shoulder", "By blowing into it", "By hitting it"]],
      ],
    },
    "voices-and-choir": {
      objectives: ["List the kinds of singing voice", "Tell women's, men's and children's voices apart", "Describe how a choir is made up", "Know the difference between singing in unison and in parts"],
      content: `## The human voice

The human **voice** is the oldest and most beautiful instrument. The voice is made in the **larynx**, where the **vocal cords** are. When air passes through them, they **vibrate**.

## Kinds of voice

| Voice | Who | Pitch |
|---|---|---|
| Soprano | women, girls | the highest female voice |
| Alto (mezzo-soprano) | women | the low female voice |
| Tenor | men | the high male voice |
| Bass (baritone) | men | the low male voice |

Children's voices are like **soprano** and **alto** voices. In their teens boys' voices **break** and become lower.

## The choir

A **choir** is a group of singers who sing together. Its leader is called the **choirmaster** or **conductor**.

Kinds of choir:

- a **children's** choir,
- a **women's** choir,
- a **men's** choir,
- a **mixed** choir: women and men together (soprano, alto, tenor, bass).

## Unison and part-singing

- **Unison**: everyone sings **the same** melody,
- **Part-singing**: different groups sing **different** melodies at the same time, and together they sound harmonious.

A **round** (canon) is a simple kind of part-singing: the second group starts the same melody a little **later**, like an echo. Try singing a song you know as a round.

## Exercises

1. Where is the voice made?
2. Which female voice is the highest?
3. Which male voice is the lowest?
4. What is a mixed choir?
5. What is a round?

## Answers

1. In the larynx, by the vocal cords.
2. Soprano.
3. Bass.
4. A choir in which women and men sing.
5. When the second group starts the same melody a little later.`,
      quiz: [
        ["Which female voice is the highest?", ["Soprano", "Alto", "Tenor", "Bass"]],
        ["Which male voice is high?", ["Tenor", "Bass", "Soprano", "Alto"]],
        ["What is the leader of a choir called?", ["The choirmaster", "The drummer", "The soloist", "The listener"]],
        ["What is a round?", ["The same melody starts later", "Everyone is silent", "One person sings", "Only instruments play"]],
        ["What vibrates when we sing?", ["The vocal cords", "The teeth", "The hair", "The ears"]],
      ],
    },
    "armenian-dances": {
      objectives: ["Recognise Armenian folk dances", "Describe their character and movements", "Know about the international recognition of the kochari", "Do a simple dance step"],
      content: `## Dance in Armenian life

Armenians danced at **festivals**, **weddings**, after the **harvest** and even before a **battle**. Many dances are **group** dances: the dancers hold hands or link **little fingers** and form a **circle** or a **line**. The first dancer in the line is called the **paraglukh** (the leader), and they often wave a **handkerchief**.

## Famous dances

| Dance | Character | Feature |
|---|---|---|
| Kochari | powerful, cheerful | shoulder to shoulder, with stamping feet |
| Berd | solemn | dancers climb onto others' shoulders to form a "fortress" |
| Yarkhushta | warlike | partners clap each other's palms |
| Shalakho | fast, competitive | young men compete in skill |
| Tamzara | cheerful, light | a special rhythm: 9/8 |
| Uzundara | gentle, flowing | a solo dance for girls |

## The kochari

The **kochari** is the most famous Armenian dance. The dancers stand **shoulder to shoulder** with their hands on their neighbours' shoulders, and the whole line moves **together**, as one body. In **2017** the kochari was added to the UNESCO list of **Intangible** Cultural Heritage.

## The yarkhushta

The **yarkhushta** is a warlike dance from **Sasun**. Partners face each other and **clap** each other's palms hard. It shows courage and **unity**.

## Let's learn

A simple **kochari** step: step to the right with your right foot, bring your left foot next to it, tap your right foot forward, and bring it back. Keep your hands on your neighbours' shoulders. Repeat it to the music with the whole class.

## Exercises

1. Why are many Armenian dances group dances?
2. Who is the paraglukh?
3. How is the kochari danced?
4. In which year was the kochari added to the UNESCO list?
5. Where does the yarkhushta come from?

## Answers

1. Dance brings people together; they dance together at festivals.
2. The first dancer in the line.
3. Shoulder to shoulder, moving together.
4. In 2017.
5. From Sasun.`,
      quiz: [
        ["Which dance was added to the UNESCO list in 2017?", ["Kochari", "Waltz", "Tamzara", "Shalakho"]],
        ["In which dance do partners clap each other's palms?", ["Yarkhushta", "Uzundara", "Berd", "Kochari"]],
        ["What does the dance leader often hold?", ["A handkerchief", "A bow", "A drum", "A book"]],
        ["In which dance do the dancers form a \"fortress\"?", ["Berd", "Tamzara", "Shalakho", "Uzundara"]],
        ["Which dance is a gentle solo dance for girls?", ["Uzundara", "Yarkhushta", "Kochari", "Shalakho"]],
      ],
    },
    "music-tells-stories": {
      objectives: ["Know what programme music is", "Recognise the characters of \"Peter and the Wolf\" by their instruments", "Describe how music portrays characters", "Make a story in sound"],
      content: `## Music without words

Music can **tell** a story even without words. Music that has a **title** or a **story** is called **programme music**.

## "Peter and the Wolf"

In **1936** the Russian composer **Sergei Prokofiev** wrote a symphonic fairy tale for children, **"Peter and the Wolf"**. A narrator tells the story, and each **character** is played by its own **instrument** with its own **melody**.

| Character | Instrument | How it sounds |
|---|---|---|
| Peter | the strings | cheerful, brave |
| The bird | flute | high, fast, twittering |
| The duck | oboe | nasal, slow, "quacking" |
| The cat | clarinet | careful, creeping steps |
| Grandfather | bassoon | low, cross, grumbling |
| The wolf | three French horns | gloomy, frightening |
| The hunters | timpani and drum | gunshots |

## How music portrays

The composer uses everything we have learnt:

- **high** sounds for the bird, **low** sounds for Grandfather,
- a **fast** tempo for running, a **slow** one for careful steps,
- **minor** for danger, **major** for victory,
- **loud** sounds for the fight.

## Let's make our own tale

Choose a short tale (for example, Tumanyan's "The Death of Kikos" or "The End of Evil"). For each character, choose an **instrument** or a **sound** (a clap, a stamp, a whistle, a shaker). One person tells the story, and the others "play" the characters.

## Exercises

1. What is programme music?
2. Who wrote "Peter and the Wolf"?
3. Which instrument plays the bird?
4. Which instruments play the wolf?
5. How can music portray danger?

## Answers

1. Music that has a title or a story.
2. Sergei Prokofiev.
3. The flute.
4. Three French horns.
5. With a minor mode and low, loud sounds.`,
      quiz: [
        ["Who wrote \"Peter and the Wolf\"?", ["Prokofiev", "Mozart", "Komitas", "Bach"]],
        ["Which instrument plays the duck?", ["Oboe", "Flute", "Bassoon", "Clarinet"]],
        ["Which instrument plays the cat?", ["Clarinet", "French horn", "Timpani", "Violin"]],
        ["Which instrument plays Grandfather?", ["Bassoon", "Flute", "Oboe", "Trumpet"]],
        ["What is music that has a story called?", ["Programme music", "Folk music", "Church music", "Electronic music"]],
      ],
    },
  },
};
