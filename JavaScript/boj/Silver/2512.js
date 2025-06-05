const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const budget = input[1].split(' ').map(Number);
const M = +input[2];

let left = 0;
let right = Math.max(...budget);
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const total = budget.reduce((acc, cur) => acc + Math.min(cur, mid), 0);

  if (total <= M) {
    result = mid;
    left = mid + 1;
  } else right = mid - 1;
}

console.log(result);
