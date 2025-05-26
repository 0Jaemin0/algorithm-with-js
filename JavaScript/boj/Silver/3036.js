const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const rings = input[1].split(' ').map(Number);
const result = [];

const getGCD = (a, b) => {
  while (b != 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }

  return a;
};

for (let i = 1; i < N; i++) {
  const gcd = getGCD(rings[0], rings[i]);

  result.push(`${rings[0] / gcd}/${rings[i] / gcd}`);
}

console.log(result.join('\n'));
