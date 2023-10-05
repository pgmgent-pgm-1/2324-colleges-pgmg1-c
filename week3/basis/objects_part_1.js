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
console.log(person);