const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const maps = [];
const dp = Array.from({ length: M }, () => new Array(N).fill(-1));

for (let i = 1; i <= M; i++) maps.push(input[i].split(' ').map(Number));

const dfs = (x, y) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  if (x === M - 1 && y === N - 1) return 1;
  if (dp[x][y] !== -1) return dp[x][y];

  dp[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
      if (maps[nx][ny] < maps[x][y]) dp[x][y] += dfs(nx, ny);
    }
  }

  return dp[x][y];
};

dfs(0, 0);
console.log(dp[0][0]);
