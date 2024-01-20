# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #6 Селектори псевдокласів

1. В середині exercises створіть піддирексторію lecture-06. В середині lecture-06 створіть файли index.html, css/main.css та README.md

2. Відредагуйте файл exercises/lecture-06/index.html

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lecture #6 Селектори псевдокласів</title>
	<link href="css/main.css" rel="stylesheet">
</head>
<body>
	<ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Careers</a></li>
    </ul>
    
</body>
</html>

```
	- Відредагуйте файл exercises/lecture-06/css/main.css
		- Вмтановіть колір тега a indigo
		- Вмтановіть колір тега a gold, якщо  це посилання вже відвідали 
		- Вмтановіть колір тега a salmon, якщо вказівник користувача знаходиться над ним 
		- Вмтановіть колір тега a red, який є активованим  
		- Вмтановіть колір тега a orange, який отримав фокус
### Рішення:
```css
a:link {
   color: indigo;
}
/* Якщо ви використовуєте його таким чином, його можна пропустити: */
a {
   color: indigo;
}

a:visited {
   color: gold;
}

a:hover {
   color: salmon;
}


a:active {
   color: red;
}
a:focus {
   color: orange;
}
```

3. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 
```html 
    <input
    type="number"
    value="1"
    min="1"
    max="10"
    required
    />
```
	- Якщо введене у поле input значення знаходтьбся в межах 1-10, встановіть фоновий колір зеленим з прозорістю 0.25
	- Якщо введене у поле input значення знаходтьбся поза межами 1-10, встановіть фоновий колір чераоним з прозорістю 0.25
### Рішення:
```css
input:in-range {
   background-color: rgb(0, 255, 0 / 0.25);
 }

input:out-of-range {
   background-color: rgb(255, 0 / 0, 0.25);
   border: 2px solid red;
}
```
4. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 

```html 
<ul>
   <li>This text will be orange.</li>
   <li>Lorem ipsum dolor sit amet.</li>
   <li>Lorem ipsum dolor sit amet.</li>
</ul>
```
	- Встановіть першому елементу li помаранчевий колір
### Рішення:
```css
li:first-child {
   color: orange;
}
```

5. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 
```html 
<ul>
   <li>This text will be orange.</li>
   <li>Lorem ipsum dolor sit amet. <span>This text will be orange.</span></li>
   <li>Lorem ipsum dolor sit amet.</li>
</ul>
```
	- Встановіть першому елементу li та першому елементу span помаранчевий колір
### Рішення:
```css
ul :first-of-type {
   color: orange;
}
```
6. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 
```html 
<ul>
   <li>Lorem ipsum. <span>Lorem ipsum.</span> <span>This text will be orange.</span></li>
   <li>Lorem ipsum dolor sit amet.</li>
   <li>This text will be orange.</li>
</ul>
```
	- Встановіть останньому елементу li та останньому елементу span помаранчевий колір
### Рішення:
```css
ul :last-of-type {
   color: orange;
}
```
7. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 
```html 
<ul>
   <li class="first-item">Lorem ipsum dolor sit amet.</li>
   <li>Lorem ipsum dolor sit amet.</li>
   <li>Lorem ipsum dolor sit amet.</li>
</ul>
```
	- Встановіть елементу li помаранчевий колір, якщо він не має аргумента class="first-item"
### Рішення:
```css
li:not(.first-item) {   
	color: orange; 
}
```
	- Встановіть всім елементаи li чорний текст і жовтий фон, крім елемента li з класом .first-item та останнього елемента li у списку
### Рішення:
```css
li:not(.first-item):not(:last-of-type) {
   background: yellow;
   color: black;
}
```

8. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 
```html 
<ol>
   <li>Alpha</li>
   <li>Beta</li>
   <li>Gamma</li>
   <li>Delta</li>
   <li>Epsilon</li>
   <li>Zeta</li>
   <li>Eta</li>
   <li>Theta</li>
   <li>Iota</li>
   <li>Kappa</li>
</ol>
```
	- Встановіть дпугому елементу li помаранчевий колір
### Рішення:
```css
ol :nth-child(2) { 
	/* Only “Beta” will be orange: */    
	color: orange; 
}
```
	- Встановіть кожному парному елементу li помаранчевий колір
### Рішення:
```css
ol :nth-child(2n) {
	/* “Beta,” “Delta,” “Zeta,” “Theta” and “Kappa” will be orange: */   
	color: orange;
}

ol :nth-child(even) {
	/* all even-numbered children: */   
	color: orange;
}
```
	- Встановіть кожному елементу li помаранчевий колір за фрпмулою 2n+6
### Рішення:
```css
ol :nth-child(2n+6) { 
	/* “Zeta,” “Theta” and “Kappa” will be orange: */   
	color: orange;
}
```
9. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 

```html 
<h1 class="ua">Укрвїні!</h1>
```
	- Вчтавте за допомогою псевдоелемента before перед Укрвїні слово Слава
### Рішення:
```css
h1.ua::before {
   content: "Слава "; /* Note the space after the word Слава. */
}
```

10. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 

```html 
<h1 class="hero">Героям</h1>
```
	- Вчтавте за допомогою псевдоелемента after після Героям слово Слава!
### Рішення:
```css
h1.hero::after {
   content: " Слава!"; 
}
```

11. Додайте до сторінки exercises/lecture-06/index.html наступну розмітку 

```html 
	<p class="cont">
        Згенерований вміст також дозволяє нам вставляти більш складні символи за допомогою екранування: симввол параграфу відповідає екрановааій послідовності "\0A7"
    </p>
```
	- Вчтавте за допомогою псевдоелемента before симввол параграфу
### Рішення:
```css
	p.cont::before {
		content: "\0A7";
		padding-right: 0.2em;
	}
```

12. Відредагуйте файл css/common.css

```css
	html {
		--primary-text-color: #000;
		--primary-bg-color: #fff;
		--primary-font-family: 'Roboto', sans-serif; 
		--primary-font-size: 0.875rem;
	}
```
	- Замініть елемент html на псевдоклас :root
### Рішення:
```css
	:root {
		--primary-text-color: #000;
		--primary-bg-color: #fff;
		--primary-font-family: 'Roboto', sans-serif; 
		--primary-font-size: 0.875rem;
	}
```


13. Відредагуйте файл catalog.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalog</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Roboto::wght@400;700&display=swap" rel="stylesheet">
    <link href="css/common.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">

</head>
<body>
	<aside>
        <h2 class="text-uppercase">Categories</h2>
                
        <div class="bg-dark text-white">
            <strong class="text-uppercase">Fashion &amp; Acc</strong>
        </div>
                
        <ul class="list-unstyled categories">
            <li><a href="#!">Women's T-Shirts</a></li>
            <li><a href="#!">Men's T-Shirts</a></li>
            <li><a href="#!">Dresses</a></li>
            <li><a href="#!">Novelty socks</a></li>
            <li><a href="#!">Women's sunglasses</a></li>
            <li><a href="#!">Men's sunglasses</a></li>
        </ul>
    </aside>
</body>
</html>

```
	- Відредагуйте файл css/main.css
		- Визначити клас text-uppercase з властивістю   text-transform: uppercase;
		- Визначити клас bg-dark з властивістю background-color: black
		- Визначити клас text-white з властивістю color: white
		- Визначити селектор ul.categories li a з властивостями color: indigo, text-decoration: none, font-size: 1.2rem
		- Визначити селектор ul.categories li a з властивостями ul.categories li a:hover, background-color: lightgray

### Рішення:
```css
.text-uppercase {
    text-transform: uppercase;

}

.bg-dark {
    background-color: black;
    
}
.text-white {
    color: white;
}
 
ul.categories li a {
    color: indigo;
    text-decoration: none;
    font-size: 1.2rem;
}

ul.categories li a:hover {
    color: indianred;
    background-color: lightgray;
}

```


## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).


