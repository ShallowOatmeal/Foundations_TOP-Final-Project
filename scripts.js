let numOne = null;
let numTwo = null;
currResult = null;
let smoothOperator;
let prevOp;
const calcDisplay = document.querySelector('#display');
const numbersButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operator');
const clearCalc = document.querySelector('#AC');
const signChangeButton = document.querySelector('.signChange');
const decimalBtn = document.querySelector('#decimal');



numbersButton.forEach(button => {
    button.addEventListener("click", (e) => {
        let target = e.target;
        if (currResult) {
            numOne = currResult
            currResult = null;
            calcDisplay.textContent = '0';
        }
        switch (calcDisplay.textContent) {
            case "0":
                calcDisplay.textContent = target.id;
                break;
            default:
                calcDisplay.textContent += target.id;
        }
     });
});

const delButton = document.querySelector('#back');
delButton.addEventListener("click", (e) => {
    let text = calcDisplay.textContent.toString();
    let delDisplay = text.slice(0, text.length -1);
    calcDisplay.textContent = delDisplay;
})


opButton.forEach(button => {
    button.addEventListener("click", (e) => {
        let target = e.target;
        if (!numOne) {
            numOne = calcDisplay.textContent;
            smoothOperator = target.id;
            calcDisplay.textContent = '';
        } else if (smoothOperator) {
            prevOp = target.id;
            resultCalc();
        } else if (numOne && !smoothOperator) {
            smoothOperator = target.id;
            prevOp = target.id;
            resultCalc();  
        }
    });
});


function clear() {
    calcDisplay.textContent = "0";
    numOne = null;
    numTwo = null;
    currResult = null;
    smoothOperator = '';
};


signChangeButton.addEventListener("click", () => {
    const numeval = parseInt(calcDisplay.textContent);
    if (numeval >= 0) {
        calcDisplay.textContent = '-' + calcDisplay.textContent;
    } else if (numeval < 0) {
        calcDisplay.textContent = calcDisplay.textContent.replace('-','');
    }
});



   function decimalPoint () {
    const txtNum = calcDisplay.textContent;
    if (!txtNum.includes('.')) {
        calcDisplay.textContent = calcDisplay.textContent + '.';
    } 
   };
   

decimalBtn.addEventListener("click", () => decimalPoint());
clearCalc.addEventListener("click", () => clear());



function multiply(num1,num2) {
    const ans = num1 * num2;
    console.log(ans);
    currResult = ans.toString();
};

function substract(num1, num2) {
    const ans = num1 - num2;
    console.log(ans);
    currResult = ans.toString();
};

function add(num1,num2) {
    const ans = num1 + num2;
    currResult = ans.toString();
    console.log(ans);
};

function divide(num1,num2) {
    if (num1 == 0 || num2 == 0) {
        currResult = "0";
        alert("You can't divide nothing by nothing, silly.");
        return;
    } else {
        const ans = num1 / num2;
        currResult = ans.toString();
        console.log(ans);
    }
};

equalsButton = document.querySelector('#equal');

equalsButton.addEventListener("click", () => {
    if (smoothOperator) {
        resultCalc();
    } else if (!smoothOperator) {
        smoothOperator = prevOp;
        resultCalc();
    }
});


function resultCalc () {
    numTwo = calcDisplay.textContent;
    num1 = parseInt(numOne);
    num2 = parseInt(numTwo);
    switch (smoothOperator) {
        case "x":
            multiply(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case "+":
            add(num1, num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
    }
    calcDisplay.textContent = currResult;
    numOne = null;
    numTwo = null;
    smoothOperator = null;
};