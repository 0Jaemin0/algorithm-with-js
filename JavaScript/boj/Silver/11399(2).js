const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const times = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += times[i];
  result += sum;
}

console.log(result);
