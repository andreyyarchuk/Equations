// объявление переменных
let firstValue;
let secondValue;
let valueForSing;
let a = 2;
let resalt;
let sing;
let max = 10;
let min = 10;
let strOfsing

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

function createFirstValue(max) {
    return firstValue = Math.floor(Math.random() * Math.floor(max));
}

function createSecondtValue(min) {
    return secondValue = Math.floor(Math.random() * Math.floor(min));
}

// Алгоритм
createFirstValue(max);
createSecondtValue(min);

let value = funcSing(a);

if (value == 0) {
    resalt = funcSub(firstValue, secondValue);
    strOfsing = "-";
} else {
    resalt = funcSum(firstValue, secondValue);
    strOfsing = "+";
}


console.log("firstValue " + firstValue);
console.log("secondValue " + secondValue);
console.log("sing " + strOfsing);
console.log("resalt " + resalt);