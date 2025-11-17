const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = +input[0];
const C = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);
let result = 0;

for (let i = 0; i < N; i++) {
  if ((i + 1) % 3 !== 0) result += C[i];
}

console.log(result);
