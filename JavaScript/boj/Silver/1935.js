const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\r\n');

const stack = [];
const numbers = {};
const postfix = input.shift().split('');

for (let i = 0; i < N; i++) {
  numbers[String.fromCharCode(i + 65)] = +input[i];
}

while (postfix.length) {
  const now = postfix.shift();

  if (now !== '*' && now !== '+' && now !== '/' && now !== '-') {
    stack.push(numbers[now]);
  } else {
    const right = stack.pop();
    const left = stack.pop();

    if (now === '*') stack.push(left * right);
    else if (now === '+') stack.push(left + right);
    else if (now === '/') stack.push(left / right);
    else if (now === '-') stack.push(left - right);
  }
}

console.log(stack[0].toFixed(2));
