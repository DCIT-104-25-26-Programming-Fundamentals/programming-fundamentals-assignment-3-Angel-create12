// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * PART A — Generates and prints the first N Fibonacci numbers on one line using a loop.
 * 
 * @param {number} n - The number of terms to generate.
 */
function printFibonacciSequence(n) {
  if (n <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }

  const sequence = [];
  
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      // Each term is the sum of the previous two terms
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

/**
 * PART B — Checks if a given non-negative integer belongs to the Fibonacci sequence using a loop.
 * 
 * @param {number} target - The number to test.
 * @returns {boolean} True if target is a Fibonacci number, false otherwise.
 */
function isFibonacciNumber(target) {
  if (target < 0) {
    return false;
  }

  let a = 0;
  let b = 1;

  // 0 and 1 are immediately valid
  if (target === a || target === b) {
    return true;
  }

  // Generate sequence numbers until we meet or pass the target
  let next = a + b;
  while (next <= target) {
    if (next === target) {
      return true;
    }
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

/**
 * Main function orchestrating user interaction for Part A and Part B.
 */
function main() {
  console.log('====================================');
  console.log('  PART A — Print First N Terms      ');
  console.log('====================================');
  const count = readlineSync.questionInt('How many terms? ');
  printFibonacciSequence(count);

  console.log('\n====================================');
  console.log('  PART B — Check Fibonacci Number   ');
  console.log('====================================');
  const checkNum = readlineSync.questionInt('Enter a number to check: ');
  
  if (isFibonacciNumber(checkNum)) {
    console.log(`${checkNum} is a Fibonacci number.`);
  } else {
    console.log(`${checkNum} is NOT a Fibonacci number.`);
  }
}

// Run the main program
main();

