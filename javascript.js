let total = 0;
let newNumber;
let numberArray = [];
let operator;

function evalOperation(operator) {
    switch(operator){
        case '+':
            // after operator selected, input newnumber
            // this has to be executed after number input and equal sign hit
            total += newNumber;
            break;
        case '-':
            total -= newNumber;
            break;
        case '*':
            total *= newNumber;
            break;
        case '/':
            total /= newNumber;
            break;
    }
}

const screenBot = document.querySelector(".screen-bot");
const screenTop = document.querySelector(".screen-top");

const screenBotText = document.createElement("div");

function setTextScreenBot(string) {
    string = numberArray.join("");
    screenBotText.innerText = `${string}`;
    screenBot.appendChild(screenBotText);
}

function resetScreen() {
    screenBotText.innerText = `${0}`;
    screenBot.appendChild(screenBotText);
}

resetScreen();

// operator buttons
const addBtn = document.querySelector(".addBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const divideBtn = document.querySelector(".divideBtn");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector(".clearBtn");
// button eventlisteners
addBtn.addEventListener("click", () => {
    operator = '+';
});

subtractBtn.addEventListener("click", () => {
    operator = '-';
});

multiplyBtn.addEventListener("click", () => {
    operator = '*';
});

divideBtn.addEventListener("click", () => {
    operator = '/';
});

equalBtn.addEventListener("click", () => {
    operator = '=';
    clearNumber();
});

clearBtn.addEventListener("click", () => {
    clearNumber();
})

// number Buttons
const zeroBtn = document.querySelector(".zeroBtn");
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");
const pointBtn = document.querySelector(".pointBtn");

// number btn event listener
zeroBtn.addEventListener("click", () => {
    numberArray.push("0");
    setTextScreenBot();
})

oneBtn.addEventListener("click", () => {
    numberArray.push("1");
    setTextScreenBot();
})

twoBtn.addEventListener("click", () => {
    numberArray.push("2");
    setTextScreenBot();
})

threeBtn.addEventListener("click", () => {
    numberArray.push("3");
    setTextScreenBot();
})

fourBtn.addEventListener("click", () => {
    numberArray.push("4");
    setTextScreenBot();
})

fiveBtn.addEventListener("click", () => {
    numberArray.push("5");
    setTextScreenBot();
})

sixBtn.addEventListener("click", () => {
    numberArray.push("6");
    setTextScreenBot();
})

sevenBtn.addEventListener("click", () => {
    numberArray.push("7");
    setTextScreenBot();
})

eightBtn.addEventListener("click", () => {
    numberArray.push("8");
    setTextScreenBot();
})

nineBtn.addEventListener("click", () => {
    numberArray.push("9");
    setTextScreenBot();
})

pointBtn.addEventListener("click", () => {
    numberArray.push(".");
    setTextScreenBot();
})

// clear function: reset total back to 0
function clearTotal(){
    return total = 0;
}

// joins array of numbers and then converts back to number
// set number when operator symbol is clicked
function setNumber(){
    newNumber = +numberArray.join('');
    clearNumber();
}

// clear number array when number is set
function clearNumber() {
    numberArray = [];
    newNumber = 0;
    setTextScreenBot();
    resetScreen(0);
}

// set number > set operator > set number > evaluate