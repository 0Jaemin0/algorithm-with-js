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

const dfs = (depth) => {
  if (depth === M) {
    result.push(sequence.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    sequence.push(numbers[i]);
    dfs(depth + 1);
    sequence.pop();
  }
};

dfs(0);
console.log(result.join('\n'));
