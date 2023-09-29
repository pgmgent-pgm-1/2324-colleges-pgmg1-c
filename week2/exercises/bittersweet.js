// 1. Maak een lust tussen 1 en n
const n = 15;
let content = '';
for (let i = 1; i < n; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      // Bittersweet
      content += 'Bittersweet';
    } else {
      // Bitter
      content += 'Bitter';
    }
  } else if (i % 5 === 0) {
    // Sweet
    content += 'Sweet';
  } else {
    // i
    content += i;
  }
  content += '\n';
}
console.log(content);