const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N, K] = input[0].split(' ').map(Number);
const map = Array.from({ length: M }, () => new Array(N).fill(0));
const visited = Array.from({ length: M }, () => new Array(N).fill(false));
const result = [];
let count = 0;

for (let i = 1; i <= K; i++) {
  const [bx, by, tx, ty] = input[i].split(' ').map(Number);

  for (let j = by; j < ty; j++) {
    for (let k = bx; k < tx; k++) map[j][k] = 1;
  }
}

const bfs = (i, j) => {
  const queue = [[i, j]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let area = 1;
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (map[nx][ny] === 0 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          area++;
        }
      }
    }
  }

  return area;
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 0 && !visited[i][j]) {
      result.push(bfs(i, j));
      count++;
    }
  }
}

console.log(count);
console.log(result.sort((a, b) => a - b).join(' '));
