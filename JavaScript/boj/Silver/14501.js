const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const counsels = [];
const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) counsels.push(input[i].split(' ').map(Number));

for (let i = 0; i < N; i++) {
  const [T, P] = counsels[i];

  for (let j = i + T; j <= N; j++) dp[j] = Math.max(dp[j], dp[i] + P);
}

console.log(Math.max(...dp));
