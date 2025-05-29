const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const snacks = input[1].split(' ').map(Number);
let left = 1;
let right = Math.max(...snacks);
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 0; i < N; i++) {
    count += Math.floor(snacks[i] / mid);
  }

  if (count < M) right = mid - 1;
  else {
    left = mid + 1;
    result = mid;
  }
}

console.log(result);
