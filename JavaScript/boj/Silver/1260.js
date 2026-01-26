const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const numbers = Array.from({ length: N + 1 }, () => []);
const result = [[], []];

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(' ').map(Number);

  numbers[start].push(end);
  numbers[end].push(start);
}

for (let i = 1; i <= N; i++) numbers[i].sort((a, b) => a - b);

const dfs = () => {
  const stack = [V];
  const visited = Array.from({ length: N + 1 }, () => false);

  while (stack.length) {
    const now = stack.pop();

    if (visited[now]) continue;

    visited[now] = true;
    result[0].push(now);

    for (let i = numbers[now].length - 1; i >= 0; i--) {
      const move = numbers[now][i];

      if (!visited[move]) stack.push(move);
    }
  }
};

const bfs = () => {
  const queue = [V];
  const visited = Array.from({ length: N + 1 }, () => false);

  visited[V] = true;

  while (queue.length) {
    const now = queue.shift();

    result[1].push(now);

    for (let i = 0; i < numbers[now].length; i++) {
      const move = numbers[now][i];

      if (!visited[move]) {
        visited[move] = true;
        queue.push(move);
      }
    }
  }
};

dfs();
bfs();

result.map((line) => console.log(line.join(' ')));
