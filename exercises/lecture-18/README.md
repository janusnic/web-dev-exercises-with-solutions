# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions

## Exercises for lecture №18 - Functions

1. В середині exercises створіть піддиректорію lecture-17. В середині lecture-17 створіть файли index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	
</head>
<body>

  - функція checkAge повертає true, якщо параметр age перевищує 18.
  - в іншому випадку запитує підтвердження та повертає результат:
    
    <script>
    function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        // ...
        return confirm('Did parents allow you?');
      }
    }
    </script>


</body>
</html>

```
  1. Перепишіть функцію checkAge, видаливши else.
  2. Чи буде функція працювати інакше, якщо видалити else?
  3. Чи є різниця в поведінці цих двох варіантів і чому?

## solution:

немає різниці.
В обох випадках return confirm('Did parents allow you?') виконується саме тоді, коли умова if є хибною.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```


2. Наступна функція повертає true, якщо параметр age перевищує 18. В іншому випадку запитує підтвердження та повертає результат.
```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```
  1. Перепишіть функцію checkAge, використовуючи '?'
  2. Перепишіть функцію checkAge, використовуючи '||'

## solution:
  1. Використання оператора знака питання ?:
```js
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
```
## solution:
  2. Використання OR || (найкоротший варіант):
```js
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
```

3. Чи потрібні дужки навколо age > 18 
```js
return (age > 18) || confirm('Did parents allow you?');
```
## solution:
дужки навколо age > 18 не потрібні. Вони існують для кращої читабельності.


4. Напишіть функцію min(a,b), яка повертає найменше з двох чисел a і b. У випадку рівності a == b немає значення, що повертати. Наприклад:
```js
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```
  1. реалізуйте функцію min, використовуючи оператор if else
  2. реалізуйте функцію min, використовуючи тернарний оператор
## 1. solution Використання if:
```js
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```
## 2. solution Використання '?':
```js
function min(a, b) {
  return a < b ? a : b;
}
```

4. Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат.
У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.
```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```
Створіть сценарій, де спочатку користувачу пропонують ввести x і n, а потім показують результат pow(x,n), або повідомлення про неправильне значення параметра n.

## solution:
```js
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert("Power " + n + " is not supported, use a positive integer");
} else {
  alert( pow(x, n) );
}
```

5. Переписати функцію ask, використовуючи функцію стрілок:
```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

```
## solution:
```js
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
```
6. Переписати функцію ask, використовуючи функціональний вираз:
```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
```
## solution:
```js
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

7. Маємо 3 функції.
```js
function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}
```
  1. Яким чином виконати виклик функцій A() і C(), щоб на консолі отримати такий результат
  A was called
  C was called
  foo 

  2. Яким чином виконати виклик функцій B() і C(), щоб на консолі отримати такий результат
  B was called
  C was called
  foo

## solution:
```js
function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}

console.log( A() ?? C() );
console.log( B() || C() );
```
