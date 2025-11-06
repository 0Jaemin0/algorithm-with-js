const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const numbers = Array.from({ length: N + 1 }, () => false);
let count = 0;

for (let i = 2; i <= N; i++) {
  for (let j = i; j <= N; j += i) {
    if (!numbers[j]) {
      numbers[j] = true;
      count++;
    }

    if (count === K) {
      console.log(j);
      return;
    }
  }
}
