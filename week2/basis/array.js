/*
Programming 1: Essentials
Week: 2
Date: 27-09-2023
=========================
Arrays
*/
const lecturers = [
  'Evelien',
  'Wachem',
  'Mathieu',
];
// Get the first element => Evelien
console.log(lecturers[0]);
for (let p = 0; p < 3; p++) {
  console.log(`The person on the index ${p} is ${lecturers[p]}`);
}

// Define an array of fruit
let fruit = [
  'Appel',
  'Perzik',
  'Aardbei',
  'Mango',
  'Banaan',
  'Bloedsinaasappel',
  'Kiwi',
];
// Add a new element to the array
fruit[7] = 'Citroen';
console.log(fruit);
// Changed the last element of the array
fruit[fruit.length - 1] = 'Watermeloen';
console.log(fruit);
// Add an element with a instruction = function => push
fruit.push('Abrikoos');
console.log(fruit);
