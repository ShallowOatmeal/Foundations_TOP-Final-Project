let numOne = 0;
let numTwo = 0;
let smoothOperator = null;
const calcDisplay = document.querySelector('#display');
const numbersButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clearCalc = document.querySelector('#AC');


numbersButton.forEach(button => {
    button.addEventListener("click", (e) => {
        let target = e.target;
        switch (calcDisplay.textContent) {
            case "0":
                calcDisplay.textContent = e.target.id;
                break;
            default:
                calcDisplay.textContent += e.target.id;
        }
     });
});


opButton.forEach(button => {
    button.addEventListener("click", (e) => {
        let target = e.target;
        switch (target.id) {
            case "x":
                //
            case "+":
                //
            case "-":
                //
            case "÷":
                //
        }
    });
});


function del() {
    //
};

function clear() {
    calcDisplay.textContent = "0";
};

clearCalc.addEventListener("click", () => clear());


function multiply(num1,num2) {
    return num1 * num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function add(num1,num2) {
    return num1 + num2;
};

function division(num1,num2) {
    if (num1 == 0 || num2 == 0) {
        return "Error...0 cannot divide by itself"
    } else {
        return num1 / num2;
    }
}


function operate(numOne, smoothOperator, numTwo) {
    switch (smoothOperator) {
        case "x":
            return multiply(numOne, numTwo);
            break;
        case "+":
            return add(numOne, numTwo);
            break;
        case "÷":
            return division(numOne, numTwo);
            break;
        case "-":
            return substract(numOne, numTwo);
            break;           
    }

};

