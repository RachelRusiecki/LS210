// Write a function that returns a string converted to lowercase.
// To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations.
// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let result = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if (/[A-Z]/.test(string[idx])) {
      let asciiCode = string[idx].charCodeAt(0) + CONVERSION_OFFSET;
      result += String.fromCharCode(asciiCode);
    } else {
      result += string[idx];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
