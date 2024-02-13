# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #2

1. Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- змініть title на: Моя домашня сторінка -->
    <title>Document</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>

</body>
</html>

```
2. В середині exercises створіть піддирексторію lecture-02. В середині lecture-02 створіть файли index.html та README.md

**Результатом повинна стати така структура:**
```
├── exercises
│   ├── index.html
│   ├── lecture-01
│   │   ├── index.html
│   │   └── README.md
│   ├── lecture-02
│   │   ├── index.html
│   │   └── README.md
│   └── README.md
├── index.html
├── LICENSE
└── README.md

```

3. Відредагуйте файл exercises/lecture-02/index.html

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- змініть title на: Моя домашня сторінка -->
    <title>Document</title>
</head>
<body>
    
    <!-- Введіть свій код під цим рядком-->
    <!-- Додайте заголовок першого рівня: Ласкаво просимо до мого сайту! -->
	<h1>Ласкаво просимо до мого сайту!</h1>
    
    <!-- Додайте підзаголовок другого оівня під назвою Про програмування -->

    <h2>About Programming</h2>
    
	<!-- Додайте підзаголовок третього рівня під назвою Про HTML -->

    <h3>About HTML</h3>

   <!-- Додайте підзаголовок третього рівня під назвою Про CSS -->

    <h3>About CSS</h3>
   
</body>
</html>

```

4. Весь текст у браузері відображатиметься в одному рядку, доки він не досягне межі вікна браузера. 

```html
<body>

Весь текст у браузері відображатиметься в одному рядку, доки він не досягне межі вікна браузера. 

<!-- додати розрив рядків для наступних 3-х речень -->

This is regular text.
This is another line after line break.
This is another line after line break.

<!-- форматувати наступні 3 речення як параграфи -->

This is a first paragraph. You can add any kind of text here. 
This is a second paragraph. This is some sample text. 
This is another paragraph. You can add multiple lines of text in this paragraph.

<p>This is a first paragraph. You can add any kind of text here. </p>
<p>This is a second paragraph. This is some sample text. </p>
<p>This is another paragraph. You can add multiple lines of text in this paragraph. </p>

</body>
```
### Рішення:
```html
<body>

Весь текст у браузері відображатиметься в одному рядку, доки він не досягне межі вікна браузера. 

<!-- додати розрив рядків для наступних 3-х речень -->

This is regular text.<br/>
This is another line after line break.<br/>
This is another line after line break.<br/>

<!-- форматувати наступні 3 речення як параграфи -->
<p>This is a first paragraph. You can add any kind of text here. </p>
<p>This is a second paragraph. This is some sample text. </p>
<p>This is another paragraph. You can add multiple lines of text in this paragraph. </p>

</body>
```

5. Змінити <зміни_мене> на відповідні <теги> HTML

```html

	<!-- Тут має бути розділ сторінки, що містить посилання на інші сторінки або частини сторінок.  -->
	<change_me>
		<!-- Тут має бути елемент списку елементів, де порядок елементів не важливий -->
		<change_me>
 			<!-- Елементи списку є дочірніми вузлами списку елементів. -->
	  			<change_me>
	  				<!-- Елемент з обов’язковим атрибутом href, що задає URl-адресу веб-сторінки: -->
	  				<change_me href="/">Home</change_me>
				</change_me>
				<change_me><a href="/events">Current Events</a></change_me>
 			</change_me>
 		</change_me>
	</change_me>

	<!-- Тут має бути розділ сторінки, що містить посилання на інші сторінки або частини сторінок.  -->
	<nav>
		<!-- Тут має бути елемент списку елементів ul, де порядок елементів не важливий -->
	 	<ul>
			<!-- Елементи списку li є дочірніми вузлами ul. -->
	  		<li>
				<!-- Елемент з обов’язковим атрибутом href, що задає URl-адресу веб-сторінки: -->
	 			<a href="/">Home</a>
	  		</li>
	  		<li><a href="/events">Current Events</a></li>
	 	</ul>
	</nav>

	<!-- Тут має бути елемент заголовка що обгортає елемент заголовка 1 та парвграф. -->
	<change_me>
		 <change_me>Welcome to...</change_me>
		 <change_me>Це елемент заголовка 1</change_me>
	</change_me>

	<change_me>
	   <!-- Це початок короткого абзацу. Він має деякі  вкладені теги, щоб підкреслити/виділити частину тексту. Наприклад: -->
	   <change_me>Це жирний текст.</change_me>
	   І, що ще цікавіше:
	   <change_me>Це курсив!</change_me>
	</change_me>

	<!-- Це розділ, що є базовим контейнером для елементів основного потоку. -->
	<change_me>
		<change_me>Це підзаголовок, укладений у теги "h3".</change_me>

   		<change_me>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam optio expedita provident ratione itaque numquam, dolorem, at consequuntur laborum excepturi magnam culpa impedit obcaecati enim dolor totam. Assumenda, vel impedit?</change_me>
   
		<!-- Наступний тег використовують для визначення рядкових елементів у документі -->
		<p>Частка тексту <change_me style="color:#ff0000">червоного</change_me> кольору.</p>
		
		
   		<!-- Тут має бути горизонтальна лінія  -->
    	<change_me />
   
	    <change_me>
	   		Зменшує розмір шрифта на одиницю по відношенню до розміру звичайного тексту.
	   	</change_me>

   		<!-- Цей тег використовується для виділення цитат всередині документа. Тег має атрибут cite -->
		<change_me cite="https://www.ukrlib.com.ua/books/printit.php?tid=1052">Но зла Юнона, суча дочка, Розкудкудакалась, як квочка, — Енея не любила — страх; Давно уже вона хотіла, Його щоб душка полетіла К чортам і щоб і дух не пах.
		</change_me>

		<!-- Цей тег використовується для виділення коротких цитат.  -->
		<change_me>Розкудкудакалась, як квочка, — Енея не любила — страх</change_me>

		<!-- Цей тег маркує текст как цитату чи примітку на інший матеріал.  -->
		<p>ІВАН КОТЛЯРЕВСЬКИЙ <change_me>ЕНЕЇДА</change_me></p>

   		<!-- Цей тег дозволяє зберегти оригінальне форматування.  -->
		<change_me>
		       Но зла Юнона, суча дочка,
		       Розкудкудакалась, як квочка, —
		       Енея не любила — страх;
		       Давно уже вона хотіла,
		       Його щоб душка полетіла
		       К чортам і щоб і дух не пах.
		</change_me>
	</change_me>
	<!-- Це розділ, що є нижнім колонтитулом для його найближчого предка або кореневого елемента. -->
	<change_me>
	    <!-- container -->
	    <div>
		    <!-- Замінити символ © посиланням на сутність -->
		    <p>© 2024 All rights reserved.</p>
	    </div>
	</change_me>

```
### Рішення:
Змінити <зміни_мене> на відповідні <теги> HTML

```html

	<!-- Тут має бути розділ сторінки, що містить посилання на інші сторінки або частини сторінок.  -->
	<nav>
		<!-- Тут має бути елемент списку елементів ul, де порядок елементів не важливий -->
	 	<ul>
			<!-- Елементи списку li є дочірніми вузлами ul. -->
	  		<li>
				<!-- Елемент з обов’язковим атрибутом href, що задає URl-адресу веб-сторінки: -->
	 			<a href="/">Home</a>
	  		</li>
	  		<li><a href="/events">Current Events</a></li>
	 	</ul>
	</nav>

	<!-- Тут має бути елемент заголовка що обгортає елемент заголовка 1 та парвграф. -->
	<header>
		 <p>Welcome to...</p>
		 <h1>Це елемент заголовка 1</h1>
	</header>

	<p>
	   <!-- Це початок короткого абзацу. Він має деякі  вкладені теги, щоб підкреслити/виділити частину тексту. Наприклад: -->
	   <strong>Це жирний текст.</strong>
	   І, що ще цікавіше:
	   <em>Це курсив!</em>
	</p>

	<!-- Це розділ, що є базовим контейнером для елементів основного потоку. -->
	<div>
		<h3>Це підзаголовок, укладений у теги "h3".</h3>

   		<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam optio expedita provident ratione itaque numquam, dolorem, at consequuntur laborum excepturi magnam culpa impedit obcaecati enim dolor totam. Assumenda, vel impedit?</div>
   
		<!-- Наступний тег використовують для визначення рядкових елементів у документі -->
		<p>Частка тексту <span style="color:#ff0000">червоного</span> кольору.</p>

   		<!-- Тут має бути горизонтальна лінія  -->
    	<hr />
   
	    <small>
	   		Зменшує розмір шрифта на одиницю по відношенню до розміру звичайного тексту.
	   	</small>

   		<!-- Цей тег використовується для виділення цитат всередині документа. Тег має атрибут cite -->
		<blockquote cite="https://www.ukrlib.com.ua/books/printit.php?tid=1052">Но зла Юнона, суча дочка, Розкудкудакалась, як квочка, — Енея не любила — страх; Давно уже вона хотіла, Його щоб душка полетіла К чортам і щоб і дух не пах.
		</blockquote>

		<!-- Цей тег використовується для виділення коротких цитат.  -->
		<q>Розкудкудакалась, як квочка, — Енея не любила — страх</q>

		<!-- Цей тег маркує текст как цитату чи примітку на інший матеріал.  -->
	
		<p>ІВАН КОТЛЯРЕВСЬКИЙ <cite>ЕНЕЇДА</cite></p>

   		<!-- Цей тег дозволяє зберегти оригінальне форматування.  -->
	
	  	<pre>
	       Но зла Юнона, суча дочка,
	       Розкудкудакалась, як квочка, —
	       Енея не любила — страх;
	       Давно уже вона хотіла,
	       Його щоб душка полетіла
	       К чортам і щоб і дух не пах.
	   	</pre>
	</div>

	<!-- Це розділ, що є нижнім колонтитулом для його найближчого предка або кореневого елемента. -->
    <footer>
       <!-- container -->
       <div>
       <!-- Замінити символ © посиланням на сутність -->
         <p>&copy; 2024 All rights reserved.</p>
       </div>
    </footer>

```

6. Створіть на https://github.com мінімальний сайт, що складається з 4 сторінок:

	1. Головна - index.html
	2. Про нас - about.html
	3. Каталог - catalog.html
	4. Контакти - contact.html

Кожна сторінка повинна мати такі розділи

	- nav
	- header
	- footer

- Розділ nav повинен містити відносні посилання нв сторінки сайта, наприклад <a href="/">Home</a>
- Розділ header повинен містити тег загодовку 1-го ріаня.
- Розділ footer повинен містити абсолютеі посилання нв зовнішні сторінки, наприклад: <a href="https://www.google.com">Google</a>, та відкривати відповідний документ у новому вікні.

Завантажте створений сайт у власний репозиторій персонального сайту. 

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).
