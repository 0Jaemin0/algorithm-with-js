const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let index = 0;
const result = [];

const bfs = (col, row, building, fire, queue) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let time = 0;
  let queueIndex = 0;
  let fireIndex = 0;

  while (queueIndex < queue.length) {
    const fireLen = fire.length;
    const queueLen = queue.length;

    for (; fireIndex < fireLen; fireIndex++) {
      const [fx, fy] = fire[fireIndex];

      for (let j = 0; j < 4; j++) {
        const nx = fx + dx[j];
        const ny = fy + dy[j];

        if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
          if (building[nx][ny] === '.') {
            building[nx][ny] = '*';
            fire.push([nx, ny]);
          }
        }
      }
    }

    for (; queueIndex < queueLen; queueIndex++) {
      const [x, y] = queue[queueIndex];

      if (x === 0 || x === row - 1 || y === 0 || y === col - 1) return time + 1;

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
          if (building[nx][ny] === '.') {
            building[nx][ny] = '#';
            queue.push([nx, ny]);
          }
        }
      }
    }

    time++;
  }

  return 'IMPOSSIBLE';
};

for (let i = 0; i < T; i++) {
  const [col, row] = input[index++].split(' ').map(Number);
  const building = Array.from({ length: row }, () => new Array(col));
  const fire = [];
  const queue = [];

  for (let j = 0; j < row; j++) building[j] = input[index++].split('');

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (building[i][j] === '@') queue.push([i, j]);
      if (building[i][j] === '*') fire.push([i, j]);
    }
  }

  result.push(bfs(col, row, building, fire, queue));
}

console.log(result.join('\n'));
