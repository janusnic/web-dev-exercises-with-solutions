# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №15 - Bootstrap

1. В середині exercises створіть піддирексторію lecture-15. В середині lecture-15 створіть файли index.html та README.md

  - Відредагуйте файл index.html
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>
    <h1>Hello, world!</h1>

    <script>

    </script>

</body>
</html>

```
  - В середині тега script визначте 2 змінні message1 зі значенням hello та message2 зі значенням JavaScript. Використовуючи ці змінні та alert, виконайте відображення рядка hello JavaScript!.  

```html
    <script>

    </script>
```

2. Виправити помилку у коді

```html
    <script>
      'use strict';
      
      message = hello;
      message = 123456;

    </script>
```

```html
    <script>
      'use strict';
      
      // no error
      let message = "hello";
      message = 123456;
    </script>
```

3. Напишіть програму, що запитує у користувача значення двох змінних x, y, та виводить їх суму
```html
  <script>
    'use strict';

    let x = prompt("Enter x = ", "");
    let y = prompt("Enter y = ", "");
    alert(+x + +y);
  </script>
```

4. Виправити помилку у коді
```html
  <script>
    'use strict';

    let a = 9007199254740991;
    let b = 9007199254740991n;
    console.log(a + b); 
  </script>
```

5. Перепишіть код так, щоб результат дпрівнював 5
```html
  <script>
    'use strict';

    let apples = "2";
    let oranges = "3";

    alert( apples + oranges ); 
   
  </script>
```

6. Які кінцеві значення всіх змінних a, b, c і d після виконання наведеного нижче коду?

```html
  <script>
    'use strict';

    let a = 1, b = 1;

    let c = ++a; // ?
    let d = b++; // ?

   
  </script>
```

The answer is:

    a = 2
    b = 2
    c = 2
    d = 1

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
alert( a ); // 2, incremented once
alert( b ); // 2, incremented once



7. Які значення a і x після виконання наведеного нижче коду?

```html
  <script>
    'use strict';

    let a = 2;
    let x = 1 + (a *= 2);
  </script>
```

```html
  <script>
    'use strict';

    let a = 2;
    let x = 1 + (a *= 2);
  </script>

The answer is:
    a = 4 (multiplied by 2)
    x = 5 (calculated as 1 + 4)
```

8. Які результати цих виразів?
```html
  <script>
    'use strict';

    "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    " \t \n" - 2
  </script>
```

```html
  <script>
    'use strict';

    "" + 1 + 0 = "10" // (1)
    "" - 1 + 0 = -1 // (2)
    true + false = 1
    6 / "3" = 2
    "2" * "3" = 6
    4 + 5 + "px" = "9px"
    "$" + 4 + 5 = "$45"
    "4" - 2 = 2
    "4px" - 2 = NaN
    "  -9  " + 5 = "  -9  5" // (3)
    "  -9  " - 5 = -14 // (4)
    null + 1 = 1 // (5)
    undefined + 1 = NaN // (6)
    " \t \n" - 2 = -2 // (7)

  </script>
```

Додавання з рядком "" + 1 перетворює 1 на рядок: "" + 1 = "1", а потім маємо "1" + 0, застосовується те саме правило.
Віднімання - (як і більшість математичних операцій) працює лише з числами, воно перетворює порожній рядок "" на 0.
Додавання з рядком додає до рядка число 5.
Віднімання завжди перетворюється на числа, тому " -9 " перетворюється на число -9 (ігноруючи пробіли навколо нього).
null стає 0 після числового перетворення.
undefined стає NaN після числового перетворення.
Коли рядок перетворюється на число, пробіли видаляються з початку та кінця рядка. Тут весь рядок складається з пробілів, таких як \t, \n і «звичайного» пробілу між ними. Таким чином, подібно до порожнього рядка, він стає 0.



NaN липкий. Будь-яка подальша математична операція над NaN повертає NaN:
    alert( NaN + 1 ); // NaN
    alert( 3 * NaN ); // NaN
    alert( "not a number" / 2 - 1 ); // NaN





Перетворення типів

Наприклад:

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

Please note: the string with zero "0" is true

Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


For example:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

Here’s a more complex example:

alert(2 + 2 + '1' ); // "41" and not "221"

Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"

Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

Here’s the demo for subtraction and division:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

Числове перетворення, унарний +

Наприклад:
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

The binary plus would add them as strings:


If we want to treat them as numbers, we need to convert and then sum them:

Насправді він виконує те саме, що й Number(...), але коротший.

Необхідність перетворення рядків в числа виникає дуже часто. Наприклад, якщо ми отримуємо значення з полів форми HTML, зазвичай це рядки. Що, якщо ми хочемо їх підсумувати?

Бінарний плюс додасть їх як рядки:

let apples = "2";
нехай апельсини = "3";

сповіщення (яблука + апельсини); // "23", двійковий плюс об'єднує рядки

Якщо ми хочемо розглядати їх як числа, нам потрібно перетворити, а потім підсумувати їх:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

Ось демонстрація, у якій присвоєння використовується як частина складнішого виразу:

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

Ланцюжок завдань

Ще одна цікава функція — це можливість ланцюжка завдань:

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

Змінити на місці

Нам часто потрібно застосувати оператор до змінної та зберегти новий результат у тій самій змінній.

Наприклад:
let n = 2;
n = n + 5;
n = n * 2;

This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8
alert( n ); // 16



let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

Decrement -- decreases a variable by 1:

    let counter = 2;
    counter--;        // works the same as counter = counter - 1, but is shorter
    alert( counter ); // 1

    Щоб побачити різницю, ось приклад:
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

Now, let’s use the postfix form:

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let counter = 0;
alert( ++counter ); // 1

If we’d like to increment a value but use its previous value, we need the postfix form:

    let counter = 0;
    alert( counter++ ); // 0


For instance:

let counter = 1;
alert( 2 * ++counter ); // 4

Compare with:

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

Tasks
The postfix and prefix forms
importance: 5

What are the final values of all variables a, b, c and d after the code below?

Assignment result
importance: 3

What are the values of a and x after the code below?


Fix the addition
importance: 5

Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

Ось код, який запитує у користувача два числа та показує їх суму.

Працює некоректно. Вихід у наведеному нижче прикладі становить 12 (для значень підказок за замовчуванням).

чому Виправ це. Результат має бути 3.


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

The reason is that prompt returns user input as a string.

So variables have values "1" and "2" respectively.

Причина в тому, що підказка повертає введені користувачем дані як рядок.

Отже, змінні мають значення «1» і «2» відповідно.

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12

What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.

For example, right before prompt:

Що ми повинні зробити, так це перетворити рядки на числа перед +. Наприклад, використовуючи Number() або додаючи перед ними +.

Наприклад, безпосередньо перед запитом:

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

Or in the alert:
Або в сповіщенні:

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

Using both unary and binary + in the latest code. Looks funny, doesn’t it?
Використання як унарного, так і двійкового + в останньому коді. Виглядає смішно, чи не так?

For example:

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

Результат порівняння можна призначити змінній, як і будь-якому значенню:

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

Іншими словами, рядки порівнюються буква за літерою.
Наприклад:

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

Під час порівняння значень різних типів JavaScript перетворює значення на числа.
Наприклад:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

For boolean values, true becomes 1 and false becomes 0.

For example:

Для логічних значень true стає 1, а false стає 0.

Наприклад:
alert( true == 1 ); // true
alert( false == 0 ); // true

A funny consequence

It is possible that at the same time:

    Two values are equal.
    One of them is true as a boolean and the other one is false as a boolean.

For example:

Кумедний наслідок
Можливо, що одночасно:
  Два значення рівні.
  Один із них є істинним як логічне значення, а інший є хибним як логічне значення.

Наприклад:
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

З точки зору JavaScript, цей результат цілком нормальний. Перевірка на рівність перетворює значення за допомогою числового перетворення (тому «0» стає 0), тоді як явне логічне перетворення використовує інший набір правил.

Strict equality

A regular equality check == has a problem. It cannot differentiate 0 from false:
alert( 0 == false ); // true

The same thing happens with an empty string:
alert( '' == false ); // true

Це відбувається через те, що операнди різних типів перетворюються на числа за допомогою оператора рівності ==. Порожній рядок, як і false, стає нулем.

Що робити, якщо ми хочемо відрізнити 0 від false?
Суворий оператор рівності === перевіряє рівність без перетворення типу.

Іншими словами, якщо a і b мають різні типи, то a === b негайно повертає false без спроби їх перетворити.

Let’s try it:
alert( 0 === false ); // false, because the types are different

There is also a “strict non-equality” operator !== analogous to !=.

The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

Comparison with null and undefined
There’s a non-intuitive behavior when null or undefined are compared to other values.

For a strict equality check ===
    These values are different, because each of them is a different type.
    alert( null === undefined ); // false

For a non-strict check ==

    There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
    alert( null == undefined ); // true

For maths and other comparisons < > <= >=

    null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

Яким буде результат цих виразів?

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

Some of the reasons:

    Obviously, true.
    Dictionary comparison, hence false. "a" is smaller than "p".
    Again, dictionary comparison, first char "2" is greater than the first char "1".
    Values null and undefined equal each other only.
    Strict equality is strict. Different types from both sides lead to false.
    Similar to (4), null only equals undefined.
    Strict equality of different types.

Conditional branching: if, '?'

Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.
The “if” statement

The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:

Деякі з причин:

     Очевидно, правда.
     Словникове порівняння, отже, хибне. "a" менше, ніж "p".
     Знову ж таки, словникове порівняння, перший символ «2» більший за перший символ «1».
     Значення null і undefined дорівнюють лише одне одному.
     Сувора рівність сувора. Різні типи з обох сторін призводять до помилки.
     Подібно до (4), null дорівнює лише undefined.
     Сувора рівність різних видів.

Умовне розгалуження: if, '?'

Іноді нам потрібно виконувати різні дії на основі різних умов.

Для цього ми можемо використати оператор if і умовний оператор ?, який також називають оператором «знак питання».
Твердження «якщо».

Оператор if(...) оцінює умову в дужках і, якщо результат істинний, виконує блок коду.

Наприклад:
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );

In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.

If we want to execute more than one statement, we have to wrap our code block inside curly braces:

У наведеному вище прикладі умова є простою перевіркою на рівність (рік == 2015), але вона може бути набагато складнішою.

Якщо ми хочемо виконати більше одного оператора, нам потрібно загорнути наш кодовий блок у фігурні дужки:

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.
Boolean conversion

The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

    A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
    Other values become true, so they are called “truthy”.

So, the code under this condition would never execute:

Ми рекомендуємо загортати блок коду у фігурні дужки {} щоразу, коли ви використовуєте оператор if, навіть якщо потрібно виконати лише один оператор. Це покращує читабельність.

Оператор if (…) обчислює вираз у дужках і перетворює результат на логічний.

Давайте згадаємо правила перетворення з глави Перетворення типів:

     Число 0, порожній рядок "", null, undefined і NaN стають помилковими. Через це їх називають «фальшивими» значеннями.
     Інші цінності стають істинними, тому їх називають «істинними».

Отже, код за цієї умови ніколи не виконається:

if (0) { // 0 is falsy
  ...
}

…and inside this condition – it always will:
…і в цій умові завжди буде:

if (1) { // 1 is truthy
  ...
}

We can also pass a pre-evaluated boolean value to if, like this:

Ми також можемо передати попередньо оцінене логічне значення if, наприклад:

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}

The “else” clause

The if statement may contain an optional else block. It executes when the condition is falsy.

For example:
Речення «інакше».

Оператор if може містити додатковий блок else. Він виконується, коли умова хибна.

Наприклад:
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

Several conditions: “else if”

Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

For example:
Кілька умов: «інакше, якщо»

Іноді ми хочемо перевірити кілька варіантів умови. Речення else if дозволяє нам це зробити.

Наприклад:

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

There can be more else if blocks. The final else is optional.
Conditional operator ‘?’

Sometimes, we need to assign a variable depending on a condition.

For instance:
У наведеному вище коді JavaScript спочатку перевіряє рік < 2015. Якщо це помилка, він переходить до наступної умови рік > 2015. Якщо це також помилково, відображається останнє сповіщення.

Може бути більше інших блоків. Фінал інше необов’язковий.
Умовний оператор «?»

Іноді нам потрібно призначити змінну залежно від умови.

Наприклад:
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

```html

```
Виклик typeof x повертає рядок із назвою типу:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

4. Встановити клас bg-dark для компонента navbar. Встановити темну тему для компонента navbar 

```html

```
Пробіли (включаючи пробіли, символи табуляції \t, символи нового рядка \n тощо) з початку та кінця видаляються. Якщо рядок, що залишився, порожній, результат дорівнює 0. В іншому випадку число «зчитується» з рядка. Помилка дає NaN.

приклади:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0



## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

