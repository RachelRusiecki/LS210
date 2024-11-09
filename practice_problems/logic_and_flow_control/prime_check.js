// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.
// You may assume that the input is always a non-negative integer.

function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 === 0)) return false;
  for (let currentNum = 3; currentNum < num; currentNum += 2) {
    if (num % currentNum === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
