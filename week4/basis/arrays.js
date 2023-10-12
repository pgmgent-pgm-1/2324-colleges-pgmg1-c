const values = [
  10,
  5, 
  16,
  7,
];
const transformValues = values.map((v) => v * v);
console.log(values, transformValues);

const sports = [
  'Judo',
  'Karate',
  'Kobuko',
  'Samba',
  'Yoga',
];
const transformSports = sports.map((sp) => `Ik doe aan ${sp}`);
console.log(sports, transformSports);
console.log(transformSports.join('\n'));

const students = [
  {
    firstName: 'Joske',
    lastName: 'Vermeulen',
    studentNumber: 1234567,
  },
  {
    firstName: 'Flavie',
    lastName: 'Bas',
    studentNumber: 6878632,
  },
  {
    firstName: 'Ros',
    lastName: 'Van het Maaskantje',
    studentNumber: 3243543,
  }
];
const transformedStudents = students.map((student) => {
  return `
${student.firstName} ${student.lastName} => ${student.studentNumber}`;
});
console.log(students, transformedStudents);
let output = transformedStudents.join('\n.....................................................');
console.log(output);

let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
arr.sort();
console.log(arr);

arr = [1, 3, 40, 100000, 21];
arr.sort();
console.log(arr);

arr.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a == b) return 0;
});
console.log(arr);

// Search in an array of strings
arr = ['pollepel', 'lepollo', 'polo', 'polshoogte', 'ik', 'jij', 'wij'];
let searchString = 'lepo';
const findValue = arr.find((elm) => elm.indexOf(searchString) !== -1);
console.log(findValue);

searchString = 'pol';
const findValues = arr.filter((elm) => elm.indexOf(searchString) !== -1);
console.log(findValues);

// Bol.com
const products = [
  {
    name: 'Apple Watch Series 9 - 45mm - Midnight Aluminium Case with Midnight Sport Band - M/L',
    price: 479,
  },
  {
    name: 'Apple Watch Ultra 2 - GPS + Cellular - 49mm - Titanium Case with Green/Grey Trail Loop - M/L',
    price: 899,
  },
  {
    name: 'FITNOVA Outdoor Smartwatch Dames & Heren - Waterdicht Horloge voor IOS, Android en HarmonyOS',
    price: 49,
  }
];

products.sort((productA, productB) => {
  if (productA.price > productB.price) return 1;
  if (productA.price < productB.price) return -1;
  if (productA.price === productB.price) return 0;
});

console.log(products);

function sortProducts(products, order) {
  products.sort((productA, productB) => {
    if (productA.price > productB.price) return (order == 'ASC' ? 1 : -1);
    if (productA.price < productB.price) return (order == 'ASC' ? -1 : 1);
    if (productA.price === productB.price) return 0;
  });
  return products;
}

let sortedProducts = sortProducts(products, 'DEC');
console.log(sortedProducts);

searchString = 'or';
const filteredProducts = products.filter((product) => product.name.indexOf(searchString) !== -1);
console.log(filteredProducts);