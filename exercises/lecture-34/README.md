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

Спробуйте кілька завдань
Завдання 1 із 4:

Експортуйте компонент

Ця пісочниця не працює, оскільки кореневий компонент не експортовано:

function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

Error

Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

Try to fix it yourself before looking at the solution!

Помилка

Тип елемента недійсний: очікувався рядок (для вбудованих компонентів) або клас/функція (для складених компонентів), але отримано: об’єкт. Ймовірно, ви забули експортувати свій компонент із файлу, у якому він визначений, або переплутали стандартний і названий імпорт.

Спробуйте виправити це самостійно, перш ніж дивитися на рішення!

Challenge 2 of 4:

Fix the return statement

Something isn’t right about this return statement. Can you fix it?

Виправте заяву про повернення

Щось не так із цією заявою про повернення. Ви можете це виправити?

export default function Profile() {
  return
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

Challenge 3 of 4:

Spot the mistake

Something’s wrong with how the Profile component is declared and used. Can you spot the mistake? (Try to remember how React distinguishes components from the regular HTML tags!)

Знайди помилку

Щось не так із тим, як оголошено та використано компонент Profile. Чи можете ви помітити помилку? (Спробуйте згадати, як React відрізняє компоненти від звичайних тегів HTML!)

function profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <profile />
      <profile />
      <profile />
    </section>
  );
}

Challenge 4 of 4:

Your own component

Write a component from scratch. You can give it any valid name and return any markup. If you’re out of ideas, you can write a Congratulations component that shows <h1>Good job!</h1>. Don’t forget to export it!

Ваш власний компонент

Напишіть компонент з нуля. Ви можете дати йому будь-яку дійсну назву та повернути будь-яку розмітку. Якщо у вас не вистачає ідей, ви можете написати компонент «Вітаємо», який покаже <h1>Гарна робота!</h1>. Не забудьте експортувати його!

// Write your component below!


Error

Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

Помилка

Тип елемента недійсний: очікувався рядок (для вбудованих компонентів) або клас/функція (для складених компонентів), але отримано: об’єкт. Ймовірно, ви забули експортувати свій компонент із файлу, у якому він визначений, або переплутали стандартний і названий імпорт.

Компоненти можуть відтворювати інші компоненти, але ви ніколи не повинні вкладати їх визначення:

export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}

The snippet above is very slow and causes bugs. Instead, define every component at the top level:

Наведений вище фрагмент дуже повільний і викликає помилки. Замість цього визначте кожен компонент на верхньому рівні:

export default function Gallery() {
  // ...
}

// ✅ Declare components at the top level
function Profile() {
  // ...
}

```js

```

2. Маємо масив кольорів
```js

```

Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!' коли функція виконує останню ітерацію для елементів colors.
```js

```

3. Маємо масив letters

```js

```
Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об’єкту «window».
Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об’єкту «window».

```js


```


4. Маємо масив під назвою Numbers.

```js

```
Встановити, чи всі числа масиву парні методом forEach()
```js


```

5. Маємо масив під назвою numbers.

```js

```
Встановити, чи всі числа масиву парні методом every()

```js


```

6. Маємо масив під назвою fruits
```js

```
Використовуючи метод findIndex, знайти індексу першого елемента в масиві, який задовольняє  умову fruit === "blueberries".

```js

```

7. Маємо масив під назвою arr
```js


```
Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє  умову елемент > 10.

```js

```

8. Маємо масив під назвою array
```js


```
Використовуючи метод some, перевірте чи існує принаймні один елемент у масиві array, що є парним.
```js


```

9. Маємо масив під назвою numbers
```js

```
Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.

```js


```


Try out some challenges
Challenge 1 of 1:
Split the components further

Currently, Gallery.js exports both Profile and Gallery, which is a bit confusing.

Move the Profile component to its own Profile.js, and then change the App component to render both <Profile /> and <Gallery /> one after another.

You may use either a default or a named export for Profile, but make sure that you use the corresponding import syntax in both App.js and Gallery.js! You can refer to the table from the deep dive above:
Syntax  Export statement    Import statement
Default export default function Button() {} import Button from './Button.js';
Named   export function Button() {} import { Button } from './Button.js';

Спробуйте кілька завдань
Завдання 1 із 1:
Поділіть компоненти далі

Зараз Gallery.js експортує як профіль, так і галерею, що трохи заплутано.

Перемістіть компонент Profile до його власного Profile.js, а потім змініть компонент App, щоб відтворювати <Profile /> і <Gallery /> один за одним.

Ви можете використовувати стандартний або іменований експорт для Profile, але переконайтеся, що ви використовуєте відповідний синтаксис імпорту в обох App.js і Gallery.js! Ви можете звернутися до таблиці з глибокого занурення вище:
Синтаксис Оператор експорту Оператор імпорту
Типова функція експорту за замовчуванням Button() {} import Button from './Button.js';
Іменована функція експорту Button() {} import { Button } from './Button.js';

import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

// Move me to Profile.js!
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
After you get it working with one kind of exports, make it work with the other kind.
Після того, як ви змусите його працювати з одним типом експорту, змусьте його працювати з іншим видом.


Try out some challenges
Challenge 1 of 3:
Fix the mistake

This code crashes with an error saying Objects are not valid as a React child:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

Error

Objects are not valid as a React child (found: object with keys {name, theme}). If you meant to render a collection of children, use an array instead.

Challenge 2 of 3:
Extract information into an object

Extract the image URL into the person object.
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

Challenge 3 of 3:
Write an expression inside JSX curly braces

In the object below, the full image URL is split into four parts: base URL, imageId, imageSize, and file extension.

We want the image URL to combine these attributes together: base URL (always 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), and file extension (always '.jpg'). However, something is wrong with how the <img> tag specifies its src.

Can you fix it?
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

To check that your fix worked, try changing the value of imageSize to 'b'. The image should resize after your edit.

# Вправи: Компоненти

## Вправи: Рівень 1

1. Яка різниця між звичайною функцією та функцією зі стрілкою?
2. Що таке компонент React?
3. Як створити функціональний компонент React?
4. Яка різниця між чистою функцією JavaScript і функціональним компонентом?
5. Наскільки малий компонент React?
6. Чи можемо ми створити кнопку або компонент поля введення?
7. Створіть багаторазовий компонент Button.
8. Створіть багаторазовий компонент InputField.
9. Створіть багаторазовий компонент вікна сповіщень з одним батьківським елементом div і одним дочірнім елементом p div (вікно попередження, вікно сповіщення про успіх).

## Вправи: Рівень 2

1. Створіть функціональні компоненти та відобразіть наступні зображення
    ![Інтерфейс](../images/frontend_technologies.png)

2. Використовуйте функціональний компонент для створення наступного дизайну

![Лист новин](../images/news_letter_design.png)

## Вправи: Рівень 3

1. Використовуйте поданий у прикладі шістнадцятковий генератор кольорів, щоб створити ці випадкові кольори

![Шістнадцяткові кольори](../images/hexadecimal_color_exercise.png)

2. Використовуйте функціональний компонент для розробки такої картки користувача.
   ![User Card](../images/user_card_design_jsx.png)

# Exercises: Components and Props

## Exercises: Level 1

1. What is props in a React component ?
2. How do you access props in a React component ?
3. What data types can we pass as props to components ?
4. What is a propTypes?
5. What is a default propTypes?

## Exercises: Level 2

1. Create a functional component and display the following images
   ![Front end](../images/frontend_technologies.png)

2. Use functional component to create the following design

![News Letter](../images/news_letter_design.png)

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors. If you don't know how to generate the hexadecimal color you can use [dummy data generator](https://www.30daysofreact.com/dummy-data)

![Hexadecimal colors](../images/hexadecimal_color_exercise.png)

2. Use functional component to design the following user card.

## propTypes

Пакет propTypes допомагає нам призначати типи даних реквізитів, які ми передали компоненту.

## defaultProps

Стандартні властивості можна використовувати, коли ми хочемо мати типові властивості компонента.

Ми детально розглянемо propTypes в інших розділах.

# Вправи: Компоненти та опори

## Вправи: Рівень 1

1. Що таке props у компоненті React?
2. Як отримати доступ до пропсів у компоненті React?
3. Які типи даних ми можемо передати компонентам як атрибути?
4. Що таке propTypes?
5. Що таке propTypes за замовчуванням?

## Вправи: Рівень 2

1. Створіть функціональний компонент і відобразіть наступні зображення
    ![Інтерфейс](../images/frontend_technologies.png)

2. Використовуйте функціональний компонент для створення наступного дизайну

![Лист новин](../images/news_letter_design.png)

## Вправи: Рівень 3

1. Використовуйте поданий у прикладі шістнадцятковий генератор кольорів, щоб створити ці випадкові кольори. Якщо ви не знаєте, як створити шістнадцятковий колір, ви можете скористатися [фіктивним генератором даних](https://www.30daysofreact.com/dummy-data)

![Шістнадцяткові кольори](../images/hexadecimal_color_exercise.png)

2. Використовуйте функціональний компонент для розробки такої картки користувача.
![User Card](../images/user_card_design_jsx.png)