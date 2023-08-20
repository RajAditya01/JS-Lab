// What are arrow functions? Write a javascript code to find addition, multiplication, subtraction and division of two numbers with user defined function using arrow

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
      console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
      console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
      console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
    } else {
      console.log("Invalid input. Please enter valid numbers.");
    }

    rl.close();
  });
});
