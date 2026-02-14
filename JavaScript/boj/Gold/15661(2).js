const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const ability = Array.from({ length: N }, () => new Array(N).fill(0));
let result = Infinity;

for (let i = 0; i < N; i++) {
  const S = input[i + 1].split(' ').map(Number);

  for (let j = 0; j < N; j++) ability[i][j] = S[j];
}

for (let mask = 1; mask < (1 << N) - 1; mask++) {
  let startTeam = 0;
  let linkTeam = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (mask & (1 << i) && mask & (1 << j)) {
        startTeam += ability[i][j] + ability[j][i];
      }

      if (!(mask & (1 << i)) && !(mask & (1 << j))) {
        linkTeam += ability[i][j] + ability[j][i];
      }
    }
  }

  result = Math.min(result, Math.abs(startTeam - linkTeam));
}

console.log(result);
