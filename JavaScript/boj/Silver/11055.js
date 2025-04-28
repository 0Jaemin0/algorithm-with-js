const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const dp = new Array(N).fill(0);

dp[0] = numbers[0];

const findIndex = (numbers, i) => {
  let max = -Infinity;
  let index = -1;

  for (let j = i - 1; j > -1; j--) {
    if (numbers[j] < numbers[i] && max < dp[j]) {
      max = dp[j];
      index = j;
    }
  }

  return index === -1 ? i : index;
};

for (let i = 1; i < N; i++) {
  const index = findIndex(numbers, i);
  dp[i] = dp[index] + numbers[i];
}

console.log(Math.max(...dp));
