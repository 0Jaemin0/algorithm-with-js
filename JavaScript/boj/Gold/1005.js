const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const result = [];

for (let i = 0, idx = 1; i < T; i++) {
  const [N, K] = input[idx++].split(' ').map(Number);
  const times = input[idx++].split(' ').map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);
  const counts = Array.from({ length: N + 1 }, () => 0);
  const dp = [0, ...times];
  const queue = [];
  let index = 0;

  for (let j = 0; j < K; j++) {
    const [start, end] = input[idx++].split(' ').map(Number);

    graph[start].push(end);
    counts[end] += 1;
  }

  const W = +input[idx++];

  for (let j = 1; j < N + 1; j++) if (counts[j] === 0) queue.push(j);

  while (index < queue.length) {
    const now = queue[index++];

    if (now === W) break;

    for (let k = 0; k < graph[now].length; k++) {
      const move = graph[now][k];

      dp[move] = Math.max(dp[move], dp[now] + times[move - 1]);
      counts[move] -= 1;

      if (counts[move] === 0) queue.push(move);
    }
  }

  result.push(dp[W]);
}

console.log(result.join('\n'));
