const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
let result = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (let i = 0; i < N; i++) result += A[i] * B[i];

console.log(result);
