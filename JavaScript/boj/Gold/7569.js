const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N, H] = input[0].split(' ').map(Number);
const tomato = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => new Array(M))
);
const queue = [];
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
let day = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    tomato[i][j] = input[i * N + j + 1].split(' ').map(Number);
    tomato[i][j].forEach((num, index) => {
      if (num === 1) queue.push([i, j, index]);
    });
  }
}

let index = 0;

while (index < queue.length) {
  const currentLen = queue.length;

  for (let i = index; i < currentLen; i++) {
    const [z, x, y] = queue[i];

    for (let j = 0; j < 6; j++) {
      const nz = z + dz[j];
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (tomato[nz][nx][ny] === 0) {
          tomato[nz][nx][ny] = 1;
          queue.push([nz, nx, ny]);
        }
      }
    }
  }

  index = currentLen;
  day++;
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomato[i][j][k] === 0) {
        console.log(-1);
        return;
      }
    }
  }
}

console.log(day - 1);
