const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const result = [];
let idx = 1;

for (let i = 0; i < T; i++) {
  const N = +input[idx++];
  const coins = input[idx++].split(' ').map(Number);
  const M = +input[idx++];
  const dp = Array.from({ length: M + 1 }, (_, i) => (i === 0 ? 1 : 0));

  for (const coin of coins) {
    for (let j = coin; j <= M; j++) {
      dp[j] += dp[j - coin];
    }
  }

  result.push(dp[M]);
}

console.log(result.join('\n'));
