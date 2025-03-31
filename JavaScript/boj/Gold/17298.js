const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input.split(' ').map(Number);
const stack = [];
const result = [];

for (let i = N - 1; i >= 0; i--) {
  while (stack.length) {
    if (stack[stack.length - 1] <= numbers[i]) stack.pop();
    else {
      result.push(stack[stack.length - 1]);
      stack.push(numbers[i]);
      break;
    }
  }

  if (!stack.length) {
    stack.push(numbers[i]);
    result.push(-1);
  }
}

console.log(result.reverse().join(' '));
