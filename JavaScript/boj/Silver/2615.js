const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const square = [];
const black = [];
const white = [];
let result = [0, 0, 0];

for (let i = 0; i < 19; i++) {
  square.push(input[i].split(' ').map(Number));

  for (let j = 0; j < square[i].length; j++) {
    if (square[i][j] === 1) black.push([i, j]);
    else if (square[i][j] === 2) white.push([i, j]);
  }
}

black.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

white.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

const checkRight = (x, y, color) => {
  let count = 0;

  for (let i = 1; i < 5; i++) {
    const right = y + i;

    if (right < 19 && square[x][right] === color) count++;
  }

  return count === 4 &&
    (y + 5 > 18 || square[x][y + 5] !== color) &&
    (y - 1 < 0 || square[x][y - 1] !== color)
    ? true
    : false;
};

const checkBottom = (x, y, color) => {
  let count = 0;

  for (let i = 1; i < 5; i++) {
    const bottom = x + i;

    if (bottom < 19 && square[bottom][y] === color) count++;
  }

  return count === 4 &&
    (x + 5 > 18 || square[x + 5][y] !== color) &&
    (x - 1 < 0 || square[x - 1][y] !== color)
    ? true
    : false;
};

const checkBottomRight = (x, y, color) => {
  let count = 0;

  for (let i = 1; i < 5; i++) {
    const bottom = x + i;
    const right = y + i;

    if (bottom < 19 && right < 19 && square[bottom][right] === color) count++;
  }

  return count === 4 &&
    (x + 5 > 18 || y + 5 > 18 || square[x + 5][y + 5] !== color) &&
    (x - 1 < 0 || y - 1 < 0 || square[x - 1][y - 1] !== color)
    ? true
    : false;
};

const checkTopRight = (x, y, color) => {
  let count = 0;

  for (let i = 1; i < 5; i++) {
    const top = x - i;
    const right = y + i;

    if (top >= 0 && right < 19 && square[top][right] === color) count++;
  }

  return count === 4 &&
    (x - 5 < 0 || y + 5 > 18 || square[x - 5][y + 5] !== color) &&
    (x + 1 > 18 || y - 1 < 0 || square[x + 1][y - 1] !== color)
    ? true
    : false;
};

for (let i = 0; i < black.length; i++) {
  const [x, y] = black[i];

  if (
    checkRight(x, y, 1) ||
    checkBottom(x, y, 1) ||
    checkBottomRight(x, y, 1) ||
    checkTopRight(x, y, 1)
  ) {
    result = [1, x + 1, y + 1];
    break;
  }
}

for (let i = 0; i < white.length; i++) {
  const [x, y] = white[i];

  if (
    checkRight(x, y, 2) ||
    checkBottom(x, y, 2) ||
    checkBottomRight(x, y, 2) ||
    checkTopRight(x, y, 2)
  ) {
    result = [2, x + 1, y + 1];
    break;
  }
}

console.log(result[0]);
result[0] !== 0 && console.log(result[1], result[2]);
