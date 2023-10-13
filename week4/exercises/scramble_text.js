let txt = 'website';
let scrambledTxt = '';
while (txt.length > 0) {
  const i = Math.floor(Math.random() * txt.length);
  scrambledTxt += txt.charAt(i);
  txt = txt.substring(0, i) + txt.substring(i + 1)
}
console.log(scrambledTxt);

let txtArr = 'website'.split('');
scrambledTxt = '';
while (txtArr.length > 0) {
  scrambledTxt += txtArr.splice(Math.random() * txtArr.length, 1);
}
console.log(scrambledTxt);