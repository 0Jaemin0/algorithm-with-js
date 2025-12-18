const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const counsels = input.map((line) => line.split(' ').map(Number));
const dp = Array.from({ length: N + 2 }, () => 0);

for (let i = 1; i <= N; i++) {
  const [T, P] = counsels[i];

  dp[i] = Math.max(dp[i], dp[i - 1]);
  if (i + T <= N + 1) dp[i + T] = Math.max(dp[i + T], dp[i] + P);
}

console.log(Math.max(...dp));
