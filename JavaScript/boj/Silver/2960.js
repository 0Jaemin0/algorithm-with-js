const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const visited = new Array(N + 1).fill(false);
const numbers = [];
let count = 0;

for (let i = 2; i <= N; i++) numbers.push(i);

for (let i = 2; i <= N; i++) {
  for (let j = i; j <= N; j += i) {
    if (!visited[j]) {
      visited[j] = true;
      count++;
    }

    if (count === K) {
      console.log(j);
      return;
    }
  }
}
