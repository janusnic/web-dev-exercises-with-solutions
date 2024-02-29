# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions

## Exercises for lecture №17 - Розгалуження. логічний тип.

1. В середині exercises створіть піддиректорію lecture-17. В середині lecture-17 створіть файл index.html.
  1. Визначити результат наступних логічних виразів
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	
</head>
<body>
   
  <script>

  let x = 3
  let y = 4

  x == 3
  x === "3"
  x!=5
  x!== "5"
  X!== 3
  y > 5
  y >= 3
  y < 5
  y <= 2
  1 == true
  null == undefined
  NaN == NaN

  </script>

</body>
</html>

```
## Solution:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	
</head>
<body>
   
  <script>

  let x = 3
  let y = 4

  x == 3 //true
  x === "3" //false
  x!=5 //true
  x!== "5" //true
  X!== 3 //false
  y > 5 //false
  y >= 3 //true
  y < 5 //true
  y <= 2 //false
  1 == true // true
  null == undefined // true
  NaN == NaN // false

  </script>

</body>
</html>

```
2. Визначити результат наступних логічних виразів

```js
let x = 3;
let y = 4;
let z = 5;

x ||= y;
x || (y = z);
x &&= y;
x && (y = z);
x ??= y;
x ?? (y = z);

```
## Solution:
```js
let x = 3;
let y = 4;
let z = 5;

x ||= y; // 3
x || (y = z); // 3
x &&= y; // 4
x && (y = z); // 5
x ??= y; // 4
x ?? (y = z); // 4

```
3. Напишіть програму, що пропонує користувачеві вгадати якесь число, наприклад 3. У разі успіху, потрібно вивести вітання користувачеві, наприклад - 'Congratulations, You did it!'
Якщо число більше за 3, потрібно вивести повідомлення користувачеві, наприклад - 'The number is too long'
Якщо число менше за 3, потрібно вивести повідомлення користувачеві, наприклад - 'The number is short'
## Solution:
```js
const number = 3;

let guess = prompt("Guess the number")
if (+guess > number) {
  alert('The number is too long');
} else if (+guess < number) {
  alert('The number is short');
}
else {
  alert('Congratulations, You did it!');
}
```
4. Напишіть програму, що пропонує користувачеві ввести назву дня неділі, наприклад - Понеділок. 
Якщо користувач ввів Понеділок або Monday, вивести повідомлення "Start of the work week!"
Якщо користувач ввів П'ятниця або Friday, вивести повідомлення "End of the work week!"
В інших випадках вивести повідомлення "A regular day"
  1. Напишіть версію програми, застосовуючи оператор if else  
  2. Напишіть версію програми, застосовуючи оператор switch  
## Solution 1:
```js
let day = prompt("Enter week's day");

if (day == "Monday" || day == "Понеділок") {
  alert("Start of the work week!");
}
else if (day == "Friday" || day == "П'ятниця") {
  alert("End of the work week!");
}
else  {
  alert("A regular day");
}

```
## Solution 2:
```js
let day = prompt("Enter week's day");
switch (day) {
  case "Monday":
  case "Понеділок":
    alert("Start of the work week!");
    break;
  case "Friday":
  case "П'ятниця":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
}
```
5.За результатами іспиту студент набирає певну кількість балів, що зберігається в змінній score. Напишіть програму, що аналізує значення score, та призначає студенту ступінь grade за таким алгоритмом: 
  - Якщо студент набрав менше 50 балів, призначити йому ступінь 'F'
  - Якщо студент набрав менше 70 балів, призначити йому ступінь 'D'
  - Якщо студент набрав менше 80 балів, призначити йому ступінь 'C'
  - Якщо студент набрав менше 90 балів, призначити йому ступінь 'B'
  - В іншому випадку призначити йому ступінь 'A'
  
  1. Напишіть версію програми, застосовуючи оператор if else  
  2. Напишіть версію програми, застосовуючи тернарний оператор
## Solution 1:
```js
let score = '67';

let grade;

if (score < 50) {
  grade = 'F';
} else if (score < 70) {
  grade = 'D'
} else if (score < 80) {
  grade = 'C'
} else if (score < 90) {
  grade = 'B'
} else {
  grade = 'A'
}

console.log(grade); // "D"
```
## Solution 2:
```js
let score = '67';
let grade1 = score < 50 ? 'F'
  : score < 70 ? 'D'
  : score < 80 ? 'C'
  : score < 90 ? 'B'
  : 'A';

console.log(grade); // "D"
```


6. Виправити помилку у наступному коді
```js

let firstName = null;
let lastName = undefined;
let username = firstName || lastName ?? "Guest";

console.log(username); // "Guest"

```

## solution:
```js
let firstName = null;
let lastName = undefined;
let username = (firstName || lastName) ?? "Guest";

console.log(username); // "Guest"

```
