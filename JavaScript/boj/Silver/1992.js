const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const map = [];
const result = [];

for (let i = 0; i < N; i++) map[i] = input[i].split('').map(Number);

const isSame = (row, col, size) => {
  const start = map[row][col];

  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (start !== map[i][j]) return false;
    }
  }

  return true;
};

const divide = (row, col, size) => {
  if (!isSame(row, col, size)) {
    const divideSize = size / 2;

    result.push('(');
    divide(row, col, divideSize);
    divide(row, col + divideSize, divideSize);
    divide(row + divideSize, col, divideSize);
    divide(row + divideSize, col + divideSize, divideSize);
    result.push(')');
  } else result.push(map[row][col]);
};

divide(0, 0, N);
console.log(result.join(''));
