# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №17 - Bootstrap

1. В середині exercises створіть піддирексторію lecture-17. В середині lecture-17 створіть файли index.html та README.md

Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	
</head>
<body>
    <h1>Hello, world!</h1>

    
</body>
</html>

```

Наступна функція повертає true, якщо параметр age перевищує 18 років.

В іншому випадку запитує підтвердження та повертає результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

Will the function work differently if else is removed?
Чи буде функція працювати інакше, якщо видалити else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

Is there any difference in the behavior of these two variants?

No difference!

In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.
Rewrite the function using '?' or '||'
importance: 4

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

Чи є різниця в поведінці цих двох варіантів?

Без різниці!

В обох випадках return confirm('Чи дозволили тобі батьки?') виконується саме тоді, коли умова if є хибною.
Перепишіть функцію, використовуючи '?' або '||'
важливість: 4

Наступна функція повертає true, якщо вік параметра перевищує 18 років.

В іншому випадку запитує підтвердження та повертає результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

    Using a question mark operator ?
    Using OR ||


Using a question mark operator '?':

Перепишіть його, щоб виконати те саме, але без if, в один рядок.

Зробіть два варіанти checkAge:

     Використання оператора знака питання?
     Використання АБО ||


Використання оператора знака питання «?»:

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

Using OR || (the shortest variant):
Використання АБО || (найкоротший варіант):

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

Note that the parentheses around age > 18 are not required here. They exist for better readability.
Function min(a, b)
importance: 1

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

Зауважте, що дужки навколо віку > 18 тут не потрібні. Вони існують для кращої читабельності.
Функція min(a, b)
важливість: 1

Напишіть функцію min(a,b), яка повертає найменше з двох чисел a і b.

Наприклад:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

A solution using if:

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

A solution with a question mark operator '?':

function min(a, b) {
  return a < b ? a : b;
}

P.S. In the case of an equality a == b it does not matter what to return.

Function pow(x,n)
importance: 4

Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

P.S. У випадку рівності a == b не має значення, що повертати.

Функція pow(x,n)
важливість: 4

Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.
Створіть веб-сторінку, яка запитує x і n, а потім показує результат pow(x,n).

Запустіть демонстрацію

P.S. У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.

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
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

Rewrite with arrow functions

Replace Function Expressions with arrow functions in the code below:

Переписати за допомогою функцій стрілок

Замініть вирази функцій функціями зі стрілками в коді нижче:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

Looks short and clean, right?


Надамо значення за замовчуванням, але залишимо значення, відмінні від null або undefined.
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;
const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;
console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

Подібно до логічних операторів АБО та І, вираз правої частини не обчислюється, якщо виявляється, що ліва частина не є а ні null, а ні undefined.
function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}
 
console.log( A() ?? C() );
// logs "A was called" then "C was called" and then "foo"
// as A() returned undefined so both expressions are evaluated

console.log( B() ?? C() );
// logs "B was called" then "false"
// as B() returned false (and not null or undefined), the right
// hand side expression was not evaluated



Some more examples of anonymous functions

let name="foo";
(function(){
    name="bar";
    console.log("The name is : "+name);
})();

//Console Output
The name is : bar

Passing Parameter

(function(first_name, last_name, age){
    console.log("My name is : "+first_name+" "+last_name+" and i'm "+age+" years old.");
})("Jake", "Ron", 25);

//Console Output
My name is : Jake Ron and i'm 25 years old.


Як знайти факториал за допомогою рекурсії:
Ви можете створити те саме рішення за допомогою рекурсивної функції.

function findFactorial(num) {
  if (num === 0) return 1
  let factorial = num * findFactorial(num - 1)
  return factorial;
}

findFactorial(5) // 120

По-перше, вам потрібна базова умова num === 0.

Вам також потрібен рекурсивний виклик findFactorial(num - 1), щоб забезпечити зменшення числа при кожному виклику, коли ви передаєте новий параметр n-1.

Потім ви множите результат на попереднє число num * findFactorial(num - 1), доки не буде виконано базову умову.

Отже, що краще – рекурсія чи цикли?
Так який з них кращий? На це немає правильної чи неправильної відповіді. Це вам вирішувати. Залежно від проблеми, яку ви вирішуєте, ви можете вибрати одне над іншим.

Оптимізуйте для зручності читання вашого коду. Іноді, як у факторіальному прикладі, рекурсія призводить до коротшого та більш читабельного коду.

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
```html

```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

