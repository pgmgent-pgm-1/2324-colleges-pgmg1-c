// Array of words
const tags = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'MySQL',
  'PostgreSQL',
  'TypeScript',
  'CMS',
  'API',
  'GraphQL',
];

// Select the element with class name tagcloud
const $tagcloudElement = document.querySelector('.tagcloud');
console.log($tagcloudElement);

const htmlStr = tags.map((tag) => `<div class="tag" style="transform:translate(${Math.random()*400}px,${Math.random()*400}px);font-size:${tag.length}rem;color:rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})">${tag}</div>`).join('');
$tagcloudElement.innerHTML = htmlStr;

// Change the background color of the body
document.body.style.backgroundColor = `rgb(255, 255, 0)`;

// Timebased function
setInterval(() => {
  $tagcloudElement.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
}, 60000);

// Select the element with class name bigtypo
const $bigtypoElement = document.querySelector('.bigtypo');
console.log($bigtypoElement);
let fs = 1;
setInterval(() => {
  $bigtypoElement.style.fontSize = `${fs}rem`;
  if (fs + 0.01 < 10) {
    fs += 0.01;
  } else {
    fs -= 0.01;
  }
}, 5);