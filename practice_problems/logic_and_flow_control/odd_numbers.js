// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

function logOddNumbers(num) {
  for (let currentNum = 1; currentNum <= num; currentNum += 2) {
    console.log(currentNum);
  }
}

logOddNumbers(19);

// Instead of a conditional that checks for odd numbers, you can write a conditional that checks for even numbers, but skips them with the continue statement. How would you write your code?

function logOddNumbersRevised(num) {
  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (currentNum % 2 === 0) continue;
    console.log(currentNum);
  }
}

logOddNumbersRevised(19);
