console.log("Hello World");
console.log("Greetings Earthlings");

// This a one line comment
/*
Programming 1: Essentials
Week: 1
Date: 20-09-2023
==========================
Basics
Grammer
Syntax
*/
pi = 3.14;
console.log(pi);
firstName = "Philippe";
console.log(firstName);
dayOfBirth = "12/12/1745";
firstname = "Willy";

// Declaratie (En. declaration)

// Bij een const variabele moet je direct een waarde aan toekennen
const lastName = "De Pauw - Waterschoot";
console.log(lastName);

// Bij een let variabele kan je na toekenning de waarde veranderen
let age = 367;
age = 369;
console.log(age);

// Enkel declareren
let data;
console.log(data);
// Informatie toekennen aan een variabele (En. assignment)
data = "Barbie";

// Built-in basic datatypes
// String
const nickName = "drdynscript";
const email = 'philippe.depauw@arteveldehs.be';
let quoteOfTheDay = 'Quote of the day "Learning by doing"';
quoteOfTheDay = "Quote of the day 'Learning by doing'";
quoteOfTheDay = 'Quote of the day \'Learning by doing\''; // Backslash escaping \
console.log(quoteOfTheDay);

// Strings met elkaar verbinden via + teken
const contact = 'My nickname is ' + nickName + ', my email is ' + email;
console.log(contact);

// Number
let salary = 4100;
salary = salary + 1000;
console.log(salary);

let height = 1.72;
console.log('The height of ' + nickName + ' is ' + height + '.')

// Multiple lines of text via backslash escaping
let poem = 
'Roses are red,\n\
vilotes are blue,\n\
sugar is sweet,\n\
so is foo';
console.log(poem);

// Template literal notation of a string
poem = 
`Roses are red,
vilotes are blue,
sugar is sweet,
so is foo`;
console.log(poem);

// Boolean
let isGamePlaying = false;
console.log('The state of the game is ' + isGamePlaying);
isGamePlaying = true;
console.log('The state of the game is ' + isGamePlaying);

const fName = 'Slim';
const lName = 'Shady';
let myAge = 37;
console.log('My name is ' + fName + ' ' + lName + '. My age is ' + myAge + '.');
console.log(`My name is ${fName} ${lName}. My age is ${myAge}.`);

let width = 1920;
height = 1080;
console.log(`The resolution of my screen is ${width}x${height}`);

// Wiskundige operatoren (En. arithmetic operators)
// 1. Optellen (En. addition operators)
let x = 6; // 6
let y = -4; // -4
let z = x; // 6
z = x + y; // 2
console.log(x, y, z);
// 2. Aftrekken (En. Substraction operators)
z = x - y; // 10
console.log(z);
// 3. Vermenigvuldigen (En. multiplication operators)
z = 4 * 3; // 12
z = x * y; // -24
// 4. Deling (Eng. division operators)
z = 4 / 3; // 1.333333
z = x / y; // -1,5
z = -4 / 0;
console.log(z);
// 5. Macht verheffen (En. exponential)
z = 4 ** 3; // 64
console.log(z);
// 6. Rest van een deling (En. division remainder)
z = 4 % 2; // 0
z = 4 % 3; // 1
z = x % y; // 2
console.log(z);
// one operand and one operator
z = z + 1; // 3
z += 1; // 4
z = z - 1; // 3
z -= 1; // 2
z *= 2; // 4 => z = z * 2
z /= 2; // 2 => z = z / 2;

z = 'Philippe';
z += ' De Pauw';
console.log(z);
z = 4;
z += 'sla';
console.log(z);
z = 4;
z *= 'sla';
console.log(z);

// Math class => many mathematical operations
pi = Math.PI;
console.log(pi);
z = 12.6;
let v = Math.ceil(z); // 13
v = Math.floor(z); // 12
v = Math.round(z); // 13
v = Math.floor(Math.random() * 30);
console.log(v);