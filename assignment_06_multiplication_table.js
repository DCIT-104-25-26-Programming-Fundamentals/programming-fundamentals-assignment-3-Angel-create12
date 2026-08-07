// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
const readlineSync = require('readline-sync');

/**
 * Helper function to print a multiplication table for a single number from 1 to 12.
 * 
 * @param {number} num - The number to generate the table for.
 */
function printSingleTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num}  x  ${i < 10 ? i + ' ' : i} =  ${num * i}`);
  }
}

/**
 * PART A — Asks for a single number and prints its multiplication table from 1 to 12.
 * 
 * @param {number} num - The target number.
 */
function generateSingleTable(num) {
  if (num <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }
  printSingleTable(num);
}

/**
 * PART B — Asks for N and prints multiplication tables for all numbers from 1 to N.
 * 
 * @param {number} n - The maximum table limit.
 */
function generateTablesUpToN(n) {
  if (n <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }

  for (let currentNum = 1; currentNum <= n; currentNum++) {
    printSingleTable(currentNum);
    if (currentNum < n) {
      console.log('---------------------------');
    }
  }
}

/**
 * Main execution function to orchestrate input and output.
 */
function main() {
  console.log('====================================');
  console.log('     PART A — Single Table          ');
  console.log('====================================');
  const singleNum = readlineSync.questionInt('Enter a number for a single table: ');
  generateSingleTable(singleNum);

  console.log('\n====================================');
  console.log('   PART B — Tables from 1 to N     ');
  console.log('====================================');
  const limitN = readlineSync.questionInt('Enter N to generate all tables from 1 to N: ');
  generateTablesUpToN(limitN);
}

// Run the main program
main();

