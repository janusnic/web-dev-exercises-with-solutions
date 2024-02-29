# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №16 - JavaScript

1. В середині exercises створіть піддиректорію lecture-16. В середині lecture-16 створіть файл index.html

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
    <h1>Hello, javascript!</h1>

    <script>

    </script>

</body>
</html>

```
  - В середині script визначте 2 змінні message1 зі значенням Hello та message2 зі значенням JavaScript. Використовуючи ці змінні та alert, виконайте відображення рядка "Hello JavaScript!".  
## Відповідь:
```html
    <script>
      let message1 = "Hello";
      let message2 = "JavaScript";
      alert(message1 + " " + message2 + "!");
    </script>
```

2. Виправити помилку у коді

```html
    <script>
      'use strict';
      
      message = hello;
      message = 123456;

    </script>
```
## Відповідь:
```html
    <script>
      'use strict';
      
      // no error
      let message = "hello";
      message = 123456;
    </script>
```

3. Напишіть програму, що запитує у користувача значення двох змінних x, y, та виводить їх суму
## Відповідь:
```html
  <script>
    'use strict';

    let x = prompt("Enter x = ", "");
    let y = prompt("Enter y = ", "");
    alert(+x + +y);
  </script>
```

4. Виправити помилку у коді
```html
  <script>
    'use strict';

    let a = 9007199254740991;
    let b = 9007199254740991n;
    console.log(a + b); 
    // Uncaught TypeError: can't convert BigInt to number
  </script>
```
## Відповідь:
```html
  <script>
    'use strict';

    let a = 9007199254740991n;
    let b = 9007199254740991n;
    console.log(a + b); 
  </script>
```

5. Перепишіть код так, щоб результат дорівнював 5
```html
  <script>
    'use strict';

    let apples = "2";
    let oranges = "3";

    alert( apples + oranges ); 
   
  </script>
```
## Відповідь:
```html
  <script>
    'use strict';

    let apples = "2";
    let oranges = "3";
    alert( +apples + +oranges ); 
   
  </script>
```

6. Які кінцеві значення всіх змінних a, b, c і d після виконання наведеного нижче коду?

```html
  <script>
    'use strict';

    let a = 1, b = 1;
    let c = ++a; // ?
    let d = b++; // ?

   
  </script>
```

## Відповідь:

    a = 2
    b = 2
    c = 2
    d = 1

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

7. Які значення a і x після виконання наведеного нижче коду?

```html
  <script>
    'use strict';

    let a = 2;
    let x = 1 + (a *= 2);
  </script>
```
## Відповідь:
  a = 4
  x = 5

8. Які результати цих виразів?
```html
  <script>
    'use strict';

    "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    NaN + 1
  </script>
```
## Відповідь:
```html
  <script>
    'use strict';

    "" + 1 + 0 = "10" 
    "" - 1 + 0 = -1 
    true + false = 1
    6 / "3" = 2
    "2" * "3" = 6
    4 + 5 + "px" = "9px"
    "$" + 4 + 5 = "$45"
    "4" - 2 = 2
    "4px" - 2 = NaN
    "  -9  " + 5 = "  -9  5" 
    "  -9  " - 5 = -14 
    null + 1 = 1 
    undefined + 1 = NaN 
    NaN + 1 = NaN

  </script>
```

Додавання з рядком "" + 1 перетворює 1 на рядок: "" + 1 = "1", а потім маємо "1" + 0, застосовується те саме правило.
Віднімання - (як і більшість математичних операцій) працює лише з числами, воно перетворює порожній рядок "" на 0.
Додавання з рядком додає до рядка число 5.
Віднімання завжди перетворюється на числа, тому " -9 " перетворюється на число -9 (ігноруючи пробіли навколо нього).
null стає 0 після числового перетворення.
undefined стає NaN після числового перетворення.
Коли рядок перетворюється на число, пробіли видаляються з початку та кінця рядка. 
NaN липкий. Будь-яка подальша математична операція над NaN повертає NaN: NaN + 1; // NaN


9. Маємо такий код

```html
  <script>
    'use strict';
    // скоротити цей код за допомогою операторів += і *=:
    let n = 2;
    n = n + 5;
    n = n * 2;

  </script>
```

## Відповідь:
```html
  <script>
    'use strict';

    let n = 2;
    n += 5; // now n = 7 (same as n = n + 5)
    n *= 2; // now n = 14 (same as n = n * 2)

  </script>
```

10. Маємо такий код
```html
<script>
      let n1 = "   123   ";
      let n2 = "123z";
      let n3 = true;
      let n4 = false;
      
      console.log(n1, n2, n3, n4);
      // Перетворити змінні n1, n2, n3, n4 на числа 
</script>
```

## Відповідь:
```html
<script>
      let n1 = "   123   ";
      let n2 = "123z";
      let n3 = true;
      let n4 = false;
      
      // console.log(n1, n2, n3, n4);
      console.log(Number(n1), parseFloat(n2), Number(n3), Number(n4));

    </script>
```
