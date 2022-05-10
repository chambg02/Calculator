
// DOM manipulation to add numbers in display

const select = document.querySelector("#display");

let buttonClickNumber = document.getElementsByClassName("numBtn");
let buttonClickOperator = document.getElementsByClassName("opsBtn");
/*
buttonClick.forEach(button => {
    button.addEventListener('click', event => {
        display(button.data-id);
    })
})

function display(input) {
    select.append(input);
}

*/




// carry out operations
function operate(numOne, numTwo, ope) {
    if (ope === "add") {
        console.log("add");
        return add(numOne,numTwo);
    }  else if (ope === "min") {
        console.log("min");
        return subtract(numOne, numTwo);
    }  else if (ope === "mult") {
        console.log("mult");
        return multiply(numOne, numTwo);
    }  else if (ope === "div") {
        console.log("div");
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
