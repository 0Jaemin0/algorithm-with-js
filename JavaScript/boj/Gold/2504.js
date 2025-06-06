const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const stack = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(' || input[i] === '[') {
    stack.push(input[i]);
  } else if (input[i] === ')') {
    let sum = 0;

    while (stack.length && typeof stack[stack.length - 1] === 'number') {
      sum += stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] !== '(') {
      console.log(0);
      return;
    }

    stack.pop();
    stack.push(sum === 0 ? 2 : sum * 2);
  } else if (input[i] === ']') {
    let sum = 0;

    while (stack.length && typeof stack[stack.length - 1] === 'number') {
      sum += stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] !== '[') {
      console.log(0);
      return;
    }

    stack.pop();
    stack.push(sum === 0 ? 3 : sum * 3);
  }
}

console.log(
  stack.some((el) => el === '(' || el === '[')
    ? 0
    : stack.reduce((acc, cur) => acc + cur, 0)
);
