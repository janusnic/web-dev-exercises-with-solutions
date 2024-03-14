# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №22 - об'єктна модель документа

В середині exercises створіть піддиректорію lecture-22. В середині lecture-22 створіть файли index.html. app.css та app.js

## Вміст index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lecture №22 - об'єктна модель документа</title>
	 <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
   <link rel="stylesheet" href="app.css">
</head>
<body>

    <div class="container">
        <header>
            <h1 class='title' id='first-title'>First Title</h1>
        </header>
        
        <p id="p1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.</p>
    </div>
    
    <div class="container">
        <header>
            <h1 class='title' id='second-title'>Second Title</h1>
        </header>
        
        <p id="p2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.</p>
    </div>
    
    <div class="container">
        <header>
            <h1 class='title' id='third-title'>Third Title</h1>
        </header>
        
        <p id="p3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.</p>
    </div>
    
    <div class="container">
        <header>
            <h1 class='title' id='fourth-title'>Fourth Title</h1>
        </header>
    
        <p id="p4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.</p>
    </div>

    <script src="app.js"></script>
</body>
</html>

```

## Вміст app.css:
```css
.first {
    color: red;
}
.second {
    color: blue;
}
.third {
    color: green;
    background-color: yellow;
}

.fourth {
    color: gray;
    
}
.border {
    border: solid red 1px;
}

.title {
    padding: 1rem 2rem;
    border: double 2px violet;
}
```
## Вміст app.js

```js
const classes = ['first', 'second', 'third', 'fourth'];
```

1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

## solution:
```js
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

2. Отримати перший абзац за допомогою **_document.querySelector('#id')_** за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"

## solution:
```js
const p1 = document.getElementById('p1');
p1.style.backgroundColor = "gold";

```
3. Отримати другий абзац за допомогою **_document.querySelector('#id')_** за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;

## solution:
```js
const p2 = document.getElementById('p2');
p2.style.cssText = "background-color:gold; color: blue; font-size: 2rem;";

```
4. Отримати третій абзац за допомогою **_document.querySelector('#id')_** за його ідентифікатором p3. Призначити для нього клас third 

## solution:
```js

const p3 = document.getElementById('p3');
p3.className = "third";

```
## solution:
5. Отримати четвертий абзац за допомогою **_document.querySelector('#id')_** за його ідентифікатором p4. Призначити для нього класи fourth та border

```js
const p4 = document.getElementById('p4');
p4.classList.add('fourth', 'border');
```

6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів. 
## solution:
```js
const containers = document.getElementsByClassName('container');

for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild); 
}

```
7. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів. 
## solution:
```js
const containers = document.getElementsByClassName('container');

for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild.firstElementChild.outerHTML); 
}

```
8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином
- перший залишити h1
- другий замінити на h2
- третій замінити на h3
- четвертий замінити на h4
зберегти початкові атрибути id та class

Використовуючи цикл for для колекції headers та масив classes, додати  до отриманих тегів-заголовків класи таким чином
- до h1 додати клас first
- до h2 додати клас second
- до h3 додати клас third
- до h4 додати клас fourth

## solution:
```js
const headers = document.querySelectorAll('.container header');

for (let i = 0; i < headers.length; i++) {
    
    let html = headers[i].firstElementChild;
    
    let text = html.textContent;
    let currentId = html.getAttribute('id');
    let currentClass = html.getAttribute('class');
    
    let newHtml = "<h"+(i+1)+">"+text+"</h"+(i+1)+">";

    headers[i].innerHTML = newHtml;
    headers[i].firstElementChild.setAttribute('id', currentId);
    headers[i].firstElementChild.setAttribute('class', currentClass);

    console.log(headers[i].firstElementChild.getAttribute('id')); 
    console.log(headers[i].firstElementChild); 
}

const classes = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headers.length; i++) {
    let h = document.querySelector('h'+(i+1));
    h.classList.add(classes[i]);        
}

```
