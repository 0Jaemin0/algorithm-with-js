const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = +input;
const dp = new Array(n + 1).fill(0);

for (let i = 1; i < n + 1; i++) {
  if (i === 1) dp[i] = 1;
  else if (i === 2) dp[i] = 2;
  else dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[n]);
