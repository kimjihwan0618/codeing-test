const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const newline = process.platform == 'linux' ? '\n' : '\r\n';

let inputs = fs.readFileSync(filePath).toString().trim().split(newline);
const fullSquare = []
for (let x = 1; x <= 100; x++) {
  fullSquare.push([])
  for (let y = 1; y <= 100; y++) {
    fullSquare[x - 1].push([x, y, false])
  }
}

for (let i = 1; i < inputs.length; i++) {
  const currentSquare = inputs[i].split(" ").map(Number);
  const squareX = Number(currentSquare[0]);
  const squareY = Number(currentSquare[1]);
  for (let x = squareX; x < squareX + 10; x++) {
    for (let y = squareY; y < squareY + 10; y++) {
      fullSquare[x - 1][y - 1][2] = true;
    }
  }
}

let cnt = 0;

fullSquare.forEach((x, xIdx) => {
  fullSquare[xIdx].forEach(cell => {
    cell[2] ? cnt += 1 : "";
  })
})

console.log(cnt)