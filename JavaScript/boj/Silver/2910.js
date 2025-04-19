const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const count = new Map();
const result = [];

for (let i = 0; i < N; i++) {
  if (count.has(numbers[i])) count.set(numbers[i], count.get(numbers[i]) + 1);
  else count.set(numbers[i], 1);
}

const sortedCount = [...count.entries()].sort((a, b) => b[1] - a[1]);

sortedCount.forEach(([n, c]) => {
  for (let i = 0; i < c; i++) result.push(n);
});

console.log(result.join(' '));
