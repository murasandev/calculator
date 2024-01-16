let total = 0;
let newNumber;
let digitArray = [];
let numArray = [];
let operator;

let equation = {
    total: '',
    number: '',
    operator: ''
}

function evalEquation() {
    switch(equation.operator){
        case '+':
            total = +equation.total + +equation.number;
            break;
        case '-':
            total = +equation.total - +equation.number;
            break;
        case '*':
            total = +equation.total * +equation.number;
            break;
        case '/':
            total = +equation.total / +equation.number;
            break;
    }
}

const screenBot = document.querySelector(".screen-bot");
const screenTop = document.querySelector(".screen-top");

const screenBotText = document.createElement("div");
const screenTopText = document.createElement("div");

function setTextScreenBot() {
    string = digitArray.join("");
    screenBotText.innerText = `${string}`;
    screenBot.appendChild(screenBotText);
}

function setTextScreenTop() {
    string = numArray.join(" ");
    screenTopText.innerText = `${string}`;
    screenTop.appendChild(screenTopText);
}

function resetScreen() {
    digitArray = [];
    numArray = [];
    screenBotText.innerText = 0;
    screenTopText.innerText = '';
    screenBot.appendChild(screenBotText);
    screenTop.appendChild(screenTopText);
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
    // if(typeof numArray[numArray.length - 1] === 'number' || equation.operator === ''){
    //     setNumber();   
    //     setOperator();
    // }      
    // else setOperator();
    setNumber();   
    setOperator();
});

subtractBtn.addEventListener("click", () => {
    operator = '-';
    if(equation.operator === ''){
        setNumber();   
        setOperator();
    }      
    else setOperator();
});

multiplyBtn.addEventListener("click", () => {
    operator = '*';
    if(equation.operator === ''){
        setNumber();   
        setOperator();
    }      
    else setOperator();
});

divideBtn.addEventListener("click", () => {
    operator = '/';
    if(equation.operator === ''){
        setNumber();   
        setOperator();
    }      
    else setOperator();
});

equalBtn.addEventListener("click", () => {
    operator = '=';
    setNumber();
    evalEquation();
    setTotal();
    console.log(total);
});

clearBtn.addEventListener("click", () => {
    resetScreen();
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
    digitArray.push("0");
    setTextScreenBot();
})

oneBtn.addEventListener("click", () => {
    digitArray.push("1");
    setTextScreenBot();
})

twoBtn.addEventListener("click", () => {
    digitArray.push("2");
    setTextScreenBot();
})

threeBtn.addEventListener("click", () => {
    digitArray.push("3");
    setTextScreenBot();
})

fourBtn.addEventListener("click", () => {
    digitArray.push("4");
    setTextScreenBot();
})

fiveBtn.addEventListener("click", () => {
    digitArray.push("5");
    setTextScreenBot();
})

sixBtn.addEventListener("click", () => {
    digitArray.push("6");
    setTextScreenBot();
})

sevenBtn.addEventListener("click", () => {
    digitArray.push("7");
    setTextScreenBot();
})

eightBtn.addEventListener("click", () => {
    digitArray.push("8");
    setTextScreenBot();
})

nineBtn.addEventListener("click", () => {
    digitArray.push("9");
    setTextScreenBot();
})

pointBtn.addEventListener("click", () => {
    digitArray.push(".");
    setTextScreenBot();
})

// clear number array when number is set
function clearNumber() {
    digitArray = [];
    newNumber = 0;
    setTextScreenBot();
    resetScreen(0);
}

// set two arrays one for numbers and one for operator
// whenever an operator function or equal is clicked
// print through both arrays
// ex. 
// arrayNumber = [1, 4, 6, 7]
// arrayOperator = [+, -, *, =]
// return 1 + 4 - 6 * 7 =

// if numArr.length === opArr.length 
// opArr[length - 1] = current operator

// use when operator symbols are used
function setNumber() {
    newNumber = digitArray.join("");
    if(equation.total === ''){
        equation.total = newNumber;
        console.log(`equation num1 is ${equation.total}`);
    }
    else {
        equation.number = newNumber;
        console.log(`equation num2 is ${equation.number}`);
    }
    numArray.push(newNumber);

    console.log(numArray);
    digitArray = [];
    // may need to move bottom line
    setTextScreenTop();
}

function setOperator(){
    if(equation.operator === ''){
        equation.operator = operator;
        console.log(`equation operator is ${equation.operator}`);
        numArray.push(operator);
        setTextScreenTop();
    }
    // else {
    //     equation.operator = operator;
    //     console.log(`equation operator is ${equation.operator}`);
    //     delete numArray[numArray.length - 1];
    //     numArray.push(operator);
    //     setTextScreenTop();
    // }
}

function setTotal(){
    screenBotText.innerText = `${total}`;
    screenBot.appendChild(screenBotText);
}