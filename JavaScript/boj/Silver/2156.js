const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const wines = input.map(Number);
const dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i <= n; i++) {
  if (i === 1) dp[1] = wines[1];
  else if (i === 2) dp[2] = wines[1] + wines[2];
  else
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + wines[i],
      dp[i - 3] + wines[i - 1] + wines[i]
    );
}

console.log(Math.max(...dp));
