// Vergelijkingsoperatoren (En. comparison operators)
let x = y = z = 0;
x = 3;
y = 6;
z = 2;
let v;
v = x > y; // false
console.log(v);
v = z < x; // true
v = x == y; // false
v = z >= 2; // true
v = y <= 4; // false
v = z != x; // true
z = '3';
v = x != z;
console.log(v);
v = x !== z;
console.log(v);
v = y === '6';
console.log(v);

// Logische operatoren (En. logical operators)
// AND => &&, OR => ||, NOT => !
x = true;
y = false;
/*
AND
true AND true => true
true AND false => false
false AND false => false
*/
v = x && y; // false
/*
OR
true OR true => true
true OR false => true
false OR false => false
*/
v = x || y; // true
v = !x; // false
// Combinatie van meer dan twee condities
v = x && !y && x === 3;

let isGameOver = true;
if (isGameOver) {
  // B
  console.log('You can start a new game!');
} else {
  // C
  console.log(`You are playing now :)`);
}

let isALady = false;
if (!isALady) {
  console.log('I am a nice guy.');
} else {
  console.log('I am a very nice barbie girl.');
}
let msg = isALady ? 'I am a very nice barbie girl.' : 'I am a nice guy.';
console.log(msg);

// Toets toegangscode: b4x3b

let gender;
gender = 1;
if (gender == 0) {
  msg = 'Gender is not know!';
} else if (gender == 1) {
  msg = 'Your are a male!';
} else if (gender == 2) {
  msg = 'You are a female!';
} else {
  msg = 'Gender is not specified';
}
console.log(msg);

// Switch / Case
gender = 9;
switch (gender) {
  case 0: msg = 'Gender is not know!'; break;
  case 1: msg = 'Your are a male!'; break;
  case 2: msg = 'You are a female!'; break;
  default: msg = 'Gender is not specified!'; break;
}
console.log(msg);