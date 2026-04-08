const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const len = input.slice(1).map(Number);
let result = 0;
let left = 0;
let right = Math.max(...len);

while (left <= right) {
  let count = 0;
  mid = Math.floor((left + right) / 2);

  for (let i = 0; i < K; i++) count += Math.floor(len[i] / mid);

  if (count >= N) {
    result = Math.max(result, mid);

    left = mid + 1;
  } else right = mid - 1;
}

console.log(result);
