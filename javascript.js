let total = 0;
let newNumber;
let numberArray = [];

function setOperator(operator) {
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

function getNewNumber() {
    prompt()
}

// operator buttons
const addBtn = document.querySelector(".addBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const divideBtn = document.querySelector(".divideBtn");

// button eventlisteners
addBtn = addEventListener("click", () => {
    setOperator("+");
})

subtractBtn = addEventListener("click", () => {
    setOperator("-");
})

multiplyBtn = addEventListener("click", () => {
    setOperator("*");
})

divideBtn = addEventListener("click", () => {
    setOperator("/");
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

// number btn event listener
zeroBtn = addEventListener("click", () => {

})

// clear function: reset total back to 0
function clear(){
    return total = 0;
}

// joins array of numbers and then converts back to number
// set number when operator symbol is clicked
function setNumber(){
    newNumber = +numberArray.join('');
    clearNumberArray();
}

// clear number array when number is set
function clearNumberArray() {
    numberArray = [];
}