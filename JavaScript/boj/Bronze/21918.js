const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const bulbs = input[1].split(' ').map(Number);

for (let i = 0; i < M; i++) {
  const [a, b, c] = input[i + 2].split(' ').map(Number);

  if (a === 1) bulbs[b - 1] = c;
  else if (a === 2) {
    for (let j = b; j <= c; j++) bulbs[j - 1] = bulbs[j - 1] === 1 ? 0 : 1;
  } else for (let j = b; j <= c; j++) bulbs[j - 1] = a === 3 ? 0 : 1;
}

console.log(bulbs.join(' '));
