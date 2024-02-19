# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №12 - Чуйний дизайн

1. В середині exercises створіть піддирексторію lecture-12. В середині lecture-12 створіть файли index.html:

```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Dynamic font-size</title>
  <style>
  * {
    margin: 0;
  }

  body {
    color: #000;
    background: #fff;
    font-family: Arial, sans-serif;
    padding: 1em;
  }
  </style>
</head>

<body translate="no">
<p>
  This text has a font size of 20px at viewport width of 768px and font size of 36px when viewport width is 1920px. But if the viewport width is less than 768px, the font-size won't get lower than 16px and if the viewport width is more than 1920px font size will stop scaling at 48px.
</p>

</body>
</html>

```

- Використовуючи функції clamp() та calc(), розрахуйте font-size, дотримуючись таких вимог:
  - Якщо ширина вікна перегляду становить 768 пікселів, розмір шрифту має дорівнювати 20 пікселям
  - Якщо ширина вікна перегляду перевищує 768 пікселів, розмір шрифту масштабується пропорційно
  - При 1920 пікселях розмір шрифту має дорівнювати 36 пікселями
  - Для екранів, менших за 768 пікселів, розмір шрифту не має бути меншим за 16 пікселів
  - Для екранів, розмір яких перевищує 1920 пікселів, розмір шрифту не має перевищувати 48 пікселів


```css
body {
    color: #000;
    background: #fff;
    font-family: Arial, sans-serif;
    font-size: clamp(16px, calc(20px + (36 - 20) * (100vw - 768px)/(1920 - 768)), 48px);
    padding: 1em;
  }
```

2. Зробіть копію каталога grid-areas
    - Створіть "Mobile First" media-запит, що перетворює макет іменованих областей з 2-х колонок на 1 колонку, при переході через контрольну точку 786px
    
3. Зробіть копію каталога navbar
    - Створіть "Mobile First" media-запит, що змінює макет navbar з горизонтального меню нв вертикальне меню при переході через контрольну точку 800px.

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).
