// Create a function that computes the Greatest Common Divisor of two positive integers.

function gcd(num1, num2) {
  for (let max = num1 < num2 ? num1 : num2; max > 0; max -= 1) {
    if (num1 % max === 0 && num2 % max === 0) return max;
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1

// Our solution works with only two numbers. Can you expand it to accept an array of two or more numbers instead?

function gcdExtra(arr) {
  return arr.reduce((divisor, value) => gcd(divisor, value));
}

console.log(gcdExtra([5, 4, 8, 12, 5]));
