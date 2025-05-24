const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const numbers = [];
let result = 0;

for (let i = 1; numbers.length < B; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers.length === B) break;

    numbers.push(i);
  }
}

for (let i = A - 1; i < B; i++) result += numbers[i];

console.log(result);
