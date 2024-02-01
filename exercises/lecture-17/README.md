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

