// объявление переменных
let firstValue = 5;
let secondValue = 4;
let valueForSing;
let a = 2;
let resalt;
let sing;

// Функции

function funcSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function funcSub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function funcSing(a) {
    return sing = Math.floor(Math.random() * Math.floor(a));
}

// Алгоритм


let value = funcSing(a);

if (value == 0) {
    resalt = funcSub(firstValue, secondValue);
} else {
    resalt = funcSum(firstValue, secondValue);
}

console.log(resalt);

console.log(sing);