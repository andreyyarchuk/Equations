// объявление переменных
let firstValue;
let secondValue;
let valueForSing;
let a = 2;

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

firstNumber = Math.floor( Math.random() * 10 );

secondNumber = Math.floor( Math.random() * 10 );

let numberForSign = Math.floor(Math.random() * Math.floor(2));

if (numberForSign == 0) {
        sign = "-";
    } else {
        sign = "+";
    }

do {
    play = confirm("Will play?");
    alert("How much will: " + ` ${firstNumber}` +  ` ${sign} `  + `${secondNumber}` + " =");
} while (play == true); fa

