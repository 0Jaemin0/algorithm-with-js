const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const checkVPS = (PS) => {
  const stack = [];

  for (let i = 0; i < PS.length; i++) {
    if (PS[i] === '(') stack.push('(');
    else if (PS[i] === ')' && stack.pop() !== '(') return 'NO';
  }

  return stack.length === 0 ? 'YES' : 'NO';
};

const result = [];

for (let i = 0; i < T; i++) result.push(checkVPS(input[i].split('')));

console.log(result.join('\n'));
