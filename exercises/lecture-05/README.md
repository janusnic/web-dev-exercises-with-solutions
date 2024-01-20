# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #5 Стилізація шрифтів та тексту

1. В середині exercises створіть піддирексторію lecture-05. В середині lecture-05 створіть файли index.html, css/main.css та README.md

2. Відвідайте веб-сайт Google Fonts https://fonts.google.com/.
знайдіть шрифт Roboto, додайте шрифт «Roboto» за допомогою посилання на сторінку index.html.
### Рішення:
```html
<!-- щоб додати шрифт «Roboto», тег посилання матиме такий вигляд: -->
<head>
  <link rel='stylesheet' 
  href='https://fonts.googleapis.com/css?family=Roboto::wght@400;700&display=swap"
 rel="stylesheet">
```
3. Додайте до сторінки index.html наступну розмітку
```html
	<div>
	<span>Outer <span>inner</span> outer</span>
	</div>
```
	- Припустімо, що розмір шрифту для body встановлено на 16 пікселів. 
	- Слова «Outer» відображається з розміром 25,6 пікселів, а слово «inner» — 40,96 пікселів.
	- Всередині файла css/main.css 
		- визначте властивсть font-size для div, вказавши значення в одиницях виміру em.
		- визначте властивсть font-size для span, вказавши значення в одиницях виміру em.
### Рішення:
```css
div {
  font-size: 1em;
}
span {
  font-size: 1.6em;
}
```
```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

4. Додайте до сторінки index.html наступну розмітку
 	<div>
        <strong>Outer <strong>inner</strong> outer</strong>
    </div>

	- Припустімо, що розмір шрифту для body встановлено на 16 пікселів. 
	- Всередині файла css/main.css визначте властивсть font-size для strong так, щоб всі слова мали однаковий відносний розмір, еквівалентний 25,6 пікселів.
### Рішення:
```css
html {
  font-size: 100%;
}
strong {
  font-size: 1.6rem;
}
```

5. Додайте до сторінки index.html наступну розмітку
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```
- стилізувати елементи списку квадратами
### Рішення:
```html
<style>
ul {
    list-style-type: square;
}
</style>
```

6. Відредагуйте файл index.html вашого персонального сайту

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя домашня сторінка</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

	
	<!-- додайте тут Google Fonts «Roboto» -->

	<style>
		@import url("css/common.css");
    </style>

	<link href="css/main.css" rel="stylesheet">

</head>
<body>

</body>
</html>

```
### Рішення:
```html
<!-- щоб додати шрифт «Roboto», тег посилання матиме такий вигляд: -->
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto::wght@400;700&display=swap" rel="stylesheet">
```

7. Відредагуйте файл css/main.css вашого персонального сайту
	- Виконайте імпорт шрифтів font-awesomeза допомогою правила @import. 
### Рішення:
```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
```

8. Відредагувати файл css/common.css
```css
	html {
		--primary-text-color: #000;
		--primary-bg-color: #fff;
	}
	footer {
		--footer-text-color: #fff;
		--fuuter-bg-color: #000;
	}
```
- Визначити у глобальній області видимості змінні:
		--primary-font-family: 'Roboto', sans-serif; 
		--primary-font-size: 0.875rem;

9. Відредагувати файл css/main.css
	- Встановити, за допомогою визначених у файлі css/common.css змінних, властивості елемента body:
		- font-family
		- font-size
	- Встановити властивість font-weight: 700 для елементів h1, h2, h3
	- Встановити властивість font-size: 1.45rem для елемента h1
	- Встановити властивість font-size: 1.3rem для елемента h2
	- Визначити клас .list-unstyled з властивістю list-style: none
	- Визначити клас .footer-social

### Рішення:
```css

	html {
		--primary-text-color: #000;
		--primary-bg-color: #fff;
		--primary-font-family: 'Roboto', sans-serif; 
		--primary-font-size: 0.875rem;
	}


body {
    font-family: var(--primary-font-family);
    font-size: var(--primary-font-size);
}

h1, h2, h3 {
    font-weight: 700;
}

h1 {
    font-size: 1.45rem;
}

h2 {
    font-size: 1.3rem;
}

.list-unstyled {
    list-style: none;
}
```
10. Відредагуйте файл index.html
	- В розділі footer створіть section з атрибутом class="footer-social"
	- В середині цієї секції розмістіть елемент ul з атрибутом class="list-unstyled"
	- В середині ul розмістіть елементи li, кожний з яких має містити посилання на одну з соціальних мереж - facebookб twitter, github, linkedin, youtube, instagram.
	- Перегляньте документацію для font-awesome, знайдіть іконки відповідних соц-мереж та вставте їх як текст посилань

### Рішення:
```html

<!-- Footer social -->
  <section class="footer-social">
    <ul class="list-unstyled">
      <li><a href="#"><i class="fab fa-facebook"></i></a></li>
      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li><a href="#"><i class="fab fa-github"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fab fa-youtube"></i></a></li>
    </ul>
  </section>
```

11. Відредагуйте файл index.html
	- В розділі header створіть ще один підрозділ nav з атрибутом class="footer-social"
```html
	<header>
      	<nav>
            <!-- navigation -->
            <a href="index.html">Home</a> 
            <a href="catalog.html">Catalog</a> 
            <a href="blog.html">Blog</a> 
            <a href="about.html">About</a> 
            <a href="contact.html">Contact</a> 
    	</nav>
		
		створіть тут підрозділ nav з таким вмістом
			
			<a href="#"></a>
            <a href="cart.html"></a>
            <a href="#!"></a>
	</header>
```
	- Перегляньте документацію для font-awesome, знайдіть іконки кошик замовлення, сердечко та користувач. Для кожного з посилань визначте атрибут class зі значенням, що дорівнює одній з цих іконок
	- Встановіть для тега a властивість text-decoration: none; у файлі css/common.css
### Рішення:
```html
	<header>
      	<nav>
            <!-- navigation -->
            <a href="index.html">Home</a> 
            <a href="catalog.html">Catalog</a> 
            <a href="blog.html">Blog</a> 
            <a href="about.html">About</a> 
            <a href="contact.html">Contact</a> 
    	</nav>
		
		створіть тут підрозділ nav з таким вмістом
		<nav>	
			<a href="#" class="far fa-heart"></a>
            <a href="cart.html" class="fas fa-dolly-flatbed"></a>
            <a href="#!" class="far fa-user"></a>
		</nav>
	</header>
```
### Рішення:
```css

a {
    text-decoration: none;
}
```
## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

