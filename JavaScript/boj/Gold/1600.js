const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [K, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [W, H] = input[0].split(' ').map(Number);
const board = Array.from({ length: H }, () => new Array(W));
const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => new Array(K + 1).fill(false))
);

for (let i = 0; i < H; i++) board[i] = input[i + 1].split(' ').map(Number);

const bfs = () => {
  const queue = [[0, 0, 0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const hx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const hy = [-2, -1, 1, 2, 2, 1, -1, -2];

  visited[0][0][0] = true;

  while (queue.length) {
    const [x, y, jump, move] = queue.shift();

    if (x === H - 1 && y === W - 1) return move;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < H && ny >= 0 && ny < W) {
        if (!visited[nx][ny][jump] && board[nx][ny] === 0) {
          visited[nx][ny][jump] = true;
          queue.push([nx, ny, jump, move + 1]);
        }
      }
    }

    if (jump < K) {
      for (let i = 0; i < 8; i++) {
        const nx = x + hx[i];
        const ny = y + hy[i];

        if (nx >= 0 && nx < H && ny >= 0 && ny < W) {
          if (!visited[nx][ny][jump + 1] && board[nx][ny] === 0) {
            visited[nx][ny][jump + 1] = true;
            queue.push([nx, ny, jump + 1, move + 1]);
          }
        }
      }
    }
  }

  return -1;
};

console.log(bfs());
