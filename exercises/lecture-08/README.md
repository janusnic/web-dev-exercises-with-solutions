# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #8 Блокова модель документа

1. В середині exercises створіть піддирексторію lecture-08. В середині lecture-08 створіть файли index.html та README.md. Відредагуйте файл exercises/lecture-08/index.html

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
   <div class="box"></div>
</body>
</html>

```
  - Перепишіть властивості padding та margin за допомогою скороченого синтаксу

## Solution:
```css
/* all 4 values eqpal to this */
padding: 10px 20px 25px 20px;
padding: 10px 20px 25px; /* top | horizontal | bottom */

/* all 4 values eqpal to this */
margin: 25px 20px 25px 20px;
margin: 25px 20px;      /* vertical | horizontal */
```
2. Обчислити ширину елемента .box

```html
<body>
   <div class="box"></div>
</body>
```
```css
.box{ 
  width: 300px; 
  padding: 10px; 
  border: dashed 2px green;
}
```
## Solutions:
- якщо не встановлено:
```css
*, 
*::before, 
*::after{ 
 box-sizing: border-box;
}
```
- ширина + відступ + межа = візуалізована або відображена ширина прямокутника елемента.
- висота + відступ + межа = візуалізована або відображена висота прямокутника елемента.

- ширина 300 пікселів + дві сторони відступу (20 пікселів) + дві сторони меж (4 пікселі)
- Загальна ширина дорівнює 324 пікселям

- якщо встановлено:
```css
*, 
*::before, 
*::after{ 
 box-sizing: border-box;
}
```
- загальна ширина цього елемента становитиме 300 пікселів (а не 324 пікселів).

3. Обчислити ширину і висоту елемента .first-box
```html
<body>
   <div class="first-box"></div>
</body>
```
```css
.first-box {
  width: 200px;
  height: 100px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  
}
```
## Solution:
```css
.first-box {
  width: 200px;
  height: 100px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  /* Total width: 200px + (2 * 20px) + (2 * 8px) = 256px
     Total height: 100px + (2 * 20px) + (2 * 8px) = 156px */
}
```
4. Обчислити ширину і висоту елемента .second-box
```html
<body>
   <div class="second-box"></div>
</body>
```
```css
.second-box {
  width: 200px;
  height: 100px;
  border: 8px solid blue;
  background: yellow;
}
```
## Solution:
```css
.second-box {
  width: 200px;
  height: 100px;
  border: 8px solid blue;
  background: yellow;
  /* Total width: 200px + (2 * 8px) = 216px
     Total height: 100px +  (2 * 8px) = 116px */
}
```
5. Обчислити ширину елемента div
```css
div{
  box-sizing:content-box;
  width: 200px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
}
```
## Solution:
```css
div{
  box-sizing:content-box;
  width: 200px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  /* Total width: 200px + (2 * 20px) + (2 * 8px) = 256px*/
}
```
6. Обчислити ширину елемента div
```css
div{
  box-sizing:border-box;
  width: 200px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
}
```
## Solution:
```css
div{
  box-sizing:border-box;
  width: 200px;
  border: 8px solid blue;
  padding: 20px;
  background: yellow;
  /* Total width: 200px - (2 * 20px) - (2 * 8px) = 144px*/
}
```

7. Маємо таку розмітку:
```html
<style>
  div {
    border: 10px dotted black;
    padding: 15px;
    background: lightblue;
  }
</style>
</head>
<body>
  <div id="example1">
    <p>Правило для example1: фон всередині елемента має простягатися за межі рамки.</p>
  </div>

  <div id="example2">
    <p>Правило для example2: фон всередині елемента має простягатися до внутрішнього краю рамки.</p>
  </div>

  <div id="example3">
    <p>Правило для example3: фон всередині елемента має простягатися до краю поля вмісту.</p>
  </div>
```
  - Для кожного з example1б example2, example3 встановити властивість background-clip згідно з правилами, визначеними у відповідному параграфі
  
## Solution:
```html
<style>
#example1 {
  background-clip: border-box;  
}

#example2 {
  background-clip: padding-box;
}

#example3 {
  background-clip: content-box;
}
</style>
```
8. Є заголовок з властивістю display: inline-block, який потрібно розбити на два рядки. Його ширина має бути динамічною. 
```html
<h1><span>Awesome article</span></h1>
```
## Solution:
Щоб досягти цього, ми можемо використовувати min-content.
```css
  h1 span {
      width: min-content;
      display: inline-block;
  }
```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

