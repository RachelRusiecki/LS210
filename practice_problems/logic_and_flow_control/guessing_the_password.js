//Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.

const rlSync = require('readline-sync');
const PASSWORD = 'password';
let message = 'You have been denied access.';

for (let failures = 0; failures < 3;) {
  let guess = rlSync.question('What is the password? ');
  if (guess === PASSWORD) {
    message = 'You have successfully logged in.';
    break;
  } else {
    failures += 1;
  }
}

console.log(message);
