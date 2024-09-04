const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

let num1;

let num2;

let operator;

function operate(num1, num2, operator) {
    if (operator === 'add') add(num1, num2);
    else if (operator === 'subtract') subtract(num1, num2);
    else if (operator === 'multiply') multiply(num1, num2);
    else divide(num1, num2);
};

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.buttons .numbers button');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        let displayValue = number.textContent
        display.textContent = displayValue
    })
})
