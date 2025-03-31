const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = Array.from({ length: N }, () => new Array(M));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

for (let i = 0; i < N; i++) map[i] = input[i + 1].split('').map(Number);

const bfs = () => {
  const queue = [[0, 0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let time = 1;
  let queueIndex = 0;
  visited[0][0][0] = true;

  while (queueIndex < queue.length) {
    const len = queue.length;

    for (; queueIndex < len; queueIndex++) {
      const [x, y, broken] = queue[queueIndex];

      if (x === N - 1 && y === M - 1) return time;

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
          if (map[nx][ny] === 0 && !visited[nx][ny][broken]) {
            visited[nx][ny][broken] = true;
            queue.push([nx, ny, broken]);
          }

          if (map[nx][ny] === 1 && broken === 0 && !visited[nx][ny][1]) {
            visited[nx][ny][1] = true;
            queue.push([nx, ny, 1]);
          }
        }
      }
    }

    time++;
  }

  return -1;
};

console.log(bfs());
