// operators: + - * /
// if operator xyz pressed set operator to symbol

switch(operator){
    case '+':
        break;
    case '-':
        break;
    case '*':
        break;
    case '/':
        break;
}

// buttons for operators
const addBtn = document.querySelector(".addBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const divideBtn = document.querySelector(".divideBtn");

// can manipulate total until clear is hit
let total = 0;

// clear function: reset total back to 0
function clear(){
    return total = 0;
}