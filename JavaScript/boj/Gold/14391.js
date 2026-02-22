const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const paper = [];
let result = 0;

for (let i = 1; i <= N; i++) paper.push(input[i].split('').map(Number));

for (let i = 0; i < 1 << (N * M); i++) {
  let sum = 0;

  for (let j = 0; j < N; j++) {
    let rowSum = 0;

    for (let k = 0; k < M; k++) {
      if (i & (1 << (M * j + k))) {
        sum += rowSum;
        rowSum = 0;
      } else rowSum = rowSum * 10 + paper[j][k];
    }

    sum += rowSum;
  }

  for (let j = 0; j < M; j++) {
    let colSum = 0;

    for (let k = 0; k < N; k++) {
      if (i & (1 << (M * k + j))) colSum = colSum * 10 + paper[k][j];
      else {
        sum += colSum;
        colSum = 0;
      }
    }

    sum += colSum;
  }

  result = Math.max(result, sum);
}

console.log(result);
