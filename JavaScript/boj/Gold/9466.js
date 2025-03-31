const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
let count = 0;

const dfs = (start, numbers, visited, done) => {
  visited[start] = true;
  const next = numbers[start];

  if (!visited[next]) dfs(next, numbers, visited, done);
  else if (!done[next]) {
    for (let i = next; i !== start; i = numbers[i]) count += 1;

    count += 1;
  }

  done[start] = true;
};

for (let i = 0; i < T; i++) {
  const n = +input[i * 2];
  const numbers = [0, ...input[i * 2 + 1].split(' ').map(Number)];
  const visited = Array(n + 1).fill(false);
  const done = Array(n + 1).fill(false);
  count = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i, numbers, visited, done);
  }

  result.push(n - count);
}

console.log(result.join('\n'));
