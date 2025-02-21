const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const grid = [];
const colorGrid = [];
let visited = Array.from({ length: N }, () => new Array(N).fill(false));

for (let i = 1; i <= N; i++) {
  grid.push(input[i].split(''));
  colorGrid.push(input[i].replaceAll('G', 'R').split(''));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (i, j, painting) => {
  const queue = [[i, j]];
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    const color = painting[x][y];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (
          !visited[nx][ny] &&
          painting[nx][ny] &&
          color === painting[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

let count = 0;
let colorCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j, grid);
      count++;
    }
  }
}

visited = Array.from({ length: N }, () => new Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j, colorGrid);
      colorCount++;
    }
  }
}

console.log(count, colorCount);
