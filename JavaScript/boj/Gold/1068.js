const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const node = input[1].split(' ').map(Number);
const remove = +input[2];
let count = 0;
const stack = [];
const tree = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  if (node[i] !== -1) tree[node[i]].push(i);
  else stack.push(i);
}

while (stack.length) {
  const now = stack.pop();

  if (now === remove) break;
  else if (tree[now].length === 1 && tree[now][0] === remove) {
    count++;
    break;
  }

  tree[now].forEach((n) => {
    if (n !== remove) {
      if (
        tree[n].length === 0 ||
        (tree[n].length === 1 && tree[n][0] === remove)
      )
        count++;
      else stack.push(n);
    }
  });
}

console.log(count);
