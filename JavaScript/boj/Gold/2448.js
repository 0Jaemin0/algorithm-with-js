const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(filePath).toString().trim();

const star = Array.from({ length: N }, () => new Array(2 * N - 1).fill(' '));
const pattern = ['  *  ', ' * * ', '*****'];

const makeStar = (row, col, size) => {
  if (size === 1) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) star[row + i][col + j] = pattern[i][j];
    }

    return;
  }

  makeStar(row, col + (3 * size) / 2, size / 2);
  makeStar(row + (3 * size) / 2, col, size / 2);
  makeStar(row + (3 * size) / 2, col + 3 * size, size / 2);
};

makeStar(0, 0, N / 3);

for (let i = 0; i < N; i++) console.log(star[i].join(''));
