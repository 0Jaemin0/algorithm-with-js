const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
let index = 0;

const bfs = (startX, startY, field, visited, row, column) => {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < row && ny >= 0 && ny < column) {
        if (field[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

for (let i = 1; i <= T; i++) {
  const [M, N, K] = input[index++].split(' ').map(Number);
  const field = Array.from({ length: N }, () => new Array(M).fill(0));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  let count = 0;

  for (let j = 0; j < K; j++) {
    const [x, y] = input[index++].split(' ').map(Number);
    field[y][x] = 1;
  }

  for (let k = 0; k < N; k++) {
    for (let l = 0; l < M; l++) {
      if (field[k][l] === 1 && !visited[k][l]) {
        bfs(k, l, field, visited, N, M);
        count++;
      }
    }
  }

  result.push(count);
}

console.log(result.join('\n'));
