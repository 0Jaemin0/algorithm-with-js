const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = +input[2];
const numbers = input[3].split(' ').map(Number);
const result = new Array(M).fill(0);

for (let i = 0; i < M; i++) {
  const find = numbers[i];
  let left = 0;
  let right = N - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (cards[mid] === find) break;
    else if (cards[mid] > find) right = mid - 1;
    else left = mid + 1;
  }

  result[i] = left <= right ? 1 : 0;
}

console.log(result.join(' '));
