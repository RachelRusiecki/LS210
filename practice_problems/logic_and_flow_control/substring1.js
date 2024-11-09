// Write a function that returns a substring of a string based on a starting index and length.
// The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string.
// The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

function substr(string, start, length) {
  let result = '';
  let idx = start >= 0 ? start : string.length + start;
  for (let counter = 0; counter < length; counter += 1) {
    if (string[idx + counter] === undefined) break;
    result += string[idx + counter];
  }

  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
