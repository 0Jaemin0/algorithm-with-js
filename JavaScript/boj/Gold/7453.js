const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const A = [];
const B = [];
const C = [];
const D = [];
const map = new Map();
let count = 0;

for (let i = 0; i < N; i++) {
  const list = input[i].split(' ').map(Number);

  A.push(list[0]);
  B.push(list[1]);
  C.push(list[2]);
  D.push(list[3]);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const sum = A[i] + B[j];

    map.set(sum, (map.get(sum) || 0) + 1);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const find = -(C[i] + D[j]);

    if (map.has(find)) count += map.get(find);
  }
}

console.log(count);
