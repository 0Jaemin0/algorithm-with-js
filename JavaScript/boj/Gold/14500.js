const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const paper = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let max = -Infinity;

for (let i = 1; i <= N; i++) paper.push(input[i].split(' ').map(Number));

const dfs = (x, y, count, sum) => {
  if (count === 4) {
    max = Math.max(max, sum);

    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (!visited[nx][ny]) {
        if (count === 2) {
          visited[nx][ny] = true;
          dfs(x, y, count + 1, sum + paper[nx][ny]);
          visited[nx][ny] = false;
        }

        visited[nx][ny] = true;
        dfs(nx, ny, count + 1, sum + paper[nx][ny]);
        visited[nx][ny] = false;
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      visited[i][j] = true;
      dfs(i, j, 1, paper[i][j]);
      visited[i][j] = false;
    }
  }
}

console.log(max);
