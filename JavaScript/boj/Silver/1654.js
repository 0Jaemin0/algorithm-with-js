const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const lans = input
  .slice(1, K + 1)
  .map(Number)
  .sort((a, b) => a - b);
let start = 1;
let end = lans[K - 1];
let max = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let i = 0; i < K; i++) sum += Math.floor(lans[i] / mid);

  if (sum < N) end = mid - 1;
  else {
    max = mid;
    start = mid + 1;
  }
}

console.log(max);
