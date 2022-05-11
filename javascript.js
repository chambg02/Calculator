
// DOM manipulation to add numbers in display


// this currently does nothing
let buttonClickNumber = document.getElementsByClassName("numBtn");
let buttonClickOperator = document.getElementsByClassName("opsBtn");

//set global
const select = document.querySelector("#display");
let storeDisplayValue = "";
let numOne = 0;
let numTwo = 0;
let numbers = 0;
let ope = "";
let total = 0;

//record button presses and displays/stores
function displayValue(x) {
    select.append(x);
    storeDisplayValue = storeDisplayValue + x;
    console.log(storeDisplayValue);
    return storeDisplayValue;
}

//analyses/splits stored data and runs through operate function
function equalPress(storeDisplayValue) {
    numbers = storeDisplayValue.split(/[*]|[+]|[-]|[\/]/);
    operators = storeDisplayValue.split(/[^-|+|\/|\*]/).filter(e => e);
    numOne = parseInt(numbers[0]);
    numTwo = parseInt(numbers[1]);
    ope = operators[0];
    total = operate(parseInt(numOne), parseInt(numTwo), ope);
    let newRow = document.createElement("div");
    select.appendChild(newRow);
    newRow.textContent = '= ' + `${total}`;
}

// carry out operations
function operate(numOne, numTwo, ope) {
    if (ope === '+') {
        return add(numOne,numTwo);
    }  else if (ope === "-") {
        return subtract(numOne, numTwo);
    }  else if (ope === '*') {
        return multiply(numOne, numTwo);
    }  else if (ope === "/") {
        return divide(numOne, numTwo)
    }
}

function add(numOne, numTwo) {
    return numOne+numTwo;
}

function subtract(numOne, numTwo) {
    return numOne-numTwo;
}

function multiply(numOne, numTwo) {
    return numOne*numTwo;
}

function divide(numOne, numTwo) {
    return numOne/numTwo;
}
