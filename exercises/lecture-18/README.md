# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №18 - String

1. В середині exercises створіть піддирексторію lecture-18. В середині lecture-18 створіть файли index.html, app.js та README.md

Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- змініть title на: Моя домашня сторінка -->
    <title>Document</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>
<body>
    <h1>Hello, world!</h1>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>
</html>

```


2. Підключити Bootstrap-компонент navbar

```html

```


3. Встановити клас bg-primary для компонента navbar. Встановити темну тему для компонента navbar

Example 1

let string1 = "  The name of     our game  ";
console.log(string1.trim());
console.log(string1);

// Expected Output
// "The name of     our game"
// "  The name of     our game  "

As seen in the code above, the method doesn’t tamper with the string itself. The string us untouched.

Як видно з коду вище, метод не змінює сам рядок. Струна нас недоторкана.

Example 2
let string2 = " A string   ";
let trimmedString2 = string2.trim();

console.log(string2);
console.log(trimmedString2);

// Expected Output
// " A string   "
// "A string"

Alternative
Without this method (or if not supported), whitespaces can only be removed by applying regex. For example, we can create a function which returns a new string from a previous string but without whitespaces. Take a look at this example

Альтернатива
Без цього методу (або якщо він не підтримується) пробіли можна видалити лише шляхом застосування регулярного виразу. Наприклад, ми можемо створити функцію, яка повертає новий рядок із попереднього рядка, але без пробілів. Подивіться на цей приклад
function removeWhiteSpace(str) {
    let reg = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; 
    let newStr = str.replace(reg, '');
    return newStr;
}

let str = "   Yes ";
let trimmedStr = removeWhiteSpace(str);

console.log(trimmedStr);
// Expected Output
// "Yes"

Polyfill
If the method is available natively, you can add it to the string prototype object provided by javascript.

By adding the following code to the top of your script, the trim() method would be created.

if (String.prototype.trim !== undefined) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

The regex applied above is similar to the regex in our alternative function above. First, we check if the trim method exists, and if it doesn’t, we create it. By doing this, you can begin using the trim method.

trimStart() and trimEnd()
These methods are available only in ECMAScript10 (ES2019) and not older versions. Hence they can only be used in modern browsers with upgraded javascript. However, with polyfill, you can add them.

They are similar to trim() but they split its functions.

trimStart() is a method applied on strings which only removes the whitespaces from the beginning of the sentence (often called leading whitespaces)

trimEnd() on the other hand, is a method applied on strings which only removes the whitespaces from the end of the sentence (often called trailing whitespaces)

Their applications are similar to trim(). Their respective syntaxes are

trimStart() і trimEnd()
Ці методи доступні лише в ECMAScript10 (ES2019), а не в старіших версіях. Тому їх можна використовувати лише в сучасних браузерах з оновленим JavaScript. Однак за допомогою поліфілу їх можна додати.

Вони подібні до trim(), але вони розділяють його функції.

trimStart() — це метод, застосований до рядків, який видаляє лише пробіли з початку речення (часто їх називають початковими пробілами)

trimEnd() з іншого боку, це метод, застосований до рядків, який лише видаляє пробіли з кінця речення (часто називають кінцевими пробілами)

Їх застосування подібне до trim(). Їх відповідний синтаксис


string.trimStart()
string.trimEnd()

Their return values are the same string but stripped of the whitespaces it may possess.

As observed, trimStart() + trimEnd() make up trim()

Їхні значення, що повертаються, є тим самим рядком, але без пробілів, які він може мати.

Як спостерігалося, trimStart() + trimEnd() складають trim()

How to Trim Strings in JavaScript
Posted November 25, 2021

A good practice when using string values from form fields is to remove the whitespaces from the start and end of the strings — i.e. trim the string.

In this post, I'm going to describe what is a whitespace and a line terminator character in JavaScript.

Plus, you'll read how to trim strings, aka remove whitespaces and line terminator characters from the start and/or end of the string.

Before I go on, let me recommend something to you.

The path to becoming good at JavaScript isn't easy... but fortunately with a good teacher you can shortcut.

Take "Modern JavaScript From The Beginning 2.0" course by Brad Traversy to become proficient in JavaScript in just a few weeks. Use the coupon code DMITRI and get your 20% discount!

1. The whitespaces and line terminators

Before diving into the actual trim functions, let's first agree what special characters the trim functions are removing from strings.

First, the whitespace is any character from the following list:

    SPACE (U+0020 code point)
    CHARACTER TABULATION (U+0009 code point)
    LINE TABULATION (U+000BU code point)
    FORM FEED (FF) (U+000C code point)
    NO-BREAK SPACE (U+00A0 code point)
    ZERO WIDTH NO-BREAK SPACE (U+FEFFU code point)
    Any other character from Space Separator category

In simple words, the whitespaces are characters that rendered on the screen create an empty white space.

Common whitespace characters are space ' ' and tab '\t'.

Secondly, the line terminator is also a special set of characters consisting of:

    LINE FEED (U+000A code point)
    CARRIAGE RETURN (U+000D code point)
    LINE SEPARATOR (U+2028 code point)
    PARAGRAPH SEPARATOR (U+2029 code point)

The line terminator represents a character that exists at the end of a text line and has some special purpose.

A common line terminator character is the line feed '\n', which means moving one line forward.

1. Пробіли та термінатори рядків

Перш ніж зануритися в фактичні функції обрізки, давайте спочатку домовимося, які спеціальні символи функції обрізки видаляють із рядків.

По-перше, пробіл — це будь-який символ із наступного списку:

     ПРОБІЛ (код U+0020)
     ТАБЛИЦЯ СИМВОЛІВ (код U+0009)
     РЯДКОВА ТАБЛИЦЯ (кодова точка U+000BU)
     ПОДАЧА ФОРМИ (FF) (код U+000C)
     ПРОБІЛ БЕЗ ПЕРЕРВИ (код U+00A0)
     ПРОБІЛ НУЛЬОВОЇ ШИРИНИ (код U+FEFFU)
     Будь-який інший персонаж із категорії Space Separator

Простіше кажучи, пробіли – це символи, які відображаються на екрані, створюючи порожній пробіл.

Звичайними пробілами є пробіл " " і табуляція "\t".

По-друге, термінатор рядка також є спеціальним набором символів, що складається з:

     ПЕРЕВОД РЯДКУ (код U+000A)
     ПОВЕРНЕННЯ КАРЕТКИ (код U+000D)
     РОЗДІЛЬНИК РЯДКА (код U+2028)
     РОЗДІЛЬНИК АБЗАЦІВ (код U+2029)

Знак закінчення рядка представляє символ, який знаходиться в кінці текстового рядка і має певне призначення.

Поширеним символом закінчення рядка є переведення рядка '\n', що означає переміщення на один рядок вперед.


2. Trim strings in JavaScript

There are situations when you want to clean strings entering from the application input. For example, you'd definitely want to trim strings from the form fields representing a username, first name, last name, phone number, etc.

JavaScript provides 3 simple functions on how to trim strings.
2.1 string.trim()

string.trim() removes sequences of whitespaces and line terminators from both the start and the end of the string.

Let's see a few examples:

2. Обрізати рядки в JavaScript

Бувають ситуації, коли потрібно очистити рядки, що надходять із введення програми. Наприклад, ви точно захочете вирізати рядки з полів форми, які представляють ім’я користувача, ім’я, прізвище, номер телефону тощо.

JavaScript надає 3 прості функції для обрізання рядків.
2.1 string.trim()

string.trim() видаляє послідовності пробілів і символів закінчення рядка як на початку, так і в кінці рядка.

Давайте розглянемо кілька прикладів:

const name = '  Kate ';
name.trim(); // => 'Kate'

const phoneNumber = '\t  555-123\n ';
phoneNumber.trim(); // => '555-123'


name.trim() removes the spaces from the start and end of the string. ' Kate ' becomes 'Kate'.

phoneNumber.trim() also cleans boths ends: '\t 555-123\n ' becomes '555-123'.

The trim function removes from both ends of the string sequences of consecutive white spaces and line terminals. But if a whitespace is found in between two letters, then, of course, this whitespace is preserved:

name.trim() видаляє пробіли з початку та кінця рядка. «Кейт» стає «Кейт».

phoneNumber.trim() також очищає обидва кінці: '\t 555-123\n ' стає '555-123'.

Функція обрізки видаляє з обох кінців послідовності рядків послідовні пробіли та кінцеві рядки. Але якщо між двома літерами знайдено пробіл, то, звичайно, цей пробіл зберігається:


const fullName = '  Kate Smith  ';
fullName.trim(); // => 'Kate Smith'


fullName.trim() removes the spaces from both the start and end of the string, however keeps the space between Kate and Smith words.
2.2 string.trimStart()

string.trimStart() removes sequences of whitespaces and line terminators only from the start of the string.

fullName.trim() видаляє пробіли з початку та кінця рядка, але зберігає пробіли між словами Kate та Smith.
2.2 string.trimStart()

string.trimStart() видаляє послідовності пробілів і символів закінчення рядка лише з початку рядка.

const name = '  Jane ';
name.trimStart(); // => 'Jane '

const phoneNumber = '\t  555-123 \n';
phoneNumber.trimStart(); // => '555-123 \n'


name.trimStart() removes the spaces only from the start of the string, and doesn't touch the space at the end. ' Jane ' becomes 'Jane '.

phoneNumber.trimStart() removes the sequence of whitespaces and line terminals from the start only. '\t 555-123 \n' becomes '555-123 \n'.
2.3 string.trimEnd()

string.trimEnd() removes sequences of whitespaces and line terminators only from the end of the string.

name.trimStart() видаляє пробіли лише на початку рядка та не торкається пробілів у кінці. «Джейн» стає «Джейн».

phoneNumber.trimStart() видаляє послідовність пробілів і кінцевих рядків лише з самого початку. '\t 555-123 \n' стає '555-123 \n'.
2.3 string.trimEnd()

string.trimEnd() видаляє послідовності пробілів і символів закінчення рядка лише з кінця рядка.


const name = '  Jim ';
name.trimEnd(); // => '  Jim'

const phoneNumber = '\t  555-123 \n';
phoneNumber.trimEnd(); // => '\t  555-123'


name.trimEnd() removes the one space from the end, and doesn't touch the leading part. ' Jim ' becomes ' Jim'.

phoneNumber.trimEnd() trims the end of the string too. '\t 555-123\n ' becomes '\t 555-123'.

name.trimEnd() видаляє один пробіл із кінця та не торкається початкової частини. «Джим» стає «Джимом».

phoneNumber.trimEnd() також обрізає кінець рядка. '\t 555-123\n ' стає '\t 555-123'.

3. Conclusion

The whitespaces, like a space or tab, are special characters that create empty space when rendered.

Also the line terminals, like the line feed, you may find at the end of lines in a multiline string.

Often you may find it useful to remove these special characters from a string. The JavaScript trim functions can help you.

string.trim() removes sequences of white spaces and line terminators from both the start and end of the string, string.trimStart() removes them from start, and finally string.trimEnd() removes them from the end.
Like the post? Please share!
GitHub Logo
https://dmitripavlutin.com/javascript-string-trim/

How to Trim String in JavaScript
samanthaming profile image Samantha Ming twitter logo github logo Apr 15 ・5 min read  
#codenewbie #beginners #javascript #webdev
Alt Text

It's super simple to remove whitespace from a string. To remove just the leading whitespace, you can use trimStart(). To remove trailing whitespace, use trimEnd(). Or remove it all with trim() 🙌

const string = "   hi   ";

string.trimStart(); // "hi   "
string.trimEnd();   // "   hi"
string.trim();      // "hi"
Trim Return Value
All trim methods, will return a new string. That means your original string will be left intact.

const string = "   hi   ";

string.trimStart(); // "hi   "
string.trimEnd();   // "   hi"
string.trim();      // "hi"

string;            // "   hi   "
What is Whitespace
So trim removes whitespace. So that is the white space created by:

space
tab
no-break space
line terminator characters
Trimming Line Terminator Characters
You might be wondering what are line terminator characters. Well, let's take a look at some examples.
'hi \n'.trim(); // "hi"

'hi \t'.trim(); // "hi"

'hi \r'.trim(); // "hi"
Multi-line String
In JavaScript, you can easily create multi-line strings using the Template Literals. So if you're wondering if trim works with that, you bet it does 👍
const multiLine = `
hi


`;

multiline.trim(); // "hi"
Trimming Multiple Words
Remember trim only works for whitespace at the start and end. So it doesn't trim the space in between words.
'  hi there  '.trim(); // "hi there"
Multi-Line of Multiple Words
Same with multi-line, it only trims the beginning of the first word and the ending of the last word.
const multiLine = `
hi

there


`;

// Returns

"hi

there"
Trim Aliases
trimStart vs trimLeft
trimStart removes the leading white space. So all the whitespace from the beginning of a string to the first non-whitespace character will be gone.

You might also see people using trimLeft(). Well, that's because it's an alias. It does the same thing.

const string = "   hi   ";

string.trimStart(); // "hi   "
string.trimLeft();  // "hi   "
trimEnd vs trimRight
trimEnd removes the trailing white space. So all the whitespace from the end of a string will be gone. The alias of this method is trimRight(). Again, they do the same thing.

const string = "   hi   ";

string.trimEnd();   // "   hi"
string.trimRight(); // "   hi"

```html

```

4. Встановити клас bg-dark для компонента navbar. Встановити темну тему для компонента navbar 

let str1 = new String('What am I?');
typeof str1; // 'object'

let str2 = String('What am I?');
typeof str2; // 'string'

let str3 = "What am I?";
typeof str3; // 'string'

str1 === str2; // false
str1 === str3; // false
str2 === str3; // true

In the example below, we are comparing two strings according to their alphabetical order:

'Berry' < 'Copper'; // true
// because 'B' comes before 'C'

'Berry' < 'Bingo'; // true
// because the first characters are the same and 'e' comes before 'i'

'berry' < 'Copper'; // false
// because the comparison is case-sensitive and capital letters come first

Let's rewrite the example from the concatenation section:

let a = 'When candles are out,';
let b = 'all cats are grey.';
let c = a.concat(' ', b);
console.log(c); // 'When candles are out, all cats are grey.'

The includes() method
The includes() method checks if a specified string, passed as an argument, is present inside another string. The search is case-sensitive and the return value is a boolean.

Also, you can specify a second argument stating the index at which to start searching for the specified string.

let sentence = 'Always look on the bright side of life';
sentence.includes('look up'); // false 
sentence.includes('look on'); // true
sentence.includes('look on', 8); // false

The indexOf() methods
The indexOf() method searches for a substring and returns the first occurrence of the substring inside the calling string. It takes an optional parameter, indicating a specific index to start searching. For example:

let sentence = 'Always look on the bright side of life';

sentence.indexOf('l'); // 1
sentence.indexOf('l', 2); // 7
sentence.indexOf('l', 8); // 34
sentence.indexOf('L'); // -1
indexOf() returns the index of the first occurrence of the substring. If the substring is not found, it returns -1. Keep in mind that the search is case-sensitive. That's why sentence.indexOf('L') in the example above returns -1.

let sentence = 'Always look on the bright side of life';

sentence.slice(7); // 'look on the bright side of life'
sentence.substring(7); // 'look on the bright side of life'
sentence.slice(0, 6); // 'Always'
sentence.substring(0, 6); // 'Always'

let sentence = 'Always look on the bright side of life';

sentence.substring(11, 7); // 'look'
sentence.slice(11, 7); // ''

String indexing
You can access each character inside a string through its numeric index – starting from zero – using bracket notation:

let str = 'larch';
str[0]; // 'l'
str[1]; // 'a'
str[2]; // 'r'
str[3]; // 'c'
str[4]; // 'h'

```html

```

5. Встановити style="background-color: #e3f2fd;" компонента navbar

Простий пошук

search() метод повертає позицію відповідності рядка заданому шаблону.

let sentence = "Якщо ви занадто довго чекаєте ідеального моменту, ідеальний момент пройде повз вас";


sentence = `/${sentence}/gmi`;

let search_pattern = "will pass";
let search_result = sentence.search(search_pattern);

if(search_result>=0){
    console.log("Searched Pattern is found at position : "+search_result);  
}else{
    console.log("Searched Pattern not found.");  
}

//Console Output
Searched Pattern is found at position : 65

Javascript Search word in string and get its position
Javascript Search word in a string and get its position

In the above example sentence is a string and search_pattern is the pattern we are searching inside a string.
In this example, we are using regular expressions. The variable search_result returns the first position of matched pattern encountered.
Search which returns matched words using string match() method

Suppose in cases where we want to return all those matched patterns then it is possible using string.match() method.

Шуканий шаблон знайдено на позиції: 65

Javascript Пошук слова в рядку та отримання його позиції
Javascript Пошук слова в рядку та отримання його позиції

У наведеному вище прикладі речення — це рядок, а search_pattern — шаблон, який ми шукаємо всередині рядка.
У цьому прикладі ми використовуємо регулярні вирази. Змінна search_result повертає першу позицію знайденого шаблону.
Пошук, який повертає відповідні слова за допомогою методу string match().

Припустімо, що у випадках, коли ми хочемо повернути всі відповідні шаблони, це можливо за допомогою методу string.match().

let sentence = "If you wait too long for the perfect moment, the perfect moment will pass you by";
let pattern = /the/gi;
let result = sentence.match(pattern);
console.log(result);

//Console Output
(2) ["the", "the"]

Javascript search string using match() method
Javascript search string using match() method

Variable pattern which searches for a word this in string sentence returns the matched output.

And what if we need to search for multiple patterns in variable sentence then we use the vertical line | which is an or operator.

Пошуковий рядок Javascript з використанням методу match().

Шаблон змінної, який шукає слово this у рядковому реченні, повертає відповідний результат.

А що, якщо нам потрібно шукати кілька шаблонів у змінному реченні, тоді ми використовуємо вертикальну лінію | який є оператором або.
let pattern = /the|wait/gi; //with multiple words match
let sentence = "If you wait too long for the perfect moment, the perfect moment will pass you by";
let result = sentence.match(pattern);
console.log(result);

//Console Output
(3) ["wait", "the", "the"]

Javasript multiple words searching and display in an array.
Javascript multiple words searching and display in an array.
Conclusion

We have come to the end of our post on JavaScript Search within String using the search() and match() method. If you like our content then please do share it and comment to clarify your doubts.
substring vs substr in JavaScript
Similar to how the difference between the slice vs splice array methods can be hard to remember, it can also be hard to remember the difference between the substring and substr JavaScript string methods. Here’s a quick reference to help out with that.

TL;DR: substring takes a starting index and an end index while substr takes a starting index and a length of characters.

🐊 Alligator.io recommends:
ES6 for Everyone → A video course to learn modern JavaScript
ⓘ About this affiliate link

String.prototype.substring
The substring() method, all spelled out, returns a new string with a subset of the string. With one argument passed-in, we get the string starting from the specified index (inclusive) until the end of the string:

Метод substring(), повністю прописаний, повертає новий рядок із підмножиною рядка. З переданим одним аргументом ми отримуємо рядок, починаючи з указаного індексу (включно) до кінця рядка:

const myStr = 'Alligator';

const myNewStr = myStr.substring(2);

console.log(myNewStr); // ligator
With two arguments passed-in, we get a subset of the string from the starting index to the end index (exclusive):

З переданими двома аргументами ми отримуємо підмножину рядка від початкового індексу до кінцевого індексу (виключно):
const myStr = 'Alligator';

const myNewStr = myStr.substring(0, 3);

console.log(myNewStr); // All

String.prototype.substr
The substr() method is very similar, but the second argument is not for the end index, it’s for the amount of characters.

Here we want a 3-character string from a starting index of 2:

Метод substr() дуже схожий, але другий аргумент не для кінцевого індексу, а для кількості символів.

Тут нам потрібен 3-символьний рядок із початковим індексом 2:
const myStr = 'Alligator';

const myNewStr = myStr.substr(2, 3);

console.log(myNewStr); // lig
Negative start index

Additionally, the first argument to substr can be a negative integer, in which case the start of the returned string is counted from the end of the string that the method is used on:


Крім того, перший аргумент substr може бути цілим від’ємним числом, і в цьому випадку початок повернутого рядка відраховується від кінця рядка, для якого використовується метод:

const myStr = 'Alligator';

const myNewStr = myStr.substr(-2);

console.log(myNewStr); // or

Same Result When Only One Argument
When only the first argument is used and is a positive integer, both substring and substr return the same value:

Той самий результат, коли лише один аргумент
Якщо використовується лише перший аргумент і він є додатним цілим числом, і підрядок, і підрядок повертають однакове значення:
const myStr = 'Alligator';

const myNewStrViaSubstring = myStr.substring(3);

const myNewStrViaSubstr = myStr.substr(3);

console.log(myNewStrViaSubstring); // igator

console.log(myNewStrViaSubstr); // igator

Спочатку з’явився String.prototype.indexOf — де ми можемо запитати індекс початку рядка, якщо він збігається. Якщо він збігається, ми отримуємо індекс або -1, тому, природно, наша перевірка безпеки робить саме це:

const index = findme.indexOf(passcode);

// true
console.log(index !== -1);

The -1 isn’t the best looking code, it feels a bit archaic - so prefer the use of String.prototype.includes where appropriate.

You could also use the bitwise operator ~ instead as a little shorthand, and we’ll leave it at that:

Код -1 не найкращий, він виглядає дещо архаїчно, тому віддайте перевагу використанню String.prototype.includes, де це доречно.

Ви також можете використовувати порозрядний оператор ~ замість нього як невелике скорочення, і ми залишимо це як:

const index = !!~findme.indexOf(passcode);

// true
console.log(index);

The !!~ converts the resulting bitwise expression to a Boolean. It’s basically a fancy way of forcing indexOf to return us true or false in one line.

!!~ перетворює отриманий порозрядний вираз на логічний. По суті, це дивовижний спосіб змусити indexOf повертати нам true або false в одному рядку.

const passcode = 'bacon';
const findme = `8sowl0xe${passcode}xjwo98w`;

// ES6 String.prototype.includes
console.log(findme.includes(passcode));

// String.prototype.indexOf
console.log(findme.indexOf(passcode) !== -1);

const index = findme.indexOf(passcode);

// true
console.log(!!~index);

Як використовувати JavaScript для скорочення багаторядкового тексту
JavaScript також має можливість обрізати текст. Нижче наведено приклад того, як реалізувати JavaScript для скорочення тексту залежно від певної кількості символів.

Давайте подивимося, як ми можемо це зробити за допомогою JavaScript. Для початку давайте визначимо функцію під назвою truncate і передамо слова, які потрібно скоротити, як параметри. Ми додатково надамо параметр максимальної довжини.

Ось приклад HTML-коду для скорочення тексту за допомогою JavaScript:

<script src="Truncate.js"></script>
<body>
  <div>
    <h1>Text Truncate Example Header</h1>
    <p id="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien
      eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed
      neque dictum, nec lobortis ante faucibus.
    </p>
    <button onclick="truncateText()">Truncate Text</button>
  </div>
</body>
Below is an image output of pure HTML code before adding the JavaScript function and the CSS border function:


Here's the JavaScript code:

function truncateText() {
  var text = document.getElementById("text").innerHTML;
  var truncated = text.substring(0, 50) + "...";
  document.getElementById("text").innerHTML = truncated;
}

Here is how it is often used:

const string = "How is everything going?"

const breakpoint = " "

const splitted = string.split(breakpoint);

// [ 'How', 'is', 'everything', 'going?' ]
Using a space (" ") as the breakpoint, the split method splits the string at those breakpoints.

const str = 'Toyota,Nissan,Mercedes,Tesla';
const cars = str.split(',');
console.log(cars); // ["Toyota", "Nissan", "Mercedes", "Tesla"]

Here is an example using a regex pattern:

const string = "How is $everything g$oing?"

const breakpoint = /\$e|\$o/

const splitted = string.split(breakpoint)

// [ 'How is ', 'verything g', 'ing?' ]
The regex pattern matches the dollar sign followed by the letter "e" ($e) or the dollar sign followed by the letter o ($o).

```html

```
6. Підключити на сторінку компонент accordion
```html

```
7. Підключити на сторінку компонент breadcrumb
```html

```
8. Створити та підключити на сторінку компонент Sticky footer
```html

```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

