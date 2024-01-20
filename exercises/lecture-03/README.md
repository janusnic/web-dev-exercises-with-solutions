# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #3 Каскадні стилі сторінок (CSS)


1. В середині exercises створіть піддирексторію lecture-03. В середині lecture-03 створіть файли index.html та README.md

Відредагуйте файл index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 3 challenges</title>

    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">

</head>
<body>

    <h2>Сторінка Вікіпедії для мови CSS</h2>
    <!-- На сайті Wikipedia знайдіть сторінку про CSS українською мовою -->

	<!-- Додайте тут елеиент iframe з посиланням на українську версію Wikipedia page for the CSS language -->

	<!-- В елеиенті iframe визначте атрибут title зі значенням Сторінка Вікіпедії для мови CSS -->
</body>
</html>
```

## Рішення
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 3 challenges</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
</head>
<body>
    <h2>Сторінка Вікіпедії для мови CSS</h2>
    <iframe title="Сторінка Вікіпедії для мови CSS" src="https://uk.wikipedia.org/wiki/CSS"></iframe>
</body>
</html>
```

2. Відредагуйте файл index.html
```html 

<!doctype html>
  <head>
	<!-- 
		Додайте тут елеиент style 
		В сепедині style визначте селектор p з властивістю color: red;
	-->
  </head>
  <body>
	<!-- 
		Додайте тут елеиент p з текстом This is my paragraph.
		визначте атрибут style для тега p зі значенням color: blue;
	-->

	<!-- 
		який колір буде мати текст This is my paragraph і чому.
	-->

  </body>
</html>
```
## Рішення
2. Відредагуйте файл index.html
```html 

<!doctype html>
  <head>
	<!-- 
		Додайте тут елеиент style 
		В сепедині style визначте селектор p з властивістю color: red;
	-->
	<style>
	  	p {
	    	color: red;
	  	}
	</style>
  </head>
  <body>
	<!-- 
		Додайте тут елеиент p з текстом This is my paragraph.
		визначте атрибут style для тега p зі значенням color: blue;
	-->
	 <p style="color: blue;">This is my paragraph.</p>

	<!-- 
		який колір буде мати текст This is my paragraph і чому.
		текст This is my paragraph. буде мати колір blue
		атрибут style має найвищий пріорітет при визгаченні стилю
	-->

  </body>
</html>
```
3. У наступному фпагменті випрвити помилки 
```html 
    <p>Звичайний, нудний абзац. Намагайтеся не заснути.</p>
    <p id="exciting">The most exciting paragraph on the page. One of a kind!</p>

    <div id="exciting">The most exciting paragraph on the page. One of a kind!</div>

	<style>
		#exciting {
			background: #f69d3c;
			border: 1px solid #696969;
			padding: 10px;
		}
	</style>
```

## Рішення
3. У наступному фпагменті випрвити помилки 
```html 

	<style>
       #exciting {
           background: #f69d3c;
           border: 1px solid #696969;
           padding: 10px;
       }
    </style>
	<p>Звичайний, нудний абзац. Намагайтеся не заснути.</p>
   	<p id="exciting">The most exciting paragraph on the page. One of a kind!</p>

   	<div id="exciting1">The most exciting paragraph on the page. One of a kind!</div>

```

4. Чи буде змінна --bgColor видимою для елемента body. Яким буде фон елемента body і чому.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 3 challenges</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">

    <!-- Додайте тут елеиент style: -->
    <style type="text/css">
    	
    	body {
			background: var(--bgColor);
		}

		div {
			--bgColor: limegreen;
		}

		/*
		 визначте для елементів p властивість фону таким чином:
			background: var(--bgColor);
		*/
    </style>

</head>
<body>

    <!-- ... -->

	<!-- Додайте тут 2 елеиенти div: -->
	<div>
		<h3>Div 1</h3>
	    <p>Paragraph 1</p>
	</div>

	<div>
		<h3>Div 2</h3>
	    <p>Paragraph 2</p>
	</div>

</body>
</html>
```

## Рішення

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 3 challenges</title>

    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">

    <!-- Додайте тут елеиент style: -->

    <style type="text/css">
    	
		body {
			background: var(--bgColor);
		}

		div {
			--bgColor: limegreen;
		}

		p {
			background: var(--bgColor);
		}

    </style>

</head>
<body>

	<!-- ...  -->
 	
 	<!-- елемент body знаходиться над елементом div, тому змінна --bgColor не буде видимою для елемента body. -->

 	<!-- Змінна --bgColor буде видимою для елементів p, оскільки вони є дочірніми елементами div. -->

	<div>
		<h3>Div 1</h3>
	    <p>Paragraph 1</p>
	</div>

	<div>
		<h3>Div 2</h3>
	    <p>Paragraph 2</p>
	</div>

</body>
</html>
```
5. Створити файл css/main.css
	- Перейти до кореня персонального сайта
	- Створити файли css/main.css та css/common.css
	- Відредагувати файл index.html
		1. Підключити css/main.css за допомогою тега link
		2. Підключити css/common.css за допомогою правила @import


## Рішення
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Home page</title>

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	
	<style>
		@import url("css/common.css");
    </style>

	<link href="css/main.css" rel="stylesheet">

</head>
<body>
	<header>
      	<nav>
            <!-- navigation -->
            <a href="index.html">Home</a> 
            <a href="catalog.html">Catalog</a> 
            <a href="blog.html">Blog</a> 
            <a href="about.html">About</a> 
            <a href="contact.html">Contact</a> 
    	</nav>
    </header>

  	<section>
        <h1>Welcome to My Site!</h1>
    </section>
	
	<footer>
	
	</footer>

</body>
</html>
```
6. Виправити помилку у фпагменті
```css
	* {
		margin: 0;
		padding: 0;
	}

	/* more styles */
	@import url("my-imported-styles.css");

```

## Рішення
```css
	@import url("my-imported-styles.css");
	
	* {
		margin: 0;
		padding: 0;
	}
	/* more styles */
```

7. Відредагувати файл css/common.css
	- Визначити у глобальній області видимості змінні:
		1. --primary-text-color: #000;
		2. --primary-bg-color: #fff;
	- Визначити у області видимості footer змінні:
		1. --footer-text-color: #fff;
		2. --fuuter-bg-color: #000;

## Рішення

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

8. Відредагувати файл css/main.css
	- Встановити, за допомогою визначених у файлі css/common.css змінних, властивості елемента body:
		1. color;
		2. background;

## Рішення

```css
	color: var(--primary-text-color);
	background: var(--primary-bg-color);
```

9. Відредагувати розділ footer
```html

<footer>
  <!-- створити тут секцію -->
  	<!-- створити тут div -->
      <h2>About</h2>
	  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Pricing</a>
        <a href="#">Customers</a>
        <a href="#">Careers</a>
	  -->
	
	<!-- створити тут div -->
      <h2>Resources</h2>
	  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">eBooks</a>
        <a href="#">Webinars</a>
	  -->

	<!-- створити тут div -->
      <h2>Contact</h2>
	  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Help</a>
        <a href="#">Sales</a>
        <a href="#">Advertise</a>
	  -->

  
  <!-- Footer legal -->
  <!-- створити тут section -->
  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
        &copy; 2024 Copyright Shopaholic Inc.
	  -->
</footer>
```
## Рішення
```html

<footer>
  <!-- створити тут секцію -->
  <section>
  	<!-- створити тут div -->
    <div>
      <h2>About</h2>
	  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Pricing</a>
        <a href="#">Customers</a>
        <a href="#">Careers</a>
	  -->
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
	<!-- створити тут div -->
    <div>
      <h2>Resources</h2>
	  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">eBooks</a>
        <a href="#">Webinars</a>
	  -->
      <ul>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">eBooks</a></li>
        <li><a href="#">Webinars</a></li>
      </ul>
    </div>
	<!-- створити тут div -->
    <div>
      <h2>Contact</h2>
	  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Help</a>
        <a href="#">Sales</a>
        <a href="#">Advertise</a>
	  -->
      <ul>
        <li><a href="#">Help</a></li>
        <li><a href="#">Sales</a></li>
        <li><a href="#">Advertise</a></li>
      </ul>
    </div>
  </section>
  
  <!-- Footer legal -->
  <!-- створити тут section -->
  <section>
  <!-- 
	  створити тут невпорядкований список з такмсм елементами 
	  	<a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
        &copy; 2024 Copyright Shopaholic Inc.
	  -->
    <ul>
      <li><a href="#">Terms &amp; Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li>&copy; 2024 Copyright Shopaholic Inc.</li>
    </ul>
  </section>
</footer>
```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).