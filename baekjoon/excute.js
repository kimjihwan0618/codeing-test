const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
let n = Number(fs.readFileSync(filePath).toString());

let count = 1;
let sum = 1;
while (sum < n) {
  sum += 6 * count;
  count++;
}

console.log(count);
