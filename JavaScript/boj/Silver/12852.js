const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input;
const dp = new Array(N + 1).fill(0);
const result = [];
let count = 0;

dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < N + 1; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 6 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1, dp[i / 3] + 1);
  else if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  else if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

count = dp[N];

while (N !== 1) {
  result.push(N);

  if (N % 6 === 0) {
    min = Math.min(dp[N / 3], dp[N / 2], dp[N - 1]);
    if (min === dp[N / 3]) N /= 3;
    else if (min === dp[N / 2]) N /= 2;
    else N -= 1;
  } else if (N % 3 === 0) {
    min = Math.min(dp[N / 3], dp[N - 1]);
    if (min === dp[N / 3]) N /= 3;
    else N -= 1;
  } else if (N % 2 === 0) {
    min = Math.min(dp[N / 2], dp[N - 1]);
    if (min === dp[N / 2]) N /= 2;
    else N -= 1;
  } else N -= 1;
}

result.push(1);
console.log(count);
console.log(result.join(' '));
