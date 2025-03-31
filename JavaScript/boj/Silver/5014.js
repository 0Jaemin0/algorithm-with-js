const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [F, S, G, U, D] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = Array.from({ length: F + 1 }, () => false);

const bfs = () => {
  const queue = [[S, 0]];
  visited[S] = true;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [now, move] = queue.shift();

      if (now === G) return move;

      if (now + U <= F && !visited[now + U]) {
        queue.push([now + U, move + 1]);
        visited[now + U] = true;
      }

      if (now - D >= 1 && !visited[now - D]) {
        queue.push([now - D, move + 1]);
        visited[now - D] = true;
      }
    }
  }

  return 'use the stairs';
};

console.log(bfs());
