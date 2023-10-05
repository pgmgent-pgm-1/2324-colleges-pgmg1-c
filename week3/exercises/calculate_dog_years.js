function calculateDogYears(dogInHumanYears) {
  return dogInHumanYears * 7;
}

function calculateHumanYears(dogInDogYears) {
  return dogInDogYears / 7;
}

let dogInDogYears = calculateDogYears(15);
let output = `Your dog is ${dogInDogYears} years old in dog years!`;
console.log(output);
dogInDogYears = calculateDogYears(24);
output = `Your dog is ${dogInDogYears} years old in dog years!`;
console.log(output);

let dogInHumanYears = calculateHumanYears(104);
output = `Your dog is ${dogInHumanYears} years old in human years!`;
console.log(output);