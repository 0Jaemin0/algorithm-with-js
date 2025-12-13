const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const count = +input[0];
const stairs = input.slice(1).map(Number);
const dp = Array.from({ length: count }, () => 0);

dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];
dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

for (let i = 3; i < count; i++) {
  dp[i] = Math.max(dp[i - 3] + stairs[i - 1], dp[i - 2]) + stairs[i];
}

console.log(dp[count - 1]);
