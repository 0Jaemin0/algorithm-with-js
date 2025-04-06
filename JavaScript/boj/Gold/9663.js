const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

const queen = [];
let result = 0;

const isPossible = (row, col) => {
  for (let i = 0; i < queen.length; i++) {
    const [x, y] = queen[i];

    if (row === x || col === y || Math.abs(row - x) === Math.abs(col - y)) {
      return false;
    }
  }

  return true;
};

const dfs = (row) => {
  if (row === N) {
    result++;
    return;
  }

  for (let col = 0; col < N; col++) {
    if (!isPossible(row, col)) continue;

    queen.push([row, col]);
    dfs(row + 1);
    queen.pop();
  }
};

dfs(0);
console.log(result);
