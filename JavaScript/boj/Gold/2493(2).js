const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\r\n');

const tops = input.split(' ').map(Number);
const stack = [[0, tops[0]]];
const result = [0];

for (let i = 1; i < N; i++) {
  while (stack.length > 0 && stack[stack.length - 1][1] < tops[i]) {
    stack.pop();
  }

  result.push(stack.length > 0 ? stack[stack.length - 1][0] + 1 : 0);
  stack.push([i, tops[i]]);
}

console.log(result.join(' '));
