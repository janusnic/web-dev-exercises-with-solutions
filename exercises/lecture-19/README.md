# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №19 - String

В середині exercises створіть піддиректорію lecture-19. В середині lecture-19 створіть файли index.html та app.js

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

    <script src="app.js"></script>

</body>
</html>

```

1. Маємо код

```js

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

```
Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
## solution:
```js

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1 == str2); true
console.log(str1 === str2); true
console.log(str1.length == str2.length); true

```

2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt. 

```js
let string5 = 'Hello World';
```
## solution:
```js
// using indexing
let first1 = string5[0]; // output 'H' and remember that indexing starts at 0

// using the charAt() method
let first2 = string5.charAt(0); // output 'H'

```

3. повернути символ J рядка str3:

```js
// повернути символ J рядка:
let str3 = "Hello Javascript";
```
## solution:

```js
// повернути символ J рядка:
let str3 = "Hello Javascript";
console.log(str3[6]); // "J"

```
4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
## solution:
```js
// отримати доступ до останнього символу рядка
// використовуйте індекс length - 1:

let str4 = "Hello";
console.log(str4[str4.length -1]); // "o"

// використовуйте індекс length - 1:

console.log(str4[str4.length -1]); // "o"
```

5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка 

## solution:
```js
function lastChar(str) {
    return str[-1];
}

console.log(lastChar(str4)); // "o"

function lastChar(str) {
    return str.charAt(str.length -1);
}

console.log(lastChar(str4)); // "o"

function lastChar(str) {
    return str.charAt(str.length -1);
}
console.log(lastChar(str4)); // "o"

```

6. Маємо код
```js

let a = 'When candles are out,';
let b = 'all cats are grey.';

```
Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey
## solution:
```js

let a = 'When candles are out,';
let b = 'all cats are grey.';

let c = a.concat(' ', b);
console.log(c); // 'When candles are out, all cats are grey.'

```
7. Маємо код
```js
let fact = "Fifteen is the same as"
let a = 5;
let b = 10;

```
Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15
## solution:
```js
let fact = "Fifteen is the same as"
let a = 5;
let b = 10;

fact = "Fifteen is the same as " + (5 + 10);
console.log(fact);

```

8. Маємо код

```js
let firstName = "Tom";
let lastName = "Cat";
```
Напишіть функцію getFullName, що повертає результат: "Tom Cat" 
## solution:
```js
function getFullName (firstName, lastName) {
 return firstName + " " + lastName;
}
```
9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!

## solution:
```js
function greeting (firstName, lastName) {
 
 return "Hello, " + getFullName(firstName, lastName) + "!";

}
console.log(greeting (firstName, lastName));
```
10. Використовуючи функцію greeting, створити такий шаблон:
```html
<div><h1>Hello, Tom Cat!</h1></div>
```

## solution:
```js
let template = (
 "<div>" +
 "<h1>"+greeting (firstName, lastName)+"</h1>" +
 "</div>"
);

console.log(template);

```
11. Маємо наступний код: 
```js
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

```
## solution:
```js
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

console.log(string1.trim());
string.trimStart()
string.trimEnd()

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

phoneNumber.trim(); // => '555-123'
phoneNumber.trimStart(); // => '555-123 \n'

```
12. Маємо наступний код: 
```js
let sentence = 'Always look on the bright side of life';

```
  - Перевірити, чи містить рядок значення 'look up'
  - Перевірити, чи містить рядок значення 'look on'
  - Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції

## solution:
```js
sentence.includes('look up'); // false 
sentence.includes('look on'); // true
sentence.includes('look on', 8); // false
```

13. Маємо наступний код
```js
let sentence = 'Always look on the bright side of life';

```
  - Знайти індекс символу  'l'
  - Знайти індекс символу  'l', починаючи з 3-ї позиції 
  - Знайти індекс символу  'L'

## solution:
```js
sentence.indexOf('l'); // 1
sentence.indexOf('l', 2); // 7
sentence.indexOf('L'); // -1
```

14. Маємо наступний код:
```js
let sentence = 'Always look on the bright side of life';

```
  - Отримати підрядок 'look on the bright side of life'
  - Отримати підрядок 'Always'
  - Отримати підрядок 'look'

## solution:
```js
sentence.slice(7); // 'look on the bright side of life'
sentence.substring(7); // 'look on the bright side of life'

sentence.slice(0, 6); // 'Always'
sentence.substring(0, 6); // 'Always'

let sentence = 'Always look on the bright side of life';

sentence.substring(11, 7); // 'look'
sentence.slice(11, 7); // ''
```

15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків. 
## solution:
```js

let pattern = /^[a-z0-9_-]{8,16}$/;
let user = "tom_cat1";

const found = user.match(pattern);
console.log(found)

```

16. Створити регулярний вираз, який призначений для перевірки email  на коректність.
## solution:
```js
// /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
let email = "tom@my.cat";
console.log(email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i))
```

17. Маємо наступний код:
```js
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

```

  - Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
## solution:
```js
function truncateText(text) {
  var truncated = text.substring(0, 50) + "...";
   return truncated;
}
```
  - Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
## solution:
```js
function truncateText(text) {
  var truncated = text.substr(0, 50) + "...";
   return truncated;
}
```
