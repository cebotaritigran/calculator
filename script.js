// array of operators to use in loops
const operators = ["+", "-", "/", "*", "%", "**"];

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function remainder(x, y) {
    return x % y;
}

function powerof(x, y) {
    return x ** y;
}

function operate(operator, x, y) {
    if (operator == "+") return add(x, y);
    if (operator == "-") return subtract(x, y);
    if (operator == "*") return multiply(x, y);
    if (operator == "/") return divide(x, y);
    if (operator == "%") return remainder(x, y);
    if (operator == "**") return powerof(x, y);
}

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('.output');
const input = document.querySelector('.input');

let firstNumber;
let secondNumber;
let numberArray = [];
let operatorArray = [];
let operatorSelected;
let newOperator;
let total;
let trackedNumber = 0;

function inputNumber() {

        var audio = document.getElementById("audio");

        audio.currentTime = 0;
        audio.play();


    let elementSelected = this.textContent
    if (elementSelected == "AC") {
        firstNumber = undefined;
        secondNumber = undefined;
        numberArray = [];
        operatorArray = [];
        operatorSelected = undefined;
        newOperator = undefined;
        total = undefined;
        trackedNumber = 0;
        output.textContent = "";
        input.textContent = "";
    }

    if (elementSelected == "DEL") {
        output.textContent = output.textContent.slice(0, -1);
        trackedNumber = output.textContent;
    }

    if (!isNaN(elementSelected)) {
        trackedNumber += elementSelected;
        trackedNumber = Number(trackedNumber);
        output.textContent += elementSelected;
    }

    for (let i = 0; i < operators.length; i++) {

        if (elementSelected == operators[i]) {
            if (total > 0 && operatorArray.length == 0) {
                //check if total has decimal
                if (total % 1 != 0) {
                    firstNumber = total.toFixed(3);
                } else {
                    firstNumber = total;
                }
                input.textContent = firstNumber + operators[i];
                numberArray[0] = firstNumber;
            } else {
                firstNumber = trackedNumber;
                //check if total has decimal
                if (total % 1 != 0) {
                    firstNumber = Number(firstNumber.toFixed(3));
                } else {
                    firstNumber = Number(firstNumber);
                }
                input.textContent = firstNumber + operators[i];
                numberArray.push(firstNumber)
            }

            trackedNumber = 0;
            operatorSelected = operators[i];
            operatorArray.push(operatorSelected);
            console.log(numberArray);
            output.textContent = "";
            if (numberArray.length > 1) {
                input.textContent = "please do 1 evale at a time";

            }
        }
    }

    if (elementSelected == "=") {
        secondNumber = output.textContent;
        secondNumber = Number(secondNumber);
        calculate(operatorSelected, firstNumber, secondNumber);
    }
    

}

function calculate(operatorInput, firstInput, secondInput) {
    for (let i = 0; i < operators.length; i++) {
        if (operatorInput == operators[i]) {
            input.textContent += secondInput;
            output.textContent = "";
            total = operate(operators[i], firstInput, secondInput);
            numberArray = [];
            operatorArray = [];
            //check if total has decimal
            if (total % 1 != 0) {
                total = Number(total.toFixed(3));
            } else {
                total = Number(total);
            }
            numberArray.push(total);
            trackedNumber = 0;
            return output.textContent = total;
        }
    }

    
}

buttons.forEach(element => {
    element.addEventListener('click', inputNumber);
});




