/*
Programming 1: Essentials
Week: 3
Date: 06-10-2023
=========================
Loops (deel 2)
*/
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
for (let i = 0; i < numbers.length; i++) {
  console.log(`The number on index ${i} is ${numbers[i]}`);
}
let k = 0;
for (let j of numbers) {
  console.log(`The number on index ${k} is ${j}`);
  k++;
}
numbers.forEach((number, i) => console.log(`The number on index ${i} is ${number}`));