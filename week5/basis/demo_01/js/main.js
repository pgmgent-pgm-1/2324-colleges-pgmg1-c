console.log('Greetings Earthlings, I\'m a lizzard!');

// Select the element with id lineup
const $lineupElement = document.getElementById('lineup');
console.log($lineupElement);

// Get the inner text from the selected element (node)
const txt = $lineupElement.innerText;
console.log(txt);

// Select the element with class name message
const $msgElement = document.getElementsByClassName('message');
console.log($msgElement[0]);

// Select the elements with class name bit
const $bitElements = document.getElementsByClassName('bit');
console.log($bitElements);

// Loop through the elements
for (let i = 0; i < $bitElements.length; i++) {
  console.log($bitElements[i]);
}

for (let $elem of $bitElements) {
  console.log($elem);
}

// const htmlStr = $bitElements.array.map(($elem) => `<li>${$elem.innerText}</li>`);
// console.log(htmlStr);

// Select the element with class name message via a new function
const $messageElement = document.querySelector('.message');
console.log($messageElement);

// Select the elements with class name bit with a new function
const $bitsElements = document.querySelectorAll('.bit');
console.log($bitsElements);

$bitsElements.forEach(($elem, i) => {
  console.log(`The element on index ${i} is ${$elem}`);
});

// const htmlStr = $bitsElements.values().map(($elem) => {
//   return `<li>SLA</li>`;
// });
// console.log(htmlStr);

// Select the DOM element with class name content
const $contentElement = document.querySelector('.content');
$contentElement.innerText = 'Hello ready to party in the binary world of warcraft!'
$contentElement.innerHTML = `
  <h1>Party time</h1>
  <blockquote>Hello ready to party in the binary world of warcraft!</blockquote>
  <p>Am i a sinner, 'cause half my dinner is still on my plate? and i'm in pieces, baby fix me and love's bigger, and we'll sit while we be eating baby, baby, baby ooh driving the benz and kissing mercedes i can show you what i'm talking about i can't see the light i never should've let you go if it ain't you, i ain't myself in love just let my money be patient oh your love is in my hands on your body in this club or we can share mine pop-pops is lurking, told her "don't get nervous" slow dance in the moonlight, think of how good it could be girl when i was 13, i had my first love.</p>
`;

// Select the element with the class name rows
const $rowsElement = document.querySelector('.rows');
console.log($rowsElement);
let tmpStr = '';
for (let i = 0; i < 10000; i++) {
  tmpStr += `<div class="row"></div>`;
}
$rowsElement.innerHTML = tmpStr;