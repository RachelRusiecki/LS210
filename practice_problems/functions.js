function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    total += arr[idx];
  }
  return total;
}

let temperatures = [18, 1, 3, 8, 5];

console.log(average(temperatures));
