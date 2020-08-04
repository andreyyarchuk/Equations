let play;
let sign;

let firstNumber = Math.floor( Math.random() * 10 );

let secondNumber = Math.floor( Math.random() * 10 );

let numberForSign = Math.floor(Math.random() * Math.floor(2));

if (numberForSign == 0) {
        sign = "-";
    } else {
        sign = "+";
    }

do {
    play = confirm("Will play?");
    alert("How much will: " + ` ${firstNumber}` +  ` ${sign} `  + `${secondNumber}` + " =");
} while (play == true);
