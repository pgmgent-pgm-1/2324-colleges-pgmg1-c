function calculateDogYears(dogInHumanYears) {
  return dogInHumanYears * 7;
}
let dogInDogYears = calculateDogYears(15);
let output = `Your dog is ${dogInDogYears} years old in dog years!`;
console.log(output);
dogInDogYears = calculateDogYears(24);
output = `Your dog is ${dogInDogYears} years old in dog years!`;
console.log(output);