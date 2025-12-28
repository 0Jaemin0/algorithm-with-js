const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const dp = Array.from({ length: N + 1 }, () =>
  new Array(M + 1).fill(-Infinity)
);
const sum = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  const number = +input[i];

  sum[i] = sum[i - 1] + number;
}

dp[1][1] = sum[1];

for (let i = 2; i <= N; i++) {
  dp[i][1] = dp[i - 1][1];

  for (let j = 0; j < i; j++) {
    dp[i][1] = Math.max(dp[i][1], sum[i] - sum[j]);
  }
}

for (let i = 3; i <= N; i++) {
  for (let j = 2; j <= M; j++) {
    dp[i][j] = dp[i - 1][j];

    for (let k = 1; k <= i - 2; k++) {
      dp[i][j] = Math.max(dp[i][j], dp[k][j - 1] + sum[i] - sum[k + 1]);
    }
  }
}

console.log(dp[N][M]);
