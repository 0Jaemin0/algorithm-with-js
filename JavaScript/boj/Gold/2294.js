const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);
const dp = Array.from({ length: k + 1 }, () => 10001);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  }
}

console.log(dp[k] === 10001 ? -1 : dp[k]);
