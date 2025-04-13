const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const result = [];
const sequence = [];

const dfs = (depth, start) => {
  if (depth === M) {
    result.push(sequence.join(' '));
    return;
  }

  for (let i = start; i < N; i++) {
    sequence.push(numbers[i]);
    dfs(depth + 1, i);
    sequence.pop();
  }
};

dfs(0, 0);
console.log([...new Set(result)].join('\n'));
