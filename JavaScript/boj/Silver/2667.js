const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const map = [];
const result = [];
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= N; i++) {
  map.push(input[i].split('').map(Number));
}

const bfs = (i, j) => {
  const queue = [[i, j]];
  let count = 1;
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    const number = map[x][y];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (!visited[nx][ny] && map[nx][ny] === number) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          count++;
        }
      }
    }
  }

  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j] !== 0) result.push(bfs(i, j));
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));
