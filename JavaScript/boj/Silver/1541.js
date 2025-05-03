const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('-');

let result = 0;

input[0]
  .split('+')
  .map(Number)
  .forEach((num) => {
    result += num;
  });

for (let i = 1; i < input.length; i++) {
  const num = input[i].split('+').map(Number);
  let sum = 0;

  for (let j = 0; j < num.length; j++) sum += num[j];
  result -= sum;
}

console.log(result);
