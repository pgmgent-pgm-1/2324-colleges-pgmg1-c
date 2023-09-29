const year = 1977;
let isLeapYear = false;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
  } else {
    isLeapYear = true;
  }
} else {
  isLeapYear = false;
}
console.log(`The year ${year} is ${isLeapYear}`);