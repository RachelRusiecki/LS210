// Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks.

function generatePattern(nStars) {
  let counter = 1;
  let num = String(counter);
  while (counter <= nStars) {
    console.log(`${num}${'*'.repeat(nStars - counter)}`);
    counter += 1;
    num += String(counter);
  }
}

generatePattern(7);

// Have you tried supplying generatePattern with a number greater than 9? What did you observe? Can you fix the current implementation so that it still renders as a rectangle?

function generateBigPattern(nStars) {
  let counter = 1;
  let num = String(counter);
  let totalColumns = 9 + (2 * (nStars - 9));

  while (counter <= nStars) {
    console.log(`${num}${'*'.repeat(totalColumns - num.length)}`);
    counter += 1;
    num += String(counter);
  }
}

generateBigPattern(20);
