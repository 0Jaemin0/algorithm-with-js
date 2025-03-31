const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, r, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let count = 0;

const divide = (row, col, size) => {
  if (row === r && col === c) {
    console.log(count);
    return;
  }

  if (r >= row && r < row + size && c >= col && c < col + size) {
    const divideSize = size / 2;

    divide(row, col, divideSize);
    divide(row, col + divideSize, divideSize);
    divide(row + divideSize, col, divideSize);
    divide(row + divideSize, col + divideSize, divideSize);
  } else count += size * size;
};

divide(0, 0, Math.pow(2, N));
