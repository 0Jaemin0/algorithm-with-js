const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 0; i < N; i++) {
  let leftStack = [];
  let rightStack = [];

  for (let j = 0; j < input[i].length; j++) {
    const char = input[i][j];

    switch (char) {
      case '<':
        leftStack.length > 0 && rightStack.push(leftStack.pop());
        break;
      case '>':
        rightStack.length > 0 && leftStack.push(rightStack.pop());
        break;
      case '-':
        leftStack.pop();
        break;
      default:
        leftStack.push(char);
    }
  }

  result.push(leftStack.join('') + rightStack.reverse().join(''));
}

console.log(result.join('\n'));
