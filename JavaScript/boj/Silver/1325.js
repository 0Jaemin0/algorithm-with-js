const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const computers = Array.from({ length: N + 1 }, () => []);
const count = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= M; i++) {
  const [child, parent] = input[i].split(' ').map(Number);

  computers[parent].push(child);
}

const dfs = (start) => {
  const stack = [start];
  const visited = Array.from({ length: N + 1 }, () => false);
  let count = 0;

  visited[start] = true;

  while (stack.length) {
    const now = stack.pop();

    for (let i = 0; i < computers[now].length; i++) {
      const move = computers[now][i];

      if (!visited[move]) {
        stack.push(move);
        visited[move] = true;
        count++;
      }
    }
  }

  return count;
};

const find = () => {
  const max = Math.max(...count);
  const result = [];

  for (let i = 1; i <= N; i++) {
    if (max === count[i]) result.push(i);
  }

  return result;
};

for (let i = 1; i <= N; i++) count[i] = dfs(i);

console.log(find().join(' '));
