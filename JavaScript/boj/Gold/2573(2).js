const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const island = [];
let ice = [];
let year = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= N; i++) {
  island.push(input[i].split(' ').map(Number));

  for (let j = 0; j < M; j++) {
    if (island[i - 1][j] > 0) ice.push([i - 1, j]);
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

while (ice.length) {
  const count = [];
  const len = ice.length;
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  let divided = 0;

  for (let i = 0; i < len; i++) {
    const [x, y] = ice[i];
    let zero = 0;

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (island[nx][ny] === 0) zero++;
      }
    }

    count.push(zero);
  }

  for (let i = 0; i < len; i++) {
    const [x, y] = ice[i];

    island[x][y] = Math.max(0, island[x][y] - count[i]);
  }

  ice = [];
  year++;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (island[i][j] > 0) ice.push([i, j]);
    }
  }

  for (let i = 0; i < ice.length; i++) {
    const [x, y] = ice[i];

    if (!visited[x][y]) {
      bfs(x, y, visited);

      divided++;
    }
  }

  if (divided >= 2) {
    console.log(year);

    return;
  }
}

console.log(0);
