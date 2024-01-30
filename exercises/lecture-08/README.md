# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #8 Блокова модель документа

1. В середині exercises створіть піддирексторію lecture-08. В середині lecture-08 створіть файли index.html та README.md


- Відредагуйте файл exercises/lecture-08/index.html

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

	<style>
	.box{ 
		padding-top:    10px; 
		padding-right:  20px; 
		padding-bottom: 25px; 
		padding-left:   20px;  

		margin-top:    25px; 
		margin-right:  20px; 
		margin-bottom: 25px; 
		margin-left:   20px;  

	}
	</style>
</head>
<body>
    
   
</body>
</html>

```

- Ререпишіть властивості padding та margin за допомогою скороченого синтаксу

/* all 4 values eqpal to this */
padding: 10px 20px 25px 20px;
padding: 10px 20px 25px; /* top | horizontal | bottom */

/* all 4 values eqpal to this */
margin: 25px 20px 25px 20px;margin: 10px; /* Apply to all four sides */
margin: 25px 20px;      /* vertical | horizontal */



- Обчислити ширину елемента .box

.box{ 
  width: 300px; 
  padding: 10px; 
  border: dashed 2px green;
}

ширина + відступ + межа = візуалізована або відображена ширина прямокутника елемента.
висота + відступ + межа = візуалізована або відображена висота прямокутника елемента.

ширина 300 пікселів + дві сторони відступу (20 пікселів) + дві сторони меж (4 пікселі)
Загальна ширина дорівнює 324 пікселям


якщо встановленл:
*, 
*::before, 
*::after{ 
 box-sizing: border-box;
}

загальна ширина цього елемента становитиме 300 пікселів (а не 324 пікселів).

- Обчислити ширину і висоту елемента .first-box
.first-box {
  width: 200px;
  height: 100px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  /* Total width: 200px + (2 * 20px) + (2 * 8px) = 256px
     Total height: 100px + (2 * 20px) + (2 * 8px) = 156px */
}
- Обчислити ширину і висоту елемента .second-box
.second-box {
  width: 200px;
  height: 100px;
  border: 8px solid blue;
  background: yellow;
  /* Total width: 200px + (2 * 8px) = 216px
     Total height: 100px +  (2 * 8px) = 116px */
}


- Обчислити ширину елемента div
div{
  box-sizing:content-box;
  width: 200px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  /* Total width: 200px + (2 * 20px) + (2 * 8px) = 256px*/
}


- Обчислити ширину елемента div
div{
  box-sizing:border-box;
  width: 200px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  /* Total width: 200px - (2 * 20px) - (2 * 8px) = 144px*/
}



<style>
#example1 {
  border: 10px dotted black;
  padding: 15px;
  background: lightblue;
  background-clip: border-box;  
}

#example2 {
  border: 10px dotted black;
  padding: 15px;
  background: lightblue;
  background-clip: padding-box;
}

#example3 {
  border: 10px dotted black;
  padding: 15px;
  background: lightblue;
  background-clip: content-box;
}
</style>
</head>
<body>

<h1>The background-clip Property</h1>

Властивість background-clip визначає, наскільки далеко має простягатися фон всередині елемента

<p>The background-clip property defines how far the background should extend within an element.</p>

<p>background-clip: border-box (this is default):</p>
<div id="example1">
За межею простягається фон
  <p>The background extends behind the border.</p>
</div>

<p>background-clip: padding-box:</p>
<div id="example2">
Фон простягається до внутрішнього краю рамки.
  <p>The background extends to the inside edge of the border.</p>
</div>

<p>background-clip: content-box:</p>
<div id="example3">
Фон простягається до краю поля вмісту

  <p>The background extends to the edge of the content box.</p>
</div>


Роздільник із заголовком

є заголовок «Awesome article», який потрібно розбити на два рядки. Його ширина має бути динамічною. Щоб досягти цього, ми можемо використовувати min-content.

span {
    width: min-content;
}


Назва з підкресленням
заголовок є елементом рівня блоку.
Іншим цікавим випадком використання внутрішніх значень є заголовок із рамкою, яка має таку саму ширину, що й його вміст. 

Зверніть увагу, що заголовок є елементом рівня блоку. Щоб досягти цього, ми можемо використати рішення, яке обгортає вміст в елемент <span>, а потім рамку можна застосувати до <span>.

<h2><span>A title for an awesome article</span></h2>

h2 span {
    border-bottom: 2px solid #e2deed;
}

Щоб зробити це краще, ми можемо використати fit-content, і це зробить ширину заголовка такою ж, як і його вміст. Перегляньте наведений нижче CSS:

h2 {
    width: fit-content;
    margin-left: auto; /* For centering */
    margin-left: auto; /* For centering */
    border-bottom: 2px solid #e2deed;
}


Заголовок і опис
У нас є заголовок і текст опису. Ширина тексту опису не повинна перевищувати ширину основного заголовка. Для мене це цікавий варіант використання, який я не думав, що це можливо зробити лише в CSS.

Розглянемо наступний макет.

Щоб реалізувати вищезазначене, нам потрібно додати min-content як ширину для розділу обтікання та max-content як ширину для елемента заголовка.

section {
  width: min-content;
  margin: 0 auto;
  text-align: center;
}

h2 {
  width: max-content;
}
<div class="wrapper">
  <section>
    <h2>CSS is cool and awesome. Isn't it?</h2>
    <p>This text won't go beyond the title width</p>
  </section>
  
  <section>
    <h2>CSS is cool</h2>
    <p>This text won't go beyond the title width.</p>
  </section>
  
  <section>
    <h2>CSS is cool and awesome</h2>
    <p>This text won't go beyond the title width.. Do you want a proof? Here you go.</p>
  </section>
</div>
<div class="wrapper">
  <h2 class="title">A title for an awesome article</h2>
</div>


4. Весь текст у браузері відображатиметься в одному рядку, доки він не досягне межі вікна браузера. 

```html
<body>


</body>
```
### Рішення:
```html
<body>


</body>
```


## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

