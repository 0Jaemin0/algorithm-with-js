const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const dp = Array.from({ length: n + 1 }, () => 0);
const result = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 1; i < input.length; i++) {
  result.push(dp[input[i]]);
}

console.log(result.join('\n'));
