const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
let result = 0;

const dfs = (count, sum) => {
  if (count === N) return;

  const now = sum + numbers[count];

  if (now === S) result++;

  dfs(count + 1, now);
  dfs(count + 1, sum);
};

dfs(0, 0);
console.log(result);
