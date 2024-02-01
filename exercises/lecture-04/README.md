# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #4 Селектори CSS

1. В середині exercises створіть піддирексторію lecture-04. В середині lecture-04 створіть файли index.html, css/main.css та README.md. Відредагуйте файл index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 4 challenges</title>

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

	<link href="css/main.css" rel="stylesheet">

</head>
<body>
	
  	<section>
        <h1>This is a heading 1</h1>
		<h2>This is a heading 2</h2>
		<h3>This is a heading 3</h3>
    </section>

	<main id='main'>
		<h2 id="heading">This is a heading.</h2>
		<p class="heading">This is a heading.</p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe placeat quisquam, eveniet aliquam ipsum amet cupiditate repudiandae obcaecati, impedit aperiam. 
	
	</main>
	
	<footer>
		<h2 class="h2">This is a h2.</h2>
		<p class="heading">This is a heading.</p>
		
	
	</footer>

	<p class="heading">This is a heading.</p>

</body>
</html>
```

2. Відредагуйте файл css/main.css
	- визначити для усіх елементів h1, h2, h3 на веб-сторінці властивість колір тексту = сірий. 
	- вибрати елемент з ідентифікатором main, визначити для нього властивість color: #e60202;.
	- вибрати елементи з класом h2, визначити для нього властивість color: червоний.
	- Виділити всі елементи з класом heading та встановити для них колір тексту у зелений.

### Solutions:

```css
h1, h2, h3 {
    color: gray;
}

#main {
    color: #e60202;
}

.heading {
    color: green;
}

```

3. Відредагуйте файл index.html
	- Додайте розмітку:
```html
	<ul>
		<li>HTML</li>
		<li>CSS</li>
	</ul>
```

	- виберіть елементи, які є прямими дочірніми елементами батьківського елемента ul та встановіть для них властивість font-weight: bold.
### Solutions:
```css
	ul > li {
		font-weight: bold;
	}
```

	- Додати до index.html
```html
	<section>
		<p>This is a paragraph.</p>
		<div>
			<p>This is another paragraph.</p>
		</div>
	</section>
```	
	- Відредагуйте файл css/main.css
	
```css
	section > p {
		color: red;
	}
```
	- Чи зміниться колір тексту p всередині елемента div?
### Solutions:
	<!-- Цього не буде. Оскільки ми використовували знак > між section і p, цей стиль застосовуватиметься лише до прямого дочірнього елемента p елемента section. -->


	- змінити розмір шрифту всіх елементів p всередині елемента section, незалежно від їхнього рівня вкладеності.
### Solutions:
```css
	section p {
		font-size: 20px;
	}
```

4. Відредагуйте файл index.html

	- Додати розмітку
```html
	<h1>This is first heading.</h1>
	<h2>This is second heading.</h2>
	<h2>This is another second heading.</h2>
```
	- змінити колір тексту на indigo першого елемента h2, а не всіх елементів h2. 
### Solutions:
	<!-- Можна  використовувати комбінатор сусіднього брата . -->

```css
	h1 + h2{
		color: indigo;
	}
```
	<!-- Наведений вище стиль змінить лише колір елемента h2, який є безпосереднім братом елемента h1, що означає, що він стоїть одразу після елемента h1 і між ними не повинно бути жодного іншого елемента. -->

	- Додати розмітку
```html
    <p class="first">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <a href="#">Accusantium</a> saepe placeat quisquam, eveniet aliquam ipsum amet cupiditate repudiandae obcaecati, 
        <span class="first">
        <a href="#">Accusantium</a> impedit aperiam. Expedita, nobis odit. Dolor eius aut quisquam laboriosam recusandae?
        </span>
    </p>
```
	- застосувати до всіх посилань, нащадкам p.first властивість color: green 
### Solutions:
```css 
	p.first a {
		color: green;
	}
```
	- стилізувати посилання з властивістю color: green, що розташовані всередині будь-якого тегу з класом .first, що є нащадком елементу p
### Solutions:
```css 
	p .first a {
		color: green;
	}
```

	- Додати розмітку
```html
	<p>I'm sibling paragraph of div.</p>
	<div>
	<p>This is a paragraph inside a div.</p>
	<p>This is another paragraph inside a div.</p>
	</div>
	<p>I'm sibling paragraph of div.</p>
	<h6>I'm sibling heading of div.</h6>
	<p>I'm sibling paragraph of div.</p>
```

	- створити стиль color: salmon для всіх елементів p, що стоять після елемента div.
### Solutions:
```css
	div ~ p {
		color: salmon;
	}
```


5. Маємо іменовані кольори black, blue, green, red, white, yellow
	- визначати ці кольори за допомогою шістнадцяткового коду: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. 
	- визначати ці кольори у десятковій системі числення за допомогою функції RGB. 
	- визначати ці кольори, використовуючи відсотки. 
	- визначати ці кольори використовуючи альфа-канал, що задає прозорість. 
### Solutions:
```
	white
	rgb (255, 255, 255)
	rgb (255, 255, 255 / 1)
	rgba (255, 255, 255, 1)
	#FFFFFF або #FFF
	
	black
   	rgb (000, 000, 000)
	rgb (000, 000, 000 / 1)
	rgba (000, 000, 000, 1)
	#000000 або #000
	
	red
	rgb (255, 000, 000)
	rgb (255, 000, 000 / 1 )
	rgba (255, 000, 000,1)
	#FF0000 або #F00
	
	green
	rgb (000, 255, 000)
	rgb (000, 255, 000 / 1)
	rgba (000, 255, 000,1)
	#00FF00 або #0F0
	
	blue
	rgb (000, 000, 255)
	rgb (000, 000, 255 / 1)
	rgba (000, 000, 255,1)
	#0000FF або #00F

	yellow
	rgb (255, 255, 000)
	rgb (255, 255, 000 / 1)
	rgba (255, 255, 000, 1)
	#FFFF00 або #FF0
```

6. Використовцючи hsl, створіть для класу translucent-box напівпрозору властивість background з такими значеннями
	- Hue = 0deg
	- Saturate =  100%
	- Lightness =  50%

	- Додати розмітку
```html
	<section>
		<div class="translucent-box"></div>
	</section>
```
### Solutions:
```css 
  .translucent-box {
		background: hsl(0deg 100% 50% / 0.5);
  }
```

7. базовий розмір шрифта для кореневого елемента = 100%
	- визначити розмір шрифта для body, що успадковує розмір шрифта кореневого елемента, збільшений на 40 відсотків

```css 
	  body {  
		font-size: 1.4rem; 
		} 
```
	- визначити розмір шрифта для h1, що успадковує розмір шрифта кореневого елемента, збільшений на 140 відсотків
```css 
	h1 {  
		font-size: 2.4rem; 
	}
```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

