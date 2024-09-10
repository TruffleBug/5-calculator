const add = (num1, num2) => result = Number(num1) + Number(num2);
const subtract = (num1, num2) => result = num1 - num2;
const multiply = (num1, num2) => result = num1 * num2;
const divide = (num1, num2) => result = num1 / num2;

let num1 = 0;
let num2  = 0;
let displayValue = '';
let operator = '';

function operate(num1, num2, operator) {
    if (operator === 'add') add(num1, num2);
    else if (operator === 'subtract') subtract(num1, num2);
    else if (operator === 'multiply') multiply(num1, num2);
    else divide(num1, num2);
};

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.numbers button');
let operators = document.querySelectorAll('.operators button');
let equals = document.querySelector('#equals');
let clear = document.querySelector('#clear');
let decimal = document.querySelector('#decimal');
let backspace = document.querySelector('#backspace');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (displayValue.includes('.') && number.textContent === '.') {
            return;
        }
        if (operator === '') {
            displayValue = displayValue.concat(number.textContent);
            display.textContent = displayValue;
            console.log({displayValue});     
                    console.log('operator is undefined')
        } else {
            displayValue = displayValue.concat(number.textContent);
            display.textContent = displayValue;
            console.log({displayValue});
                    console.log('has operator')
        }
    })
})


decimal.addEventListener('click', () => {
    if (displayValue.includes('.')) {
        return;
    } else {
        displayValue = displayValue.concat(number.textContent);
        display.textContent = displayValue;
    }
})


operators.forEach((operatorInput) => {
    operatorInput.addEventListener('click', () => {
        if (operator === '') {
            if (displayValue !== '') {
                num1 = displayValue;
            }
            operator = operatorInput.id;
                    console.log({operator});
                    console.log({num1})
            displayValue = '';
        } else {
            num2 = displayValue;
            operate(num1, num2, operator);
                    console.log(result)
            num1 = result;
            display.textContent = result;
            operator = operatorInput.id;
            displayValue = '';
                    console.log({num1})
                    console.log({num2})

        }
    })
})

equals.addEventListener('click', () => {
    num2 = displayValue;
    operate(num1, num2, operator);
                console.log(`${num1} ${operator} ${num2} = ${result}`)
    display.textContent = result;
    displayValue = '';
    operator = '';
    num1 = result;
})

backspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
    if (displayValue === '') {
        display.textContent = 0;
    }
})

clear.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
    result = undefined;
    displayValue = '';
    display.textContent = 0;
                console.log(`${num1} ${operator} ${num2} = ${result}`)
})