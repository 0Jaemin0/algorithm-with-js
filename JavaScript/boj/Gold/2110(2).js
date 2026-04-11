const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const house = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
let left = 1;
let right = house[N - 1];
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 1;
  let start = house[0];

  for (let i = 1; i < N; i++) {
    if (house[i] - start >= mid) {
      count++;
      start = house[i];
    }
  }

  if (count >= C) {
    left = mid + 1;
    result = Math.max(result, mid);
  } else right = mid - 1;
}

console.log(result);
