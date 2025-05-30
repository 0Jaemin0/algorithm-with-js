const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = +input[2];
const numbers = input[3].split(' ').map(Number);
const result = [];

const findNumber = (number) => {
  let start = 0;
  let end = N - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (A[mid] === number) return 1;
    else if (A[mid] > number) end = mid - 1;
    else start = mid + 1;
  }

  return 0;
};

for (let i = 0; i < M; i++) result.push(findNumber(numbers[i]));

console.log(result.join('\n'));
