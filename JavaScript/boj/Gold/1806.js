const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
let leftIdx = 0;
let rightIdx = 0;
let min = 100001;
let sum = numbers[0];

while (rightIdx < N) {
  if (sum < S) sum += numbers[++rightIdx];
  else {
    min = Math.min(min, rightIdx - leftIdx + 1);
    sum -= numbers[leftIdx++];
  }
}

console.log(min === 100001 ? 0 : min);
