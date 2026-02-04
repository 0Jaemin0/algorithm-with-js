const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const maze = [];
const queue = [];
const fire = [];
const visited = Array.from({ length: R }, () => new Array(C).fill(false));

for (let i = 1; i <= R; i++) {
  maze.push(input[i].split(''));

  for (let j = 0; j < C; j++) {
    if (maze[i - 1][j] === 'J') {
      queue.push([i - 1, j]);
      visited[i - 1][j] = true;
    }
    if (maze[i - 1][j] === 'F') fire.push([i - 1, j]);
  }
}

const bfs = () => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let time = 0;

  while (queue.length) {
    const len = queue.length;
    const fireLen = fire.length;

    for (let i = 0; i < fireLen; i++) {
      const [fireX, fireY] = fire.shift();

      for (let j = 0; j < 4; j++) {
        const fx = fireX + dx[j];
        const fy = fireY + dy[j];

        if (fx >= 0 && fx < R && fy >= 0 && fy < C) {
          if (maze[fx][fy] === '.') {
            maze[fx][fy] = 'F';
            fire.push([fx, fy]);
          }
        }
      }
    }

    for (let i = 0; i < len; i++) {
      const [nowX, nowY] = queue.shift();

      if (nowX === 0 || nowX === R - 1 || nowY === 0 || nowY === C - 1)
        return time + 1;

      for (let i = 0; i < 4; i++) {
        const nx = nowX + dx[i];
        const ny = nowY + dy[i];

        if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
          if (!visited[nx][ny] && maze[nx][ny] === '.') {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }

    time++;
  }

  return 'IMPOSSIBLE';
};

console.log(bfs());
