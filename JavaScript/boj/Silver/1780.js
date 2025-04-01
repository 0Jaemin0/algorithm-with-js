const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const paper = [];
const result = [0, 0, 0];

for (let i = 0; i < N; i++) paper[i] = input[i].split(' ').map(Number);

const isSamePaper = (row, col, size) => {
  const start = paper[row][col];

  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (start !== paper[i][j]) return false;
    }
  }

  return true;
};

const divide = (row, col, size) => {
  if (!isSamePaper(row, col, size)) {
    const divideSize = size / 3;

    divide(row, col, divideSize);
    divide(row, col + divideSize, divideSize);
    divide(row, col + 2 * divideSize, divideSize);
    divide(row + divideSize, col, divideSize);
    divide(row + divideSize, col + divideSize, divideSize);
    divide(row + divideSize, col + 2 * divideSize, divideSize);
    divide(row + 2 * divideSize, col, divideSize);
    divide(row + 2 * divideSize, col + divideSize, divideSize);
    divide(row + 2 * divideSize, col + 2 * divideSize, divideSize);
  } else result[paper[row][col] + 1] += 1;
};

divide(0, 0, N);
console.log(result.join('\n'));
