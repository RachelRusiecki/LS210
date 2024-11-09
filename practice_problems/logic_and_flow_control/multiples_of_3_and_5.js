// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

function multiplesOfThreeAndFive() {
  for (let num = 3; num <= 100; num += 1) {
    if (num % 15 === 0) {
      console.log(`${num}!`);
    } else if (num % 5 === 0 || num % 3 === 0) {
      console.log(`${num}`);
    }
  }
}

multiplesOfThreeAndFive();


// For additional practice, how would you change your function so it takes, as arguments, the range of numbers it should check?

function multiplesOfThreeAndFiveRanged(min, max) {
  for (let num = min; num <= max; num += 1) {
    if (num % 15 === 0) {
      console.log(`${num}!`);
    } else if (num % 5 === 0 || num % 3 === 0) {
      console.log(`${num}`);
    }
  }
}

multiplesOfThreeAndFiveRanged(18, 138);
