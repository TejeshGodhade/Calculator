const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let inputString = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            evaluateInputString();
        } else if (value === 'Clear') {
            inputString = '';
            screen.textContent = '';
        } else {
            inputString += value;
            screen.textContent = inputString;
        }
    });
});

function evaluateInputString() {
    let result = 0;
    let operator = '';
    let num1 = '';
    let num2 = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            operator = char;
            num1 = inputString.substring(0, i);
            num2 = inputString.substring(i + 1);
            break;
        }
    }

    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }

    screen.textContent = result;
    inputString = '';
}