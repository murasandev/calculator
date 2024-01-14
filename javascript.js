function setOperator(operator) {
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

// can manipulate total until clear is hit
let total = 0;

// clear function: reset total back to 0
function clear(){
    return total = 0;
}