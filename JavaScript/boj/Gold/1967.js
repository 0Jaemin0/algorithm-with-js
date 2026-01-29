const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const tree = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  const [parent, child, weight] = input[i].split(' ').map(Number);

  tree[parent].push([child, weight]);
  tree[child].push([parent, weight]);
}

const dfs = (start) => {
  const stack = [[start, 0]];
  const visited = Array.from({ length: n + 1 }, () => false);
  let max = 0;
  let node = 0;

  visited[start] = true;

  while (stack.length) {
    const [now, weight] = stack.pop();

    for (let i = 0; i < tree[now].length; i++) {
      const [move, moveWeight] = tree[now][i];

      if (!visited[move]) {
        stack.push([move, moveWeight + weight]);
        visited[move] = true;

        if (max < moveWeight + weight) {
          max = moveWeight + weight;
          node = move;
        }
      }
    }
  }

  return [node, max];
};

console.log(dfs(dfs(1)[0])[1]);
