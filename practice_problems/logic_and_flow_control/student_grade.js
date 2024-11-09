// Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:
// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

const rlSync = require('readline-sync');

let score1 = Number(rlSync.question('Enter score 1: '));
let score2 = Number(rlSync.question('Enter score 2: '));
let score3 = Number(rlSync.question('Enter score 3: '));
let grade = 'F';

if ((score1 + score2 + score3) / 3 >= 90) {
  grade = 'A';
} else if ((score1 + score2 + score3) / 3 >= 70) {
  grade = 'B';
} else if ((score1 + score2 + score3) / 3 >= 50) {
  grade = 'C';
}

console.log('Based on the average of your 3 scores your letter grade is ' +
            `"${grade}".`);

// Our solution limits us to exactly three input scores. Modify it to accept any number of scores. To simplify matters, move the computation of the average into a function.

// const rlSync = require('readline-sync');
// let answer = 'y';
// let scores = [];

// while (answer === 'y') {
//   scores.push(Number(rlSync.question('Enter score: ')));
//   answer = rlSync.question('Would you like to enter another score? (y/n) ');
// }

// let grade = 'F';

// if (average(scores) >= 90) {
//   grade = 'A';
// } else if (average(scores) >= 70) {
//   grade = 'B';
// } else if (average(scores) >= 50) {
//   grade = 'C';
// }

// function average(scoresArr) {
//    return (scoresArr.reduce((sum, value) => sum + value)) / scoresArr.length;
// }

// console.log('Based on the average of your scores your letter grade is ' +
//             `"${grade}".`);
