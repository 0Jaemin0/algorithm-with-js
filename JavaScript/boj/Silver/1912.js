const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const numbers = input[1].split(' ').map(Number);

for (let i = 1; i < n; i++) {
  if (numbers[i - 1] > 0) numbers[i] += numbers[i - 1];
}

console.log(Math.max(...numbers));
