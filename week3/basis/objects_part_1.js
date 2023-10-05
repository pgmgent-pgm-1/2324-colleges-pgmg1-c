/*
Programming 1: Essentials
Week: 3
Date: 05-10-2023
=========================
Objects (deel 1)
*/

// Object Literal notation => describe a person
const person = {
  hairColor: 'brown',
  height: 1.72,
  weight: 65,
  dayOfBirth: '12-12-1983',
  jump: function() {
    return 'The person is jumping!';
  },
  eat() {
    return 'The person is eating!';
  }
};
person.hairColor = 'Pink';
person.firstName = 'Philippe';
person.lastName = 'De Pauw - Waterschoot';
console.log(person);
const h = person.height;
console.log(`The height of the person ${person.firstName} ${person.lastName} is ${h}`);
person['3tier'] = 'Presentation, Logic and Data Tier'; // Associatieve array
person['cool shit'] = 'This person is the real slim shady';
// Call the actions
let output = person.jump();
console.log(output);
output = person.eat();
console.log(output);

// New Loop => Yiha => for...in => doorlopen van alle eigenschappen van een object
for (let prop in person) {
  console.log(`The prop ${prop} with value ${person[prop]}`);
}

// Repeat the same stuff
output = 'Properties of the object person\n---------------------------------------------';
for (let prop in person) {
  output += `\nThe prop ${prop} with value ${person[prop]}`;
}
console.log(output);

// Math object
let v = Math.PI;
v = Math.sin(30);
console.log(v);

// Number object
v = Number.MIN_VALUE;
console.log(v);

// String object
let str = '           Paul        ';
str = str.trim();
str = str.charAt(2);
console.log(str);