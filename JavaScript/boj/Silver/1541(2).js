const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('-');

const result = [];

for (let i = 0; i < input.length; i++) {
  const num = input[i].split('+').map(Number);
  let sum = 0;

  for (let j = 0; j < num.length; j++) sum += num[j];

  result.push(result.length ? sum * -1 : sum);
}

console.log(result.reduce((acc, num) => acc + num, 0));
