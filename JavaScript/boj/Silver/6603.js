const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
const sequence = [];

const dfs = (depth, visited, start, k, arr) => {
  if (depth === 6) {
    result.push(sequence.join(' '));
    return;
  }

  for (let i = start; i < k; i++) {
    if (!visited[i]) {
      visited[i] = true;
      sequence.push(arr[i]);
      dfs(depth + 1, visited, i + 1, k, arr);
      sequence.pop();
      visited[i] = false;
    }
  }
};

for (let i = 0; i < input.length - 1; i++) {
  const testCase = input[i].split(' ').map(Number);
  const k = testCase.shift();
  const visited = new Array(k).fill(false);

  dfs(0, visited, 0, k, testCase);
  result.push('');
}

console.log(result.join('\n'));
