//Write a function that takes two arguments:
// a string to be split
// a delimiter character
// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let subString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === delimiter) {
      console.log(subString);
      subString = '';
    } else if (delimiter === '') {
      console.log(string[idx]);
    } else {
      subString += string[idx];
    }
  }

  if (subString) console.log(subString);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('abc', ';');
// logs:
// hello

splitString(';xyz;', ';');
// logs:
//  (this is a blank line)
// hello
