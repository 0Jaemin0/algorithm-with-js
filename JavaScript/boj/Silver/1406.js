const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const M = +input[0];
const leftStack = [];
const rightStack = [];

for (let i = 0; i < N.length; i++) leftStack.push(N[i]);

for (let i = 0; i < M; i++) {
  const [command, char] = input[i + 1].split(' ');

  switch (command) {
    case 'L':
      leftStack.length > 0 && rightStack.push(leftStack.pop());
      break;
    case 'D':
      rightStack.length > 0 && leftStack.push(rightStack.pop());
      break;
    case 'B':
      leftStack.pop();
      break;
    case 'P':
      leftStack.push(char);
      break;
  }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));
