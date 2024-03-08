Існує три способи створення нового масиву: 
за допомогою нотації літералів масиву:
// using array literal notation.
let empty = [];
за допомогою конструктора Array():
// using the Array() constructor.
var arr = new Array();
за допомогою String.prototype.split() для створення масиву з рядка:
// using String.prototype.split().
const fruits = 'Apple, Banana'.split(', ');

Ви можете дізнатися довжину масиву за допомогою властивості length:

let customArr = [6, true, 'String']; 
console.log(customArr.length); // 3
Розмір масива може збільшуватись або зменшцватись. 

При роботі з масивом може виникнути ситуація, що елемент масиву може бути пустим і  поверне undefined. 
let arrWithUndefined = [1,3,5,,,,7];
console.log(arrWithUndefined.length); 

Властивість length – не кількість елементів масива, а останній індекс + 1.
let arrLength = [];
arrLength[1000] = true;
console.log(arrLength[1000]);
console.log(arrLength.length);
console.log(arrLength[3]); // undefined
При зменшенні length масив скорочується. Цей процес незворотній:
arrLength.length = 2; 
console.log(arrLength[3]);
arrLength.length = 1000; 
console.log(arrLength[1000]); // undefined

Елементи в масиві нумеруються, починаючи з нуля. Цей номер називається індексом елемента. Отже, перший елемент має індекс 0, другий має індекс 1 і так далі. Ви можете отримати доступ до окремих елементів у масиві за допомогою позначення в квадратних дужках.
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]); // returns "bread"
// You can also modify an item in an array by giving a single array item a new value. Try this:
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
console.log(shopping); // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

Щоб отримати доступ до елемента масиву, потрібно вказати номер позиції елемента в масиві.

const fruits = ['Apple', 'Banana'];
fruits[0]; // Apple
fruits[1]; // Banana
// The index of an array's last element is always one less than the length of the array.
fruits[fruits.length - 1]; // Banana
// Using a index number larger than the array's length
fruits[99]; // undefined


Масив всередині масиву називається багатовимірним масивом. 
Ви можете отримати доступ до елемента всередині масиву, який сам знаходиться всередині іншого масиву, об’єднавши два набори квадратних дужок. 
Наприклад, щоб отримати доступ до одного з елементів у масиві, який є третім елементом у масиві [0, 1, 2]:

const random = ['tree', 795, [0, 1, 2]];
random[2][2];



Цикл for повторює дію, поки не відбудеться подія завершення цикла:
for ([початок]; [умова]; [крок]) вираз
Виконується вираз початок, якщо вказано. Ініціалізує один або кілька лічильників. Також використовується для визначення змінних.
Якщо умова істина, то виконується вираз, якщо хибна, цикл for завершується, якщо пропущена, то вважається істина.
Для виконання кількох виразів використовується блок-вираз  { ... }.
Обновлюється крок, якщо існує, і знову перевіряється умова.

for (var i = 0; i<10;i++) {
 	console.log(i);
}

Цикл while виконує вираз поки умова істина: while (умова) вираз
var n = 0, x = 0;
while (n < 3) {
 n++;
 x += n;
}
Цикл do...while повторюється поки задана умова істина:
do  вираз while (умова); цикл do виконується мінімум 1 раз.
do {
 i += 1;
 console.log(i);
} while (i < 5);

Інструкція for...in повторює задану змінну по всіх перерахованих властивостях об’єкта. Для кожної окремої властивості JavaScript виконує вказані оператори:

for (variable in object)
 statement

Оператор for...in поверне назву властивостей, визначених користувачем, на додаток до числових індексів. Краще використовувати традиційний цикл for з числовим індексом під час ітерації масивів, тому що оператор for...in повторює визначені користувачем властивості на додаток до елементів масиву, якщо ви змінюєте об’єкт Array (наприклад, додавання спеціальних властивостей або методів).



Інструкція for...of створює цикл, що виконує ітерацію по об’єктах, які можна ітерувати, викликаючи ітерації з операторами, які потрібно виконати для значення кожної окремої властивості.

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
 console.log(bird);
}



// Мнтод concat повертає масив, об’єднаний з іншим масивом або значеннями.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3); // ["a", "b", "c", "d", "e", "f"]
// Можна об’єднати значення з масивом.
const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); // ["a", "b", "c", 1, 2, 3]
// Або об’єднувати вкладені масиви.
const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);
console.log(numbers); // [[1], 2, [3]]

// Відносно поширеним є використання записів методу, ключів чи значень для об’єкта, але вони також підтримуються в масивах.
// Метод Entries повертає ітератор із парою ключ/значення.

const array1 = ["a", "b", "c"];
const iterator = array1.entries();
console.log(iterator.next().value); // [0, "a"]
console.log(iterator.next().value); // [1, "b"]

// Метод Keys повертає ітератор із ключами.

const array1 = ["a", "b", "c"];
const iterator = array1.keys();

console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2


// Метод values повертає ітератор із values.
const array2 = ["a", "b", "c"];
const i = array2.values();

console.log(i.next().value); // a
console.log(i.next().value); // b
console.log(i.next().value); // c

// Метод Includes перевіряє, чи містить масив елемент, і повертає true або false.
const array1 = [1, 2, 3];
console.log(array1.includes(3)); // true
console.log(array1.includes(4)); // false

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // true
console.log(pets.includes("at")); // false

// Метод include також приймає index як другий параметр. Другий параметр змушує метод include перевіряти значення в масиві з індексом, більшим або рівним наданому індексу.
let example = ["a", "b", "c"]
example.includes("b", 3); // false
example.includes("b", 100); // false
example.includes("b", 1); // true


// Метод indexOf повертає перший індекс заданого елемента, якщо він присутній у масиві. Якщо ні, повертається -1. Якщо вам потрібно знати, де знаходиться елемент в масиві, вам потрібно використовувати метод indexOf().
// Використовуйте метод include(), щоб перевірити, чи присутній елемент у масиві. 
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0


// indexOf очікує значення, яке ви шукаєте, як параметр. findIndex шукає функцію зворотного виклику як свій параметр. Використовуйте findIndex, коли маєте справу з непримітивними типами, такими як об’єкти, і ваша умова пошуку є відносно складною.

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

// Метод find повертає значення першого елемента, який відповідає зворотному виклику.

const array = [7, 33, 47, 99, 2, 103, 79];
const found = array.find(element => element > 10);
console.log(found); // 33




// метод join створює та повертає рядок шляхом об’єднання всіх елементів у масиві. Ви можете об’єднати всі елементи або створити роздільник для їх з’єднання. За замовчуванням метод використовує кому (,) як роздільник.

const fruits = ["Apple", "Banana", "Raspberry"];

console.log(fruits.join()); // Apple,Banana,Raspberry
console.log(fruits.join("")); // AppleBananaRaspberry
console.log(fruits.join("|")); // Apple|Banana|Raspberry


// lastIndexOf отримує останній індекс, за яким можна знайти даний елемент. Якщо не знайдено, повертає -1. Він може приймати другий параметр, який використовується як fromIndex. Пошук починається назад від наданого індексу.

const numbers = [1, 22, 123, 0, 15, 9, 88, 123, 0, 45];
console.log(numbers.lastIndexOf(2)); // -1
console.log(numbers.lastIndexOf(22)); // 1
console.log(numbers.lastIndexOf(0)); // 8
console.log(numbers.lastIndexOf(123, 4)); // 2
console.log(numbers.lastIndexOf(0, 6)); // 3
console.log(numbers.lastIndexOf(1, 1)); // 0


// Метод pop видаляє останній елемент масиву та повертає видалений елемент.

const numbers = [1, 22, 123, 0, 15, 9, 88, 123, 0, 45];
console.log(numbers.pop()); // 45
console.log(numbers.pop()); // 0
console.log(numbers.pop()); // 123
console.log(numbers.pop()); // 88



// Метод reverse повертає масив на місце. Він повертає обернений масив.
// Метод змінює вихідний масив (подібно до сортування).

const original = ['one', 'two', 'three'];
const reversed = original.reverse();
console.log(reversed); // ["three", "two", "one"]
console.log(original); // ["three", "two", "one"]


// Метод shift схожий на pop. Shift видаляє елемент з початку, тоді як pop видаляє елемент з кінця масиву. Обидва методи повертають видалений елемент.

const original = [1, 2, 3]
const firstRemoved = original.shift();
console.log(original); // [2, 3]
console.log(firstRemoved); // 1


// метод some перевіряє, чи принаймні один елемент у масиві відповідає функції зворотного виклику.

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0; // checks whether an element is even
const greaterThanTen = (element) => element > 10; // checks whether an element is greater than 10
console.log(array.some(even)); // true
console.log(array.some(greaterThanTen)); // false


// Метод sort сортує масив за зростанням (шляхом попереднього перетворення в рядок) на місці.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const numbers = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [1, 100000, 21, 30, 4]


// Метод sort дозволяє виконувати сортування, надаючи функцію з двома елементами для порівняння.
const numbers = [1, 30, 4, 21, 100000];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]

// Метод .sort() сортує дані за алфавітом і числом у порядку зростання або спадання. За замовчуванням .sort() сортує дані в алфавітному порядку за зростанням. Крім того, типовим і єдиним типом даних для .sort() є рядок. Це означає, що він не сортуватиме числа чи об’єкти.



// Метод toString повертає рядок з елементів масиву

const sample = [1, 2, "Parwinder", true, "Hello", 78];
console.log(sample.toString()); // 1,2,Parwinder,true,Hello,78


// Метод unshift схожий на метод push. Метод push додає елемент у кінець масиву. Unshift додає елемент на початок масиву. Обидва повертають довжину нового масиву. Жоден не повертає новий масив.
const numbers = [1, 2, 3];
console.log(numbers.unshift(4, 5, 6)); // 6
console.log(numbers); // [ 4, 5, 6, 1, 2, 3 ]


