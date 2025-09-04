const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const result = [];
const numbers = [];
let index = 0;

for (let i = 1; i <= N; i++) {
  numbers.push(i);
  result.push('+');

  while (numbers.length && numbers[numbers.length - 1] === input[index]) {
    numbers.pop();
    result.push('-');
    index++;
  }

  if (numbers[numbers.length - 1] > input[index]) {
    console.log('NO');

    return;
  }
}

console.log(result.join('\n'));
