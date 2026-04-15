const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const column = new Array(N).fill(false);
const leftDiagonal = new Array(2 * N).fill(false);
const rightDiagonal = new Array(2 * N).fill(false);
let result = 0;

const backtrack = (row) => {
  if (row === N) {
    result++;

    return;
  }

  for (let col = 0; col < N; col++) {
    if (column[col] || leftDiagonal[row + col] || rightDiagonal[row - col + N])
      continue;

    column[col] = true;
    leftDiagonal[row + col] = true;
    rightDiagonal[row - col + N] = true;

    backtrack(row + 1);

    column[col] = false;
    leftDiagonal[row + col] = false;
    rightDiagonal[row - col + N] = false;
  }
};

backtrack(0, []);

console.log(result);
