const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;

let [num, divider] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((item) => Number(item));

let ans = num.toString(divider).toUpperCase();

console.log(ans);
