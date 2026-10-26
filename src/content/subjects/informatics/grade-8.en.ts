import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Lists, strings, your own functions, searching and sorting.",
    "Formulas and functions in spreadsheets, HTML and CSS.",
  ],
  lessons: {
    "lists-python": {
      objectives: ["Create a list and access elements by index", "Add and remove elements", "Go through a list with a for loop", "Use the functions len, sum, max, min"],
      content: `## What is a list?

A **list** stores several values in one variable. It is written in **square brackets**.

\`\`\`python
grades = [8, 10, 7, 9]
cities = ["Yerevan", "Gyumri", "Vanadzor"]
\`\`\`

## Indices

Elements are numbered **from 0**.

| Index | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| \`grades\` | 8 | 10 | 7 | 9 |

\`\`\`python
print(grades[0])    # 8
print(grades[-1])   # 9 (the last one)
grades[2] = 6       # change an element
\`\`\`

A **slice**: \`grades[1:3]\` gives \`[10, 6]\`, from 1 up to 3 (3 not included).

## List methods

| Operation | Meaning |
|---|---|
| \`a.append(5)\` | add to the end |
| \`a.insert(0, 5)\` | insert at position 0 |
| \`a.remove(5)\` | remove the first 5 |
| \`a.pop()\` | remove the last one |
| \`a.sort()\` | sort in ascending order |
| \`len(a)\` | number of elements |
| \`5 in a\` | check whether it is there |

## Going through a list

\`\`\`python
grades = [8, 10, 7, 9]
for g in grades:
    print(g)
print("Average:", sum(grades) / len(grades))
print("Best:", max(grades))
\`\`\`

## Exercises

1. What does \`print([4, 5, 6][1])\` display?
2. How do you add the number 11 to the end of list \`a\`?
3. What is \`len([3, 3, 3])\`?
4. What does \`[1, 2, 3, 4, 5][1:4]\` give?
5. Write a program that displays all the even numbers in a list.

## Answers

1. 5
2. \`a.append(11)\`
3. 3
4. \`[2, 3, 4]\`
5. \`for x in a:\`, and inside it \`if x % 2 == 0: print(x)\`.`,
      quiz: [
        ["Which index does a Python list start from?", ["0", "1", "-1", "10"]],
        ["What does the append method do?", ["Adds an element to the end", "Deletes the list", "Sorts", "Calculates the sum"]],
        ["What does len([2, 4, 6, 8]) give?", ["4", "8", "20", "3"]],
        ["Which element is a[-1]?", ["The last", "The first", "The second", "Error"]],
        ["What does max([3, 9, 2]) give?", ["9", "3", "2", "14"]],
      ],
    },
    "strings-python": {
      objectives: ["Access the characters of a string by index", "Use string methods", "Join and repeat strings", "Go through the characters of a string in a loop"],
      content: `## A string is a sequence of characters

\`\`\`python
word = "Ararat"
print(word[0])     # A
print(len(word))   # 6
print(word[1:4])   # rar
\`\`\`

A string is **immutable**: \`word[0] = "B"\` causes an error. You have to create a new string.

## Operations

| Operation | Result |
|---|---|
| \`"Yere" + "van"\` | \`"Yerevan"\` |
| \`"ha" * 3\` | \`"hahaha"\` |
| \`"ar" in "Ararat"\` | \`True\` |

## Methods

| Method | What it does | Example |
|---|---|---|
| \`upper()\` | capital letters | \`"hi".upper()\` → \`"HI"\` |
| \`lower()\` | small letters | \`"HI".lower()\` → \`"hi"\` |
| \`replace(a, b)\` | replace | \`"cat".replace("c", "b")\` → \`"bat"\` |
| \`split()\` | split into words | \`"a b c".split()\` → \`["a", "b", "c"]\` |
| \`count(x)\` | count | \`"banana".count("a")\` → 3 |
| \`strip()\` | removes spaces at the edges | \`"  ok ".strip()\` → \`"ok"\` |

## Going through the characters

\`\`\`python
text = "Aragatsotn"
count = 0
for ch in text:
    if ch == "a":
        count += 1
print("the letter a appears", count, "times")
\`\`\`

## Palindrome

A word is a **palindrome** if it reads the same in both directions. \`word[::-1]\` gives the reversed string.

\`\`\`python
word = input("Word: ")
if word == word[::-1]:
    print("Palindrome")
\`\`\`

## Exercises

1. What does \`print("Python"[0])\` display?
2. What does \`"ab" * 2\` give?
3. How do you get the length of a string?
4. What does \`"Good afternoon".split()\` give?
5. Is the word "level" a palindrome?

## Answers

1. P
2. \`"abab"\`
3. With the function \`len(s)\`.
4. \`["Good", "afternoon"]\`
5. Yes.`,
      quiz: [
        ["What does \"hello\".upper() give?", ["HELLO", "hello", "Hello", "hELLO"]],
        ["What does len(\"Sevan\") give?", ["5", "4", "6", "1"]],
        ["What does split() do?", ["Splits a string into a list of words", "Joins strings", "Deletes a string", "Reverses a string"]],
        ["Which expression reverses the string s?", ["s[::-1]", "s[1:]", "s.upper()", "s * 2"]],
        ["What does \"a\" + \"b\" give?", ["\"ab\"", "\"a b\"", "Error", "\"ba\""]],
      ],
    },
    "functions-python": {
      objectives: ["Define a function with def", "Pass parameters", "Return a value with return", "Explain why functions are useful"],
      content: `## Why a function?

A **function** is a named piece of code that can be called many times. It saves repetition and divides a program into small, clear parts.

## Definition and call

\`\`\`python
def greet(name):
    print("Hello,", name)

greet("Ani")
greet("Davit")
\`\`\`

- \`def\` is the keyword,
- \`greet\` is the function's name,
- \`name\` is the **parameter**,
- \`"Ani"\` is the **argument** (the value passed in).

## return

\`return\` gives back a result from the function.

\`\`\`python
def square(x):
    return x * x

def area(a, b):
    return a * b

print(square(7))       # 49
s = area(3, 5) + 1
print(s)               # 16
\`\`\`

## Local and global variables

A variable created inside a function is **local**: it cannot be seen from outside.

\`\`\`python
def f():
    y = 10
f()
print(y)   # error: y does not exist outside
\`\`\`

## Default value

\`\`\`python
def power(x, n=2):
    return x ** n

print(power(3))     # 9
print(power(2, 5))  # 32
\`\`\`

## Exercises

1. Which word defines a function?
2. What does \`square(4)\` from the example above return?
3. What is the difference between a parameter and an argument?
4. Write a function \`is_even(n)\` that returns True for an even number.
5. What does \`print(power(10))\` display?

## Answers

1. \`def\`
2. 16
3. A parameter is the name in the definition; an argument is the value passed when calling.
4. \`def is_even(n):\`, and inside it \`return n % 2 == 0\`.
5. 100`,
      quiz: [
        ["Which word defines a function in Python?", ["def", "func", "function", "make"]],
        ["What does return do?", ["Gives back a result", "Displays text", "Repeats a loop", "Deletes a variable"]],
        ["What does area(2, 6) return if area multiplies a by b?", ["12", "8", "26", "4"]],
        ["Why are functions used?", ["To avoid repetition", "To slow the program down", "To delete variables", "To switch off the computer"]],
        ["Where can a local variable be seen?", ["Only inside the function", "In the whole program", "In other files", "Nowhere"]],
      ],
    },
    "search-and-sort": {
      objectives: ["Implement linear search", "Explain binary search", "Describe bubble sort", "Compare the speed of algorithms"],
      content: `## Linear search

We check the elements **one by one** until we find it.

\`\`\`python
def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1
\`\`\`

In the worst case we check **all n** elements.

## Binary search

It works only on a **sorted** list. At each step we look at the middle and halve the search area (like looking up a word in a dictionary).

\`\`\`python
def binary_search(a, x):
    lo, hi = 0, len(a) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if a[mid] == x:
            return mid
        elif a[mid] < x:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
\`\`\`

| Number of elements | Linear (maximum) | Binary (maximum) |
|---|---|---|
| 8 | 8 | 4 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

## Bubble sort

We compare **neighbouring** elements and swap them if the order is wrong. Large elements "float up" to the end, like bubbles.

\`\`\`python
def bubble_sort(a):
    n = len(a)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
\`\`\`

Example: \`[5, 1, 4, 2]\`.

| Pass | List |
|---|---|
| 1 | \`[1, 4, 2, 5]\` |
| 2 | \`[1, 2, 4, 5]\` |
| 3 | \`[1, 2, 4, 5]\` |

Bubble sort is simple but slow for large lists. Python's \`sort()\` uses a much faster algorithm.

## Exercises

1. What condition is needed for binary search?
2. At most how many steps does binary search need for 16 elements?
3. What does \`linear_search([3, 7, 9], 7)\` return?
4. What does \`[3, 1, 2]\` become after the first pass of bubble sort?
5. Why does linear search return -1?

## Answers

1. The list must be sorted.
2. 5 (16 → 8 → 4 → 2 → 1).
3. 1
4. \`[1, 2, 3]\`
5. To show that the element was not found (an index cannot be negative).`,
      quiz: [
        ["Which search needs a sorted list?", ["Binary", "Linear", "Both", "Neither"]],
        ["What does bubble sort compare?", ["Neighbouring elements", "The first and last elements", "Only the middle", "Random elements"]],
        ["Roughly how many steps does binary search need for 1,000 elements?", ["10", "1000", "500", "100"]],
        ["What does binary search do at each step?", ["Halves the area", "Checks one element at a time", "Sorts", "Doubles the list"]],
        ["What is slowest for searching a large sorted list?", ["Linear search", "Binary search", "The same", "It does not matter"]],
      ],
    },
    "spreadsheets-advanced": {
      objectives: ["Distinguish relative and absolute references", "Use the IF function", "Use COUNTIF and AVERAGE", "Build a chart from data"],
      content: `## Revision

A formula starts with the **=** sign: \`=B2*C2\`, \`=SUM(B2:B10)\`.

## Relative and absolute references

When a formula is copied, a **relative** reference (\`B2\`) changes: copied downwards it becomes \`B3\`, \`B4\`...

An **absolute** reference (\`$B$1\`) does not change. The \`$\` sign "freezes" the column or the row.

Example: converting prices from drams to dollars, where B1 holds the exchange rate:

| | A | B | C |
|---|---|---|---|
| 1 | Rate | 390 | |
| 2 | Item | Drams | Dollars |
| 3 | Book | 3900 | \`=B3/$B$1\` |
| 4 | Pen | 780 | \`=B4/$B$1\` |

| Reference | When copied |
|---|---|
| \`B2\` | both column and row change |
| \`$B2\` | the column is fixed |
| \`B$2\` | the row is fixed |
| \`$B$2\` | nothing changes |

## The IF function

\`=IF(condition, if_true, if_false)\`

\`=IF(B2>=5, "Pass", "Fail")\`

## Other useful functions

| Function | Meaning |
|---|---|
| \`AVERAGE(B2:B20)\` | average |
| \`MAX\`, \`MIN\` | maximum, minimum |
| \`COUNT(B2:B20)\` | number of cells with numbers |
| \`COUNTIF(B2:B20, ">8")\` | number of cells that meet a condition |
| \`ROUND(B2, 1)\` | rounding |

Note: some programs separate arguments with \`,\` and others with \`;\`.

## Charts

- **Column chart** (bar chart): for comparison (marks by subject),
- **Line chart**: change over time (temperature by month),
- **Pie chart**: parts of a whole (how a budget is split).

## Exercises

1. What does \`=A1*$C$1\` become when copied one row down?
2. Write a formula that shows "Excellent" if B2 is greater than or equal to 9, otherwise "Good".
3. How do you count how many pupils got 10 in the range B2:B30?
4. Which chart is suitable for showing how a population changed over a year?
5. Why is an absolute reference used for the exchange rate?

## Answers

1. \`=A2*$C$1\`
2. \`=IF(B2>=9, "Excellent", "Good")\`
3. \`=COUNTIF(B2:B30, 10)\`
4. A line chart.
5. So that when copied, all the formulas refer to the same cell.`,
      quiz: [
        ["Which reference is absolute?", ["$A$1", "A1", "A$", "1A"]],
        ["What does the IF function do?", ["Chooses a value depending on a condition", "Adds numbers", "Rounds", "Sorts"]],
        ["Which function counts the cells that meet a condition?", ["COUNTIF", "SUM", "AVERAGE", "ROUND"]],
        ["Which chart shows parts of a whole?", ["Pie chart", "Line chart", "Column chart", "Scatter chart"]],
        ["What does the formula =B2 become when copied one row down?", ["=B3", "=B2", "=C2", "=A2"]],
      ],
    },
    "html-basics": {
      objectives: ["Explain what a web page is", "Use the basic HTML tags", "Add links and images", "Create lists and tables"],
      content: `## Web page

A web page is a text file with the extension \`.html\`. A **browser** (Chrome, Firefox) reads it and displays it nicely.

- **HTML** is the page's structure (what is on it),
- **CSS** is its appearance (colours, fonts),
- **JavaScript** is its behaviour (interactivity).

## Tags

HTML is made of **tags**. Most have an opening and a closing tag: \`<p>...</p>\`.

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My page</title>
  </head>
  <body>
    <h1>Hello, I am Ani</h1>
    <p>I am in year <b>8</b>.</p>
  </body>
</html>
\`\`\`

| Tag | Meaning |
|---|---|
| \`<h1>\`...\`<h6>\` | headings |
| \`<p>\` | paragraph |
| \`<b>\`, \`<i>\` | bold, italic |
| \`<br>\` | new line (no closing tag) |
| \`<a href="...">\` | link |
| \`<img src="..." alt="...">\` | image |
| \`<ul>\`, \`<ol>\`, \`<li>\` | lists |
| \`<table>\`, \`<tr>\`, \`<td>\` | table, row, cell |

## Attributes

A tag can have **attributes**, which give extra information:

\`\`\`html
<a href="https://www.wikipedia.org">Wikipedia</a>
<img src="ararat.jpg" alt="Mount Ararat" width="300">
\`\`\`

\`alt\` is important: it is read by programs for people with visual impairments.

## List and table

\`\`\`html
<ul>
  <li>Maths</li>
  <li>Informatics</li>
</ul>

<table>
  <tr><td>Yerevan</td><td>over 1 million</td></tr>
  <tr><td>Gyumri</td><td>about 110 thousand</td></tr>
</table>
\`\`\`

## Exercises

1. Which tag creates the largest heading?
2. Which attribute holds the link's address?
3. What is the difference between \`<ul>\` and \`<ol>\`?
4. What is the \`alt\` attribute for?
5. Write HTML that shows the heading "My hobby" and a bulleted list of two items.

## Answers

1. \`<h1>\`
2. \`href\`
3. \`<ul>\` is a bulleted list (with dots), \`<ol>\` is a numbered one.
4. It describes the image, in case it does not load, and for screen readers.
5. \`<h1>My hobby</h1>\`, then \`<ul>\`, two \`<li>\` and \`</ul>\`.`,
      quiz: [
        ["What is HTML responsible for on a page?", ["The structure", "The colours", "The interactivity", "The server"]],
        ["Which tag creates a link?", ["<a>", "<p>", "<img>", "<li>"]],
        ["Which tag adds an image?", ["<img>", "<pic>", "<a>", "<table>"]],
        ["Which tag is a list item?", ["<li>", "<td>", "<h2>", "<br>"]],
        ["Which program displays web pages?", ["A browser", "A calculator", "Only a text editor", "An antivirus"]],
      ],
    },
    "css-basics": {
      objectives: ["Explain the role of CSS", "Write a rule with a selector and properties", "Use class and id", "Apply colours, fonts and spacing"],
      content: `## Why CSS?

**CSS** (Cascading Style Sheets) defines the **appearance** of a page. The same HTML can have a completely different design.

## Rule

\`\`\`css
h1 {
  color: darkred;
  font-size: 32px;
  text-align: center;
}
\`\`\`

- \`h1\` is the **selector** (what we style),
- \`color\` is the **property**,
- \`darkred\` is the **value**.

## Where to write CSS?

1. In a \`<style>\` tag inside \`<head>\`,
2. in a separate file (\`style.css\`), linked with \`<link rel="stylesheet" href="style.css">\`,
3. directly in a tag: \`<p style="color: blue">\`.

A separate file is best: one file styles all the pages.

## class and id

\`\`\`html
<p class="note">This is important</p>
<div id="header">Header</div>
\`\`\`

\`\`\`css
.note { background: lightyellow; }
#header { padding: 20px; }
\`\`\`

| Selector | What it applies to |
|---|---|
| \`p\` | all \`<p>\` elements |
| \`.note\` | all elements with \`class="note"\` |
| \`#header\` | the single element with \`id="header"\` |

## Commonly used properties

| Property | Example |
|---|---|
| \`color\` | \`color: navy;\` |
| \`background\` | \`background: #f0f0f0;\` |
| \`font-family\` | \`font-family: Arial, sans-serif;\` |
| \`font-size\` | \`font-size: 18px;\` |
| \`margin\` | outer spacing |
| \`padding\` | inner spacing |
| \`border\` | \`border: 1px solid gray;\` |

A colour can be given by name (\`red\`) or by a **HEX** code (\`#ff0000\`), where the three pairs of digits are the red, green and blue components.

## Exercises

1. What is the selector in a CSS rule?
2. Which sign does a class selector start with?
3. What is the difference between margin and padding?
4. What colour is \`#0000ff\`?
5. Write a rule that makes all paragraphs grey and 16px in size.

## Answers

1. It shows which elements the rule applies to.
2. A full stop (\`.\`).
3. margin is the space outside the element; padding is inside the element, between the border and the content.
4. Blue.
5. \`p { color: gray; font-size: 16px; }\``,
      quiz: [
        ["What is CSS for?", ["The page's appearance", "The page's structure", "A database", "A server"]],
        ["Which is the selector for an id?", ["#menu", ".menu", "menu", "*menu"]],
        ["Which property changes the text colour?", ["color", "background", "border", "margin"]],
        ["Where is it best to write CSS for a large website?", ["In a separate .css file", "In every tag", "In an image", "In a heading"]],
        ["What colour is #ff0000?", ["Red", "Green", "Blue", "Black"]],
      ],
    },
  },
};
