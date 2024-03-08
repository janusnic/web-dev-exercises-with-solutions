
let str1 = 'I\'m a string!';

let str2 = "I'm a string!";

console.log(str1 == str2);
console.log(str1 === str2);

console.log(str1.length == str2.length);



// повернути символ J рядка:
let str3 = "Hello Javascript";
console.log(str3[6]); // "J"

// отримати доступ до останнього символу рядка
let str4 = "Hello";

// використовуйте індекс length - 1:

console.log(str4[str4.length -1]); // "o"

Напишіть три варіанти функції, що повертає останній символ рядка 

function lastChar(str) {
	return str[-1];
	return str[str.length -1];
	return str.charAt(str.length -1);
}

console.log(lastChar(str4)); // "o"


// конкатенація
let name = 'Джон';
let str = 'Привіт' + name;
console.log(str); // "Привіт Джон"

//Якщо ви хочете зібрати рядок по частинах, ви можете використовувати оператор +=:

let className = 'btn';
className += ' btn-primary'
className += ' none';
console.log(className);


// Ви можете використовувати конкатенацію рядків для створення багаторядкових рядків:

var html = (
 "<div>" +
 "<p>Hello, World!</p>" +
 "</div>"
);

console.log(html);

// Ви також можете об’єднувати вирази, змінні та виклики функцій.

// Fifteen is the same as 15

var fact = "Fifteen is the same as " + (5 + 10);
console.log(fact);

let userName = "Katie";

// let greeting = "Hello, " + name + "!";
console.log("Hello, " + userName + "!");

// var greeting;

let firstName = "Tom";
let lastName = "Cat";

function getFullName (firstName, lastName) {
 return firstName + " " + lastName;
}

function greeting (firstName, lastName) {
 
 return "Hello, " + getFullName(firstName, lastName) + "!";

}

console.log(greeting (firstName, lastName));

// <div><h1>Hello, Tom Cat!</h1></div>
let template = (
 "<div>" +
 "<h1>"+greeting (firstName, lastName)+"</h1>" +
 "</div>"
);

console.log(template);

// greeting = "Hello, " + getFullName(firstName, lastName) + "!";


let string = 'Hello';
// String concatenation using the concat method
let string1 = string.concat(' World'); // output 'Hello World'

let string2 = string + ' World';
console.log(string1 === string2);

// let status = false;
// let str = status.toString(); // "false"
// let back = Boolean(str); // true

// Спочатку оголосите змінну status та 
// ініціалізуйте її значенням false.
// По-друге, перетворіть змінну статусу на рядок 
// за допомогою методу toString().
// По-третє, перетворіть рядок назад у логічне значення
 // за допомогою функції Boolean(). 
// Функція Boolean() перетворює рядок "false" 
// на логічне значення. 
// Результат є істинним, оскільки «false» є непорожнім рядком. 
// Зауважте, що лише рядок, 
// для якого Boolean() повертає false, 
// є порожнім рядком ('');

'sam' === 'Sam'  false, 
'sam'.toLowerCase() === 'Sam'.toLowerCase() true.


let string = 'Hello World';
 // to check the string length we can use the length instance property
let length = string.length; // output 11
 // slicing to get the substring from index 1 -> 9
let string1 = string.slice(1 , 10); // output 'ello Worl'
 // not passing any parameters will generate
 // a copy of the ariginal string with no mutation
let copy = string.slice(); // output 'Hello World'

let string = 'Hello World';
 // Divide a string into words
 // This can be done when the passed pattern is a space
let words = string.split(' '); // output ['Hello' , 'World']
 // When the passed parameter is an empty string, the output array
 // will carry each of the characters of the given string
let chars = string.split('');
 // output ["H","e","l","l","o"," ","W","o","r","l","d"]

const index = findme.indexOf(passcode);
console.log(index !== -1);
const index = !!~findme.indexOf(passcode);
console.log(index); // true
!!~ перетворює отриманий порозрядний вираз на логічний. По суті, це дивовижний спосіб змусити indexOf повертати нам true або false в одному рядку.


Використовуючи оператор заперечення !, ми перевіряємо, чи є рядок хибним, що містить порожні рядки. Однак цей підхід не розглядає рядки, які містять лише пробіли. Щоб обробляти пробільні символи, ми можемо поєднати цей підхід із методом trim().
function checkIfEmpty(str) {
 if (!str.trim()) {
 console.log('String is empty');
 } else {
 console.log('String is NOT empty');
 }
}

const str1 = 'not empty';
const str2 = '';    // empty
const str3 = ' ';   // contains only whitespace
checkIfEmpty(str1);   // outputs: String is NOT empty
checkIfEmpty(str2);   // outputs: String is empty
checkIfEmpty(str3);   // outputs: String is empty
