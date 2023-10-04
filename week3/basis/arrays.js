/*
Programming 1: Essentials
Week: 3
Date: 04-10-2023
=========================
Arrays (deel 2)
*/
const persons = [
  'Mieke',
  'Abdellah',
  'Stef',
  'James',
];
let p = persons[2];
console.log(p);
persons[2] = 'Noah';
p = persons[2];
console.log(p);
console.log(`The length of the array persons is ${persons.length}`);
// Add an element on a certain position in the array
persons[5] = 'Larisah'; // The length of the array is 6
console.log(persons[4]); // undefined
// Add an element at the end of the array => push function
persons.push('Lester');
let l = persons.push('Mohammed', 'Julian', 'King George', 'Trevor', '2pac');
console.log(`The length of the array persons is ${l}`);
console.log(persons);
// Remove an element at the end of the array => pop function
l = persons.pop();
console.log(`The removed element is ${l}`);
// Add elements at the begin of the array => unshift function
l = persons.unshift('Ann', 'Jude');
console.log(persons);
// Removes the first element from an array => shift function
let elem = persons.shift();
console.log(`The removed element is ${elem}`);
// Create a new array of numbers
const numbers = [1, 2, 3, 4, 5, 6];
// Remove an element from a certain position in the array => splica function
const deletedItems = numbers.splice(1, 2);
console.log(deletedItems);
console.log(`The numbers are ${numbers}`);
// Add elements in a certain position in the array => splice function
numbers.splice(3, 0, 'Ismail', true, null, 16.7);
console.log(numbers);
const copied = numbers.slice(3, 5);
console.log(copied, numbers);
// Full copy of numbers
const fullCopy = numbers.slice();
console.log(fullCopy);
// Combine two arrays to one
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = arr1.concat(arr2);
console.log(arr3);
// Convert an array to a string and concatenate the elements separated by a character
const sitemap = ['Home', 'Cultuur', 'Ondersteuning'];
const breadcrumb = sitemap.join(' > ');
console.log(breadcrumb);
// Reverse an array
const reversedSitemap = sitemap.reverse();
const title = reversedSitemap.join(' | ');
console.log(title);












































































































































































