# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #9 Управління потоком

1. В середині exercises створіть піддирексторію lecture-09. В середині lecture-09 створіть файли index.html та README.md

   - Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lecture #9 Управління потоком</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>

</body>
</html>

```
   - додайте таку розмітку:

```html
<style>

</style>
<p>
   Examples of the CSS float Property
   Below are some examples of how the CSS float property works.
   <img src="example.jpg">
</p>

```
   - Перемістити зображення вправо
```css
   img {
   width: 250px;
   float: right;
   margin-left: 17px;
   margin-bottom: 10px;
   }
```
   - додайте таку розмітку:
```html
<style>

</style>
<p>Статичне позиціонування є типовим для кожного елемента. Це просто означає помістіть елемент у звичайне положення в документі.</p>
<p class="positioned">Статичне позиціонування є типовим для кожного елемента. Це просто означає помістіть елемент у звичайне положення в документі.</p>
```
   - визначіть у style CSS-властивості position: static та background: yellow для класу positioned


```css
.positioned {
  position: static;
  background: yellow;
}

```
   - визначіть position: relative для класу positioned

```css
.positioned {
   position: relative;
   top: 30px;
   left: 30px;
   background: yellow;
}
```

   - визначіть position: absolute; для класу positioned

```css
.positioned {
   position: absolute;
   top: 30px;
   left: 30px;
   background: yellow;
}
```

   - додайте наступне до свого CSS, щоб зробити перший абзац також абсолютно позиціонованим:
```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```
   - Що потрібно додати до правила p:nth-of-type(1) щод змінити порядок у стеку розташування елементів
   
```css
z-index: 1;
```
   - розмістіть елемент h1 у верхній частині вікна та зафікскйте його позицію
   
```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```
   - додайте таку розмітку:
```html
<style>
dt {
  background-color: black;
  color: white;
  padding: 10px;
  margin: 1em 0;
}
</style>

<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```
   - Що треба додати до визначення dt, щоб змусити панель навігації прокручуватися разом зі сторінкою до певної точки, а потім залишатися у верхній частині сторінки.
```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

Let’s see overflow in action with the help of an example.

HTML:

 <h1>overflow not set</h1>
  <p class="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived only five centuries.</p>

CSS:

 body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    background-color: #EEEEEE;
    margin: 0 auto;
  }


In the above example, the box has a fixed width and height. However, the text that was placed inside the box is so long that it cannot fit within the box as intended. The extra text you see dropping past the black border is the overflow.

Test CSS Overflow compatibility across 3000+ browser environments. Try LambdaTest Now!

CSS overflow visible
Visible is the default value of CSS overflow. It means that not setting the CSS overflow property is the same as setting it to “visible”.

When overflow is visible, the overflowing content will not be clipped. Instead, it will display outside the element’s box and might overlap other elements on the page.

Let’s see a quick example of overflow visible.

У наведеному вище прикладі ящик має фіксовану ширину та висоту. Однак текст, розміщений у полі, настільки довгий, що не може поміститися в поле, як задумано. Додатковий текст, який ви бачите за чорною рамкою, є переповненням.


Видно переповнення CSS
Visible — це значення за замовчуванням переповнення CSS. Це означає, що не встановлювати властивість переповнення CSS те саме, що встановлювати її на «видиме».

Якщо видно переповнення, переповнений вміст не буде обрізано. Натомість він відображатиметься за межами вікна елемента та може перекривати інші елементи на сторінці.

Давайте подивимося на короткий приклад видимого переповнення.

HTML:

 <h1>overflow:visible;</h1>
   <p class="box">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived five centuries.</p>

 body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    background-color: #EEEEEE;
    margin: 0 auto;
    overflow:visible;
  }

In the above example, the p element with the class name “box” has an overflow property set to visible.

As you can notice, there is no difference between the box from the previous example, which doesn’t have any overflow property, and this box which has an overflow property. This is because the overflow property is set to visible by default.

CSS overflow hidden
Overflow hidden means the overflowing content will be hidden and will not be displayed on the page.

Once a web browser comes across the CSS overflow hidden property, it hides the extra content beyond the element’s box.

Let’s look at an example of overflow hidden.

У наведеному вище прикладі елемент p з іменем класу “box” має властивість переповнення, встановлену як visible.

Як ви можете помітити, немає ніякої різниці між полем із попереднього прикладу, яке не має жодної властивості переповнення, і цим полем, яке має властивість переповнення. Це пояснюється тим, що властивість переповнення за замовчуванням встановлено як видиме.

Переповнення CSS приховано
Переповнення приховане означає, що переповнений вміст буде приховано та не відображатиметься на сторінці.

Коли веб-браузер натрапляє на приховану властивість переповнення CSS, він ховає додатковий вміст за рамкою елемента.

Давайте розглянемо приклад прихованого переповнення.
HTML:

   <h1>overflow:hidden;</h1>
    <p class="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived five centuries.</p>

  body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    background-color: #EEEEEE;
    margin: 0 auto;
    overflow: hidden;
  }

As you can see in the example above, the p element with the class name “box” has an overflow property set to hidden. Because of this value, overflowing content is not visible on the page.

CSS overflow scroll
Setting the overflow value to scroll will hide the overflowing content from rendering outside the element’s box, along with providing scrollbars to view the content.

Note that with setting overflow to scroll, you always get both the horizontal and vertical scrollbars even if the content only requires one or the other.


Let’s look at an example of overflow scroll.

Як ви можете бачити в наведеному вище прикладі, елемент p з іменем класу “box” має властивість overflow, встановлену на hidden. Через це значення переповнений вміст не видно на сторінці.

Прокручування переповнення CSS
Встановлення значення переповнення для прокручування приховає переповнений вміст від візуалізації за межами вікна елемента разом із наданням смуг прокручування для перегляду вмісту.

Зауважте, що, налаштувавши переповнення для прокручування, ви завжди отримуєте як горизонтальну, так і вертикальну смуги прокручування, навіть якщо для вмісту потрібна лише одна чи інша.


Давайте розглянемо приклад прокручування переповнення.


HTML:

<h1>overflow:scroll;</h1>
    <p class="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived five centuries.</p>

 body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    background-color: #EEEEEE;
    margin: 0 auto;
    overflow: scroll;
  }

As you can see in the example above, the box has the overflow property set to scroll which gives us the scrollbar in the output.

CSS overflow auto
The overflow auto value is almost similar to overflow scroll, in addition it also solves the problem of getting scrollbars even when we don’t need them.

As discussed above, with overflow scroll we get both the horizontal and vertical scrollbar even if we don’t need them. But in case of overflow auto, we get the scrollbar only when the content actually goes outside the element’s box.

Let’s look at an example of overflow auto.

Як ви можете бачити в наведеному вище прикладі, поле має властивість переповнення, налаштовану на прокручування, що дає нам смугу прокрутки у виводі.

Автоматичне переповнення CSS
Значення overflow auto майже схоже на overflow scroll, крім того, воно також вирішує проблему отримання смуг прокрутки, навіть якщо вони нам не потрібні.

Як обговорювалося вище, за допомогою переповнення прокручування ми отримуємо як горизонтальну, так і вертикальну смуги прокручування, навіть якщо вони нам не потрібні. Але у випадку автоматичного переповнення ми отримуємо смугу прокрутки лише тоді, коли вміст фактично виходить за рамки елемента.

Давайте розглянемо приклад автоматичного переповнення.

HTML:

<h1>overflow:auto;</h1>
    <p class="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived five centuries.</p>

 body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    background-color: #EEEEEE;
    margin: 0 auto;
    overflow: auto;
  }


As we can see in the example above, the p element with the class name “box” has the overflow attribute set to auto. Because of that, we only get the horizontal scrollbar since our content only overflows horizontally.

X and Y property of CSS overflow
Till this point, we used the overflow shorthand property to set overflow. Instead, we can also use overflow-x and overflow-y to control the overflow horizontally or vertically.

Overflow-x is used to control the horizontal overflow of an element. In simple terms, it specifies what to do with the right or left edges of the content.

Overflow-y is used to control the vertical overflow of an element. In simple terms, it specifies what to do with the top or bottom edges of the content.

Below is an example of overflow-x and overflow-y properties.

Як ми можемо бачити в наведеному вище прикладі, елемент p з іменем класу “box” має атрибут переповнення, встановлений на auto. Через це ми отримуємо лише горизонтальну смугу прокрутки, оскільки наш вміст переповнюється лише горизонтально.

Властивості X і Y переповнення CSS
До цього моменту ми використовували скорочену властивість переповнення, щоб встановити переповнення. Замість цього ми також можемо використовувати overflow-x і overflow-y, щоб керувати горизонтальним або вертикальним переповненням.

Overflow-x використовується для керування горизонтальним переповненням елемента. Простіше кажучи, він визначає, що робити з правим чи лівим краями вмісту.

Overflow-y використовується для керування вертикальним переповненням елемента. Простіше кажучи, він визначає, що робити з верхнім або нижнім краєм вмісту.

Нижче наведено приклад властивостей overflow-x і overflow-y.
 <h1>overflow x and y</h1>
    <p class="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived five centuries.</p>

body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    background-color: #EEEEEE;
    margin: 0 auto;
    overflow-x:scroll;
    /*add horizontal  scrollbar*/
    overflow-y: hidden;
    /*hide vertical scrollbar */
    white-space: nowrap;
  }


In the example above, we set overflow-x to scroll, because of which, we can scroll right and left. Next, we also set overflow-y to hidden, because of which we can not scroll up and down.

We used a property named “white-space with the value “no-wrap”. This is used to specify how whitespace inside elements is handled. White-space set to no-wrap means the element’s content will not be wrapped to a new line.

CSS overflow wrap
With the use of the overflow-wrap property in CSS, we can tell the browser to break lines of long words in case the content overflows from the element’s box. This helps prevent layout issues caused by overflow from an unusually long string of text.

This property has three values which are:

normal: this is the default value where the browser will break lines according to its line-breaking rules. Long strings will not break even if they overflow the element’s box.
break-word: with this value, words or strings of characters too long to fit inside their container will split at random points, causing a line break.
inherit: this will inherit the value of the overflow-wrap attribute, which was set on the targeted element’s immediate parent.
Below is an example of overflow-wrap.

У наведеному вище прикладі ми встановили переповнення-x для прокручування, завдяки чому ми можемо прокручувати праворуч і ліворуч. Далі ми також встановлюємо для overflow-y значення hidden, через що ми не можемо прокручувати вгору та вниз.

Ми використали властивість під назвою «white-space» зі значенням «no-wrap». Це використовується для визначення того, як обробляються пробіли всередині елементів. Пробіли, встановлені як no-wrap, означають, що вміст елемента не буде перенесено на новий рядок.

Переповнення CSS
Використовуючи властивість overflow-wrap у CSS, ми можемо наказати браузеру розривати рядки довгих слів, якщо вміст переповнюється з вікна елемента. Це допомагає запобігти проблемам з макетом, спричиненим переповненням із надзвичайно довгого рядка тексту.

Ця властивість має три значення:

нормальний: це значення за замовчуванням, коли браузер розриває рядки відповідно до своїх правил розриву рядків. Довгі рядки не розірвуться, навіть якщо вони переповнять поле елемента.
break-word: із цим значенням слова або рядки символів, які занадто довгі, щоб поміститися в їх контейнері, розділяться у випадкових точках, викликаючи розрив рядка.
inherit: це успадкує значення атрибута overflow-wrap, який було встановлено для безпосереднього батька цільового елемента.
Нижче наведено приклад переповнення.
<h1>overflow-wrap</h1>
    <p class="box">This element contains a very long word: thisisaveryveryveryveryveryverylongword. By default, the long word will not break and wrap to the next line. With break-word, the long word will break.</p>
 body {
    font: 15px Georgia, serif;
  }
   h1{
    font: 28px Georgia, Serif;
    text-align: center;
  }
  .box{
    width: 200px;
    height: 180px;
    padding: 8px;
    border: 1px solid #000;
    line-height:21px;
    margin: 0 auto;
    background-color:yellow;
    overflow-wrap: break-word;/*try removing the overflow-wrap to see the difference*/
  }


In the above example, we can see that the box has the overflow-property set to break-word, which breaks the long string of characters and wraps them to the next line, ensuring that our content does not overflow from the container. However, if we do not specify the property, the long words will not break, and it will overflow the container.

У наведеному вище прикладі ми бачимо, що вікно має властивість переповнення, встановлену на break-word, яка розриває довгий рядок символів і переносить їх на наступний рядок, гарантуючи, що наш вміст не переповнюється з контейнера. Однак, якщо ми не вкажемо властивість, довгі слова не розіб’ються, і вони переповнять контейнер.


2. Відредагуйте файл index.html домашньої сторінки
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя домашня сторінка</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>
   <header class="page-header">
      ...
   </header>  
```
   - Визначити для класу page-header властивість position як фіксовану, що мічтиться в точці top:0, left:0, right:0 та має найвищий z-index

```css
   .page-header {
      background: #fff;
      padding: 2rem 9%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
   }   
```

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя домашня сторінка</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>
   <!-- catalog -->
   <section class="catalog" id="catalog">
      <div class="container">
        <header class="header">
          <h2>Our <span>Products</span></h2>
        </header>
         <!-- - product-container -->
         <div class="product-container">
          <div class="product">
            <!-- - додайте таку розмітку: -->
            <div class="icons">
              <a href="#" class="fas fa-shopping-cart"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#productView" class="fas fa-eye"></a>
            </div>
         
            <div class="image">
               <!-- - додайте таку розмітку: -->
              <div class="badge text-white bg-sale">Sale</div>
              <img src="images/product-1.jpg">
            </div>

            <div class="content">
              <h3>Product Name</h3>
              <div class="price">12</div>
            </div>
           </div>
         </div>
      </div>

</body>
</html>

```
   - Визначити для класу icons властивість position як абсолютну, що мічтиться в точці top:1rem, right:2rem відносно елементв з класом product 
   
```css
.product-container .product .icons a {
   display: block;
   width: 4rem;
   height: 4rem;
   line-height: 4rem;
   font-size: 2rem;
   margin-top: 1rem;
   background: #fff;
   color: #130f40;
   text-align: center;
}

.product-container .product {
   position: relative;
}

.product-container .product .icons {
   position: absolute;
   top: 1rem;
   right: 2rem;
   z-index: 10;
}
```
   - Визначити для класу badge властивість position як абсолютну, що мічтиться в точці top:1rem, left: 1rem відносно елементв з класом product 
```css
.badge {
   display: inline-block;
   padding: .35em .65em;
   font-size: .8em;
   font-weight: 400;
   line-height: 1;
   color: #fff;
   text-align: center;
   white-space: nowrap;
   vertical-align: baseline;
}

.badge:empty {
   display: none;
}

.product .badge {
   position: absolute;
   top: 1rem;
   left: 1rem;
   z-index: 1;
}

.bg-sale {
   background-color: lawngreen;
}

```

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).


