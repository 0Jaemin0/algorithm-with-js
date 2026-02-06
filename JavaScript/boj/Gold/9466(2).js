const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const result = [];

const dfs = (start, numbers, visited, finished) => {
  visited[start] = true;
  const move = numbers[start];
  let count = 0;

  if (!visited[move]) count += dfs(move, numbers, visited, finished);
  else if (!finished[move]) {
    count++;

    for (let i = move; i !== start; i = numbers[i]) count++;
  }

  finished[start] = true;

  return count;
};

for (let i = 0, idx = 1; i < T; i++) {
  const n = +input[idx++];
  const numbers = [0, ...input[idx++].split(' ').map(Number)];
  const visited = Array.from({ length: n + 1 }, () => false);
  const finished = Array.from({ length: n + 1 }, () => false);
  let count = n;

  for (let j = 1; j <= n; j++) {
    if (!visited[j]) count -= dfs(j, numbers, visited, finished);
  }

  result.push(count);
}

console.log(result.join('\n'));
