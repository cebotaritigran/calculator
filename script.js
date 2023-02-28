const operators = ["+", "-", "/", "*"];

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

function operate(operator, x, y) {
    if (operator == "+") return add(x, y);
    if (operator == "-") return subtract(x, y);
    if (operator == "*") return multiply(x, y);
    if (operator == "/") return divide(x, y);
}

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('.output');
const input = document.querySelector('.input');

let firstNumber;
let secondNumber;
let numberArray =[];
let operatorArray = [];
let operatorSelected;
let a = 0;
let newOperator;

function inputNumber() {
    //console.log(this.textContent);
    let elementSelected = this.textContent
    if (elementSelected == "AC") {
        firstNumber = 0;
        secondNumber = 0;
        operatorSelected = "";
        input.textContent = "";
        output.textContent = "";
    }

    if (!isNaN(elementSelected)) {
        output.textContent += elementSelected;
    }

    for (let i = 0; i < operators.length; i++) {
        if (elementSelected == operators[i]) {
            firstNumber = output.textContent;
            firstNumber = Number(firstNumber);
            numberArray.push(firstNumber)
            //console.log(numberArray)

            input.textContent = firstNumber;

            operatorSelected = operators[i];

            newOperator = operators[i];
            operatorArray.push(operatorSelected);
            //console.log(numberArray);
            output.textContent = "";
            if(numberArray.length >= 2){
                let firstInput = numberArray[0];
                console.log(firstInput)
                newOperator = operatorArray[0];
                console.log(newOperator)
                let secondInput = numberArray[1];
                console.log(secondInput)
                calculate(newOperator, firstInput, secondInput);
                output.textContent = "";
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
            input.textContent += operators[i] + secondInput;
            output.textContent = "";
            let total = operate(operators[i], firstInput, secondInput);
            numberArray = [];
            operatorArray = [];
            numberArray.push(total);
            console.log(numberArray)
            return output.textContent = operate(operators[i], firstInput, secondInput)
        }
    }
}

buttons.forEach(element => {
    element.addEventListener('click', inputNumber);
});