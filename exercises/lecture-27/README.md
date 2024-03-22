# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions

## Exercises for lecture №27 - Storages

Створити копію lecture-27 у директорію exercises 

Знайти елемент ul у длкументі та запам'ятати його у змінній ul.

За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. Якщо елемент відсутній, створити його зі значенням [].

Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.

Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.

Знайти елемент input у документі та запам'ятати його у змінній input.

Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask. 

Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML. 


```js

const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

function add() {
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

function del() {
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}


```
