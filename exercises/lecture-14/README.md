# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №14 - Animations

В середині exercises створіть піддирексторію lecture-14. 

1. Зробіть копію каталогу scale
  - збільшити масштаб селектора element у 10 разів 
    
```css
.element {
  background-color: #0074d9;
  height: 20px;
  width: 20px;
  transform: scale(10);
  font-size: 1px;
  padding: 1px;
  color: white;
  line-height: 2px;
}
```
2. Зробіть копію каталогу skew
    - встановити нахил елементу .element у 20deg
    - створити keyframes з ім'ям skew. У фреймі 100% визначити нахил елементу ліворуч на 20deg. У фреймі 0% визначити нахил елементу праворуч на 20deg.
    - призначити елементу .element властивісь animation, що иає назву skew, тримає 3 секунди та ніколи не спиняється

```css
.element {
  display: inline-block;
  background-color: #0074d9;
  height: 100px;
  width: 100px;
  font-size: 1px;
  padding: 1px;
  color: white;
  margin-right: 5px;
  margin-left: 5px;
  animation: skew 3s infinite;
  transform: skew(20deg);
  animation-direction: alternate;
  opacity: 0.7;
}

@keyframes skew {
  0% {
    transform: skewX(20deg);
  }
  100% {
    transform: skewX(-20deg);
  }
}
```

3. Зробіть копію каталогу rotate
   - поверніть елемент .element на 30deg
    - створити keyframes з ім'ям roll. У фреймі 100% визначити поворот елементу на 360deg. У фреймі 0% визначити поворот елементу на 0deg.
    - призначити елементу .element властивісь animation, що має назву roll, тримає 3 секунди та ніколи не спиняється


```css
.element {
  display: inline-block;
  background-color: #0074d9;
  height: 100px;
  width: 100px;
  font-size: 1px;
  padding: 1px;
  color: white;
  margin-right: 5px;
  margin-left: 5px;

  animation: roll 3s infinite;
  transform: rotate(30deg);
  opacity: 0.7;
}


@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

4. Зробіть копію каталогу translate
   - створити keyframes з ім'ям shimmy. У фреймі 0% визначити переиіщення у точку (0, 0). У фреймі 100% визначити переиіщення у точку (20px, 50px).
    - призначити елементу .square властивісь animation, що має назву shimmy, тримає 3 секунди та ніколи не спиняється


```css
.square {
  height: 100px;
  width: 100px;
  background-color: #3d9970;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  color: white;
  padding: 5px;

  animation: shimmy 3s infinite;
  animation-direction: alternate;
}


@keyframes shimmy {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(20px, 50px);
  }
}
```
