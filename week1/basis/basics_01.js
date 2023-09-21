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