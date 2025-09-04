const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

const stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') stack.push('(');
  else {
    stack.pop();
    result += input[i - 1] === '(' ? stack.length : 1;
  }
}

console.log(result);
