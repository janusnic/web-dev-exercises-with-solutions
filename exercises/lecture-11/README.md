# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №11 - Модуль Grid



1. В середині exercises створіть піддирексторію lecture-11. В середині lecture-11 створіть файли index.html та README.md


  - Відредагуйте файл index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lecture №11 - Модуль Grid</title>

	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    
    <style>

        main div:nth-of-type(1) {
            background-color: #c9316b;
        }
        main div:nth-of-type(2) {
            background-color: #c9319e;
            grid-column: 2;
        }
        main div:nth-of-type(3) {
            background-color: #c231c9;
        }
        main div:nth-of-type(4) {
            background-color: #8f31c9;
        }
        main div:nth-of-type(5) {
            background-color: #5c31c9;
        }
        main div:nth-of-type(6) {
            background-color: #3138c9;
        }
        main div:nth-of-type(7) {
            background-color: #316bc9;
        }
        main div:nth-of-type(8) {
            background-color: #319ec9;
        }
        main div:nth-of-type(9) {
            background-color: #31c9c2;
        }
        main div:nth-of-type(10) {
            background-color: #31c98f;
        }
        main div:nth-of-type(11) {
            background-color: #31c95c;
        }
        main div:nth-of-type(12) {
            background-color: #38c931;
        }

        main {
            margin: 2vw 0;
        }
            
        main div {
            color: #fff;
            padding: 5vh;
        }
      </style>
</head>
<body>
  <header>
	  <h1>CSS Grid Layout</h1>
  </header>

  <main>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </main>

</body>
</html>

```
  - створити grid-контейнер з трьох стовпців шириною 15%, 60%, 25%
```css
main {
  display: grid;
  grid-template-columns: 15% 60% 25%;
}
```
  - створити grid-контейнер з трьох рядків висотою 95px 1fr 70px
```css
main {
  display: grid;
  grid-template-rows: 95px 1fr 70px;
}
```
  - створити grid-контейнер з трьох рядків висотою 90px 300px 1fr і чотирьох стовпців однакової ширини
```css
main {
  display: grid;
  grid-template-rows: 90px 300px 1fr;
  grid-template-columns: auto auto auto auto;
}
```
  - створити grid-контейнер з чотирьох стовпців однакової ширини та розмістити стовпці в центрі контейнера
```css
main {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
}
```
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px та розташуйте стовпці в кінці рядка grid-контейнера
```css
main {
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(4, 50px);
}
```
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px.
  - розташуйте стовпці, встановивши рівномірну відстань між кожною парою стовпців
```css
main {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 50px);
}
```
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px
  - розташуйте стовпці, встановивши однакові відстані для кожної сторони стовпців
```css
main {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 50px);
}
```
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px
  - призначте рівномірні відстані до обох кінців grid-контейнера та між стовпцями
```css
main {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, 50px);
}
```
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть вирівнювання за замовчуванням для всіх елементів grid-контейнер.
```css
main {
  display: grid;
  justify-items: stretch;
  grid-template-columns: 1fr 1fr;
}
```
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть вирівнювання у напрямку до початкового краю grid-контейнер для всіх елементів.
```css
main {
  display: grid;
  justify-items: start;
  grid-template-columns: 1fr 1fr;
}
```
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть вирівнювання у напрямку центру grid-контейнер для всіх елементів.
```css
main {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
```
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть рівномірну відстань між кожною парою рядків grid-контейнера.
```css
main {
  display: grid;
  align-content: space-between;
  grid-template-columns: 1fr 1fr;
}
```
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть рівномірну відстань до обох кінців контейнера сітки та між його рядками.

```css
main {
  display: grid;
  align-content: space-evenly;
  grid-template-columns: 1fr 1fr;
}
```

Що таке justify-self: stretch у CSS Grid?
stretch — це значення за замовчуванням для вирівнювання. Він розтягує вибраний елемент сітки, щоб заповнити вісь рядка (вбудованої) клітинки.

Ілюстрація значення розтягування justify-self у CSS Grid
значення розтягування justify-self розтягує вибраний елемент сітки, щоб заповнити вісь рядка комірки

Ось приклад:

.grid-item1 {
  justify-self: stretch;
}

Початкове значення justify-self розташовує вибраний елемент сітки до краю початку рядка комірки

Ось приклад:


.grid-item1 {
  justify-self: start;
}

значення justify-self: center розміщує вибраний елемент сітки в центр його комірки
Ось приклад:

.grid-item1 {
  justify-self: center;
}
Приклад 2: як почати вибраний елемент сітки з рядка стовпця 3
.grid-item1 {
  grid-column-start: 3;
}

Приклад 2: Як завершити вибраний елемент сітки в рядку стовпця 3
.grid-item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
Приклад 3: як розділити вибраний елемент сітки на два стовпці

.grid-item1 {
  grid-column-start: 2;
  grid-column-end: span 2;
}

Іншими словами, замість того, щоб писати:

.grid-item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}

You can alternatively use the grid-column property to shorten your code like so:

.grid-item1 {
  grid-column: 1 / 3;
}

How to use grid-area to specify a grid item's name
Here is the syntax for using the grid-area property to specify a grid item's name:

.your-grid-item {
  grid-area: item-name;
}

Here's an example:

.grid-item1 {
  grid-area: firstDiv;
}

.grid-item2 {
  grid-area: middleDiv;
}

.grid-item2 {
  grid-area: lastDiv;
}
<section>
  <div class="grid-item1">1</div>
  <div class="grid-item2">2</div>
  <div class="grid-item3">3</div>
</section>

Використання grid-area для визначення іменованого елемента сітки дозволяє властивості grid-template-areas вашого контейнера grid використовувати назву для встановлення розміру та розташування елемента.

Що таке властивість grid-template-areas CSS Grid?
grid-template-areas визначає область, де ви хочете розмістити іменовані елементи сітки в контейнері сітки.

Пам’ятайте: ми використовуємо властивість CSS grid-area для іменування елементів сітки.

Приклад 1: як розмістити іменований елемент сітки між трьома стовпцями

.grid-item1 {
  grid-area: firstDiv;
}

section {
  display: grid;
  grid-template-areas: "firstDiv firstDiv firstDiv . .";
  background-color: orange;
  margin: 50px;
}


The snippet above used the grid-template-areas property to place grid-item1 across the first three column areas.

Note the following:

Quotation marks ("") define each grid row.
A period symbol (.) defines an unnamed grid item.
We used the whitespace character to separate grid columns.
Example 2: How to specify multiple named grid items' placements

Наведений вище фрагмент використав властивість grid-template-areas для розміщення grid-item1 у перших трьох областях стовпців.

Зверніть увагу на наступне:

Лапки ("") визначають кожен рядок сітки.
Символ точки (.) визначає елемент сітки без назви.
Ми використовували пробіл для розділення стовпців сітки.

Приклад 2: Як вказати розміщення кількох іменованих елементів сітки

.grid-item1 {
  grid-area: header;
}

.grid-item2 {
  grid-area: article;
}

.grid-item3 {
  grid-area: footer;
}

.grid-item4 {
  grid-area: sidebar;
}

.grid-item5 {
  grid-area: ads1;
}

.grid-item6 {
  grid-area: ads2;
}

.grid-item7 {
  grid-area: ads3;
}

section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas:
    "header header header header header"
    "sidebar article article article ads1"
    "sidebar article article article ads1"
    "sidebar article article article ads1"
    "sidebar article article article ads2"
    "sidebar article article article ads3"
    "sidebar footer footer footer footer";
  background-color: orange;
  margin: 30px;
}


## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).
