# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №13 - Tables & forms

В середині exercises створіть піддиректорію lecture-13. 

1. Зробіть копію каталогу tables
  1. визначте такі властивості елементів td, th:
    - padding - 10 пікселів, перерахувавши їх у rem
    - border - товщиною в 1 піксель, солідну, світло-сіру 
    - вирівняйте текст зліва
    - розмір шрифту - 18 пікселів, перерахувавши їх у rem 

```css
td, th { 
    padding: calc((10/16)*1rem); 
    border: 1px solid lightgray; 
    text-align: left; 
    font-size: calc((18/16)*1rem); ;
}
```
  2. визначте такі властивості елементу th:
    - тло - indigo
    - колір - білий
    - вага шрифту - напівжирний

```css
th { 
    background-color: indigo; 
    color: white; 
    font-weight: bold; 
} 
```
  3. зробіть таблицю смугастою, встановивши кожному непарному рядку таблиці світло-сіре тло:
```css

tr:nth-of-type(odd) { 
	background: #eee; 
} 
```
  4. Створіть media-запит max-width: 50rem, що визначає наступне:
    - перетворює table, thead, tbody, th, td, tr на блоки
    - приховує thead tr
    - для елементу tr визначає border: 1px solid darkgrey
    - для елементу td відміняє border а потім визначає border-bottom: 1px solid lightgray  

```css
    table, thead, tbody, th, td, tr { 
        display: block; 
    }
       
    thead tr { 
        display: none;
    }
      
    tr { border: 1px solid darkgrey; }
      
    td { 
        border: none;
        border-bottom: 1px solid lightgray; 
    } 
```
___ 
2. Зробіть копію каталогу forms
  1. визначте змінну під назвою --padding-form в області :root та призначте їй значення за допомогою функції calc(). Значення обчислюється шляхом ділення 30 на 16 і множення на 1rem.

```css
:root {
  --padding-form: calc((30/16)*1rem);
}
```
  2. визначте такі властивості для класу .wrapper:
    - зовнішні границі - однакові зліва/справа, однакові зверху/знизу
    - ширина - 100% 
    - максимальна ширина - 70rem
    - мінімальна висота - 100vh
    - відображення - flex
    - спрямування - column
    - вирівнювання контенту - по центру
    - вирівнювання елементів - по центру
  
```css
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 70rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
```
  3. визначте такі властивості для класу .form-container:
    - ширина - 100%
    - максимальна ширина - 40rem 
    - висота - автоматична
    - тінь боксу: зсув-x=0, зсув-y=0, радіус розмиття = 5px, колір = темно-сірий
    - тло: біле
    - відображення - grid
    - шаблон розміру доріжок сітки - 2 колонки однакової ширини
    - автоматичне розміщення елементів вздовж рядка
    - жолоби між рядками та стовпцями сітки - .8em
```css
.form-container {
  position: relative;
  width: 100%;
  max-width: 40rem;
  height: auto;
  background: white;
  box-shadow: 0 0 5px darkgray;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: .8em;
}

```
  4. визначте такі властивості для класів .col-left та .col-right:
    - відображення - flex
    - padding - значення змінної --padding-form

```css
.col-left,
.col-right {
  padding: var(--padding-form);
  display: flex;
}
```
  5. визначте такі властивості для класу .col-left:
    - clip-path - багатокутник. форма багатокутника починається у верхньому лівому куті елемента (0 0), потім переходить у нижній лівий кут (0% 100%) і, нарешті, переходить у верхній правий кут (100% 0)

```css
.col-left {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  background: var(--form-color);
}

```
  6. змініть значення властивості padding, замінивши px на rem для класу .col-right:
```css
.col-right {
  padding: calc(2*var(--padding-form)) var(--padding-form);
  margin-left: -10%;
}

```
  7. визначте обробку події фокус для селектора .login-form input, що змінює колір рамки на значення --active-color
```css
.login-form input:focus {
  border-color: var(--active-color);
}
```
  8. визначте такі властивості для селектора .login-form input з типом submit:
    - display: inline-block;
    - width: 100%;
    - margin-top: 5px;
    - color: var(--form-color);
    - letter-spacing: 1px;
    - cursor: pointer;
    - background: transparent;
    - border: 1px solid var(--form-color);
    - border-radius: 30px;
```css
.login-form input[type=submit] {
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  color: var(--form-color);
  letter-spacing: 1px;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--form-color);
  border-radius: 30px; 
}
```
  9. визначте обробку події hover для селектора .login-form input  з типом submit, що змінює його колір на білий та тло на значення --form-color:
```css
.login-form input[type=submit]:hover {
  color: white;
  background-color: var(--form-color);  
}
```
  10. Створіть media-запит max-width: 35rem, що визначає наступне: 
    - для класу .form-container змінити flex-direction на column та відмінити властивість box-shadow
    - для класів .col-left, .col-right змінити ширину на 100%, скинути зовнішні границі в 0, відмінити властивість clip-path
    - для класу .col-right встановити властивість у значення --padding-form
  
```css
.form-container {
    flex-direction: column;
    box-shadow: none;
  }

  .col-left,
  .col-right {
    width: 100%;
    margin: 0;
    clip-path: none; 
  }

  .col-right {
    padding: var(--padding-form); 
  }
```
___ 
