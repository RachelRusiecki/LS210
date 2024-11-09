// Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

function logMultiples(num) {
  for (let currentNum = 100; currentNum >= num; currentNum -= 1) {
    if (currentNum % 2 === 1 && currentNum % num === 0) {
      console.log(currentNum);
    }
  }
}

logMultiples(17);
logMultiples(21);

// This solution must step through every number between 100 and 0. Alternatively, you can determine the number's largest multiple that is less than 100, then start the loop with that multiple. With each iteration of the loop, you can decrement the number by the argument; when the result is negative, you can quit.

function logMultiplesRevised(num) {
  function maxMultiple(multiple) {
    return Math.floor(100 / multiple) * multiple;
  }

  for (let current = maxMultiple(num); current >= num; current -= num) {
    if (current % 2 === 1) console.log(current);
  }
}

logMultiplesRevised(17);
logMultiplesRevised(21);
