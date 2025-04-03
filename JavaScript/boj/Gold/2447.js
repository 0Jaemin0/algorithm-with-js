const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

const star = (row, col, size) => {
  if (row % 3 === 1 && col % 3 === 1) result.push(' ');
  else if (size === 1) result.push('*');
  else star(parseInt(row / 3), parseInt(col / 3), size / 3);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) star(i, j, N);
  result.push('\n');
}

console.log(result.join(''));
