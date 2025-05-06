const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const K = +input[1];
const sensors = input[2].split(' ').map(Number);
const distance = [];
let result = 0;

sensors.sort((a, b) => a - b);

for (let i = 0; i < N - 1; i++) distance.push(sensors[i + 1] - sensors[i]);
distance.sort((a, b) => b - a);

for (let i = K - 1; i < N - 1; i++) result += distance[i];

console.log(result);
