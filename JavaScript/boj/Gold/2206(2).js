const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = [];
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false]),
);

for (let i = 1; i <= N; i++) map.push(input[i].split('').map(Number));

const bfs = () => {
  const queue = [[0, 0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let move = 1;
  let idx = 0;

  visited[0][0][0] = true;

  while (idx < queue.length) {
    const len = queue.length;

    for (let i = idx; i < len; i++) {
      const [x, y, broken] = queue[idx++];

      if (x === N - 1 && y === M - 1) return move;

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
          if (map[nx][ny] === 0 && !visited[nx][ny][broken]) {
            queue.push([nx, ny, broken]);
            visited[nx][ny][broken] = true;
          }

          if (map[nx][ny] === 1 && broken === 0 && !visited[nx][ny][1]) {
            queue.push([nx, ny, 1]);
            visited[nx][ny][1] = true;
          }
        }
      }
    }

    move++;
  }

  return -1;
};

console.log(bfs());
