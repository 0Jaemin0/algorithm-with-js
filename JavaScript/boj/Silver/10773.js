const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [K, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const stack = [];

for (let i = 0; i < input.length; i++) {
  if (+input[i] === 0) stack.pop();
  else stack.push(+input[i]);
}

console.log(stack.length ? stack.reduce((sum, num) => sum + num, 0) : 0);
