const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input.map(Number);
const plus = numbers.filter((num) => num > 0);
const minus = numbers.filter((num) => num < 0);
const zero = numbers.filter((num) => num === 0);
let result = 0;

plus.sort((a, b) => b - a);
minus.sort((a, b) => a - b);

for (let i = 0; i < plus.length; i += 2) {
  if (i === plus.length - 1) result += plus[i];
  else if (plus[i] * plus[i + 1] < plus[i] + plus[i + 1])
    result += plus[i] + plus[i + 1];
  else result += plus[i] * plus[i + 1];
}

for (let i = 0; i < minus.length; i += 2) {
  if (i === minus.length - 1 && zero.length < 1) result += minus[i];
  else if (i === minus.length - 1 && zero.length > 0) continue;
  else result += minus[i] * minus[i + 1];
}

console.log(result);
