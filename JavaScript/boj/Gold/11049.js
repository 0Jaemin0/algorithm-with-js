const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const matrices = [];
const dp = Array.from({ length: N }, () => new Array(N).fill(Infinity));

for (let i = 1; i <= N; i++) {
  const [r, c] = input[i].split(' ').map(Number);

  matrices.push([r, c]);
  dp[i - 1][i - 1] = 0;
}

for (let i = 0; i < N - 1; i++) {
  for (let row = 0; row < N - 1 - i; row++) {
    let col = row + 1 + i;

    for (let j = row; j < col; j++) {
      dp[row][col] = Math.min(
        dp[row][col],
        dp[row][j] +
          dp[j + 1][col] +
          matrices[row][0] * matrices[j][1] * matrices[col][1]
      );
    }
  }
}

console.log(dp[0][N - 1]);
