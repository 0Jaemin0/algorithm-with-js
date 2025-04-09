const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const numbers = [];
const result = [];

const dfs = (depth, start) => {
  if (depth === M) {
    result.push(numbers.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    numbers.push(i);
    dfs(depth + 1, i);
    numbers.pop();
  }
};

dfs(0, 1);
console.log(result.join('\n'));
