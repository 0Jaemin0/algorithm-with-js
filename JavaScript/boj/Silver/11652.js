const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const cards = new Map();
let max = [0n, 0];

for (let i = 0; i < Number(N); i++) {
  const number = BigInt(input[i]);

  if (cards.has(number)) cards.set(number, cards.get(number) + 1);
  else cards.set(number, 1);
}

cards.forEach((count, num) => {
  if (count > max[1]) {
    max = [num, count];
  } else if (count === max[1] && num < max[0]) {
    max = [num, count];
  }
});

console.log(max[0].toString());
