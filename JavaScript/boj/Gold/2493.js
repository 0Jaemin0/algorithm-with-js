const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const tops = input.split(' ').map(Number);
const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  while (stack.length) {
    if (stack[stack.length - 1].height <= tops[i]) stack.pop();
    else {
      result.push(stack[stack.length - 1].number);
      stack.push({
        number: i + 1,
        height: tops[i],
      });
      break;
    }
  }

  if (!stack.length) {
    result.push(0);
    stack.push({
      number: i + 1,
      height: tops[i],
    });
  }
}

console.log(result.join(' '));
