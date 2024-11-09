// Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.
// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

function trim(str) {
  let startIdx;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== ' ') {
      startIdx = idx;
      break;
    }
  }

  let endIdx;
  for (let idx = str.length - 1; idx >= 0; idx -= 1) {
    if (str[idx] !== ' ') {
      endIdx = idx;
      break;
    }
  }

  let result = '';
  for (let idx = startIdx; idx <= endIdx; idx += 1) {
    result += str[idx];
  }

  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
