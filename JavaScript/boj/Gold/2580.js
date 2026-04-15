const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const sudoku = input.map((line) => line.split(' ').map(Number));
const row = Array.from({ length: 9 }, () => new Array(10).fill(false));
const column = Array.from({ length: 9 }, () => new Array(10).fill(false));
const square = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => new Array(10).fill(false)),
);
const blank = [];

for (let i = 0; i < 9; i++) {
  const line = sudoku[i];

  for (let j = 0; j < 9; j++) {
    if (line[j] === 0) blank.push([i, j]);
    else {
      row[i][line[j]] = true;
      column[j][line[j]] = true;
      square[Math.floor(i / 3)][Math.floor(j / 3)][line[j]] = true;
    }
  }
}

const backtrack = (count) => {
  if (count === blank.length) return true;

  const [x, y] = blank[count];

  for (let i = 1; i <= 9; i++) {
    if (
      row[x][i] ||
      column[y][i] ||
      square[Math.floor(x / 3)][Math.floor(y / 3)][i]
    )
      continue;

    sudoku[x][y] = i;
    row[x][i] = true;
    column[y][i] = true;
    square[Math.floor(x / 3)][Math.floor(y / 3)][i] = true;

    if (backtrack(count + 1)) return true;

    sudoku[x][y] = 0;
    row[x][i] = false;
    column[y][i] = false;
    square[Math.floor(x / 3)][Math.floor(y / 3)][i] = false;
  }

  return false;
};

backtrack(0);

console.log(sudoku.map((row) => row.join(' ')).join('\n'));
