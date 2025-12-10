const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const dp = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  let max = 0;
  let index = -1;

  for (let j = 0; j < i; j++) {
    if (numbers[j] < numbers[i] && max < dp[j]) {
      max = dp[j];
      index = j;
    }
  }

  if (index != -1) dp[i] = dp[index] + 1;
}

console.log(Math.max(...dp));
