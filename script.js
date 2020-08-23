// объявление переменных
let firstValue = 5;
let secondValue = 3;
let valueForSing;
let a = 2;
let resalt = 0;
let sing = 0;

// Функции

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function sing(a) {
    return Math.floor(Math.random() * Math.floor(a));
}

// Алгоритм

let value = sing(a);

if (value == 0) {
    resalt = sub(firstValue, secondValue);
} else {
    resalt = sum(firstValue, secondValue);
}

alert(resalt);