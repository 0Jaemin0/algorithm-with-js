const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input[0];
const result = [];

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }

  return a;
};

for (let i = 1; i <= t; i++) {
  const tc = input[i].split(' ').map(Number);
  let sum = 0;

  for (let j = 1; j < tc[0]; j++) {
    for (let k = j + 1; k <= tc[0]; k++) {
      sum += gcd(tc[j], tc[k]);
    }
  }

  result.push(sum);
}

console.log(result.join('\n'));
