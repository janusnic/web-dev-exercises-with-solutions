# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №25 - Замикання у JavaScript

В середині exercises створіть піддиректорію lecture-25. В середині lecture-25 створіть файли index.html, app.css та app.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    
    <script src="app.js"></script>
</body>
</html>

```
1. Маємо масив list

```js
const list = ['html', 'css', 'javascript', 'react.js'];
```

Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставте його на сторінку. 

```js

let ul = document.createElement('ul');
document.body.append(ul);

const list = ['html', 'css', 'javascript', 'react.js'];

for (let i=0; i < list.length; i++) {
    let li = document.createElement('li');
    li.textContent = list[i];
    ul.append(li);
}

```

2. Маємо масив listWithHref
```js
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
```
Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:
```html
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
```
Додайте створений список на сторінку. 

```js
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

let ol = document.createElement('ol');
document.body.append(ol);

listWithHref.forEach(item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    for (const [key, value] of Object.entries(item)) {
        a.textContent = key;    
        a.setAttribute('href', value);    
        li.append(a);
    }
    ol.append(li); 
});
```


3. Маємо масив students

```js
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

```

Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. 
Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure;
Додайте таблицю на сторінку. 

```js

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

let table = document.createElement('table');
document.body.append(table);


let tr = document.createElement('tr');
let thead = document.createElement('thead');    

for (const key of Object.keys(students[0])) {
    let th = document.createElement('th');
    th.textContent = key;    
    tr.append(th);
}
thead.append(tr); 
table.append(thead); 


students.forEach(item => {
    let tr = document.createElement('tr');
    
    for (const value of Object.values(item)) {
        let td = document.createElement('td');
        td.textContent = value;    
        
        tr.append(td);
    }
    table.append(tr); 
});


```
