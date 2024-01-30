# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №10 - Модуль Flex

1. В середині exercises створіть піддирексторію lecture-10. В середині lecture-10 створіть файли index.html та README.md

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
            /* flex-grow: 1; */
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
- розподілити простір між елементами flex так, щоб вони мали однакову ширину та зфвоагювали весь доступний простір

    .item {
            color: white;
            width: 100px;
            flex-grow: 1;
    }

- Встановіть для елемена blue фактор зростання 3
- Встановіть для елемена green фактор зростання 1
- Розрахуйте в пікселах ширину кожного з елементів green, orange, blue
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
total children widths (green + orange + blue) = 100 + 100 + 100 = 300
free space = parent width - total children widths = 700 - 300 = 400
total flex grow = green + orange + blue = 1 + 0 + 3 = 4
new width = ( (flex grow / total flex grow) x free space) + width
a. Green
new width = ( (1/4 * 400) ) + 100 = 200
b. Orange
new width = ( (0/4 * 400) ) + 100 = 100
c. Blue 
new width = ( (3/4 * 400) ) + 100 = 400


Ось HTML і CSS, з якими ми працюємо:

HTML

<div class="parent">
  <div class="green"></div>
  <div class="yellow"></div>
</div>
    

CSS
.parent {
  width: 800px;
}
.green {
  width: 300px;
  flex-shrink: 4;
}
.yellow {
  width: 600px;
  flex-shrink: 6;
}

формула:
нова ширина = ширина - (простір зменшення х коефіцієнт зменшення)
Змінні
ширину необхідно розрахувати
shrink space потрібно розрахувати
необхідно розрахувати коефіцієнт shrink
Крок 2: Заповніть те, що ми знаємо

Зі значення CSS можна зробити такий висновок:

     Батьківський елемент (контейнер) має ширину 800
     Зелений дочірній елемент має ширину 300 і flex-shrink 4
     Жовтий дочірній елемент має ширину 600 і flex-shrink 6

Давайте оновимо нашу діаграму такою інформацією:

  Green   Yellow
flex shrink   4   6
width   300   600
#
Step 3: Calculate "shrunk space"

This is the formula:
shrunk space = total children widths - parent width

Remember what we know:
    The parent element (container) has a width of 800
    The child elements has a width of 300, 600

Great, we can use that information to calculate "total children widths":

Крок 3: обчисліть "зменшений простір"

Це формула:
скорочений простір = загальна ширина дочірніх елементів - ширина батьківського елемента

Згадайте, що ми знаємо:
     Батьківський елемент (контейнер) має ширину 800
     Дочірні елементи мають ширину 300, 600

Чудово, ми можемо використати цю інформацію для розрахунку «загальної ширини дітей»:

total children widths = green + yellow = 300   + 600 => 900


Now we can calculate our "shrunk space":

Тепер ми можемо розрахувати ваш "простір скорочення":

shrunk space = total children widths - parent width = 900 -  800 => 100
    

Let's update our chart and add the additional information:
Давайте оновимо нашу діаграму та додамо додаткову інформацію:
  Green   Yellow  Total
flex shrink   4   6   
width   300   600   
shrunk space  -   -   100
#
Step 4: Calculate "shrink ratio"

This is the formula:

shrink ratio = (width x flex shrink) / total shrink scaled width
    

Notice this new variable, total shrink scaled width. So we need to calculate that first to get our shrink ratio.
#

Step 4-1: Calculate "total shrink scaled width"

This is the formula:

Крок 4. Розрахуйте «коефіцієнт усадки»

Це формула:

коефіцієнт усадки = (ширина х flex shrink) / загальна масштабована ширина усадки
    

Зверніть увагу на цю нову змінну, масштабовану ширину загального зменшення. Отже, нам потрібно спочатку обчислити це, щоб отримати наш коефіцієнт усадки.
#

Крок 4-1: обчисліть «загальну зменшену ширину»

Це формула:


total shrink scaled width = Σ(width x flex shrink)


"Σ" Sigma is a math symbol that means the summation of something. So we need to apply width x flex shrink for all the child elements.

"Σ" Сигма - це математичний символ, який означає підсумовування чогось. Отже, нам потрібно застосувати ширину x flex shrink для всіх дочірніх елементів.
Green
width x flex shrink = 300 x 4=> 1200

Yellow
width x flex shrink = 600 x 6=> 3600

Finally

total shrink scaled width = 1200 + 3600

=> 4800
    

Let's add this information to our chart:
  Green   Yellow  Total
flex shrink   4   6   
width   300   600   
shrunk space  -   -   100
total shrink scaled width   -   -   4800
#

Step 4-2: Back to calculating "shrink ratio"

Fantastic, now that we know the "total shrink scaled width", we can return with calculating the "shrink ratio". Remember the formula:

Крок 4-2: Поверніться до розрахунку shrink ratio "коефіцієнта усадки"

Чудово, тепер, коли ми знаємо «загальну масштабовану ширину зменшення», ми можемо повернутися до обчислення «коефіцієнта зменшення». Запам'ятайте формулу:

shrink ratio = (width x flex shrink) / total shrink scaled width
    

Green
shrink ratio = (300 x 4) / 4800=> 0.25

Yellow
shrink ratio = (600 x 6) / 4800=> 0.75
    

Let's add this information to our chart:
  Green   Yellow  Total
flex shrink   4   6   
width   300   600   
shrunk space  -   -   100
shrink ratio  0.25  0.75  
#

Final step: Calculate "new width"
Останній крок: обчисліть "нову ширину"

Remember the formula:
new width = width - (shrink space x shrink ratio)

Green
new width = 300 - (100 x 0.25)=> 275

Yellow
new width = 600 - (100 x 0.75)=> 525
    
Done! We have successfully calculated the new width 🥳
  Green   Yellow
width   300   600
shrunk space  4   6
shrink ratio  0.25  0.75
new width   275   525
    
    <style>
        /* header */

        *,
        *:before,
        *:after {
            box-sizing: border-box;
        }

        body {
            margin: 0;
        }

        a {
            text-decoration: none;
            color: #222;
        }

        .wrapper-div {
            max-width: 1140px;
            padding-left: 1rem;
            padding-right: 1rem;
            margin-left: auto;
            margin-right: auto;
        }

        .brand {
            font-weight: bold;
            font-size: 20px; 
        }

        .site-header {
            background-color: #def7ff; 
            
        }

        .nav__item a {
            display: block;
            padding: 1.5rem 1rem; 
        }


        .site-header__wrapper {
            padding-top: 0;
            padding-bottom: 0; 
            /* display: flex;
            justify-content: space-between;
            align-items: center; */
        }

        .nav__wrapper {
            /* display: flex;  */
            list-style: none;
        }

    </style>
</head>
<body>
    <!-- Header Start -->
    <header class="site-header">
        <div class="wrapper-div site-header__wrapper">
          <a href="#" class="brand">Brand</a>
          <nav class="nav">
            <ul class="nav__wrapper">
              <li class="nav__item"><a href="#">Home</a></li>
              <li class="nav__item"><a href="#">About</a></li>
              <li class="nav__item"><a href="#">Services</a></li>
              <li class="nav__item"><a href="#">Hire us</a></li>
              <li class="nav__item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
    </header>
    <!-- Header End -->


## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).


