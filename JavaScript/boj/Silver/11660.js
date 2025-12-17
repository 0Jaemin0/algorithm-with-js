const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input
  .slice(1, N + 1)
  .map((line) => line.split(' ').map(Number));
const points = input.slice(1 + N).map((line) => line.split(' ').map(Number));
const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const result = [];

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + numbers[i - 1][j - 1];
  }
}

for (let i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = points[i];

  result.push(
    dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]
  );
}

console.log(result.join('\n'));
