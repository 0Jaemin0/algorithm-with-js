const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(filePath).toString().trim().split(' ');

const numbers = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

while (numbers.length) {
  for (let i = 0; i < K - 1; i++) numbers.push(numbers.shift());

  result.push(numbers.shift());
}

console.log(`<${result.join(', ')}>`);
