# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #7 Графічні формати

1. В середині exercises створіть піддирексторію lecture-07. В середині lecture-07 створіть файли index.html та README.md

- Відредагуйте файл index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <style>

    </style>

</head>

<body class="body">
    
    <h1>Gradient Text Glow</h1>

    <div class="percents">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum magnam quae adipisci minima illum porro eius ipsa rem. Sequi eaque facere necessitatibus fugiat rerum facilis reprehenderit numquam dignissimos itaque!
    </div>

    <div class="negative">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum magnam quae adipisci minima illum porro eius ipsa rem. Sequi eaque facere necessitatibus fugiat rerum facilis reprehenderit numquam dignissimos itaque!
    </div>

    <div class="radial">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum magnam quae adipisci minima illum porro eius ipsa rem. Sequi eaque facere necessitatibus fugiat rerum facilis reprehenderit numquam dignissimos itaque!
    </div>

</body>
</html>

```
    - Встановити background для класу body як лінійний градієнт, що напрвлений вправо, та моє такі точки зупинки: 5%, 17%, 40%, 85%, 95%. Для кожної точки зупинки встановити колір, що змінюється від світлозеленго до темнозеленго. 
```html
 <style>

.body {background-image: linear-gradient(to right,
    rgb(0, 225, 0) 5%, rgb(30, 205, 5) 17%, rgb(0, 155, 85) 40%, rgb(2, 55, 1) 85%, #025a1ff1 95%);
    }
</style>
```
    - Встановити background для класу negative як лінійний градієнт, що напрвлений вліво, та моє такі точки зупинки: -50%, -10%, 0%, 100%, 150%. Для кожної точки зупинки встановити колір, що змінюється від світлосинього до темносинього. 
```html
 <style>
.negative { 
    background: linear-gradient(
        to right, 
        rgb(0, 200, 255) -50%, 
        rgb(0, 150, 255) -10%,
        rgb(0, 100, 255) -0%,
        rgb(0, 20, 200) 100%,
        rgb(0, 2, 100) 150%
        );
    }
</style>
```
    - Встановити background для класу percents як лінійний градієнт, що напрвлений вниз, та моє такі точки зупинки: 2em, 4em, 8em, 16em, 32em, 64em, 128em. Для кожної точки зупинки встановити колір, що змінюється від світлозеленого до темнозеленого. 
```html
 <style>
/* Смугастий фон: */
 .percents {
    background: linear-gradient(to right, rgba(0, 64, 9, 0.89) 2em, #025a1ff1 3em, rgb(6, 162, 79) 7em, rgba(60, 200, 70, 0.89) 12em, rgba(0, 64, 9, 0.89) 22em, #025a1ff1 31em, rgb(6, 162, 79) 47em, rgba(60, 200, 70, 0.89) 52em);
}
</style>
```
    - Встановити background для класу radial два радіальних градієнта з типом ellipse, перший з яких містить 2 кольори - помаранчевмй та прозорий і напрвлений вверх, а другий містить 2 кольори - червонмй та прозорий і напрвлений вниз. 

```html
 <style>
.radial{
    background: radial-gradient(ellipse at top, #e66465, transparent),
    radial-gradient(ellipse at bottom, #4d9f0c, transparent);
}
</style>
```
2. SVG
    - Стаорити svg-прямокутник розміром 100х100 з координатами 20,20 20, 20. Для обрамлення встановити колір #1c87c9 та товщину лінії 4. Встановити фон прямокутника lightgray.
```html
<svg width="180" height="180">
    <rect x="20" y="20" rx="20" ry="20" width="100" height="100" style="fill:lightgray; stroke:#1c87c9; stroke-width:4;"/>
</svg>
```
    - Стаорити svg-коло розміром 200х200 радіусом = 60 та центром з координатами 100, 70. Для обрамлення встановити червоний колір та товщину лінії 4. Встановити фон кола lightgray.
```html
<svg width="200" height="200">
    <circle cx="100" cy="70" r="60" stroke="red" stroke-width="4" fill="lightgray"/>
</svg>
```

    - Створити svg-малюнок годинника, що показує час = 3 години
```html
<svg width="100" height="100" fill="red" stroke="white" stroke-width="4">
    <circle cx="50" cy="50" r="40"></circle>
    <path d="M50 30v25h20"></path>
</svg>
```

    - Створити svg-малюнок зірки
```html
<svg width="200" height="200">
    <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lightgray; stroke:#1c87c9; stroke-width:4; fill-rule:evenodd;"/>
</svg>
```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).
