// // 로컬 환경과 제출 환경 구분
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const newline = process.platform == 'linux' ? '\n' : '\r\n';
// // .txt 파일 파싱 
let inputs = fs.readFileSync(filePath).toString().trim().split(newline);

// 문제풀이
let size = inputs.length;
let sum = 0;
let masjorCalcSum = 0;

const subjectRating = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
}

inputs.forEach(subject => {
  const obj = subject.split(" ");
  if (!obj[2].includes("P")) {
    sum += Number(obj[1]);
  } else {
    size -= 1;
  }
})

inputs.forEach(subject => {
  const obj = subject.split(" ");
  if (!obj[2].includes("P")) {
    masjorCalcSum += (Number(obj[1]) * subjectRating[obj[2]])
  }
})

console.log((masjorCalcSum / sum).toFixed(6))