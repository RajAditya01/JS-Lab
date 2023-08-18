// What are arrow functions? Write a javascript code to find addition, multiplication, subtraction and division of two numbers with user defined function using arrow

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num1) && !isNaN(num2)) {
  console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
