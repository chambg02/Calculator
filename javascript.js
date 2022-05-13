
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
let multiTotal = 0;

//record button presses and displays/stores
function displayValue(x) {
    select.append(x);
    storeDisplayValue = storeDisplayValue + x;
}

/*
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
    newRow.className = "equalsRow";
}

function multiEquals(storeDisplayValue) {

    multiNumbers = storeDisplayValue.split(/[*]|[+]|[-]|[\/]/);
    multiOperators = storeDisplayValue.split(/[^-|+|\/|\*]/).filter(e => e);
    
    for (let i = 0; i < multiNumbers.length; i++) {
        
        numOne = parseInt(multiNumbers[0]);
        numTwo = parseInt(multiNumbers[1]);
        ope = multiOperators[0];
        multiTotal = operate(parseInt(numOne), parseInt(numTwo), ope);
        multiNumbers.splice(0, 2, multiTotal);
        multiOperators.splice(0,1);
    }
    return multiTotal;
}
*/

//deal with multivalues (not yet implemented to button press but works
function multiEqualsPrior(storeDisplayValue) {

    multiNumbers = storeDisplayValue.split(/[*]|[+]|[-]|[\/]/);
    multiOperators = storeDisplayValue.split(/[^-|+|\/|\*]/).filter(e => e);
    
    for (let i = 0; i < multiNumbers.length + 1; i++) {
        if (multiOperators.includes("*")) {
            let indexMult = multiOperators.indexOf("*");
            numOne = parseInt(multiNumbers[indexMult]);
            numTwo = parseInt(multiNumbers[indexMult + 1]);
            ope = multiOperators[indexMult];
            multiTotal = operate(parseInt(numOne), parseInt(numTwo), ope);
            multiNumbers.splice(indexMult, 2, multiTotal);
            multiOperators.splice(indexMult,1);
        } else if (multiOperators.includes("/")) {
            let indexMult = multiOperators.indexOf("/");
            numOne = parseInt(multiNumbers[indexMult]);
            numTwo = parseInt(multiNumbers[indexMult + 1]);
            ope = multiOperators[indexMult];
            multiTotal = operate(parseInt(numOne), parseInt(numTwo), ope);
            multiNumbers.splice(indexMult, 2, multiTotal);
            multiOperators.splice(indexMult,1);
        } else if (multiOperators.includes("+" || "-")) {
            numOne = parseInt(multiNumbers[0]);
            numTwo = parseInt(multiNumbers[1]);
            ope = multiOperators[0];
            multiTotal = operate(parseInt(numOne), parseInt(numTwo), ope);
            multiNumbers.splice(0, 2, multiTotal);
            multiOperators.splice(0,1);
        }
    }
    let newRow = document.createElement("div");
    select.appendChild(newRow);
    newRow.textContent = '= ' + `${multiTotal}`;
    newRow.className = "equalsRow";
}


    /*
    numOne = parseInt(numbers[0]);
    numTwo = parseInt(numbers[1]);
    ope = operators[0];

    total = operate(parseInt(numOne), parseInt(numTwo), ope);

    let newRow = document.createElement("div");
    select.appendChild(newRow);
    newRow.textContent = '= ' + `${total}`;
    newRow.className = "equalsRow";
    */

function clearDisplay() {
    select.innerHTML = '';
    storeDisplayValue = '';
    let clearCell = document.querySelectorAll(".equalsRow");
    select.removeChild(clearCell[0]);
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
