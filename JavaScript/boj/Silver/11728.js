const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const result = [];
let idx1 = 0;
let idx2 = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

while (idx1 < N || idx2 < M) {
  if (idx1 >= N || A[idx1] > B[idx2]) result.push(B[idx2++]);
  else result.push(A[idx1++]);
}

console.log(result.join(' '));
