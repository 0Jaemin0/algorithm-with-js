const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('').map(Number);

const count = new Array(10).fill(0);
let max = -Infinity;

for (let i = 0; i < input.length; i++) count[input[i]] += 1;

count[9] = count[6] = Math.ceil((count[6] + count[9]) / 2);

for (let i = 0; i < count.length; i++) {
  max = Math.max(max, count[i]);
}

console.log(max);
