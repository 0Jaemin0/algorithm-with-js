const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const visited = Array.from({ length: n }, () => new Array(m).fill(false));
const paper = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let count = 0;
let max = 0;

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  let area = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (!visited[nx][ny] && paper[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          area++;
        }
      }
    }
  }

  return area;
};

for (let i = 1; i < input.length; i++) {
  paper.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && paper[i][j] === 1) {
      count++;
      visited[i][j] = true;
      max = Math.max(bfs(i, j), max);
    }
  }
}

console.log(count);
console.log(max);
