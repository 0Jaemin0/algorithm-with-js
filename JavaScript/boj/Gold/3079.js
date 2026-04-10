const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(BigInt);
const times = input.slice(1).map(BigInt);
let left = 1n;
let right = 1_000_000_000n * M;
let result;

while (left <= right) {
  const mid = (left + right) / 2n;
  let count = 0n;

  for (let i = 0; i < N; i++) {
    count += mid / times[i];

    if (count > M) break;
  }

  if (count < M) left = mid + 1n;
  else {
    right = mid - 1n;
    result = mid;
  }
}

console.log(result.toString());
