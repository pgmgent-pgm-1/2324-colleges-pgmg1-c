// Declare the sayHello function
function sayHello (msg) {
  return `You say ${msg}`;
}

// Variables
let output = '';
// Call the function in order to execute it
output = sayHello();
console.log(output);
output = sayHello('Yo Bro');
console.log(output);

// Function expressions
const sh = function (msg) {
  return `You say ${msg}`;
};
output = sh('I\'m Borg');
console.log(output);

// Arrow function
const showMessage = (msg) => `You say ${msg}`;
output = showMessage('The House of House');
console.log(output);

// Define a pow function
const pow = (x, n) => {
  return x ** n;
};
let v = pow(2, 2);
console.log(v);
const powSmall = (x, n) => x ** n;
v = powSmall(2, 2);
console.log(v);

// I Like colors
const colors = [
  '#4d81bc',
  '#b93f3f',
  '#000000',
  '#FFFFFF',
  '#2FC62F',
];

output = '';
colors.forEach((color, index) => output += `\nThe color on index ${index} is ${color}`);
console.log(output);

// Cars
const cars = [
  {
    'color': '#22FF11',
    'brand': 'Polestar 2',
    'gears': 8,
    'wheels': 3,
  },
  {
    'color': '#991111',
    'brand': 'Fiat',
    'gears': 2,
    'wheels': 4,
  },
  {
    'color': '#665443',
    'brand': 'Lada',
    'gears': 1,
    'wheels': 40,
  }
];

function generateStringForCars (cars) {
  let output = '';
  cars.forEach((car, index) => {
    output += `Car ${ index + 1 }: ${ car.brand }, ${ car.gears} gears, ${ car.wheels} wheels\n`;
    output += `...................................................................\n`
  });
  return output;
}

const genStringForCars = (cars) => {
  return cars.map((car, index) => `Car ${ index + 1 }: ${ car.brand }, ${ car.gears} gears, ${ car.wheels} wheels\n`).join('...................................................................\n');
}

output = `
===================================================================
| CARS                                                            |
===================================================================
${genStringForCars(cars)}
`;
console.log(output);

// Scope of a function