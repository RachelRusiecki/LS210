function rot13(str) {
  return str.split('').map(char => {
    if (/[a-mA-M]/.test(char)) {
      return String.fromCharCode(char.charCodeAt(0) + 13);
    } else if (/[n-zN-Z]/.test(char)) {
      return String.fromCharCode(char.charCodeAt(0) - 13);
    } else {
      return char;
    }
  }).join('');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
