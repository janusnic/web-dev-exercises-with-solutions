# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №20 - Array

1. В середині exercises створіть піддирексторію lecture-20. В середині lecture-20 створіть файли index.html та README.md

Відредагуйте файл index.html

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

    <script src="main.js"></script>
</body>
</html>

```
2. Підключити Bootstrap-компонент navbar

```html

```

3. Встановити клас bg-primary для компонента navbar. Встановити темну тему для компонента navbar

```html

```

4. Встановити клас bg-dark для компонента navbar. Встановити темну тему для компонента navbar 

```html

```

5. Встановити style="background-color: #e3f2fd;" компонента navbar

```html

```
6. Підключити на сторінку компонент accordion
```html

```
7. Підключити на сторінку компонент breadcrumb
```html

```
8. Створити та підключити на сторінку компонент Sticky footer

Метод .sort() сортує дані за алфавітом і числом у порядку зростання або спадання. За замовчуванням .sort() сортує дані в алфавітному порядку за зростанням. Це означає, що «Audi» передує «BMW» (нічого нового, насправді). Крім того, типовим і єдиним типом даних для .sort() є рядок. Це означає, що він не сортуватиме числа чи об’єкти.

const arr = ['BMW', 'Mercedes', 'Audi', 'Citroen', 'Ferrari'];
 
arr.sort();
 
console.log(arr);
//Result:
//['Audi', 'BMW', 'Citroen', 'Ferrari', 'Mercedes']

Якщо ми надамо масив із числами, метод сортування JavaScript перетворить кожне число на рядок, тож ми можемо отримати досить несподівані результати.

const arr = [128, 1, 333, 1000, 10, 100];
 
arr.sort();
//Result: 
//[1, 10, 100, 1000, 128, 333]

Як ми бачимо в наведеному вище прикладі, числа розташовані не в правильному очікуваному порядку. Це тому, що число перетворюється на UTF-16. Через це «1000» стоїть перед «100» у порядку Unicode.

Як сортувати числа за допомогою методу сортування JavaScript
Існує спосіб обійти цю проблему з числами. .sort() прийматиме функції порівняння. Це означає, що якщо ми надамо якусь функцію, яка буде порівнювати числа, числа не будуть перетворені на рядки.

Функція порівняння приймає два параметри a і b (ми можемо називати їх як завгодно). Це два елементи з масиву (це робиться автоматично). Ця функція може повертати негативні, нульові або позитивні результати.

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
 
//Result:
// [1, 2, 3, 4, 5]
 
numbers.sort(function(a, b) {
  return b-a;
});
console.log(numbers);
 
//Result:
// [5, 4, 3, 2, 1]
 
 
numbers.sort(function(a, b) {
  return b===a;
});
console.log(numbers);
 
//Result:
// [4, 2, 5, 1, 3]

Як ми бачимо у прикладі вище, застосовуються наступні правила:

якщо ми використовуємо такі функції, як function(a,b) { a - b }, масив буде відсортовано в порядку зростання.
якщо ми використовуємо функцію типу function(a,b) { b - a }, масив буде відсортовано в порядку спадання.
якщо ми використовуємо такі функції, як function(a,b) { a === b }, порядок масиву не зміниться (майте на увазі, що .sort() змінює вихідний масив).
якщо ми використовуємо такі функції, як function(a,b) { b === a }, порядок масиву не зміниться.
У нашому наступному тексті ми розглянемо, як упорядкувати деякі інші типи даних, такі як об’єкти.

Якщо у вас є будь-які запитання або щось інше, ви можете знайти мене в моєму Twitter, або ви можете прочитати деякі з моїх інших статей, як-от SQL проти NoSQL. Практичне пояснення, ніби мені 5.

```html

```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

