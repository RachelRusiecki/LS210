// Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.

function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 === 0)) return false;

  for (let currentNum = 3; currentNum < num; currentNum += 2) {
    if (num % currentNum === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  for (let currentNum = 2; currentNum <= expectedSum / 2; currentNum += 1) {
    if (isPrime(currentNum) && isPrime(expectedSum - currentNum)) {
      console.log(`${currentNum}`, `${expectedSum - currentNum}`);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
