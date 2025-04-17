const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .filter((value) => value !== '');

const numbers = [];
const result = [];

for (let i = 0; i < input.length; i++) {
  const line = input[i].split(' ');

  for (let i = 0; i < line.length; i++) numbers.push(line[i]);
}

for (let i = 1; i <= +numbers[0]; i++) {
  const number = Number(numbers[i].split('').reverse().join(''));

  result.push(number);
}

console.log(result.sort((a, b) => a - b).join('\n'));
