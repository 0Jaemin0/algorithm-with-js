const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const bfs = () => {
  const queue = [[N, 0]];
  const visited = Array.from({ length: 100_001 }, () => false);

  visited[N] = true;

  while (queue.length) {
    const [now, time] = queue.shift();

    if (now === K) {
      console.log(time);

      return;
    }

    for (const move of [now - 1, now + 1, now * 2]) {
      if (!visited[move] && move >= 0 && move < 100_001) {
        if (move === now * 2) queue.unshift([move, time]);
        else queue.push([move, time + 1]);

        visited[move] = true;
      }
    }
  }
};

bfs();
