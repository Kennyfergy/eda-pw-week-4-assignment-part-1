console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
} //end hello function
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return "Hello, Your Name!";
} //end helloName function
// Remember to call the function to test
console.log("Test for: 'Hello, You Name!'", helloName());

// 3. Function to add two numbers together & return the result

function addNumbers(num1, num2) {
  return num1 + num2;
} //end addNumbers function
addNumbers(37, 302);
console.log(addNumbers(37, 302));
// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
} //end multiplyThree function
multiplyThree(3, 4, 6);
console.log(multiplyThree(3, 4, 6));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else return false;
} //end isPositive function

// Call the function to test each outcome (true & false)
isPositive(3);
console.log(isPositive(3));
isPositive(-2);
console.log(isPositive(-2));
//oops did a console log before looking at the next comment.

// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
} //end function
console.log(getLast[1]);
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  } //end loop
  return false;
} //end function

const arr = [9, 8, 7];
console.log(find(9, arr));
console.log(find(6, arr));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === "a") {
    return true;
  } else {
    return false;
  }
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;

  // TODO: loop to add items

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  // TODO: return the sum
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(input) {
  const positiveNumbers = input.filter((number) => number > 0);
  return positiveNumbers;
} //end function: allPositive
let input = [-1, 1, -2, 2, -3, 3];
let positiveArray = allPositive(input);
console.log(positiveArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//From Edabit:
//Write a function that converts hours into seconds.
// Need to write a function where you can input and hour amount and convert it to seconds
function howManySeconds(hours) {
  const secondsInHour = 3600; // There are 3600 seconds in an hour
  const seconds = hours * secondsInHour;
  return seconds;
}

let hours = 2;
let seconds = howManySeconds(2);
console.log("How many seconds in 2 hours:", howManySeconds(2));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
