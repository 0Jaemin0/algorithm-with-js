const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const tomato = [];
const queue = [];
let day = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= N; i++) {
  tomato.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomato[i][j] === 1) queue.push([i, j]);
  }
}

let index = 0;
while (index < queue.length) {
  const currentLen = queue.length;

  for (let i = index; i < currentLen; i++) {
    const [x, y] = queue[index++];

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (tomato[nx][ny] === 0) {
          queue.push([nx, ny]);
          tomato[nx][ny] = 1;
        }
      }
    }
  }

  day++;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomato[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(day - 1);
