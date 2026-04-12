const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const k = +input[1];
let left = 1;
let right = k;
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    count += Math.min(Math.floor(mid / i), N);
  }

  if (count >= k) {
    right = mid - 1;
    result = mid;
  } else left = mid + 1;
}

console.log(result);
