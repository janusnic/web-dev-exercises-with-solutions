# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №10 - Модуль Flex

1. В середині exercises створіть піддирексторію lecture-10. В середині lecture-10 створіть файли index.html та README.md. Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <style>
        .wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 700px;
        }

        .item-blue {
            background-color: blue;
        }
        .item-orange {
            background-color:orange;  
        }
        .item-green {
            background-color:green;
        }

        .item {
            color: white;
            width: 100px;
        }
    </style>

</head>
<body>
    <h2>CSS Flex Property</h2>
    <div class="wrapper">
        <div class="item item-blue">CSS</div>
        <div class="item item-orange">Flex</div>
        <div class="item item-green">Property</div>
    </div>
</body>
</html>

```
    - розподілити простір між елементами flex так, щоб вони мали однакову ширину та заповнювали весь доступний простір

## Solution
```css
    .item {
            color: white;
            width: 100px;
            flex-grow: 1;
    }
```
    - Встановіть для елемена blue фактор зростання 3
    - Встановіть для елемена green фактор зростання 1
    - Розрахуйте в пікселах ширину кожного з елементів item-green, item-orange, item-blue
```css
        .item-blue {
            background-color: blue;
            flex-grow: 3;
        }
        .item-orange {
            background-color:orange;  
        }
        .item-green {
            background-color:green;
            flex-grow: 1;
        }
```
## Solution

- total children widths (item-green + item-orange + item-blue) = 100 + 100 + 100 = 300
- free space = parent width - total children widths = 700 - 300 = 400
- total flex grow = item-green + item-orange + item-blue = 1 + 0 + 3 = 4
- new width = ( (flex grow / total flex grow) x free space) + width

a. Green
new width = ( (1/4 * 400) ) + 100 = 200
b. Orange
new width = ( (0/4 * 400) ) + 100 = 100
c. Blue 
new width = ( (3/4 * 400) ) + 100 = 400

2. Зробіть копію каталога navbar
    - Вирівняйте елементи навігаційної панелі по вертикалі так, щоб вони мали однакову відстань зверху та знизу.
    - Вирівняйте елементи навігаційної панелі по глризонталі так, щоб Brand Name розташувався зліва, а пункти меню - зправа. 


3. Зробіть копію каталога layout
    - Налаштуйте едементи з класом card так, щоб вони пропорційно ділили між собою весь доступний простір та мали базовий розмір, визначений змінною --min.


## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).

