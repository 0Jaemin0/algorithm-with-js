const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const bingo = [];
const row = [0, 0, 0, 0, 0];
const col = [0, 0, 0, 0, 0];
const cross = [0, 0];
let count = 0;

for (let i = 0; i < 5; i++) bingo.push(...input[i].split(' ').map(Number));

for (let i = 5; i < 10; i++) {
  const numbers = input[i].split(' ').map(Number);

  for (let j = 0; j < 5; j++) {
    const idx = bingo.indexOf(numbers[j]);
    const x = Math.floor(idx / 5);
    const y = idx % 5;

    row[x] += 1;
    col[y] += 1;

    if (row[x] === 5) count++;
    if (col[y] === 5) count++;

    if (
      (x === 0 && y === 0) ||
      (x === 1 && y === 1) ||
      (x === 2 && y === 2) ||
      (x === 3 && y === 3) ||
      (x === 4 && y === 4)
    ) {
      cross[0] === 4 ? count++ : (cross[0] += 1);
    }

    if (
      (x === 4 && y === 0) ||
      (x === 3 && y === 1) ||
      (x === 2 && y === 2) ||
      (x === 1 && y === 3) ||
      (x === 0 && y === 4)
    ) {
      cross[1] === 4 ? count++ : (cross[1] += 1);
    }

    if (count >= 3) {
      console.log((i - 5) * 5 + j + 1);

      return;
    }
  }
}
