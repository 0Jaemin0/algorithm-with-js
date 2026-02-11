const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = numbers[i] + numbers[j] + numbers[k];

      if (sum <= M) result = Math.max(result, sum);
    }
  }
}

console.log(result);
