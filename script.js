function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(operator,x,y) {
    if(operator == "+"){
        console.log(add(x,y));
    }
    if(operator == "-") {
        console.log(subtract(x,y));
    }
    if(operator == "*"){
        console.log(multiply(x,y));
    }
    if(operator == "/") {
        console.log(divide(x,y));
    }
}

operate("+",5,2);
operate("-",5,2);
operate("*",5,2);
operate("/",5,2);

const buttons = document.querySelector('.buttons');

function inputNumber(params) {
    
}