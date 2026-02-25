const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const belt = [];
let result = 1;
let count = 0;

for (let i = 0; i < 2 * N; i++) belt.push([A[i], false]);

while (true) {
  count = 0;
  belt.unshift(belt.pop());

  if (belt[N - 1][1]) belt[N - 1][1] = false;

  for (let i = N - 1; i > 0; i--) {
    const [durability, hasRobot] = belt[i];
    const preBelt = (i - 1) % (2 * N);
    const [preDurability, preHasRobot] = belt[preBelt];

    if (!hasRobot && durability >= 1 && preHasRobot) {
      belt[i] = [durability - 1, true];
      belt[preBelt] = [preDurability, false];
    }
  }

  if (belt[N - 1][1]) belt[N - 1][1] = false;

  if (belt[0][0] >= 1 && !belt[0][1]) belt[0] = [belt[0][0] - 1, true];

  for (let i = 0; i < 2 * N; i++) {
    if (belt[i][0] === 0) count++;
  }

  if (count >= K) break;

  result++;
}

console.log(result);
