const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

const checkVPS = (string) => {
  const stack = [];

  for (let j = 0; j < string.length; j++) {
    if (string[j] === '(') stack.push('(');
    else if (stack.pop() === '(') continue;
    else {
      result.push('NO');
      return;
    }
  }

  if (stack.length === 0) result.push('YES');
  else result.push('NO');
};

for (let i = 0; i < T; i++) {
  checkVPS(input[i]);
}

console.log(result.join('\n'));
