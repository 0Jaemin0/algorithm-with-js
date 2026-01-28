const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const queue = [];
const tomatoes = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let day = 0;
let idx = 0;

for (let i = 1; i <= N; i++) {
  tomatoes.push(input[i].split(' ').map(Number));

  for (let j = 0; j < M; j++) {
    if (tomatoes[i - 1][j] === 1) queue.push([i - 1, j]);
  }
}

while (idx < queue.length) {
  const len = queue.length;

  for (let i = idx; i < len; i++) {
    const [nowX, nowY] = queue[idx++];

    for (let j = 0; j < 4; j++) {
      const nx = nowX + dx[j];
      const ny = nowY + dy[j];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (tomatoes[nx][ny] === 0) {
          queue.push([nx, ny]);
          tomatoes[nx][ny] = 1;
        }
      }
    }
  }

  day++;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoes[i][j] === 0) {
      console.log(-1);

      return;
    }
  }
}

console.log(day - 1);
