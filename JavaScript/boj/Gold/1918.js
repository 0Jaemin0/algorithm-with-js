const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const stack = [];
const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === '+' || input[i] === '-') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      result.push(stack.pop());
    }

    stack.push(input[i]);
  } else if (input[i] === '*' || input[i] === '/') {
    while (
      stack.length &&
      stack[stack.length - 1] !== '(' &&
      stack[stack.length - 1] !== '+' &&
      stack[stack.length - 1] !== '-'
    ) {
      result.push(stack.pop());
    }

    stack.push(input[i]);
  } else if (input[i] === '(') {
    stack.push('(');
  } else if (input[i] === ')') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      result.push(stack.pop());
    }

    stack.pop();
  } else {
    result.push(input[i]);
  }
}

while (stack.length) result.push(stack.pop());

console.log(result.join(''));
