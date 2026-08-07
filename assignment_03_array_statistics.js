// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The total sum.
 */
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The average value.
 */
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = calculateSum(arr);
  return sum / arr.length;
}

/**
 * Finds the maximum number in an array without using Math.max().
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The largest number.
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum number in an array without using Math.min().
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The smallest number.
 */
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * Main execution function to handle user inputs and output results.
 */
function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  // Validate that count is a positive integer
  if (count <= 0) {
    console.log('Error: Please enter a positive number greater than 0.');
    return;
  }

  const numbers = [];

  // Read N numbers from the user
  for (let i = 1; i <= count; i++) {
    const num = readlineSync.questionFloat(`Enter number ${i}: `);
    numbers.push(num);
  }

  // Perform calculations using functions
  const sum = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const max = findMax(numbers);
  const min = findMin(numbers);

  // Print results
  console.log('\nResults:');
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${max}`);
  console.log(`Minimum: ${min}`);
}

// Execute the main function
main();


