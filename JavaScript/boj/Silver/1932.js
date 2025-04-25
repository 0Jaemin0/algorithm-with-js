const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const triangle = [];
let h = +n;
let count = 0;

for (let i = 0; i < n; i++) {
  const line = input[i].split(' ').map(Number);

  for (let j = 0; j < line.length; j++) triangle.push(line[j]);
}

for (let i = triangle.length - n - 1; i >= 0; i--) {
  if (count === h - 1) {
    h -= 1;
    count = 0;
  }

  triangle[i] += Math.max(triangle[i + h - 1], triangle[i + h]);
  count += 1;
}

console.log(triangle[0]);
