const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const count = +input[0];
const stairs = [0, ...input.slice(1)];
const dp = new Array(count + 1).fill(0);

for (let i = 1; i <= count; i++) {
  if (i === 1) dp[i] = stairs[i];
  else if (i === 2) dp[i] = stairs[i - 1] + stairs[i];
  else if (i === 3) dp[i] = Math.max(stairs[i - 1], stairs[i - 2]) + stairs[i];
  else dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]) + stairs[i];
}

console.log(dp[count]);
