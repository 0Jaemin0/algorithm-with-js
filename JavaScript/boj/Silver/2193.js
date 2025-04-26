const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const N = +input;
const dp = Array.from({ length: N + 1 }, () => [0, 0]);
dp[1] = [0, 1];

for (let i = 2; i < N + 1; i++) {
  const [endZero, endOne] = dp[i - 1];

  dp[i][0] = BigInt(endZero + endOne);
  dp[i][1] = BigInt(endZero);
}

console.log(String(dp[N][0] + dp[N][1]));
