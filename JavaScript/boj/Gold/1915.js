const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const square = [];
const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
let result = 0;

for (let i = 1; i <= n; i++) square.push(input[i].split('').map(Number));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (square[i - 1][j - 1] === 1) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      result = Math.max(result, dp[i][j]);
    }
  }
}

console.log(result ** 2);
