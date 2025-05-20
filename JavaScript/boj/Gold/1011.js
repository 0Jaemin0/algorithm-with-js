const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const result = [];

for (let i = 1; i <= T; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  const distance = end - start;
  const sqrt = Math.floor(Math.sqrt(distance));

  if (sqrt * sqrt === distance) result.push(2 * sqrt - 1);
  else if (distance > sqrt * sqrt + sqrt) result.push(2 * sqrt + 1);
  else result.push(2 * sqrt);
}

console.log(result.join('\n'));
