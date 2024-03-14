// 
console.log(typeof(function(){}));

console.log();


function showMessage() {
    var message = 'Привіт!'; // локальна змінна
    console.log(message);
}

showMessage(); // 'Привіт!'
// console.log(message); // Uncaught ReferenceError: message is not defined

console.log(showMessage()); // undefined


function message(from, text) {
    if (text === undefined) { 
        text = 'текст не призначено'; 
    }
    console.log(from + ": " + text);
}

message('from');

// У якості аргумента за замовчуванням можна використовувати результат оператора ||:
function bessage(from, text) { 
    // text = text || 'текст не призначено'; 
    text = text ?? 'текст не призначено'; 
    console.log(from + ": " + text);
}

bessage('from');

function checkAge(age) {
    age = age ?? null;
    if ( age < 18 ) {
        return false;
    }
    return true;
}

function showMovie(age) {
    if ( !checkAge(age) ) {
        return;
    }
    console.log( "Showing you the movie" ); // (*)
    // ...
}
showMovie();
// Функція з порожнім поверненням, або без нього, повертає undefined.

// Порожнє повернення теж саме, що return undefined:
function doNothing() {
    return;
}
console.log( doNothing() === undefined ); // true
