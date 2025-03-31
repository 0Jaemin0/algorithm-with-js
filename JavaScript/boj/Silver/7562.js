const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
let index = 0;

const bfs = (startX, startY, endX, endY, size, chess) => {
  const queue = [[startX, startY]];
  const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
  let count = 0;
  chess[startX][startY] = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();

      if (x === endX && y === endY) return count;

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
          if (chess[nx][ny] === 0) {
            chess[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }

    count++;
  }
};

for (let i = 0; i < T; i++) {
  const size = +input[index++];
  const [startX, startY] = input[index++].split(' ').map(Number);
  const [endX, endY] = input[index++].split(' ').map(Number);
  const chess = Array.from({ length: size }, () => new Array(size).fill(0));

  result.push(bfs(startX, startY, endX, endY, size, chess));
}

console.log(result.join('\n'));
