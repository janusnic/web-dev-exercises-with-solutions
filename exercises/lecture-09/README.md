# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture #9 Управління потоком




1. В середині exercises створіть піддирексторію lecture-09. В середині lecture-09 створіть файли index.html та README.md



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
Позиція фіксована
.page-header {
   background: #fff;
   padding: 2rem 9%;
    display: flex;
   align-items: center;
   justify-content: space-between;
  
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1000;
 }

Абсолютна позиція
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

Абсолютна позиція

.product-container .product {
   position: relative;
}


.product-container .product .icons {
   position: absolute;
   top: 1rem;
   right: 2rem;
   z-index: 10;
}

Badges
<!-- PRODUCT→
<article class="product">

               <div class="icons">
                   <a href="#" class="fas fa-shopping-cart"></a>
                   <a href="#" class="fas fa-heart"></a>
                   <a href="#" class="fas fa-eye"></a>
               </div>

               <div class="image">
                   <div class="badge text-white bg-sale">Sale</div>
                   <img src="images/product-5.jpg">
               </div>

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



## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).


