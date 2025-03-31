const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const result = [];
const stack = [];
let index = 0;
let i = 1;

while (index < N) {
  if (stack[stack.length - 1] === input[index]) {
    stack.pop();
    result.push('-');
    index++;
  } else if (i <= N) {
    stack.push(i);
    result.push('+');
    i++;
  } else {
    console.log('NO');
    return;
  }
}

console.log(result.join('\n'));
