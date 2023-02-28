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
let temporaryNumber;
let operatorSelected;
const operators = ["+", "-", "/", "*"];
function inputNumber() {
    console.log(this.textContent);
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
            console.log(firstNumber);
            input.textContent = firstNumber;
            operatorSelected = operators[i];
            console.log(operatorSelected)
            output.textContent = "";
        }
    }

    if (elementSelected == "=") {
        secondNumber = output.textContent;
        secondNumber = Number(secondNumber);
        console.log(operatorSelected)
        console.log(firstNumber)
        console.log(secondNumber)
        calculate(operatorSelected, firstNumber, secondNumber);
    }
}

function calculate(operatorInput, firstInput, secondInput) {

    for (let i = 0; i < operators.length; i++) {
        if (operatorInput == operators[i]){
            input.textContent += operators[i] + secondInput;
            output.textContent = "";
            return output.textContent = operate(operators[i],firstInput,secondInput)
        }
    }
}

buttons.forEach(element => {
    element.addEventListener('click', inputNumber);
});