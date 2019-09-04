const fs = require('fs');
// console.time('santa');
// const file = fs.readFileSync('./input.txt');
// const text = file.toString();
// let ct = 0;
// for (let i = 0; i < text.length; i++) {
//   if (text[i] === '(') {
//     ct++;
//   } else if (text[i] === ')') {
//     ct--;
//   }
// }
// console.timeEnd('santa');
// console.log(ct);

fs.readFile('./input.txt', (err, data) => {
  console.time('santa2');
  const directions = data.toString();
  const directionsArray = directions.split('');
  const ans = directionsArray.reduce((acc, cur) => {
    if (cur === '(') {
      return acc + 1;
    } else if (cur === ')') {
      return acc - 1;
    }
  }, 0);
  console.timeEnd('santa2');
  console.log(ans);
})