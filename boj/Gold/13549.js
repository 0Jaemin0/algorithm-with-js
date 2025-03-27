const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = Array.from({ length: 100001 }, () => false);

const bfs = (start, time) => {
  const queue = [[start, time]];
  visited[start] = true;

  while (queue.length) {
    const [now, time] = queue.shift();

    if (now === K) return time;

    for (let move of [now * 2, now - 1, now + 1]) {
      if (move >= 0 && move < 100001 && !visited[move]) {
        if (move === now * 2) queue.unshift([move, time]);
        else queue.push([move, time + 1]);
        visited[move] = true;
      }
    }
  }
};

console.log(bfs(N, 0));
