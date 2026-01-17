const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const maze = [];
const move = [];
const bomb = [];
let fail = false;
const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

for (let i = 1; i <= n; i++) {
  maze.push(input[i].split(''));

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '*') bomb.push([i - 1, j]);
  }

  move.push(input[i + n].split(''));
}

for (let i = 0; i < move.length; i++) {
  for (let j = 0; j < move[i].length; j++) {
    const now = move[i][j];
    let count = 0;

    if (now === 'x') {
      if (maze[i][j] === '*') {
        fail = true;
        continue;
      }

      for (let k = 0; k < 8; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx >= 0 && ny >= 0 && nx < move.length && ny < move[i].length) {
          if (maze[nx][ny] === '*') count++;
        }
      }

      move[i][j] = count;
    }
  }
}

if (fail) {
  for (let i = 0; i < bomb.length; i++) {
    const [x, y] = bomb[i];
    move[x][y] = '*';
  }
}

for (let i = 0; i < move.length; i++) {
  console.log(move[i].join(''));
}
