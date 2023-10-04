/*
Programming 1: Essentials
Week: 3
Date: 04-10-2023
=========================
Recap Week 1 & 2
*/

// Variables
const PI = 3.14; // Number
const firstName = 'Philippe'; // String
const lastName = "De Pauw - Waterschoot";
let quote = "Learning by doing 'so'";
quote = 'Learning by doing \'so\'';
const fullName = firstName + ' ' + lastName; // String concatenation
console.log(fullName); // Output naar de console
let isFemale = false; // Boolean
let a; // contains the value undefined
a = a + 1; // NaN => Not a Number
a = 6;
a++; // a = a + 1
console.log(a);
let data = null; // null value => show that there is no useful data

if (data === null) {
  // Fetch the data
  console.log('Fetch the data');
} else {
  console.log('Do some transformation');
}

let windDirection = 'E';
let output = '';
// switch
switch (windDirection) {
  case 'N': output = 'North'; break;
  case 'E' : output = 'East'; break;
  case 'S' : output = 'South'; break;
  case 'W' : output = 'West'; break;
}
console.log(output);

// Loops
output = '';
let amount = 1000;
for (let i = 0; i < amount; i++) {
  output += `The value of i is ${i}`;

  // if (i < (amount - 1)) {
  //   output += '\n';
  // }
  output += (i < (amount - 1)) ? '\n': '';
}
console.log(output);

// Functions
function getData () {
  return `Dit is data`;
}
data = getData();
console.log(`The data is ${data}`);

function divide (x, y) {
  return x / y;
}
const z = divide(3, -4);
console.log(`The division is ${z}`);