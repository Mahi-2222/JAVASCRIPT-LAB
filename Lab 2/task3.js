function calculate(num1, num2, operator) {
    if (operator === '+') {
        console.log(num1 + num2);
    } else if (operator === '-') {
        console.log(num1 - num2);
    }
}

// Test with '+'
calculate(8, 4, '+');

// Test with '-'
calculate(8, 4, '-');
