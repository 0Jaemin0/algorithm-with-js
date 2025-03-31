const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const map = Array.from({ length: N }, () => new Array(N));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const ground = [];
let count = 0;
let min = Infinity;

for (let i = 0; i < input.length; i++) map[i] = input[i].split(' ').map(Number);

const bfs = (i, j) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[i, j]];
  const temp = [];
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    let count = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (!visited[nx][ny] && map[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        } else if (map[nx][ny] === 0) count++;
      }
    }

    if (count > 0) temp.push([x, y]);
  }

  ground.push(temp);
};

const calDistance = (startX, startY, endX, endY) => {
  return Math.abs(startX - endX) + Math.abs(startY - endY);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      bfs(i, j);
      count++;
    }
  }
}

for (let i = 0; i < ground.length - 1; i++) {
  for (let j = i + 1; j < ground.length; j++) {
    for (let k = 0; k < ground[i].length; k++) {
      for (let l = 0; l < ground[j].length; l++) {
        min = Math.min(
          calDistance(
            ground[i][k][0],
            ground[i][k][1],
            ground[j][l][0],
            ground[j][l][1]
          ),
          min
        );
      }
    }
  }
}

console.log(min - 1);
