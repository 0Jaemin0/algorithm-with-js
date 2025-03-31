const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const island = Array.from({ length: N }, () => new Array(M));
const ice = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let year = 0;

for (let i = 0; i < N; i++) {
  island[i] = input[i + 1].split(' ').map(Number);

  for (let j = 0; j < M; j++) {
    if (island[i][j] !== 0) ice.push([i, j]);
  }
}

const bfs = (i, j, visited) => {
  const queue = [[i, j]];
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (island[nx][ny] !== 0 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
};

while (true) {
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const save = Array.from({ length: N }, () => new Array(M).fill(0));
  let count = 0;

  for (let i = 0; i < ice.length; i++) {
    const [x, y] = ice[i];
    let meltCount = 0;

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (island[nx][ny] === 0) meltCount++;
      }
    }

    save[x][y] = meltCount;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      island[i][j] = Math.max(0, island[i][j] - save[i][j]);
    }
  }

  year++;

  for (let i = 0; i < ice.length; i++) {
    const [x, y] = ice[i];

    if (island[x][y] !== 0 && !visited[x][y]) {
      bfs(x, y, visited);
      count++;
    }
  }

  if (count >= 2) break;
  else if (count === 0) {
    year = 0;
    break;
  }
}

console.log(year);
