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