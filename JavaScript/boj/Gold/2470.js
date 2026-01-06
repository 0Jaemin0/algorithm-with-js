const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
let result = [];
let leftIdx = 0;
let rightIdx = N - 1;
let min = Infinity;

numbers.sort((a, b) => a - b);

while (leftIdx < rightIdx) {
  const sum = numbers[leftIdx] + numbers[rightIdx];

  if (min > Math.abs(sum)) {
    min = Math.abs(sum);
    result = [numbers[leftIdx], numbers[rightIdx]];
  }

  if (sum === 0) break;
  else if (sum > 0) rightIdx--;
  else leftIdx++;
}

console.log(result.join(' '));
