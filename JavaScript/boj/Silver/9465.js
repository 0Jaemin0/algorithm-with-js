const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const result = [];

for (let i = 0; i < T; i++) {
  const n = +input[i * 3 + 1];
  const sticker = [
    input[i * 3 + 2].split(' ').map(Number),
    input[i * 3 + 3].split(' ').map(Number),
  ];
  const dp = Array.from({ length: 2 }, () => new Array(n + 1));

  dp[0][0] = 0;
  dp[1][0] = 0;
  dp[0][1] = sticker[0][0];
  dp[1][1] = sticker[1][0];

  for (let j = 2; j <= n; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + sticker[0][j - 1];
    dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + sticker[1][j - 1];
  }

  result.push(Math.max(dp[0][n], dp[1][n]));
}

console.log(result.join('\n'));
