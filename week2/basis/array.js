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

// Cats
const cats = [
  'Frodo',
  'Crokette',
  'Korneel',
];
let myCat = cats[2];
console.log(myCat);
cats[cats.length] = 'Katinka';
console.log(cats);
cats.length = cats.length - 1;
console.log(cats);
cats[99] = 'Pommelien';
console.log(cats);
cats[66] = 'Devil';
myCat = cats[66];
console.log(`My favo cat is ${myCat}`);

for (let i = 0; i < cats.length; i++) {
  if (cats[i] !== undefined) {
    console.log(`The cat on index ${i} is ${cats[i]}.`);
  }
}

// Random generation of a number ex. 1982736474849282982
let randomNumber = '', nChars = 1000;
for (let j = 0; j < nChars; j++) {
  randomNumber += Math.floor(Math.random() * 10);
}
console.log(`The generated random number is ${randomNumber}`);