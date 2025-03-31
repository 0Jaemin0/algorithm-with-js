const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const visited = Array.from({ length: R }, () => new Array(C).fill(false));
const maze = [];
const fire = [];
const queue = [];

for (let i = 1; i < input.length; i++) maze.push(input[i].split(''));

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (maze[i][j] === 'F') fire.push([i, j]);
    if (maze[i][j] === 'J') {
      queue.push([i, j, 0]);
      visited[i][j] = true;
    }
  }
}

const bfs = () => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    const fireLen = fire.length;
    const queueLen = queue.length;

    for (let i = 0; i < fireLen; i++) {
      const [fx, fy] = fire.shift();

      for (let j = 0; j < 4; j++) {
        const nfx = fx + dx[j];
        const nfy = fy + dy[j];

        if (nfx >= 0 && nfx < R && nfy >= 0 && nfy < C) {
          if (maze[nfx][nfy] === '.') {
            maze[nfx][nfy] = 'F';
            fire.push([nfx, nfy]);
          }
        }
      }
    }

    for (let i = 0; i < queueLen; i++) {
      const [x, y, count] = queue.shift();

      if (x === 0 || x === R - 1 || y === 0 || y === C - 1) return count + 1;

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
          if (!visited[nx][ny] && maze[nx][ny] === '.') {
            queue.push([nx, ny, count + 1]);
            visited[nx][ny] = true;
          }
        }
      }
    }
  }

  return 'IMPOSSIBLE';
};

console.log(bfs());
