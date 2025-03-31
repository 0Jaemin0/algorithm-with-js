const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const maze = [];

for (let i = 1; i < input.length; i++) {
  maze.push(input[i].split('').map(Number));
}

const bfs = () => {
  const queue = [[0, 0, 1]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === N - 1 && y === M - 1) return count;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (!visited[nx][ny] && maze[nx][ny] === 1) {
          queue.push([nx, ny, count + 1]);
          visited[nx][ny] = true;
        }
      }
    }
  }
};

console.log(bfs());
