const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const line = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let waitTime = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  result += waitTime + line[i];
  waitTime += line[i];
}

console.log(result);
