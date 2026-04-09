const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);
let max = 0;
let left = 1;
let right = Math.max(...trees);

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (trees[i] - mid > 0) sum += trees[i] - mid;
  }

  if (sum >= M) {
    left = mid + 1;
    max = Math.max(max, mid);
  } else right = mid - 1;
}

console.log(max);
