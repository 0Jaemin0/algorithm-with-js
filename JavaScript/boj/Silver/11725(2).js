const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
const result = Array.from({ length: N - 1 }, () => 0);
const queue = [1];
visited[1] = true;

for (let i = 1; i < N; i++) {
  const [v1, v2] = input[i].split(' ').map(Number);

  graph[v1].push(v2);
  graph[v2].push(v1);
}

while (queue.length) {
  const now = queue.shift();

  for (let i = 0; i < graph[now].length; i++) {
    const child = graph[now][i];

    if (!visited[child]) {
      queue.push(child);
      visited[child] = true;
      result[child - 2] = now;
    }
  }
}

console.log(result.join('\n'));
