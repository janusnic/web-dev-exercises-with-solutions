# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions

## Exercises for lecture №17 - Functions

В середині exercises створіть піддирексторію lecture-17. В середині lecture-17 створіть файли index.html та README.md

1. Відредагуйте файл index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	
</head>
<body>

 - Наступна функція checkAge повертає true, якщо параметр age перевищує 18 років.
 - В іншому випадку запитує підтвердження та повертає результат:
    
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

 - Перепишіть функцію checkAge, видаливщи else.
 - Чи буде функція працювати інакше, якщо видалити else?
 - Чи є різниця в поведінці цих двох варіантів і чому?

</body>
</html>

```
```html
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```
solution:
немає різниці!
В обох випадках return confirm('Did parents allow you?') виконується саме тоді, коли умова if є хибною.


2. Наступна функція повертає true, якщо вік параметра перевищує 18 років. В іншому випадку запитує підтвердження та повертає результат.
```html
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```
    - Перепишіть функцію checkAge, використовуючи '?'
    - Перепишіть функцію checkAge, використовуючи '||'

solution:
Використання оператора знака питання ?:
```
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
```
solution:
Використання OR || (найкоротший варіант):
```
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
```

    - Чи потрібні дужки навколо age > 18 
```
return (age > 18) || confirm('Did parents allow you?');
```
solution:
дужки навколо age > 18 тут не потрібні. Вони існують для кращої читабельності.


Lets write a function fullName which takes firstName and lastName as arguments and returns full name of a person.



function fullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}
You can call a function by just its name with parentheses.

fullName(arg1, arg2)

let a = fullName('Harry', 'Potter');
let b = fullName('Hermione', 'Granger');
let c = fullName('Ronald', 'Weasley');
let d = fullName('Lord', 'Voldemort');
console.log(a); // will print: Harry Potter
console.log(b); // will print: Hermione Granger
console.log(c); // will print: Ronald Weasley
console.log(d); // will print: You know who // just kidding

function fullName(firstName='-', lastName='-') {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}


In the above example if one of the arguments is not passed, it gets a default value of -.



let a = fullName('Dobby');
console.log(a); // will print: Dobby -

External Script file: function.js

function exampleFunction() {
    alert('You triggered an alert!');
}

HTML File:

<html>
   <head>
      <script type = "text/javascript" src="function.js"></script>  
   </head>
   <body>
      <p><a href="#" onClick="exampleFunction;">Click Me</a></p>
   </body>
</html>

3. Напишіть функцію min(a,b), яка повертає найменше з двох чисел a і b. Наприклад:
```
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

A solution using if:
```
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```
A solution with a question mark operator '?':
У випадку рівності a == b не має значення, що повертати.
solution:
```
function min(a, b) {
  return a < b ? a : b;
}
```


4. Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат.
У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.
```
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```
Створіть веб-сторінку, яка запитує x і n, а потім показує результат pow(x,n).

solution:
```
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
```

5. Переписати за допомогою функцій стрілок

Замініть вирази функцій функціями зі стрілками в коді нижче:
```
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
```
solution:
Looks short and clean, right?

Надамо значення за замовчуванням, але залишимо значення, відмінні від null або undefined.
```
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;
const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;
console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
```
Подібно до логічних операторів АБО та І, вираз правої частини не обчислюється, якщо виявляється, що ліва частина не є а ні null, а ні undefined.
```
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
```


Some more examples of anonymous functions
```
let name="foo";
(function(){
    name="bar";
    console.log("The name is : "+name);
})();

//Console Output
The name is : bar
```
Passing Parameter
```
(function(first_name, last_name, age){
    console.log("My name is : "+first_name+" "+last_name+" and i'm "+age+" years old.");
})("Jake", "Ron", 25);

//Console Output
My name is : Jake Ron and i'm 25 years old.

```
Як знайти факториал за допомогою рекурсії:
Ви можете створити те саме рішення за допомогою рекурсивної функції.
solution:
```
function findFactorial(num) {
  if (num === 0) return 1
  let factorial = num * findFactorial(num - 1)
  return factorial;
}

findFactorial(5) // 120
```
По-перше, вам потрібна базова умова num === 0.

Вам також потрібен рекурсивний виклик findFactorial(num - 1), щоб забезпечити зменшення числа при кожному виклику, коли ви передаєте новий параметр n-1.

Потім ви множите результат на попереднє число num * findFactorial(num - 1), доки не буде виконано базову умову.

```html

```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

