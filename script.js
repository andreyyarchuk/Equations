// объявление переменных
let firstValue;
let secondValue;
let valueForSing;
let a = 2;
let resalt;
let sing;
let max;
let min;
let strOfsing;
let i = 0;
let valueOfEx;
let answer;
let corect = 0;
let uncorect = 0;

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
if (confirm("Will play?")) {
    alert("ok");

    valueOfEx = prompt("How much equations do want to do?", 1);

    max = prompt("max", 5);
    min = prompt("min", 5);

    do {

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


        /* console.log("firstValue " + firstValue);
        console.log("secondValue " + secondValue);
        console.log("sing " + strOfsing);
        console.log("resalt " + resalt); */

        answer = prompt( firstValue + strOfsing + secondValue  + " =");
        if (answer == resalt) {
            corect = corect + 1;
        } else {
            uncorect = uncorect + 1;
        }
        // console.log( resalt );
        i++;
    } while (i < valueOfEx);
    alert("corect equations; " + corect + "; " + "uncorect equations: " + uncorect + ";");
}