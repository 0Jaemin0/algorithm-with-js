const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input[0];
const result = [];

const isPrimeNumber = (num) => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;

  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let i = 1; i <= T; i++) {
  let n = input[i];

  while (!isPrimeNumber(n)) {
    n++;
  }

  result.push(n);
}

console.log(result.join('\n'));
