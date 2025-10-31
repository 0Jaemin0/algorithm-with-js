const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
const numbers = [input.split(' ').map(Number)];

while (numbers.length) {
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    const now = numbers.shift();
    const midIndex = Math.floor(now.length / 2);

    result.push(now[midIndex]);
    if (now.length > 2) {
      numbers.push(now.slice(0, midIndex));
      numbers.push(now.slice(midIndex + 1, now.length));
    }
  }
}

let index = 0;
for (let i = 0; i < N; i++) {
  const count = 2 ** i;

  console.log(result.slice(index, index + count).join(' '));
  index += count;
}
