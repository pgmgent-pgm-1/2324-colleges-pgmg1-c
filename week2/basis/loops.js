/*
Programming 1: Essentials
Week: 2
Date: 27-09-2023
==========================
Loops
*/

// Na iedere lus (= iteratie) waarde van de variabele i met 1 verhogen
for (let i = 0; i < 1000; i++) {
  console.log(`The value of i is ${i}`);
}

// Na iedere lus of iteratie de waarde van j met 1 verminderen
for (let j = 1000; j >= 1; j--) {
  console.log(`The value of j is ${j}`);
}

// Na iedere lus of iteratie de waarde van k vermenigvuldigen met twee
for (let k = 2; k <= 16; k *= 2) {
  console.log(`The value of k is ${k}`);
}

// Lus in en lus (En. Nested loops)
/*
Generate a grid of stars

****
****
****
*/
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 4; col++) {
    console.log(`The row is ${row} and the col is ${col}`);
  }
}

let output = '', nRows = 8, nCols = 6, ch = '🚀';
for (let row = 0; row < nRows; row++) {
  for (let col = 0; col < nCols; col++) {
    output += ch;
  }
  output += row < (nRows - 1) ? '\n' : '';
}
console.log(output);

// while loop
let isGamePlaying = true, nMoves = 0;
while (isGamePlaying === true) {
  console.log('PLAYING');
  if (nMoves + 1 < 1000) {
    nMoves++;
  } else {
    isGamePlaying = false;
  }
}