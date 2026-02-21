const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const ground = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
let result = Infinity;

for (let i = 1; i <= N; i++) ground.push(input[i].split(' ').map(Number));

const isConflict = (x, y) => {
  if (visited[x][y]) return true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (visited[nx][ny]) return true;
  }

  return false;
};

const getSum = (x, y) => {
  let sum = ground[x][y];
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    visited[nx][ny] = true;
    sum += ground[nx][ny];
  }

  return sum;
};

const removeFlower = (x, y) => {
  visited[x][y] = false;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    visited[nx][ny] = false;
  }
};

const dfs = (count, sum) => {
  if (sum >= result) return;

  if (count === 3) {
    result = Math.min(result, sum);

    return;
  }

  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      if (!isConflict(i, j)) {
        const cost = getSum(i, j);
        dfs(count + 1, sum + cost);
        removeFlower(i, j);
      }
    }
  }
};

dfs(0, 0);

console.log(result);
