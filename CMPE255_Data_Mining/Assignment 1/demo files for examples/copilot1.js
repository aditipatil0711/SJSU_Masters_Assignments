// Write a calculator app that has 4 buttons: +, -, *, and /.
// When the user clicks on one of the buttons, the app should prompt the user for two numbers.
// After the user enters the numbers, the app should display the result of the operation.
// For example, if the user clicks on the + button and enters 2 and 3, the app should display 5.
// The app should continue to prompt the user for numbers until the user clicks "Cancel".
// If the user enters something that is not a number, the app should display a message indicating that the input is invalid.
// If the user clicks "Cancel" when prompted for the first number, the app should display a message indicating that the operation was cancelled.
// If the user clicks "Cancel" when prompted for the second number, the app should display a message indicating that the operation was cancelled.
// If the user clicks "Cancel" when prompted for the operation, the app should display a message indicating that the operation was cancelled.
// The app should not crash regardless of the input.

var op = prompt("Enter an operation: +, -, *, or /");
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

if (num1 === null || num2 === null || op === null) {
  console.log("Operation cancelled.");
} else if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
  console.log("Invalid input.");
} else {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch (op) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("Invalid input.");
  }
}

// Write a unit test code for the additon function in the calculator app.
// The unit test should test the function with 10 different inputs.
// Each input should be a random integer between 0 and 100.
// The unit test should print the input and output of the function to the console.
// The unit test should also print "Test passed" if the output of the function matches the expected output.
// The unit test should print "Test failed" if the output of the function does not match the expected output.
// The unit test should not crash regardless of the input.

function addition(num1, num2) {
  return num1 + num2;
}

for (var i = 0; i < 10; i++) {
  var num1 = Math.floor(Math.random() * 101);
  var num2 = Math.floor(Math.random() * 101);
  console.log("Input: " + num1 + " + " + num2);
  console.log("Output: " + addition(num1, num2));
  if (addition(num1, num2) === num1 + num2) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
}

//Path: C:\Users\patil\Assignments\CMPE255\copilot1.js
// In the file in the given path, there is a function called "addition". Refactor the function name to add and make changes accordingly to the function implementations in the file.
// The function should still work the same way after refactoring.
// The function should not crash regardless of the input.
//Replace the placeholders of existing method names with new method names.