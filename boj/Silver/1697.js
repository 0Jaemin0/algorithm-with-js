const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const visited = Array.from({ length: 200001 }, () => false);

const bfs = (start) => {
  const queue = [start];
  let count = 0;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const point = queue.shift();

      if (point === K) return count;

      for (const move of [point - 1, point + 1, point * 2]) {
        if (move >= 0 && move <= 200000 && !visited[move]) {
          queue.push(move);
          visited[move] = true;
        }
      }
    }

    count++;
  }
};

console.log(bfs(N));
