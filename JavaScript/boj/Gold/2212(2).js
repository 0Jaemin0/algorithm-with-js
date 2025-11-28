const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const K = +input[1];
const sensors = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const distances = [];
let result = 0;

for (let i = 1; i < N; i++) distances.push(sensors[i] - sensors[i - 1]);

distances.sort((a, b) => b - a);

for (let i = K - 1; i < N - 1; i++) result += distances[i];

console.log(result);
