const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = +input[0];
const [W, H] = input[1].split(' ').map(Number);
const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => new Array(K).fill(false)),
);
const map = [];
const queue = [[0, 0, 0]];
const hx = [-1, -2, -2, -1, 1, 2, 2, 1];
const hy = [-2, -1, 1, 2, 2, 1, -1, -2];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

visited[0][0][0] = true;

for (let i = 2; i < H + 2; i++) map.push(input[i].split(' ').map(Number));

while (queue.length) {
  const len = queue.length;

  for (let i = 0; i < len; i++) {
    const [x, y, jump] = queue.shift();

    if (x === H - 1 && y === W - 1) {
      console.log(result);

      return;
    }

    for (let j = 0; j < 8; j++) {
      const nx = x + hx[j];
      const ny = y + hy[j];

      if (nx >= 0 && nx < H && ny >= 0 && ny < W) {
        if (jump < K && !visited[nx][ny][jump + 1] && map[nx][ny] === 0) {
          visited[nx][ny][jump + 1] = true;
          queue.push([nx, ny, jump + 1]);
        }
      }
    }

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < H && ny >= 0 && ny < W) {
        if (!visited[nx][ny][jump] && map[nx][ny] === 0) {
          visited[nx][ny][jump] = true;
          queue.push([nx, ny, jump]);
        }
      }
    }
  }

  result++;
}

console.log(-1);
