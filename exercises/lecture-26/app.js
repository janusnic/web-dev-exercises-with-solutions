// Наприклад, проста функція, яка підсумовує масив чисел:

function calculate1(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  return sum;
}

calculate1([1, 2, 4]); // => 7

const square = function(x) {
    return x * x;
  }
  square(5); 
  
function formalGreeting() {
    console.log("How are you?");
}
function casualGreeting() {
    console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
    if(type === 'formal') {
      greetFormal();
    } else if(type === 'casual') {
      greetCasual();
    }
}
// prints 'What's up?'
greet('casual', formalGreeting, casualGreeting);
  

// Return function from function
function iReturnFunction() {
    return function() { return 42 };
  }
  
const myFunc = iReturnFunction();
myFunc(); // => 42
  
//Створимо функцію, яка виконує всі дії, які виконували функції filterOdd і filterEven:
 function filterFunction(arr, callback) {
   const filteredArr = [];
   for (let i = 0; i < arr.length; i++) {
     callback(arr[i]) ? filteredArr.push(arr[i]) : null;
   }
   return filteredArr;
 }
//Для фільтрації непарних і парних чисел, відповідно, нам потрібно написати:
// Функція, що містить логіку для фільтрації непарних чисел
function isOdd(x) {
 return x % 2 != 0;
}
// Функція, що містить логіку для фільтрації парних чисел
function isEven(x) {
 return x % 2 === 0;
}
let arr = [1,2,4,5,6,7,8,9,10,11,12]
//Ми передаємо логічні функції isOdd або isEven, як аргументи іншій функції filterFunction:
// For filtering out odd numbers
filterFunction(arr, isOdd) // [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers
filterFunction(arr, isEven) // [ 2, 4, 6, 8, 10 ]
//Ми можемо передати будь-яку іншу логіку фільтрації filterFunction, без необхідності її змінювати. Наприклад, якщо ми хочемо відфільтрувати число більше 5:
 
function isGreaterThanFive(x) {
   return x > 5;
}
filterFunction(arr, isGreaterThanFive) // [ 6, 7, 8, 9, 10, 11 ]
// або
filterFunction(arr, (x) => x > 5) // [ 6, 7, 8, 9, 10, 11 ]

function calculate(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
      total = operation(total, number);
    }
    return total;
  }
  
  function sum(n1, n2) {
    return n1 + n2;
  }
  
  function multiply(n1, n2) {
    return n1 * n2;
  }

const numbers = [1, 2, 4];  
calculate(sum, 0, numbers);      // => 7
calculate(multiply, 1, numbers); // => 8



const doubles = numbers.map(function mapper(number) {
  return 2 * number;
});

doubles; // [2, 4, 8]

// const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3].map(function(item) {
  return item * 2;
});
console.log(arr2);

//Ми можемо зробити це ще коротшим, використовуючи синтаксис функції стрілки:

// const arr1 = [1, 2, 3];
let ara = [1, 2, 3].map(item => item * 2);
console.log(ara);


let student_names = ["Wick", "Malcolm", "Smith"]
student_names.map((item, index, array) => {
    console.log(`name: ${item} | index: ${index} | array: `,array);
});

let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];

students_information.map((student, index, array) => {
    let obj = student;
    let percentage = 0;
    if(student["degree"]>0){
        percentage = parseFloat(((student["degree"]/600)*100).toFixed(2));
    }
    obj["percentage"] = percentage;
    return obj;
});
console.log(students_information);

let flattened = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]].reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
);
// flattened is [0, 1, 2, 3, 4, 5]
console.log(flattened)
Array.prototype.lowerCase = function () {
    let i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toLowerCase();
    }
};
 
function myProto() {
    let sub = ["WWW", "WEBTEchnologies", "JavaScript", "js"];
    sub.lowerCase();
    console.log(sub);
}
myProto();

const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
