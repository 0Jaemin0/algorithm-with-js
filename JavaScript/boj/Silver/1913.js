const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const number = +input[1];
const maze = Array.from({ length: N }, () => new Array(N));
let start = N * N;
let middle = Math.floor(N / 2);
let x = 0;
let y = 0;
let result = [];

for (let i = 0; i < middle; i++) {
  for (let j = 0; j < N - 1 - i * 2; j++) maze[x++][y] = start--;
  for (let j = 0; j < N - 1 - i * 2; j++) maze[x][y++] = start--;
  for (let j = 0; j < N - 1 - i * 2; j++) maze[x--][y] = start--;
  for (let j = 0; j < N - 1 - i * 2; j++) maze[x][y--] = start--;

  x++;
  y++;
}

maze[middle][middle] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (maze[i][j] === number) {
      result = [i + 1, j + 1];
    }
  }
}

for (let i = 0; i < N; i++) console.log(maze[i].join(' '));
console.log(result[0], result[1]);
