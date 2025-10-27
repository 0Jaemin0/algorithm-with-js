const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const tree = Array.from({ length: +N + 1 }, () => []);
const result = new Array(+N + 1);
const visited = Array.from({ length: +N + 1 }, () => false);
const stack = [1];
visited[1] = true;

for (let i = 0; i < input.length; i++) {
  const [v1, v2] = input[i].split(' ').map(Number);

  tree[v1].push(v2);
  tree[v2].push(v1);
}

while (stack.length) {
  const now = stack.pop();

  tree[now].forEach((v) => {
    if (!visited[v]) {
      stack.push(v);
      result[v] = now;
      visited[v] = true;
    }
  });
}

console.log(result.slice(2).join('\n'));
