const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const square = [];
const result = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= N; i++) square.push(input[i].split('').map(Number));

const bfs = (x, y) => {
  const queue = [[x, y]];
  let count = 1;

  visited[x][y] = true;

  while (queue.length) {
    const [nowX, nowY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (square[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          count++;
        }
      }
    }
  }

  result.push(count);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (square[i][j] === 1 && !visited[i][j]) bfs(i, j);
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));
