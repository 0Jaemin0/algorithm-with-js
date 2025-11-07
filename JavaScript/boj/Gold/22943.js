const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [K, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const max = 10 ** K;
const visited = Array.from({ length: max }, () => false);
const primeNumbers = [];
const sumNumbers = new Set();
const multiplyNumbers = new Set();
const result = [];
let count = 0;

for (let i = 2; i * i < max; i++) {
  if (!visited[i]) {
    for (let j = i * i; j < max; j += i) visited[j] = true;
  }
}

for (let i = 2; i < max; i++) {
  if (!visited[i]) primeNumbers.push(i);
}

const sum = () => {
  for (let i = 0; i < primeNumbers.length; i++) {
    if (2 * primeNumbers[i] >= max) return;
    for (let j = i + 1; j < primeNumbers.length; j++) {
      if (primeNumbers[i] + primeNumbers[j] >= 10 ** K) break;

      sumNumbers.add(primeNumbers[i] + primeNumbers[j]);
    }
  }
};

const multiply = () => {
  for (let i = 0; i < primeNumbers.length; i++) {
    if (2 * primeNumbers[i] >= max) return;
    for (let j = i; j < primeNumbers.length; j++) {
      if (primeNumbers[i] * primeNumbers[j] >= 10 ** K) break;

      multiplyNumbers.add(primeNumbers[i] * primeNumbers[j]);
    }
  }
};

const check = (num) => {
  let divided = num;

  if (!sumNumbers.has(num)) return;

  while (divided % M === 0) divided /= M;

  if (multiplyNumbers.has(divided)) result.push(num);
};

sum();
multiply();

for (let i = 10 ** (K - 1); i < max; i++) check(i);

for (let i = 0; i < result.length; i++) {
  const str = String(result[i]);
  const set = new Set(str);

  if (str.length === set.size) count++;
}

console.log(count);
