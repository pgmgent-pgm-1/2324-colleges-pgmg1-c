/*
Programming 1: Essentials
Week: 2
Les: 2
Date: 28-09-2023
=========================
Functions
*/
// Definieert een zeer eenvoudige functie met de naam sayHello met als doel "hello world" te schrijven naar de output console
function sayHello() {
  console.log('Hello World 👾');
}
// Spreek de functie sayHello aan
sayHello();
sayHello();
sayHello();
sayHello();

// Definieert een eenvoudige function met de naam showMessage met als doel een specifieke boodschap te schrijven naar de output console
function showMessage(message) {
  console.log(`Your message is ${message}`);
}
//Spreek de functie showMessage aan
showMessage('Greetings Earthlings');
showMessage('I love Judo');
showMessage('I love Techno');
showMessage('I love Biefstuk');

// Definieert een functie met de naam addition met als doel de som te maken van twee getallen, schrijf de som naar de output console
function addition(a, b) {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}.`);
}
// Spreek de function addition aan
addition(2, -4);
addition(-8, 6);
addition(3, '4');
addition('5', 4);

// Definieert een function met de naam generateMatrix waar we het aantal rijen en kolommen kunnen meegeven en print in de output console
function generateMatrix(nCols, nRows) {
  let m = '';
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      m += '*';
    }
    m += (r < nRows - 1) ? '\n' : '';
  }
  console.log(m);
}
// Spreek de function generateMatrix aan
generateMatrix(4, 3);
generateMatrix(8, 10);
generateMatrix(16, 16);