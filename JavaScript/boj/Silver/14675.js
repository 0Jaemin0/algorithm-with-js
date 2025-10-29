const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const tree = Array.from({ length: N + 1 }, () => []);
const result = [];

for (let i = 0; i < N - 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  tree[a].push(b);
  tree[b].push(a);
}

for (let i = 0; i < +input[N - 1]; i++) {
  const [t, k] = input[i + N].split(' ').map(Number);

  if ((t == 1 && tree[k].length > 1) || t == 2) {
    result.push('yes');
  } else result.push('no');
}

console.log(result.join('\n'));
