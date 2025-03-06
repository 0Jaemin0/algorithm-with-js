const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const count = new Array(10).fill(0);
const result = input.reduce((mul, num) => (mul *= num)).toString();

for (let i = 0; i < result.length; i++) {
  count[result[i]] += 1;
}

console.log(count.join('\n'));
