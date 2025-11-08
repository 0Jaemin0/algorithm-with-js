const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);
let result = 0;

for (let i = N - 1; i >= 0; i--) {
  if (coins[i] > K) continue;

  result += Math.floor(K / coins[i]);
  K %= coins[i];
}

console.log(result);
