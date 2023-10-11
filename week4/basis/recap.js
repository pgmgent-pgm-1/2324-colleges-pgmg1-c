const lecturer = {
  courses: [
    {
      name: 'Programming 1: Essentials',
      code: 'PGM-1',
      studyPoints: 6,
      contactHours: 10,
    },
    {
      name: 'Web Technology',
      code: 'WEBTECH',
      studyPoints: 6,
      contactHours: 8,
    },
    {
      name: 'Computer Systems',
      code: 'CS',
      studyPoints: 3,
      contactHours: 6,
    },
  ],
};

// Classic for loop
let output = '';
for (let i = 0; i < lecturer.courses.length; i++) {
  output += `\nThe value on index ${i} is ${lecturer.courses[i].name}`;
} 
console.log(output);

// Foreach loop
output = '';
lecturer.courses.forEach((course, index) => output += `\nThe value on index ${index} is ${course.name}`);
console.log(output);

// For...of
output = '';
let index = 0;
for (let course of lecturer.courses) {
  output += `\nThe value on index ${index} is ${course.name}`;
  index++;
}
console.log(output);

// Days of the week
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Pick random day
const randomDayIndex = Math.floor(Math.random() * daysOfWeek.length);
const randomDay = daysOfWeek[randomDayIndex];
console.log(randomDay);

// Loop with for ... of
output = '';
for (let day of daysOfWeek) {
  output += `\nThe day ${day}`;
}
console.log(output);

// Get Character code for certain Character
let quote = 'I Like Graphics Love Code';
const randomCharacterIndex = Math.floor(Math.random() * quote.length);
let randomCharacter = quote.charAt(randomCharacterIndex);
console.log(randomCharacter);
let charCode = quote.charCodeAt(randomCharacterIndex);
console.log(charCode);

// Generate character based on code
output = '';
for (let k = 0; k < 400000; k++) {
  output += ` ${String.fromCharCode(k)}`;
}
console.log(output);