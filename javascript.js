
let operate = function(numOne, numTwo, ope) {
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


let add = function(numOne, numTwo) {
    return numOne+numTwo;
}

let subtract = function(numOne, numTwo) {
    return numOne-numTwo;
}

let multiply = function(numOne, numTwo) {
    return numOne*numTwo;
}

let divide = function(numOne, numTwo) {
    return numOne/numTwo;
}