# web-dev-exercises-with-solutions
HTML/CSS/JavaScript/ReactJS practice exercises with solutions
## Exercises for lecture №20 - Array

1. В середині exercises створіть піддирексторію lecture-20. В середині lecture-20 створіть файли index.html та app.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	 <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>
    <script src="app.js"></script>
</body>
</html>

```
var fruits = new Array(); //array created with empty items
fruits
//Console output
[]
var cars = [];
cars[0]="BMW";
cars[1]="AUDI";
cars[2]="BENZ";
cars[3]="TATA";
console.log(cars);
//Console output
(4) ["BMW", "AUDI", "BENZ", "TATA"]
var cars = ["BMW", "AUDI", "BENZ", "TATA"];
console.log(cars);
//Console output
(4) ["BMW", "AUDI", "BENZ", "TATA"]


Updating Items in Array

We can update a specific item in an array using indexes.

var names = ["John", "Rahul", "Karan"];
names[1]="Rahul Kumar";
console.log(names);

//Console output
(3) ["John", "Rahul Kumar", "Karan"]

var names = ["John", "Rahul", "Karan"];
console.log("Before deleting item ",names);
delete names[1];
console.log("After deleting item of index 1 ",names);

array.length — властивість, яка містить довжину масиву. Крім того, array.length доступний для запису.

Якщо ви записуєте довжину, меншу за поточну, array.length = newLength, додаткові елементи видаляються з масиву.

Скористаємося array.length = 0, щоб видалити всі елементи масиву:

const colors = ['blue', 'green', 'black'];

colors.length = 0;

colors; // []

colors.length = 0 removes all items from colors array.

2. Підключити Bootstrap-компонент navbar


var x = [5,8,7,2,1];
console.log(x.length);

//Console Output
5

`x.length` outputs the number of items in array x.
push() method

The method push() is used to insert an item into the end of the array.
Syntax

array.push(item1,item2,...);

We can insert a single item or multiple items at once.
Example

var items = ["Key", "Soap", "Table"];
items.push("Slippers", "Napkin", "Charger");
console.log(items)

//Console Output
(6) ["Key", "Soap", "Table", "Slippers", "Napkin", "Charger"]




```html

```
Inserting items using `push()` method

var cars = ["BMW", "AUDI", "BENZ", "TATA"];
console.log("Before Inserting new item : ",cars);
cars.push("VOLVO");
console.log("After Inserting new item : ",cars);

//Console output
Before Inserting new item :  (4) ["BMW", "AUDI", "BENZ", "TATA"]
After Inserting new item :  (5) ["BMW", "AUDI", "BENZ", "TATA", "VOLVO"]
var cars = ["BMW", "AUDI", "BENZ", "TATA"];
cars.push("VOLVO", "FIAT", "MARUTI");
console.log(cars);

//Console output
(7) ["BMW", "AUDI", "BENZ", "TATA", "VOLVO", "FIAT", "MARUTI"]

JavaScript Array pushing new item into the array using push() method
Accessing Array Items

Array items can be accessed through indexes.

var cars = ["BMW", "AUDI", "BENZ", "TATA"];
console.log(cars[1]);
//Console output
AUDI

var items = ["Key", "Soap", "Table"];
items.push("Slippers", "Napkin", "Charger");
console.log("Array before pop() method ",items)
items.pop()
console.log("Array after pop() method ",items)

//Console Output
Array before pop() method (6) ["Key", "Soap", "Table", "Slippers", "Napkin", "Charger"]
Array after pop() method (5) ["Key", "Soap", "Table", "Slippers", "Napkin"]     


Check if Item Exists in Array

At the start, we have told you about `length` key in array. This is created with array itself and the value of length changes as we add/remove items in the array.

var cars = ["BMW", "AUDI", "BENZ", "TATA"];
console.log(cars.length);
//Console output
4

Check it item exists using if conditional statement

var numbers = [1,2,3,4];
if(numbers.length>0){
    console.log("Item exists in array");
}else{
    console.log("Item does not exists in array");
}

//Console output
Item exists in array


shift() Method

The method shift() does the opposite of thepop() method. It removes the first item from an array.
Syntax

array.shift()

Example

var items = ["Key", "Soap", "Table"];
console.log("Array before shift() method ",items);
items.shift();
console.log("Array after shift() method ",items);

//Console Output
Array before shift() method  (3) ["Key", "Soap", "Table"]
Array after shift() method  (2) ["Soap", "Table"]

unshift Method

The method unshift does the opposite of the push() method inserts a new item at the start of the array and returns a count for a number for items in an array.
Syntax

array.unshift(item1,item2,...);

Example

var items = ["Key", "Soap", "Table"];
console.log("Array before unshift() method ",items);
items.unshift("Knife", "Medicine box", "Toilet Paper");
console.log("Array after unshift() method ",items);

//Console Output
Array before unshift() method  (3) ["Key", "Soap", "Table"]
Array after unshift() method  (6) ["Knife", "Medicine box", "Toilet Paper", "Key", "Soap", "Table"]

Let's use this to remove all elements of an array:
const colors = ['blue', 'green', 'black'];

colors.splice(0);

colors; // []

colors.splice(0) removes all elements of colors array.
indexOf Method

Method indexOf used to check if the item exists in an array. It takes two arguments first is an item to search and the second argument specifies from which index it should start searching.
If search item exists in the array it returns its index and if search item doesn’t exist then it will return -1 which means that the item does not exist in an array.
Syntax

array.indexOf(search_item, search_from_index);

Argrument search_from_index is optional argrument.

Example 1

var items = ["Key", "Soap", "Table"];
items.indexOf("Soap");

//Console Output
1 //this is index of item "Soap"

Example 2

Let us check if student name exists in array using if-statement.

var students = ["Kishor", "Suresh", "Naresh", "Sunil", "Pradeep"];
var index = students.indexOf("Naresh");
if(index != -1){
    console.log("Student name 'Naresh' exists in array at index : "+index);
}else{
    console.log("Student name 'Naresh' does not exists in array");
}

//Console Output
Student name 'Naresh' exists in array at index : 2



3. Встановити клас bg-primary для компонента navbar. Встановити темну тему для компонента navbar
const colors = ['blue', 'green', 'white'];

for (let index = 0; index < colors.length; index++) {
  const color = colors[index];
  console.log(color);
}
// 'blue'
// 'green'
// 'white'

```html

```

4. Встановити клас bg-dark для компонента navbar. Встановити темну тему для компонента navbar 

```html

```

5. Встановити style="background-color: #e3f2fd;" компонента navbar

```html

```
Let's append 'Joker' at the end of names array:
const names = ['Batman'];

names.push('Joker');

names; // ['Batman', 'Joker']

names.push('Joker') inserts a new item 'Joker' at the end of the names array.
const names = ['Batman'];

names.unshift('Catwoman');

names; // ['Catwoman', 'Batman']

names.unshift('Catwoman') inserts a new item 'Catwoman' at the beginning of names array.

Appending an item at the end of an array:
const names = ['Joker', 'Bane'];

const names2 = [
  ...names,
  'Batman',
];

names2; // => ['Joker', 'Bane', 'Batman'];
Appending an item at the beginning of an array:
const names = ['Joker', 'Bane'];

const names2 = [
  'Batman',
  ...names
];

names2; // => ['Batman', 'Joker', 'Bane'];

Inserting an item at any index:
const names = ['Joker', 'Bane'];
const indexToInsert = 1;

const names2 = [
  ...names.slice(0, indexToInsert),
  'Batman',
  ...names.slice(indexToInsert)
];

names2; // => ['Joker', 'Batman', 'Bane'];

const colors = ['blue', 'green', 'black'];

const lastColor = colors.pop();

lastColor; // => 'black'
colors; // => ['blue', 'green']

colors.pop() removes the last element of colors and returns it.
const colors = ['blue', 'green', 'black'];

const firstColor = colors.shift();

firstColor; // => 'blue'
colors; // => ['green', 'black']

colors.shift() removes the first element 'blue' of colors and returns it.

For example, let's remove 2 items from index 1:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

names.splice(1, 2);

names; // => ['Batman', 'Bane']

names.splice(1, 2) removes the elements 'Catwoman' and 'Joker'.

names.splice() can insert new items instead of removed ones. Let's replace 2 items from index 1, and insert a new item 'Alfred' instead:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

names.splice(1, 2, 'Alfred');

names; // => ['Batman', 'Alfred' ,'Bane']


6. Підключити на сторінку компонент accordion
```html

```
Метод Keys повертає ітератор із ключами.

const array1 = ["a", "b", "c"];
const iterator = array1.keys();

console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2

Values
const array2 = ["a", "b", "c"];
const i = array2.values();

console.log(i.next().value); // a
console.log(i.next().value); // b
console.log(i.next().value); // c

Includes
Includes method checks if an array contains an element and returns true or false.
Включає метод, який перевіряє, чи містить масив елемент, і повертає true або false.

const array1 = [1, 2, 3];
console.log(array1.includes(3)); // true
console.log(array1.includes(4)); // false

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // true
console.log(pets.includes("at")); // false

The includes method also takes index as the second parameter. The second parameter makes the include method check for a value in an array with an index greater than or equal to the provided index.
Метод include також приймає index як другий параметр. Другий параметр змушує метод include перевіряти значення в масиві з індексом, більшим або рівним наданому індексу.

let example = ["a", "b", "c"]

example.includes("b", 3); // false
example.includes("b", 100); // false
example.includes("b", 1); // true


7. Підключити на сторінку компонент breadcrumb
```html

```
8. array.indexOf

array.indexOf(search_item, search_from_index);

Argrument search_from_index is optional argrument.

Example 1

var items = ["Key", "Soap", "Table"];
items.indexOf("Soap");

//Console Output
1 //this is index of item "Soap"

Example 2

Let us check if student name exists in array using if-statement.

var students = ["Kishor", "Suresh", "Naresh", "Sunil", "Pradeep"];
var index = students.indexOf("Naresh");
if(index != -1){
    console.log("Student name 'Naresh' exists in array at index : "+index);
}else{
    console.log("Student name 'Naresh' does not exists in array");
}

//Console Output
Student name 'Naresh' exists in array at index : 2

.split()

The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. You would normally use this when you want to make a string object iterable

The split method takes two parameters. - Separator and Limit

Separator
We have already seen how separators work in the examples above with .join(), they work the same. However, The .split() separator can either be a string or a regular expression.

Limit
If provided, it splits the string at each occurrence of the specified separator but stops when limit entries have been placed in the array.

let string = "I am just a poor string" 
let newArray = string.split()
let newArray1 = string.split('')
let newArray2 = string.split(' ')
let newArray3 = string.split(' ', 3)

console.log(newArray) // [ 'I am just a poor string' ]
console.log(newArray1)
/*
[
  'I', ' ', 'a', 'm', ' ',
  'j', 'u', 's', 't', ' ',
  'a', ' ', 'p', 'o', 'o',
  'r', ' ', 's', 't', 'r',
  'i', 'n', 'g'
]
*/
console.log(newArray2)//[ 'I', 'am', 'just', 'a', 'poor', 'string' ]
console.log(newArray3) // [ 'I', 'am', 'just' ]


9. array.pop


10. reverse


11. shift

12. unshift

13. some

The .join() converts the elements of an array into a string and returns a new string

The join method can take an optional Parameter i.e arr1.join([seperator]).
if the separator is omitted the array elements are returned as a string with a comma to separate.

The following examples create an array, arr, with six elements, then joins the array four times: using the default separator, empty string, a space, then a dash

let arr1 = ["I", "am" , "just", "a" ,  "poor" ,  "array" ]; 

let string1 = arr1.join()

let string2 = arr1.join("")

let string3 = arr1.join(" ")

let string4 = arr1.join(" - ")

console.log(string1) // 'I,am,just,a,poor,array'
console.log(string2) //  Iamjustapoorarray'
console.log(string3)  //'I am just a poor array'
console.log(string4)  // 'I - am - just - a - poor - array'

У наведених нижче прикладах створюється масив arr із шістьма елементами, а потім об’єднується до масиву чотири рази: використовуючи стандартний роздільник, порожній рядок, пробіл, потім тире

let arr1 = ["I", "am" , "just", "a" ,  "poor" ,  "array" ]; 

let string1 = arr1.join()

let string2 = arr1.join("")

let string3 = arr1.join(" ")

let string4 = arr1.join(" - ")

console.log(string1) // 'I,am,just,a,poor,array'
console.log(string2) //  Iamjustapoorarray'
console.log(string3)  //'I am just a poor array'
console.log(string4)  // 'I - am - just - a - poor - array'


14. 
Метод .sort() сортує дані за алфавітом і числом у порядку зростання або спадання. За замовчуванням .sort() сортує дані в алфавітному порядку за зростанням. Це означає, що «Audi» передує «BMW» (нічого нового, насправді). Крім того, типовим і єдиним типом даних для .sort() є рядок. Це означає, що він не сортуватиме числа чи об’єкти.

const arr = ['BMW', 'Mercedes', 'Audi', 'Citroen', 'Ferrari'];
 
arr.sort();
 
console.log(arr);
//Result:
//['Audi', 'BMW', 'Citroen', 'Ferrari', 'Mercedes']

Якщо ми надамо масив із числами, метод сортування JavaScript перетворить кожне число на рядок, тож ми можемо отримати досить несподівані результати.

const arr = [128, 1, 333, 1000, 10, 100];
 
arr.sort();
//Result: 
//[1, 10, 100, 1000, 128, 333]

Як ми бачимо в наведеному вище прикладі, числа розташовані не в правильному очікуваному порядку. Це тому, що число перетворюється на UTF-16. Через це «1000» стоїть перед «100» у порядку Unicode.

Як сортувати числа за допомогою методу сортування JavaScript
Існує спосіб обійти цю проблему з числами. .sort() прийматиме функції порівняння. Це означає, що якщо ми надамо якусь функцію, яка буде порівнювати числа, числа не будуть перетворені на рядки.

Функція порівняння приймає два параметри a і b (ми можемо називати їх як завгодно). Це два елементи з масиву (це робиться автоматично). Ця функція може повертати негативні, нульові або позитивні результати.

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
 
//Result:
// [1, 2, 3, 4, 5]
 
numbers.sort(function(a, b) {
  return b-a;
});
console.log(numbers);
 
//Result:
// [5, 4, 3, 2, 1]
 
 
numbers.sort(function(a, b) {
  return b===a;
});
console.log(numbers);
 
//Result:
// [4, 2, 5, 1, 3]

Як ми бачимо у прикладі вище, застосовуються наступні правила:

якщо ми використовуємо такі функції, як function(a,b) { a - b }, масив буде відсортовано в порядку зростання.
якщо ми використовуємо функцію типу function(a,b) { b - a }, масив буде відсортовано в порядку спадання.
якщо ми використовуємо такі функції, як function(a,b) { a === b }, порядок масиву не зміниться (майте на увазі, що .sort() змінює вихідний масив).
якщо ми використовуємо такі функції, як function(a,b) { b === a }, порядок масиву не зміниться.
У нашому наступному тексті ми розглянемо, як упорядкувати деякі інші типи даних, такі як об’єкти.

Якщо у вас є будь-які запитання або щось інше, ви можете знайти мене в моєму Twitter, або ви можете прочитати деякі з моїх інших статей, як-от SQL проти NoSQL. Практичне пояснення, ніби мені 5.

Let a look at simple sort method.

    var num = [6,2,1,5,8];
    num.sort();

    //Console Output
    (5) [1, 2, 5, 6, 8]

In array num by default sort() sorts items into ascending order.

Let us look at another example by sorting student names in ascending order.

    var students = ["Yashwant", "Ramesh", "Abhishek", "Abhilash", "Lokesh"];
    students.sort();

    //Console Output
    (5) ["Abhilash", "Abhishek", "Lokesh", "Ramesh", "Yashwant"]

As you can see name initialization we have specified “Abhilash” after “Abhishek” but in output, we get “Abhilash” because of letter order.
The sort method also checks by letter ordering.
We can take the same above example and represent it in if-else a statement.

    var students = ["Yashwant", "Ramesh", "Abhishek", "Abhilash", "Lokesh"];
    if(students[0]>students[2]){ //ie Yashwant > Abhishek
        console.log("Yes name Yashwant greater than Abhishek");
    }else{
        console.log("No name Yashwant not greater than Abhishek");
    }

array.reverse() Method

This method reverses the array.As sort() method sorts array items to ascending order calling reverse() method on sort() like sort().reverse() does the opposite of that it orders items in descending order.

Let us look at a simple example

    var salary = [5025.23, 4269.65, 8965.6, 2569.12];
    salary.sort().reverse();

    //Console Output
    (4) [8965.6, 5025.23, 4269.65, 2569.12]
Few such examples are given below

    var num = [6,2,1,5,8];
    num.sort(function(a,b){
        if(a<b){ return -1; // -1 means don't change let it be the same }else if(a>b){
            return 1;
        }else {
            return 0;
        }
    });
    console.log(num);

    //Console Output
    (5) [1, 2, 5, 6, 8]

The above example there is an anonymous function inside sort() method which has two arguments.
In the function, we check if the value of a lesser than that of b if the condition is true we return -1. -1 means do nothing it will not make changes in item order.
Next, we check if a greater than b if the condition is true we return 1 which means that this item must be reordered. Lastly, it does not match with any above conditions than we return 0.

Some more example related to sorting using functions

Sorting in descending order

    var num = [6,2,1,5,8];
    num.sort(function(a,b){
        if(a<b){ return 1; }else if(a>b){
            return -1;
        }else {
            return 0;
        }
    });
    console.log(num);

    //Console Output
    (5) [8, 6, 5, 2, 1]

Sorting Student names in ascending order

    var students = ["Yashwant", "Ramesh", "Abhishek", "Abhilash", "Lokesh"];
    students.sort(function(x,y){
        if(x>y){
            return 1;
        }else if(x<y){
            return -1;
        }else {
            return 0;
        }
    });
    console.log(students);

    //Console Output
    (5) ["Abhilash", "Abhishek", "Lokesh", "Ramesh", "Yashwant"]

Sorting Student names in descending order

    var students = ["Yashwant", "Ramesh", "Abhishek", "Abhilash", "Lokesh"];
    students.sort(function(x,y){
        if(x>y){
            return -1;
        }else if(x<y){
            return 1;
        }else {
            return 0;
        }
    });
    console.log(students);

    //Console Output
    (5) ["Yashwant", "Ramesh", "Lokesh", "Abhishek", "Abhilash"]

Let's sort an array of letters:
const letters = ['B', 'C', 'A'];

letters.sort();

letters; // => ['A', 'B', 'C']

letters.sort() sorts the letters in ascending order.

Let's use the compare function and make even numbers followed by odd ones:
const numbers = [4, 3, 1, 2];

function compare(n1, n2) {
  if (n1 % 2 === 0 && n2 % 2 !== 0) {
    return -1;
  }
  if (n1 % 2 !== 0 && n2 % 2 === 0) {
    return 1;
  }
  return 0;
}

numbers.sort(compare);

numbers; // => [4, 2, 3, 1]

numbers.sort(compare) uses the custom compare function that orders even numbers first.



15. toString
```html

```
