# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №24 - Замикання у JavaScript

В середині exercises створіть піддиректорію lecture-24. В середині lecture-24 створіть файли index.html та app.js

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
1. Маємо масив кольорів
```js
// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];
```

Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль.
Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору:
```js
function iter(item) {
  console.log(item);
}

// Використаємо forEach() для виводу в консоль кожного кольору:
colors.forEach(iter);
```

2. Маємо масив кольорів
```js
// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];
```
Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". Функції повинна видавати повідомлення на консоль за допомогою  шаблонних літералів. Повідомлення має містити значення «item» і значення «index» - ${item} has index ${index}. 
Використовуючи forEach() та функцію iterate, вивести в консоль значення кожного кольору:
```js
function iterate(item, index) {
    console.log(`${item} has index ${index}`);
}

colors.forEach(iterate);
```

Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!' коли функція виконує останню ітерацію для елементів colors.
```js
function iterate(item, index, array) {
    console.log(item);
      if (index === array.length - 1) {
        console.log('The last iteration!');
      }
}
   
colors.forEach(iterate);
```

3. Маємо масив letters

```js
const letters = ['a', 'b', 'c'];
```
Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об’єкту «window».
Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об’єкту «window».

```js
const letters = ['a', 'b', 'c'];

function iterate(letter) {
    console.log(this === window); // true
}

letters.forEach(iterate); // logs 3 times "true"

```


4. Маємо масив під назвою Numbers.

```js
const Numbers = [22, 3, 4, 10];
```
Встановити, чи всі числа масиву парні методом forEach()
```js
const Numbers = [22, 3, 4, 10];
Numbers.forEach(function(number) {
    if (number % 2 === 1) {
        console.log(Число number не є парним); 
    }
});

```

5. Маємо масив під назвою numbers.

```js
const numbers = [22, 3, 4, 10];
```
Встановити, чи всі числа масиву парні методом every()

```js

// змінна "allEven" буде істиною, якщо кожне число в масиві "numbers" є парним, і false в іншому випадку.
const allEven = numbers.every(function(number) {
    return number % 2 === 0;
});

console.log(allEven); // => false
```

6. Маємо масив під назвою fruits
```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

```
Використовуючи метод findIndex, знайти індексу першого елемента в масиві, який задовольняє  умову fruit === "blueberries".

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

```

7. Маємо масив під назвою arr
```js
const arr = [7, 33, 47, 99, 2, 103, 79];

```
Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє  умову елемент > 10.

```js
const arr = [7, 33, 47, 99, 2, 103, 79];
const foundElement = arr.find(element => element > 10);
console.log(foundElement); // 33
```

8. Маємо масив під назвою array
```js
const array = [1, 2, 3, 4, 5];

```
Використовуючи метод some, перевірте чи існує принаймні один елемент у масиві array, що є парним.
```js

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0; // checks whether an element is even

console.log(array.some(even)); // true

```

9. Маємо масив під назвою numbers
```js
const numbers = [1, 30, 4, 21, 100000];
```
Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.

```js
const numbers = [1, 30, 4, 21, 100000];

numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]

```
