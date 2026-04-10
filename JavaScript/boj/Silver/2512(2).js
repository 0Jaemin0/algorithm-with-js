const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const money = input[1].split(' ').map(Number);
const M = +input[2];
let left = 0;
let right = Math.max(...money);
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (money[i] > mid) sum += mid;
    else sum += money[i];
  }

  if (sum > M) right = mid - 1;
  else {
    left = mid + 1;
    result = mid;
  }
}

console.log(result);
