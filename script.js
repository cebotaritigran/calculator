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
    if (operator == "+") {
        add(x, y);
    }
    if (operator == "-") {
        return subtract(x, y);
    }
    if (operator == "*") {
        return multiply(x, y);
    }
    if (operator == "/") {
        return divide(x, y);
    }
}

const buttons = document.querySelectorAll('.button');
const output = document.querySelector('.output');
const input = document.querySelector('.input');
let firstNumber;
let secondNumber;
let temporaryNumber;
let operatorSelected;
function inputNumber() {
    let numberSelected = this.textContent

    if (numberSelected == "AC") {
        firstNumber = 0;
        secondNumber = 0;
        operatorSelected = "";
        input.textContent = "";
        output.textContent = "";
    }
    if (!isNaN(numberSelected)) {
        output.textContent += numberSelected;
    }
    if (numberSelected == "x") {
        if (operatorSelected) {
            secondNumber = output.textContent;
            secondNumber = Number(secondNumber);
            if(operatorSelected == "+") temporaryNumber = firstNumber + secondNumber;
            if(operatorSelected == "-") temporaryNumber = firstNumber - secondNumber;
            if(operatorSelected == "*") temporaryNumber = firstNumber * secondNumber;
            if(operatorSelected == "/") temporaryNumber = firstNumber / secondNumber;
            calculate(operatorSelected, temporaryNumber, secondNumber);
        }
        firstNumber = output.textContent;
        firstNumber = Number(firstNumber);
        input.textContent = firstNumber;
        operatorSelected = "x";
        output.textContent = "";
    }
    if (numberSelected == "/") {
        if (operatorSelected) {
            secondNumber = output.textContent;
            secondNumber = Number(secondNumber);
            if(operatorSelected == "+") temporaryNumber = firstNumber + secondNumber;
            if(operatorSelected == "-") temporaryNumber = firstNumber - secondNumber;
            if(operatorSelected == "*") temporaryNumber = firstNumber * secondNumber;
            if(operatorSelected == "/") temporaryNumber = firstNumber / secondNumber;
            calculate(operatorSelected, temporaryNumber, secondNumber);
        }
        firstNumber = output.textContent;
        firstNumber = Number(firstNumber);
        input.textContent = firstNumber;
        operatorSelected = "/";
        output.textContent = "";
    }
    if (numberSelected == "+") {
        if (operatorSelected) {
            secondNumber = output.textContent;
            secondNumber = Number(secondNumber);
            if(operatorSelected == "+") temporaryNumber = firstNumber + secondNumber;
            if(operatorSelected == "-") temporaryNumber = firstNumber - secondNumber;
            if(operatorSelected == "*") temporaryNumber = firstNumber * secondNumber;
            if(operatorSelected == "/") temporaryNumber = firstNumber / secondNumber;
            calculate(operatorSelected, temporaryNumber, secondNumber);
        }
        firstNumber = output.textContent;
        firstNumber = Number(firstNumber);
        input.textContent = firstNumber;
        operatorSelected += "+";
        output.textContent = "";
    }

    if (numberSelected == "-") {
        if (operatorSelected) {
            secondNumber = output.textContent;
            secondNumber = Number(secondNumber);
            if(operatorSelected == "+") temporaryNumber = firstNumber + secondNumber;
            if(operatorSelected == "-") temporaryNumber = firstNumber - secondNumber;
            if(operatorSelected == "*") temporaryNumber = firstNumber * secondNumber;
            if(operatorSelected == "/") temporaryNumber = firstNumber / secondNumber;
            calculate(operatorSelected, temporaryNumber, secondNumber);
        }
        firstNumber = output.textContent;
        firstNumber = Number(firstNumber);
        input.textContent = firstNumber;
        operatorSelected = "-";
        output.textContent = "";

    }
    if (numberSelected == "=") {
        secondNumber = output.textContent;
        secondNumber = Number(secondNumber);
        calculate(operatorSelected, firstNumber, secondNumber);
    }
}

function equals() {

}

function calculate(operatorInput, firstInput, secondInput) {
    if (operatorInput == "x") {
        input.textContent += 'x' + secondNumber;
        output.textContent = "";
        console.log(operate("*", firstNumber, secondNumber));
        return output.textContent = operate("*", firstNumber, secondNumber);
    }
    if (operatorSelected == "/") {
        input.textContent += '/' + secondNumber;
        output.textContent = "";
        console.log(operate("/", firstNumber, secondNumber));
        return output.textContent = operate("/", firstNumber, secondNumber);
    }
    if (operatorSelected == "+") {
        input.textContent += '+' + secondNumber;
        output.textContent = "";
        console.log(operate("+", firstNumber, secondNumber));
        return output.textContent = operate("+", firstNumber, secondNumber);
    }
    if (operatorSelected == "-") {
        input.textContent += '-' + secondNumber;
        output.textContent = "";
        console.log(operate("-", firstNumber, secondNumber));
        return output.textContent = operate("-", firstNumber, secondNumber);
    }
}

buttons.forEach(element => {
    element.addEventListener('click', inputNumber);
});