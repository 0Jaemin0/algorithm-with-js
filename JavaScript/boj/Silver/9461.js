const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const dp = new Array(101).fill(0);
const result = [];

for (let i = 1; i <= T; i++) {
  const N = +input[i];

  for (let j = 1; j <= N; j++) {
    if (j === 1 || j === 2 || j === 3) dp[j] = 1;
    else if (j === 4 || j === 5) dp[j] = 2;
    else dp[j] = dp[j - 1] + dp[j - 5];
  }

  result.push(dp[N]);
}

console.log(result.join('\n'));
