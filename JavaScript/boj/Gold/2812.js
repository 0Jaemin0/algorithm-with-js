const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const number = input[1].split('').map(Number);
const stack = [number[0]];
let deleteCount = 0;

for (let i = 1; i < N; i++) {
  while (stack[stack.length - 1] < number[i] && deleteCount < K) {
    stack.pop();
    deleteCount++;
  }

  stack.push(number[i]);
}

console.log(
  deleteCount === K ? stack.join('') : stack.join('').slice(0, N - K)
);
