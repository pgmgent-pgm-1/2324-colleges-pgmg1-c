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
function generateMatrix(nCols, nRows, ch) {
  let m = '';
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      m += ch;
    }
    m += (r < nRows - 1) ? '\n' : '';
  }
  console.log(m);
}
// Spreek de function generateMatrix aan
generateMatrix(4, 3, '*');
generateMatrix(8, 10, 'P');
generateMatrix(16, 16, '💓');
generateMatrix(32, 32, '🥋');

// Definieert een functie met de naam multiply met als doel twee getallen met elkaar te vermenigvuldigen en print naar de output console
function multiply (a, b) {
  const result = a * b;
  console.log(`The multiplication of ${a} and ${b} is ${result}.`)
}
// Spreek de function multiply aan
multiply(3, -4);
multiply(-3, -6);
multiply(-3, 9);

// Functies die iets teruggeven (En. return) aan de aanvrager
function getBioOfPerson (fullName, age, gender, salary) {
  let content = '';
  content = `
  Name: ${fullName}
  ====================================
  Age: ${age}
  Gender: ${gender}
  Salary: ${salary}

  `;
  return content;
}
let bio = getBioOfPerson('Philippe Collins', 32, 'Male', 5800);
console.log(bio);
bio = getBioOfPerson('Benoit De Wilde', 64, 'In de war', 10598);
console.log(bio);