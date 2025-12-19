const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const dp = Array.from({ length: K + 1 }, () => 0);
const items = input.slice(1).map((line) => line.split(' ').map(Number));

for (let i = 0; i < N; i++) {
  const [W, V] = items[i];

  for (let j = K; j >= W; j--) {
    dp[j] = Math.max(dp[j], dp[j - W] + V);
  }
}

console.log(dp[K]);
