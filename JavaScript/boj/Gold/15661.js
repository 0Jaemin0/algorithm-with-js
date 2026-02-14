const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const ability = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const visited = Array.from({ length: N + 1 }, () => false);
let result = Infinity;

for (let i = 1; i <= N; i++) {
  const S = input[i].split(' ').map(Number);

  for (let j = 0; j < N; j++) ability[i][j + 1] = S[j];
}

const calculate = () => {
  let startTeam = 0;
  let linkTeam = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      if (visited[i] && visited[j]) startTeam += ability[i][j] + ability[j][i];
      if (!visited[i] && !visited[j]) linkTeam += ability[i][j] + ability[j][i];
    }
  }

  return Math.abs(startTeam - linkTeam);
};

const dfs = (count) => {
  if (count === N) {
    result = Math.min(result, calculate());

    return;
  }

  visited[count] = true;
  dfs(count + 1);

  visited[count] = false;
  dfs(count + 1);
};

dfs(0);

console.log(result);
