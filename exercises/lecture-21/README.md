# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №21 - Array

В середині exercises створіть піддирексторію lecture-21. В середині lecture-21 створіть файли index.html та app.js

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

Маємо рядок fruits:
```js
const fruits = 'apple banana cantaloupe blueberries grapefruit';

```
1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
```js
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(', ');

```
2. Використовуючи цикл for вивести на консоль список елементів з масиву fruits.  

```js
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(', ');
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  console.log(fruit);
}
```
3. Використовуючи цикл while вивести на консоль список елементів з масиву fruits.  
```js
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(', ');

let j = 0;
while (j < fruits.length) {
    console.log(fruits[j]);
    j++;
}

```

4. Використовуючи цикл do...while вивести на консоль список елементів з масиву fruits.  
```js
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(', ');
let k = 0;
do {
    console.log(fruits[k]);
    k++;
} while(k < fruits.length);
```
5. Використовуючи цикл for...of вивести на консоль список елементів з масиву fruits.  
```js
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(', ');
for (const fruit of fruits) {
 console.log(fruit);
}

```
6. Маємо масив Numbs. 

```js
const Numbs = [1,2,3,4,5,6,7,8,9,10];

```
Використовуючи цикл for вивести на консоль парні елементи з масиву Numbs.  

```js
const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 == 0) {
        console.log(Numbs[i]);
    }
}

```

7. Маємо масив names:

```js
const names = ['Batman'];
```
Додати 'Joker' в кінець масиву names:

```js
const names = ['Batman'];
names.push('Joker');
names; // ['Batman', 'Joker']

const names2 = [
  ...names,
  'Batman',
];

```
8. Маємо масив names:

```js
const names = ['Batman'];
```
Додати 'Joker' на початок масиву names

```js
const names = ['Batman'];
names = [
  'Joker',
  ...names
];
```

9. Маємо масив names:

```js
names = ['Batman', 'Joker', 'Bane'];
```
Додати 'Catwoman' на початок масиву names, використовуючи метод unshift

```js
names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman')
```

10. Маємо масив names:

```js
names = ['Batman', 'Joker', 'Bane'];
```
Додати 'Catwoman' на початок масиву names, використовуючи оператор ...

```js
names = ['Batman', 'Joker', 'Bane'];
names = [
  'Catwoman',
  ...names
];
```

11. Маємо масив names

```js
names = ['Batman', 'Joker', 'Bane'];
```
Додати до names елемент 'Catwoman', розмістивши його з індексом 1 

```js
names = ['Batman', 'Joker', 'Bane'];

names = [
  ...names.slice(0, 1),
  'Catwoman',
  ...names.slice(1)
];

```

12. Маємо масив names

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
```
Видалити елементи 'Catwoman' і 'Joker' з масиву names:

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1, 2);
```

13. Маємо масив names:
```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
```
Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names.splice(1, 2, 'Alfred');
names; // => ['Batman', 'Alfred' ,'Bane']
```

14. Маємо масив names:

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
```
Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву. 

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

var index = names.indexOf('Alfred');

if(index == -1){
    names.push('Alfred');
}
```

15. Маємо масив names:

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
```
Перевірити чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву. 

```js
const names = ['Batman', 'Catwoman', 'Joker', 'Alfred', 'Bane'];

if(names.includes('Alfred')){
    let i = names.indexOf('Alfred');
    names.splice(i,1)    
}

```
