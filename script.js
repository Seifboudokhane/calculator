//main variables
let firstNumber=0,
    secondNumber=0,
    currentNumber=true,//this variable tells the program where to store the current integer:true=firsNumber/false=secondNumber
    equalWasClickedLast=false,
    currentOperator=null;
const displayValue=["0"];
//operating functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,firstNb,secondNmb) {
    switch(operator){
        case "+":
            return add(firstNb,secondNmb);
            break;
        case "-":
            return subtract(firstNb,secondNmb);
            break;
        case "×":
            return multiply(firstNb,secondNmb);
            break;
        case "÷":
            return parseFloat(divide(firstNb,secondNmb));
            break;   }
}
    //this function stores the inputted number inside the correct variable
function storeNumber(number){
    if(currentNumber){
        firstNumber=number;
    }else{
        secondNumber=number;
    }
    currentNumber=!currentNumber;
}

//display
function populateBottomDisplay(content=""){
    const bottomDisplay = document.getElementById("bottomDisplay");
    bottomDisplay.textContent=content;
}
populateBottomDisplay("0");
function populateTopDisplay(content=""){
    const topDisplay = document.getElementById("topDisplay");
    topDisplay.textContent=content;
}
function clearDisplays(){
    firstNumber=0;
    secondNumber=0;
    currentNumber=true;
    currentOperator=null;
    displayValue.length=0;
    displayValue.push("0");
    populateBottomDisplay(displayValue.join(""));
    populateTopDisplay();
}
//link to buttons
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const equalBtn = document.getElementById("equal");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const pointBtn = document.getElementById("point");

//set buttons eventListeners
    //clear button eventListener
clearBtn.addEventListener("click",clearDisplays)
deleteBtn.addEventListener("click",()=>{
    displayValue.pop();
    populateBottomDisplay(displayValue.join(""));
})
    //number buttons eventListener
        //functions for script that repeats (being organized and all)
function isEqualClickedLast(){
    if(equalWasClickedLast==true){
        displayValue.length=0;
        equalWasClickedLast=false;
    }
}
        //the evenListeners
oneBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("1");
    populateBottomDisplay(displayValue.join(""));
});
twoBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("2");
    populateBottomDisplay(displayValue.join(""));
});
threeBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("3");
    populateBottomDisplay(displayValue.join(""));
});
fourBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("4");
    populateBottomDisplay(displayValue.join(""));
});
fiveBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("5");
    populateBottomDisplay(displayValue.join(""));
});
sixBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("6");
    populateBottomDisplay(displayValue.join(""));
});
sevenBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("7");
    populateBottomDisplay(displayValue.join(""));
});
eightBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("8");
    populateBottomDisplay(displayValue.join(""));
});
nineBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue[0]=='0'&&displayValue[1]!="."){
        displayValue.pop();
    }
    displayValue.push("9");
    populateBottomDisplay(displayValue.join(""));
});
zeroBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if (displayValue.length==0||displayValue.length>1||(displayValue.length==1&&displayValue[0]!="0")){
        displayValue.push("0");
    }
    populateBottomDisplay(displayValue.join(""));
});
pointBtn.addEventListener("click",()=>{
    isEqualClickedLast();
    if(displayValue.indexOf(".")==-1){
        if(displayValue.length==0){
            displayValue.push('0');
        }
        displayValue.push(".");
        populateBottomDisplay(displayValue.join(""));
    }
});

    //operator buttons eventListeners
        //functions for script that repeats (being organized and all)
function storeDisplayValue(){
    let string=displayValue.join("");
    let number=Number(string);
    displayValue.length=0;
    storeNumber(number);
}
function dividedByZero(number){
    if (number==Infinity||isNaN(number)){
        console.log(number);
        clearDisplays();
        populateBottomDisplay("you ok?");
    }
}
        //the eventListeners
equalBtn.addEventListener("click",()=>{
    if(currentOperator!=null){
        storeDisplayValue();
        let lastNmb;
        currentNumber ? 
                        lastNmb=operate(currentOperator,firstNumber,secondNumber):
                        lastNmb=operate(currentOperator,secondNumber,firstNumber);
        currentNumber ?
        populateTopDisplay(firstNumber + " " + currentOperator + " " + secondNumber + "="):
        populateTopDisplay(secondNumber + " " + currentOperator + " " + firstNumber + "=");
        currentOperator=null;
        populateBottomDisplay(lastNmb);
        displayValue.push(lastNmb);
        storeNumber(lastNmb);
        equalWasClickedLast=true;
        dividedByZero(lastNmb);
    }
});
addBtn.addEventListener("click",()=>{
    if(displayValue.length>0){
        if(currentOperator==null){
            populateTopDisplay(displayValue.join("")+" +");
            currentOperator="+";
            storeDisplayValue();
        } else {
            storeDisplayValue();
            let lastNmb;
            currentNumber ? 
                            lastNmb=operate(currentOperator,firstNumber,secondNumber):
                            lastNmb=operate(currentOperator,secondNumber,firstNumber);
            populateTopDisplay(firstNumber + " " + currentOperator + " " + secondNumber + "=");
            currentOperator="+"
            storeNumber(lastNmb);
            populateTopDisplay(lastNmb+" +");
            displayValue.length=0;
            dividedByZero(lastNmb);
        }
    }
});

subtractBtn.addEventListener("click",()=>{
    if(displayValue.length>0){
        if(currentOperator==null){
            populateTopDisplay(displayValue.join("")+" -");
            currentOperator="-";
            storeDisplayValue();
        } else {
            storeDisplayValue();
            let lastNmb;
            currentNumber ? 
                            lastNmb=operate(currentOperator,firstNumber,secondNumber):
                            lastNmb=operate(currentOperator,secondNumber,firstNumber);
            populateTopDisplay(firstNumber + " " + currentOperator + " " + secondNumber + "=");
            currentOperator="-"
            storeNumber(lastNmb);
            populateTopDisplay(lastNmb+" -");
            displayValue.length=0;
            dividedByZero(lastNmb);
        }
    }
});

multiplyBtn.addEventListener("click",()=>{
    if(displayValue.length>0){
        if(currentOperator==null){
            populateTopDisplay(displayValue.join("")+" ×");
            currentOperator="×";
            storeDisplayValue();
        } else {
            storeDisplayValue();
            let lastNmb;
            currentNumber ? 
                            lastNmb=operate(currentOperator,firstNumber,secondNumber):
                            lastNmb=operate(currentOperator,secondNumber,firstNumber);
            populateTopDisplay(firstNumber + " " + currentOperator + " " + secondNumber + "=");
            currentOperator="×"
            storeNumber(lastNmb);
            populateTopDisplay(lastNmb+" ×");
            displayValue.length=0;
            dividedByZero(lastNmb);
        }
    }
});

divideBtn.addEventListener("click",()=>{
    if(displayValue.length>0){
        if(currentOperator==null){
            populateTopDisplay(displayValue.join("")+" ÷");
            currentOperator="÷";
            storeDisplayValue();
        } else {
            storeDisplayValue();
            let lastNmb;
            currentNumber ? 
                            lastNmb=operate(currentOperator,firstNumber,secondNumber):
                            lastNmb=operate(currentOperator,secondNumber,firstNumber);
            populateTopDisplay(firstNumber + " " + currentOperator + " " + secondNumber + "=");
            currentOperator="÷"
            storeNumber(lastNmb);
            populateTopDisplay(lastNmb+" ÷");
            displayValue.length=0;
            dividedByZero(lastNmb);
        }
    }
});
//keyboard support

document.addEventListener("keyup",(event)=>{
    switch(event.key){
        case "1":
            document.getElementById("one").click();
            break;
        
        case "2":
            document.getElementById("two").click();
            break;
        
        case "3":
            document.getElementById("three").click();
            break;
        
        case "4":
            document.getElementById("four").click();
            break;
        
        case "5":
            document.getElementById("five").click();
            break;
        
        case "6":
            document.getElementById("six").click();
            break;
        
        case "7":
            document.getElementById("seven").click();
            break;
        
        case "8":
            document.getElementById("eight").click();
            break;
        
        case "9":
            document.getElementById("nine").click();
            break;
        
        case "0":
            document.getElementById("zero").click();
            break;
        
        case "+":
            document.getElementById("add").click();
            break;
        
        case "-":
            document.getElementById("subtract").click();
            break;
        
        case "*":
            document.getElementById("multiply").click();
            break;
        
        case "/":
            document.getElementById("divide").click();
            break;
        
        case ".":
            document.getElementById("point").click();
            break;

        case "Enter":
        case "=":
            document.getElementById("equal").click();
            break;

        case "Escape":
            document.getElementById("clear").click();
            break;

        case "Backspace":
            document.getElementById("delete").click();
            break;
    }
});